import React, { useState, useRef } from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Joe Black',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Jim Green',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'London No. 2 Lake Park',
	},
];

export const getColumnSearchProps = (
	dataIndex,
	searchInput,
	sortedState,
	setSortedState,
	sorters
) => {
	const handleSearch = (selectedKeys, confirm) => {
		confirm();
		setSortedState({
			searchText: selectedKeys[0],
			searchedColumn: dataIndex,
		});
	};

	const deepFind = (obj, path)  => {
		if (path.includes('.')) {
			var paths = path.split('.'),
				current = obj,
				i;

			for (i = 0; i < paths.length; ++i) {
				if (Array.isArray(current[paths[i]])) {
					if (current[paths[i]][0] == undefined) {
						return 'N/A';
					} else {
						current = current[paths[i]][0];
					}
				} else {
					if (current[paths[i]] == undefined) {
						return 'N/A';
					} else {
						current = current[paths[i]];
					}
				}
			}
			return current;
		} else {
			return obj[path];
		}
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSortedState({ ...sortedState, searchText: '' });
	};

	const handleRender = (text) => {
		return <>{text ? text : text}</>;
	};

	return {
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters,
		} ) => (
			<div style={{}}>
				<Input
					ref={searchInput}
					placeholder={'Buscar'}
					value={selectedKeys[0]}
					onChange={(e) =>
						setSelectedKeys(e.target.value ? [e.target.value] : [])
					}
					onPressEnter={() => handleSearch(selectedKeys, confirm)}
					style={{ width: 188, marginBottom: 8, display: 'block' }}
					onFocus={(e) => e.target.select()}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm)}
						icon={<SearchOutlined />}
						size="small"
						className="search-btn search-btn__primary"
						style={{ width: 90 }}
					/>
					<Button
						onClick={() => handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
						className="search-btn search-btn__secondary"
						icon={<SearchOutlined className="icon-gray-hover " />}
					/>
				</Space>
			</div>
		),
		filterIcon: (filtered) => (
			<SearchOutlined
				style={{ color: filtered ? 'var(--primary)' : undefined }}
			/>
		),
		onFilter: (value, record) =>
			deepFind(record, dataIndex)
				? deepFind(record, dataIndex)
						.toString()
						.toLowerCase()
						.includes(value.toLowerCase())
				: '',
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput?.current.focus(), 50);
			}
		},
		render: (record) =>
			sortedState.searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{
						backgroundColor: '#ff9900d7',
						padding: 0,
					}}
					searchWords={[sortedState.searchText]}
					autoEscape
					textToHighlight={
						String(record)
					}
				/>
			) : (
				handleRender(record)
			),
		sortOrder: (sorters || {})?.columnKey === dataIndex && sorters?.order,
		sortDirections: ['descend', 'ascend', 'descend'],
		align: 'center',
	};
};
export const MyTable = (props) => {
	const [sortedState, setSortedState] = useState({
		searchText: [''],
		searchedColumn: '',
	});

	const [{ sorters }, setCurrentFilters] = useState({});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSortedState({
			searchText: selectedKeys,
			searchedColumn: dataIndex,
		});
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSortedState({
			searchText: [''],
		});
	};

	const searchInput = useRef(null);
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: '30%',
			...getColumnSearchProps(
				'name',
				searchInput,
				sortedState,
				setSortedState,
				sorters
			),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			width: '30%',
			...getColumnSearchProps(
				'age',
				searchInput,
				sortedState,
				setSortedState,
				sorters
			),

		},
		{
			title: 'address',
			dataIndex: 'address',
			key: 'address',
			width: '30%',
			...getColumnSearchProps(
				'address',
				searchInput,
				sortedState,
				setSortedState,
				sorters
			),
		}
	];

	return <Table columns={columns} dataSource={data} />;
};

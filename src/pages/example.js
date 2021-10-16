import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MyTable } from '../components/table';
import { AlertExample } from '../components/alert';
import { ExampleButtons } from '../components/buttons';

import useMount from 'react-use/lib/useMount';

import { withPrefix } from 'gatsby';


const Example = (props) => {
	const contentRef = useRef(null);

	useMount(() => {
		console.log('props:',props);
	});

	return (
		<>
			<MyTable/>
			<AlertExample/>
			<ExampleButtons/>
		</>
	);

}
export default Example;

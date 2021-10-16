import React, {useMemo} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import ImgZoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'

export default function ImageZoom({src, alt, width, ...rest}) {
    const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

    const match = useMemo(
        () => data.images.edges.find(({node}) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const {node: {publicURL} = {}} = match;

    const iw = width ? width : '800px';
    return (<ImgZoom
        image={{
            src: publicURL,
            className: 'img',
            alt: alt,
            style: {width: iw}
        }}
        zoomImage={{
            src: publicURL,
            alt: alt
        }}
        {...rest}
    />);
};

ImageZoom.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
};
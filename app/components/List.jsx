import React from 'react';

import Layout from './Layout';

function List(props) {
  return (
    <div>
      <Layout />
      <ul>
        {props.links.map(link =>
          <li key={link.id}>
            <span>&#43;</span>
            <label htmlFor="checkbox_id">
              <input type="checkbox" id="checkbox_id" />
              <a href={link.link}>{link.text}</a>
            </label>
          </li>,
        )}
      </ul>
    </div>
  );
}

List.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      text: React.PropTypes.string,
      link: React.PropTypes.string,
    }),
  ).isRequired,
};

export default List;

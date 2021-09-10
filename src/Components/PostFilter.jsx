import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return ( 
    <div className="">
      <hr style={{ margin: "15px 0", border: "1px solid teal" }} />
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={e=> setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        defaultValue = 'sort by'
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          {value: 'title', name: 'by title'},
          {value: 'body', name: 'by description'}
        ]}
      />
    </div>
   );
}
 
export default PostFilter;
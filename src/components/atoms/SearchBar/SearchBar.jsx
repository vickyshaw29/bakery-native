import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = ({value,onChange}) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChange}
      value={value}
      style={{borderRadius:30}}
    />
  );
};

export default SearchBar;
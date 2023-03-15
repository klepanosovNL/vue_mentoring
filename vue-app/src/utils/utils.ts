import _ from 'lodash';

const filterBySearch = (data, searchValue) => {
  return data.filter((dataItem) => (
    Array.isArray(dataItem[searchValue])
      ? dataItem[searchValue].includes(searchValue)
      : _.startsWith(dataItem[searchValue].toLowerCase(), searchValue.trim().toLowerCase())
  ));
};

export default filterBySearch;

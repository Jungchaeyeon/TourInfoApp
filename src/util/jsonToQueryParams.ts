export const jsonToQueryParams = (json: any) => {
  let queryParam = '?';

  for (let key in json) {
    queryParam += encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
  }

  return queryParam.slice(0, -1);
};
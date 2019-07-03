import request from 'umi-request';

export function getData() {
  return request('/api/BLOCK_NAME/data');
}

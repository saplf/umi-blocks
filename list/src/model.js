import { getData } from './service';

export default {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    data: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const { data } = yield call(getData);
      yield put({
        type: 'save',
        payload: { data },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

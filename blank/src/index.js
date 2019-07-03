import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './style.less';

@connect(({ BLOCK_NAME_CAMEL_CASE }) => BLOCK_NAME_CAMEL_CASE)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'BLOCK_NAME_CAMEL_CASE/fetch',
    });
  }

  render() {
    const { text } = this.props;
    return (
      <PageHeaderWrapper className={styles.container}>
        <Button>{text}</Button>
      </PageHeaderWrapper>
    );
  }
}

export default Page;

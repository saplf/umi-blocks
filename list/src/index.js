import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Icon } from 'antd';
import ListPage from '@/components/ListPage';
import FormItem from '@/components/FormItem';

import styles from './style.less';

const columns = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '大小',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '操作',
    key: 'action',
    render: () => <Button type="link" size="small">设置</Button>,
  },
];

@connect(({ BLOCK_NAME_CAMEL_CASE }) => BLOCK_NAME_CAMEL_CASE)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'BLOCK_NAME_CAMEL_CASE/fetch',
    });
  }

  renderFilterSection = () => (
    <>
      <FormItem label="12" />
      <FormItem label="13" />
      <FormItem label="14" />
    </>
  )

  renderAddonSection = () => (
    <Button type="primary"><Icon type="plus" />新增</Button>
  )

  render() {
    const { data } = this.props;

    return (
      <div className={styles.container}>
        <ListPage
          rowKey="id"
          dataSource={data}
          columns={columns}
          filterRender={this.renderFilterSection()}
          addonRender={this.renderAddonSection()}
        />
      </div>
    );
  }
}

export default Page;

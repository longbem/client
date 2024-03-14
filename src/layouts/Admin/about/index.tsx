import React, { useState } from "react";
import styles from "./index.module.scss";
import { Button, Form, Input, Row, notification } from "antd";
import { EditTwoTone } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { requestGetAbout, requestUpdateAbout } from "@/services/admin/about";
import Loading from "@/components/Loading";

const AdminAbout = () => {
  const [form] = Form.useForm();
  const [isEdit, setIsEdit] = useState<boolean>(true);

  const getAboutInfo = useRequest(requestGetAbout, {
    onSuccess: (res) => {
      form.setFieldsValue({
        company_name: res?.data?.company_name,
        address: res?.data?.address,
        phone_number: res?.data?.phone_number,
        email: res?.data?.email,
      });
    },
    onError: (err) => {
      console.log("err =>", err);
    },
  });

  const updateAbout = useRequest(requestUpdateAbout, {
    onSuccess: (res) => {
      setIsEdit(true);
      notification.success({
        message: res?.data?.message,
      });
    },
    onError: (err) => {
      notification.error({
        message: "Cập nhật lỗi.",
      });
    },
    manual: true,
    debounceWait: 250,
  });

  const onSubmit = (value: any) => {
    updateAbout.run({ ...value });
  };

  const onClickEdit = () => {
    setIsEdit(false);
  };

  const onClickCancel = () => {
    setIsEdit(true);
    getAboutInfo.refresh();
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxForm}>
        <div className={styles.boxLabel}>
          <h1 className={styles.labelInfo}>Thông tin liên hệ</h1>
          <Button className={styles.btnEdit} onClick={onClickEdit}>
            <EditTwoTone onClick={onClickEdit} size={50} rev={undefined} />
          </Button>
        </div>
        <Form
          form={form}
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onFinish={onSubmit}
        >
          <Form.Item label="Tên công ty" name="company_name">
            <Input placeholder="Tên công ty" disabled={isEdit} />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <Input placeholder="Địa chỉ" disabled={isEdit} />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone_number">
            <Input placeholder="Số điện thoại" disabled={isEdit} />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" disabled={isEdit} />
          </Form.Item>

          <Row justify="center">
            <div className={styles.boxButton}>
              <Form.Item>
                <Button
                  className={styles.btnCancel}
                  disabled={isEdit}
                  onClick={onClickCancel}
                >
                  Huỷ
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  className={styles.btnSave}
                  disabled={isEdit}
                  htmlType="submit"
                >
                  Lưu
                </Button>
              </Form.Item>
            </div>
          </Row>
        </Form>
      </div>
      <Loading loading={getAboutInfo.loading || updateAbout.loading} />
    </div>
  );
};

export default AdminAbout;

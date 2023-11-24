import React, { useMemo } from "react";
import { useRequest } from "ahooks";
import { Button, Form, Input, Row, notification } from "antd";
import styles from "./index.module.scss";
import { setCookie } from "cookies-next";
import { loginAdmin } from "@/services/admin";
import { useRouter } from "next/router";

const AdminLogin = () => {
  const [form] = Form.useForm();
  const route = useRouter();

  const login = useRequest(loginAdmin, {
    manual: true,
    debounceWait: 250,
    onSuccess: (res) => {
      setCookie("accessToken", res.data.accessToken);
      form.resetFields();
      route.push("admin/dashboard");
      notification.success({
        message: "Đăng nhập thành công!",
      });
    },
    onError: (err: any) => {
      switch (err?.response?.data?.status) {
        case "WRONG_CREDENTIALS":
          notification.error({
            message: err?.response?.data?.message,
          });
          break;
        default:
          notification.error({
            message: "Đăng nhập thất bại!",
          });
          break;
      }
    },
  });

  const onSubmit = async (values: any) => {
    if (values.username && values.password) {
      login.run({
        username: values.username,
        password: values.password,
      });
    } else {
      notification.error({
        message: "Nhập thông tin đi bạn êi!!!",
      });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formLogin}>
        <p
          style={{
            fontWeight: 600,
            fontSize: "20px",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          ADMIN
        </p>
        <Form
          onFinish={(values) => onSubmit(values)}
          form={form}
          labelCol={{
            span: 7,
          }}
          wrapperCol={{
            span: 18,
          }}
          labelAlign="left"
        >
          <Form.Item label="Tên đăng nhập" name="username">
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item label="Mật khẩu" name="password">
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Row justify="center">
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;

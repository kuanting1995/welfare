import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import logo from "./Image/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReactToPrint from "react-to-print";
const OpForm = () => {
  // 改變標頭檔
  useEffect(() => {
    document.title = "社服開案資料";
  });

  const validationSchema = Yup.object().shape({});

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState, setValue } = useForm(formOptions);
  const { errors } = formState;

  // 2.表單送出後會跳視窗
  function onSubmit(data) {
    toast("SUCCESS!!\n表單已送出\n:-)");
    return false;
  }

  // 5.列印
  const componentRef = useRef();

  return (
    <>
      <body>
        <ToastContainer />
        <div className="container my-4 py-5" style={{ maxWidth: "1056px" }}>
          {/* 列印範圍 */}
          <div className="printZone" ref={componentRef}>
            {/* <!-- 表單抬頭 --> */}
            <div className="form-title d-flex justify-content-between">
              <div className="col-auto align-self-end">
                <img
                  style={{ width: "80px" }}
                  className="logo"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <div className="col-auto align-self-center">
                <h3 className="">醫療財團法人辜公亮基金會和信治癌中心醫院</h3>
                <h7>KOO FOUNDATION SUM YAT-SEN CANCER CENTER</h7>
              </div>
              <div className="mx-4"></div>
              <div className="col-1 align-self-end"></div>
            </div>

            {/* <!-- 表單名稱 --> */}
            <div className="form-name pt-5 d-flex flex-row justify-content-center">
              <h2>社會服務室開案資料</h2>
            </div>

            {/* <!-- 正式FORM --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="row w-100 py-3 px-1"
                style={{ backgroundColor: "lightgray" }}
              >
                {/* <!--第1行-1 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="col-5 align-self-center">補助姓名</div>
                  <div>
                    <input
                      name="name"
                      type="text"
                      {...register("name")}
                      className={`form-control me-2 ${
                        errors.name ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.name?.message}
                    </div>
                  </div>
                </div>

                {/* <!-- 第1行-2 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="me-1"></div>
                  <div className="theader col-4 text-center align-self-center">
                    病例號
                  </div>
                  <div>
                    <input
                      type="text"
                      name="medRecNum"
                      {...register("medRecNum")}
                      className={`form-control me-2 ${
                        errors.medRecNum ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.medRecNum?.message}
                    </div>
                  </div>
                </div>
                {/* <!-- 第1行-3 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="theader col-3 text-center align-self-center">
                    補助範圍
                  </div>
                  <div>
                    <input
                      type="text"
                      name="grantRange"
                      {...register("grantRange")}
                      className={`form-control me-2 ${
                        errors.grantRange ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.grantRange?.message}
                    </div>
                  </div>
                  <div className="mx-3"></div>
                </div>

                {/* <!--第2行-1 --> */}
                <div className="d-flex justify-content-between col-md-4 my-1">
                  <div className="col-5 align-self-center">案號</div>
                  <div>
                    <input
                      type="text"
                      name="caseNum"
                      {...register("caseNum")}
                      className={`form-control me-2 ${
                        errors.caseNum ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.caseNum?.message}
                    </div>
                  </div>
                </div>
                {/* <!-- 第2行-2 --> */}
                <div className="d-flex justify-content-left col-md-8 ">
                  <div className="mx-2"></div>
                  <div className="col-auto align-self-center">補助期間</div>
                  <div className="mx-3"></div>
                  <div className="col-2 flex-fill align-self-center">
                    <input
                      name="grantStartDate"
                      type="date"
                      {...register("grantStartDate")}
                      className={`form-control py-1 ${
                        errors.grantStartDate ? "is-invalid" : ""
                      }`}
                      //位有驗證錯誤，則結果為 "is-invalid"；否則，結果為空字符符串
                    />
                    <div className="invalid-feedback">
                      {errors.grantStartDate?.message}
                    </div>
                  </div>
                  <div className="mx-3"></div>
                  <div className="col-auto align-self-center">至</div>
                  <div className="mx-2"></div>
                  <div className="col-2 flex-fill align-self-center">
                    <input
                      type="date"
                      name="grantEndDate"
                      {...register("grantEndDate")}
                      className={`form-control py-1 ${
                        errors.grantEndDate ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.grantEndDate?.message}
                    </div>
                  </div>
                  <div className="mx-3"></div>
                </div>

                {/* <!-- 第3行 --> */}
                <div className="d-flex flex-row">
                  <div className="d-flex flex-row col-md-6">
                    <div className="col-auto me-5 align-self-center">
                      扣除項目
                    </div>
                    <div className="mx-1"></div>
                    <select
                      className="form-select my-2 mx-2"
                      name="level"
                      id="level"
                    >
                      <option value="1">低收入戶補助~北市、新北市政府</option>
                      <option value="2">私人保險理賠</option>
                      <option value="3">自費藥物</option>
                      <option value="4">醫材</option>
                      <option value="5">其他</option>
                      <option value="" selected disabled hidden>
                        請選項目
                      </option>
                    </select>
                  </div>
                  <div className="d-flex flex-row col-md-6">
                    <div className="mx-2"></div>
                    <div className="col-3 align-self-center">扣除項目金額</div>
                    <input
                      className="form-control me-2 my-2"
                      type="text"
                      name="mobile"
                      id="mobile"
                      placeholder="$"
                    />
                  </div>
                </div>

                {/* <!--第4行-1 --> */}
                <div className="d-flex justify-content-left col-md-5">
                  <div className="col-4 align-self-center">補助項目1</div>
                  <div className="flex-fill">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>請選項目</option>
                      <option value="1">腫內基金</option>
                      <option value="2">病房差額補助</option>
                      <option value="3">微創手術補助</option>
                      <option value="4">微創手術補助</option>
                      <option value="5">詠珂基金</option>
                      <option value="6">乳癌手術凝合劑專案</option>
                      <option value="4">肝癌藥物基金</option>
                      <option value="8">兒科緊急救助基金</option>
                      <option value="9">其他</option>
                    </select>
                  </div>
                </div>
                {/* <!-- 第4行-2 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="theader col-5 align-self-center">
                    基金專戶號碼
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                    />
                    <div className="form-text"></div>
                  </div>
                </div>
                {/* <!-- 第4行-3 --> */}
                <div className="d-flex justify-content-left col-md-3">
                  <div className="theader col-4 align-self-center">
                    補助金額
                  </div>
                  <div className="flex-fill">
                    <input
                      className="form-control me-2"
                      type="text"
                      name="valueE"
                      placeholder="$E"
                    />
                    <div className="form-text"></div>
                  </div>
                </div>

                {/* <!--第5行-1 --> */}
                <div className="d-flex justify-content-left col-md-5">
                  <div className="col-4 align-self-center">補助項目2</div>
                  <div className="flex-fill">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>請選項目</option>
                      <option value="1">醫療補助</option>
                      <option value="2">詠珂基金</option>
                      <option value="3">營養品補助</option>
                      <option value="4">其他</option>
                    </select>
                  </div>
                </div>
                {/* <!-- 第5行-2 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="theader col-5 align-self-center">
                    基金專戶號碼
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                    />
                    <div className="form-text"></div>
                  </div>
                </div>
                {/* <!-- 第5行-3 --> */}
                <div className="d-flex justify-content-between col-md-3">
                  <div className="theader col-4 align-self-center">
                    補助比率
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="%"
                    />
                  </div>
                </div>
                {/* <!--第6行-1 --> */}
                <div className="d-flex justify-content-left col-md-5">
                  <div className="col-4 align-self-center">補助項目3</div>
                  <div className="flex-fill">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>請選項目</option>
                      <option value="1">生活補助□萬（限額）</option>
                      <option value="2">大乘菩提□萬（限額）</option>
                      <option value="3">精英宿舍補助（限額）</option>
                      <option value="4">其他</option>
                    </select>
                  </div>
                </div>
                {/* <!-- 第6行-2 --> */}
                <div className="d-flex justify-content-between col-md-4">
                  <div className="theader col-5 align-self-center">
                    基金專戶號碼
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                    />
                    <div className="form-text"></div>
                  </div>
                </div>
                {/* <!-- 第6行-3 --> */}
                <div className="d-flex justify-content-between col-md-3">
                  <div className="theader col-4 align-self-center">
                    補助金額
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="$"
                    />
                    <div className="form-text"></div>
                  </div>
                </div>

                {/* <!--第7行-1 --> */}
                <div className="d-flex justify-content-left col-md-4 pt-1">
                  <div className="col-auto align-self-center">通過日期</div>
                  <div className="mx-4 px-2"></div>
                  <div className="align-self-center flex-fill">
                    <input
                      style={{ width: "290" }}
                      type="date"
                      name="passDate"
                      {...register("passDate")}
                      className={`form-control py-1 ${
                        errors.passDate ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* <!-- 第7行-2 --> */}
                <div className="d-flex justify-content-between col-md-4 pt-1">
                  <div className="theader col-3 text-center align-self-center">
                    {" "}
                    經辦/主責社工師
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                {/* <!-- 第7行-3 --> */}
                <div className="d-flex justify-content-between col-md-4 pt-1">
                  <div className="theader col-3 text-center align-self-center">
                    覆核/主任
                  </div>
                  <div>
                    <input
                      className="form-control me-2"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>

                {/* submitBTN */}
                <div className="d-flex flex-row-reverse mt-3 ">
                  <button type="submit" className="btn btn-logo me-4">
                    送出
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* 列印BTN */}
        {/* <div className="d-flex flex-row-reverse pt-1 me-3">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-dark">Print / Download</button>
            )}
            content={() => componentRef.current}
          />
        </div> */}
      </body>
    </>
  );
};

export default OpForm;

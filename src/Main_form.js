import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import logo from "./Image/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import SignatureCanvas from "react-signature-canvas";

const Main_form = () => {
  // 表單驗證
  //up.object()：創建一個 Yup 物件驗證器的方法
  //shape()：接受一個物件，該物件定義了每個欄位的驗證規則
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("姓名未填寫"),
    formCreateDate: Yup.string()
      .required("開單日期未填")
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    treatmentStartDate: Yup.string()
      .required("就醫起始日未填")
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    treatmentEndDate: Yup.string()
      .required("就醫結束日未填")
      .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    medRecNum: Yup.string().required("病例號未填"),
    caseNum: Yup.string().required("案號未填").length(6, "案號為6個數字"),
    departM: Yup.string().required("科別未填").min(2, "字數太少"),
    Doctor: Yup.string().required("醫生未填寫"),
    valueA: Yup.string().required("金額未填寫").max(8, "金額異常，過大"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  // 表單送出後會跳視窗
  function onSubmit(data) {
    // display form data on success
    // toast("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    toast("SUCCESS!!\n表單已送出\n:-)");
    return false;
  }

  // 計算F欄
  const [valueA, setvalueA] = useState(0);
  const [valueE, setvalueE] = useState(0);
  const [valueF, setvalueF] = useState(0);

  useEffect(() => {
    setvalueF(valueA - valueE);
  }, [valueA, valueE]);

  const handleInputChangeA = (e) => {
    setvalueA(e.target.value);
  };

  const handleInputChangeE = (e) => {
    setvalueE(e.target.value);
  };

  // 電子簽
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClear = () => {
    sign.clear();
    setUrl("");
  };
  const handleGenerate = () => {
    setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
  };

  // 列印
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <body>
        <ToastContainer />
        <div className="container my-4 py-5" style={{ maxWidth: "1056px" }}>
          {/* <!-- 表單抬頭 --> */}
          <div className="form-title d-flex justify-content-between">
            <div className="col-2 align-self-end">
              <img
                style={{ width: "100px" }}
                className="logo"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="col-8 align-self-end">
              <h3 className="">醫療財團法人辜公亮基金會和信治癌中心醫院</h3>
              <h7>KOO FOUNDATION SUM YAT-SEN CANCER CENTER</h7>
            </div>
            <div className="col-1"></div>
            <div className="col-1 align-self-end">
              <h4 className="dele">作廢</h4>
            </div>
          </div>
          {/* <!-- 表單名稱 --> */}
          <div className="form-name py-5">
            <div className="d-flex flex-row justify-content-between">
              <h2 className="align-self-center text-end col-auto">
                醫療費用補助單
              </h2>
              <div className="d-flex flex-row col-md-6 align-self-center me-3">
                <div className="col-6 align-self-center text-end me-3">
                  <h7>開單日期</h7>
                </div>
                <input
                  name="formCreateDate"
                  type="date"
                  {...register("formCreateDate")}
                  className={`form-control ${
                    errors.formCreateDate ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.formCreateDate?.message}
                  {/* 如果 errors.formCreateDate 存在，返回 errors.formCreateDate.message；否則，返回 undefined。

如果你不使用 ?.，而直接寫成 errors.formCreateDate.message，那麼當 errors.formCreateDate 不存在（也就是說，沒有驗證錯誤）時，將會拋出一個錯誤，因為你嘗試訪問 undefined 的 message 屬性。使用 ?. 可以避免這種錯誤。

這是一個在 ES2020 中添加到 JavaScript 的新特性。

 */}
                </div>
              </div>
              <div className="d-flex flex-row col-md-2 align-self-center">
                <div className="align-self-center text-end me-2 col-auto">
                  <h7>No.</h7>
                </div>
                <input
                  className="form-control"
                  type="number"
                  name=""
                  placeholder="2023054835"
                />
                <div className="me-3"></div>
              </div>
            </div>
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
                  <div className="invalid-feedback">{errors.name?.message}</div>
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
                  案號
                </div>
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
                <div className="mx-3"></div>
              </div>

              {/* <!--第2行-1 --> */}
              <div className="d-flex justify-content-between col-md-4">
                <div className="col-5 align-self-center">看診科別</div>
                <div>
                  <input
                    type="text"
                    name="departM"
                    {...register("departM")}
                    className={`form-control me-2 ${
                      errors.departM ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.departM?.message}
                  </div>
                </div>
              </div>
              {/* <!-- 第2行-2 --> */}
              <div className="d-flex justify-content-between col-md-4">
                <div className="me-1"></div>
                <div className="theader col-4 text-center align-self-center">
                  醫生
                  <span className="me-1"></span>
                </div>
                <div>
                  <input
                    type="text"
                    name="Doctor"
                    {...register("Doctor")}
                    className={`form-control me-2 ${
                      errors.Doctor ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.Doctor?.message}
                  </div>
                </div>
              </div>
              {/* <!-- 第2行-3 --> */}
              <div className="d-flex justify-content-between col-md-4"></div>

              {/* <!--第3行-1 --> */}
              <div className="d-flex justify-content-between col-md-4 me-1">
                <div className="col-5 align-self-center">門診/住院</div>
                <div>
                  <input className="form-control" type="text" name="" />
                  <div className="form-text"></div>
                </div>
              </div>
              {/* <!-- 第3行-2 --> */}
              <div className="d-flex justify-content-left col-md-6">
                <div className="me-4"></div>
                <div className="theader col-auto text-center align-self-center">
                  門診批假序號/住院號
                </div>
                <span className="me-4"></span>
                <div>
                  <input className="form-control" type="text" name="" />
                  <div className="form-text"></div>
                </div>
              </div>
              <div className="d-flex justify-content-between col-md-1"></div>
              {/* <!--第4行-1 --> */}
              <div className="d-flex justify-content-left col-md-5">
                <div className="col-4 align-self-center">就醫日期</div>
                <div className="flex-fill">
                  <input
                    name="treatmentStartDate"
                    type="date"
                    {...register("treatmentStartDate")}
                    className={`form-control ${
                      errors.treatmentStartDate ? "is-invalid" : ""
                    }`}
                    //位有驗證錯誤，則結果為 "is-invalid"；否則，結果為空字符符串
                  />
                  <div className="invalid-feedback">
                    {errors.treatmentStartDate?.message}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-left col-md-4">
                <div className="col-2 align-self-center">至</div>
                <div className="flex-fill">
                  <input
                    type="date"
                    name="treatmentEndDate"
                    {...register("treatmentEndDate")}
                    className={`form-control px-5 ${
                      errors.treatmentEndDate ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.treatmentEndDate?.message}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-left col-md-4"></div>
              {/* <!-- 第5行 --> */}
              <div className="d-flex justify-content-left col-md-12 pt-1">
                <div className="theader col-auto me-4 align-self-center">
                  醫療費用金額
                </div>
                <div className="tbb col-9  flex-fill mx-2">
                  <input
                    {...register("valueA")}
                    className={`form-control px-5 ${
                      errors.valueA ? "is-invalid" : ""
                    }`}
                    type="text"
                    name="valueA"
                    placeholder="$A"
                    onChange={handleInputChangeA}
                  />
                  <div className="invalid-feedback">
                    {errors.valueA?.message}
                  </div>
                </div>
              </div>

              {/* <!-- 第6行 --> */}
              <div className="d-flex flex-row">
                <div className="d-flex flex-row col-md-6">
                  <div className="col-auto me-5 align-self-center">
                    扣除項目
                  </div>
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

              {/* <!--第7行-1 --> */}
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
                    <option value="7">肝癌藥物基金</option>
                    <option value="8">兒科緊急救助基金</option>
                    <option value="9">其他</option>
                  </select>
                </div>
              </div>
              {/* <!-- 第7行-2 --> */}
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
              {/* <!-- 第7行-3 --> */}
              <div className="d-flex justify-content-left col-md-3">
                <div className="theader col-4 align-self-center">補助金額</div>
                <div className="flex-fill">
                  <input
                    className="form-control me-2"
                    type="text"
                    name="valueE"
                    placeholder="$E"
                    onChange={handleInputChangeE}
                  />
                  <div className="form-text"></div>
                </div>
              </div>

              {/* <!--第8行-1 --> */}
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
              {/* <!-- 第8行-2 --> */}
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
              {/* <!-- 第8行-3 --> */}
              <div className="d-flex justify-content-between col-md-3">
                <div className="theader col-4 align-self-center">補助比率</div>
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
              {/* <!--第9行-1 --> */}
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
              {/* <!-- 第9行-2 --> */}
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
              {/* <!-- 第9行-3 --> */}
              <div className="d-flex justify-content-between col-md-3">
                <div className="theader col-4 align-self-center">補助金額</div>
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
              {/* <!-- 第10行 --> */}
              <div className="d-flex justify-content-left col-md-12 ">
                <div className="theader col-auto me-5 align-self-center">
                  補助金額
                </div>
                <div className="tbb col-9  flex-fill mx-2">
                  <input
                    className="form-control"
                    type="text"
                    name="valueE"
                    placeholder="$E"
                    onChange={handleInputChangeE}
                  />
                  <div className="form-text"></div>
                </div>
              </div>

              {/* <!-- 第11行 --> */}
              <div className="d-flex justify-content-left col-md-12 ">
                <div className="theader col-auto me-5 pe-3 align-self-center">
                  自付額
                </div>
                <div className="tbb col-9  flex-fill mx-2">
                  <input
                    className="form-control"
                    type="text"
                    name="valueF"
                    placeholder="$F"
                    readOnly
                    value={valueF}
                  />
                  <div className="form-text"></div>
                </div>
              </div>

              {/* <!--第12行-1 --> */}
              <div className="d-flex justify-content-between col-md-4 pt-1">
                <div className="col-auto align-self-center">病人/家屬簽章</div>
                <div className="me-3"></div>
                <div
                  style={{
                    width: 190,
                    height: 38,
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    style={{
                      objectFit: "scale-down",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                    src={url}
                  />
                </div>
              </div>

              {/* <!-- 第12行-2 --> */}
              <div className="d-flex justify-content-between col-md-4 pt-1">
                <div className=""></div>
                <div className="theader col-4 text-center align-self-center">
                  {" "}
                  經辦
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
              {/* <!-- 第12行-3 --> */}
              <div className="d-flex justify-content-between col-md-4 pt-1">
                <div className="theader col-3 text-center align-self-center">
                  覆核
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
                <div className="mx-3"></div>
              </div>
            </div>

            {/* 功能區：電子簽,送出,列印 */}
            <div className="funZone d-flex  align-items-start justify-content-between me-3 mt-1">
              {/* 電子簽 */}
              <div className="signMain col-md-6">
                電子簽署：
                <div
                  className="signature-canvas"
                  style={{ border: "2px solid black", width: 500, height: 200 }}
                >
                  <SignatureCanvas
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas",
                    }}
                    ref={(data) => setSign(data)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleClear}
                  className="btn btn-secondary"
                >
                  清除
                </button>
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="btn btn-logo"
                >
                  確定
                </button>
              </div>
              {/* BTN-group */}
              <div className="btn-gp">
                {/* submitBTN */}
                <button type="submit" className="btn btn-logo me-1">
                  送出
                </button>

                {/* printBTN */}
                <button
                  type="button"
                  className="btn btn btn-dark me-1"
                  onClick={handlePrint}
                >
                  列印
                </button>
              </div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
};

export default Main_form;

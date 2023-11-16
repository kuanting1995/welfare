import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.css";
import logo from "./Image/logo.jpg";

const Main_form = () => {
  return (
    <>
      <body>
        <div className="container my-4 py-5">
          {/* <!-- 表單抬頭 --> */}
          <div className="d-flex justify-content-between">
            <div className="col-2 align-self-end">
              <img
                style={{ width: "100px" }}
                className="logo"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="col-8 align-self-end">
              <h3 className="">醫療財團法人辜公亮基金會和信治癌中心醫院123</h3>
              <h7>KOO FOUNDATION SUM YAT-SEN CANCER CENTER</h7>
            </div>
            <div className="col-1"></div>
            <div className="col-1 align-self-end">
              <h4>作廢</h4>
            </div>
          </div>
          {/* <!-- 表單名稱 --> */}
          <div className="py-5 me-2">
            <div className="d-flex flex-row justify-content-between">
              <h2 className="align-self-center text-end">醫療費用補助單</h2>
              <div className="d-flex flex-row col-md-6 align-self-center">
                <div className="col-6 align-self-center text-end me-3">
                  <h7>開單日期</h7>
                </div>
                <input
                  className="form-control"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="2015-01-01"
                  max="2040-12-31"
                />
              </div>
            </div>
          </div>

          {/* <!-- 正式FORM --> */}

          <div
            className="row w-100 py-3 px-1"
            style={{ backgroundColor: "lightgray" }}
          >
            {/* <!--第1行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5 align-self-center">補助姓名</div>
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

            {/* <!-- 第1行-2 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="me-1"></div>
              <div className="theader col-4 text-center align-self-center">
                病例號
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
            {/* <!-- 第1行-3 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-3 text-center align-self-center">
                案號
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

            {/* <!--第2行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5 align-self-center">看診科別</div>
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
            {/* <!-- 第2行-2 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="me-1"></div>
              <div className="theader col-4 text-center align-self-center">
                醫生
                <span className="me-1"></span>
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
            {/* <!-- 第2行-3 --> */}
            <div className="d-flex justify-content-between col-md-4"></div>

            {/* <!--第3行-1 --> */}
            <div className="d-flex justify-content-between col-md-4 me-1">
              <div className="col-5 align-self-center">門診/住院</div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
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
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
                <div className="form-text"></div>
              </div>
            </div>
            <div className="d-flex justify-content-between col-md-1"></div>
            {/* <!--第4行-1 --> */}
            <div className="d-flex justify-content-left col-md-5">
              <div className="col-4 align-self-center">就醫日期</div>
              <div className="flex-fill">
                <input
                  className="form-control px-5"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="2015-01-01"
                  max="2040-12-31"
                />
                <div className="form-text"></div>
              </div>
            </div>
            <div className="d-flex justify-content-left col-md-4">
              <div className="col-2 align-self-center">至</div>
              <div className="flex-fill">
                <input
                  className="form-control px-5"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="2015-01-01"
                  max="2040-12-31"
                />
                <div className="form-text"></div>
              </div>
            </div>
            <div className="d-flex justify-content-left col-md-4"></div>

            {/* <!-- 第5行 --> */}
            <div className="d-flex justify-content-left col-md-12 pt-1">
              <div className="theader col-auto me-3 align-self-center">
                醫療費用金額
              </div>
              <div className="tbb col-9  flex-fill mx-2">
                <input
                  className="form-control"
                  type="number"
                  name="medExpenses"
                  id="medExpenses"
                  placeholder="$"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!-- 第6行 --> */}
            <div className="d-flex flex-row">
              <div className="d-flex flex-row col-md-6">
                <div className="col-auto me-5 align-self-center">扣除項目</div>
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
                  name="name"
                  id="name"
                  placeholder="$"
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
                  name="mobile"
                  id="mobile"
                  placeholder="$"
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
                  name="mobile"
                  id="mobile"
                  placeholder="$"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!--第12行-1 --> */}
            <div className="d-flex justify-content-between col-md-4 pt-1">
              <div className="col-auto align-self-center">病人/家屬簽章</div>
              <div className="me-3"></div>
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
        </div>
      </body>
    </>
  );
};

export default Main_form;

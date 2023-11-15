import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Main_form = () => {
  return (
    <>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
        <div className="container">
          {/* <!-- 表單抬頭 --> */}
          <div className="d-flex justify-content-between">
            <div className="col-2 align-self-end">
              <h1>Logo</h1>
            </div>
            <div className="col-8 align-self-end">
              <h4 className="">醫療財團法人辜公亮基金會和信治癌中心醫院</h4>
              <h7>KOO FOUNDATION SUM YAT-SEN CANCER CENTER</h7>
            </div>
            <div className="col-1 align-self-end">
              <h4>作廢</h4>
            </div>
          </div>
          {/* <!-- 表單名稱 --> */}
          <div className="">
            <h4 className="mt-5">醫療費用補助單</h4>
            <div className="d-flex flex-row">
              <div className="d-flex flex-row col-md-6">
                <div className="col-3">開單日期</div>
                <input
                  className="form-control mx-5"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="1950-01-01"
                  max="2006-12-31"
                />
              </div>
            </div>
          </div>

          {/* <!-- 正式FORM --> */}

          <div className="row w-100" style={{ backgroundColor: "lightgray" }}>
            {/* <!--第1行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5">補助姓名</div>
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
              <div className="theader col-4">病例號</div>
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
              <div className="theader col-3">案號</div>
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

            {/* <!--第2行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5">看診科別</div>
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
              <div className="theader col-4">醫生</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5">門診/住院</div>
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
            {/* <!-- 第3行-2 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-6">門診批假序號/住院號</div>
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
            {/* <!-- 第3行-3 --> */}
            <div className="d-flex justify-content-between col-md-4"></div>

            {/* <!--第4行 --> */}
            <div className="d-flex flex-row col-md-6">
              <div className="">就醫日期</div>
              <div className="me-0">
                {" "}
                <input
                  className="form-control mx-5"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="1950-01-01"
                  max="2006-12-31"
                />
                <div className="form-text"></div>
              </div>
            </div>
            <div className="d-flex flex-row col-md-6">
              <div className="">至</div>
              <div>
                {" "}
                <input
                  className="form-control mx-5"
                  type="date"
                  name="birthday"
                  id="birthday"
                  min="1950-01-01"
                  max="2006-12-31"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!-- 第5行 --> */}
            <div className="row w-100">
              <div className="theader col-3">醫療費用總額</div>
              <div className="tbb col-9">
                <input
                  className="form-control me-2"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="$"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!-- 第6行 --> */}
            <div className="d-flex flex-row">
              <div className="d-flex flex-row col-md-6">
                <div className="col-3">扣除項目</div>
                <select className="form-select" name="level" id="level">
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
                <div className="">扣除項目金額</div>
                <input
                  className="form-control me-2"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="$"
                />
              </div>
            </div>

            {/* <!--第7行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="">補助項目1</div>
              <div>
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
              <div className="theader col-4">基金專戶號碼</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-3">補助金額</div>
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

            {/* <!--第8行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="">補助項目2</div>
              <div>
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
              <div className="theader col-4">基金專戶號碼</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-3">補助比率</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="">補助項目3</div>
              <div>
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
              <div className="theader col-4">基金專戶號碼</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-3">補助金額</div>
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
            <div className="row w-100">
              <div className="theader col-3">補助金額</div>
              <div className="tbb col-9">
                <input
                  className="form-control me-2"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="$"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!-- 第11行 --> */}
            <div className="row w-100">
              <div className="theader col-3">自付額</div>
              <div className="tbb col-9">
                <input
                  className="form-control me-2"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="$"
                />
                <div className="form-text"></div>
              </div>
            </div>

            {/* <!-- 自付額 --> */}
            <div className="d-flex justify-content-between">
              <div className="col-5">自付額123</div>
              <div className="">
                <input
                  className="mx-auto form-control "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="（電子簽章）"
                />
              </div>
            </div>

            {/* <!--第12行-1 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="col-5">病人/家屬簽章</div>
              <div>
                <input
                  className="form-control me-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="（電子簽章）"
                />
                <div className="form-text"></div>
              </div>
            </div>
            {/* <!-- 第12行-2 --> */}
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-4">經辦</div>
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
            <div className="d-flex justify-content-between col-md-4">
              <div className="theader col-3">覆核</div>
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
          </div>
        </div>
      </body>
    </>
  );
};

export default Main_form;

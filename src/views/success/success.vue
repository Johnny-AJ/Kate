<template>
<div>

  <!-- 关西利木津路线列表 -->
  <div class="p51">
    <div class="p51_img">
      <img src="@/assets/images/图层648.png" alt="/" />
    </div>
    <div class="el-icon-caret-right"></div>
    <div class="p51_title">关西利木津路线列表</div>
  </div>

  <div class="success_box">

    <div class="success_box_nav">

      <div class="success_img">
        <img src="../../assets/images/成功.png" alt="/">
      </div>

      <div class="success_nab">
        <div class="const">You have paid <span class="const_price">¥ 8900.00</span> yuan</div>
        <div class="const">Order Number：210190121589</div>
      </div>

      <div class="success_btn">
        <!-- <div class="success_title">View order details</div> -->
        <el-button class="success_title">View order details</el-button>
      </div>
    </div>

    <div class="current_nab">

      <div class="nab_box">

        <div class="nab_title">取消并且返回利木津巴士官网</div>

        <div class="nab_bot">

          <div class="nab_clause">
            <div class="n1">clause</div>
            <div class="n1">Privacy protection</div>
            <div class="n1">feedback</div>
          </div>

          <div class="nab_time">
            <div class="time">© 1999 - 2019</div>
            <div>
              <img src="../../assets/images/suo.png" alt="/" />
            </div>
          </div>
        </div>

      </div>

      <div class="Consumer">
        消费者贴士——PayPal Pte. Ltd。是PayPal价值存储工具的持有者，不需要得到新加坡金融管理局的批准。建议用户仔细阅读条款及细则。
      </div>

    </div>

  </div>

</div>
</template>

<script>
export default {
  name: "successfulIndex",
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
/* 关西利木津路线列表  */
.p51 {
  border-bottom: 1px solid #ffe5e5e5;
  display: flex;
  align-items: center;
  line-height: 45px;
  box-sizing: border-box;
  padding-left: 400px;
  margin-bottom: 60px;
}

.p51_img {
  margin-right: 10px;
}

.p51_img img {
  width: 100%;
}

.p51_title {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-left: 10px;
}

.success_box {
  width: 62.5rem;
  margin: 0 auto;
  margin-top: 2.625rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding-top: 2.0625rem;
  margin-bottom: 30px;
}

.success_box_nav {
  width: 60rem;
  border: 2px solid #eee;
  margin: 0 auto;
  text-align: center;
}

.const {
  /* display: flex; */
  align-items: center;
  font-size: 1rem;
  font-family: SF Pro Text;
  font-weight: 300;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 0.9375rem;
}

.const_price {
  font-size: 30px;
  font-family: SF Pro Text;
  font-weight: 300;
  color: #ff6935;
}

.success_btn {
  border-radius: 4px;
  line-height: 2.1875rem;
  margin: 0 auto;
  margin-bottom: 4.125rem;
}

.success_title {
  font-size: 1rem;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(24, 114, 227, 1);
  border: 1px solid #eee;
}

.success_img {
  margin-top: 4.1875rem;
}

.success_img img {
  width: 10%;
}

/*  current_nab*/
.current_nab {
  width: 61rem;
  margin: 0 auto;
  height: 100%;
}

.nab_box {
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-top: 0.5rem;
}

.nab_title {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(0, 112, 186, 1);
}

.nab_clause {
  display: flex;
}

.n1 {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  margin-right: 20px;
}

.nab_time {
  display: flex;
  /* align-items: center; */
  margin-right: 10px;
}

.time {
  margin-right: 10px;
}

.nab_bot {
  display: flex;
}

.Consumer {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;
}

/* 小于768 宽度100% */
// @media screen and (max-width: 768px) {
//   .globalWith {
//     width: 100% !important;
//     /* width: 100%; */
//   }

//   .success_box {
//     width: 100%;
//   }

//   .success_box_nav {
//     width: 100%;
//   }

//   .success_btn {
//     width: 45%;
//   }

//   .current_nab {
//     width: 100%;
//   }
// }
</style>

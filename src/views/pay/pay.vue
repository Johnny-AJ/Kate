<template>
<div class="payment_nav">

  <!-- 关西利木津路线列表 -->
  <div class="p51">
    <div class="p51_img">
      <img src="@/assets/images/图层648.png" alt="/" />
    </div>
    <div class="el-icon-caret-right"></div>
    <div class="p51_title">关西利木津路线列表</div>
  </div>

  <div class="payment_box">
    <div class="payment_left">
      <div class="payment_content">
        <!-- 1 -->
        <div class="p31">
          <div>
            <img src="../../assets/images/图层3.png" alt="/" />
          </div>
          <div class="p30">
            <div class="p33">
              <img src="../../assets/images/图层4.png" alt />
            </div>
            <div class="payment_price">￥ 4360.00</div>
            <div class="p33">
              <img src="../../assets/images/xiala2拷贝.png" alt />
            </div>
          </div>
        </div>

        <div class="payment_title">
          你好, little!
          <div class="payment_you">这不是你吗?</div>
        </div>

        <div class="paymene_complete">
          <div class="cont1">
            <img src="../../assets/images/suo.png" alt="/" />
          </div>
          <div class="payment_add">请添加信用卡或借记卡完成购买。</div>
        </div>

        <div class="payment_input">
          <div class="t30">
            <el-input placeholder="您的名字" class="t40"></el-input>
          </div>
          <div>
            <el-input placeholder="您的姓氏" class="t40"></el-input>
          </div>
        </div>

        <div class="payment_multiple">
          <div>
            <img src="../../assets/images/图层12.png" alt />
          </div>
          <div>
            <img src="../../assets/images/图层15.png" alt />
          </div>
          <div>
            <img src="../../assets/images/图层16.png" alt />
          </div>
          <div>
            <img src="../../assets/images/图层15.png" alt />
          </div>
        </div>

        <div class="payment_Billing">
          <!-- 银行卡 -->
          <el-input v-model='Bank_card_number' placeholder="银行卡号"></el-input>
        </div>

        <div class="payment_Valid">
          <div>
            <div class="font_s">有效期内</div>
            <div class="t30">
              <el-input v-model='validity' placeholder="MM/YY" style="width: 220px;"></el-input>
            </div>
          </div>
          <div>
            <div class="font_s">CSC</div>
            <!-- 后三位 -->
            <div>
              <el-input v-model='After_three' placeholder="最后三位数字" style="width: 220px;" suffix-icon="el-icon-bank-card"></el-input>
            </div>
          </div>
        </div>

        <div class="payment_Billing">
          <div class="payment_address">
            <div class="font_s">账单地址</div>
            <div class="blue">添加</div>
          </div>
          <div>
            <el-select v-model="Delivery_Address" placeholder="Add shipping address" style="width: 100%;">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
        </div>

        <div class="add_btn">
          <!-- <div class="btn_add">Add</div> -->
          <el-button class="btn_add">添加</el-button>
        </div>
      </div>
    </div>

    <div class="payment_right">
      <div class="payment_right_nav">
        <div class="PayPal_img">
          <img src="../../assets/images/scr_vp_fprd_shield_bags.png" alt />
        </div>
        <div class="PayPal_title">
          <div>
            PayPal是一种更安全
          </div>
          <div>
            更方便的支付方式
          </div>
        </div>
        <div class="security">
          <div class="financial">
            无论您在哪里购物，我们都会帮助您确保您的财务信息安全。
          </div>
        </div>
      </div>
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

  <!-- </div> -->
</div>
</template>

<script>
export default {
  name: "paymentIndex",
  data() {
    return {
      options: [{
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      // 银行卡号码
      Bank_card_number: "",
      // 有效期
      validity: "",
      // 后三位
      After_three: "",
      // 送货地址
      Delivery_Address: [],
    }
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

.p40 {
  display: flex;
  align-items: center;
}

//
.payment_nav {
  background-color: #fff;
}

.payment_box {
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(222, 222, 222, 1);
  border-radius: 4px;
}

.payment_left {
  width: 50%;
}

.payment_content {
  margin-left: 3.875rem;
  margin-top: 1.9375rem;
}

.p30 {
  display: flex;
  align-items: center;
}

.p31 {
  display: flex;
  justify-content: space-between;
}

.p31 img {
  width: 100%;
}

.p33 img {
  width: 100%;
}

.payment_price {
  font-size: 1.875rem;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(255, 87, 34, 1);
}

.payment_title {
  display: flex;
  font-size: 1rem;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(13, 18, 21, 1);
  margin-bottom: 1.5rem;
  border-top: 1px solid #eee;
  padding-top: 1.75rem;
}

.paymene_complete {
  display: flex;
  background: rgba(170, 170, 170, 1);
  border-radius: 4px;
  line-height: 50px;
  margin-bottom: 1.5rem;
}

.payment_add {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(238, 238, 238, 1);
  margin-left: 0.625rem;
}

.payment_input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.payment_multiple {
  display: flex;
  background: rgba(242, 243, 244, 1);
  border: 1px solid rgba(222, 222, 222, 1);
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.payment_multiple img {
  width: 70%;
  margin-left: 15px;
  margin-top: 0.3125rem;
}

.add_btn {
  width: 100%;
  background: rgba(0, 112, 186, 1);
  border-radius: 4px;
  text-align: center;
  margin-bottom: 5rem;
}

.btn_add {
  font-size: 30px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(254, 255, 254, 1);
  width: 100%;
  background-color: #0071ba;
}

.payment_address {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.font_s {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.payment_Valid {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.blue {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: rgba(0, 112, 186, 1);
}

.payment_you {
  font-size: 16px;
  font-family: SF Pro Text;
  font-weight: 400;
  color: #162b75;
}

.cont1 {
  margin-left: 0.625rem;
}

.payment_Billing {
  margin-bottom: 1.5rem;
}

/*  payment_right */
.payment_right {
  width: 50%;
  text-align: center;
  position: relative;
}

.payment_right_nav {
  position: absolute;
  top: 300px;
  right: 0;
}

.PayPal_img img {
  width: 50%;
}

.PayPal_title {
  font-size: 35px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: #333333;
  text-align: center;
}

.security {
  width: 75%;
  text-align: center;
  margin: 30px 75px;
}

.financial {
  font-size: 8px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: #333333;
}

/*  current_nab*/
.current_nab {
  width: 60%;
  margin: 0 auto;
  height: 100%;
}

.nab_box {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}

.nab_title {
  font-size: 8px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: #013192;
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
  margin-right: 10px;
}

.time {
  margin-right: 10px;
}

.nab_bot {
  display: flex;
}

.Consumer {
  font-size: 8px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: #333333;
  text-align: center;
  margin-top: 15px;
}

// /* 小于768 宽度100% */
// @media screen and (max-width: 768px) {
//   .globalWith {
//     width: 100% !important;
//   }

//   .payment_right {
//     display: none;
//   }

//   .payment_left {
//     width: 100%;
//   }

//   .payment_content {
//     margin-left: 20px;
//     margin-right: 20px;
//   }

//   .payment_multiple {
//     justify-content: space-between;
//   }
// }

// /* 小于476 宽度100% */
// @media screen and (max-width: 475px) {
//   .payment_input {
//     flex-wrap: wrap;
//   }

//   .payment_Valid {
//     flex-wrap: wrap;
//   }

//   .t30 {
//     margin-bottom: 10px;
//   }

//   .p31 img {
//     width: 80%;
//   }

//   .payment_price {
//     font-size: 20px;
//   }
// }
</style>

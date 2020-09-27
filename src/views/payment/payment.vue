<template>
<div>

  <!-- 关西利木津路线列表 -->
  <div class="p31">
    <div class="p31_img">
      <img src="@/assets/images/图层648.png" alt="/" />
    </div>
    <div class="el-icon-caret-right"></div>
    <div class="p31_title">关西利木津路线列表</div>
  </div>

  <div class="centre_box">
    <div class="reserve_box">
      <h2>- 03. 支付订单 -</h2>
      <!-- 1 -->
      <div class="top_box">

        <div class="order">
          <div class="order_title">订单编号：10051066</div>
        </div>

        <div class="top_left">

          <!-- 1 -->
          <div class="time_min">
            <div class="time">下单时间：</div>
            <div class="min">2020-07-12 15:06</div>
          </div>

          <!-- 2 -->
          <div class="time_min">
            <div class="time">发车方向：</div>
            <div class="min">大阪 → 发往关西机场</div>
          </div>

          <!-- 3 -->
          <div class="time_min">
            <div class="time">支付方式：</div>
            <div class="min">paypal</div>
          </div>

          <!-- 4 -->
          <div class="freight">
            <div class="qwe time">人数运费：</div>
            <div class="asd">
              <div class="zxc">
                <div class="min">大人</div>
                <div class="min">1名</div>
                <div class="total">¥2680.00</div>
              </div>
              <div class="zxc">
                <div class="min">儿童</div>
                <div class="min">1名</div>
                <div class="total">¥1680.00</div>
              </div>
            </div>
          </div>

          <!-- 5 -->
          <div class="rty">
            <div class="time">费用合计：</div>
            <div class="total">¥4360.00</div>
          </div>

          <!-- 6 -->
          <div class="pay_box">
            <div class="time">支付方式：</div>
            <div>
              <div class="pay_radio_logo">
                <!-- 1 -->
                <div class="pay_nab">
                  <el-radio v-model="radio"></el-radio>
                  <div>
                    <img src="../../assets/images/图层12.png" alt="">
                  </div>
                </div>
                <!-- 2 -->
                <div class="pay_nab">
                  <el-radio v-model="radio"></el-radio>
                  <div>
                    <img src="../../assets/images/图层15.png" alt="">
                  </div>
                </div>
                <!-- 3 -->
                <div class="pay_nab">
                  <el-radio v-model="radio"></el-radio>
                  <div>
                    <img src="../../assets/images/图层16.png" alt="">
                  </div>
                </div>
                <!-- 4 -->
                <div class="pay_nab">
                  <el-radio v-model="radio"></el-radio>
                  <div>
                    <img src="../../assets/images/图层12.png" alt="">
                  </div>
                </div>
                <!-- 5 -->
                <div class="pay_nab">
                  <el-radio v-model="radio"></el-radio>
                  <div>
                    <img src="../../assets/images/图层15.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- 3 -->
      <div class="btn_p">
        <el-button class="paid_p" style="width: 160px;">
          <div class="vbn">确认支付</div>
        </el-button>
      </div>

      <!-- 4 -->
      <div class="come">
        <el-button class="back" @click="handleBack">← 返回</el-button>
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      radio: "",
    }
  },
  methods: {
    //   返回
    handleBack() {
      this.$router.push({
        path: "/information",
      })
    },
  },
}
</script>

<style scoped>
/* 按钮 */
/deep/ .el-radio {
  padding: 0;
  margin: 0;
}
</style><style lang="scss" scoped>
/* 关西利木津路线列表  */
.p31 {
  border-bottom: 1px solid #ffe5e5e5;
  display: flex;
  align-items: center;
  line-height: 45px;
  box-sizing: border-box;
  padding-left: 115px;
  margin-bottom: 60px;
}

.p31_img {
  margin-right: 10px;
}

.p31_img img {
  width: 100%;
}

.p31_title {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-left: 10px;
}

.reserve_box {
  width: 100%;
  margin-bottom: 117px;
}

h2 {
  font-weight: 400;
  color: rgba(1, 49, 146, 1);
  margin-bottom: 16.5px;
  text-align: center;
}

.top_box {
  border: 1px solid #eee;
  margin-bottom: 25px;
}

.order {
  background: rgba(81, 177, 205, 1);
  line-height: 40px;
  padding-left: 15px;
}

.order_title {
  font-size: 9px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.time_min {
  display: flex;
  border-bottom: 1px solid #ffebebeb;
  line-height: 40px;
}

.time {
  font-size: 8px;
  font-family: Taipei Sans TC Beta;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-right: 20px;
  padding-left: 10px;
}

.min {
  font-size: 8px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}

/* 4 */
/* 运费 */
.freight {
  display: flex;
  border-bottom: 1px solid #ffebebeb;
}

.qwe {
  width: 7%;
  line-height: 30px;
}

.asd {
  width: 90%;
}

.zxc {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}

.total {
  font-size: 9px;
  font-family: SF Pro Text;
  font-weight: bold;
  color: rgba(1, 49, 146, 1);
  margin-right: 20px;
}

/* 5 */
.rty {
  display: flex;
  line-height: 50px;
  justify-content: flex-end;
  margin-right: 10px;
}

.fgh {
  display: flex;
  align-items: center;
  justify-content: space-around;
  line-height: 30px;
}

/* 3 */
.btn_b {
  text-align: right;
}

.paid {
  background: rgba(170, 170, 170, 1);
  border-radius: 5px;
  line-height: 30px;
}

.cancel {
  background: rgba(1, 49, 146, 1);
  border-radius: 5px;
  line-height: 30px;
}

.vbn {
  font-size: 15px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

/* 6 */
.pay_box {
  display: flex;
  align-items: center;
  background: rgba(249, 249, 249, 1);
  line-height: 65px;
}

.pay_radio_logo {
  display: flex;
}

.pay_nab {
  display: flex;
  align-items: center;
  margin-right: 25px;
}

/* 3 */
.btn_p {
  text-align: center;
}

.paid_p {
  background: rgba(1, 49, 146, 1);
  border-radius: 10px;
}

/* 4 */
.come {
  text-align: center;
  margin-top: 20px;
}
</style>

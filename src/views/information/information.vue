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
      <h2>- 02. 填写信息 -</h2>

      <!-- 内容盒子 -->
      <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">

          <!-- 1 -->
          <el-form-item prop="UserName">
            <div class="reserve_nav">
              <div class="reserve_left">
                <div class="reserve_title">客戶姓名</div>
              </div>
              <div class="reserve_select" @change="handleChangeUserName">
                <el-input placeholder="请输入您的姓名" style="width: 500px;" clearable v-model="ruleForm.UserName" ref="username" maxlength="6" />
              </div>
              <div>
                <i class="el-icon-circle-plus"></i>
              </div>
            </div>
          </el-form-item>

          <!-- 2 -->
          <el-form-item prop="MailNumber">
            <div class="reserve_nav">
              <div class="reserve_left">
                <div class="reserve_title">电子邮箱</div>
              </div>
              <div class="reserve_select" @change="handleChangeMailNumber">
                <el-input placeholder="请输入您的邮箱号码" style="width: 500px;" clearable v-model="ruleForm.MailNumber" maxlength="20">
                  <template slot="append">.com</template>
                </el-input>
              </div>
              <div class="con">必填</div>
            </div>
          </el-form-item>

          <!-- 3 -->
          <el-form-item prop="PhoneNumber">
            <div class="reserve_nav">
              <div class="reserve_left">
                <div class="reserve_title">电话号码</div>
              </div>
              <div class="reserve_select" @change="handleChangePhoneNumber">
                <el-input placeholder="请输入您的电号号码" style="width: 500px;" clearable v-model="ruleForm.PhoneNumber" maxlength="11" />
              </div>
            </div>
          </el-form-item>

          <!-- 4 -->
          <div class="btn">
            <!-- <div class="next" @click="handleNext">Next</div> -->
            <div>
              <el-button class="next" @click="handleNext">Next</el-button>
            </div>
          </div>

        </el-form>
      </div>

      <div class="come">
        <!-- <div class="back">← 返回</div> -->
        <el-button class="back" @click="handleBack">← 返回</el-button>
        <!-- <button class="back">← 返回</button> -->
      </div>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "information",
  data() {
    // 用户名
    var idNumReg = /^[\u4e00-\u9fa5]{1,}$/
    var validateIdNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空!!"))
      }
      setTimeout(() => {
        if (!idNumReg.test(value)) {
          callback(new Error("请输入正确的用户名"))
        } else {
          callback()
        }
      }, 500)
    }
    // 邮箱
    var idemail = /^\w{3,}@\w{2,}\.(com|cn|net|com\.cn)$/
    var validateIdNum1 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空!!"))
      }
      setTimeout(() => {
        if (!idemail.test(value)) {
          callback(new Error("请输入正确的邮箱"))
        } else {
          callback()
        }
      }, 500)
    }
    // 电话号码
    var idphone = /^[1-9]\d{10}$/
    var validateIdNum2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("电话号码不能为空!!"))
      }
      setTimeout(() => {
        if (!idphone.test(value)) {
          callback(new Error("请输入正确的电话号码"))
        } else {
          callback()
        }
      }, 500)
    }
    return {
      UserName: "", // 用户名
      MailNumber: "", // 邮箱号码
      PhoneNumber: "", // 电话号码
      infoId: "",
      totalAll: "",
      ruleForm: {
        UserName: "",
        MailNumber: "",
        PhoneNumber: "",
      },
      rules: {
        UserName: [{
          required: true,
          validator: validateIdNum,
          trigger: "blur",
        }, ],
        MailNumber: [{
          required: true,
          validator: validateIdNum1,
          trigger: "blur",
        }, ],
        PhoneNumber: [{
          required: true,
          validator: validateIdNum2,
          trigger: "blur",
        }, ],
      },
    }
  },
  created() {
    const buyTicketInfoList = this.$route.query.buyTicketInfoList
    const lineId = this.$route.query.lineId
    console.log(buyTicketInfoList, "buyTicketInfoList")
    console.log(lineId, "lineId")
  },
  methods: {
    async handleNext() {
      let res = await //   console.log("触发成功")
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({
            path: "/payment",
          })
        } else {
          return false
        }
      })
    },
    handleBack() {
      this.$router.push({
        path: "/reserve",
      })
    },
    handleChangeUserName() {
      this.UserName = this.ruleForm.UserName
      // console.log(this.UserName, "UserName")
    },
    handleChangeMailNumber() {
      this.MailNumber = this.ruleForm.MailNumber
      // console.log(this.MailNumber, "MailNumber")
    },
    handleChangePhoneNumber() {
      this.PhoneNumber = this.ruleForm.PhoneNumber
      // console.log(this.PhoneNumber, "PhoneNumber")
    },
  },
}
</script>

<style scoped>
/* icont */
/deep/ .el-icon-circle-plus {
  color: blue;
  font-size: 29px;
  margin-left: 10px;
  margin-top: 10px;
}

/deep/ .el-form-item__error {
  top: 75%;
  left: 190px;
}
</style><style lang="scss" scoped>
/* 关西利木津路线列表  */
.p31 {
  /* width: 960px; */
  /* height: 45px; */
  /* background: rgba(255, 255, 255, 1); */
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

/* reserve_box */
.reserve_box {
  /* width: 330px; */
  width: 100%;
  /* border: 1px solid red; */
  margin-bottom: 117px;
}

/* 內容 */
.reserve_nav {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid #ffd5d5d5;
}

.reserve_title {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.reserve_left {
  width: 150px;
  /* height: 50px; */
  background: rgba(81, 177, 205, 1);
  /* border: 1px solid; */
  border-left: 1px solid #ffd5d5d5;
  text-align: center;
  line-height: 80px;
}

.reserve_select {
  margin-left: 20px;
}

h2 {
  /* font-size: 18px; */
  /* font-family: Taipei Sans TC Beta; */
  font-weight: 400;
  color: rgba(1, 49, 146, 1);
  margin-bottom: 16.5px;
  text-align: center;
}

/* btn */
.btn {
  /* width: 580px; */
  height: 75px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(213, 213, 213, 1);
  border-radius: 0px 0px 5px 5px;
  text-align: center;
  /* margin: 17px 0; */
  /* padding-top: 35px; */
  /* margin: 0 auto; */
}

.next {
  background: rgba(1, 49, 146, 1);
  border-radius: 10px;
  text-align: center;
  /* line-height: 40px; */
  font-size: 15px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  width: 20%;
  margin-top: 15px;
}

.con {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(194, 21, 21, 1);
  margin-left: 10px;
}

.come {
  text-align: center;
  margin-top: 20px;
}

.back {
  font-size: 20px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
</style>

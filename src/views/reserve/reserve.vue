<template>
<div>

  <!-- 关西利木津路线列表 -->
  <div class="p31">
    <div class="p31_img">
      <img src="@/assets/images/图层648.png" alt="/" />
    </div>
    <div class="el-icon-caret-right"></div>
    <div class="p31_title">{{$t('ticket.Route')}}</div>
  </div>

  <div class="centre_box">
    <div class="reserve_box">
      <h2>- 01. {{$t('ticket.Booking')}} -</h2>

      <!-- 内容盒子 -->
      <div>
        <keep-alive>

          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">

            <el-form-item prop="KansaiAirport">
              <!-- 关系机场 -->
              <div class="reserve_nav">
                <div class="reserve_left">
                  <div class="reserve_title">{{$t('ticket.KansaiAirport')}}</div>
                </div>
                <div class="reserve_select">
                  <el-select v-model="ruleForm.KansaiAirport" :placeholder="$t('placeholder.destination')" style="width: 300px;" @change="ChangeDestination($event)" clearable>
                    <el-option v-for="item in destinationList" :key="item.label" :label="$t(item.label)" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-form-item>

            <el-form-item prop="SelectArea">
              <!-- 选择区域 -->
              <div class="reserve_nav">
                <div class="reserve_left">
                  <div class="reserve_title">{{$t('ticket.SelectArea')}}</div>
                </div>
                <div class="reserve_select">
                  <el-select v-model="ruleForm.SelectArea" :placeholder="$t('placeholder.PleaseSelectA')" style="width: 300px;" @change="handleAreaChange" clearable>
                    <el-option v-for="item in areaList" :key="item.areaId" :label="item.areaName" :value="item.areaId">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </el-form-item>

            <el-form-item prop="busLists">
              <!-- 乘车路线 -->
              <div class="reserve_nav">
                <div class="reserve_left">
                  <div class="reserve_title">{{$t('ticket.BusLine')}}</div>
                </div>
                <div class="reserve_select">
                  <el-select v-model="ruleForm.busLists" :placeholder="$t('placeholder.PleaseSelectA')" style="width: 750px;" @change="handleBusChange" clearable>
                    <el-option v-for="item in busList" :key="item.areaId" :label="item.lineName" :value="item.id">
                    </el-option>
                  </el-select>

                </div>
              </div>
            </el-form-item>

            <!-- 4 -->
            <div class="reserve_nav">
              <div class="reserve_left">
                <div class="reserve_title">{{$t('ticket.TheNumberOfBus')}}</div>
              </div>
              <div class="adult" v-if="!adult">
                <div class="fares">{{$t('ticket.Adult')}}：</div>
                <div>
                  <el-input-number :@change="handleChange" v-model="num" :min="1" :disabled="adult" :max="10" />
                </div>
              </div>
              <div class="adult" v-if="!children">
                <div class="fares">{{$t('ticket.Children')}}：</div>
                <div>
                  <el-input-number :@change="handleChange" v-model="num1" :min="1" :disabled="children" :max="10" />
                </div>
              </div>
            </div>

            <!-- 5 -->
            <div class="ticket_nav">
              <div class="reserve_left">
                <div class="reserve_title">{{$t('ticket.TheTotalBus')}}</div>
              </div>
              <div class="ticket_box">
                <div class="ticket_a">
                  <div class="ticket_z" v-if="!adult">
                    <div class="fares">{{$t('ticket.Adult')}}：</div>
                    <div class="number" value='num'>X {{num}}</div>
                    <div class="number">¥{{priceList[1] ?priceList[1] : adultNum}}</div>
                  </div>
                  <div class="ticket_z" v-if="!children">
                    <div class="fares">{{$t('ticket.Children')}}：</div>
                    <div class="number" value='num1'>X {{num1}}</div>
                    <div class="number">¥{{priceList[2] ?priceList[2] :childrenNum}}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6 -->
            <div class="reserve_nav">
              <div class="reserve_left">
                <div class="reserve_title">{{$t('ticket.TotalCosts')}}</div>
              </div>
              <div class="total_box">
                <div class="total_price">
                  <div>
                    <div class="fares">{{$t('ticket.TheTotalAmountOf')}}：</div>
                  </div>
                  <div>
                    <div class="number">X {{AmountOf}}</div>
                  </div>
                  <div>
                    <div class="number">¥{{totalAll}}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 7 -->
            <div class="btn">
              <!-- <div class="next" @click="handleNext">Next</div> -->
              <div>
                <el-button class="next" @click="handleNext">{{$t('ticket.TheNextStep')}}</el-button>
              </div>
            </div>

          </el-form>
        </keep-alive>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import {
  getAreaList,
  getLineList,
  getTicketList
} from "@/api/reserve"
import store from "../../store/index"
export default {
  name: "reserve",
  data() {
    return {
      destinationList: [{
          value: 1,
          label: "placeholder.destination",
        },
        {
          value: 2,
          label: "placeholder.areaList",
        },
      ],
      destination: "", // 目的地
      area: "", // 区域
      bus: "", // 路线
      num: 0,
      num1: 0,
      KansaiAirport: "", // 关西机场   1-去机场  2-从机场出发
      areaList: [], // 区域
      busList: [], // 乘车路线
      areaId: "", // 地区ID
      lineId: "", // 路线ID
      AmountOf: "0", // 总票数
      ticketList: [], // 车票内容
      typeList: [], // 票类型
      children: true, // 儿童票
      adult: true, // 成人票
      adultNum: 0, // 成人价
      childrenNum: 0, // 儿童价
      totalAll: 0, // 总价
      priceList: {}, // 票价格
      infoId: [], // 产品编号
      buyTicketInfoList: [],
      adultprodNum: 0,
      childrenprodNum: 0,
      obj: {},
      prodNum: {},
      svj: [],
      ruleForm: {
        KansaiAirport: "",
        SelectArea: "",
        busLists: "",
      },
      rules: {
        KansaiAirport: [{
          required: true,
          message: "请选择",
          trigger: "blur",
        }, ],
        SelectArea: [{
          required: true,
          message: "请选择",
          trigger: "blur",
        }, ],
        busLists: [{
          required: true,
          message: "请选择",
          trigger: "blur",
        }, ],
      },
    }
  },
  created() {
    this.init()
  },
  computed: {
    handleChange(value) {
      // console.log(this.adultprodNum, "num")
      // console.log(this.childrenprodNum, "num1")
      this.adultprodNum = this.num
      this.childrenprodNum = this.num1
      const prodNum = {
        adult: this.adultprodNum,
        children: this.childrenprodNum,
      }
      this.prodNum = prodNum
      console.log(prodNum, "prodNum")
      this.AmountOf = this.num + this.num1 // 总票数
      if (this.adultNum) {
        this.totalAll = this.num * this.priceList[1] // 成人价格
      } else if (this.childrenNum) {
        this.totalAll = this.num1 * this.priceList[2] // 儿童价格
      } else {
        this.totalAll = this.num * this.priceList[1] + this.num1 * this.priceList[2] // 总价
      }
    },
  },
  methods: {
    // 計算器
    // handleChange(value) {
    //   this.AmountOf = this.num + this.num1 // 总票数
    //   if (this.adultNum) {
    //     this.totalAll = this.num * this.priceList[1] // 成人价格
    //   } else if (this.childrenNum) {
    //     this.totalAll = this.num1 * this.priceList[2] // 儿童价格
    //   } else {
    //     this.totalAll = this.num * this.priceList[1] + this.num1 * this.priceList[2] // 总价
    //   }
    // },
    // 下一步
    handleNext() {
      console.log("觸發成功")
      this.buyTicketInfoList.push(this.obj, this.prodNum)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({
            path: "/information",
            query: {
              buyTicketInfoList: this.buyTicketInfoList,
              lineId: this.lineId,
            },
          })
        } else {
          return false
        }
      })
    },
    // 目的地
    ChangeDestination(val) {
      // console.log("目的地", val)
      this.KansaiAirport = val // 路线类型
      // console.log(this.KansaiAirport, "this.KansaiAirport")
    },
    // 选择区域
    async handleAreaChange(val) {
      // console.log(val, "val")
      this.areaId = val // 区域ID
      // console.log(this.areaId, "areaId")
      // 路线列表
      let res = await getLineList({
        lan: localStorage.getItem("locale"), // 语言
        areaCode: this.areaId, // 地区ID
        lineType: this.KansaiAirport, // 路线类型
      })
      // console.log(res, "getLineList")
      this.busList = res.data.data
      // console.log(this.busList, "busList")
    },
    // 选择路线
    async handleBusChange(val) {
      // console.log(val, "选择路线")
      this.lineId = val // 路线ID
      // 路线下的产品列表
      let res = await getTicketList({
        lan: localStorage.getItem("locale"), // 语言
        lineId: this.lineId, // 路线ID
      })
      this.ticketList = res.data.data
      // console.log(this.ticketList,'ticketList')
      this.ticketList.map((item) => {
        this.typeList.push(item.lineTicketType)
        this.priceList[item.lineTicketType] = item.price
        const obj = {
          infoId: item.infoId,
          lineTicketType: item.lineTicketType,
          price: item.price,
        }
        this.obj = obj
        // this.svj.push(obj)
        console.log(this.obj, "svj")
      })
      this.typeList.map((item) => {
        // 1成人票，2儿童票
        switch (item) {
          case 1:
            this.adult = false
            break
          case 2:
            this.children = false
            break
        }
      })
    },
    // 初始化
    init() {
      // 地区列表
      getAreaList({
        lan: localStorage.getItem("locale"), // 语言
      }).then((res) => {
        if (res.data.data) {
          this.areaList = res.data.data
          // console.log(this.areaList, "getAreaList")
          // console.log(this.areaId, "areaId")
        }
      })
    },
  },
}
</script>

<style scoped>
/* select */
/deep/ .el-select .el-input .el-select__caret {
  color: black;
  font-size: 20px;
}

/deep/ .el-input__inner {
  color: black;
}

/* 計算器 */
.el-input-number {
  margin-left: 10px;
}

/deep/ .el-form-item__error {
  top: 75%;
  left: 180px;
}

/deep/ .el-form-item {
  margin-bottom: 0;
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

/* reserve_box */
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

.reserve_nav {
  height: 80px;
  display: flex;
  align-items: center;
  border: 1px solid #ffd5d5d5;
}

.reserve_left {
  width: 150px;
  background: rgba(81, 177, 205, 1);
  border-left: 1px solid #ffd5d5d5;
  text-align: center;
  line-height: 80px;
}

.reserve_title {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

.reserve_select {
  margin-left: 20px;
}

.adult {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

/* 票价 */
.ticket_nav {
  display: flex;
  align-items: center;
  border: 1px solid #ffd5d5d5;
}

.ticket_z {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
}

.ticket_box {
  width: 80%;
  margin-left: 20px;
}

.number {
  font-size: 9px;
  font-family: SF Pro Display;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}

.fares {
  font-size: 9px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}

/* 总价 */
.total_price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

total_boxtotal_box {
  display: flex;
}

.total_box {
  width: 80%;
  margin-left: 20px;
}

/* btn */
.btn {
  height: 75px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(213, 213, 213, 1);
  border-radius: 0px 0px 5px 5px;
  text-align: center;
}

.next {
  background: rgba(1, 49, 146, 1);
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  font-family: Taipei Sans TC Beta;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  width: 20%;
  margin-top: 15px;
}
</style>

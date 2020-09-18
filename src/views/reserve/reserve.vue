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

        <!-- 关系机场 -->
        <div class="reserve_nav">
          <div class="reserve_left">
            <div class="reserve_title">{{$t('ticket.KansaiAirport')}}</div>
          </div>
          <div class="reserve_select">
            <el-select v-model="destination" :placeholder="$t('placeholder.destination')" style="width: 300px;">
              <el-option v-for="item in destinationList" :key="item.label" :label="$t(item.label)" :value="item.label" @change="ChangeDestination">
              </el-option>
            </el-select>
          </div>
        </div>

        <!-- 选择区域 -->
        <div class="reserve_nav">
          <div class="reserve_left">
            <div class="reserve_title">{{$t('ticket.SelectArea')}}</div>
          </div>
          <div class="reserve_select">
            <el-select v-model="area" :placeholder="$t('placeholder.destination')" style="width: 300px;" @change="handleAreaChange">
              <el-option v-for="item in areaList" :key="item.areaId" :label="item.areaName" :value="item.areaId">
              </el-option>
            </el-select>
          </div>
        </div>

        <!-- 乘车路线 -->
        <div class="reserve_nav">
          <div class="reserve_left">
            <div class="reserve_title">{{$t('ticket.BusLine')}}</div>
          </div>
          <div class="reserve_select">
            <el-select v-model="bus" :placeholder="$t('placeholder.destination')" style="width: 750px;" @change="handleBusChange">
              <el-option v-for="item in busList" :key="item.label" :label="item.label" :value="item.label">
              </el-option>
            </el-select>

          </div>
        </div>

        <!-- 4 -->
        <div class="reserve_nav">
          <div class="reserve_left">
            <div class="reserve_title">{{$t('ticket.TheNumberOfBus')}}</div>
          </div>
          <div class="adult">
            <div class="fares">{{$t('ticket.Adult')}}：</div>
            <div>
              <el-input-number @change="handleChange" v-model="num" :min="1" :max="10" />
            </div>
          </div>
          <div class="adult">
            <div class="fares">{{$t('ticket.Children')}}：</div>
            <div>
              <el-input-number @change="handleChange" v-model="num1" :min="1" :max="10" />
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
              <div class="ticket_z">
                <div class="fares">{{$t('ticket.Adult')}}：</div>
                <div class="number">X 1</div>
                <div class="number">¥2680.00</div>
              </div>
              <div class="ticket_z">
                <div class="fares">{{$t('ticket.Children')}}：</div>
                <div class="number">X 1</div>
                <div class="number">¥1680.00</div>
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
                <div class="number">X2</div>
              </div>
              <div>
                <div class="number">¥4360.00</div>
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
// import {
//   treeDataTranslate
// } from "@/utils/jtr"
export default {
  name: "reserve",
  data() {
    return {
      destinationList: [{
          value1: "选1",
          label: "placeholder.destination",
        },
        {
          value1: "选2",
          label: "placeholder.areaList",
        },
      ],
      options: [{
          // value: '选项1',
          label: "Agera",
        },
        {
          // value: '选项2',
          label: "LaFerrari",
        },
        {
          // value: '选项3',
          label: "Reventon",
        },
      ],
      destination: "", // 目的地
      area: "", // 区域
      bus: "", // 路线
      num: "1",
      num1: "1",
      areaList: [], // 区域
      areaId: "", // 地区ID
      lineId: "", // 路线ID
      busList: [{
          // value: '选项6',
          label: "大阪站前始发，经由南海难波站（深夜巴士）・茶屋町・新梅田シティ・新大阪・千里ニュータウン・千里中央",
        },
        {
          // value: '选项6',
          label: "京都站前始发，经由南海难波站（深夜巴士）・新大阪・千里ニュータウン・千里中央",
        },
        {
          // value: '选项6',
          label: "奈良站前始发，经由南海难波站（深夜巴士）・茶屋町・新梅田シティ",
        },
      ],
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 計算器
    handleChange(value) {
      console.log(value)
    },
    // 下一步
    handleNext(data) {
      console.log("觸發成功")
      const url = "/information"
      this.$router.push({
        path: url,
      })
    },
    // 目的地
    ChangeDestination(val) {
      console.log("目的地", val)
    },
    // 选择区域
    handleAreaChange(val) {
      console.log(val, "val")
      this.areaId = val
      console.log(this.areaId, "areaId")
      // 路线列表
      getLineList({
        lan: localStorage.getItem("locale"), // 语言
        areaCode: this.areaId, // 地区ID
      }).then((res) => {
        console.log(res, "getLineList")
      })
    },
    // 选择路线
    handleBusChange(val) {
      console.log(val)
    },
    // 初始化
    init() {
      // 地区列表
      getAreaList({
        lan: localStorage.getItem("locale"), // 语言
      }).then((res) => {
        console.log(res, "getAreaList")
        if (res.data.data) {
          this.areaList = res.data.data
          console.log(this.areaList, "getAreaList")
          console.log(this.areaId, "areaId")
        }
      })

      // 产品列表
      getTicketList({
        lan: localStorage.getItem("locale"), // 语言
        lineId: "",
      }).then((res) => {
        console.log(res, "getTicketList")
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

h2 {
  /* font-size: 18px; */
  /* font-family: Taipei Sans TC Beta; */
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
  /* height: 50px; */
  background: rgba(81, 177, 205, 1);
  /* border: 1px solid; */
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
  /* display: flex; */
  /* align-items: center; */
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
</style>

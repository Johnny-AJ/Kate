<template>

  <!-- 外围边框布局 -->
  <div class="border_box">

    <!-- 版心内容 -->
    <div class="centre_box">

      <!-- logo和翻译 -->
      <div class="top_logo_translate">
        <div class="top_logo">
          <img src="../assets/images/logo.png" alt="/">
        </div>
        <div class="top_translate">
          <ul>
            <el-breadcrumb separator-class="el-icon-caret-right">
              <el-breadcrumb-item>日本語</el-breadcrumb-item>
              <el-breadcrumb-item>English</el-breadcrumb-item>
              <el-breadcrumb-item>繁體中文</el-breadcrumb-item>
              <el-breadcrumb-item>簡体中文</el-breadcrumb-item>
              <el-breadcrumb-item>한국어</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- <li>> 日本語</li>
          <li>> English</li>
          <li>> 繁體中文</li>
          <li>> 簡体中文</li>
          <li>> 한국어</li> -->
          </ul>
        </div>
      </div>

    </div>

    <!-- 导航条 -->
    <div class="navigation_box">
      <div class="navigation_box_nav">
        <!-- 背景图 -->
        <div class="bgImg">

          <!-- 导航内容 -->
          <div class="nav_box">

            <div class="centre_box">


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/1 (1).png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">首页</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/2 (1).png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">时刻表・车费</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/3 (1).png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">乘车处指南</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/4-1.png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">预定车票</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/5 (1).png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">信息咨询</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/6 (1).png" alt="首页" title="首页">
                </div>
                <div>
                  <router-link to="/" class="nav_title">乘车说明</router-link>
                </div>
              </div>


              <div class="nav_box_nav">
                <div class="nav_img">
                  <img src="../assets/images/7 (1).png" alt="首页" title="首页">
                </div>
                <!-- <div> -->
                <router-link to="/" class="nav_title">常见问题</router-link>
                <!-- </div> -->
              </div>

            </div>

          </div>


          <!-- 图文 -->
          <div class="image_text_box">

            <div class="image_text">
              <div class="text_titles">开启您的旅程</div>
              <div class="p30"></div>
              <div class="text_titles">利木津巴士车票</div>
            </div>

            <div class="text_title">优质的旅行，也需要一张实惠的车票</div>

          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "top",
    data() {
      return {

      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  /* 面包屑 */
  /deep/ .el-breadcrumb__inner {
    font-size: 9px;
    font-family: Taipei Sans TC Beta;
    font-weight: 400;
    color: rgba(1, 49, 146, 1);
    line-height: 15px;
  }

  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    font-size: 9px;
    font-family: Taipei Sans TC Beta;
    font-weight: 400;
    color: rgba(1, 49, 146, 1);
    line-height: 15px;
  }

  /* icon图标 */
  /deep/ .el-icon-caret-right {
    color: #003690;
  }
</style>


<style scoped lang="scss">
  .top_logo_translate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
  }

  .top_logo img {
    width: 50%;
  }

  ul {
    display: flex;
  }

  /* 导航条 */
  .navigation_box {
    width: 100%;
    height: 385px;
    /* border: 1px solid red; */
  }

  .navigation_box_nav {
    /* background: rgba(1, 49, 146, 1); */
    /* opacity: 0.9; */
  }

  .nav_box {
    display: flex;
    box-sizing: border-box;
    padding: 10px 0 10px;
    background: #013192;
    opacity: 0.9;
  }

  .nav_box_nav {
    width: 15%;
    /* border: 1px solid gold; */
    text-align: center;
  }

  .nav_img {
    margin-bottom: 11px;
  }

  .nav_img img {
    width: 20%;
  }

  .nav_title {
    font-size: 10px;
    font-family: Taipei Sans TC Beta;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  /* 背景图 */
  .bgImg {
    background: url("../assets/images/banner.png") no-repeat center center #f6f6f5;
    background-size: cover;
    min-height: 385px;
    z-index: -99999;
  }

  /* 图文 */
  .image_text_box {
    text-align: center;
    margin-top: 71px;
  }

  .image_text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text_titles {
    font-size: 30px;
    font-family: TaipeiSansTCBeta-Bold;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    /* line-height: 25px; */
  }

  .text_title {
    font-size: 18px;
    font-family: Taipei Sans TC Beta;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .p30 {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 1);
    border-radius: 50%;
    margin: 0 8px 0;
  }
</style>
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

                    <!-- 1 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">客戶姓名</div>
                        </div>
                        <div class="reserve_select">
                            <el-input placeholder="请输入您的姓名" style="width: 500px;" />
                        </div>
                        <div>
                            <i class="el-icon-circle-plus"></i>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">电子邮箱</div>
                        </div>
                        <div class="reserve_select">
                            <el-input placeholder="请输入您的邮箱号码" style="width: 500px;" />
                        </div>
                        <div class="con">必填</div>
                    </div>

                    <!-- 3 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">电话号码</div>
                        </div>
                        <div class="reserve_select">
                            <el-input placeholder="请输入您的电号号码" style="width: 500px;" />
                        </div>
                    </div>

                    <!-- 4 -->
                    <div class="btn">
                        <!-- <div class="next" @click="handleNext">Next</div> -->
                        <div>
                            <el-button class="next" @click="handleNext">Next</el-button>
                        </div>
                    </div>


                </div>

                <div class="come">
                    <!-- <div class="back">← 返回</div> -->
                    <el-button class="back">← 返回</el-button>
                    <!-- <button class="back">← 返回</button> -->
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'information',
        data() {
            return {

            }
        },
        methods: {
            handleNext() {
                console.log('触发成功')
            },
        }
    }

</script>

<style scoped>
    /* icont */
    /deep/ .el-icon-circle-plus {
        color: blue;
        font-size: 29px;
        margin-left: 10px;
    }
</style>

<style scoped lang="scss">
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
        border: 1px solid #FFD5D5D5;
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
        border-left: 1px solid #FFD5D5D5;
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
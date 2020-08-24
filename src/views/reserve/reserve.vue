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
                <h2>- 01. 预约车票 -</h2>

                <!-- 内容盒子 -->
                <div>

                    <!-- 1 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">关西机场</div>
                        </div>
                        <div class="reserve_select">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                    <!-- 2 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">选择区域</div>
                        </div>
                        <div class="reserve_select">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                    <!-- 3 -->
                    <div class="reserve_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">选择区域</div>
                        </div>
                        <div class="reserve_select">
                            <el-select v-model="value" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>

                    <!-- 4 -->
                    <div>
                        <div>乘车人数</div>
                        <div>
                            <div>成人</div>
                            <div>
                                <el-input-number @change="handleChange" v-model="num" :min="1" :max="10" />
                            </div>
                        </div>
                        <div>
                            <div>儿童</div>
                            <div>
                                <el-input-number @change="handleChange" v-model="num" :min="1" :max="10" />
                            </div>
                        </div>
                    </div>

                    <!-- 5 -->
                    <div class="ticket_nav">
                        <div class="reserve_left">
                            <div class="reserve_title">选择区域</div>
                        </div>
                        <div class="ticket_box">
                            <div class="ticket_left">
                                <div class="fares_1">
                                    <div class="fares">成人票价：</div>
                                    <div class="fares">儿童票价：</div>
                                </div>
                                <div class="number_2">
                                    <div class="number">X2</div>
                                    <div class="number">X1</div>
                                </div>
                            </div>
                            <div class="price_3">
                                <div class="number">¥2680.00</div>
                                <div class="number">¥1680.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- 6 -->
                    <div>
                        <div>费用总额</div>
                        <div>
                            <div>
                                <div>
                                    <div>总额：</div>
                                </div>
                                <div>
                                    <div>X2</div>
                                </div>
                            </div>
                            <div>
                                <div>¥4360.00</div>
                            </div>
                        </div>
                    </div>

                    <!-- 7 -->
                    <div>
                        <div>Next</div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "reserve",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: 'Agera'
                }, {
                    value: '选项2',
                    label: 'LaFerrari'
                }, {
                    value: '选项3',
                    label: 'Reventon'
                }],
                value: '',
                num: '1'
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    };
</script>

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
        margin-bottom: 45px;
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
    }

    .reserve_nav {
        height: 50px;
        display: flex;
        align-items: center;
        border: 1px solid #FFD5D5D5;
    }

    .reserve_left {
        width: 100px;
        /* height: 50px; */
        background: rgba(81, 177, 205, 1);
        /* border: 1px solid; */
        border-left: 1px solid #FFD5D5D5;
        text-align: center;
        line-height: 50px;
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

    /* 票价 */
    .ticket_nav {
        display: flex;
        border: 1px solid #FFD5D5D5;
    }

    .ticket_left {
        display: flex;
        align-items: center;
    }

    .total {
        flex: 1;
    }

    .ticket_box {
        display: flex;
        align-items: center;
        margin-left: 15px;
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
</style>
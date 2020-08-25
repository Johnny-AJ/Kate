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
            <h1>- 03. 支付订单 -</h1>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'payment',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>

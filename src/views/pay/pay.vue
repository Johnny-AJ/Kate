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

            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic" style="width: 500px;">

                <div class="p40">
                    <el-form-item prop="email" :rules="[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
                        <el-input v-model="dynamicValidateForm.email" style="width: 500px;" placeholder="qwe" />
                    </el-form-item>
                    <div @click="addDomain">
                        <i class="el-icon-circle-plus"></i>
                    </div>
                </div>

                <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" :key="domain.key"
                    :prop="'domains.' + index + '.value'" :rules="{
                    required: true, message: '域名不能为空', trigger: 'blur'}">
                    <el-input v-model="domain.value"></el-input>
                    <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                </el-form-item>

                <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                    <el-button @click="addDomain">新增域名</el-button>
                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                </el-form-item> -->

            </el-form>

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    key: Date.now()
                });
            }
        }
    }

</script>


<style scoped>
    /deep/ .el-form-item {
        margin: 0;
        padding: 0;
    }

    /deep/ .el-form-item__content {
        display: flex;
    }

    /deep/ .el-button {
        margin-left: 20px;
    }
</style>

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




    .p40 {
        display: flex;
        align-items: center;
    }
</style>
<template>
    <div class="container">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>Editor</el-breadcrumb-item>
                <el-breadcrumb-item>MavonEditor</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <div class="mark-content">
                <mavon-editor style="height: 100%" v-model.lazy="inputValue"></mavon-editor>
            </div>

            <div class="bottom">
                <el-button type="primary" @click="submitForm">保存</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        data() {
            return {
                inputValue: '在此输入文字'
            }
        },
        components: {
            mavonEditor
        },

        methods: {
            // 获取内容
            submitForm() {
                alert('提交成功！');
                this.inputValue = '在此输入文字';
            }

        }
    }
</script>

<style scoped>
    .mark-content {
        width: 100%;
        height: 580px;
        overflow: hidden;
        box-shadow: 0 0px 4px rgba(0, 0, 0, 0.157), 0 0px 4px rgba(0, 0, 0, 0.227);
    }

    .bottom {
        margin-top: 10px;
    }
</style>
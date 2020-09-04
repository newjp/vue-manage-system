<template>
    <div class="container">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>后台首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <div class="allcontent">
                <article>
                    <h1>vue-管理系统-demo</h1>
                    <p>基于 vue2.x + vue-router + vuex + Element UI 的后台管理系统</p>
                    <h2>功能</h2>
                    <el-checkbox disabled checked>表格</el-checkbox><br>
                    <el-checkbox disabled checked>表单</el-checkbox><br>
                    <el-checkbox disabled checked>登陆/注销</el-checkbox><br>
                    <el-checkbox disabled checked>图片上传</el-checkbox><br>
                    <el-checkbox disabled checked>NProgress页面进度条</el-checkbox><br>
                    <el-checkbox disabled checked>Echarts</el-checkbox><br>
                    <el-checkbox disabled checked>Element UI</el-checkbox><br>
                    <el-checkbox disabled checked>404页面</el-checkbox><br>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .allcontent{
		width:100%;
		max-width: 980px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
	}
	.allcontent article{
		padding: 45px;
		word-wrap: break-word;
		background-color: #fff;
		border: 1px solid #ddd;
		border-bottom-right-radius: 3px;
		border-bottom-left-radius: 3px;
	}
	.allcontent article h1{
		font-size:32px;
		padding-bottom: 10px;
		margin-bottom: 15px;
		border-bottom: 1px solid #ddd;
	}
	.allcontent article h2 {
		margin: 24px 0 16px;
		font-weight: 600;
		line-height: 1.25;
		padding-bottom: 7px;
		font-size: 24px;
		border-bottom: 1px solid #eee;
	}
	.allcontent article p{
		margin-bottom: 15px;
		line-height: 1.5;
	}
	.allcontent article .el-checkbox{
		margin-bottom: 5px;
	}
</style>
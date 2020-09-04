<template>
    <div class="header">
        <div class="logo">模拟管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img src="../../../static/img/user.jpg" class="user-logo">
                    {{adminer.username}}
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
            adminer() {
                return this.$store.state.adminer;
            }
        },
        methods: {
            handleCommand(command) {
                if (command == 'loginout') {
                    this.$confirm('退出将返回登陆界面', '确定退出？', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$store.dispatch('adminlogout');
                        this.$router.push('/login');
                    }).catch(() => { });
                }
            }
        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 22px;
        line-height: 50px;
        color: #fff;
        background-color: #242f42;
    }

    .logo {
        float: left;
        width: 200px;
        text-align: center;
    }

    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }

    .el-dropdown-link {
        position: relative;
        display: inline-block;
        padding-left: 40px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }

    .user-logo {
        position: absolute;
        left: 0;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>
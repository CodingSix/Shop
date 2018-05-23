<template>
<div class="login-page-container">
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleSubmit2" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: '',
                checkPass: ''
            },
            rules2: {
                account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass }
                ],
                checkPass: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true,
            userlist : '',
        };
    },
    methods: {
        handleSubmit2(ev) {
            var _this = this;
            _this.$refs.ruleForm2.validate((valid) => {
                if (valid) {
                    _this.logining = true;
                    var loginParams = {
                        username: this.ruleForm2.account,
                        password: this.ruleForm2.checkPass
                    };
                
	                //从数据库判断账号用户密码
        			this.userlist.forEach((item)=>{
						if(loginParams.username == item.account && loginParams.password == item.password){
								_this.logining = false;
		                        sessionStorage.setItem('user', item.account);
		                        this.$router.push({
						      		name:'personal',
						      		params:{
						  				data : item
						  			}
						      	})
		   
						}
//						else{
//								this.logining = false;
//		                        _this.$alert('用户名或密码错误！', '提示信息', {
//		                            confirmButtonText: '确定'
//		                        });
//						}
					})
	                
	                
//	                for(let index=0;index<this.userlist.length;index++){
//	                	    if (loginParams.username == this.userlist[index].account && loginParams.password == this.userlist[index].password) {
//		                        _this.logining = false;
//		                        sessionStorage.setItem('user', this.userlist[index].account);
//		                        this.$router.push({
//						      		name:'personal',
//						      		params:{
//						  				data : this.userlist[index]
//						  			}
//						      	});
//		                    } else {
//		                        _this.logining = false;
//		                        _this.$alert('用户名或密码错误！', '提示信息', {
//		                            confirmButtonText: '确定'
//		                        });
//		                    }
//		              }    	
                }

            });
        }
    },
    created: function() {
    	if(sessionStorage.getItem('user')!= null){
    		this.$router.push({
	      		name:'personal',
	      	})
    	}
		this.$http.get('/user')
			.then(
				res => {
					this.userlist = res.data.user;
				}
		)
//		if(sessionStorage.getItem('user') != null){
//		    this.$router.push({ path: '/personal' });
//  	}
	}
}
</script>

<style scoped>
.login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.remember {
    margin: 0px 0px 35px 0px;
}
</style>
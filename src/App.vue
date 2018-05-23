<template>
  <div id="app">    
  	<el-container>
		  <el-header>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
						<el-menu-item index="1" @click="home">首页</el-menu-item>
					  <el-menu-item index="2" @click="personal">个人中心</el-menu-item>
					  <el-menu-item index="3" @click="cart">购物车</el-menu-item>
					  <el-menu-item index="4" @click="sell">卖家管理</el-menu-item>
					  <!--<el-submenu index="5">
					    <template slot="title">收藏夹</template>
					    <el-menu-item index="5-1" @click="goods">收藏的商品</el-menu-item>
					    <el-menu-item index="5-2" @click="stores">收藏的店铺</el-menu-item>
					  </el-submenu>-->

					  <!--<el-menu-item index="6"><a href="" target="_blank">订单管理</a></el-menu-item>-->
					</el-menu>  	
		  	
		  </el-header>
      
      <router-view/>
      
      
		  <el-footer>Copyright@Codingsix</el-footer>
		</el-container>

		
  </div>
  
</template>
<script>
export default { 
  name: 'app',
  data() {
      return {
        num1: 1,
        activeIndex: '1',

      };
    },
    methods: {
    	home(){
      	this.$router.push({name:'show'});
      },
      cart(){
      	this.$router.push({name:'cart'})      	
      },
//    goods(){
//    	this.$router.push({name:'goods'});
//    },
//    stores(){
//    	this.$router.push({name:'stores'});
//    },
      personal(){
      	if(sessionStorage.getItem('user') == 'admin'){
      		this.$router.push({name:'personal'})
      	}
      	else{
      		this.$router.push({name:'login'})
      	}
      },
      sell(){
      	this.$router.push({name:'sell'})
      }
    },
  watch: {
    '$route' (to, from) {
      if(to.name == "goods" || to.name == "stores" ){
      	this.activeIndex=0;
      }
      else if(to.name == "cart"){
        this.activeIndex=3    	    	
      }
 
//    else if(to.name == "cart"){
//      this.activeIndex=3    	    	
//    }
    }
  }

  
   
}
</script>


<style>
body{
	margin: 0 ;
	padding: 0;	
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  
  .el-main {
  	position: relative;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

/*导航栏*/  
.el-menu-demo{
	position: absolute;
	right: 10%;
}


.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  

 /*所有页面表头居中*/
 .el-table th>.cell{
	text-align: center;
}
  
  
/*footer*/  
.el-footer{
	color:#909399;
}
</style>
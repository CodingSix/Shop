<template>
	<el-main>
			<div id="store">
				<span>店铺名:{{data.shopname}}</span>
				<span style="margin-left: 30px;">评分:</span>
				<el-rate
				  v-model="data.shoprate"
				  disabled
				  show-score
				  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
				  score-template="{value}">
				</el-rate>
				<span style="margin-left: 60px;">
					<!--<el-button  icon="el-icon-star-on" size="mini">收藏本店</el-button>-->
					<el-button  icon="el-icon-phone" size="mini" @click="call">联系店主</el-button>
				</span>

			</div>
			<!--<el-input
			  placeholder="请输入店铺内的商品"
			  prefix-icon="el-icon-search"
			  v-model="input1"
			  clearable>
			</el-input>-->
			  <el-carousel :interval="4000" type="card" height="600px" style="margin-top: 50px;">
			    <el-carousel-item v-for="item in 3" :key="item">
			      <img :src="data.imgurl" class="image">
			    </el-carousel-item>
			  </el-carousel>
	</el-main>
</template>

<script>
export default {
  data () {
    return {
      input1:'',
      data:''
    }
  },
  methods:{
  	  call(){
	        this.$alert('店主联系号码为：'+this.data.tel, '提示信息', {
	            confirmButtonText: '确定'
	        });
  	  },
  	  getParams(){
      	var routerParams = this.$route.params.data;  
        // 将数据放在当前组件的数据内  
        this.data  = routerParams;
      }
  },
   	  created(){
    	this.getParams();
    	console.log(this.data)
    },
  watch: {  
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
      '$route': 'getParams',
	}
    
}
</script>

<style>
#store{
	margin-bottom: 20px;
}
.el-rate{
	display: inline-block;
    position: relative;
    top: -3px;
}


.el-input{
	width: 45%;
}
</style>
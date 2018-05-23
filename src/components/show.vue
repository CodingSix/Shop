<template>
<el-main style="padding: 20px 0 20px 0;">
	<el-input
	  placeholder="请输入你要查询的商品"
	  prefix-icon="el-icon-search"
	  v-model="input"
	  clearable
	  style="width: 45%;">
	</el-input>
	
	  <div class="block" style="width:100%;overflow: hidden;">
	    <!--<el-carousel trigger="click"  height = "800px">
	      <el-carousel-item v-for="item in 2":key="item" >-->
	      	
	        <!--<h3 style="position: relative;top:30px">{{ item }}</h3>-->


	        <el-row id="show" type="flex" style="width: 100vw;flex-wrap:wrap;flex-direction: row;">
					<el-col  :span="4" v-for="(num, index) in good" :offset="2":key="o" style="position: relative;margin-top: 40px;" v-if="num.isShow">
					    <el-card :body-style="{ padding: '0px' }" style="width:230px" >
					      <img :src="num.imgurl" class="image" @click="goods(index)" style="cursor:pointer;width: 230px;height: 230px;">
					      <div style="padding: 14px;">
					      	<span style="color:#F40;font-size: 22px;float: left;">{{num.price}}</span>
					        <span style="position: relative;top: 4px;">{{num.name}}</span>
					        <div class="bottom clearfix">
					          <i class="el-icon-menu" @click="stores(index)">{{num.shopname}}</i>
					          <i class="el-icon-location">{{num.shopaddress}}</i>
					        </div>
					      </div>
					    </el-card>   
					</el-col>
			</el-row>
			<!--<el-pagination
		      :current-page.sync="currentPage"
		      :page-size="8"
		      layout="prev, pager, next, jumper"
		      :total="20"
		      style="margin-top:30px">
		    </el-pagination>-->
		    <div style="margin-top: 40px;"></div>
					

<!--	      </el-carousel-item>-->
	    <!--</el-carousel>-->
	  </div>
					


</el-main>
</template>

<script>

export default {
  name: 'show',
  data () {
    return {
        input: '',
		good:'',
		currentPage: 1,
		isShow:true,
//		list:[
//		 {imgurl : require('../assets/good-1.jpg')},
//		 {imgurl : require('../assets/user.jpg')}
//		],
    }
  },
  methods:{
  	goods(index){
  		this.$router.push({
  			name:'goods',
  			params:{
  				data : this.good[index]
  			}
  		});
  	},
  	stores(index){
  		this.$router.push({
  			name:'stores',
  			params:{
  				data : this.good[index]
  			}
  		});
  	},

  },
	created: function() {
		this.$http.get('/msg')
			.then(
				res => {
					let data= res.data.card
					data.forEach((item)=>{
						item.isShow=true
					})
					this.good = data;
				}
		);
	},
	watch:{
		input : function(val){
//			for(var index=0;index<this.good.length;index++){
//				if(this.good[index].name.search(this.input)!=-1){
//					this.isShow = true
////					Vue.set(good,index,num);
//				}
//				else {
//					this.isShow[index] = false
//				}
//			}
			this.good.forEach((item)=>{
				if(item.name.search(val)!= -1){
					item.isShow=true;
				}
				else{
					item.isShow=false
				}
			})
		}
	}
}

</script>

<style>
.el-icon-menu{
	font-size: 12px;
	float: left;
	color: #888;
	cursor: pointer;
}

.el-icon-location{
	font-size: 12px;
	float: right;
	color: #888;
}
.bottom{
	margin-top: 20px;
}


</style>
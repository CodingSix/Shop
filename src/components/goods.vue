<template>
	<el-main>
		<el-row>
		  <el-col :span="4" v-for="(o, index) in 1" :key="o":offset="5"style="min-width: 300px;">
		    <el-card :body-style="{ padding: '0px' }">
		      <img :src="data.imgurl" class="image">
		      <div style="padding: 10px;">
		        <span>{{data.name}}</span>
		      </div>
		      <div style="margin: 10px;">
			      <el-button size="mini" type="primary" icon="el-icon-phone" round @click="call">联系卖家</el-button>
			      <!--<el-button size="mini" type="primary" icon="el-icon-star-on" round>收藏商品</el-button>-->
		      </div>

		    </el-card>
		  </el-col>
		  <el-col style="width:40%;margin-left: 7%;min-width: 420px;">
				<el-form ref="form" :model="form" label-width="80px">
					  <el-form-item label="商品">
					    <span style="font-size: 16px;">{{data.name}}</span>
					  </el-form-item>
					  <el-form-item label="收货地点" prop="region" :rules="[
      							{ required: true, message: '要选择收货地址'}]">
					    <el-select v-model="form.region" placeholder="请选择收货地址">
					      <el-option label="C1" value="1"></el-option>
					      <el-option label="C2" value="2"></el-option>
					      <el-option label="C3" value="3"></el-option>
					      <el-option label="C4" value="4"></el-option>
					      <el-option label="C5" value="5"></el-option>
					      <el-option label="C6" value="6"></el-option>
					      <el-option label="C7" value="7"></el-option>
					      <el-option label="C8" value="8"></el-option>
					      <el-option label="C9" value="9"></el-option>
					      <el-option label="C10" value="10"></el-option>
					      <el-option label="C11" value="11"></el-option>
					      <el-option label="C12" value="12"></el-option>
					      <el-option label="C13" value="13"></el-option>
					      <el-option label="C14" value="14"></el-option>
					      <el-option label="C15" value="15"></el-option>
					    </el-select>
					  </el-form-item>
					  <el-form-item label="交易时间" prop="date1" :rules="[
      							{ required: true, message: '要填写交易时间'}]" >
					    <el-col :span="11" style="margin: 0 ;">
					      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					    </el-col>
					    <el-col class="line" :span="2" style="margin: 0;">-</el-col>
					    <el-col :span="11" style="margin: 0;">
					      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					    </el-col>
					  </el-form-item>
					  <el-form-item label="以物换物">
					    <el-switch v-model="form.delivery"></el-switch>
					  </el-form-item>
					  <el-form-item label="购买数量" prop="num1" :rules="[
      							{ required: true, message: '不能为空'}]" >
					    <el-input-number v-model="form.num1" @change="handleChange" :min="1" :max="5" label="描述文字"></el-input-number>
					    <span style="margin-left: 20px;font-size: 16px;">价格:{{data.price}}元/个</span>
					  </el-form-item>
					  <el-form-item label="买家留言" prop="desc">
					    <el-input type="textarea" v-model="form.desc"></el-input>
					  </el-form-item>
					  <el-form-item>
					    <el-button type="primary" @click="onSubmit('form')">立即购买</el-button>
					    <el-button type="primary" @click="cart">加入购物车</el-button>
					  </el-form-item>
				</el-form>
		</el-col>
		</el-row>
		  <el-table
		    :data="data.comments"
		    :default-sort = "{prop: 'date', order: 'descending'}" 
		    style="margin-top: 40px;"
		    empty-text="暂无评论"
		    >
		    <el-table-column
		      prop="date"
		      label="日期"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      sortable
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="comment"
		      label="评价"
		      :formatter="formatter">
		    </el-table-column>
		    <el-table-column
		      prop="rate"
		      label="买家评分"
		      :formatter="formatter">
				      <template slot-scope="scope">
				      	<el-rate
						  v-model="scope.row.rate"
						  v-if = "scope.row.rate"
						  disabled
						  show-score
						  text-color="#ff9900"
						  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
						</el-rate>
				      </template>
		    </el-table-column>
		  </el-table>
	</el-main>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          num1: 1,
        },
		data : '',
		user : '',
		sub : '',
      }
    },
    methods: {
      call(){
      	this.$alert(
      		'联系号码:' + this.data.tel, '提示信息', {
        	confirmButtonText: '确定'
        })
      },
      onSubmit(form) {
        if(sessionStorage.getItem('user')!= null){
        	var money = this.user.purse.replace(/[^0-9]/ig,"");//正则
        	var price = this.data.price.replace(/[^0-9]/ig,"");
        	this.sub = money-price;
        	this.$refs[form].validate((valid) => {
		      if (valid) {
		        if(this.sub >= 0){
			        this.$confirm('确定要购买此商品吗', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			                this.$alert('购买成功,你的账号余额为￥'+ this.sub, '提示信息', {
			                confirmButtonText: '确定'
			                });
			                this.$router.push({
				      		name:'show'
				      		})
			        });
	
	      		}
	      		else{
	      			this.$alert('你的账号余额不足', '提示信息', {
	                confirmButtonText: '确定'
	                })
	      		}
		      } else {
		        this.$alert('交易资料没有填写完整！', '提示信息', {
                confirmButtonText: '确定'
                })
		        return false;
		      }
		    });
      	}
      	else{
      		this.$alert('请先登录账号！', '提示信息', {
                confirmButtonText: '确定'
            })
      		this.$router.push({
      		name:'login'
      		})
      	}
      },
      handleChange(value) {
        console.log(value);
      },
      cart(){
      	if(sessionStorage.getItem('user')!= null){
      		this.$router.push({
      		name:'cart',
      		params:{
  				data : this.data
  			}
      	})
      	}
      	else{
      		this.$alert('请先登录账号！', '提示信息', {
                confirmButtonText: '确定'
            })
      		this.$router.push({
      		name:'login'
      		})
      	}

      },
      getParams(){
      	var routerParams = this.$route.params.data;  
        // 将数据放在当前组件的数据内  
        this.data  = routerParams;
      }
    },
    created(){
    	this.getParams();
    	var token = sessionStorage.getItem('user');
	    this.$http.get('/user')
		.then(
			res => {
				let data= res.data.user
				data.forEach((item,index)=>{
					if(item.account == token){
						this.user = data[index];
						if(sessionStorage.getItem('rate')!=null){
							this.data.comments.push({
								date : new Date().toLocaleDateString(),
								name : this.user.username,
								rate : sessionStorage.getItem('rate'),
								comment: '愉快的交易，下次再来',
							})
							sessionStorage.removeItem('rate');
						}
					}
				})
		
			}
		);

    },
    watch: {  
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
      '$route': 'getParams',
//    sub:function(){
//    	var token = sessionStorage.getItem('user');
//	    this.$http.get('/user')
//		.then(
//			res => {
//				let data= res.data.user
//				data.forEach((item,index)=>{
//					if(item.account == token){
//						data[index].purse = '￥'+this.sub;
//						alert(data[index].purse);
//					}
//				})
//			}
//		)
//    }
//		sub : function(){
//			this.
//		}
    }
    
  }
</script>

<style>
.el-input{
	width: 100%;
}

.el-col{
	margin-top: 0;
}

.el-table{
	width: 70%;
	margin: 0 auto;
}


</style>
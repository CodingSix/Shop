<template>
	<el-main>
			<div id="user">
				<a href="" class="user_pic">
					<img :src="userlist.userpic">
				</a>

				<span>{{userlist.username}}</span>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"   style="top:0;background-color: #E9EEF3;">
				  <el-menu-item index="1" @click="change">切换用户</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的余额</template>
				    <el-menu-item index="2-1">淘币：￥{{userlist.purse}}</el-menu-item>
				  </el-submenu>
				</el-menu>
				<el-tabs type="border-card">

				  <el-tab-pane>
				    <span slot="label">所有订单</span>
				    <template>
					  <el-table
					    :data="userlist.order"
					    style="width: 100%">
					    <el-table-column type="expand">
					      <template slot-scope="props">
					        <el-form label-position="left" inline class="demo-table-expand">
					          <el-form-item label="商品名称">
					            <span>{{ props.row.name }}</span>
					          </el-form-item>
					          <el-form-item label="所属店铺">
					            <span>{{ props.row.shop }}</span>
					          </el-form-item>
					          <el-form-item label="商品 ID">
					            <span>{{ props.row.id }}</span>
					          </el-form-item>
					          <el-form-item label="店铺地址">
					            <span>{{ props.row.address }}</span>
					          </el-form-item>
					          <el-form-item label="商品描述">
					            <span>{{ props.row.desc }}</span>
					          </el-form-item>
					        </el-form>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="商品 ID"
					      prop="id">
					    </el-table-column>
					    <el-table-column
					      label="商品名称"
					      prop="name">
					    </el-table-column>
					    <el-table-column
					      label="店铺名字"
					      prop="shop">
					    </el-table-column>
					    <el-table-column
					      label="价格"
					      prop="price">
					    </el-table-column>
				        <el-table-column
					      fixed="right"
					      label="操作"
					      width="120">
					      <template slot-scope="scope">
					        <el-button
					          @click.native.prevent="deleteRow(scope.$index, userlist.order)">删除
					        </el-button>
					      </template>
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="待付款">
				  	<template>
					  <el-table
					    :data="userlist.pay"
					    style="width: 100%">
					    </el-table-column>
					    <el-table-column
					      label="商品 ID"
					      prop="id">
					    </el-table-column>
					    <el-table-column
					      label="商品名称"
					      prop="name">
					    </el-table-column>
					    <el-table-column
					      label="付款"
					      prop="pay">
					        <template slot-scope="props">
					       		<el-button type="primary" round>前往付款</el-button>
					       	</template>
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="待发货">
				  	<template>
					  <el-table
					    :data="userlist.send"
					    style="width: 100%">
					    </el-table-column>
					    <el-table-column
					      label="商品 ID"
					      prop="id">
					    </el-table-column>
					    <el-table-column
					      label="商品名称"
					      prop="name">
					    </el-table-column>
					    <el-table-column
					      label="催促"
					      prop="">
					        <template slot-scope="props">
					       		<el-button type="primary" round @click="urge">催促发货</el-button>
					       	</template>
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="待收货">
				  	<template>
					  <el-table
					    :data="userlist.take"
					    style="width: 100%">
					    </el-table-column>
					    <el-table-column
					      label="商品 ID"
					      prop="id">
					    </el-table-column>
					    <el-table-column
					      label="商品名称"
					      prop="name">
					    </el-table-column>
					    <el-table-column
					      label="确认情况"
					      prop="">
					        <template slot-scope="props">
					       		<el-button type="primary" round @click="sure">确认收货</el-button>
					       	</template>
					    </el-table-column>
					  </el-table>

					</template>
				  </el-tab-pane>
				  <el-tab-pane label="待评价">
				  	<template>
					  <el-table
					    :data="userlist.rated"
					    style="width: 100%"
					    empty-text="暂无需要评价的订单">
					    </el-table-column>
					    <el-table-column
					      label="商品 ID"
					      prop="id">
					    </el-table-column>
					    <el-table-column
					      label="商品名称"
					      prop="name">
					    </el-table-column>
					    <el-table-column
					      label="评价"
					      prop="rate">
					        <template slot-scope="props">
					       		 <el-rate
								    v-model="props.row.rate" v-if="props.row.rate"
								    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
								 </el-rate>
					       	</template>
					    </el-table-column>
					  </el-table>
					</template>
					<el-button type="primary" round style="margin-top: 10px;" @click="submit">提交</el-button>
				  </el-tab-pane>
				</el-tabs>


			</div>
			
	</el-main>
</template>

<script>
 export default {
    data() {
      return {
      	userlist:'',
		datalist:'',
		test:'',
      }
    },
    methods: {
      urge() {
        this.$alert('已催促卖家发货,请耐心等待', '信息', {
          confirmButtonText: '确定',
        });
      },
      sure() {
        this.$alert('卖家已收到你的转账,欢迎下次再来', '信息', {
          confirmButtonText: '确定',
        });
      },
      deleteRow(index, rows) {
  	      	this.$confirm('确定要购买此商品吗', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
							 rows.splice(index, 1);
		        });
      },
      submit() {
      	this.$confirm('确定要购买此商品吗', '提示', {
	          confirmButtonText: '确定',
	          cancelButtonText: '取消',
	          type: 'warning'
	        }).then(() => {
		      	sessionStorage.setItem('rate',this.userlist.rated[0].rate)
		        this.$alert('评论成功', '信息', {
		          confirmButtonText: '确定',
		        });
		        this.$router.push({
		      		name:'show',
		  		})
	        });

      },
      change() {
      	sessionStorage.removeItem('user');
      	this.$router.push({name:'login'}) 
      },
      getParams(){
        var routerParams = this.$route.params.data;  
        var routerParams2 = this.$route.params.list;
        // 将数据放在当前组件的数据内  
        this.userlist = routerParams;
        this.datalist = routerParams2;
      }
    },

    created(){
    	this.getParams();
    	var token = sessionStorage.getItem('user');
    	if(token!= null){
    				this.$http.get('/user')
						.then(
							res => {
								let data= res.data.user
								data.forEach((item,index)=>{
									if(item.account==token){
										this.userlist = data[index];
										this.userlist.order.push({
											id : this.datalist.shopid,
											name : this.datalist.name,
											shop : this.datalist.shopname,
											price : this.datalist.price,
											address : this.datalist.shopaddress,
											desc : this.datalist.desc
										});
										this.userlist.rated[0].id = this.datalist.shopid;
										this.userlist.rated[0].name = this.datalist.name;
										this.userlist.rated[0].rate = 1;

									}		
								})
							}
					);

		}
    	
    	
    },
    watch: {  
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
      '$route': 'getParams'  
    }
  }
</script>

<style>


	
#user{
	position: relative;
	width: 70%;
	margin: 0 auto;
}
.user_pic{
    display: inline-block;
    width: 52px;
    height: 52px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 50%;
    overflow: hidden;
    top: 2px;
}
.user_pic img{
	width: 50px;
	height: 50px;
    opacity: .7;
    cursor: pointer;
}

#user>span{
	position: relative;
	top: -18px;
	left: 3px;
}

.el-tabs{
	margin-top: 30px;
}

/*表格样式*/
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  
  
</style>
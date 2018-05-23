<template>
<el-main>
	<div id="seller">
				<a href="" class="seller_pic">
					<img :src="userlist.shoppic">
				</a>
				<span>{{userlist.shopname}}</span>
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"   style="top:0;background-color: #E9EEF3;right:20%">
				  <el-menu-item index="1" @click="stores()">店铺主页</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的余额</template>
				    <el-menu-item index="2-1">淘币：￥{{userlist.purse}}</el-menu-item>
				  </el-submenu>
				  <!--<el-menu-item index="2">
				  	  <el-badge :value="12" class="item">信息
					  </el-badge>
				  </el-menu-item>-->
				</el-menu>
				
				<el-tabs type="border-card" style="width: 70%;margin: 50px auto;">
				  <el-tab-pane>
				    <span slot="label">最近订单</span>
				    <template>
					  <el-table
					    :data="userlist.tableData1"
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
					          <el-form-item label="店铺 ID">
					            <span>{{ props.row.shopId }}</span>
					          </el-form-item>
					          <el-form-item label="商品分类">
					            <span>{{ props.row.category }}</span>
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					    <el-table-column
					      label="价格"
					      prop="price">
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="等待买家付款">
				  	<template>
					  <el-table
					    :data="userlist.tableData2"
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="等待发货">
				  	<template>
					  <el-table
					    :data="userlist.tableData3"
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					    <el-table-column
					      label="发货"
					      prop="">
					        <template slot-scope="props">
					       		<el-button type="primary" round @click="send">确认发货</el-button>
					       	</template>
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="已发货">
				  	<template>
					  <el-table
					    :data="userlist.tableData4"
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				  <el-tab-pane label="需要评价">
				  	<template>
					  <el-table
					    :data="userlist.tableData1"
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					  
					  </el-table>
					</template>
				  </el-tab-pane>
				  	  <el-tab-pane label="成功的订单">
				  	<template>
					  <el-table
					    :data="userlist.tableData2"
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
					      label="描述"
					      prop="desc">
					    </el-table-column>
					    <el-table-column
					      prop="rate"
					      label="买家评分"
					      :formatter="formatter">
							      <template slot-scope="scope">
							      	<el-rate
									  v-model="scope.row.rate"
									  disabled
									  show-score
									  text-color="#ff9900"
									  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
									</el-rate>
							      </template>
					    </el-table-column>
					  </el-table>
					</template>
				  </el-tab-pane>
				</el-tabs>
	</div>
	
</el-main>
</template>

<script>
 export default {
    data() {
      return {
      	userlist:''   
      }
    },
    methods:{
    	stores(){
    		this.$router.push({
    			name:'stores',
    		    params:{
	  				data : this.userlist
	  			}	
    		});
    	},
    	send() {
	        this.$alert('给买家回复发货成功', '信息', {
	          confirmButtonText: '确定',
	        });
        }
    	
    },
    created(){
//  	this.getParams();
    	var token = sessionStorage.getItem('user');
    	if(token!= null){
    				this.$http.get('/user')
						.then(
							res => {
								let data= res.data.user
								data.forEach((item,index)=>{
									if(item.account==token){
										this.userlist = data[index];				
									}		
								})
							}
					);
		}
    	else {
    		this.$router.push({
	      		name:'login',
	      	})
    	}
    	
    },
    watch: {  
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
      '$route': 'getParams'  
    }
  }	
</script>

<style>
#seller{
	position: relative;
	width: 100%;
	margin: 0 auto;
}
.seller_pic{
    display: inline-block;
    width: 52px;
    height: 52px;
    position: relative;
    border: 2px solid #FFF;
    border-radius: 50%;
    overflow: hidden;
    top: 2px;
}
.seller_pic img{
	width: 50px;
	height: 50px;
    opacity: .7;
    cursor: pointer;
}

#seller>span{
	position: relative;
	top: -18px;
	left: 3px;
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
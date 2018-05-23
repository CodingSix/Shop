<template>
<el-main>
  <el-table
    :data="datalist.cart"
    tooltip-effect="dark"
    style="width: 100%"
    empty-text="购物车暂时为空">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
    	prop="date"
      label="日期"
      width="170">
      <!--<template slot-scope="scope">{{ currentDate }}</template>-->
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品"
      width="300">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="200">
    </el-table-column>
    <el-table-column
      prop="shopname"
      label="店铺"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, datalist.cart)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  

    
  <div style="margin-top: 20px">
    <el-button @click="buy">立即购买</el-button>
  </div>

</el-main>

</template>

<script>
  export default {
    data() {
      return {
      	sub: '',
      	depot:'',
      	datalist: '',
//    	currentDate: (new Date()).toLocaleString(),
//      tableData: [{
//        date: '2018-01-01',
//        name: '篮球',
//        address: ' 耐克旗舰店',
//      }, {
//        date: '2018-01-02',
//        name: '潮式卫衣',
//        address: '官方旗舰店'
//      }, {
//        date: '2018-01-04',
//        name: '坚果',
//        address: '天猫超市'
//      }, {
//        date: '2018-02-01',
//        name: 'usb数据线',
//        address: '绿联数码店'
//      }, {
//        date: '2018-02-08',
//        name: '简易电脑桌',
//        address: '家居旗舰店'
//      }, {
//        date: '2018-02-11',
//        name: 'DIY台式',
//        address: '宁美国度官方旗舰店'
//      }],
//      multipleSelection: []
      }
   },
    methods: {
//    toggleSelection(rows) {
//      if (rows) {
//        rows.forEach(row => {
//          this.$refs.multipleTable.toggleRowSelection(row);
//        });
//      } else {
//        this.$refs.multipleTable.clearSelection();
//      }
//    },
//    handleSelectionChange(val) {
//      this.multipleSelection = val;
//    },
      buy() {
      	if(this.datalist.cart[0]!=undefined){
      		     this.$confirm('确定要购买此商品吗', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
								       		this.$alert('购买成功', '提示信息', {
								                confirmButtonText: '确定'
								          });
								          this.$router.push({
									      		name:'personal',
									      		params:{
										  				list : this.depot
										  			}
								      		})
			        });
      		

      	}
				else{
					this.$alert('购物车为空无法购买', '提示信息', {
                confirmButtonText: '确定'
          });
				}
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
      getParams(){
      	var routerParams = this.$route.params.data;  
        // 将数据放在当前组件的数据内  
        this.depot  = routerParams;
      }
    },
    created(){
    	this.getParams();
    	var token = sessionStorage.getItem('user');
			if(token != null){
				    	this.$http.get('/user')
				    	.then(
				    		res => {
				    			let data = res.data.user;
				    			data.forEach((item,index)=>{
													if(item.account==token){
														this.datalist = data[index];
														        this.datalist.cart.push({
																			'date' : (new Date()).toLocaleString(),
																			'name' : this.depot.name,
																			'price' : this.depot.price,
																			'shopname' : this.depot.shopname
																		})
													}
									})
				    		}
				    	)
			}
			else{
				  this.$alert('请先登录账号', '提示信息', {
                confirmButtonText: '确定'
          });
          this.$router.push({
      		name:'login'
      		})
			}
			
//			this.datalist.cart.push({
//				'date' : 'testdate',
//				'name' : this.depot.name,
//				'price' : this.depot.price,
//				'shopname' : this.depot.shopname
//			})

    	
//						var token = sessionStorage.getItem('user');
//					  this.$http.get('/user')
//						.then(
//							res => {
//								let data= res.data.user
//								data.forEach((item,index)=>{
//									if(item.account == token){
//										item.card[index].name = this.card.name ;
//										item.card[index].date = (new Date()).toLocaleString();
//										item.card[index].price = this.card.price ;
//										item.card[index].shopname = this.card.shopname;
//										this.datalist = item.card;
////										console.log(this.datalist.name);
////										console.log(this.card.cart[0].name);
//									}
//									
//								})
//						
//							}
//						);
    },
    watch: {  
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可  
      '$route': 'getParams'  
    }
  }
</script>

<style>
.el-table th>.cell{
	text-align: center
}
</style>
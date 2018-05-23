import Mock from 'mockjs'

//模拟后台



var test ={
	"card|2-8":[{
		'name' : '@cname',
		'price|18-388' : 0,
	    
	}]
}

//商品数据
var datalist = {
	"card":[
	{
		'name':'iphone数据线',
		'price':'￥28',
		'shopname':'陈傲天店铺',
		'shoprate':4.5,
		'shopaddress':'华广C15',
		'desc':'iphone6、iphone7通用数据线',
		'imgurl':'./static/img/good-1.png',
		'tel':'18826237462',
		'shopid':'011',
        'comments': 
        [{
          date: '2018/01/22',
          name: '买家A',
          comment: '卖家人很好，希望下次再来',
          rate:3.9     
        }, {
          date: '2018/02/14',
          name: '买家B',
          comment: '商品不错',
          rate:4.2
        }, {
          date: '2018/05/01',
          name: '买家C',
          comment: '非常好的一次购物体验',
          rate:4.8  
        }, {
          date: '2018/03/03',
          name: '买家D',
          comment: '货不属实！',
          rate:2.1  
        }],

	},
	
	{
		'name':'js权威指南',
		'price':'￥30',
		'shopname':'随缘书店',
		'shoprate':4.8,
		'shopaddress':'华广C5',
		'desc':'前端开发书籍',
		'imgurl':'./static/img/good-2.jpg',
		'shopid':'012',
		'tel':'18815415232',
		'comments': 
		[{
          date: '2018/03/18',
          name: '买家A',
          comment: '卖家同学很友好，非常愉快的一次交易',
          rate:5.0     
        }, {
          date: '2018/04/14',
          name: '买家B',
          comment: '商品不错',
          rate:4.2
        }],
       
	},
	
	{
		'name':'软皮篮球',
		'price':'￥60',
		'shopname':'开心店铺',
		'shoprate':3.8,
		'shopaddress':'华广C2',
		'desc':'正版斯佰丁篮球',
		'imgurl':'./static/img/good-3.png',
		'shopid':'013',
		'tel':'18833237462',
		'comments': [{}]
	},
	
	{
		'name':'iphone7手机壳',
		'price':'￥25',
		'shopname':'阿亮电子店',
		'shoprate':4.2,
		'shopaddress':'华广C10',
		'desc':'iphone7手机壳',
		'imgurl':'./static/img/good-4.png',
		'shopid':'014',
		'tel':'18844237462',
		'comments': [{}]
	},
	
	{
		'name':'健身哑铃',
		'price':'￥40',
		'shopname':'张哥杂货',
		'shoprate':4.7,
		'shopaddress':'华广C3',
		'desc':'40kg健身哑铃',
		'imgurl':'./static/img/good-5.png',
		'shopid':'015',
		'tel':'18855237462',
		'comments': [{}]
	},
	
	{
		'name':'飞利浦充电宝',
		'price':'￥88',
		'shopname':'飞利浦专卖店',
		'shoprate':4.5,
		'shopaddress':'华广C16',
		'desc':'10000毫安通用充电宝',
		'imgurl':'./static/img/good-6.png',
		'shopid':'016',
		'tel':'18866637462',
		'comments': [{}]
	},
	
	{
		'name':'高等数学',
		'price':'￥10',
		'shopname':'快乐书店',
		'shoprate':5,
		'shopaddress':'华广C5',
		'desc':'大学教材高等数学',
		'imgurl':'./static/img/good-7.png',
		'shopid':'017',
		'tel':'18877237462',
		'comments': [{}]
	},
	
	{
		'name':'任天堂swtitch',
		'price':'￥1666',
		'shopname':'土豪店铺',
		'shoprate':3.9,
		'shopaddress':'华广C8',
		'desc':'任天堂掌机swtitch',
		'imgurl':'./static/img/good-8.png',
		'shopid':'018',
		'tel':'18888237462',
		'comments': [{}]
	},	
	],

}

//用户数据
var userlist = {
	"user":
	[
	{
		'account':"18826237462",
		'password':"123456",
		'username' : '陈傲天',
		'userpic' : './static/img/user1.jpg',
		'shopname' : '陈傲天的店铺',
		'shoprate':5,
		'imgurl':'./static/img/banner-2.jpg',
		'tel':'18826237462',
		'shoppic': './static/img/seller1.jpg',
		'purse' : '388',
		'rated':
        [{
        	rate : 	null
        }],
		'order' : 		
		[{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        }],
		'tableData1': [{
          id: '001',
          name: '篮球',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          price: '￥188',
          rate: null
        }, 
        {
          id: '002',
          name: 'usb数据线',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          price:'￥26'
        }],
        
        
        'tableData2': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: 3.8
        }, 
        {
          id: '004',
          name: '坚果',
          category: '零食',
          desc: '百草味坚果大礼包组合',
          address: '华广C4',
          shop: '天猫超市',
          shopId: '10004',
          price:'￥30',
          rate: 4.4
        }],
        
        
        'tableData3': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        },
        {
          id: '002',
          name: 'usb数据线',
          category: '数码',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          shopId: '10002',
          price:'￥26'
        }],

        
        
        'tableData4': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        },
        {
          id: '003',
          name: '简易电脑桌',
          category: '家具',
          desc: '电脑桌台式桌简约现代家用写字台钢木',
          address: '华广C17',
          shop: '家居旗舰店',
          shopId: '10003',
          price:'￥98'
        }],
		'cart':[]
	},
	{
		'account':"admin",
		'password':"admin",
		'username' : '黄少天',
		'userpic' : './static/img/user2.jpg',
		'purse' : '198',
		'shopname' : '黄少天的店铺',
		'shoprate':4.5,
		'imgurl':'./static/img/banner-3.jpg',
		'tel':'18732109431',
		'shoppic': './static/img/seller2.jpg',
		'cart':
		[
//		{
//			date : '2018/5/11 上午8:36',
//			name : '篮球',
//			price : '￥38',
//			shopname : '陈傲天店铺'
//		},
//		{
//			date : '2018/5/14 下午3:28',
//			name : 'js权威指南',
//			price : '￥20',
//			shopname : '吐哈店铺'
//		}
		],
		'order':
		[{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        }, 
        {
          id: '002',
          name: 'usb数据线',
          category: '数码',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          shopId: '10002',
          price:'￥26'
        }],
        'rated':
        [{
        	rate : 	0
        }],
        
        'pay': 
        [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
        }, 
        {
          id: '004',
          name: '坚果',
          category: '零食',
          desc: '百草味坚果大礼包组合',
          address: '华广C4',
          shop: '天猫超市',
          shopId: '10004',
          price:'￥30'
        }],
        
        
        'send': [
        {
          id: '002',
          name: 'usb数据线',
          category: '数码',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          shopId: '10002',
          price:'￥26'
        }, 
        {   
          id: '003',
          name: '简易电脑桌',
          category: '家具',
          desc: '电脑桌台式桌简约现代家用写字台钢木',
          address: '华广C17',
          shop: '家居旗舰店',
          shopId: '10003',
          price:'￥98'
        }],

            
        'take': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        },
        {
          id: '003',
          name: '简易电脑桌',
          category: '家具',
          desc: '电脑桌台式桌简约现代家用写字台钢木',
          address: '华广C17',
          shop: '家居旗舰店',
          shopId: '10003',
          price:'￥	98'
        }],
        'tableData1': [{
          id: '001',
          name: '篮球',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          price: '￥188',
          rate: null
        }, 
        {
          id: '002',
          name: 'usb数据线',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          price:'￥26'
        }],
        
        
        'tableData2': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: 3.8
        }, 
        {
          id: '004',
          name: '坚果',
          category: '零食',
          desc: '百草味坚果大礼包组合',
          address: '华广C4',
          shop: '天猫超市',
          shopId: '10004',
          price:'￥30',
          rate: 4.4
        }],
        
        
        'tableData3': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        },
        {
          id: '002',
          name: 'usb数据线',
          category: '数码',
          desc: '绿联usb分线器一拖四',
          address: '华广C8',
          shop: '绿联数码店',
          shopId: '10002',
          price:'￥26'
        }],

        
        
        'tableData4': [{
          id: '001',
          name: '篮球',
          category: '球类',
          desc: '真皮手感耐磨室内外',
          address: '华广C15',
          shop: '耐克旗舰店',
          shopId: '10001',
          price: '￥188',
          rate: null
        },
        {
          id: '003',
          name: '简易电脑桌',
          category: '家具',
          desc: '电脑桌台式桌简约现代家用写字台钢木',
          address: '华广C17',
          shop: '家居旗舰店',
          shopId: '10003',
          price:'￥98'
        }],
	}
	],
	
}


//获取商品数据
Mock.mock('/msg',datalist);


//获取用户数据
Mock.mock('/user',userlist);




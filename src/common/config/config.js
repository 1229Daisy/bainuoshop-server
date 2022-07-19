// default config
module.exports = {
    default_module: 'api',
    weixin: {
       
    },
    express: {
        // 已废弃，之后考虑改回来，做成和阿里云的物流查询可以切换，方便大家的使用
        // 免费的，但是顺丰的话，要配合快递鸟的电子面单
        // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/ 
        appid: '12312312', // 对应快递鸟用户后台 用户ID
        appkey: '123123123123123123123123', // 对应快递鸟用户后台 API key
        request_url: 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'
    },
   mianexpress:{
        appid: '123123', // 对应快递鸟用户后台 用户ID
        appkey: '123123-4e61236-94cb5297309a', // 对应快递鸟用户后台 API key
        request_url: 'http://testapi.kdniao.com:8081/api/EOrderService',
        print_url: 'http://sandboxapi.kdniao.com:8080/kdniaosandbox/gateway/exterfaceInvoke.json',
        ip_server_url:'http://www.kdniao.com/External/GetIp.aspx'
    },
    qiniu: {
                                // 请填自己的domain域名
    },
    // 在七牛新建一个https的空间，这个是用来存储分享图片的https图片，对应的是goods表中的https_pic_url
    qiniuHttps: {
     
    },
    aliexpress:{
        // https://market.aliyun.com/products/56928004/cmapi021863.html?spm=5176.730005.productlist.d_cmapi021863.6ba73524uQjLqE&innerSource=search_%E5%85%A8%E5%9B%BD%E5%BF%AB%E9%80%92%E7%89%A9%E6%B5%81%E6%9F%A5%E8%AF%A2-%E5%BF%AB%E9%80%92%E6%9F%A5%E8%AF%A2%E6%8E%A5%E5%8F%A3#sku=yuncode1586300000
        url:'http://wuliu.market.alicloudapi.com/kdi', //阿里云的物流查询api，收费的
        appcode: 'asldjalsjdlasjdla' ,// 阿里云后台获取,
		sfLastNo:'0580', // 顺丰寄件人后四位，这个根据自己的寄件人手机设置，如果寄件人是不固定的，那么需要在order_express自己写代码了。
    },
	templateId:{
		// deliveryTemplate:
	}
};

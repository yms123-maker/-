require.config({
    paths:{
        "jquery":"jquery",
        "jquery-cookie":"jquery.cookie",
        "index":"index",
        "shoppingcar":"shoppingcar",
        "product":"product",
        "login":"login"
        
    },
    shim:{
        "jquery-cookie":["jquery"],
    }
})
require(["index","login","product","shoppingcar"],function(index,login,product,shoppingcar){
    index.downLoad()
    index.rotation()
    index.changeanother()
    index.box3rotation()
    index.imbition()

    login.download()
    
    product.sc_num()
    product.getImg()
    product.download()
    product.shoppingCar()

    shoppingcar.sc_RightDelete()
    shoppingcar.sc_RightNumBuntton()
    shoppingcar.sc_add()
    shoppingcar.sc_num()
    
})
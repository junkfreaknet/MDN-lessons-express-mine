//
//  database mysql sion
//

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SchemaSION_display_list=new Schema({
    
    ShippingDate: String,
    ShippingNo: String,
    MadoNo: String,
    NumShops: String
});

const sionList=new Schema({
    JIGYO_CD:String,
    SYU_YMD:String,
    BIN_KB:String,
    HAIBUN_MAD:String,
    AD_TEN_NO:String,
    HAISO_COURSE:String,
    HAIBUN_ORDER:String,
    HAISO_ORDER:String,
    TEN_NO:String,
    TEN_NM_KANJI:String,
    NUM_ITEMS:Number,
    PRICE_ORDERED:Number,
    RYOHANTEN_CD:String
})
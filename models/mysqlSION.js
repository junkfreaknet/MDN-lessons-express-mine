//
//  database mysql sion
//

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SchemaSIONDisplay=new Schema({
    
    ShippingDate: String,
    ShippingNo: String,
    MadoNo: String
    
});
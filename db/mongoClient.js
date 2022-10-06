const DBClient = require ('./dbClient')
const mongoose = require ('mongoose')
const Config = require ('../config/config')

class MongoClient extends DBClient {
    constructor(){
        super()
        this.connected = false
        this.client = mongoose
    }
    async connect () {
        try {
            const url= Config.db.connectString + Config.db.name
            await this.client.connect(url)
            this.connected =true
            console.log('db mongo connected')
        } catch(e){
            throw new Error('error to connect mongo..'+ e)
        }
    }

    async disconnect () {
        try {
            await this.client.connection.close()
            this.connected =false
            console.log('db mongo disconnected')
        } catch(e){
            throw new Error('error to disconnect mongo..'+ e)
        }
    }

    async add(product){
        try {
            const Product = mongoose.model('products', {
                name: String, price: Number
            })
            const p = new Product(product)
            return await p.save()
        } catch (e){
            throw new Error('error to add'+ e)
        }
    }
    async get(){
        try {
            const Product = mongoose.model('products', {
                name: String, price: Number
            })
            return await Product.find()
        } catch (e){
            throw new Error('error to get'+ e)
        }
    }
}

module.exports=MongoClient
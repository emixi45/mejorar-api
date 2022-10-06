

class DBClient {
    async connect(){
        throw new Error('no db client configured')
    }
    async disconnect(){
        throw new Error('no db client configured')
    }
    async add(product){
        throw new Error('no db client configured')
    }
    async exit(){
        throw new Error('no db client configured')
    }
}

module.exports=DBClient
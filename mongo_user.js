require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb')
const Data_Base_Uri = process.env.MONGODB_URI

// Create a MOngoClient with a MongoClientOption object to set the Stable Api version.
const client = new MangoClient(Data_Base_Uri, {
    serverApi: {
        version: ServerApiVersion.vi,
        strict: true,
        deprecationErrors: true,
    }
})

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect()
        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 })
        console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
        console.error('Error connecting to the Database Client')
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close()
    }
}
run().catch(console.dir)
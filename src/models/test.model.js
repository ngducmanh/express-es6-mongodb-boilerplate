import mongoose from 'mongoose'
import createModel from './_createModel'
import modelNames from './_modelsNames'

const TestSchema = new mongoose.Schema({
    name: String,
})

const Test = createModel(TestSchema, modelNames.test)

export default Test

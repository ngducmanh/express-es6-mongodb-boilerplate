import { model } from 'mongoose'

export default function createModel(schema, name) {
    return model(name, schema, name)
}

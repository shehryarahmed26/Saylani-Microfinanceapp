import mongoose, { Schema } from "mongoose";
const loanschema = new Schema(
    {
        title: mongoose.Schema.Types.String,
        description: mongoose.Schema.Types.String,
        author: mongoose.Schema.Types.String,
        blogimg: mongoose.Schema.Types.String,
        username: mongoose.Schema.Types.String,
        userimg: mongoose.Schema.Types.String,
    },
    {
        timestamps: true
    }
)
export const Loanmodel = mongoose.model('Loanmodels', loanschema)
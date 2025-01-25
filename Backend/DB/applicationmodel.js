import mongoose, { Schema } from "mongoose";
const applicationschema = new Schema(
    {
        username: mongoose.Schema.Types.String,
        email: mongoose.Schema.Types.String,
        userid: mongoose.Schema.Types.String,
        usersalary: mongoose.Schema.Types.String,
        loanamount: mongoose.Schema.Types.String,
        durationofpay: mongoose.Schema.Types.String,
    },
    {
        timestamps: true
    }
)
export const Applicationmodel = mongoose.model('LoanApplications', applicationschema)
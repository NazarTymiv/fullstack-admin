import mongoos from "mongoose";

const TransactionSchema = new mongoos.Schema(
    {
        userId: String,
        cost: String,
        products: {
            type: [mongoos.Types.ObjectId],
            of: Number,
        },
    },
    { timestamps: true }
);

const Transaction = mongoos.model("Transaction", TransactionSchema);
export default Transaction;

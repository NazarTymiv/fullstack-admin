import mongoos from "mongoose";

const AffiliateStatSchema = new mongoos.Schema(
    {
        userId: { type: mongoos.Types.ObjectId, ref: "User" },
        affiliateSales: {
            type: [mongoos.Types.ObjectId],
            ref: "Transaction",
        },
    },
    { timestamps: true }
);

const AffiliateStat = mongoos.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;

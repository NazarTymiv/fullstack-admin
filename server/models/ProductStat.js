import mongoos from "mongoose";

const ProductStatSchema = new mongoos.Schema(
    {
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: [
            {
                date: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
    },
    { timestamps: true }
);

const ProductStat = mongoos.model("ProductStat", ProductStatSchema);
export default ProductStat;

import mongoos from "mongoose";

const OverallStatSchema = new mongoos.Schema(
    {
        totalCustomers: Number,
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
        salesByCategory: {
            type: Map,
            of: Number,
        },
    },
    { timestamps: true }
);

const OverallStat = mongoos.model("OverallStat", OverallStatSchema);
export default OverallStat;

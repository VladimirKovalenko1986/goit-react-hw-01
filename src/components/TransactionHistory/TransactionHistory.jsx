import TransactionTable from "../TransactionTable/TransactionTable";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={css.table}>
            <thead className={css.head}>
                <tr className={css.trHead}>
                    <th className={css.th}>Type</th>
                    <th className={css.th}>Amount</th>
                    <th className={css.th}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.head}>
                {items.map((item) => (
                    <tr key={item.id} className={css.trBody}>
                        <TransactionTable item={item} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

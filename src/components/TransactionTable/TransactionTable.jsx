import TransactionHistory from "../TransactionHistory/TransactionHistory";
import css from "./TransactionTable.module.css";

export default function TransactionTable({ items }) {
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
                        <TransactionHistory item={item} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

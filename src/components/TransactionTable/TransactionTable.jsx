import css from "./TransactionTable.module.css";

export default function TransactionTable({ item: { type, amount, currency } }) {
    return (
        <>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
        </>
    );
}

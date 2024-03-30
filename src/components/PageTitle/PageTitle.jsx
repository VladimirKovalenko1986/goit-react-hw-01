import css from "./PageTitle.module.css";

export default function PageTitle({ text }) {
    return (
        <>
            <h2 className={css.title}>{text}</h2>
        </>
    );
}

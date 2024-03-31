import css from "./Profile.module.css";

export default function Profile({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <>
            <div className={css.conteiner}>
                <img className={css.img} src={avatar} alt={username} />
                <p className={css.titleName}>{username}</p>
                <p className={css.titleContact}>@{tag}</p>
                <p className={css.titleContact}>{location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.textStatistic}>Followers</span>{" "}
                    <span className={css.textLiks}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.textStatistic}>Views</span>{" "}
                    <span className={css.textLiks}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.textStatistic}>Likes</span>{" "}
                    <span className={css.textLiks}>{likes}</span>
                </li>
            </ul>
        </>
    );
}

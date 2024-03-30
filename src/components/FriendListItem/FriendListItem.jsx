import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={css.conteiner}>
            <img className={css.img} src={avatar} alt={name} width="48" />
            <p className={css.text}>{name}</p>
            <p
                className={clsx(
                    css.textStatus,
                    isOnline ? css.online : css.offline
                )}
            >
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}

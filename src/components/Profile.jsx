export default function Profile({
    payment: {
        username: name,
        tag,
        location,
        avatar: image,
        stats: { followers, views, likes },
    },
}) {
    return (
        <div>
            <div>
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    Followers <span>{followers}</span>
                </li>
                <li>
                    Views <span>{views}</span>
                </li>
                <li>
                    Likes <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

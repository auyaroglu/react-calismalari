import propTypes from 'prop-types'

function User({ name, surname, age, isLoggedIn, friends, address }) {

    if (!isLoggedIn) {
        return <div>Giriş Yapmadınız.</div>
    }

    return (
        <>
            <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."}</h1>
            {address.title} {address.zip}
            <br />
            <br />
            {
                friends &&
                friends.map((friend) =>
                    <div key={friend.id}>{friend.name}</div>
                )
            }
        </>
    )
}

User.propTypes = {
    name: propTypes.string.isRequired,
    surname: propTypes.string.isRequired,
    isLoggedIn: propTypes.bool.isRequired,
    age: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
    ]).isRequired,
    friends: propTypes.array,
    address: propTypes.shape({
        title: propTypes.string,
        zip: propTypes.number,
    })
}

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,

}

export default User
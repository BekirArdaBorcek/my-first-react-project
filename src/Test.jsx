import PropTypes from "prop-types"

function UserProfile(props) {
  return (
    <div>
      <h1>Hoş geldiniz, {props.username}!</h1>
      <p>Bu kullanıcı profil sayfasıdır.</p>
      <p>
        Kullanıcı adınız:{" "}
        <span dangerouslySetInnerHTML={{ __html: props.username }} />
      </p>
    </div>
  )
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
}

export default UserProfile

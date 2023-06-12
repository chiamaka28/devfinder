import location from "../assets/location.png"
import link from "../assets/link.png"
import company from "../assets/company.png"
const Main = ({ getUser }) => {
  return (
    <div>
      {getUser.map((user, index) => {
        return (
          <div key={index}>
            <div className="flex items-center">
              <div className=" ">
                <img
                  className="h-28 rounded-full "
                  src={user.avatar_url}
                  alt=""
                />
              </div>
              <div className="text-white">
                <p>{user.name}</p>
                <p>{user.login}</p>
                <p>{user.created_at}</p>
              </div>
            </div>
            <div>
              {user.bio ? (
                <p className="text-white">{user.bio}</p>
              ) : (
                <p className="text-white">this user didnt add a bio</p>
              )}
            </div>
            <div className="text-white">
              <div>
                <h5>Repos</h5>
                <p>{user.public_repos}</p>
              </div>
              <div>
                <h5>Followers</h5>
                <p>{user.followers}</p>
              </div>
              <div>
                <h5>Following</h5>
                <p>
                  {user.following}
                </p>
              </div>
            </div>
            <div>
              <img src={location} alt="" />
              <p></p>
            </div>
            <div>
              <img src={link} alt="" />
              <p></p>
            </div>
            <div>
              <img src={company} alt="" />
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

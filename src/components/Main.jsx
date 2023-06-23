
import location from "../assets/location.png";
import location1 from "../assets/location1.png";
import link from "../assets/link.png";
import link1 from "../assets/link1.png";
import twitter from "../assets/twitter.png";
import twitter1 from "../assets/twitter1.png";
import company from "../assets/company.png";
import company1 from "../assets/company1.png";
const Main = ({ getUser , placeHolder}) => {
  return (
    <div>
      {placeHolder ? <div className="flex justify-center items-center mt-[200px] font-extrabold text-2xl md:text-3xl"><h2 className="text-white">Search  A GitHub User</h2></div> : ""}
      {getUser.map((user, index) => {
        return (
          <div key={index} className="bg-darkBlueBg px-5 p-3 mt-5 rounded-xl">
            <div className="flex items-center gap-12 ">
              <div className=" ">
                <img
                  className="h-28 rounded-full "
                  src={user.avatar_url}
                  alt=""
                />
              </div>
              <div className="text-white">
                <p>{user.name}</p>
                {user.login ? <p>@{user.login}</p> : ""}
                <p>{user.created_at}</p>
              </div>
            </div>
            <div>
              {user.bio ? (
                <p className="text-white p-3">{user.bio}</p>
              ) : (
                <p className="text-white p-3">this user didnt add a bio</p>
              )}
            </div>
            <div className="text-white bg-slate-900 my-5 py-6 rounded-lg flex justify-center items-center gap-6">
              <div className="text-center">
                <h5>Repos</h5>
                <p className=" font-bold text-lg md:text-3xl">{user.public_repos}</p>
              </div>
              <div className="text-center">
                <h5>Followers</h5>
                <p className=" font-bold text-lg md:text-3xl">{user.followers}</p>
              </div>
              <div className="text-center">
                <h5>Following</h5>
                <p className=" font-bold text-lg md:text-3xl">{user.following}</p>
              </div>
            </div>
            <div className="my-2 flex gap-3 items-center">
              {user.location ? (
                <img src={location} className="h-7" alt="" />
              ) : (
                <img src={location1} className="h-7" alt="" />
              )}
              {user.location ? (
                <p className="text-white">{user.location}</p>
              ) : (
                <p className="text-white">No Location</p>
              )}
            </div>
            <div className="my-2 flex gap-3 items-center">
              {user.blog ? (
                <img src={link} className="h-7" alt="" />
              ) : (
                <img src={link1} className="h-7" alt="" />
              )}
              {user.blog ? (
                <a
                  href={user.blog}
                  target="_blank"
                  className="text-white cursor-pointer"
                >
                  {user.blog}
                </a>
              ) : (
                <p className="text-white">Not Available</p>
              )}
            </div>
            <div className="my-2 flex gap-3  items-center">
              {user.twitter_username ? (
                <img src={twitter} className="h-7" alt="" />
              ) : (
                <img src={twitter1} className="h-7" alt="" />
              )}
              {user.twitter_username ? (
                <p className="text-white">{user.twitter_username}</p>
              ) : (
                <p className="text-white">Not Available</p>
              )}
            </div>
            <div className="my-2 flex gap-3 items-center">
              {user.company ? (
                <img src={company} className="h-7" alt="" />
              ) : (
                <img src={company1} className="h-7" alt="" />
              )}
              {user.company ? (
                <p className="text-white">{user.company}</p>
              ) : (
                <p className="text-white">Not Available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

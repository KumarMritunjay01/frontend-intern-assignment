import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGitHubUser } from "./githubSlice";
import Loading from "../../components/Loading/Loading";
import Home from "../../pages/Home/Home";
import "../../styles/GitHubSearchPage.css";

function GitHubSearchPage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.github);

  const handleSearch = () => {
    if (username.trim()) {
      dispatch(fetchGitHubUser(username));
    }
  };

  return (
    <>
      <Home />
      <div className="github-container">
        <div className="github-search-box">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {loading && <Loading />}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
          <div className="github-user-card">
            <img src={user.avatar_url} alt="Avatar" width={100} />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <p>{user.location}</p>
            <p>Followers: {user.followers}</p>
            <p>Repos: {user.public_repos}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default GitHubSearchPage;

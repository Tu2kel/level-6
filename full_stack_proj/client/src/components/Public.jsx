import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import IssueList from "./IssueList";
import Issue from "./Issue";

export default function Public(props) {
  const { publicIssue, getAllIssues } = useContext(UserContext);

  useEffect( () => {
    getAllIssues()
  }, [])

  return (
    <div className="public">
      <header>Public Issues Below</header>
      <br />
      <IssueList issues={publicIssue}/>
    </div>
  );
}


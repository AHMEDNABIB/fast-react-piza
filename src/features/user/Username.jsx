import { useSelector } from "react-redux";
import { userName } from "./userSlice";

function Username() {
  const username = useSelector(userName);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;

//input:

import { useEffect, useState } from "react";

//output: boolean
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("offline", function (e) {
      setOnlineStatus(false);
    });

    window.addEventListener("online", function (e) {
      setOnlineStatus(true);
    });
  }, []);
  //boolean
  return onlineStatus;
};
export default useOnlineStatus;

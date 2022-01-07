import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const parent = "container-fluid";
  const header = "row bg-primary text-light";
  const headstyle = "d-flex aligh-items-center p-2";
  const studentname = "Pratik Khamkar";
  const studentid = "210940520062";

  const [list, setlist] = useState("");
  const [text, settext] = useState("[]");

  const gettext = (e) => {
    const newtext = e.target.value;
    settext(e.target.value);
  };

  const sendmsg = () => {
    if (text !== "") {
      const newlist = [...list, text];
      setlist(newlist);
    }
  };

  return (
    <div>
      <div className={parent}>
        <div classname={header}
         div className={headstyle}>
          <h2>myChatApp</h2>
          <h6>
            {studentname}/{studentid}
          </h6>
        </div>
      </div>
      <div>
        <input
          className="w-75 p-4"
          type="text"
          name=""
          id=""
          placeholder="Lets chat here"
          onChange={gettext}
        />
        <input className="p-4" type="button" value="SEND" onClick={sendmsg} />
      </div>
      {/* {list.map((item)=>{
        <div>{item}</div>
      }
      )} */}
    </div>
  );
}

import React, { useContext } from "react";
import { Menu } from ".";
import { userContext } from "./context";

export default function Contact() {
  let user = useContext(userContext);
  return (
    <div>
      <Menu />
      <h3>{user}</h3>
      <h3>
        <b>มหาวิทยาลัยอุบลราชธานี</b>
        <br />
        85 ถนนสถลมาร์ค 
        <br />
        ตำบลเมืองศรีไค
        <br />
        อำเภอวารินชำราบ
        <br />
        จังหวัดอุบลราชธานี
      </h3>
    </div>
  );
}

import React from "react";
import style from "./Testimonial.module.scss";

const Testimonial = ({details}) => {
  return (
    <div className={style.testimonial_card}>
      <div className="d-flex mb-3">
        <div className={style.avatar_container}>
          <img src={details.avatar?details.avatar:"./avatar.png"} className={style.avatar} />
        </div>
        <div className={style.user_details}>
          <div className={style.user_name}>{details.name}</div>
          <div className={style.user_desig}>{details.designation}</div>
        </div>
      </div>
        <div className={style.user_review}>
          "{details.review}"
        </div>
    </div>
  );
};

export default Testimonial;

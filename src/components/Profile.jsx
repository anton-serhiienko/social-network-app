import React from "react";
import css from "./Profile.module.css"


const Profile = () => {
    return(
        <div className={css.content}>
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"/>

            <div>
                ava + decription
            </div>
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;
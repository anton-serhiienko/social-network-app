import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={"/login"} />

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status : state.profilePage.status,
        authorizedUserId : state.auth.id
    }
}


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)

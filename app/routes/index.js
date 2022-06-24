import React from 'react';
import {
    Route,
    Routes,
    Navigate
} from 'react-router';


// ----------- Pages Imports ---------------
import Dashboard from './Dashboards/Dashboard';

import NavbarOnly from './Layouts/NavbarOnly';
import NavProfile from '../layout/components/NavProfile';
import ParticipantNavBar from './Layouts/ParticipantNavBar';

import ReCharts from './Graphs/ReCharts';

import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import ParticipantDropzone from './Forms/Dropzone/ParticipantsDropzone';
import CreateCampaign from './Forms/CreateCampaign';
import CampaignField from './Pages/Campaign';
import CampaignPageEditor from './Forms/CampaignPageEditor';
import Email from './Pages/Email';
import NotificationTemplateForm from './Forms/EditEmailTemplate';
import CampaignSettings from './Forms/SystemOptions';
import EditParticipant from './Forms/EditParticipant';
import ManageParticipantList from './Pages/Participant';
import ParticipantDetails from './Pages/ParticipantDetails';
import ManageCustomerList from './Pages/Customer';
import Webhook from "./Pages/Webhook";
import Logout from "./Pages/Logout";
import ParticipantLogout from "./Pages/ParticipantLogout";
import ManageRewardList from "./Pages/Reward";
import ParticipantPayout from "./Pages/ParticipantPayout";
import ParticipantCommision from "./Pages/ParticipantCommision";
import ManageCommissionList from './Pages/Commission';
import File from "./Pages/Settings/Files";
import secretKey from "./Pages/Settings/SecretKey";
import ReferralLogin from "./Pages/ReferralLogin/ReferralLogin";
import ReferralNewPassword from "./Pages/ReferralNewPassword";

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login/Login';
import Register from './Pages/Register';
import setupAdmin from './Pages/Setup';
import referralSignup from './Pages/ReferralSignup';
import ReferralReset from './Pages/ReferralReset';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import DefaultNavbar from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';
import { store } from "../store";
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
import port from '../port';
import Fetcher from '../utilities/fetcher';

let initializedState = async function(dispatch){
    let initialState = {
        allForms : {},
        options: {},
        notifications: [],
        system_notifications: [],
        user: [],
        uid : Cookies.get("uid")
    };
    initialState.options = await Fetcher(`${port}/api/v1/system-options/public`);
    try {
        if (Cookies.get("uid")) { // if user is logged in
            initialState.user = (await Fetcher(`${port}/api/v1/users/own`))[0];
            initialState.notifications = await Fetcher(`${port}/api/v1/notifications/own`);
        }
    }
    catch(err){

    }
    return dispatch(initializeState(initialState));
};

store.dispatch(initializedState);

store.subscribe(()=>{
    // console.log("store changed", store.getState());
});

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Provider store={store}>
              <Routes>
                <Navigate from="/" to="/dashboard" exact />

                <Route path="/dashboard" exact element={Dashboard} />

                { /*    Layouts     */}
                <Route path='/layouts/navbar' element={NavbarOnly} />
                <Route path='*user/profile' element={NavProfile} />


                { /*    Forms Routes    */}
                <Route element={DatePicker} path="/forms/date-picker" />
                <Route element={Dropzone} path="/assets" />
                <Route element={CreateCampaign} path="/create-campaign" />
                <Route element={CreateCampaign} path="/edit-campaign" />
                <Route element={CampaignPageEditor} path="/edit-campaign-page" />
                <Route element={Email} path="/notifications-templates" />
                <Route element={CampaignField} path="/campaign" />
                <Route element={NotificationTemplateForm} path="/edit-template/:id" />
                <Route element={CampaignSettings} path="/campaign-settings/:id" />
                <Route element={ManageParticipantList} path="/participants" />
                <Route element={ManageCustomerList} path="/customers" />
                <Route element={ParticipantDetails} path="/my-dashboard" />
                <Route element={EditParticipant} path="/edit-participant/:id" />
                <Route element={ParticipantDropzone} path="/profile/assets"/>
                <Route element={Webhook} path="/webhook" />
                <Route element={Logout} path="/logout" />
                <Route element={ParticipantLogout} path="/:campaignName/logout"/>
                <Route element={ManageRewardList} path="/payouts" />
                <Route element={ParticipantPayout} path="/profile/payouts" />
                <Route element={ParticipantCommision} path="/profile/commissions" />
                <Route element={ManageCommissionList} path="/commissions" />
                <Route element={File} path="/logo" />
                <Route element={secretKey} path="/settings" />



                { /*    Graphs Routes   */}
                <Route element={ReCharts} path="/graphs/re-charts" />

                { /*    Tables Routes   */}
                <Route element={Tables} path="/tables/tables" />
                <Route element={ExtendedTable} path="/tables/extended-table" />

                { /*    Pages Routes    */}
                <Route element={ComingSoon} path="/pages/coming-soon" />
                <Route element={Confirmation} path="/pages/confirmation" />
                <Route element={Danger} path="/pages/danger" />
                <Route element={Error404} path="/pages/error-404" />
                <Route element={ForgotPassword} path="/pages/forgot-password" />
                <Route element={LockScreen} path="/pages/lock-screen" />
                <Route element={Login} path="/login" />
                <Navigate from="/pub/:campaignName" to="/:campaignName/login" exact />
                <Route element={ReferralLogin} path="/:campaignName/login" />
                <Route element={Register} path="/pages/register" />
                <Route element={setupAdmin} path="/setup" />
                <Route element={referralSignup} path="/:campaignName/signup" />
                <Route name="Finish Your Registration" path="/:campaignName/invitation/:token" element={referralSignup}/>
                <Route element={ReferralReset} path="/:campaignName/forgot-password" />
                <Route element={ReferralNewPassword} path="reset-password/:pid/:token" />
                <Route element={Success} path="/pages/success" />
                <Route element={Timeline} path="/pages/timeline" />

                <Route path='/icons' exact element={Icons} />

                { /*    404    */}
                <Navigate to="/pages/error-404" />
            </Routes>    
        </Provider>
        
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            element={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            element={ NavbarOnly.Navbar }
            path="/layouts/navbar"
        />
        { /* Default Navbar: */}
        <Route
            element={ DefaultNavbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            element={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        { /* Default Sidebar: */}
        <Route
            element={ DefaultSidebar }
        />
    </Switch>
);

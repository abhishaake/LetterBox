import FeedView from "../FeedView/FeedView";
import {Grid,Card,Form,Button,Icon,Segment,Feed,Header,Comment} from "semantic-ui-react"
import AccountInfo from "../AccountInfo/AccountInfo";
import Suggestions from "../Suggestions/Suggestions";
import SidebarMenu from "../Sidebar/Sidebar";
function Profile(){

     const ownProfile = true;

     return (<>
         <SidebarMenu />
         <Grid stackable columns={3} textAlign='center' className="main" verticalAlign='middle'>
         <AccountInfo data={{newPost:ownProfile}}/>
        <FeedView data={{newPost:ownProfile}}/>
        <Suggestions />
        </Grid>
     </>)
}

export default Profile;
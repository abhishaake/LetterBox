import FeedView from "../FeedView/FeedView";
import SidebarMenu from "../Sidebar/Sidebar";
import {Grid,Card,Form,Button,Icon,Segment,Feed,Header,Comment} from "semantic-ui-react"
import AccountInfo from "../AccountInfo/AccountInfo";
import Suggestions from "../Suggestions/Suggestions";

function Home(){
     return (<>
     <SidebarMenu />
     <Grid stackable columns={3} textAlign='center' className="main" verticalAlign='middle'>
         <AccountInfo data={{newPost:true}}/>
         <FeedView data={{newPost:true}}></FeedView>
         <Suggestions />
      </Grid>
     </>)
}

export default Home;
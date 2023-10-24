import {
  Grid,
  Card,
  Form,
  Button,
  Icon,
  Segment,
  Feed,
  Header,
  Comment,
} from "semantic-ui-react";
import dp from "./logo512.png";
import SidebarMenu from "../Sidebar/Sidebar";
import AccountInfo from "../AccountInfo/AccountInfo";
import Suggestions from "../Suggestions/Suggestions";

function Post() {
  const text =
    "Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it.";

  return (
    <>
      <SidebarMenu />
      <Grid
        stackable
        columns={3}
        textAlign="center"
        className="main"
        verticalAlign="middle"
      >
        <AccountInfo data={{ newPost: true }} />
        <Grid.Column className="colMain colMid">
          <Card
            style={{
              width: "100%",
              textAlign: "start",
              padding: "15px 15px 0 15px",
              borderRadius: "15px",
              cursor: "default",
            }}
            link
          >
            <Feed>
              <Feed.Event>
                <Feed.Label image={dp} />
                <Feed.Content>
                  <Feed.Summary style={{ margin: "-0.5rem 0 0" }}>
                    <a>Laura Faucet</a>
                  </Feed.Summary>
                  <Feed.Date style={{ margin: "0" }}>3 days ago</Feed.Date>
                  <Feed.Extra text style={{ maxWidth: "95%" }}>
                    {text}
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon
                        name="like"
                        className="likeButton"
                        onClick={(e) =>
                          e.target.classList.toggle("likeButtonActive")
                        }
                      />
                      4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                  <Comment.Group style={{maxWidth:'95%',marginTop:'30px'}}>
                    <Header as="h3" dividing>
                      Comments
                    </Header>

                    <Comment >
                      <Comment.Avatar src={dp} />
                      <Comment.Content>
                        <Comment.Author as="a">Matt</Comment.Author>
                        <Comment.Metadata>
                          <div>Today at 5:42PM</div>
                        </Comment.Metadata>
                        <Comment.Text>How artistic!</Comment.Text>
                      </Comment.Content>
                    </Comment>
                    <Form reply style={{marginTop:'30px'}}>
                      <Form.TextArea rows={3} style={{minHeight:'50px',maxHeight:'100px'}}/>
                      <Button
                        content="Add Comment"
                        icon="edit"
                        primary
                        style={{float:'right'}} 
                      />
                    </Form>
                  </Comment.Group>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card>
        </Grid.Column>
        <Suggestions />
      </Grid>
    </>
  );
}

export default Post;

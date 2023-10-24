import {Grid,Card,Form,Button,Icon,Image,Feed,Header,Comment} from "semantic-ui-react"
import "./FeedView.css";
import dp from "../../man.jpg";
import AccountInfo from "../AccountInfo/AccountInfo";

function FeedView(props){
    const newPost = props.data.newPost;

    const text = "Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it. Have you seen what's going on in Israel? Can you believe it.";

    const openPost = () => {
        window.location.href = "/post/1";
    }

    return(
        <>
                
               

                <Grid.Column className="colMain colMid">
                {newPost && <Card
                        className="mobilePost"
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Form post>
                                        <Form.TextArea rows={3} maxRows={5} className="newPostInput" placeholder="Hey..."/>
                                        <Button
                                            content='New Post'
                                            labelPosition='right'
                                            icon='edit'
                                            primary
                                            className="postButton"
                                        />
                                    </Form>
                                </Feed.Content>
                                
                            </Feed.Event>
                        </Feed>
                    </Card> }
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                        {text.length>110 ? text.slice(0,110) + "..." : text}
                                        {text.length>110 ? <a onClick={openPost}> see more</a>:""}
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    {text.length>110 ? text.slice(0,110) + "..." : text}
                                        {text.length>110 ? <a onClick={openPost}> see more</a>:""}
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    {text.length>110 ? text.slice(0,110) + "..." : text}
                                        {text.length>110 ? <a onClick={openPost}> see more</a>:""}
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    {text.length>110 ? text.slice(0,110) + "..." : text}
                                        {text.length>110 ? <a onClick={openPost}> see more</a>:""}
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    {text.length>110 ? text.slice(0,110) + "..." : text}
                                        {text.length>110 ? <a onClick={openPost}> see more</a>:""}
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                    <Card
                        style={{width:'100%',textAlign:'start',padding:'15px 15px 0 15px',borderRadius:'15px',cursor:'default'}}   
                        link
                    >
                        <Feed>
                            <Feed.Event>
                                <Feed.Label >
                                    <div><Image src={dp} style={{width:'100%',aspectRatio : '1 / 0.95'}} ></Image></div>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary style={{margin:'-0.5rem 0 0'}}>
                                    <a>Laura Faucet</a>
                                    </Feed.Summary>
                                    <Feed.Date style={{margin:'0'}}>3 days ago</Feed.Date>
                                    <Feed.Extra text style={{maxWidth:'95%'}}>
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    Have you seen what's going on in Israel? Can you believe it.
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like' className="likeButton" onClick={e=> e.target.classList.toggle('likeButtonActive')} />4 Likes
                                        </Feed.Like>
                                    </Feed.Meta>
                                </Feed.Content>
                                
                            </Feed.Event>
                            <Comment.Group style={{float:'right',margin:'0',position:'relative',top:'-26px'}}>
                                <Comment>
                                    <Comment.Content>
                                        <Comment.Actions>
                                                <Comment.Action onClick={openPost}>Comments</Comment.Action>
                                        </Comment.Actions>
                                    </Comment.Content>
                                </Comment>
                            </Comment.Group>
                        </Feed>
                    </Card>
                </Grid.Column>
                

        </>
    );
}

export default FeedView;
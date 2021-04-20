import React from "react";
import { Grid, Image, List, GridColumn } from "semantic-ui-react";

const ArticleItem = props => {
  const { article } = props;
  return (
    
    <List.Item style={{ marginLeft: 50, marginTop: 30, padding: 20 }}>
      <a href={article.url}>
      <Grid  columns={3}>
      <Grid.Row>
        <Grid.Column
          mobile={16} tablet={8} computer={6}
        >
            <Image src={article.urlToImage} />
        </Grid.Column>
        
        <Grid.Column
          mobile={16} tablet={8} computer={10}
          
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
        >
          <div className="news-title">{article.title}</div>
          <List.Description style={{ margin: "20px 0", fontSize: 19, lineHeight: 1.5 }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item className="publishedOn">published on - {article.publishedAt.split("T")[0]}</List.Item>
          </List>
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </a>
    </List.Item>
   
  );
};

const ArticleList = props => {
  return (
    <Grid divided='vertically'> 
      <Grid.Row columns={2}>
          <Grid.Column  mobile={16} tablet={8} computer={12}>
              <List divided style={{ maxWidth: 1100}}>
                {props.articles.map((article, index) => (
                  <ArticleItem article={article} key={article.title + index} />
                ))}
              </List>
          </Grid.Column>
          <GridColumn  mobile={16} tablet={8} computer={3}>
            <div className="ads"> Ads content
            {props.articles.map((article, index) => (
                <div className="ads-content crossed" key={article.title + index}> ad {index + 1} </div>
              ))}
            </div>
          </GridColumn>
      </Grid.Row>
    </Grid>
  );
};

export default ArticleList;

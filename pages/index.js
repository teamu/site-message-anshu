import React, {useCallback, useState, Component} from 'react';
import {AppProvider,DataTable,Page,Form,FormLayout,Button,ResourceList,TextField,Layout,Card,Avatar,TextStyle} from '@shopify/polaris';
import {HomeMajor, TransferInMajor, DnsSettingsMajor,ListMajor,AddNoteMajor} from '@shopify/polaris-icons';

import axios from "axios";

const form = {
  justifyContent: "left",
  testAlign: "left",
};
const input = {
  width: "50%",
  padding: "12px 20px",
  margin: "8px 15px",
  boxSizing: "border-box",
};


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      insert: {
        id: "",
        title: "",
        content: "",
      },
    };
  }

  handleChange = (event) => {
    // console.log(event)
    this.setState({
      insert: { ...this.state.insert, [event.target.name]: event.target.value },
    });
  };

  componentDidMount = () => {
    
    /*var config = {
      method: 'get',
      url: 'https://custom-shipping-app.herokuapp.com/api/cmsmanagement/all',
      headers: { },
    };
    axios(config)
      .then( (response)=> {
        this.setState({
          data: response.data,
        });
      })
      .catch( (error) =>{
        console.log(error);
      });*/
  };

  // componentDidMount()
  emptyState = () => {
    this.setState({
      insert: {
        id: "",
        title: "",
        content: "",
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("A form was submitted: " + JSON.stringify(this.state));
    this.setState({
      data: [
        ...this.state.data,
        [
          this.state.insert.title,
          this.state.insert.content,
        ],
      ],
    });
    const data = this.state.insert;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(data);

    /*var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://custom-shipping-app.herokuapp.comapi/cmsmanagement/edit", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));*/
  };

  rows = [
    [
      "21-06-2021",
      "Example Business Name 1",
      "Web Devlopment",
      "Shankha Subhra Bag",
      "Web",
      "Not contacted yet.",
    ]
  ];
  render() {
    // return

    var selected1 = ('Converted' === this.state.lead_status) ? 'selected' : '';
    var selected2 = ('Pending' === this.state.lead_status) ? 'selected' : '';
    var selected3 = ('Decline' === this.state.lead_status) ? 'selected' : '';

    return (
      <Page title="Messages">
        <Layout>
          <Layout.Section>
            <Card title="Enter your Messages" sectioned>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    style={input}
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div>
                  <label>Content</label>
                  <textarea
                    type="text"
                    style={input}
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
              {/*<AppProvider
                i18n={{
                  Polaris: {
                    ResourceList: {
                      sortingLabel: "Sort by",
                      defaultItemSingular: "item",
                      defaultItemPlural: "items",
                      showing: "Showing {itemsCount} {resource}",
                      Item: {
                        viewItem: "View details for {itemName}",
                      },
                    },
                    Common: {
                      checkbox: "checkbox",
                    },
                  },
                }}
              > 
                <DataTable
                  columnContentTypes={[
                    "text",
                    "text",
                  ]}
                  headings={[
                    "Title",
                    "Content"
                  ]}
                  rows={this.state.data}
                />
              </AppProvider>*/]
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
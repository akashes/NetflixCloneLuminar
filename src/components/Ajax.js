import React, { Component } from "react";
import axios from "axios";

export default class Ajax extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				this.setState({ posts: response.data });
			})
			.catch((rej) => {
				console.log("api failed");
			});
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>id</td>
						<td>title</td>
					</tr>
				</thead>
				<tbody>
					{this.state.posts.map((ele, id) => {
						return (
							<tr>
								<td>{ele.id}</td>
								<td>{ele.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

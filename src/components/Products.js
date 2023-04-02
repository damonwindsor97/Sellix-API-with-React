import React, { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import 'animate.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';






const sellix = require("@sellix/node-sdk")("ddjty6fx05Ltf872kY1GrSFXvCVhkFtYaJXp92RQvYd0MJGvFCdvkO4BzFP7oFjz")

const Products = (props) => {
	const { onChange} = props;
	const queryClient = useQueryClient();
	const { isLoading, isError, data } = useQuery(['products'], getProducts, {
		keepPreviousData: true
	})

	// fetching products list
	async function getProducts() {

		const results = await sellix.products.list()
		console.log(results)
		return results;

	}getProducts();


	// Error Handling (basic)
	if (isLoading) {
		return <p>Loading.....</p>
	}

	if (isError) {
		console.log(isError);
		return <p>Error - {isError.message}</p>
	}


	return (
		<div id="root">
			<Container>
			<h1 className="text-center p-5">PRODUCTS</h1>
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Control  type="text" placeholder="Start typing to find an Account.." disabled />
				</Form.Group>
    		</Form>
				<div className="productGroup">
					<Row xs={2} md={3} className="g-4">
							{/* map through / display array of productsList, placing them within Cards */}
							{data && data.map((product) => (
						<Col>
							<Card className="productCard animate__animated">
								<Card.Img  className="text-center" variant="top" src="" />
								<Card.Body>
								<Card.Title className="text-center">{product.title}</Card.Title>
								<Card.Text className="text-center">
									{product.description}
								</Card.Text>
								<Card.Text className="text-center">
								${product.price_display}aud
								</Card.Text>
								<div className="text-center">
									<button
										data-sellix-product={product.uniqid}
										className="purchaseButton btn btn-info"
										type="submit"
										alt="Buy Now with sellix.io"
									>
									Purchase
									</button>
								</div>
								</Card.Body>
							</Card>
						</Col>
					))}
					</Row>
				</div>


			</Container>
			

		</div>

	);
}

export default Products;
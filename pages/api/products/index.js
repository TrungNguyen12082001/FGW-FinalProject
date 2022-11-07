import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method } = req;

  /*const {method, cookies} = req 
  /*const token = cookies.token; */ // Creating middleware for authentication

  dbConnect();

  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authenticated!");
    // } Creating middleware for authentication
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

//FakeStoreAPI
import { BASE_URL } from "../../api/base_url";

export async function getProducts() {
    const response = await fetch(`${BASE_URL}products?limit=3`)
    const data = await response.json();
    console.log("data", data);
    return data; // The Fake Store API returns an array of products
}
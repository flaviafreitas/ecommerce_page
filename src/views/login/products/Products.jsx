import { useParams } from "react-router-dom"
import HeaderMenu from "../../../components/Header/HeaderMenu/HeaderMenu"
import ProductsDetail from "../../../components/Header/ProductsDetail/ProductsDetail"
import Search from "../../../components/Header/Search/Search"
import './index.scss'

const Products = ({data}) => {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id == productId);

  return (
    <section className="product">
      <HeaderMenu />
      <Search />
      <ProductsDetail data={selectedProduct} />
    </section>
  )
}

export default Products
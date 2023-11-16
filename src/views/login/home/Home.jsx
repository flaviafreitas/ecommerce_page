import './index.scss'
import HeaderMenu from "../../../components/Header/HeaderMenu/HeaderMenu"
import Search from "../../../components/Header/Search/Search"
import ProductsCard from '../../../components/Header/ProductsCard/ProductsCard'

const Home = ({data}) => {
  return (
    <div>
      <HeaderMenu />
      <Search />
      <div className="home__products">
        {data.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
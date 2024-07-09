import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   const { data } = await fetchDataFromApi('/api/products')
  //   setData(data)
  // }


  return (
    <main className="">
      <HeroBanner />
      <Wrapper>

        {/* heading section start  */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">

          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>

          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with
            increased stack heights to help provide cushioning
            during extended stretches of running.
          </div>

        </div>
        {/* heading section end */}


        {/* products gird  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => {
            return (
              <>
                <ProductCard key={product.id} data={product} />
              </>)
          })
          }
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* products gird  */}



      </Wrapper>
    </main >
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi('/api/products?populate=*')
  return {
    // key value products:products both names are same so we can go with 1 name syntax also
    props: { products }
  }
}

//next js me hm useEffect ke through client side pe data fetch nhi krte , we want html pre-rendered that will help us in seo while in simple react html is injected through javascript and not availabe in 'page source' for seo
import Wrapper from "@/components/Wrapper"
import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  return (
    <div className="">
    <Wrapper>
    <HeroBanner/>
    <div className="text-center">
    <h1 className="text-4xl font-bold mb-4 mt-4">Sale the World through us</h1>
    <div className="mb-2">We are the leading platform in the world of ecommerce <br/> Feel Free to 
      buy anything and leave the quality to us 
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 mb-5 lg:grid-cols-3 gap-4 px-5">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </Wrapper>
    </div>
  )
}

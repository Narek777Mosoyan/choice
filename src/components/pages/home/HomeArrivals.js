import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Counter from "../../actual components/Counter";
import { homeproductslist } from "./homeproductslist";
import { Context } from "../../actual components/Context";
import { FaHeart } from "react-icons/fa"; 

export default function HomeArrivals() {
  const props = useContext(Context);
  return (
    <div className="home_arrivals_container">
      <h2 className="title">New Arrivals</h2>
      <div className="homearrivals_content">
        <Swiper slidesPerView={4} spaceBetween={10} loop="true" modules={[Autoplay]} autoplay={{delay : 5000, disableOnInteraction : false, pauseOnMouseEnter: true}} >{homeproductslist.map((item) => {
            return <SwiperSlide key={item.id}>
              
                <div className="home_arrivals_item">
                <FaHeart
                    style={{ color : !props.favorite.includes(item) ? 'var(--bg-dark-green-pallette)' : 'gold'}}
                    onClick={() => {
                      if (!props.favorite.includes(item)) {
                        props.addFavorite(item);
                        if(!props.productAdding){
                          props.setProductAdding(true)
                          setTimeout(() =>{
                            props.setProductAdding(false) 
                          },4000)
                        }
                      }
                      else {
                        props.removeFavorite(item.id);
                        props.setTotal(props.total - item.price * item.quanity);
                        item.quanity = 1;
                      }
                    }}
                  />
                    <img src={item.product} alt="" />
                    <div className="content_block">
                    <marquee behavior="" direction="">{item.name}</marquee>
                    <h4>{item.price.toLocaleString()}֏</h4>
                    <Counter quanity={item} />
                    <p>For {item.quanity} pcs price is {item.price * item.quanity}֏</p>
                    <button onClick={() => {
                      if(!props.cart.includes(item)) {
                        props.addCart(item);
                        props.setTotal(props.total + item.price);
                        if(!props.productAdding){
                          props.setProductAdding(true)
                          setTimeout(() =>{
                            props.setProductAdding(false) 
                          },4000)
                        }
                      }
                    }}>{!props.cart.includes(item) ? 'Add To Cart' : 'Added ✔'}</button>
                    </div>
                </div>
            </SwiperSlide>
        })}</Swiper>
      </div>
    </div>
  );
}

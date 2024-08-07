import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { categorieslist } from "./homeproductslist";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../actual components/Context";

export default function HomeCategory() {
const { filtering } = useContext(Context);
  return <div className="home_category_container">
        <Swiper slidesPerView={window.innerWidth <= 450 ? 1 : 5} spaceBetween={25} loop modules={[Navigation]} navigation>
            {categorieslist.map(category => {
                return <SwiperSlide key={category.id}>
                    <Link to='/Products' onClick={() => {
                        filtering(category.name);
                        window.scrollTo({ top : 0, behavior : 'smooth' });
                    }}>
                        <div className="home_category_item">
                            <div className="home_category_picture" style={{background : `url(${category.picture}) no-repeat center center / 50%`}}></div>
                            <h2>{category.name}</h2>
                        </div>  
                    </Link>
                </SwiperSlide>
            })}
        </Swiper> 
  </div>
}

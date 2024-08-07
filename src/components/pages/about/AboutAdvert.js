import { aboutlist } from "./aboutlist";
export default function AboutAdvert() {
    return (
        <div className='about_advert_container'>
            <div className="about_welcome">About us</div>
            <div className="about_advert_content">
                <div className="about_items">
                    <div className="about_overlay">
                        <h2> Choice Supermarket About</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut praesentium vitae. Deserunt quidem dolores minus quis animi esse reprehenderit dolorum enim, ipsa, alias at natus similique omnis itaque minima repudiandae facilis est deleniti corporis! Nulla enim nisi accusantium dolorem.</p>
                    </div>
                </div>
                <div className="about_content">
                    {aboutlist.map((about, i) => {
                        return <div className="about_item">
                            <h2 className="title">{about.name}</h2>
                            <div className="about_side">
                                <div className='about_item_picture' key={about.id}>
                                <img src={about.picture} alt="" />
                            </div>
                            <p>{about.content}</p>
                            </div>
                              
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
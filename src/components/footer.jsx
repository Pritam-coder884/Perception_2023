import contactDetails from "../data/contact"
import linkData from "../data/linkData"
import "../styles/footer.styles.scss"
import "../styles/embed.styles.scss"
import Gmap from "./gmap"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-info">
                    <div className="footer-left">
                        <div className="footer-left-left">
                            {
                                contactDetails.map((item,index)=>{
                                    return(
                                        <div key={index}  className="section">
                                        <div className="icon">{item.icon}</div>
                                        <div className="info">
                                            <h3>
                                            {item.header}
                                            </h3>
                                            <p>
                                                {item.info}
                                            </p>
                                        </div>
                                        </div>
                                    )
                                })
                            }
                            <div  className="links">
                            {
                                linkData.map((items,index)=>{
                                    return(
                                        <div key={index} className="button">
                                            <button>{items.icon}</button>
                                        </div>
                                        
                                    )
                                })
                            }
                            </div>
                        </div>

                        <div className="fb-embed">
                        <iframe title="perception-facebook" className="fb_canvas" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fperception.cetb%2F&tabs=timeline&width=250&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="250" height="400" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                    <div className="footer-right">
                        <Gmap/>
                </div>
            </div>
            <div className="copywrite">
                Odisha University of Technology and Research. All rights reserved
            </div>
        </div>
        
    )
}

export default Footer
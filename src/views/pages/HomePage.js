import NavBar from "../components/NavBar";
import  photo from  "../../assets/images/photo.png";
const HomePage = () => {
    const photos = [
        {id:1,photo:photo,title:"Rewind",subtitle:"Sportsbook"},
        {id:2,photo:photo,title:"Rewind",subtitle:"Sportsbook"},
        {id:3,photo:photo,title:"Rewind",subtitle:"Sportsbook"},
        {id:4,photo:photo,title:"Rewind",subtitle:"Sportsbook"},
        {id:5,photo:photo,title:"Rewind",subtitle:"Sportsbook"},
        {id:6,photo:photo,title:"Rewind",subtitle:"Sportsbook"},

    ]
    return (
        <div>
            <NavBar/>

            <section>
                <div className="container mt-5">
                    <h3>Digital Agency</h3>
                    <p><b>We developer complex interface systems for Web, Mobile & Ar
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deserunt dignissimos enim ex ipsa, labore nisi repudiandae? Beatae corporis dolorum ea est explicabo id magnam minus, saepe suscipit tenetur vel.</b></p>
                    {/*<img src="../../assets/images/photo.png"  style={{width:"100%"}} alt=""/>*/}
                    <img src={photo} className="img-thumbnail" alt=""/>
                </div>
            </section>

            {/*Our work project*/}
            <section style={{backgroundColor:"#f3f3f3"}}>

                <div className="container">
                    <h3 style={{textAlign:"center",padding:"10px"}}>Our Services</h3>
                    <div className="row container">
                        {
                            photos.map((p)=>{
                                return (
                                    <div className="col-4 g-4">
                                        <div className="card" style={{width: "18rem"}}>
                                            <img src={p.photo} className="card-img-top rounded mx-auto d-block" alt=""/>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    {p.subtitle}
                                                </p>
                                                <h5 className="card-title">{p.title}</h5>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>

            {/*Our service*/}
            <section style={{backgroundColor:"#f3f3f3",paddingTop:"20px"}}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col" style={{textAlign:'center'}}><h2>Our Services</h2></div>
                        <div className="col" style={{textAlign:'center'}}>
                            As a strategic partner, we create a working product with a thoughtful and large-scale architecture. We launch, support and development.
                        </div>
                    </div>
                   <div className="container">
                       <div className="row">
                           <div className="col-3 rounded  g-4">
                                       <div className="card" style={{width: "18rem"}}>
                                           <img src={photo} className="card-img-top rounded mx-auto d-block" alt=""/>
                                           <div className="card-body">

                                               <h5 className="card-title">Research & Analysis</h5>

                                           </div>
                                       </div>
                           </div>
                           <div className="col-3 rounded  g-4">
                               <div className="card" style={{width: "18rem"}}>
                                   <img src={photo} className="card-img-top rounded mx-auto d-block" alt=""/>
                                   <div className="card-body">

                                       <h5 className="card-title">Research & Analysis</h5>

                                   </div>
                               </div>
                           </div>
                           <div className="col-3 rounded  g-4">
                               <div className="card" style={{width: "18rem"}}>
                                   <img src={photo} className="card-img-top rounded mx-auto d-block" alt=""/>
                                   <div className="card-body">

                                       <h5 className="card-title">Research & Analysis</h5>

                                   </div>
                               </div>
                           </div>
                           <div className="col-3 rounded  g-4">
                               <div className="card" style={{width: "18rem"}}>
                                   <img src={photo} className="card-img-top rounded mx-auto d-block" alt=""/>
                                   <div className="card-body">

                                       <h5 className="card-title">Research & Analysis</h5>

                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
                </div>
            </section>

        </div>
    )
}

export  default  HomePage;
import React from 'react';
import karim from './karim.jpg'
import salah from './salah.jpg'
import messi from './messi.jpg'
import neymar from './neymar.jpg'
import ronaldo from './ronaldo.webp'
import dimaria from './dimaria.jpg'
import ceo from '../Carousel/ceo.jpg'
import './Blogsection.css'
const BlogSection = () => {
    return (
<div>
    <div className='blog  row g-5'>
      {/******************************* 
      
      First player section start here.. 
      
       ***********************************/}
       <div className='col-md-4 div_player'>
           <a href="/">
              <img className='player' src={karim} alt="" />
            </a>
            <div className='div_blog'>
                <p style={{fontWeight:'bold'}}>Football,Sports
                <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
                </p>
                <h4 style={{fontWeight:'bold'}}>
                    Your Favorite sports is Football.Know about it.
                </h4>
         
            </div>
            <p className='text-muted'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
            </p>

 {/************************** 
 
         Read More modal start here 
         Modal no. 1

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>

    </div>
</div>
</div>
{/* Modal ends here       */}

   {/* Author Section start here  */}
    <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
    </div>
    {/* Author section ends here  */}
</div>
{/* First player section ends here.. */}


{/**************************** 

Second player section start here.. 

*************************************/}
   <div className='col-md-4 div_player'>
        <a href="/">
            <img className='player' src={salah} alt="" />
        </a>
        <div className='div_blog'>
                <p style={{fontWeight:'bold'}}>Football,Sports
                <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
                </p>
         <h4 style={{fontWeight:'bold'}}>
             Your Favorite sports is Football.Know about it.
         </h4>
         
        </div>
        <p className='text-muted'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
        </p>
{/************************** 
 
         Read More modal start here 
         Modal no. 2

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>
          
    </div>
</div>
</div>
        {/* Modal ends here       */}
        {/*************************
         
         Author section start here 
        
        ******************************/}
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
        </div>
        {/* Author section ends here  */}
    </div>
   </div>
   {/* Second player section ends here  */}

   {/**************************
     Third player section start here ..
    ****************************/}
   <div className='col-md-4 div_player'>
          <a href="/">
            <img className='player' src={messi} alt="" />
          </a>
          <div className='div_blog'>
                <p style={{fontWeight:'bold'}}>Football,Sports
                <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
                </p>
         <h4 style={{fontWeight:'bold'}}>
             Your Favorite sports is Football.Know about it.
         </h4>
         
     </div>
        <p className='text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
        </p>
{/************************** 
 
         Read More modal start here 
         Modal no. 3

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>
          
    </div>
</div>
</div>
        {/* Modal ends here       */}
        {/*************************


        {/* Author section start here  */}
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        {/* Author section ends here  */}
   </div>

   {/* Third player section ends here..  */}


   {/**********************************}
     
     Foutrh player section start here 
   
    *************************************/}
   <div className='col-md-4 div_player'>
        <a href="/">
            <img className='player' src={neymar} alt="" />
        </a>
        <div className='div_blog'>
            <p style={{fontWeight:'bold'}}>Football,Sports
            <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
            </p>
            <h4 style={{fontWeight:'bold'}}>
                Your Favorite sports is Football.Know about it.
            </h4>
         
        </div>
            <p className='text-muted'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
            </p>
{/************************** 
 
         Read More modal start here 
         Modal no. 4

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>
          
    </div>
</div>
</div>
        {/* Modal ends here       */}
      
        {/****************************
              Author section start here 
        ******************************/}
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        {/* Author section ends here  */}
   </div>

   {/***************************
     Player section start here  
    ******************************/}
   <div className='col-md-4 div_player'>
        <a href="/">
             <img className='player' src={dimaria} alt="" />
        </a>
        <div className='div_blog'>
            <p style={{fontWeight:'bold'}}>Football,Sports
            <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
            </p>
            <h4 style={{fontWeight:'bold'}}>
                Your Favorite sports is Football.Know about it.
            </h4>
         
        </div>
            <p className='text-muted'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
            </p>
{/************************** 
 
         Read More modal start here 
         Modal no. 5

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>
          
    </div>
</div>
</div>
        {/* Modal ends here       */}
        
            {/* Author section here  */}
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        {/* Author section ends here  */}
   </div>

   {/* Player section ends here  */}


   {/****************************** 
   Player section fifth start here 
   **********************************/}
   <div className='col-md-4 div_player'>
         <a href="/">
            <img className='player' src={ronaldo} alt="" />
         </a>
         <div className='div_blog'>
         <p style={{fontWeight:'bold'}}>Football,Sports
          <small style={{marginLeft:'20px'}} class="text-muted"> ---May 5,2022</small>
         </p>
         <h4 style={{fontWeight:'bold'}}>
             Your Favorite sports is Football.Know about it.
         </h4>
         
     </div>
            <p className='text-muted'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores.
            </p>
{/************************** 
 
         Read More modal start here 
         Modal no. 6

 *********************************/}
            <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Read more..
            </button>

{/* <!-- Modal --> */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quos aspernatur in facere sunt natus obcaecati dignissimos repellat quasi. Delectus, quam explicabo iure suscipit in soluta harum recusandae obcaecati dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis adipisci mollitia dignissimos eveniet iusto repellat exercitationem iste illo vel, sapiente sit amet. Error mollitia iste non explicabo, provident ducimus, et corporis quaerat amet rem veritatis asperiores beatae reiciendis tenetur sit voluptatibus! Obcaecati libero molestiae eaque quam recusandae? Eius, fuga?

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        
             </div>
          
    </div>
</div>
</div>
        {/* Modal ends here       */}
      
        {/* Author section start here..  */}
        <div className='ceo'>
            <img className='ceoimg' src={ceo} alt="" />
            <div className='description'>
                <p style={{fontWeight:'bold'}}>Kaiser Hamid Sazid</p>
                <small class="text-muted">CEO and Founder</small>
            </div>
        </div>
        {/* Author section ends here  */}
   </div>
  </div>
</div>
    );
};

export default BlogSection;
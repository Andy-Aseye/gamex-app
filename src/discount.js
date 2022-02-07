import React from 'react'
/*import discount from './pictures/discount.png'*/

function Discount() {
    return (
        <div className="container-fluid discount-area p-3 my-5" id="discounts">
                <h2 className="text-center">Discounts</h2>
                <div className="container my-5">
                <div className="row gx-3">
                    <div className="col card shadow mx-3"><img src="https://cdn.vox-cdn.com/thumbor/D7KiECXKYkcIk1psKdqvLJjIgiM=/0x0:3377x4253/1200x0/filters:focal(0x0:3377x4253):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22715682/Cover___Cross_Gen_Digital_Bundle.jpg"/></div>
                    <div className="col card shadow mx-3"><img src="https://www.mobygames.com/images/covers/l/758910-ghost-of-tsushima-director-s-cut-playstation-5-front-cover.jpg"/></div>
                    <div className="col card shadow mx-3"><img src="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/235NM4/91b3acd6881d4212894d4e1e54cb3c7f.jpg/f/far-cry-6.jpg"/></div>
                </div>
                </div>
        </div>
    )
}

export default Discount

import React from 'react';

function News() {
    return (
       <div className="container-fluid p-5 news-area" id="news">
           <h2 className="my-5 text-center news-header">NEWS</h2>
           <div className="row">
               <div className="col news-col">
               <div className="card news-card shadow mb-3">
                    <img className="card-img-top" src="https://www.usnews.com/dims4/USNEWS/bb65ef6/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F6d%2F511b2fe4de17be229b1079aec4b008%2Fmedia%3A1d94e3be41cb4f919f82c15f0a01ec6aSony-PlayStation-Bungie_07751.jpg" alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title"><a href="https://www.usnews.com/news/business/articles/2022-01-31/sonys-playstation-buys-bungie-game-studio-with-xbox-ties">Sony's PlayStation Buys Bungie, Game Studio With Xbox Ties</a></h5>
                         <p className="card-text">PlayStation-maker Sony is escalating its competition with Xbox-maker Microsoft by buying the video game studio behind one of Xbox's hit games. Sony Interactive Entertainment said Monday it would spend $3.6 billion to buy Bungie Inc., an independent game publisher based in Bellevue, Washington.</p>
                             <p className="card-update"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
              </div>
              <div className="col news-col news-small d-none d-md-block d-xxl-none"><div className="card news-card shadow" style={{width: "19rem"}}>
  <img className="card-img-top" src="https://cdn.mos.cms.futurecdn.net/EPiCJpdvmGHMuqcyrPQEC8-970-80.jpg.webp" alt="Card cap" />
  <div className="card-body">
  <h5 className="card-title"><a href="https://www.techradar.com/news/upcoming-games-2022-release-dates">Upcoming games 2022: all the upcoming game releases for console and PC</a></h5>
    <p className="card-text">Looking for an upcoming games release schedule for 2022? Then you're in the right place. The coming months are set to be jam-packed with an abundance of new games and we're here to let you know when you'll get your hands on them.</p>
    <p className="card-update"><small className="text-muted">Last updated 21 hours ago</small></p>
  </div>
</div></div>
               </div>
               <div className="col news-col">
                    <div className="row my-4">
                        <div className="col-12 col-md-6 col-xl-6 news-small">
                        <div className="card news-card shadow" style={{width: "19rem"}}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wvrXP1liAUHIHc7FqFVbPG96ec5R7CJ9YA&usqp=CAU" alt="Card cap" />
  <div className="card-body">
    <h5 className="card-title"><a href="https://www.geekwire.com/2021/top-10-video-game-stories-of-2021-successes-surprises-big-hits-and-what-could-have-been/">Top 10 video game stories of 2021: Successes, surprises, big hits — and what could have been</a></h5>
    <p className="card-text">It's been a strange year in a strange business. The video game industry came into 2021 with a lot of momentum, with millions of new customers, high sales, and venture capitalists falling over each other...</p>
    <p className="card-update"><small className="text-muted">Last updated 12 mins ago</small></p>
  </div>
</div>
                        </div>
                        <div className="col news-col news-small my-3"><div className="card news-card shadow" style={{width: "19rem"}}>
  <img className="card-img-top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/28/full/1577547899-9091.jpg" alt="Card cap" />
  <div className="card-body">
  <h5 className="card-title"><a href="https://www.geekwire.com/2021/analysis-video-game-spending-setting-records-can-industry-meet-increasing-demand/">Analysis: Video game spending is setting records, but can the industry meet increasing demand?</a></h5>
    <p className="card-text">Last month, American consumers spent $5.6 billion on video game hardware, accessories, and assorted content, which marks an 18% increase over March 2020 and sets a record for March in any year.</p>
    <p className="card-update"><small className="text-muted">Last updated 21 hours ago</small></p>
  </div>
</div></div>
                    </div>
                    <div className="row my-4">
                        <div className="col news-col news-small"><div className="card news-card shadow" style={{width: "19rem"}}>
  <img className="card-img-top" src="https://ichef.bbci.co.uk/news/1024/branded_news/37B6/production/_116226241_gamesoftheyear.jpg" alt="Card cap" />
  <div className="card-body">
  <h5 className="card-title"><a href="https://www.theverge.com/22803171/gaming-pc-computer-best-games-2021">10 games to checkout this month.</a></h5>
    <p className="card-text">If you got yourself a new PC for the holiday, or even earlier, this list of excellent games released this year is a primer on what to consider.</p>
    <p className="card-update"><small className="text-muted">Last updated 1 day ago</small></p>
  </div>
</div></div>
                        <div className="col news-col news-small d-none d-xxl-block" id="last-news-card"><div className="card news-card shadow" style={{width: "19rem"}}>
  <img className="card-img-top" src="https://images.thedirect.com/media/article_full/star-wars-game-announcement-lucasfilm.jpg" alt="Card cap" />
  <div className="card-body">
  <h5 className="card-title"><a href="https://www.theverge.com/2021/12/9/22827178/quantic-dream-star-wars-eclipse-high-republic-announcement-game-awards">Star Wars: Eclipse. All you need to know</a></h5>
    <p className="card-text">Quantic Dream's rumored Star Wars title has been officially announced at the 2021 Game Awards: Star Wars: Eclipse, which will be set in the “High Republic” era of the Star Wars universe.</p>
    <p className="card-update"><small className="text-muted">Last updated 20 mins ago</small></p>
  </div>
</div></div>
                    </div>
               </div>

           </div>
       </div>
    )
}

export default News;

// Let’s Discuss post starting

const discussPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    console.log(data.posts);
    const discussPost = document.getElementById('discuss-post')
    data.posts.forEach((item) =>{
        console.log(item)
        const div = document.createElement('div');
        div.classList = 'w-[800px] rounded-xl bg-[#d3d2d2] py-5 px-5 mb-5';
        div.innerHTML = `<div>
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <img src="${item.image}" />
          </div>
        </div>
      </div>
      
      <div >
        
          <div>
            <div class="flex">
              <h1># ${item.category} </h1> 
              <h1> Author : ${item.author.name} </h1>
            </div>
            <h1 class="text-2xl text-black  mt-1 mb-1">${item.title}</h1>
            <p>${item.description}</p>
          
          </div>
        <br>
        <div>
          <hr class="new2">
      </div>
        <br>
        <div class="flex justify-between">
          <div class="flex space-x-5">
            <div class="flex gap-2">
              <img src="images/Group 13.png" alt="">
              <h1>${item.comment_count}</h1>
            </div>
            <div class="flex gap-2">
              <img src="images/Group 16.png" alt="">
              <h1>${item.view_count}</h1>
            </div>
            <div class="flex gap-2">
              <img src="images/Group 18.png" alt="">
              <h1>${item.posted_time}</h1>
            </div>
          </div>
          <div class="flex gap-2">
            <button><img src="images/Group 40106.png" alt=""></button>
            <h1>15 min</h1>
          </div>
        </div>
      </div>
     </div>`;
discussPost.appendChild(div);
    })
}







// here is Latest Posts function

const latestPost = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    // console.log(data);

    const cardPostId = document.getElementById('card-post')
    data.forEach((item) =>{
        // console.log(item)
        const div = document.createElement('div');
        div.classList = 'card w-96 bg-base-100 shadow-xl';
        div.innerHTML = `<figure><img src="${item.cover_image}" alt="Shoes" /></figure>
                            
        <div class="card-body">
            <div class="flex gap-5 py-3">
                <img src="images/Frame.png" alt="">
                <p>${item.author.posted_date}</p>
            </div>
          <h2 class="card-title">${item.title}</h2>
          <p>${item.description}</p>
          <div class="card-actions">
            <figure><img src="images/Ellipse 1.png" alt=""></figure>
            <div>
                <h1>${item.author.name}</h1>
                <p>${item.author.designation}</p>
            </div>
          </div>`;
          cardPostId.appendChild(div);
        
    })
}


discussPost();
latestPost();
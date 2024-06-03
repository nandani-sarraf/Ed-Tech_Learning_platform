import './style.css';

const Technical = ()=> {
    const backgroundImageUrl = 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg';
    const backgroundImageUrl2 = 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg';

return (
    <>
    <div class="blog-card">
    <div class="meta">
    <div className="photo" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.There are plenty of blogging platforms out there that you can use out of the box. However, building your own blog from scratch with Django is a great way to keep control over your content. Even if you’re just getting started with Django, its user-friendly features will allow you to focus on designing and posting your content.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
    </div>




    <div class="blog-card">
    <div class="meta">
    <div className="photo" style={{backgroundImage: `url(${backgroundImageUrl2})`}}></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
    </div>

    <div class="blog-card">
    <div class="meta">
    <div className="photo" style={{backgroundImage: `url(${backgroundImageUrl})`}}></div>
      <ul class="details">
        <li class="author"><a href="#">John Doe</a></li>
        <li class="date">Aug. 24, 2015</li>
        <li class="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
    </div>
    </>
)
}
export default Technical;
import "./App.css";

import LazyImage from "./components/LazyImage/LazyImage";
import { data } from "./constant/data";

function App() {
  return (
    <div data-test-id="component-app" className="container">
      <h1>
        🚀 Optimized Image Loading: Enhancing Performance with Intersection
        Observe 💨
      </h1>
      <p>
        Incorporate the power of Intersection Observer into your web projects to
        optimize image loading and elevate performance. With Intersection
        Observer, images are fetched dynamically as they come into the viewport,
        eliminating the need to load all images upfront. This technique improves
        page load speed and reduces unnecessary network requests, resulting in a
        smoother browsing experience for users. By intelligently loading images
        only when needed, we achieve faster load times, conserve bandwidth, and
        create a more efficient and enjoyable user experience. Learn how to
        implement this performance-enhancing feature in your projects and unlock
        the full potential of optimized image loading.
      </p>
      <div className="flexbox">
        {data.map((item, index) => (
          <LazyImage src={item.src} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;

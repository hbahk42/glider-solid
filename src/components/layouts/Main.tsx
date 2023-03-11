import { ParentComponent } from "solid-js";

const MainLayout: ParentComponent = (props) => {
  return (
    <div>
      <div class="p-4 bg-green-800">
        <div>
          <h1>Something reusable</h1>
          <p>Hello, I'm MainLayout Component</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
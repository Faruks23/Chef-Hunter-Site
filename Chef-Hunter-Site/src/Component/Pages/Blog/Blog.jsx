import React, { useRef } from 'react';
import './Blog.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blog = () => {
  const pdfRef = useRef()
  const downlodPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfwidth=pdf.internal.pageSize.getWidth();
      const pdfheight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfwidth / imgWidth, pdfheight / imgHeight);
      const imgX = 3;
      const imgY = 5;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('Blog.pdf');
    })
  }
  return (
    <>
      <div ref={pdfRef} className='w-full h-full'>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto w-[95%] gap-6 my-10">
          <div className="blog-cart">
            <h1>
              Differences between uncontrolled and controlled components.?
            </h1>
            <hr />

            <p>
              In React, a controlled component is a component that is controlled
              by React state, while an uncontrolled component is a component
              that maintains its own internal state. A controlled component
              receives its current value and an update callback via props, and
              the parent component manages the state of the component. When the
              user interacts with the component, the parent component updates
              the state, which in turn updates the component's value. An
              uncontrolled component, maintains its own internal state, and when
              the user interacts with the component, it updates its own state,
              which in turn updates the component's value.
            </p>
          </div>
          <div className="blog-cart">
            <h1>How to validate React props using PropTypes.?</h1>
            <hr />

            <p>
              Props and PropTypes are important mechanisms for passing read-only
              attributes between React components. We can use React props, short
              for properties, to send data from one component to another. If a
              component receives the wrong type of props, it can cause bugs and
              unexpected errors in your app. Since JavaScript doesn’t have a
              built-in type checking solution, many developers use extensions
              like TypeScript and Flow. However, React has an internal mechanism
              for props validation called PropTypes.
            </p>
          </div>
          <div className="blog-cart">
            <h1>Difference between nodejs and express js.?</h1>
            <hr />

            <p>
              <span>Express JS</span> <br /> Express is primarily a routing and
              middleware framework that is used to develop web applications,
              APIs, and mobile applications. Express can be installed as a
              dependency by using NPM, which makes it easy to use with NodeJS
              and also extends the base Node capabilities for the development of
              an application or service. Express vs Node JS when working
              together are a super combination.
              <br />
              <span> Node.JS</span> <br /> Node.JS uses an event-driven,
              non-blocking I/O model which makes it lightweight and efficient
              for the server environment that has to handle multiple concurrent
              connections with low latency. Using NodeJS will allow you to
              create such an application because it has high performance and
              speed.
            </p>
          </div>
          <div className="blog-cart">
            <h1>
              What is a custom hook, and why will you create a custom hook.?
            </h1>
            <hr />

            <p>
              Custom React JS hooks can help developers save time, are reliable,
              reusable, and make the code clean. Creating custom React JS hooks
              is relatively easy, and you can search for many open sources where
              you can get some custom hooks from the library already created by
              developers. Are you a React JS developer well versed in React
              coding looking for a job in the US? Try Turing. With Turing, you
              get a work-from-anywhere US-based software development job, which
              means you don’t have to travel all the way to the US. Head to
              Turing’s job page to know more.
            </p>
          </div>
        </div>
      </div>
      <div
        className="
       flex justify-center mb-4"
      >
        <button className="btn" onClick={downlodPdf}>
          Download
        </button>
      </div>
    </>
  );
};

export default Blog;
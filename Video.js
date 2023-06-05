import "./Video.css";

function Video() {
  let HeadingClass = "dark";
  let Cname2 = "ImgClass1";
  let Cname3 = "ImgClass2";
  let Cname4 = "ImgClass3";
  return (
    <>
      <div>
        <h3 className={HeadingClass}>Welcome To React JS Tutorial</h3>
        <img
          ClassName={Cname2}
          style={{ borderRadius: "70%" }}
          src="https://placekitten.com/240/160"
          alt="One"
          title="I am little cat"
        />
        <img
          ClassName={Cname3}
          title="I am in water"
          style={{ borderRadius: "70%" }}
          src="https://placebear.com/240/160"
          alt="Two"
        />
        <img
          ClassName={Cname4}
          style={{ borderRadius: "70%" }}
          src="https://picsum.photos/240/160"
          alt="Three"
          title="I am Nature"
        />
      </div>
    </>
  );
}
export default Video;

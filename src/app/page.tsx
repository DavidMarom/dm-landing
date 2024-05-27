import Image from "next/image";

const imageStyle = {
  borderRadius: '50%',
  width: '200px',
  height: '200px',
}

export default function Home() {
  return (
    <div className="page-content">
      <div className="strip-01">

        <img src="/images/DM3.jpg" alt="David Marom" style={imageStyle} className="toggle-off" />


        <div>

          <h1>David Marom</h1>
          <h2>Web Developer</h2>
          <br />
          <br />
          <p>Main stack: React, Node.js, Python</p>
          <p>Also: Angular, Vue, PHP</p>
          <p>Sql, Mongo | Mac, Ubuntu, Windows | AWS, Google</p>
        </div>

        <img src="/images/DM3.jpg" alt="David Marom" style={imageStyle} className="toggle-on" />

      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>Services</h2>
        <p></p>
      </div>

    </div>
  );
}

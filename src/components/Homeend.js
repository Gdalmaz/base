import React from 'react'
import '../css/home.css';
import Slider from 'react-slick';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'; // For Bootstrap
import DataTable from "react-data-table-component";


const Homeend = () => {
  const [animation, setAnimation] = useState(null);
  const achievements = [
    { title: 'Yapılan Proje', percentage: 5 },
    { title: 'Kullanılan Materyal', percentage: 5 },
    { title: 'Temizlenen Bölge', percentage: 5 },
  ];

  const columnss=[
    {
      name:'',
      selector:row=>row.photo
    },
    {
     name : 'Name',
     selector : row =>row.title,
  },
  {
    name:'StartTime',
    selector :row=>row.year,
  },

  ];
  const dataa = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        photo:'1) empty',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        photo:'2) empty',
    },
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      photo:'3) empty',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      photo:'4) empty',
  },
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
    photo:'5) empty',
},
{
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
    photo:'6) empty',
},
{
  id: 1,
  title: 'Beetlejuice',
  year: '1988',
  photo:'7) empty',
},
{
  id: 2,
  title: 'Ghostbusters',
  year: '1984',
  photo:'8) empty',
},
{
  id: 1,
  title: 'Beetlejuice',
  year: '1988',
  photo:'9) empty',
},
{
  id: 2,
  title: 'Ghostbusters',
  year: '1984',
  photo:'10) empty',
},
]
  
  const images = [
    {
      src: "/photos/1.png",
      alt: "Resim 1",
      isForeground: true,
    },

    {
      src: "/photos/4.jpg",
      alt: "Resim 1",
      isForeground: false
    },

    {
      src: "/photos/5.png",
      alt: "Resim 1",
      isForeground: false,
    },

    {
      src: "/photos/image2.jpg",
      alt: "Resim 1",
      isForeground: false,
    },

  ];
  return (
    <div>   
        <div className='tanitim'>
      <div className='tanitimtext'>Bizim Vizyonumuz Nedir?
      <div className='tanitimmintext'>
      <i className="bi bi-tree" style={{ fontSize: '1.9em' }}></i><br></br><br></br>Bizim amacımız ,insanların doğanın en büyük düşmanı ,çevre kirliliği ile 
        savaşarak bu savaştan galip gelmelerinde öncü olmaktır .
      </div>
      </div>
    </div>
    <div>
      <div className="carousel-wrapper">
        <Carousel transition="slide" duration={1000}>
          {images.map((image) => (
            <Carousel.Item key={image.src} className="carousel-item">
              <Image
                src={image.src}
                alt={image.alt}
                fluid
                onMouseEnter={() => { setAnimation("scale") }}
                onMouseLeave={() => { setAnimation(null) }}
                style={{ animation: animation ? `${animation} 1s ease-in-out` : "" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
    <div className='basarilarimiz'>
      <div className='basarilarimiztext'>

      <ul className="achievements-list">
            {achievements.map((achievement) => (
              <li key={achievement.title}>
                {achievement.title}
                <div className="percentage">
                  {achievement.percentage}%
                </div>
              </li>
            ))}
          </ul>
 

      </div>
    </div>

    <div>
      <div className='uyelertext'>
        Üyelerimiz/Top10Fighter
      </div>
       <div className='tablefortoptext'>
        <ul className='tablefortoptextitem'>
          <li className=''>Last10Members</li>
          <li className=''>Top10Fighter</li>
        </ul>

       </div>
       <div className='tables-container'>  
       <div className='tableformember'>    <DataTable
      columns={columnss}
      data={dataa}
    /></div>
   
   <div className='tableformember'>    <DataTable
      columns={columnss}
      data={dataa}
    /></div>
  </div>

    </div>
    <footer className="footer">
      <div className="about">
        <h2>Hakkımızda</h2>
        <p>
        Biz bu projeyi 4 arkadaş olarak tasarladık ve doğanın gelişimi ve yenilenmesi için bir payımızın olmasını istedik. Biz:<br /><br />
  <span style={{ color: 'green' }}>Gökhan Dalmaz, Kerem Dursun, Bülent Dağ, Mehmet Çimenlik</span><br /><br />
  olarak bu üzerimize düşen payda öncü olmak istedik.
        </p>
      </div>
      <div className="contact">
        <h2>İletişim Bilgileri</h2>
        <ul>
          <li>
            <i className="bi bi-envelope"></i>
            <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            <i className="bi bi-phone"></i>
            <a href="tel:+901234567890">+90 123 456 78 90</a>
          </li>
          <li>
            <i className="bi bi-geo-alt"></i>
            <p>
              123 Main Street, Anytown, CA 12345, USA
            </p>
          </li>
        </ul>
      </div>
    </footer>
    </div>

 
    
  )
}

export default Homeend;

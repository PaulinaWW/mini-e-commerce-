import React from 'react'

const contributors = [
  {
    name: "Gloria Nwaigba",
    role: "Software Developer",
    picture:"../assets/Gloria_picture.png",
    social: [
        {
          url: "https://twitter.com/bellafinegirl",
          icon:'/image/x-image.png'
        },
        {
          url:"https://github.com/Nwaigba66",
          icon: '/image/github.png'
        },
        // {
        //   url: "",
        //   icon: '/image/linkedin.png'
        // },
      ],
  },
  // {
  //   name: "Paula",
  //   role: "Software Developer",
  //   picture:"../assets/Paula.png",
  //   social: [
  //       {
  //         url: "",
  //         icon:'/image/x-image.png'
  //       },
  //       {
  //         url: "",
  //         icon: '/image/github.png'
  //       },
  //       {
  //         url: "",
  //         icon: '/image/linkedin.png'
  //       },
  //     ],
  // },
]

const AboutPage = () => {
  return (
    <div>
      <>
      <div className='about-info'>
        <h2>Mandy's E-commerce</h2>
        <p>
        Mandy's E-commerce website display's a complete list of all products sold.<br></br>
        Also user's can find detailed information of products including their price, description, discount percentage<br></br>
        rating, stock, brand, and their categories. The user can filter their products via their category or search.
        </p>
      </div>

<div className="contributors">
  <h3 className="text-2xl text-center border-b-2">Contributors</h3>
  <div>
    {contributors.map(({ name, role, picture, social }) => (
      <div key={role} className="flex gap-4 mt-4 border rounded p-1">
        <div className="contributor-img">
          <Image src={picture} width={50} height={50} alt={name} />
        </div>
        <div>
          <h3>
            Role: <span className="text-lg">{role}</span>
          </h3>
          <div>
            {social.map(({ url, icon }) => (
              <div key={url}>
                <Link href={url}>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src={icon} width={20} height={20} alt="" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>;

      </>

    </div>
  )
}

export default AboutPage

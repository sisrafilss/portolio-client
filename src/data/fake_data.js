const useData = () => {
  const projects = [
    {
      id: 1,
      name: "FitPal Bicycle",
      descriptions: [
        "FitPal Bicycle is a Bicycle manufacturing company’s website.",
        "This website contains all products and their detailed information.",
        "The home page has simple top navigation, a carousel slider in the banner section, a welcome user section, some latest products of the company, a testimonial section, and the footer at the bottom.",
        "The overall project uses React.js and Bootstrap 5, including vanilla CSS and an External Node server.",
        "The website has a dashboard for regular subscribers and Admin. Normal user can manage their orders and provide review.",
        "An admin can manage orders, add a new product, delete a product, and make another user admin.",
        "An admin can manage orders, add a new product, delete a product, and make another user admin.",
        "Please use admin@admin.com and 123456 as passwords for login in as Admin for testing purposes.",
        "Remember, User and Admin panel dashboard menus are different. Please login as both a regular user and as Admin to examine both.",
        "The Dashboard can only be accessed from the Desktop / Laptop right now. The mobile version will be added soon.",
        "This project is used MongoDB as a database.",
        "This server-side is hosted in Heroku.",
        "It is a very simple Node.js server that includes only a few APIs only.",
      ],
      fullScreenshot: "https://i.ibb.co/4V9zhTL/1-fitpal-home.png",
      images: [
        "https://i.ibb.co/DKYzDZF/fitpal-1.png",
        "https://i.ibb.co/51XbTx5/fitpal-2.png",
        "https://i.ibb.co/B2Sn8PX/fitpal-3.png",
        "https://i.ibb.co/m6SmvhJ/fitpal-4.png",
      ],
      links: {
        liveSite: "https://fitpal-bicycle.web.app/",
        githubClient: "https://github.com/sisrafilss/fitpal-bicycle-client",
        githubServer: "https://github.com/sisrafilss/fitpal-bicycle-server"
      }
    },
    {
      id: 2,
      name: "Horizon Delivery",
      descriptions: [
        "Are you looking for a secure and trusted delivery service provider for Your E-Commerce Business? Horizon Delivery Network provides you with a Global shipping solution. Click the link to visit our website https://horizon-delivery-b47c3.web.app",
        "Horizon Delivery Network provides you with a fast, secure, and reliable delivery service for your online business.",
        "You can avail a suitable service for you from our various service package.",
        "You can easily log in using your Google account and place your order. You can avail of multiple services or one service for a considerable time.",
        "You can manage your order from the My Orders page after login.",
        "You can check our latest offer and discussion about Global parcel delivery in our Blog section."
      ],
      fullScreenshot: "https://i.ibb.co/K0RmtDS/1-horizon-home.png",
      images: [
        
        "https://i.ibb.co/ZXsq6SH/horizon-1.png",
        "https://i.ibb.co/SQyBCYt/horizon-2.png",
        "https://i.ibb.co/fv8Xrfh/horizon-3.png",
        "https://i.ibb.co/t8sX7s7/horizon-4.png"
      ],
      links: {
        liveSite: "https://horizon-delivery-b47c3.web.app/",
        githubClient: "https://github.com/sisrafilss/horizon-delivery-client",
        githubServer: "https://github.com/sisrafilss/horizon-deliver-server"
      }
    },
    {
      id: 3,
      name: "Sundarban Healthcare",
      descriptions: [
        "Sundarban Healthcare is committed to serving you the best quality of health service.",
        "Click this link to visit Sundarban Healthcare: https://sundarban-healthcare.web.app",
        "Are you thinking about your diagnostic research? Sundarban Healthcare is glad to provide you world-class diagnostic research facility by specialists doctors.",
        "Dental care is super easy than ever before. Visit our website and appoint your doctor and get a schedule at your comfortable time.",
        "We have a special team of neurology. Don’t forget to appoint if you have to need any support related to neurology.",
        "We also have specialists in Cancer Oncology, Medical Counseling, Drug/Medicine, Pregnancy & Birth, and many more. Appoint your doctor today.",
        "Sundarban Healthcare aims to bring medical support to your doorsteps at affordable prices and the best quality of services. Take our services and stay healthy."
      ],
      fullScreenshot: "https://i.ibb.co/VTJQpjM/1-sundarban-healthcare-home.png",
      images: [
        
        "https://i.ibb.co/hsj5mbq/healthcare-1.png",
        "https://i.ibb.co/KFW8Xhd/healthcare-2.png",
        "https://i.ibb.co/jy5Zhwq/healthcare-3.png",
        "https://i.ibb.co/vqY77Q5/healthcare-4.png"
      ],
      links: {
        liveSite: "https://sundarban-healthcare.web.app/",
        githubClient: "https://github.com/sisrafilss/sundarban-healthcare"
      }
    },
    {
      id: 4,
      name: "Code Intelligence",
      descriptions: [
        "Teaching Code with fun is the primary purpose of Code Intellegence.",
        "You can choose any technology or programming language from our variety of Courses.",
        "You will be able to fulfill your dream to be a Programmer with Code Intelligence."
      ],
      fullScreenshot: "https://i.ibb.co/T1nPNsB/code-intelligence.png",
      images: [
        "https://i.ibb.co/nr7VFXz/code-intelligence-1.png",
        "https://i.ibb.co/gv75sg6/code-intelligence-2.png",
        "https://i.ibb.co/G5SNXJS/code-intelligence-3.png",
        "https://i.ibb.co/XX0DHTf/code-intelligence-4.png"
      ],
      links: {
        liveSite: "https://educational-services-ih.netlify.app/",
        githubClient: "https://github.com/sisrafilss/code-intelligence"
      }
    },
    {
      id: 4,
      name: "IT-Solution Center",
      descriptions: [
        "The technologies are used to develop this project are HTML, CSS, JavaScript, Bootstrap, and React.",
        "It is designed for an IT-Support provider company featuring their IT Specialists.",
        "Anyone can easily choose their necessary IT Specialists according to their budget and make a team for their IT-Support."
      ],
      fullScreenshot: "https://i.ibb.co/510t6J7/it-colution-center.png",
      images: [
        "https://i.ibb.co/510t6J7/it-colution-center.png"
      ],
      links: {
        liveSite: "https://it-solution-center.netlify.app/",
        githubClient: "https://github.com/sisrafilss/it-solution-center"
      }
    }
  ];
  return projects;
}

export default useData;
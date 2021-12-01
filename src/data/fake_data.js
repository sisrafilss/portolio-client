const useData = () => {
  const projects = [
    {
      id: 1,
      name: "FitPal Bicycle",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint, saepe error illo cum architecto aut fugiat beatae ullam quibusdam dolores amet id molestias. Provident sapiente ",
      images: {
        image1: "https://i.ibb.co/4V9zhTL/1-fitpal-home.png",
        image2: "https://i.ibb.co/FDhvHhS/2-fitpal-product-detail.png",
        image3: "https://i.ibb.co/vxHMfWx/3-fitpal-user-dashboard.png",
        image4: "https://i.ibb.co/9bp3Dmh/4-fitpal-admin-dashboard-add-product.png",
        image5: "https://i.ibb.co/sHzJScv/5.png",
        image: "https://i.ibb.co/dJhYKvx/6-fitpal-products.png"
      },
      links: {
        liveSite: "https://fitpal-bicycle.web.app/",
        githubClient: "https://github.com/sisrafilss/fitpal-bicycle-client",
        githubServer: "https://github.com/sisrafilss/fitpal-bicycle-server"
      }
    },
    {
      id: 2,
      name: "Horizon Delivery",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quae beatae accusantium, saepe hic eos? Illum libero possimus numquam sapiente ipsam, aliquam nam suscipit fuga nemo quas .",
      images: {
        image1: "https://i.ibb.co/K0RmtDS/1-horizon-home.png",
        image2: "https://i.ibb.co/2vgF45g/2-horizon-product-detail.png",
        image3: "https://i.ibb.co/1ZLSb8Z/3-horizon-my-orders.png",
        image4: "https://i.ibb.co/4N0fTF5/4-horizon-add-a-new-service.png",
        image5: "https://i.ibb.co/6Xs82h0/5-horizon-manage-all-orders.png"
      },
      links: {
        liveSite: "https://horizon-delivery-b47c3.web.app/",
        githubClient: "https://github.com/sisrafilss/horizon-delivery-client",
        githubServer: "https://github.com/sisrafilss/horizon-deliver-server"
      }
    },
    {
      id: 3,
      name: "Sundarban Healthcare",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, voluptatum distinctio voluptate sapiente fugiat quasi nisi sequi, architecto libero animi aliquid laudantium error",
      images: {
        image1: "https://i.ibb.co/VTJQpjM/1-sundarban-healthcare-home.png",
        image2: "https://i.ibb.co/p3FyvnY/2-sundarban-healthcare-service-detail.png",
        image3: "https://i.ibb.co/3zK12Q9/3-sundarban-healthcare-about-us.png",
        image4: "https://i.ibb.co/HK19VdH/4-sundarban-healthcare-contact-us.png",
        image5: "https://i.ibb.co/WFbGBXw/5-sundarban-healthcare-all-services.png"
      },
      links: {
        liveSite: "https://sundarban-healthcare.web.app/",
        githubClient: "https://github.com/sisrafilss/sundarban-healthcare"
      }
    }
  ];
  return projects;
}

export default useData;
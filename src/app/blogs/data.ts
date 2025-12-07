export interface Blog {
  title: string;
  excerpt: string;
  link: string;
}
export const blogsData: Record<string, Blog[]> = {
  "Arti": [
    {
      title: "श्री गणेश आरती",
      excerpt: "गणेश जी की आरती से विघ्नों का नाश होता है और सफलता प्राप्त होती है।",
      link: "/arti/ganesh"
    },
    {
      title: "श्री राम आरती",
      excerpt: "राम जी की आरती से जीवन में सुख-शांति और धर्म की राह मिलती है।",
      link: "/arti/ram"
    },
    {
      title: "श्री कृष्ण आरती",
      excerpt: "कृष्ण जी की आरती से भक्तों को भगवान की कृपा प्राप्त होती है।",
      link: "/arti/krishna"
    },
    {
      title: "शिव जी की आरती",
      excerpt: "शिव जी की आरती से हर प्रकार के कष्ट दूर होते हैं और आत्मबल मिलता है।",
      link: "/arti/shiva"
    },
    {
      title: "श्री दुर्गा आरती",
      excerpt: "दुर्गा माता की आरती से राक्षसों और बुरी शक्तियों का नाश होता है।",
      link: "/arti/durga"
    },
    {
      title: "लक्ष्मी माता की आरती",
      excerpt: "लक्ष्मी माता की आरती से धन और ऐश्वर्य की प्राप्ति होती है।",
      link: "/arti/laxmi"
    },
    {
      title: "हनुमान जी की आरती",
      excerpt: "हनुमान जी की आरती से बल, बुद्धि और आशीर्वाद मिलता है।",
      link: "/arti/hanuman"
    },

  ],
  "Bhajan Granth": [
    {
      title: "Bhajan Granth Highlights",
      excerpt: "Explore the most soulful bhajans from the Bhajan Granth collection.",
      link: "#"
    }
  ],
  "Shrothram": [
    {
      title: "Shrothram Study Guide",
      excerpt: "Dive deep into Shrothram and understand sacred scriptures with ease.",
      link: "#"
    }
  ],
};

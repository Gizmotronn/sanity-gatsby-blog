export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c32fa5dbd55900ba08fd8c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1xfnukqx",
                  apiId: "531f8e53-5354-4e8f-8e3e-3ea49de07173",
                },
                {
                  buildHookId: "60c32fa60d1d26009f5f1ec6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-a2oytc3a",
                  apiId: "14b4d243-7556-421b-b008-b57b9bc8e3dc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Gizmotronn/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-a2oytc3a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

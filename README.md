# railflow_docs_apollo

1. Add the appropriate MDX/Markdown files to `src/content` directory. Example `example.md` as below:
``` yaml
---
title: Example
description: What is Apollo Server and what does it do?
---

Apollo Server is the best way to quickly build a production-ready, self-documenting API for GraphQL clients, using data from any source.
```

2. If you want to add the new page into the sidebar? 
``` bash
# gatsby-config.js
...
sidebarCategories: {
    'Folder Name': [
        'filename1 (without md/mdx extension)',
        'filename2 (without md/mdx extension)',
        'filename3 (without md/mdx extension)',
    ]
}
...
```
3. There are couple of ways to add image into your page. 
    
    a. Let's start with the easiest way below (This way we dont have the lazyload feature applied, this may cause the page speed)
    * Copy your image into static folder `/static/images/your_folder/your_image.png`
    * Add picture into your page `![alt text](/images/your_folder/your_image.png "Your Image Alt Text")`

    b. Second way to add image into your page (We can use the advantage lazyload feature here):
    * Copy your image into src folder `/src/images/your_folder/your_image.png` 
    * Add picture into your page using react component:
        ``` yaml
        # Import react component -> copy exactly below line to the top of your content, after the page title and description
        import Image from '/src/components/Image'
        ...
        # Add image using react dom
        <Image src="your_folder/your_image.png" alt="Your Alt Text"/>
        ```

Follow [Apollo Theme documentation](https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs) for more instructions.

# Development

**Run the development server without docker:**

```bash
# cd to_your_project_root
npm install
npm start
```

**Run the development server using docker.** Get docker to your local here `https://docs.docker.com/get-docker/`
```bash
# cd to_your_project_root
npm install
npm run build
docker-compose up -d
# access your development server via the url (http://localhost:8000)
```
* After updated any page or added new page please rebuild and the project. 
``` bash
# rebuild resources
npm install
npm run build

# if your docker-compose is already running -> Do nothing and refresh the browser (http://localhost:8080)

# if the docker-compose is not running -> run below command to start the docker-compose
docker-compose up -d

```

Force clean all prebuild resources and caches:
```bash
npm run clean
```

Build the production bundle:
```bash
npm run build
```

## Disable Basic Auth

To disable basic auth, go to nginx/nginx.conf and comment below lines.

```
#    auth_basic "Restricted Content";
#    auth_basic_user_file /etc/nginx/.htpasswd;
```

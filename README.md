## Architecture Diagram

![CRC](https://github.com/user-attachments/assets/2660b680-eecf-4f9e-b6c5-d849a01598f5)

# Introduction to The Cloud Resume Challenge

Hello, I’m Shubham Murti, a cloud enthusiast and recent graduate with a Master’s in Computer Science. My journey into cloud computing began with a conversation that sparked a new career path. One of my college friends was talking about cloud technology and encouraged me to look into it. After researching, I realized that cloud computing was becoming essential across industries, with every major company moving to the cloud. It became clear to me that cloud computing would be a valuable field to enter.

I didn’t know where to start, but my friend suggested I try the Cloud Resume Challenge — a project designed to help people gain hands-on experience with cloud technologies. The challenge felt daunting initially since I was completely new to cloud. However, I decided to take it on as my first cloud project, determined to learn and complete it step by step. The challenge involves building a resume website while gaining experience with front-end development, creating a serverless backend, managing infrastructure with code, and automating deployments — all real-world cloud engineering skills.

The Cloud Resume Challenge taught me that each chunk of the project brings unique problems to solve, from setting up infrastructure to handling databases and APIs. I’m excited to share my journey through this challenge and how it helped me develop foundational cloud skills.

## Chunk 0: Certification Prep

When I began the Cloud Resume Challenge, I hadn’t completed any cloud certifications. I wanted to dive into the hands-on work first to gain real-world experience before taking an exam. After finishing the project, I decided to pursue the AWS Certified Cloud Practitioner (CCP) certification to formalize my knowledge and gain a foundational credential in cloud computing.

### Why Certification Matters

Completing the CCP certification after the project turned out to be an excellent choice. The practical experience from the challenge gave me a solid understanding of the core concepts, which made the certification process smoother and more meaningful. The CCP exam is widely recognized as an introductory certification, and having it on my resume helps demonstrate both my commitment to cloud and my understanding of basic cloud principles.

### My Approach to Certification

To prepare for the CCP exam, I primarily used Andrew Brown’s CCP course on freeCodeCamp. It’s a comprehensive, 14-hour video course that covers all key topics in-depth. I found Andrew’s approach to be thorough, and it complemented my project experience well. Alongside the video course, I also used practice sets from AWSboy to test my knowledge. This combination of watching videos and taking practice exams really helped reinforce what I had learned during the Cloud Resume Challenge.

### Resources and Tips for Success

For those preparing for the CCP exam, my advice is:

1. **Watch Andrew Brown’s CCP Course**: This 14-hour course covers all essential topics in a structured way. It’s ideal for beginners and aligns well with the exam content.
2. **Practice as Much as Possible**: Use practice sets like AWSboy or others you can find online. The more practice questions you do, the better prepared you’ll feel.
3. **Hands-On Experience**: If possible, try working on a project like the Cloud Resume Challenge before taking the exam. Practical experience can make concepts easier to understand and retain.

Completing the CCP certification after the project gave me a more well-rounded understanding of cloud fundamentals. This experience has prepared me for further cloud challenges and more advanced certifications.

## Chunk 1: Building the Frontend
The first step in the Cloud Resume Challenge was to create and deploy a static website that hosts my resume. I used HTML and CSS to structure the site and hosted it on Amazon S3, followed by configuring a custom domain, DNS, and HTTPS using AWS CloudFront and Route 53.

### Challenges and Solutions

#### Deploying a Static Site with HTTPS
Getting the static site deployed was relatively straightforward until I began configuring the domain and SSL certificate for HTTPS. I purchased a domain to personalize my site, and this required additional configuration steps to ensure secure communication (HTTPS) via AWS Certificate Manager and CloudFront. Setting up a secure HTTPS connection to my S3 bucket was particularly challenging, as I encountered issues with the SSL certificate integration and had to adjust CloudFront and Route 53 settings multiple times.

One consistent problem was establishing a secure HTTPS connection for my custom domain. Even after adding the SSL certificate, the site wouldn’t load securely. After digging into resources, I realized I needed to fine-tune the CloudFront distribution settings and confirm that the certificate was referenced correctly. The moment my site, `murtishubham.click`, finally loaded over HTTPS was a great relief and felt like a significant milestone.

#### Using My Third-Year Project Website
Since I didn’t have a dedicated portfolio site ready, I chose to use a website I built for a project during my third year of college. The idea was that once I completed automation in Chunk 4, I could refresh the deployment and replace the third-year project with a custom portfolio site, showcasing my own design. I liked the flexibility that automation brought to this, allowing me to swap out sites seamlessly. Although it was initially just an idea, the potential to automate future deployments and update the site continuously was exciting.

### Looking Forward: Security Mods
I haven’t explored mods yet, but I’m interested in the security-focused mods, as my career goal is to become a cloud security engineer. I plan to delve into these mods in future chunks to further enhance my security skills.

## Chunk 2: Building the API

The next phase of the Cloud Resume Challenge was to build a backend API that supports a visitor counter on my resume site. This required setting up an Amazon DynamoDB table to store the visitor count, creating an API endpoint using API Gateway, and connecting everything with AWS Lambda using Python.

### Challenges and Solutions

#### Setting Up DynamoDB and API Gateway

Setting up the DynamoDB table to store the visitor count and configuring the API Gateway to handle requests was straightforward. Amazon’s documentation made it fairly easy to set up both services, and I was able to complete these parts without much trouble. Having a reliable storage solution like DynamoDB in place to record visitor data was a valuable introduction to using managed databases in the cloud.

#### Connecting DynamoDB and API Gateway with Python

The real challenge came when I needed to connect these components with Python code in AWS Lambda. Since I was still getting comfortable with Python, this part took a bit longer. Writing the backend code to communicate between the API Gateway and DynamoDB helped me gain hands-on experience with APIs and Python. Debugging and testing the function gave me a solid understanding of how data flows between different services in the cloud.

After a few days of trial and error, I was able to successfully connect the API to the database, retrieve visitor counts, and update the values in DynamoDB. Reflecting on this part of the project, I can say that working with APIs was a crucial learning experience, and I now understand that APIs are very important in cloud projects because they let different tools and services talk to each other and work together.

### Key Takeaways

This chunk helped me understand the importance of APIs in cloud projects. Learning to connect multiple cloud services via API calls has given me the confidence to tackle similar tasks in the future. Thanks to this hands-on experience, I’m now much more comfortable working with APIs in the cloud.

## Chunk 3: Frontend and Backend Integration

After completing the backend API and the frontend of my portfolio website, the next phase of the Cloud Resume Challenge was to integrate the two. This process involved creating a JavaScript visitor counter that would increment each time a user visited my site. Setting up the counter itself was a quick task, but designing the underlying logic took a bit more time. The real challenge was ensuring that the counter worked seamlessly with the backend.

### Challenges and Solutions

**Creating the Visitor Counter** The first step was implementing a JavaScript counter to track the number of visitors on the site. This was a simple implementation, but the real work came when I had to figure out how to persist this data in a way that would work with the backend. This part required careful planning to ensure that the front-end could interact correctly with the server-side logic.

**Testing and Debugging with Cypress** Once the visitor counter was set up, it was time to test the functionality. Before starting this project, I had no experience with testing and didn’t understand its importance. However, the Cloud Resume Challenge guidebook provided me with the resources to learn how to use Cypress for testing. I spent some time experimenting with it, and soon, I was able to run basic tests to ensure the integration worked as expected. Learning to use Cypress was a valuable skill, and it helped me ensure the reliability of my site.

**Dealing with CORS Issues** One of the toughest hurdles I faced during the frontend and backend integration was dealing with CORS (Cross-Origin Resource Sharing) issues. CORS proved to be a tricky problem to solve in this context. It took several days of troubleshooting to get everything working correctly. However, in the end, I managed to overcome the issues, ensuring smooth communication between the frontend and backend.

One more thing I have to say, which helps to complete these chunks, is the visualization, or you can say the diagram.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jco5jyi3o7966nicpsi9.jpeg)

### Key Takeaways
This chunk of the project helped me understand the importance of seamless integration between the frontend and backend. Learning how to implement real-time features like the visitor counter and dealing with CORS taught me valuable lessons in troubleshooting and debugging. The hands-on experience with Cypress also gave me a strong foundation in web testing, which I’ll be able to apply in future cloud projects.

## Chunk 4: Automation and CI

From the beginning of the Cloud Resume Challenge (CRC), I was excited about automation, particularly the idea of using Infrastructure as Code (IaC). When I thought about how I could refresh my website and automatically see the changes after deployment, it really motivated me to dive deeper into this aspect. I was especially intrigued by using Terraform, so I eagerly began exploring how it could be integrated with AWS.

### Challenges and Solutions

**Infrastructure as Code (IaC)**
The first step in my automation journey was learning Infrastructure as Code (IaC) using Terraform to automate resource provisioning in AWS. I spent time going through Terraform’s documentation, learning how to integrate it with AWS, and managing AWS Access Keys and Secret Keys using the AWS CLI for secure access.

**CI/CD Pipeline with GitHub Actions**
While working with Terraform, I set up a CI/CD pipeline using GitHub Actions to automate the deployment of both the frontend and backend of my portfolio site. This allowed me to automatically deploy updates whenever changes were made to the repository.

**Automating Deployment for the Frontend and Backend**
Terraform enabled me to automate the deployment of both the frontend and backend infrastructure, eliminating the need for manual configuration and deployment. This took about a week or two, but the effort was worthwhile, as it freed me up to focus more on coding.

### Key Takeaways
This phase taught me the importance of automation in cloud development. Using Terraform and GitHub Actions streamlined my deployment process, making it more efficient and reliable. I now feel confident in managing cloud infrastructure using Infrastructure as Code.

## Chunk 5: Writing the Blog Post

As I reach the final part of my Cloud Resume Challenge (CRC) journey, you’re reading Chunk 5, which marks the conclusion of this experience. Writing this blog post has been an opportunity to reflect on what I’ve learned and share the key takeaways from each chunk.

### Key Learnings from Each Chunk

The CRC has taught me the value of hands-on practice, especially when learning AWS and cloud technologies. I’ve gained practical experience with Terraform, AWS CLI, CI/CD pipelines, and much more. While the theory was essential, it was the real-world implementation that truly deepened my understanding. Each chunk in this challenge has built on the last, and I now feel more confident working with cloud technologies.

_The most rewarding part of the CRC was solving problems on my own. It pushed me to troubleshoot and find solutions, while also helping me discover what I enjoy most about cloud development, like automating deployments and working with infrastructure as code._

## Conclusion and Reflection
To anyone new to the cloud or starting the Cloud Resume Challenge: don’t be discouraged if you feel overwhelmed. Stick with it, and in the end, you’ll complete the challenge and gain valuable skills that will serve you in the future. The guidebook has helped me tremendously, but the real learning came from doing.

Lastly, I’d like to thank Forrest Brazeal for creating the Cloud Resume Challenge. It has helped me in so many ways, and I highly recommend it to anyone looking to learn cloud technologies. Good luck to those starting out — you’ve got this!

**Urls**
Click [here](https://murtishubham.click/) to view the portfolio developed.


Explore my [GitHub repository.](https://github.com/shubhammurti/AWS-Projects-Portfolio/)

> **Shubham Murti — Aspiring Cloud Security Engineer | Weekly Cloud Learning !!**

**Let’s connect:** [Linkdin](http://www.linkedin.com/in/shubham-murti-b6486a1aa), [Twitter](https://x.com/murti_shubham), [Github](https://github.com/shubhammurti)


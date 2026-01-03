# Static Website Deployment using Jenkins CI/CD

![AWS](https://img.shields.io/badge/AWS-DevOps-orange)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Project Overview

This project demonstrates the deployment of a static website using Jenkins CI/CD pipeline. The website is built with HTML, CSS, and JavaScript, featuring an AWS & DevOps themed design. The deployment is automated using Jenkins, GitHub webhooks, and deployed on an Ubuntu server running Nginx.

## 🚀 Features

- **Modern UI/UX Design** - Clean and professional AWS DevOps themed interface
- **Responsive Layout** - Mobile-friendly design that works on all devices
- **Automated Deployment** - Jenkins CI/CD pipeline with GitHub webhook integration
- **Production Ready** - Deployed on live server using Nginx web server

## 📁 Project Structure

```
Static_Website_Jenkins/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── build_code.sh       # Jenkins build script
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **CI/CD**: Jenkins
- **Version Control**: Git, GitHub
- **Web Server**: Nginx
- **Operating System**: Ubuntu Linux
- **Cloud Platform**: AWS EC2

## 📝 Prerequisites

Before starting, ensure you have:

- Ubuntu Server (EC2 instance)
- Jenkins installed and configured
- Git installed
- Nginx web server
- SSH access to deployment server
- GitHub account

## 🔧 Installation Steps

### Step 1: Setup Jenkins Server

```bash
# Update system packages
sudo apt update -y

# Install Java (required for Jenkins)
sudo apt install openjdk-11-jdk -y

# Install Jenkins
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y

# Start Jenkins
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

### Step 2: Create Project Files

Create a project folder named `myweb` with the following files:

```bash
mkdir myweb
cd myweb
touch index.html styles.css script.js
```

### Step 3: Install Required Packages

```bash
# Install zip utility
sudo apt install zip -y

# Update packages
sudo apt update -y
```

### Step 4: Push Code to GitHub

```bash
# Initialize git repository
git init

# Add files
git add .

# Commit changes
git commit -m "Initial commit: Static website"

# Add remote repository
git remote add origin https://github.com/yourusername/Static_Website_Jenkins.git

# Push to GitHub
git push -u origin main
```

### Step 5: Configure GitHub Webhook

1. Go to your GitHub repository
2. Navigate to **Settings** → **Webhooks** → **Add webhook**
3. Set Payload URL: `http://your-jenkins-ip:8080/github-webhook/`
4. Content type: `application/json`
5. Select: **Just the push event**
6. Click **Add webhook**

### Step 6: Create Jenkins Pipeline

1. Open Jenkins Dashboard
2. Click **New Item**
3. Enter project name: `Static_Website_Deployment`
4. Select **Freestyle project**
5. Click **OK**

#### Configure Source Code Management:
- Select **Git**
- Repository URL: `https://github.com/yourusername/Static_Website_Jenkins.git`
- Branch: `*/main`

#### Configure Build Triggers:
- Check **GitHub hook trigger for GITScm polling**

#### Configure Build Steps:
- Add build step → **Execute shell**
- Add the following script:

```bash
#!/bin/bash

# Create zip file of all project files
zip myfile.zip ./*

# Set permissions for SSH key
sudo chmod 600 /home/ubuntu/public.pem

# Copy zip file to deployment server
sudo scp -i /home/ubuntu/public.pem -o StrictHostKeyChecking=no myfile.zip ubuntu@65.0.125.234:.

# SSH into deployment server and deploy
sudo ssh -i /home/ubuntu/public.pem -o StrictHostKeyChecking=no ubuntu@65.0.125.234<<EOF
sudo apt update -y
sudo apt install nginx -y
sudo apt install zip -y
sudo cp myfile.zip /var/www/html
cd /var/www/html
sudo rm *.html
sudo unzip myfile.zip
curl http://localhost
EOF
```

### Step 7: Save and Build

1. Click **Save**
2. Click **Build Now**
3. Monitor the **Console Output** for build status

## 🐛 Troubleshooting

During deployment, I encountered approximately 3-4 errors. 

## 📸 Project Screenshots

### 1. Website pages

<img width="1899" height="950" alt="image" src="https://github.com/user-attachments/assets/da6b73ae-a26a-41fa-9c04-cca5a4a97c61" />

<img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/0904bbfa-e1c6-4523-b607-bfb90da7c69f" />

<img width="1893" height="961" alt="image" src="https://github.com/user-attachments/assets/8f67beca-5fb8-4ae5-8b56-cfa0fbcc643d" />


### 2. Jenkins Dashboard

<img width="1913" height="915" alt="image" src="https://github.com/user-attachments/assets/40b71727-1e21-4942-9fb3-a04bbb462d3b" />

### 3. Build Console Output

<img width="1919" height="802" alt="image" src="https://github.com/user-attachments/assets/1d676224-fe65-40b4-a75b-3d36b4dde2f0" />


## 🔐 Security Considerations

- SSH keys stored securely with proper permissions (600)
- Private keys never committed to repository
- Security groups configured to allow only necessary ports
- Regular system updates applied
- Nginx configured with proper permissions

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request


## 👨‍💻 Author

**Samarth Funde**

## 🙏 Acknowledgments

- Jenkins Community for excellent CI/CD tools
- AWS for cloud infrastructure
- Nginx team for reliable web server
- GitHub for version control platform

## 📞 Contact

For any queries or support, please reach out:
- Email: samarthf28@gmail.com

⭐ If you found this project helpful, please give it a star!

**Happy Deploying! 🚀**

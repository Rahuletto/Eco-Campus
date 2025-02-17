﻿# <div align="center"> Eco-Campus </div>

## <div align="center"> EcoCampus: Intelligent Energy Management System 🌱 </div>

An innovative system designed to optimize energy consumption in campus buildings by monitoring real-time classroom occupancy. Using OpenCV and a Persistence Coordinate System, EcoCampus automatically controls lights, fans, and air conditioners to reduce energy waste and promote sustainability. 

## 🚀 Features
- **Occupancy Detection**: Tracks classroom usage with computer vision.
- **Energy Optimization**: Automatically manages lighting, HVAC, and other energy systems.
- **Real-Time Dashboard**: Monitors energy usage and savings dynamically.
- **Customizability**: Adapts to different campus layouts and configurations.
- **Sustainability Focus**: Helps institutions reduce energy waste and costs.

---

## 🛠️ Getting Started

### Prerequisites
- Python 3.8 or higher
- A computer with a webcam (or mobile device using DroidCam for video feed)
- A smartphone with the **DroidCam** app installed for external video feed setup.

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/HarshilMalhotra/Eco-Campus.git
   ```
   ```
   cd EcoCampus
   ```
2. Install the required dependencies:
    
   ```
   pip install -r requirements.txt
   ```

3. Download the DroidCam app on your smartphone (available on iOS and Android). Start the app and note the IP address displayed.

4. Open main.py and set the IP address provided by DroidCam:

    ```
    video_source = "http://<DroidCam_IP>:<Port>/video"    
    ```


## 🗂️ Project Structure
```
EcoCampus/
├── esp_calibration.py  # ESP Calibration Sequencing Script
├── main.py             # Main Flask Application Server
├── requirements.txt    # Python Dependencies
├── templates/          # HTML Templates for Dashboard
├── static/             # Static Files (CSS, JS, Images)
└── README.md           # Project Documentation
```

## ⚙️ Running the Application

1. Calibrate ESP Device:
        <br>Run the ESP calibration script before starting the main application.

    ```
    python esp_calibration.py
    ```
2. Start the Flask Server:   Lunch the Flask application.
    ```
    python main.py
    ```

3. Access the application in your browser at:

    http://127.0.0.1:5000



## 🔗 Connect with Me

* 💼 Portfolio: [www.harshil.co](https://www.harshil.co)
* 📱 LinkedIn: [harshilmalhotra](https://www.linkedin.com/in/harshilmalhotra)
* 💻 GitHub: [Harshilmalhotra](https://github.com/Harshilmalhotra)

<!-- ## 📝 License

This project is licensed under the MIT License. See the LICENSE file for details. -->


## 🌟 Acknowledgments

Thank you to all hackathon organizers and teammates for contributing to the success of this project!


Let me know if you’d like to tweak any section or add more details!


## <div align="center"> Made with 💚 for a sustainable future
</div>

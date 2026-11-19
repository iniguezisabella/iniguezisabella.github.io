// Projects metadata - consumed by projectDisplay.html
const projectData = [
    {
        name: "Wine Quality Predictor",
        image: "assets/images/proj_ims/WineQualPredMod_IMG.png",
        summary: "<ul><li>  Developed tuning pipeline to find the best cross-validated, calibrated, K-Nearest neighbors regression model. </li><li> Addressed an imbalanced dataset containing over 4,000 records by adjusting class weights and other hyperparameters. </li><li> Model achieved a final test mean absolute error of 0.467, meaning that the model’s predictions deviate by less than 0.5 from the true quality scores (1-10 scale) on average. </li><li> Download full lab <a href=\"projects/CS307/Lab5/Lab5.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Predicts wine quality based on physicochemical characteristics.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
        file: "projects/CS307/Lab5/lab-05-notebook.html"
    },
    {
        name: "Credit Card Fraud Detector",
        image: "assets/images/proj_ims/CredFraudDet_IMG.png",
        summary: "<ul><li> Developed a tuning pipeline to find the best cross-validated random forest classifier model. </li><li> Addressed a highly imbalanced dataset containing over 284,000 records by adjusting class weights. </li><li> Met performance expectations of precision and recall rates (77% and 84.8%) for fraudulent credit card transactions, ensuring that a higher percentage of fraudulent activities were flagged while maintaining a manageable false-positive rate. </li><li> Download full lab <a href=\"projects/CS307/Lab7/Lab7.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Detects fraudulent credit card transactions using transaction data.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Random Forest Classifier", "Cross-Validation"],
        file: "projects/CS307/Lab7/lab-07-notebook.html"
    },
    {
        name: "Tweet Sentiment Classifier",
        image: "assets/images/proj_ims/TweSenClas_IMG.png",
        summary: "<ul><li> Developed tuning pipeline to find the best cross-validated logistic regression model. </li><li> Performed Natural Language Processing techniques such as text preprocessing (tokenization, removing stop words) and TF-IDF vectorization. </li><li> Model achieved a final test accuracy of 79.2% in categorizing tweet sentiment (Positive, Neutral, Negative). </li><li> Download full lab <a href=\"projects/CS307/Lab8/Lab8.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Classifies tweet sentiment as negative, neutral, or positive.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation", "Tokenization", "Sentiment Analysis"],
        file: "projects/CS307/Lab8/lab-08-notebook.html"
    },
    {
        name: "MLB Swing Probability Model",
        image: "assets/images/proj_ims/SwiProbMod_IMG.png",
        summary: "<ul><li> Developed tuning pipeline to find the best cross-validated, calibrated, logistic regression model. </li><li> Analyzed and interpreted a comprehensive set of features from 2,000+ pitches, including spatial data. </li><li> Model achieved a final test error of 4.85% in predicting the probability of inducing a swing. </li><li> Download full lab <a href=\"projects/CS307/Lab9/Lab9.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible. There was also an error in the lab heading, the correct heading is shown below but may not be reflected in the download. </li></ul>",
        description: "Estimates probability of a batter swinging based on pitch characteristics.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Model Calibration", "Logistic Regression", "Cross-Validation"],
        file: "projects/CS307/Lab9/lab-09-notebook.html"
    },
    {
        name: "Video Game Visualization",
        image: "assets/images/proj_ims/VGTableau_IMG.png",
        summary: "<ul><li> Analyzed and visualized large video game sales and ratings data to identify market trends. </li><li> Created an interactive dashboard using Tableau. </li><li> Datasets available via Kaggle: <a href=\"https://www.kaggle.com/datasets/gregorut/videogamesales\">Video Game Sales Datas</a>, <a href=\"https://www.kaggle.com/datasets/dem0nking/video-game-ratings-dataset\">Video Game Ratings Data </a> </li></ul>",        
        description: "Analysis of video game sales and ratings data, with interactive visualizations.",
        tags: ["Undergraduate", "Data Analysis", "Data Visualization", "Data Preprocessing", "Tableau"],
        // link: "projectDisplay.html?name=Video%20Game%20Visualizations&file=projects/CS416NarViz/CS416NarViz-A.html"
        file: "projects/VidGameTableau.html"
    },
    {
        name: "Fashion-MNIST Multi-Class Classification",
        image: "assets/images/proj_ims/CS598_PSL_IMG.png",
        summary: "<ul><li> In this final project, I was tasked to use the Kaggle Fashion MNIST data set to perform multi-class classification to predict the class label in the testing data. Outside of some general expectations, the project was entirely self navigated. </li><li> The best model resulted in a classification error of 0.1469, with an overall classification error of 0.2074. </li><li> I achieved a 97% grade in this final project, with the only dock in points being I could have added more details to my descriptions overall. </li><li> Dataset available via Kaggle: <a href=\"https://www.kaggle.com/datasets/zalando-research/fashionmnist\">Fashion-MNIST Dataset</a> </li></ul>",   
        description: "Multi-class classification of fashion items from the Fashion-MNIST dataset.",
        tags: ["Graduate", "Data Analysis", "R", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Unsupervised Learning", "Multi-class Classification", "K-Means Clustering", "Hierarchical Clustering", "Principal Component Analysis", "Decision Tree", "Random Forest", "Gradient Boosting Machine (GBM)", "XGBoost"],
        file: "projects/CS598_PSL/CS598_PSL.pdf"
    },
    // {
    //     name: "Temperature Model",
    //     image: "assets/images/proj_ims/TempMod_IMG.png",
    //     summary: "TEST SUMMARY FIELD",
    //     description: "Predicts minimum daily temperature for Lincoln Square.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
    //     file: "projects/CS307/Lab1/lab-01-notebook.html"
    // },
    // {
    //     name: "Credit Ratings Model",
    //     image: "assets/images/proj_ims/CredRatMod_IMG.png",
    //     description: "Predicts credit ratings using income and demographic data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
    //     file: "projects/CS307/Lab2/lab-02-notebook.html"
    // },
    // {
    //     name: "Pitch Classification Model",
    //     image: "assets/images/proj_ims/PitchClasModel_IMG.png",
    //     description: "Classifies baseball pitches using player and pitch data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Classification"],
    //     file: "projects/CS307/Lab3/lab-03-notebook.html"
    // },
    
    // {
    //     name: "Cancer Type Predictor",
    //     image: "assets/images/proj_ims/CanTypPred_IMG.png",
    //     description: "Classifies cancer types using gene expression data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation"],
    //     file: "projects/CS307/Lab6/lab-06-notebook.html"
    // },
    // {
    //     name: "Credit Card Fraud Detector",
    //     image: "assets/images/proj_ims/CredFraudDet_IMG.png",
    //     description: "Detects fraudulent credit card transactions using transaction data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Random Forest Classifier", "Cross-Validation"],
    //     file: "projects/CS307/Lab7/lab-07-notebook.html"
    // },
    
];

// Populate sections dynamically
const sectionsContainer = document.getElementById("sections-container");

projectData.forEach((item) => {
    // Create the new section element
    const section = document.createElement("section");
    section.classList.add("about");

    // Create first child div for image
    const div1 = document.createElement("div");
    div1.classList.add("project-img");

    const img = document.createElement("img");
    img.addEventListener("click", () => {
        // on click, redirect to the project link
        window.location.href = `projectDisplay.html?name=${encodeURIComponent(item.name)}`;
    });
    img.src = item.image;
    img.alt = item.name;
    div1.appendChild(img);

    // Create second child div for content
    const div2 = document.createElement("div");
    div2.classList.add("about-content");

    const heading = document.createElement("h1");
    const headingText = document.createElement("span");
    headingText.textContent = item.name;
    heading.appendChild(headingText);
    
    const paragraph = document.createElement("p");
    paragraph.textContent = item.description;
    div2.appendChild(heading);
    div2.appendChild(paragraph);

    // Append divs to the main section
    section.appendChild(div1);
    section.appendChild(div2);
    
    sectionsContainer.appendChild(section);
});

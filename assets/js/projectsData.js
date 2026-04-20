// Projects metadata - consumed by projectsFilter.js and projectDisplay.html
const projects = [
    {
        name: "Wine Quality Predictor",
        image: "assets/images/proj_ims/WineQualPredMod_IMG.png",
        summary: "<ul><li>  Developed tuning pipeline to find the best cross-validated, calibrated, K-Nearest neighbors regression model. </li><li> Addressed an imbalanced dataset containing over 4,000 records by adjusting class weights and other hyperparameters. </li><li> Model achieved a final test mean absolute error of 0.467, meaning that the model’s predictions deviate by less than 0.5 from the true quality scores (1-10 scale) on average. </li><li> Download full lab <a href=\"projects/CS307/Lab5/Lab5.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Predicts wine quality based on physicochemical characteristics.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
        link: "projectDisplay.html?name=Wine%20Quality%20Predictor&file=projects/CS307/Lab5/lab-05-notebook.html"
    },
    {
        name: "Credit Card Fraud Detector",
        image: "assets/images/proj_ims/CredFraudDet_IMG.png",
        summary: "<ul><li> Developed a tuning pipeline to find the best cross-validated random forest classifier model. </li><li> Addressed a highly imbalanced dataset containing over 284,000 records by adjusting class weights. </li><li> Met performance expectations of precision and recall rates (77% and 84.8%) for fraudulent credit card transactions, ensuring that a higher percentage of fraudulent activities were flagged while maintaining a manageable false-positive rate. </li><li> Download full lab <a href=\"projects/CS307/Lab7/Lab7.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Detects fraudulent credit card transactions using transaction data.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Random Forest Classifier", "Cross-Validation"],
        link: "projectDisplay.html?name=Credit%20Card%20Fraud%20Detector&file=projects/CS307/Lab7/lab-07-notebook.html"

    },
    {
        name: "Tweet Sentiment Classifier",
        image: "assets/images/proj_ims/TweSenClas_IMG.png",
        summary: "<ul><li> Developed tuning pipeline to find the best cross-validated logistic regression model. </li><li> Performed Natural Language Processing techniques such as text preprocessing (tokenization, removing stop words) and TF-IDF vectorization. </li><li> Model achieved a final test accuracy of 79.2% in categorizing tweet sentiment (Positive, Neutral, Negative). </li><li> Download full lab <a href=\"projects/CS307/Lab8/Lab8.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Classifies tweet sentiment as negative, neutral, or positive.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation", "Tokenization", "Sentiment Analysis"],
        link: "projectDisplay.html?name=Tweet%20Sentiment%20Classifier&file=projects/CS307/Lab8/lab-08-notebook.html"
    },
    {
        name: "MLB Swing Probability Model",
        image: "assets/images/proj_ims/SwiProbMod_IMG.png",
        summary: "<ul><li> Developed tuning pipeline to find the best cross-validated, calibrated, logistic regression model. </li><li> Analyzed and interpreted a comprehensive set of features from 2,000+ pitches, including spatial data. </li><li> Model achieved a final test error of 4.85% in predicting the probability of inducing a swing. </li><li> Download full lab <a href=\"projects/CS307/Lab9/Lab9.zip\" download> HERE </a> </li><li> Note: The dataset originally used in this project is no longer accessible </li></ul>",
        description: "Estimates probability of a batter swinging based on pitch characteristics.",
        tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Model Calibration", "Logistic Regression", "Cross-Validation"],
        link: "projectDisplay.html?name=MLB%20Swing%20Probability%20Model&file=projects/CS307/Lab9/lab-09-notebook.html"
    },
    {
        name: "Video Game Visualization",
        image: "assets/images/proj_ims/VGTableau_IMG.png",
        summary: "<ul><li> Analyzed and visualized large video game sales and ratings data to identify market trends. </li><li> Created an interactive dashboard using Tableau. </li><li> Datasets available via Kaggle: <a href=\"https://www.kaggle.com/datasets/gregorut/videogamesales\">Video Game Sales Datas</a>, <a href=\"https://www.kaggle.com/datasets/dem0nking/video-game-ratings-dataset\">Video Game Ratings Data </a> </li></ul>",        
        description: "Analysis of video game sales and ratings data, with interactive visualizations.",
        tags: ["Undergraduate", "Data Analysis", "Data Visualization", "Data Preprocessing", "Tableau"],
        // link: "projectDisplay.html?name=Video%20Game%20Visualizations&file=projects/CS416NarViz/CS416NarViz-A.html"
        link: "projectDisplay.html?name=Video%20Game%20Visualization&file=projects/VidGameTableau.html"
    },
    // {
    //     name: "Temperature Model",
    //     image: "assets/images/proj_ims/TempMod_IMG.png",
    //     summary: "TEST SUMMARY FIELD",
    //     description: "Predicts minimum daily temperature for Lincoln Square.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
    //     link: "projectDisplay.html?name=Temperature%20Model&file=projects/CS307/Lab1/lab-01-notebook.html"
    // },
    // {
    //     name: "Credit Ratings Model",
    //     image: "assets/images/proj_ims/CredRatMod_IMG.png",
    //     description: "Predicts credit ratings using income and demographic data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Regression"],
    //     link: "projectDisplay.html?name=Credit%20Ratings%20Model&file=projects/CS307/Lab2/lab-02-notebook.html"
    // },
    // {
    //     name: "Pitch Classification Model",
    //     image: "assets/images/proj_ims/PitchClasModel_IMG.png",
    //     description: "Classifies baseball pitches using player and pitch data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Numpy", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Cross-Validation", "K-Nearest Neighbors", "Classification"],
    //     link: "projectDisplay.html?name=Pitch%20Classification%20Model&file=projects/CS307/Lab3/lab-03-notebook.html"
    // },
    
    // {
    //     name: "Cancer Type Predictor",
    //     image: "assets/images/proj_ims/CanTypPred_IMG.png",
    //     description: "Classifies cancer types using gene expression data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Logistic Regression", "Cross-Validation"],
    //     link: "projectDisplay.html?name=Cancer%20Type%20Predictor&file=projects/CS307/Lab6/lab-06-notebook.html"
    // },
    // {
    //     name: "Credit Card Fraud Detector",
    //     image: "assets/images/proj_ims/CredFraudDet_IMG.png",
    //     description: "Detects fraudulent credit card transactions using transaction data.",
    //     tags: ["Undergraduate", "Data Analysis", "Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "Data Visualization", "Data Science", "Machine Learning", "Data Preprocessing", "Random Forest Classifier", "Cross-Validation"],
    //     link: "projectDisplay.html?name=Credit%20Card%20Fraud%20Detector&file=projects/CS307/Lab7/lab-07-notebook.html"
    // },
    
];

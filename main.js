function startClassification(){
navigator.mediaDevices.getUserMedia({audio:true})
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZzG2_qu_n/model.json',modelready)
}

function modelready(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    console.log('gotresult')
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255)+1;
        random_number_g = Math.floor(Math.random() * 255)+1;
        random_number_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML = 'Detected Voice is of - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('img');
        //img1 = document.getElementById('cat');
        //img2 = document.getElementById('lion');
        //img3 = document.getElementById('cow');
        //img4 = document.getElementById('hear');
        if(results[0].label=="Barking")
        {
        img.src = 'cool-dog.gif';
        }
        else if (results[0].label == "Meowing")
        { 
        img.src = 'cat-cute.gif';
        }
        else if (results[0].label == "Roaring")
        {
        img.src = 'lion-roar-44.gif';
        }
        else
        {
        img.src = 'dancing-cow.gif';
        }
        
    }
}
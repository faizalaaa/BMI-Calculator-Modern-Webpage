function calculateBMI() {
    // Mendapatkan value weight and height dari kolom input
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    // Konversi tinggi ke meter
    height = height / 100;

    // Kalkulasi BMI secara umum (general)
    var bmi = weight / (height * height);

    // Mendapatkan value age and gender dari kolom input
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    // Menentukan kategori BMI berdasarkan jenis kelamin (gender) dan usia (age)
    if (gender === "male") {
        if (age >= 20 && age <= 39) {
            if (bmi < 18.5) {
                var category = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                var category = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        } else if (age >= 40 && age <= 59) {
            if (bmi < 22) {
                var category = "Underweight";
            } else if (bmi >= 22 && bmi < 27) {
                var category = "Normal weight";
            } else if (bmi >= 27 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        } else if (age >= 60 && age <= 79) {
            if (bmi < 23) {
                var category = "Underweight";
            } else if (bmi >= 23 && bmi < 28) {
                var category = "Normal weight";
            } else if (bmi >= 28 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        }
    } else if (gender === "female") {
        if (age >= 20 && age <= 39) {
            if (bmi < 18.5) {
                var category = "Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                var category = "Normal weight";
            } else if (bmi >= 25 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        } else if (age >= 40 && age <= 59) {
            if (bmi < 23) {
                var category = "Underweight";
            } else if (bmi >= 23 && bmi < 28) {
                var category = "Normal weight";
            } else if (bmi >= 28 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        } else if (age >= 60 && age <= 79) {
            if (bmi < 24) {
                var category = "Underweight";
            } else if (bmi >= 24 && bmi < 29) {
                var category = "Normal weight";
            } else if (bmi >= 29 && bmi < 30) {
                var category = "Overweight";
            } else if (bmi >= 30) {
                var category = "Obese";
            }
        }
    }

    // Menampilkan hasil akhir
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1) + " (" + category + ")";
}

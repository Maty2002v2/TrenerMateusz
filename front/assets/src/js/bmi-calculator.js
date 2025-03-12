import ValidForm from "./valid-form";

// Interfejs do liczenia BMI
class BMIService {
    static calculate(weight, height) {
      return (weight / (height ** 2)).toFixed(2);
    }
  }
  
  // Interfejs do liczenia BMR
  class BMRService {
    static calculate(weight, height, age, sex) {
      if (sex === "m") {
        return (10 * weight + 6.25 * height * 100 - 5 * age + 5).toFixed(2);
      } 

      return (10 * weight + 6.25 * height * 100 - 5 * age - 161).toFixed(2);
    }
  }
  
  // Interfejs do liczenia TDEE
  class TDEEService {
    static activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      high: 1.725,
      very_high: 1.9,
    };
  
    static calculate(bmr, activityLevel) {
      return (bmr * (this.activityFactors[activityLevel] || 1.2)).toFixed(2);
    }
  }
  
  // Klasa do oceny zdrowia
  class HealthEvaluator {
    static isHealthy(bmi, weight, minWeight, maxWeight) {
      return bmi >= 18.5 && bmi <= 24.9 && weight >= minWeight && weight <= maxWeight;
    }
  }
  
  // Klasa główna (zależna od modułów)
  class HealthCalculator {
    constructor(weight, height, age, sex, activityLevel) {
      this.weight = weight;
      this.height = height / 100; // cm -> m
      this.age = age;
      this.sex = sex.toLowerCase();
      this.activityLevel = activityLevel;
    }
  
    getSummary() {
      const bmi = BMIService.calculate(this.weight, this.height);
      const bmr = BMRService.calculate(this.weight, this.height, this.age, this.sex);
      const tdee = TDEEService.calculate(bmr, this.activityLevel);
  
      const minWeight = (18.5 * (this.height ** 2)).toFixed(2);
      const maxWeight = (24.9 * (this.height ** 2)).toFixed(2);
        
      const isHealthy = HealthEvaluator.isHealthy(bmi, this.weight, minWeight, maxWeight);
      const healthStatus = isHealthy
        ? "MASZ ZDROWĄ WAGĘ"
        : "Przydało by się jeszcze zadbać o swoją wagę";
    
        return {
            bmi,
            bmr,
            minWeight,
            maxWeight,
            healthStatus,
            isHealthy,
            tdee,
            weight: this.weight,
            height: this.height,
            age: this.age,
            sex: this.sex,
        }
    }
  }

  class BMICalculator {
    constructor() {
        this.result = document.querySelector('.bmi-calculator__result');
        this.button = document.querySelector('#calculate-button');
        this.heightInupt = document.querySelector('#height');
        this.weightInupt = document.querySelector('#weight');
        this.ageInupt = document.querySelector('#age');
        this.genderSelect = document.querySelector('#gender');
        this.activitySelect = document.querySelector('#activity');

        this.init();
    }

    init() {
        this.button.addEventListener('click', (event) => {
            event.preventDefault();
            this.displayBMIResult();
        });
    }

    displayBMIResult() {
        const validForm = new ValidForm('.bmi-calculator');
        if (!validForm.isValid()) {
            validForm.highlightInvalidInputs();
            return;
        };

        const height = parseFloat(this.heightInupt.value);
        const weight = parseFloat(this.weightInupt.value);
        const age = parseFloat(this.ageInupt.value);
        const gender = this.genderSelect.dataset.value;
        const activity = this.activitySelect.dataset.value;

        const calculator = new HealthCalculator(weight, height, age, gender, activity);
        const { bmi, minWeight, maxWeight, tdee, bmr, healthStatus, isHealthy } = calculator.getSummary();
        this.result.classList.add('bmi-calculator__result--open');

        const summary = this.result.querySelector('#summary');
        const header = this.result.querySelector('#header');
        const message = this.result.querySelector('#message');

        summary.innerHTML = `
            <p>Twoje BMI to: ${bmi}</p>
            <p>Przy twoim wzroście minimala waga to ${minWeight}kg, a maksymalna ${maxWeight}kg</p>
            <p>Twój BMR to: ${bmr}</p>
            <p>Całkowite kalorie na dzień: ${tdee} kcal/day</p>
        `

        header.innerHTML = healthStatus;
        message.innerHTML = isHealthy ? 'czas na budowanie sylwetki' : 'poprawmy wagę';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new BMICalculator();
})

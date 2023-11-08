class Warrior {
    _experience; // нижнє підкреслення щоб назви відрізнялись від назв відповідних функцій
    _level;
    _rank;
    _achievements;
    constructor() {
        this._experience = 100;
        this._level = 1;
        this._rank = "Pushover";
        this._achievements = [];
    }
    experience = () => this._experience;
    level = () => this._level;
    rank = () => this._rank;
    achievements = () => this._achievements;
    acquireExperience(exp) { // отримати досвід та за потреби отримати новий рівень/ранг
        if(exp < 0) // не можна отримати від'ємний досвід
            return "Error!";
        this._experience += exp;
        if(this._experience > 10000) // досвід максимум 10к
            this._experience = 10000;
        this._level = Math.floor(this._experience / 100);
        if(this._level >= 10 && this._level < 20)
            this._rank = "Novice";
        if(this._level >= 20 && this._level < 30)
            this._rank = "Fighter";
        if(this._level >= 30 && this._level < 40)
            this._rank = "Warrior";
        if(this._level >= 40 && this._level < 50)
            this._rank = "Veteran";
        if(this._level >= 50 && this._level < 60)
            this._rank = "Sage";
        if(this._level >= 60 && this._level < 70)
            this._rank = "Elite";
        if(this._level >= 70 && this._level < 80)
            this._rank = "Conqueror";
        if(this._level >= 80 && this._level < 90)
            this._rank = "Champion";
        if(this._level >= 90 && this._level < 100)
            this._rank = "Master";
        if(this._level === 100)
            this._rank = "Greatest";
    }
    battle(enemyLevel) {
        if(enemyLevel > 100 || enemyLevel < 1)
            return "Invalid level"
        if(enemyLevel - this._level >= 5 && Math.floor(enemyLevel / 10) - Math.floor(this._level / 10) >= 1)
            return "You've been defeated";
        if(this._level - enemyLevel >= 2)
            return "Easy fight";
        if(this._level - enemyLevel === 1) {
            this.acquireExperience(5);
            return "A good fight";
        }
        if(this._level === enemyLevel) {
            this.acquireExperience(10);
            return "A good fight";
        }
        let diff = enemyLevel - this._level;
        this.acquireExperience(20 * diff * diff);
        return "An intense fight";
    }
    training([description, expPoints, minLevel]) {
        if(this._level >= minLevel){
            this.acquireExperience(expPoints);
            this._achievements[this._achievements.length] = description; // додавання до масиву досягнень
            return description;
        }
        return "Not strong enough";
    }
}
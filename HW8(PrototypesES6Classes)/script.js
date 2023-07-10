class Student {
    constructor(university, cours, fullName) {
        this.university = university;
        this.cours = cours;
        this.fullName = fullName;
        this.marks = [];
        this.ban = false;
    }

    get getInfo() {
        return`Студент ${this.cours}-ог курсу, ${this.university}, ${this.fullName} `
    }

    get getMarks() {
        if (!this.ban) {
            return `Оцінки студента ${this.fullName} : ${this.marks}`
        } else {
            return null
        }
    }

    set setMarks(mark) {
        if (this.ban) {
            return null
        } else if (mark < 0 || mark > 5) {
            return console.log(`Error, ставити оцінки не можливо`)
        } else {
            return this.marks = [...this.marks, mark]
        }
    }

    get getAveregerMark() {
        return ((this.marks.reduce((marks,sum) => {
            return sum+=marks
        },0))/this.marks.length).toFixed(1)
    }

    dismiss() {
        this.ban = true;
    }
    recover() {
        this.ban = false;
    }

}

class BudgetStudent extends Student{
    constructor(university, cours, fullName, marks, scholarsship) {
        super(university, cours, fullName, marks);
        this.scholarsship = scholarsship;
        setInterval(this.getScholarsship, 30000)
    }

    getScholarsship=()=>{
        if (this.getAveregerMark >= 4 && !this.ban) {            
            console.log(`Студент ${this.fullName} отримав степендію у розмірі
            ${this.scholarsship} грн.`)
        }
        else {console.log(`${this.fullName} вчись краще!` ) };
    }
}

const stas = new Student("ONAPT", 4, "Петров Станислав Олександрович");
stas.marks = [5, 4, 4, 3]
console.log('---------GET INFO--------')
console.log(stas.getInfo);
console.log('---------GET MARK--------')
console.log(stas.getMarks);
stas.setMarks = 4;
stas.setMarks = 4;
console.log('---------GET MARK after setMark--------')
console.log(stas.getMarks);
console.log('---------getAveregerMark--------')
console.log(stas.getAveregerMark);
console.log('---------after delete Student--------')
stas.dismiss()
stas.setMarks = -2;
console.log(stas.getMarks);
console.log('---------after return Student--------')
stas.recover()
stas.setMarks = 4;
console.log(stas.getMarks);
console.log(stas.getAveregerMark);
console.log('---------getScholaesShip Or No?--------')
const filip = new BudgetStudent("ONAPT", 2, "Филипов Філлип Філипович", [5, 4, 5, 3], 1500);

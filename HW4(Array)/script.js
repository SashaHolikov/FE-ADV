const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння",
                "Теорія автоматів",
                "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1. Створити пари студентів.
function getCouple() {
    const couple = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4],students[5]]
    ]
    return couple
}
const couple = getCouple();
console.log('Створити пари студентів хлопець та дівчина:  ', getCouple());


//2. Присвоїти парам студентів теми
function getThemes(themes, couple) {    
    const coupleThisThemes = [];
    for (let i = 0; i < themes.length; i++){
        coupleThisThemes.push([...couple[i], themes[i]])        
    }
    return coupleThisThemes;

}
const coupleWithThemes = getThemes(themes, couple);
console.log('Присвоїти кожній парі тему:  ',coupleWithThemes )


// 3. Виставити кожномц студенту оцінку
function getMarks(students,marks) {
    const studentsWithMarks = [];
    for (let i = 0; i < marks.length; i++){
        studentsWithMarks.push([students[i],marks[i]])
    }
    return studentsWithMarks
}
const studentsWithMarks = getMarks(students, marks);
console.log('Виставити оцінки кожному студенту: ', studentsWithMarks);


//  4. Поставити кожный пары випадкову оцінку
function getCoupleWithMark(coupleThisThemes) {
    const coupleWithMark = [];
    for (let i = 0; i < coupleThisThemes.length; i++){
        let randomMark = Math.floor(Math.random() * 5) + 1;
        coupleWithMark.push([...coupleThisThemes[i], randomMark]);
        
    }
    return coupleWithMark
}
const coupleThisMark = getCoupleWithMark(coupleWithThemes);
console.log('Випадкові оцінки від 1 до 5 для пар студентів:  ' , coupleThisMark);
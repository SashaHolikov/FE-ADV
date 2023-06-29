const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
    }];


    const text = prompt('В якому слові порахувати букви?')
    
    /* EXE1 Створіть функцію getSubjects(students[0] -->
    ["Math", "Algorithms", "Data science"] -
    яка повертає список предметів для конкретного студента. 
    Зверніть увагу – назву предмету необхідно повертати з великої літери,
    а _ – замінити на пробіл*/

function getSubjects(students) {
    const subjectsStudent = Object.keys(students.subjects).map(item => item[0].toUpperCase() + item.slice(1).toLowerCase().replaceAll('_', ' '));
    return subjectsStudent
}
    
console.log('Створіть функцію getSubjects: ', getSubjects(students[1]));


/* EXE2 Створіть функцію getAverageMark(students[0]) 
--> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента
 НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.  
 */

function getAverageMark(students) {
    const marksStudents = Object.values(students.subjects).flat();
    const sumMarks = marksStudents.reduce((sum, item) => {
        return sum+item
    }, 0)
    return (sumMarks / marksStudents.length).toFixed(2);
}

console.log('Створіть функцію getAverageMark:  ', getAverageMark(students[0]))


/*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
"Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка.
*/

function getStudentInfo(students) {
    let info = {...students};
    delete info.subjects
    info.averageMark = getAverageMark(students)
    return info

}

console.log('Інформація про студента: ', getStudentInfo(students[0]));

/**
 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
– яка повертає імена студентів у алфавітному порядку.
 */

function getStudentsNames(students) {
    let nameStudents = [];
    students.forEach((students) => {
        nameStudents.push(students.name)
    })
    nameStudents = nameStudents.sort();

    return nameStudents
}
console.log('Імена студентів у алфавітному порядку: ', getStudentsNames(students))

/**5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
кращого студента зі списку по показнику середньої оцінки. */

function getBestStudent(students) {
    let maxAverageMark = 0;
    let bestStudent = [];
    for (let i = 0; i < students.length; i++){
        if (maxAverageMark < getAverageMark(students[i])){
            maxAverageMark = getAverageMark(students[i])
        }   
    }
    students.forEach((students) => {
        if (maxAverageMark === getAverageMark(students)){
                bestStudent.push(students.name)
            }
        })


    return bestStudent 
    
}
console.log('Кращій студент:  ', getBestStudent(students))

/**
  6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
повторень.
 */

function calculateWordLetters(text) {
    const arrText = (text.toLowerCase().split('')).sort();
    let letterObject = {};
    
    for (let i = 0; i < arrText.length; i++){         
        letterObject[arrText[i]] = letterObject[arrText[i]] + 1 || 1;
    }

    return letterObject
    
    
}
console.log('Кількусть букв у слові ', calculateWordLetters(text))
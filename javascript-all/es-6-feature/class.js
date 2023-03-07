// syntactic sugar
class Insturctor{
    name;
    designation = 'Web Cousrse Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz module ${module}`)
    }
}

const amir = new Insturctor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession('9:00');
amir.createQuiz('60')
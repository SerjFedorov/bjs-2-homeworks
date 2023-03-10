class AlarmClock {
    constructor (intervalId = null) {
        this.alarmCollection = [];
        this.intervalId = intervalId;
    }

    addClock(time, callback, id) {
        if (time == null || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.find(elem => elem.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({time, canCall: true, callback})
    }

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(elem => elem.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    start() {
        if (this.intervalId !== null){
            return
        }
        
        let func = () => {
            this.alarmCollection.forEach(elem => {
            if (elem.time === this.getCurrentFormattedTime() && elem.canCall == true) {
                elem.canCall = false;
                elem.callback();
            }} )   
        }
        this.intervalId = setInterval((func), 1000);
    }

    stop() {
        clearInterval(1);
        this.intervalId = null;
    }

    resetAllCalls() {
        return this.alarmCollection.forEach (elem => elem.canCall = true)
    }

    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}
import { observable, action, decorate } from "mobx";
import Raspberry from '../api/Raspberry';

class TemperatureStore
{
    temp=0;

    getTemp = () =>{
        Raspberry.subscribeToTimer((err, temp) => this.temp = temp)
    }
}

decorate(TemperatureStore, {
    temp: observable,
    getTemp: action
})

const TempSingleton = new TemperatureStore();
export default TempSingleton;

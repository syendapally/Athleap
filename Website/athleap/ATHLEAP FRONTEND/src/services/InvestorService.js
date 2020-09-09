import axios from 'axios';

const ATHLETE_API_BASE_URL = "http://localhost:8080/api/v1/investors";

class AthleteService {

    getInvestors(){
        return axios.get(ATHLETE_API_BASE_URL);
    }
    createinvestor(athlete){
        return axios.post(ATHLETE_API_BASE_URL, athlete);
    }
}
export default new AthleteService();
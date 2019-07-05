
import axios from 'axios';

export default axios.create({
  baseURL: "http://opentable.herokuapp.com/api"
});

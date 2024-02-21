import axios from 'axios';

export default class Client {
    constructor() {
        this.options = {
            method: 'POST',
            url: 'http://localhost:3030/api/v1/startups',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        };
    }

  async startups(messages, modeloNegocio ) {
    this.options.data = {
        messages: messages,
        modeloNegocio: modeloNegocio
    };
     try {
       return  await  axios.request( this.options );
     } catch (error) {
        throw error;
     }
  }

}

import Client from "@/api/client.js";



export default class StartupsService {
    constructor() {
        this.client = new Client();
    }

    async startups(messages, modeloNegocio) {
       try {
            return await this.client.startups(messages, modeloNegocio);
       } catch (error) {
            throw error;
       }
    }
}

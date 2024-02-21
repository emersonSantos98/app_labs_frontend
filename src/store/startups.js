import { defineStore } from 'pinia'
import StartupsService from '@/services/startups.service.js'
const startupsService = new StartupsService();

export const startups = defineStore('startup', {

    state: () => ({
        startups: [],
        isLoading: false,
    }),
    actions: {
        async fetchStartups(messages, modeloNegocio) {
            try {
                this.isLoading = true;
                const result = await startupsService.startups(messages, modeloNegocio);
                this.startups = result.data.idea
            } catch (error) {
                throw error;
            } finally {
                this.isLoading = false;
            }
        }
    },
    getters: {
        getStartups() {
            return this.startups;
        },
        getIsLoading() {
            return this.isLoading;
        }
    }

})

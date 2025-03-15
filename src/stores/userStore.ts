import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: null,
    errorMessage: '',
    successMessage: ''
  }),
  actions: {
    async register(email: string, password: string) {
      try {
        console.log('Envoi des données:', { email, password });
        const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/users', {
          email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Réponse de l\'API:', response.data);
        this.user = response.data;
        this.errorMessage = '';
        this.successMessage = 'Utilisateur créé avec succès.';
      } catch (error: any) {
        console.error('Erreur de l\'API:', error.response?.data || error.message);
        this.errorMessage = error.response?.data?.message || 'Une erreur est survenue lors de la création de l\'utilisateur. Veuillez réessayer.';
        this.successMessage = '';
      }
    },
    async login(email: string, password: string) {
      try {
        console.log('Envoi des données:', { email, password });
        const response = await axios.post('https://pokemon-api-seyrinian-production.up.railway.app/users/login', {
          email,
          password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Réponse de l\'API:', response.data);
        this.user = response.data.user;
        this.token = response.data.token;
        this.errorMessage = '';
        this.successMessage = 'Connexion réussie.';
      } catch (error: any) {
        console.error('Erreur de l\'API:', error.response?.data || error.message);
        this.errorMessage = error.response?.data?.message || 'Une erreur est survenue lors de la connexion. Veuillez réessayer.';
        this.successMessage = '';
      }
    }
  }
});

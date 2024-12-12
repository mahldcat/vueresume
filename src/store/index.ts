import { createStore } from 'vuex';
import axios from 'axios';
import { handleApiError } from '@/utils/errorhandler';
import {Profile,Education,Expertise, Experience,} from '@/data';

// Define state interface
interface State {
  profile: Profile | null;
  education: Education | null;
  expertise: Expertise | null;
  experience: Experience | null;
  loading: boolean;
  error: string | null;
}

// Initialize store
const store = createStore<State>({
  state: {
    profile: null,
    education: null,
    expertise: null,
    experience: null,
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, isLoading: boolean) {
      state.loading = isLoading;
    },
    setError(state, error: string | null) {
      state.error = error;
    },
    setProfile(state, profile: Profile) {
      state.profile = profile;
    },
    setEducation(state, education: Education) {
      state.education = education;
    },
    setExpertise(state, expertise: Expertise) {
      state.expertise = expertise;
    },
    setExperience(state, experience: Experience) {
      state.experience = experience;
    },
  },
  actions: {
    async fetchProfile({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://data.hyperio.us/v1/resume/profile');
        commit('setProfile', response.data);
        commit('setError', null);
      } catch (error) {
        handleApiError(commit,error);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchEducation({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://data.hyperio.us/v1/resume/education');
        commit('setEducation', response.data);
        commit('setError', null);
      } catch (error) {
        handleApiError(commit,error);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchExpertise({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://data.hyperio.us/v1/resume/expertise');
        commit('setExpertise', response.data);
        commit('setError', null);
      } catch (error) {
        handleApiError(commit,error);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchExperience({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('https://data.hyperio.us/v1/resume/experience');
        commit('setExperience', response.data);
        commit('setError', null);
      } catch (error) {
        handleApiError(commit,error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  getters: {
    profile: (state) => state.profile,
    education: (state) => state.education,
    expertise: (state) => state.expertise,
    experience: (state) => state.experience,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
});

export default store;

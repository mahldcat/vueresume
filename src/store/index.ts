import { createStore } from 'vuex';
import { handleFetch } from '@/utils/fetchhandler';
import {Profile,Education,Expertise, Experience,ProfessionalReferences} from '@/data';

// Define state interface
interface State {
  profile: Profile | null;
  education: Education | null;
  expertise: Expertise | null;
  experience: Experience | null;
  references: ProfessionalReferences | null;
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
    references: null,
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
    setReferences(state, references: ProfessionalReferences){
      state.references= references;
    }
  },
  actions: {
    async fetchProfile({ commit }) {
      handleFetch(commit,'https://data.hyperio.us/v1/resume/profile','setProfile');
    },
    async fetchEducation({ commit }) {
      handleFetch(commit,'https://data.hyperio.us/v1/resume/educatiion','setEducation');
    },
    async fetchExpertise({ commit }) {
      handleFetch(commit,'https://data.hyperio.us/v1/resume/expertise','setExpertise');
    },
    async fetchExperience({ commit }) {
      handleFetch(commit,'https://data.hyperio.us/v1/resume/experience','setExperience');
    },
    async fetchReferences({commit}){
      handleFetch(commit,'https://data.hyperio.us/v1/resume/references','setReferences');
    },
  },
  getters: {
    profile: (state) => state.profile,
    education: (state) => state.education,
    expertise: (state) => state.expertise,
    experience: (state) => state.experience,
    references: (state) => state.references,
    loading: (state) => state.loading,
    error: (state) => state.error,
  },
});

export default store;

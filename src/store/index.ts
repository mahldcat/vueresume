import { defineStore } from 'pinia';
import axios from 'axios';
import { Profile, Education, Expertise, Experience, ProfessionalReferences } from '@/data';


export const useResumeStore = defineStore('curriculumvitae', {

  state: () => ({
    profile: null as Profile | null,
    education: null as Education | null,
    expertise: null as Expertise | null,
    experience: null as Experience | null,
    references: null as ProfessionalReferences | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProfile() {
      this.loading=true;
      try {
        const response = await axios.get<Profile>('https://data.hyperio.us/v1/resume/profile');
        this.profile=response.data;
        this.error=null;
  
      } catch (err: any) {
        this.error=err.message;
      } finally {
        this.loading=false;
      }
    },
    async fetchEducation() {
      this.loading=true;
      try {
        const response = await axios.get<Education>('https://data.hyperio.us/v1/resume/education');
        this.education=response.data;
        this.error=null;
      } catch (err: any) {
        this.error=err.message;
      } finally {
        this.loading=false;
      }
    },
    async fetchExpertise() {
      this.loading=true;
      try {
        const response = await axios.get<Expertise>('https://data.hyperio.us/v1/resume/expertise');
        this.expertise=response.data;
        this.error=null;
        
      } catch (err: any) {
        this.error= err.message;
      } finally {
        this.loading=false;
      }
    },
    async fetchExperience() {
      this.loading=true;
      try {
        const response = await axios.get<Experience>('https://data.hyperio.us/v1/resume/experience');
        this.experience=response.data;
        this.error= null;
      } catch (err: any) {
        this.error=err.message;
      } finally {
        this.loading=false;
      }
    },
    async fetchReferences() {
      this.loading=true;
      try {
        const response = await axios.get<ProfessionalReferences>('https://data.hyperio.us/v1/resume/references');
        this.references=response.data;
        this.error= null;
      } catch (err: any) {
        this.error= err.message;
      } finally {
        this.loading=false;
      }
    },
  },
});

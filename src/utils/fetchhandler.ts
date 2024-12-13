import { Commit } from "vuex";
import axios from "axios";
import { handleApiError } from "./errorhandler";

export async function handleFetch(
    commit:Commit,
    fetchUri:string,
    dataName:string,
    setLoading="setLoading",
    setError="setError"){

    commit(setLoading, true);
    try {
      const response = await axios.get(fetchUri);
      commit(dataName, response.data);
      commit(setError, null);
    } catch (error) {
      handleApiError(commit,error);
    } finally {
      commit(setLoading, false);
    }

}
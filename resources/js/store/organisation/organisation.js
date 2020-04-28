
//organisation module

const state = {
    organisations:[],
    organisation:[],
    pagination:[],
  };
const getters = {
    Organisations(state){
      return state.organisations;
    },
    Organisation(state){
      return state.organisation;
    },
    OrganisationPagination(){
        return state.pagination;
    },
  };
const actions = {
  organisation(context){
        axios.get('/api/organisation/get')
        .then((response)=>{
        //   console.log(response.data.organisation);
          context.commit('organisation', response.data.organisation);
        })
    },
    organisations({ dispatch, commit }, url){//permission.index route laravel
        return new Promise((resolve, reject) =>{
            axios.get(url)
            .then((response)=>{
                commit('organisations', response.data.organisations.data);
                commit('pagination', response.data.organisations);
                resolve(response);
            })
            .catch(error => {
                console.log(error, 'error')
                reject(error);
            });
        });
    },
    OrganisationById(context, payload){
        axios.get('/api/organisation/show/'+payload)
              .then((response)=>{
                  console.log(response.data);
                  context.commit('organisation', response.data.organisation);
              });
    }
 }
const mutations = {
    organisations(state, data){
      return state.organisations = data;
    },
    organisation(state, data){
      return state.organisation = data;
    },
    pagination(state, data){
        var pagination = {
            current_page: data.current_page,
            last_page: data.last_page,
            from: data.from,
            to: data.to,
            total: data.total,
            next_page_url: data.next_page_url,
            prev_page_url: data.prev_page_url,
        }
        return state.pagination = pagination;
    },
  };

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
};





    

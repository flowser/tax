//user module

const state = {
    users: [],
    user: [],
    pagination: [],
};
const getters = {
    Users(state) {
        return state.users;
    },
    user(state) {
        return state.user;
    },
    UserPagination() {
        return state.pagination;
    }
};
const actions = {
    users({dispatch,  commit}, url) {
            axios.get(url)
                .then((response) => {
                    commit('users', response.data.users.data);
                    commit('pagination', response.data.users)
                })
                .catch(error => {
                    console.log(error, 'error')
                });
    },
    UserById(context, payload) {
        axios.get('/api/user/show/' + payload)
            .then((response) => {
                console.log(response.data);
                context.commit('user', response.data.user);
            });
    }
}
const mutations = {
    users(state, data) {
        return state.users = data;
    },
    user(state, data) {
        return state.user = data;
    },
    pagination(state, data) {
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

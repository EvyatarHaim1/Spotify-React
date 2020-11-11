export const initialState = {
    user : null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing 
    token: "BQAJ0xDfIaQjo2eHcfbyBoHkbeEIcG_jVka-w4i_SDF1KSMnUp…XYcolNDYbgiPqbgqF9zvNEA1P9HpJohlr5ksK0vN1hOJ7DEdd"
}

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]

    switch(action.type) {
      case 'SET_USER':
          return {
              ...state,
              user: action.user
          }
      case 'SET_TOKEN':
          return {
              ...state,
              token: action.token
          }
      case 'SET_PLAYLISTS':
          return {
            ...state,
            playlists: action.playlists
          };

      default:
          return state;
    }
}

export default reducer;
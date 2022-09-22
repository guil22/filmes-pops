import React, { useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {

    const [pesquisa, setPesquisa] = useState('');
      
    return(
        <AuthContext.Provider value={{pesquisa, setPesquisa}}>
            {props.children}
        </AuthContext.Provider>
    )
}

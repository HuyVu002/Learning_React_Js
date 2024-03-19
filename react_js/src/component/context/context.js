import React from "react";

const Context = React.createContext(); // tao 1 global state tao 1 o nho chung o ben phai goc man hinh

export const ContextProvider = Context.Provider; // tao 1 con duong de ket noi voi cac file khac
export default Context; // kieu thuong ko co ngoac nhon

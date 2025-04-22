import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      messages: 1,
      increaseMessages: () => set({ messages: get().messages + 1 }),
    }),
    {
      name: "message-storage",
    }
  )
);
export default useStore;

//Noter fra undervisning til webshop (Dannie)
// import {create} from "zustand";

// const useFishStore = create (
//     persist(
//         (set, get) => ({
//             cart: [],
//             addProduct: (product) => set ({cart: get().........})
//         })
//     )
// )

//Noter fra undervisning til webshop (Dannie)
// import {useState} from "react"

// function page() {
//     const [cartItems, setCartItems] = useState([]);

//     function addProduct(product) {
// setCartItems((prev) => prev.concat(product))
//     }

//     return (
//         <div>
//             <h1>Local State</h1>
//             {
//                 cartItems.map((product) => (
//                     <article>
//                         <h2>{item.name}</h2>
//                     <button onClick={()=> addProduct(product)}>Add to cart</button>
//                     </article>
//                 ))
//             }
//         </div>
//     )
// }

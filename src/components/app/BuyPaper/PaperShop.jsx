// import React, { useState } from "react";
// import '../../../input.css';

// const PaperShop = () => {
//   const paperPrices = {
//     A3: 500,
//     A4: 400,
//     A5: 200,
//   };

//   const [selectedSize, setSelectedSize] = useState("A4");
//   const [stock, setStock] = useState({ A3: 999, A4: 999, A5: 999 });
//   const [quantity, setQuantity] = useState(1);
//   const [cart, setCart] = useState([]);

//   const addToCart = () => {
//     const price = paperPrices[selectedSize] * quantity;
//     const newCart = [...cart];
//     const existingItemIndex = newCart.findIndex((item) => item.size === selectedSize);

//     if (existingItemIndex >= 0) {
//       newCart[existingItemIndex].quantity += quantity;
//       newCart[existingItemIndex].price += price;
//     } else {
//       newCart.push({ size: selectedSize, quantity, price });
//     }

//     setCart(newCart);
//     setStock((prev) => ({ ...prev, [selectedSize]: prev[selectedSize] - quantity }));
//   };

//   const removeFromCart = (size) => {
//     const updatedCart = cart.filter((item) => item.size !== size);
//     const removedItem = cart.find((item) => item.size === size);

//     if (removedItem) {
//       setStock((prev) => ({ ...prev, [size]: prev[size] + removedItem.quantity }));
//     }

//     setCart(updatedCart);
//   };

//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="paper-shop-container">
//       <h2 className="header">Mua giấy in</h2>

//       <div className="paper-form">
//         {/* Form chọn giấy */}
//         <div className="box left-box">
//           <div className="mb-4">
//             <table>
//                 <tr>
//                   <td className="th">Khổ giấy:</td>
//                   <td>
//                       <select
//                       //className="border-gray-300 rounded-md shadow-sm sm:text-sm"
//                       value={selectedSize}
//                       onChange={(e) => setSelectedSize(e.target.value)}
//                       >
//                       {Object.keys(stock).map((size) => (
//                         <option className="option" key={size} value={size}>
//                           {size}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                 </tr>
                
//                 <tr>
//                   <td className="th">Số lượng:</td>
//                   <td>
//                     <input
//                       type="number"
//                       value={quantity}
//                       onChange={(e) => setQuantity(Math.min(stock[selectedSize], parseInt(e.target.value || 0)))}
//                       max={stock[selectedSize]}
//                       min="1"
//                       // className="border-gray-300 rounded-md shadow-sm sm:text-sm"
//                       // className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                   </td>
//                 </tr>        

//                 <tr>
//                   <td className="th">Giá:</td>
//                   <td>
//                     <span /*className="font-bold text-blue-600"*/>
//                       {paperPrices[selectedSize] * quantity} VNĐ
//                     </span>
//                   </td>
//                 </tr>      
//             </table>
          
//             <button
//               onClick={addToCart}
//               className="button-primary"
//               disabled={stock[selectedSize] === 0 || quantity === 0}
//             >
//               Thêm vào giỏ hàng
//             </button>

//           </div>
//         </div>

//         {/* Giỏ hàng */}
//         <div className="box right-box">
//           <h3 className="cart-header">Giỏ hàng</h3>
//           {cart.length > 0 ? (
//             <table className="cart-content">
//               <tr>
//                 <td className="b border border-gray-300 px-2 py-1">Khổ giấy</td>
//                 <td className="b border border-gray-300 px-2 py-1">Số lượng</td>
//                 <td className="b border border-gray-300 px-2 py-1">Giá tiền (VNĐ)</td>
//                 <td className="b border border-gray-300 px-2 py-1">Hành động</td>
//               </tr>
//               {cart.map((item, index) => (
//                 <tr key={index}>
//                   <td className="ct border border-gray-300 px-2 py-1">{item.size}</td>
//                   <td className="ct border border-gray-300 px-2 py-1">{item.quantity}</td>
//                   <td className="ct border border-gray-300 px-2 py-1">{item.price}</td>
//                   <td className="ct border border-gray-300 px-2 py-1 text-center">
//                     <button
//                       onClick={() => removeFromCart(item.size)}
//                       className="button-delete"
//                     >
//                       <i class="fas fa-trash-alt"></i>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </table>
//           ) : (<p className="text-gray-500">Giỏ hàng trống.</p>)
//           }
//         </div>
//       </div>

//       {/* Tổng tiền */}
//       <div className="total">
//         Tổng:{' '}
//         <span>{totalPrice.toLocaleString()} VNĐ</span>
//       </div>

//       {/* Nút hành động */}
//       <div className="buttons">
//         <button> Xác nhận </button>
//         <button> Hủy bỏ </button>
//       </div>
//     </div>
//   );
// };

// export default PaperShop;
  import React, { useState } from "react";
  import Nav from '../../layout/Nav';
  import Footer from '../../layout/Footer';

const PaperShop = () => {
  const paperPrices = {
    A3: 500,
    A4: 400,
    A5: 200,
  };

  const [selectedSize, setSelectedSize] = useState("A4");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const price = paperPrices[selectedSize] * quantity;
    const newCart = [...cart];
    const existingItemIndex = newCart.findIndex((item) => item.size === selectedSize);

    if (existingItemIndex >= 0) {
      newCart[existingItemIndex].quantity += quantity;
      newCart[existingItemIndex].price += price;
    } else {
      newCart.push({ size: selectedSize, quantity, price });
    }

    setCart(newCart);
  };

  const removeFromCart = (size) => {
    const updatedCart = cart.filter((item) => item.size !== size);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
     <Nav />

    <div className="paper-shop-container">
      <h2 className="header">Mua giấy in</h2>

      <div className="paper-form">
        {/* Form chọn giấy */}
        <div className="box left-box">
          <div className="mb-4">
            <table>
              <tr>
                <td className="th">Khổ giấy:</td>
                <td>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {Object.keys(paperPrices).map((size) => (
                      <option className="option" key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td className="th">Số lượng:</td>
                <td>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value || 0))}
                    min="1"
                  />
                </td>
              </tr>

              <tr>
                <td className="th">Giá:</td>
                <td>
                  <span>{paperPrices[selectedSize] * quantity} VNĐ</span>
                </td>
              </tr>
            </table>

            <button
              onClick={addToCart}
              className="button-primary"
              disabled={quantity === 0}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Giỏ hàng */}
        <div className="box right-box">
          <div>         
          <h3 className="cart-header"> <i className="ti-shopping-cart"></i>  Giỏ hàng </h3>
          </div>
          {cart.length > 0 ? (
            <table className="cart-content">
              <tr>
                <td className="b px-2 py-1">Khổ giấy</td>
                <td className="b px-2 py-1">Số lượng</td>
                <td className="b px-2 py-1">Giá tiền (VNĐ)</td>
                <td className="b px-2 py-1">Hành động</td>
              </tr>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="ct px-2 py-1 text-center">{item.size}</td>
                  <td className="ct px-2 py-1 text-center">{item.quantity}</td>
                  <td className="ct px-2 py-1 text-center">{item.price}</td>
                  <td className="ct px-2 py-1 text-center">
                    <button
                      onClick={() => removeFromCart(item.size)}
                      className="button-delete"
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <p className="text-gray-500">Giỏ hàng trống.</p>
          )}
        </div>
      </div>

      {/* Tổng tiền */}
      <div className="total">
        Tổng: <span>{totalPrice.toLocaleString()} VNĐ</span>
      </div>

      {/* Nút hành động */}
      <div className="buttons">
        <button> Xác nhận </button>
        <button> Hủy bỏ </button>
      </div>
    </div>

    
    <Footer />
    </>
  );
};

export default PaperShop;
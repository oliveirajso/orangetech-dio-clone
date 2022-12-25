// import { useState, useEffect, useMemo, useCallback } from "react";

// const Teste = () => {
//   const [name, setName] = useState('Jefferson');
//   const [age, setAge] = useState(26);

//   const handleChangeName = useCallback(() => {
//     console.log("alterou nome");
//     setName(prev => prev === "José" ? "Jefferson" : "José");
//   })
//   const handleAge = useCallback(() => {
//     console.log("Atual idade");
//     const newAge = 10 * age;
//     console.log("🚀 ~ newAge", newAge, age, newAge)
//     setAge(prev => prev === 32 ? 33 : 32);
//   }, [age]);
//   // const changeUser = () => {
//   //   handleCangeName();
//   // }
//   // useEffect(() => {
//   //   changeUser();
//   // }, []);

//   //  useMemo()
//   // const calculo = useMemo(() => {
//   //   console.log('Calculou');
//   //   return 10 * 257984;
//   // }, []);

//   const calculo = useMemo(() => {
//     console.log('Calculou', age);
//     return 10 * age;
//   }, [age]);

//   console.log('rendenrizei', calculo);


//   return (
//     <div>
//       <p>
//         nome: {name} <wbr />
//       </p>
//       <wbr />
//       <p>
//         idade: {age}
//       </p>
//       <button onClick={handleChangeName} type="button" >Alterar Nome</button>
//       <button onClick={handleAge} type="button" >Alterar idade</button>
//     </div>
//   )
// }
// export { Teste };
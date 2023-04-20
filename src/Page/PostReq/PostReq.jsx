import { useEffect, useState } from "react";
import FormPost from "../../Components/FormPost/FormPost";
import css from "./PostReq.module.css"
import { postNewData } from "../../Utilities/helpers";

const PostReq = () => {
  const [finalData, setFinalData] = useState({})
  
  const handleFormSubmitAddData = (data) => {
    setFinalData(data);
    
  };

   useEffect(() => {
     if (!finalData) {
       return;
     }
     console.log(finalData);
     postNewData(finalData);
   }, [finalData]);


    return (
      <section className={css.postReq}>
        <h1 className={css.postTitle}>Working with POST request</h1>
        <FormPost submit={handleFormSubmitAddData} />
      </section>
    );
}
 
export default PostReq;
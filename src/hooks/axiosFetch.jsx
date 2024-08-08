import { useEffect, useState } from "react"
import  axios from 'axios'


const useAxiosFetch=(dataURL)=>{
const [data,setData]=useState([])
const [fetchError,setFetchError]=useState(null)
const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
    const isMounted=true
    const source=axios.CancelToken.source() 
    const fetchData=async()=>{
        setIsLoading(true)
        try{
        const response=await axios.get(dataURL,{
        cancelToken:source.token })
            if(isMounted){
                setData(response.data)
                setFetchError(null)
            }
        }catch(err){
            if(isMounted){
                setData([])
                setFetchError(err.message)
            }
        }finally{
            isMounted&&setTimeout(()=>{
                setIsLoading(false)},2000)
        }}
fetchData(dataURL)}
,[])
return {data,isLoading,fetchError}
}

export default useAxiosFetch


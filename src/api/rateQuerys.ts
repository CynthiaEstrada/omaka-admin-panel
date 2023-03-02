import axios from "axios";
import { env } from "../env/envDev";
import { RateType, RateTypeFormSimple } from "../types/typeRate";

export const newRate = async (rutaData : RateTypeFormSimple,creador:RateType['creador'],repartidor:RateType['repartidor'] | undefined)=>{
    try{
      if(rutaData && creador.id){
        let respuestaBack=await axios.post(`${env.serverUrl}/crear-ruta`,{rutaData:rutaData,creador:creador,repartidor:repartidor})
        return respuestaBack.data;
      }else{
          return({status:505})
      }
    }
    catch(err){
      console.log("error en CrearNuevaRuta",err);
        return({status:505})
    }
  }
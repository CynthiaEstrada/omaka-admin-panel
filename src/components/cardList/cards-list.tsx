import { OrderType } from "../../types/typeOrders";
import { cardPropsType } from "../../types/typesCards";
import CardRutas from "../generalCards/rutas-card";
import CardPedidos from "../generalCards/pedidos-card";
import CardRepartidor from "../generalCards/repartidor-card";
import './styles.css';
import Loading from "../atoms/loading";

type CardListInterface = {
  data: any[];
  tipo: string;
  variant?: string;
  cardProps?: cardPropsType;
  loading?: boolean;
  onClickItem: (item: OrderType | any) => void;
};

export const CardList = ({ data, tipo, cardProps, onClickItem, variant, loading }: CardListInterface) => {
  if(loading)return(<Loading/>)
  switch (tipo) {
    case 'pedidos':
      return (
        <div className='listContainer'>
          {data.map((item) => {
            return <CardPedidos variant={variant} cardProps={cardProps} onClick={(item)=>onClickItem && onClickItem(item)} data={item} />;
          })}
        </div>
      )
      break;
    case 'rutas':
      return (
        <div className='listContainer'>
          {data.map((item) => {
            return <CardRutas data={item} cardProps={cardProps} onClick={(item)=>onClickItem && onClickItem(item)} />;
          })}
        </div>
      )
      break;
    case 'repartidor':
      return (
        <div className='listContainer'>
          {data.map((item) => {
            return <CardRepartidor cardProps={cardProps} onClick={(item)=>onClickItem && onClickItem(item)} data={item} />;
          })}
        </div>
      )
      break;
    default:
      return(<></>);
      break;
  }
  
};


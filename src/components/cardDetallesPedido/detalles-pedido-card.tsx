import { useState } from "react";
import {
  Person,
  Receipt,
  CalendarToday,
  Place,
  Phone
} from "@mui/icons-material";
import { IconText } from "../atoms/iconText";
import "./styles.css";
import Colors from "../../utils/colors";
import Typography from "../atoms/typography";
import { OrderType } from "../../types/typeOrders";
import { InformationChip } from "../atoms/information-chip";
import { getDateAndHour } from "../../utils/dateAndTime";

const DetallesPedidoCard = (props: OrderType) => {
  const {
    direccionPedido,
    fechaCreacion,
    nombreCliente,
    notaDePedido,
    status,
    telefonoPedido,
    idPedido
  } = props;

  const [isSelect, setIsSelect] = useState(true);
  const clickPrueba = () => {
    setIsSelect(!isSelect);
  };
  return (
    <div className="card-detalle-pedido-container">
        <div className="card-detalle-pedido-header">
          <Typography variant="cardTitle" color={Colors().iztac}>
            {idPedido.slice(-8)}
          </Typography>
          <div className="card_chip_container">
            <InformationChip text={status} />
          </div>
        </div>
        <div className="item_detalles_pedidos">
          <IconText
            textColor={Colors().akostik200}
            icon={Place}
            iconSize="small"
            text={direccionPedido}
          />
          <IconText
            textColor={Colors().akostik200}
            icon={Person}
            iconSize="small"
            text={nombreCliente}
          />
        </div>
        <div className="item_detalles_pedidos">
          <IconText
            textColor={Colors().akostik200}
            icon={Phone}
            iconSize="small"
            text={telefonoPedido}
          />
          <IconText
            textColor={Colors().akostik200}
            icon={CalendarToday}
            iconSize="small"
            text={`Creado el: ${getDateAndHour(fechaCreacion)}`}
          />
        </div>

        <IconText
          textColor={Colors().akostik200}
          icon={Receipt}
          iconSize="small"
          text={notaDePedido}
        />
    </div>
  );
};

export default DetallesPedidoCard;

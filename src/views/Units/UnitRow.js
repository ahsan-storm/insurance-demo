import React from 'react';
import {Link} from "react-router-dom";
import {Badge} from "reactstrap";

function UnitRow(props) {
  const unit = props.unit;
  const unitLink = `/units/${unit.id}`;

  const getBadge = (status) => {
    return status === 'ACTIVE' ? 'success' : 'danger';
  };

  return (
    <tr key={unit.id.toString()} onClick={() => props.history.push(unitLink)}>
      <td><Link to={unitLink}>{unit.name}</Link></td>
      <td><Link to={unitLink}><Badge color={getBadge(unit.status)}>{unit.status}</Badge></Link></td>
    </tr>
  )
}

export default UnitRow;

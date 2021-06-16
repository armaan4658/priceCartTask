import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

export function Cart({ele}) {
    return <div className="cart">
      <h5 style={{ color: 'grey', margin: '20px 0 0 0' }}>{ele.status}</h5>
      <h2 style={{ margin: '10px 0 0 0' }}>{ele.price}<sub>/month</sub></h2>
      <hr></hr>
      <div className="content">
        {ele.pros.map(p => (
          <h6><CheckIcon></CheckIcon>{p}</h6>
        ))}
        {ele.cons.length > 0 ? ele.cons.map(c => (
          <h6 style={{ color: 'darkgrey' }}><ClearIcon></ClearIcon> {c}</h6>
        )) : ""}
      </div>
      <Button className="bt"><h6>BUTTON</h6></Button>
    </div>;
  }
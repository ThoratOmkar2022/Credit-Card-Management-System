
import { AppstoreOutlined, SwapOutlined } from "@ant-design/icons";
import { Collapse} from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div >
      <Collapse defaultActiveKey={['0']} onChange={onChange} className="card_details">
        <Panel extra={<AppstoreOutlined className="extra_icon" />} header={"Card Details"} key="1" style={{ color: "rgb(29, 197, 248)" }}>
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Collapse defaultActiveKey={['1']} onChange={onChange} className="card_details">
        <Panel extra={<SwapOutlined className="extra_icon" />} header="Todays transictions" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default App;
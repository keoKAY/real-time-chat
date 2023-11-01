import { useEffect } from "react";
import RabbitMQService from "./service/RabbitMQService";

function App() {
  useEffect(() => {
    const text = {
      item_id: "macbook",
      text: "macbook pro 2020 :smiley:",
    };
    (async () => {
      await RabbitMQService.connect();
      await RabbitMQService.sendMessage(text);
      await RabbitMQService.consumeMessage((message) => {
        console.log(" [x] Received '%s'", message);
      });
    })();
  }, []);

  return <div></div>;
}
export default App;

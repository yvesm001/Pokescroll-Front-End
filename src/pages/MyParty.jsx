import React from "react";

function MyParty() {
  const [party, setParty] = useState(null);

  const getParty = async () => {
    try {
      const response = await axios.get(
        "https://pokemon-data.adaptable.app/party"
      );
      setParty(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>My Party Page</h1>
    </div>
  );
}

export default MyParty;

//import hooks
import { useState } from "react";

//import components
import { Header, NetworkPicker } from "../../components";

const Launchpad = () => {
  const [network, setNetwork] = useState("arbitrum");
  const [showNetworkPicker, setShowNetworkPicker] = useState(true);
  return (
    <div>
      <Header />
      <div className="flex justify-center mt-8">
        {/* optimisim */}
        {network === "optimism" && !showNetworkPicker && (
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x51bb487F0524DC4451D62e29567BF378EBf60A95&chain=%7B%22name%22%3A%22OP+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Foptimism.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22oeth%22%2C%22chainId%22%3A10%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22optimism%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Foptimism%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d2806730c5cff4ede75321d523481bea&primaryColor=green"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%", border: 0, borderRadius: "10px" }}
          ></iframe>
        )}
        {/* arbitrum */}
        {network === "arbitrum" && !showNetworkPicker && (
          <iframe
            src="https://embed.ipfscdn.io/ipfs/bafybeihazpt6pkm4azgtupdz7hc2j3o4zpjsvtcgfq4t2keozxkss3ud6q/?contract=0x330578da2DB211e8015540e722d363BFe089e2CA&chain=%7B%22name%22%3A%22Arbitrum+One%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Farbitrum.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22arb1%22%2C%22chainId%22%3A42161%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22arbitrum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Farbitrum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=d2806730c5cff4ede75321d523481bea&primaryColor=purple"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%", border: 0, borderRadius: "10px" }}
          ></iframe>
        )}
      </div>
      {showNetworkPicker && (
        <NetworkPicker
          handleClose={() => {
            setShowNetworkPicker(false);
          }}
          handleChangeNetwork={setNetwork}
          network={network}
        />
      )}
    </div>
  );
};

export default Launchpad;

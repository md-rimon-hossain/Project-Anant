// ConnectButton.tsx
import { useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import './ConnectButton.css'; // Import the CSS file for styling

export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const appKit = useAppKit(); // Access AppKit context
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = async () => {
    try{
      if (!isConnected) {
        // Open the wallet connect modal
        await appKit.open();
      } else {
        // Toggle the menu
        setMenuOpen(!menuOpen);
      }
    } catch(error){
      console.log(error);
    }
  };

  const handleDisconnect = async () => {
    disconnect();
    setMenuOpen(false);
  };

  // Function to shorten the wallet address
  const shortAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <div className="connect-button-container">
      <button className="connect-button" onClick={handleButtonClick}>
        {isConnected && address ? shortAddress(address) : 'Connect'}
      </button>
      {menuOpen && isConnected && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={handleDisconnect}>
            Disconnect
          </button>
          {/* Add other options here if needed */}
        </div>
      )}
    </div>
  );
}

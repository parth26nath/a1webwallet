let mnemo = '';
let wallets = [];

document.getElementById('getmenmo').addEventListener('click', () => {

    mnemo = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    document.getElementById('showmenemoic').textContent = mnemo;
});

document.getElementById('getwallet').addEventListener('click', () => {
    if (!mnemo) {
        alert('get a menmo first');
        return;
    }
  
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemo);
    const wallet = hdNode.derivePath(`m/44'/60'/0'/0/${wallets.length}`);
    wallets.push(wallet);
    displayWallets();
});

function displayWallets() {
    const walletList = document.getElementById('showwallet');
    walletList.innerHTML = '';
    wallets.forEach((wallet, index) => {
        const walletInfo = document.createElement('p');
        walletInfo.textContent = `Wallet ${index + 1}: ${wallet.address}`;
        walletList.appendChild(walletInfo);
    });
}
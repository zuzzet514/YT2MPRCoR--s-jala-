const Handler = require("./Handler");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const os = require("os");

class DownloadMp3Handler extends Handler{

    async handle(input) {
        const { title, link } = input;

        try {
            console.log(`Downloading MP3 for: ${title}`);

            const response = await fetch(link);
            const buffer = await response.buffer();

            const downloadDir = path.join(os.homedir(), "Downloads");
            const filePath = path.join(downloadDir, `${title}.mp3`);

            fs.writeFileSync(filePath, buffer);

            console.log("Download completed");


        } catch (error) {
            console.log("Error downloading mp3 file", error.message)
        }

    }
}

module.exports = { DownloadMp3Handler };
import fse from "fs-extra"
fse.readJSON("./package.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err)
    }
    const version = data.version.split(".")
    const lastVersion = Number(version.pop()) + 1
    version.push(lastVersion.toString())
    const newObj = {
        ...data,
        version: version.join("."),
    }
    fse.writeJSON("./package.json", newObj, {
        spaces: 2,
        EOL: "\r\n",
    })
        .then(() => {
            console.log("change version success😛")
        })
        .catch((err) => {
            console.log(err)
            console.log("change version failed😭")
        })
})

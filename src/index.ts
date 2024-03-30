#!/usr/bin/env node
import inquirer from "inquirer"
import fse from "fs-extra"
fse.ensureFileSync("./kcli.json")

fse.readJson("./kcli.json", (err, data) => {
    if (err) {
        console.log(err)
        console.error("你配置的文件为空，请重新配置🧐")
        return
    }
    const keys = Object.keys(data)
    if (keys.length === 0) {
        console.error("你配置的文件为空，请重新配置🧐")
        return
    }
    try {
        const { template, target } = data
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "templatePath",
                    message: "请输入模版路径😎",
                    default: template,
                },
                {
                    type: "input",
                    name: "targetPath",
                    message: "请输入目标路径👊",
                    default: target,
                },
            ])
            .then((answer) => {
                const { templatePath, targetPath } = answer
                fse.copy(templatePath, targetPath, (error: Error) => {
                    if (error) {
                        console.log(error)
                        console.error("你配置的文件有误，请重新配置🧐")
                        return
                    }
                    console.log("操控完成，欢迎下次使用👐")
                })
            })
    } catch (err) {
        console.log(err)
        console.error("你的配置文件有误，请重新配置🧐")
        return
    }
})

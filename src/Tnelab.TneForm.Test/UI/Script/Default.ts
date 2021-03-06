﻿///<reference path="../../../Tnelab.TneForm.Test.BLL/SimpleTestService.cs.ts"/>
let newForm: TMiniblink.TneForm;
let eventTest = function (sender, args) {
    alert(args.Files.join(",") + ":X:" + args.X + ":Y:" + args.Y);
}
let 文件选择对话框: TMiniblink.OpenFileDialog;
let 文件保存对话框: TMiniblink.SaveFileDialog;
let 目录选择对话框: TMiniblink.BrowseFolderDialog;
async function InvokeTest() {
    目录选择对话框 = await new TMiniblink.BrowseFolderDialog().Ready();
    await (目录选择对话框.Title = "请选择游戏目录");
    let handle = await ThisForm.Handle;
    await (目录选择对话框.OwnerHandle = handle);
    let file = await 目录选择对话框.ShowDialog();
    alert(file);    
}
let notifyicon: TMiniblink.NotifyIcon;
async function SaveFile() {
    文件保存对话框 = await new TMiniblink.SaveFileDialog().Ready();
    await (文件保存对话框.Title = "保存测试文件");
    await (文件保存对话框.Filter = "所有文件(*.*)|文本文件(*.txt)");
    let handle = await ThisForm.Handle;
    await (文件保存对话框.OwnerHandle = handle);
    await (文件保存对话框.File = "t.txt");
    let file = await 文件保存对话框.ShowDialog();
    alert(file);
}
async function OpenFile() {
    try {
        //newForm = await new TMiniblink.TneForm("Tne://Tnelab.TneForm.Test/ui/default.html?cmd=测试").Ready();
        //await newForm.Show();
        文件选择对话框 = new TMiniblink.OpenFileDialog();
        文件选择对话框.Ready().then(async function () {
            await (文件选择对话框.Title = "请选择测试文件");
            await (文件选择对话框.Filter = "所有文件(*.*)|文本文件(*.txt)");
            let handle = await ThisForm.Handle;
            await (文件选择对话框.OwnerHandle = handle);
            await (文件选择对话框.AllowMultiSelect = true);
            文件选择对话框.ShowDialog().then(function (files) {
                alert(files.join(";"));
            });
        });
    }
    catch (error) {
        console.log(error);
    }
}
async function showNotifyIcon(){
    let hwnd = await ThisForm.Handle;
    notifyicon = await new TMiniblink.NotifyIcon(hwnd, "default.png").Ready();
    await(notifyicon.Tip = "你好世界");
    await(notifyicon.Info = "程序已经隐藏到托盘。");
    let clickEvent = await notifyicon.Click;
    await clickEvent.AddListener(async function (sender, args) {
        let form = await sender as TMiniblink.TneForm;
        await form.Active();
    });
    let contextMenuEvent = await notifyicon.ContextMenu;
    await contextMenuEvent.AddListener(async function (sender, args) {
        let form = await sender as TMiniblink.TneForm;
        await (form.ShowContextMenu(undefined, undefined, 180, 100, "Tne://Tnelab.TneForm.Test/ui/TestContextMenu.html"));
    });
    await notifyicon.Show();
}
async function callOtherForm() {
    await (notifyicon.Info="你好啊");
    alert("HI");
}
async function showId() {
    alert(ThisForm.TneMapNativeObjectId);
}

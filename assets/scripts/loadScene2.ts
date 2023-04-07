// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {
  private _bundle: cc.AssetManager.Bundle;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {
    const options = {
      version: "08f57",
    };
    cc.assetManager.loadBundle(
      "http://127.0.0.1:8887/",
      options,
      (err, bundle) => {
        if (!err) {
          this._bundle = bundle;
          console.log(this._bundle);
        } else {
          console.log("Bundle Not Loaded");
        }
      }
    );
  }

  load_Scene2() {
    this._bundle.loadScene("miniscene",(err,asset)=>{
        if(!err){
            console.log("Scene Loaded");
            cc.director.runScene(asset);
        }
        else
        {
            console.log("Scene Not Loaded");
            
        }
    });
  }
  // update (dt) {}
}

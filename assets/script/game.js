
cc.Class({
  extends: cc.Component,

  properties: {
    face: {
      default: null,
      type: cc.Prefab
    }
  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start () {
    let panel = cc.find("Canvas/print_panel");
    let panel_cp = panel.addComponent("print")
    panel_cp.print('fshsghkangkafmngl,kfmglfmgsmfgmsfdlkgm');
  },

  // update (dt) {},
});

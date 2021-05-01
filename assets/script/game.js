
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
    panel_cp.print('fs\nhs\n\n\n\n');
    panel_cp.print('\n');
    // panel_cp.print('a');
  },

  // update (dt) {},
});

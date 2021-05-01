
cc.Class({
  extends: cc.Component,

  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },

  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.m_origin = cc.find("origin", this.node);
  },

  start () {

  },
  print (str) {
    let _width = 50;
    let _heigh = 50;
    let num = 15;
    let i = 0;
    for (let x of str) {
      //1. 创建str 中所有的字符
      let a = this.create_label(x);
      let hang = Math.floor(i / num);
      let lie = i % num;
      a.position = cc.v2(lie * _width, -hang * _heigh)
      //2. 放在这个脚本依附的node 下的origin结点
      this.m_origin.addChild(a);
      i++;
    }
  },
  //创建文本输出
  create_label (str) {
    let label = new cc.Node;
    let m_label = label.addComponent(cc.Label)
    m_label.string = str;
    return label;
  }

  // update (dt) {},
});

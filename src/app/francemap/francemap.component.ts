import {Component} from '@angular/core';
@Component({
  selector: 'app-francemap',
  templateUrl: './francemap.component.html',
  styleUrls: ['./francemap.component.css']
})
export class FrancemapComponent {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      "chart": {
        "animation": "0",
        "showbevel": "0",
        "usehovercolor": "1",
        "canvasbordercolor": "FFFFFF",
        "bordercolor": "FFFFFF",
        "showlegend": "0",
        "legendposition": "BOTTOM",
        "legendborderalpha": "0",
        "legendbordercolor": "ffffff",
        "legendallowdrag": "0",
        "legendshadow": "0",
        "caption": "",
        "connectorcolor": "000000",
        "fillalpha": "80",
        "hovercolor": "CCCCCC",
        "showborder": 1,
        "theme": "fusion"
      },
      "colorrange": {
        "minvalue": "0",
        "startlabel": "Low",
        "endlabel": "High",
        "code": "#EAEEF7",
        "gradient": "1",
        "color": [
          {"maxvalue": "50", "code": "#59709F"},
          {"maxvalue": "100", "code": "#3A507E"}
        ]

      },
      "data": [
        {"id":"FR.AI","value":1}, {"id":"FR.AS","value":8},
        {"id":"FR.AL","value":8}, {"id":"FR.AP","value":8},
        {"id":"FR.AM","value":7}, {"id":"FR.AH","value":1},
        {"id":"FR.AN","value":1}, {"id":"FR.AG","value":27},
        {"id":"FR.AB","value":1}, {"id":"FR.AD","value":8},
        {"id":"FR.AV","value":25}, {"id":"FR.BD","value":6},
        {"id":"FR.BR","value":7}, {"id":"FR.CV","value":27},
        {"id":"FR.CL","value":8}, {"id":"FR.CT","value":81},
        {"id":"FR.CM","value":89}, {"id":"FR.CH","value":7},
        {"id":"FR.CZ","value":1}, {"id":"FR.CS","value":27},
        {"id":"FR.CO","value":27}, {"id":"FR.CA","value":8},
        {"id":"FR.CR","value":1}, {"id":"FR.DD","value":8},
        {"id":"FR.DB","value":87}, {"id":"FR.DM","value":1},
        {"id":"FR.DS","value":69}, {"id":"FR.EU","value":1},
        {"id":"FR.EL","value":8}, {"id":"FR.ES","value":29},
        {"id":"FR.FI","value":8}, {"id":"FR.GA","value":9},
        {"id":"FR.GE","value":28}, {"id":"FR.GI","value":7},
        {"id":"FR.HE","value":6}, {"id":"FR.HD","value":29},
        {"id":"FR.HG","value":25}, {"id":"FR.HL","value":7},
        {"id":"FR.HM","value":1}, {"id":"FR.HP","value":26},
        {"id":"FR.HR","value":7}, {"id":"FR.HN","value":67},
        {"id":"FR.HS","value":1}, {"id":"FR.HV","value":1},
        {"id":"FR.HA","value":7}, {"id":"FR.HC","value":26},
        {"id":"FR.IV","value":27}, {"id":"FR.IL","value":7},
        {"id":"FR.IN","value":7}, {"id":"FR.IS","value":1},
        {"id":"FR.JU","value":75}, {"id":"FR.LD","value":8},
        {"id":"FR.LC","value":8}, {"id":"FR.LR","value":1},
        {"id":"FR.LA","value":1}, {"id":"FR.LT","value":7},
        {"id":"FR.LO","value":27}, {"id":"FR.LG","value":26},
        {"id":"FR.LZ","value":7}, {"id":"FR.ML","value":1},
        {"id":"FR.MH","value":28}, {"id":"FR.MR","value":1},
        {"id":"FR.MY","value":1}, {"id":"FR.MM","value":29},
        {"id":"FR.MS","value":26}, {"id":"FR.MB","value":7},
        {"id":"FR.MO","value":28}, {"id":"FR.NI","value":28},
        {"id":"FR.NO","value":27}, {"id":"FR.OI","value":8},
        {"id":"FR.OR","value":28}, {"id":"FR.PC","value":26},
        {"id":"FR.PD","value":8}, {"id":"FR.PA","value":9},
        {"id":"FR.PO","value":6}, {"id":"FR.RH","value":1},
        {"id":"FR.SL","value":27},{"id":"FR.SS","value":27},
        {"id":"FR.ST","value":1},{"id":"FR.SV","value":1},
        {"id":"FR.SM","value":1},{"id":"FR.SE","value":26},
        {"id":"FR.SO","value":7},{"id":"FR.TB","value":70},
        {"id":"FR.TA","value":25},{"id":"FR.TG","value":27},
        {"id":"FR.VP","value":28},{"id":"FR.VD","value":1},
        {"id":"FR.VM","value":28},{"id":"FR.VN","value":76},
        {"id":"FR.VG","value":27},{"id":"FR.VO","value":27},
        {"id":"FR.VR","value":7},{"id":"FR.VC","value":6},
        {"id":"FR.YV","value":28},{"id":"FR.YO","value":27},
        {"id":"FR.ME","value":1},{"id":"FR.GD", "color":"white", "useHoverColor":false, "showToolTip":false},
        {"id":"FR.FG", "color":"white", "useHoverColor":false, "showToolTip":false},
        {"id":"FR.MN", "color":"white", "useHoverColor":false, "showToolTip":false},
        {"id":"FR.MT", "color":"white", "useHoverColor":false, "showToolTip":false},
        {"id":"FR.RN", "color":"white", "useHoverColor":false, "showToolTip":false}]
    }
  }
}

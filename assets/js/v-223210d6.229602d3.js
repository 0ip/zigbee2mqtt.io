"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1055],{45791:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-223210d6",path:"/devices/5AA-SS-ZA-H0.html",title:"Leedarson 5AA-SS-ZA-H0 control via MQTT",lang:"en-US",frontmatter:{title:"Leedarson 5AA-SS-ZA-H0 control via MQTT",description:"Integrate your Leedarson 5AA-SS-ZA-H0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-04-29T17:11:59.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/5AA-SS-ZA-H0.md",git:{updatedTime:1663313315e3}}},15614:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(66252);const n=(0,a.uE)('<h1 id="leedarson-5aa-ss-za-h0" tabindex="-1"><a class="header-anchor" href="#leedarson-5aa-ss-za-h0" aria-hidden="true">#</a> Leedarson 5AA-SS-ZA-H0</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>5AA-SS-ZA-H0</td></tr><tr><td>Vendor</td><td>Leedarson</td></tr><tr><td>Description</td><td>Motion sensor</td></tr><tr><td>Exposes</td><td>occupancy, illuminance, illuminance_lux, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/5AA-SS-ZA-H0.jpg" alt="Leedarson 5AA-SS-ZA-H0"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),c=(0,a.Uk)("How to use device type specific configuration"),o=(0,a.uE)('<ul><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),l={},d=(0,i(83744).Z)(l,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);
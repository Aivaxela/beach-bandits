!function(){"use strict";const e=[{0:{name:"Hanna Park",optimal_route_sequence:["HANNA PARK","ST GEO ISL","ST GEO ISL SP","DOG ISL","ST VINCENT NWR","PONTE VEDRA N","PONTE VEDRA S","ST AUG BCHS","WASHINGTON OAKS","COUNTY BCHS"],distances_between_beaches:[21.73,1.6,.05,8.89,24.8,15.42,9.19,22.72,11.51],total_distance:115.9,coordinates:[[30.3709553,-81.4028428],[30.685597,-81.429754],[30.677999,-81.455209],[30.678079,-81.456019],[30.573019,-81.542569],[30.2396865,-81.3856384],[30.0224671,-81.3236866],[29.91218,-81.40989],[29.6355286,-81.2039528],[29.481089,-81.131149]]},1:{name:"Canaveral NS",optimal_route_sequence:["CANAVERAL NS","NEW SMYRNA BCH","COUNTY BCHS","WASHINGTON OAKS","ST AUG BCHS","N PENINSULA SRA","MERRITT ISL NWR","WABASSO BCH","CORAL COVE PARK","MEXICO BCH"],distances_between_beaches:[46.38,33.69,11.51,22.72,60.54,59.16,41.3,58.73,.3],total_distance:334.33,coordinates:[[28.4513556,-80.6283059],[29.0258132,-80.9271271],[29.481089,-81.131149],[29.6355286,-81.2039528],[29.91218,-81.40989],[29.06345,-81.14857],[28.30031,-80.70121],[27.7642808,-80.3979434],[26.9605829,-80.0781245],[26.956239,-80.077173]]},2:{optimal_route_sequence:["OCEAN REEF PARK","TEQUESTA BCHS","PALM BCHS 1992","WALTON COUNTY BCHS","PALM BCHS","MEXICO BCH","CORAL COVE PARK"],distances_between_beaches:[.8,1.68,5.65,7.76,11.56,.3],total_distance:27.75,coordinates:[[26.7936633,-80.0332519],[26.782194,-80.035116],[26.757872,-80.036852],[26.677051,-80.052446],[26.789809,-80.052072],[26.956239,-80.077173],[26.9605829,-80.0781245]]},3:{optimal_route_sequence:["EGLIN AFB","PERDIDO KEY","GULF ISL NS","COUNTY BCHS","GRAYTON BCH","PANAMA CITY BCH","ST ANDREWS SRA","TYNDALL AFB","CAPE SAN BLAS"],distances_between_beaches:[53.42,11.2,44.25,34.17,24.17,11.16,12.07,30.05],total_distance:220.48,coordinates:[[30.461382,-86.5468344],[30.3180487,-87.4259275],[30.415706,-87.276054],[30.66503,-86.59218],[30.3320215,-86.1676653],[30.1765914,-85.805386],[30.23765,-85.63262],[30.0691172,-85.5772755],[29.6768207,-85.3581739]]},4:{optimal_route_sequence:["DOG ISL","ST GEO ISL SP","ST GEO ISL","ST VINCENT NWR","HANNA PARK","PONTE VEDRA N","PONTE VEDRA S","ST AUG BCHS","WASHINGTON OAKS","COUNTY BCHS"],distances_between_beaches:[.05,1.6,10.26,16.23,9.1,15.42,9.19,22.72,11.51],total_distance:96.07,coordinates:[[30.678079,-81.456019],[30.677999,-81.455209],[30.685597,-81.429754],[30.573019,-81.542569],[30.3709553,-81.4028428],[30.2396865,-81.3856384],[30.0224671,-81.3236866],[29.91218,-81.40989],[29.6355286,-81.2039528],[29.481089,-81.131149]]}}];class t{constructor(e){this._id=e}generateRouteItem(e,t){return this._listElement=document.querySelector(this._id).content.querySelector(".routes__list-item").cloneNode(!0),this._listTitle=this._listElement.querySelector(".routes__title"),this._listSubtitle=this._listElement.querySelector(".routes__subtitle"),this._listTitle.textContent=t,this._listSubtitle.textContent=e,this._listElement}}console.log(e);let o=[],n=[],i=[],s=0;function c(t){s=t.selectedIndex;const c=e[0][s].coordinates.map((e=>({location:{lat:e[0],lng:e[1]}})));o=c[0].location,n=c[c.length-1].location,function(e){i=e.filter((e=>e.location!==o&&e.location!==n)).map((e=>({location:e.location})))}(c)}function a(){const o=document.querySelector(".routes__list");for(;o.querySelector(".routes__list-item");)o.removeChild(o.querySelector(".routes__list-item"));const n=new t("#routes");let i=65;e[0][s].optimal_route_sequence.forEach((e=>{const t=String.fromCharCode(i);o.append(n.generateRouteItem(e,t)),i++}))}function l(e,t){e.route({origin:o,destination:n,waypoints:i,travelMode:google.maps.TravelMode.DRIVING}).then((e=>{t.setDirections(e)})).catch((e=>window.alert("Directions request failed due to "+status)))}!function(){const e=document.querySelector("#start-dropdown");c(e),e.addEventListener("change",(()=>{c(e),a()}))}(),a(),window.initMap=function(){const e=new google.maps.DirectionsService,t=new google.maps.DirectionsRenderer,o=new google.maps.Map(document.querySelector("#map"),{zoom:6,center:{lat:28.18,lng:-81.6}});t.setMap(o),document.getElementById("start-dropdown").addEventListener("change",(function(){l(e,t)})),l(e,t)}}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsT0FBT0MsR0FBTUMsT0FBT0MsTUFBTSxvQ0FBc0NDLFNBQ3JFLEVBM0VBLFdBQ0UsTUFBTXRDLEVBQWlCZCxTQUFTQyxjQUFjLG1CQUM5Q1ksRUFBZ0JDLEdBRWhCQSxFQUFldUMsaUJBQWlCLFVBQVUsS0FDeEN4QyxFQUFnQkMsR0FDaEJXLEdBQWdCLEdBRXBCLENBQ0E2QixHQTZCQTdCLElBdUNBeUIsT0FBT0ssUUFwQ1AsV0FDRSxNQUFNbkIsRUFBb0IsSUFBSUssT0FBT0MsS0FBS2Msa0JBQ3BDbkIsRUFBcUIsSUFBSUksT0FBT0MsS0FBS2UsbUJBRXJDeEMsRUFBTSxJQUFJd0IsT0FBT0MsS0FBS2dCLElBQUkxRCxTQUFTQyxjQUFjLFFBQVMsQ0FDOUQwRCxLQUFNLEVBQ05DLE9BQVEsQ0FBRXhDLElBQUssTUFBT0MsS0FBTSxRQUc5QmdCLEVBQW1Cd0IsT0FBTzVDLEdBTTFCakIsU0FDRzhELGVBQWUsa0JBQ2ZULGlCQUFpQixVQU5JLFdBQ3RCbEIsRUFBeUJDLEVBQW1CQyxFQUM5QyxJQU1BRixFQUF5QkMsRUFBbUJDLEVBQzlDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWFjaC1iYW5kaXRzLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9iZWFjaC1iYW5kaXRzLy4vc3JjL2NvbXBvbmVudHMvUm91dGVJdGVtLmpzIiwid2VicGFjazovL2JlYWNoLWJhbmRpdHMvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICAwOiB7XHJcbiAgICAgIG5hbWU6IFwiSGFubmEgUGFya1wiLFxyXG4gICAgICBvcHRpbWFsX3JvdXRlX3NlcXVlbmNlOiBbXHJcbiAgICAgICAgXCJIQU5OQSBQQVJLXCIsXHJcbiAgICAgICAgXCJTVCBHRU8gSVNMXCIsXHJcbiAgICAgICAgXCJTVCBHRU8gSVNMIFNQXCIsXHJcbiAgICAgICAgXCJET0cgSVNMXCIsXHJcbiAgICAgICAgXCJTVCBWSU5DRU5UIE5XUlwiLFxyXG4gICAgICAgIFwiUE9OVEUgVkVEUkEgTlwiLFxyXG4gICAgICAgIFwiUE9OVEUgVkVEUkEgU1wiLFxyXG4gICAgICAgIFwiU1QgQVVHIEJDSFNcIixcclxuICAgICAgICBcIldBU0hJTkdUT04gT0FLU1wiLFxyXG4gICAgICAgIFwiQ09VTlRZIEJDSFNcIixcclxuICAgICAgXSxcclxuICAgICAgZGlzdGFuY2VzX2JldHdlZW5fYmVhY2hlczogW1xyXG4gICAgICAgIDIxLjczLCAxLjYsIDAuMDUsIDguODksIDI0LjgsIDE1LjQyLCA5LjE5LCAyMi43MiwgMTEuNTEsXHJcbiAgICAgIF0sXHJcbiAgICAgIHRvdGFsX2Rpc3RhbmNlOiAxMTUuOSxcclxuICAgICAgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICBbMzAuMzcwOTU1MywgLTgxLjQwMjg0MjhdLFxyXG4gICAgICAgIFszMC42ODU1OTcsIC04MS40Mjk3NTRdLFxyXG4gICAgICAgIFszMC42Nzc5OTksIC04MS40NTUyMDldLFxyXG4gICAgICAgIFszMC42NzgwNzksIC04MS40NTYwMTldLFxyXG4gICAgICAgIFszMC41NzMwMTksIC04MS41NDI1NjldLFxyXG4gICAgICAgIFszMC4yMzk2ODY1LCAtODEuMzg1NjM4NF0sXHJcbiAgICAgICAgWzMwLjAyMjQ2NzEsIC04MS4zMjM2ODY2XSxcclxuICAgICAgICBbMjkuOTEyMTgsIC04MS40MDk4OV0sXHJcbiAgICAgICAgWzI5LjYzNTUyODYsIC04MS4yMDM5NTI4XSxcclxuICAgICAgICBbMjkuNDgxMDg5LCAtODEuMTMxMTQ5XSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICAxOiB7XHJcbiAgICAgIG5hbWU6IFwiQ2FuYXZlcmFsIE5TXCIsXHJcbiAgICAgIG9wdGltYWxfcm91dGVfc2VxdWVuY2U6IFtcclxuICAgICAgICBcIkNBTkFWRVJBTCBOU1wiLFxyXG4gICAgICAgIFwiTkVXIFNNWVJOQSBCQ0hcIixcclxuICAgICAgICBcIkNPVU5UWSBCQ0hTXCIsXHJcbiAgICAgICAgXCJXQVNISU5HVE9OIE9BS1NcIixcclxuICAgICAgICBcIlNUIEFVRyBCQ0hTXCIsXHJcbiAgICAgICAgXCJOIFBFTklOU1VMQSBTUkFcIixcclxuICAgICAgICBcIk1FUlJJVFQgSVNMIE5XUlwiLFxyXG4gICAgICAgIFwiV0FCQVNTTyBCQ0hcIixcclxuICAgICAgICBcIkNPUkFMIENPVkUgUEFSS1wiLFxyXG4gICAgICAgIFwiTUVYSUNPIEJDSFwiLFxyXG4gICAgICBdLFxyXG4gICAgICBkaXN0YW5jZXNfYmV0d2Vlbl9iZWFjaGVzOiBbXHJcbiAgICAgICAgNDYuMzgsIDMzLjY5LCAxMS41MSwgMjIuNzIsIDYwLjU0LCA1OS4xNiwgNDEuMywgNTguNzMsIDAuMyxcclxuICAgICAgXSxcclxuICAgICAgdG90YWxfZGlzdGFuY2U6IDMzNC4zMyxcclxuICAgICAgY29vcmRpbmF0ZXM6IFtcclxuICAgICAgICBbMjguNDUxMzU1NiwgLTgwLjYyODMwNTldLFxyXG4gICAgICAgIFsyOS4wMjU4MTMyLCAtODAuOTI3MTI3MV0sXHJcbiAgICAgICAgWzI5LjQ4MTA4OSwgLTgxLjEzMTE0OV0sXHJcbiAgICAgICAgWzI5LjYzNTUyODYsIC04MS4yMDM5NTI4XSxcclxuICAgICAgICBbMjkuOTEyMTgsIC04MS40MDk4OV0sXHJcbiAgICAgICAgWzI5LjA2MzQ1LCAtODEuMTQ4NTddLFxyXG4gICAgICAgIFsyOC4zMDAzMSwgLTgwLjcwMTIxXSxcclxuICAgICAgICBbMjcuNzY0MjgwOCwgLTgwLjM5Nzk0MzRdLFxyXG4gICAgICAgIFsyNi45NjA1ODI5LCAtODAuMDc4MTI0NV0sXHJcbiAgICAgICAgWzI2Ljk1NjIzOSwgLTgwLjA3NzE3M10sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgMjoge1xyXG4gICAgICBvcHRpbWFsX3JvdXRlX3NlcXVlbmNlOiBbXHJcbiAgICAgICAgXCJPQ0VBTiBSRUVGIFBBUktcIixcclxuICAgICAgICBcIlRFUVVFU1RBIEJDSFNcIixcclxuICAgICAgICBcIlBBTE0gQkNIUyAxOTkyXCIsXHJcbiAgICAgICAgXCJXQUxUT04gQ09VTlRZIEJDSFNcIixcclxuICAgICAgICBcIlBBTE0gQkNIU1wiLFxyXG4gICAgICAgIFwiTUVYSUNPIEJDSFwiLFxyXG4gICAgICAgIFwiQ09SQUwgQ09WRSBQQVJLXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIGRpc3RhbmNlc19iZXR3ZWVuX2JlYWNoZXM6IFswLjgsIDEuNjgsIDUuNjUsIDcuNzYsIDExLjU2LCAwLjNdLFxyXG4gICAgICB0b3RhbF9kaXN0YW5jZTogMjcuNzUsXHJcbiAgICAgIGNvb3JkaW5hdGVzOiBbXHJcbiAgICAgICAgWzI2Ljc5MzY2MzMsIC04MC4wMzMyNTE5XSxcclxuICAgICAgICBbMjYuNzgyMTk0LCAtODAuMDM1MTE2XSxcclxuICAgICAgICBbMjYuNzU3ODcyLCAtODAuMDM2ODUyXSxcclxuICAgICAgICBbMjYuNjc3MDUxLCAtODAuMDUyNDQ2XSxcclxuICAgICAgICBbMjYuNzg5ODA5LCAtODAuMDUyMDcyXSxcclxuICAgICAgICBbMjYuOTU2MjM5LCAtODAuMDc3MTczXSxcclxuICAgICAgICBbMjYuOTYwNTgyOSwgLTgwLjA3ODEyNDVdLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIDM6IHtcclxuICAgICAgb3B0aW1hbF9yb3V0ZV9zZXF1ZW5jZTogW1xyXG4gICAgICAgIFwiRUdMSU4gQUZCXCIsXHJcbiAgICAgICAgXCJQRVJESURPIEtFWVwiLFxyXG4gICAgICAgIFwiR1VMRiBJU0wgTlNcIixcclxuICAgICAgICBcIkNPVU5UWSBCQ0hTXCIsXHJcbiAgICAgICAgXCJHUkFZVE9OIEJDSFwiLFxyXG4gICAgICAgIFwiUEFOQU1BIENJVFkgQkNIXCIsXHJcbiAgICAgICAgXCJTVCBBTkRSRVdTIFNSQVwiLFxyXG4gICAgICAgIFwiVFlOREFMTCBBRkJcIixcclxuICAgICAgICBcIkNBUEUgU0FOIEJMQVNcIixcclxuICAgICAgXSxcclxuICAgICAgZGlzdGFuY2VzX2JldHdlZW5fYmVhY2hlczogW1xyXG4gICAgICAgIDUzLjQyLCAxMS4yLCA0NC4yNSwgMzQuMTcsIDI0LjE3LCAxMS4xNiwgMTIuMDcsIDMwLjA1LFxyXG4gICAgICBdLFxyXG4gICAgICB0b3RhbF9kaXN0YW5jZTogMjIwLjQ4LFxyXG4gICAgICBjb29yZGluYXRlczogW1xyXG4gICAgICAgIFszMC40NjEzODIsIC04Ni41NDY4MzQ0XSxcclxuICAgICAgICBbMzAuMzE4MDQ4NywgLTg3LjQyNTkyNzVdLFxyXG4gICAgICAgIFszMC40MTU3MDYsIC04Ny4yNzYwNTRdLFxyXG4gICAgICAgIFszMC42NjUwMywgLTg2LjU5MjE4XSxcclxuICAgICAgICBbMzAuMzMyMDIxNSwgLTg2LjE2NzY2NTNdLFxyXG4gICAgICAgIFszMC4xNzY1OTE0LCAtODUuODA1Mzg2XSxcclxuICAgICAgICBbMzAuMjM3NjUsIC04NS42MzI2Ml0sXHJcbiAgICAgICAgWzMwLjA2OTExNzIsIC04NS41NzcyNzU1XSxcclxuICAgICAgICBbMjkuNjc2ODIwNywgLTg1LjM1ODE3MzldLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIDQ6IHtcclxuICAgICAgb3B0aW1hbF9yb3V0ZV9zZXF1ZW5jZTogW1xyXG4gICAgICAgIFwiRE9HIElTTFwiLFxyXG4gICAgICAgIFwiU1QgR0VPIElTTCBTUFwiLFxyXG4gICAgICAgIFwiU1QgR0VPIElTTFwiLFxyXG4gICAgICAgIFwiU1QgVklOQ0VOVCBOV1JcIixcclxuICAgICAgICBcIkhBTk5BIFBBUktcIixcclxuICAgICAgICBcIlBPTlRFIFZFRFJBIE5cIixcclxuICAgICAgICBcIlBPTlRFIFZFRFJBIFNcIixcclxuICAgICAgICBcIlNUIEFVRyBCQ0hTXCIsXHJcbiAgICAgICAgXCJXQVNISU5HVE9OIE9BS1NcIixcclxuICAgICAgICBcIkNPVU5UWSBCQ0hTXCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIGRpc3RhbmNlc19iZXR3ZWVuX2JlYWNoZXM6IFtcclxuICAgICAgICAwLjA1LCAxLjYsIDEwLjI2LCAxNi4yMywgOS4xLCAxNS40MiwgOS4xOSwgMjIuNzIsIDExLjUxLFxyXG4gICAgICBdLFxyXG4gICAgICB0b3RhbF9kaXN0YW5jZTogOTYuMDcsXHJcbiAgICAgIGNvb3JkaW5hdGVzOiBbXHJcbiAgICAgICAgWzMwLjY3ODA3OSwgLTgxLjQ1NjAxOV0sXHJcbiAgICAgICAgWzMwLjY3Nzk5OSwgLTgxLjQ1NTIwOV0sXHJcbiAgICAgICAgWzMwLjY4NTU5NywgLTgxLjQyOTc1NF0sXHJcbiAgICAgICAgWzMwLjU3MzAxOSwgLTgxLjU0MjU2OV0sXHJcbiAgICAgICAgWzMwLjM3MDk1NTMsIC04MS40MDI4NDI4XSxcclxuICAgICAgICBbMzAuMjM5Njg2NSwgLTgxLjM4NTYzODRdLFxyXG4gICAgICAgIFszMC4wMjI0NjcxLCAtODEuMzIzNjg2Nl0sXHJcbiAgICAgICAgWzI5LjkxMjE4LCAtODEuNDA5ODldLFxyXG4gICAgICAgIFsyOS42MzU1Mjg2LCAtODEuMjAzOTUyOF0sXHJcbiAgICAgICAgWzI5LjQ4MTA4OSwgLTgxLjEzMTE0OV0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbl07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlSXRlbSB7XHJcbiAgY29uc3RydWN0b3IodGVtcGxhdGVJZCkge1xyXG4gICAgdGhpcy5faWQgPSB0ZW1wbGF0ZUlkO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVSb3V0ZUl0ZW0ocm91dGVOYW1lLCByb3V0ZUNvdW50ZXIpIHtcclxuICAgIHRoaXMuX2xpc3RFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5faWQpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91dGVzX19saXN0LWl0ZW1cIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2xpc3RUaXRsZSA9IHRoaXMuX2xpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91dGVzX190aXRsZVwiKTtcclxuICAgIHRoaXMuX2xpc3RTdWJ0aXRsZSA9IHRoaXMuX2xpc3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm91dGVzX19zdWJ0aXRsZVwiKTtcclxuICAgIHRoaXMuX2xpc3RUaXRsZS50ZXh0Q29udGVudCA9IHJvdXRlQ291bnRlcjtcclxuICAgIHRoaXMuX2xpc3RTdWJ0aXRsZS50ZXh0Q29udGVudCA9IHJvdXRlTmFtZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbGlzdEVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCBoYW5uYVBhcmsgZnJvbSBcIi4uL3JvdXRlcy9oYW5uYS1wYXJrLmpzb25cIjtcclxuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtLmpzXCI7XHJcbmltcG9ydCBSb3V0ZUl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUm91dGVJdGVtLmpzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhyb3V0ZXMpO1xyXG5cclxuLy8gY29uc3QgYmVhY2hDb29yZHMgPSBoYW5uYVBhcmsuY29vcmRpbmF0ZXMubWFwKChiZWFjaCkgPT4ge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBsb2NhdGlvbjogeyBsYXQ6IGJlYWNoWzBdLCBsbmc6IGJlYWNoWzFdIH0sXHJcbi8vICAgfTtcclxuLy8gfSk7XHJcblxyXG5sZXQgc3RhcnRpbmdCZWFjaCA9IFtdO1xyXG5sZXQgZW5kaW5nQmVhY2ggPSBbXTtcclxubGV0IHdheXBvaW50cyA9IFtdO1xyXG5sZXQgY3VycmVudERyb3Bkb3duSW5kZXggPSAwO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJXYXlwb2ludHMoYmVhY2hDb29yZHMpIHtcclxuICB3YXlwb2ludHMgPSBiZWFjaENvb3Jkc1xyXG4gICAgLmZpbHRlcihcclxuICAgICAgKGJlYWNoKSA9PlxyXG4gICAgICAgIGJlYWNoLmxvY2F0aW9uICE9PSBzdGFydGluZ0JlYWNoICYmIGJlYWNoLmxvY2F0aW9uICE9PSBlbmRpbmdCZWFjaFxyXG4gICAgKVxyXG4gICAgLm1hcCgoYmVhY2gpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsb2NhdGlvbjogYmVhY2gubG9jYXRpb24sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4vLyByZWdpc3RlcldheXBvaW50cygpO1xyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVSb3V0ZSgpIHtcclxuICBjb25zdCBzdGFydENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtZHJvcGRvd25cIik7XHJcbiAgZ2V0Q3VycmVudFJvdXRlKHN0YXJ0Q29udGFpbmVyKTtcclxuXHJcbiAgc3RhcnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICBnZXRDdXJyZW50Um91dGUoc3RhcnRDb250YWluZXIpO1xyXG4gICAgcG9wdWxhdGVSb3V0ZXMoKTtcclxuICB9KTtcclxufVxyXG5wb3B1bGF0ZVJvdXRlKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50Um91dGUoc3RhcnRDb250YWluZXIpIHtcclxuICBjdXJyZW50RHJvcGRvd25JbmRleCA9IHN0YXJ0Q29udGFpbmVyLnNlbGVjdGVkSW5kZXg7XHJcbiAgY29uc3QgYmVhY2hDb29yZHMgPSByb3V0ZXNbMF1bY3VycmVudERyb3Bkb3duSW5kZXhdLmNvb3JkaW5hdGVzLm1hcChcclxuICAgIChiZWFjaCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvY2F0aW9uOiB7IGxhdDogYmVhY2hbMF0sIGxuZzogYmVhY2hbMV0gfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICApO1xyXG4gIHN0YXJ0aW5nQmVhY2ggPSBiZWFjaENvb3Jkc1swXS5sb2NhdGlvbjtcclxuICBlbmRpbmdCZWFjaCA9IGJlYWNoQ29vcmRzW2JlYWNoQ29vcmRzLmxlbmd0aCAtIDFdLmxvY2F0aW9uO1xyXG4gIHJlZ2lzdGVyV2F5cG9pbnRzKGJlYWNoQ29vcmRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVSb3V0ZXMoKSB7XHJcbiAgY29uc3Qgcm91dGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3V0ZXNfX2xpc3RcIik7XHJcbiAgd2hpbGUgKHJvdXRlTGlzdC5xdWVyeVNlbGVjdG9yKFwiLnJvdXRlc19fbGlzdC1pdGVtXCIpKSB7XHJcbiAgICByb3V0ZUxpc3QucmVtb3ZlQ2hpbGQocm91dGVMaXN0LnF1ZXJ5U2VsZWN0b3IoXCIucm91dGVzX19saXN0LWl0ZW1cIikpO1xyXG4gIH1cclxuICBjb25zdCByb3V0ZUNyZWF0b3IgPSBuZXcgUm91dGVJdGVtKFwiI3JvdXRlc1wiKTtcclxuICBsZXQgcm91dGVDb3VudGVyID0gMHgwMDQxOyAvL3N0YXJ0IGxldHRlcmluZyBhdCBBXHJcbiAgcm91dGVzWzBdW2N1cnJlbnREcm9wZG93bkluZGV4XS5vcHRpbWFsX3JvdXRlX3NlcXVlbmNlLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcbiAgICBjb25zdCB1bmlDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUNvdW50ZXIpO1xyXG4gICAgcm91dGVMaXN0LmFwcGVuZChyb3V0ZUNyZWF0b3IuZ2VuZXJhdGVSb3V0ZUl0ZW0ocm91dGUsIHVuaUNoYXIpKTtcclxuICAgIHJvdXRlQ291bnRlcisrO1xyXG4gIH0pO1xyXG59XHJcbnBvcHVsYXRlUm91dGVzKCk7XHJcblxyXG4vLyBnb29nbGUgbWFwcyBhcGlcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xyXG4gIGNvbnN0IGRpcmVjdGlvbnNSZW5kZXJlciA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoKTtcclxuXHJcbiAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21hcFwiKSwge1xyXG4gICAgem9vbTogNixcclxuICAgIGNlbnRlcjogeyBsYXQ6IDI4LjE4LCBsbmc6IC04MS42IH0sXHJcbiAgfSk7XHJcblxyXG4gIGRpcmVjdGlvbnNSZW5kZXJlci5zZXRNYXAobWFwKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpO1xyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1kcm9wZG93blwiKVxyXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb25DaGFuZ2VIYW5kbGVyKTtcclxuXHJcbiAgY2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlKGRpcmVjdGlvbnNTZXJ2aWNlLCBkaXJlY3Rpb25zUmVuZGVyZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc1NlcnZpY2UsIGRpcmVjdGlvbnNSZW5kZXJlcikge1xyXG4gIGRpcmVjdGlvbnNTZXJ2aWNlXHJcbiAgICAucm91dGUoe1xyXG4gICAgICBvcmlnaW46IHN0YXJ0aW5nQmVhY2gsXHJcbiAgICAgIGRlc3RpbmF0aW9uOiBlbmRpbmdCZWFjaCxcclxuICAgICAgd2F5cG9pbnRzOiB3YXlwb2ludHMsXHJcbiAgICAgIHRyYXZlbE1vZGU6IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuRFJJVklORyxcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZSkgPT4gd2luZG93LmFsZXJ0KFwiRGlyZWN0aW9ucyByZXF1ZXN0IGZhaWxlZCBkdWUgdG8gXCIgKyBzdGF0dXMpKTtcclxufVxyXG5cclxud2luZG93LmluaXRNYXAgPSBpbml0TWFwO1xyXG4iXSwibmFtZXMiOlsicm91dGVzIiwibmFtZSIsIm9wdGltYWxfcm91dGVfc2VxdWVuY2UiLCJkaXN0YW5jZXNfYmV0d2Vlbl9iZWFjaGVzIiwidG90YWxfZGlzdGFuY2UiLCJjb29yZGluYXRlcyIsIlJvdXRlSXRlbSIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGVJZCIsInRoaXMiLCJfaWQiLCJnZW5lcmF0ZVJvdXRlSXRlbSIsInJvdXRlTmFtZSIsInJvdXRlQ291bnRlciIsIl9saXN0RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfbGlzdFRpdGxlIiwiX2xpc3RTdWJ0aXRsZSIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsInN0YXJ0aW5nQmVhY2giLCJlbmRpbmdCZWFjaCIsIndheXBvaW50cyIsImN1cnJlbnREcm9wZG93bkluZGV4IiwiZ2V0Q3VycmVudFJvdXRlIiwic3RhcnRDb250YWluZXIiLCJzZWxlY3RlZEluZGV4IiwiYmVhY2hDb29yZHMiLCJtYXAiLCJiZWFjaCIsImxvY2F0aW9uIiwibGF0IiwibG5nIiwibGVuZ3RoIiwiZmlsdGVyIiwicmVnaXN0ZXJXYXlwb2ludHMiLCJwb3B1bGF0ZVJvdXRlcyIsInJvdXRlTGlzdCIsInJlbW92ZUNoaWxkIiwicm91dGVDcmVhdG9yIiwiZm9yRWFjaCIsInJvdXRlIiwidW5pQ2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGVuZCIsImNhbGN1bGF0ZUFuZERpc3BsYXlSb3V0ZSIsImRpcmVjdGlvbnNTZXJ2aWNlIiwiZGlyZWN0aW9uc1JlbmRlcmVyIiwib3JpZ2luIiwiZGVzdGluYXRpb24iLCJ0cmF2ZWxNb2RlIiwiZ29vZ2xlIiwibWFwcyIsIlRyYXZlbE1vZGUiLCJEUklWSU5HIiwidGhlbiIsInJlc3BvbnNlIiwic2V0RGlyZWN0aW9ucyIsImNhdGNoIiwiZSIsIndpbmRvdyIsImFsZXJ0Iiwic3RhdHVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvcHVsYXRlUm91dGUiLCJpbml0TWFwIiwiRGlyZWN0aW9uc1NlcnZpY2UiLCJEaXJlY3Rpb25zUmVuZGVyZXIiLCJNYXAiLCJ6b29tIiwiY2VudGVyIiwic2V0TWFwIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1292:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(491);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1319)],module)}.call(this,__webpack_require__(1293)(module))},1319:function(module,exports,__webpack_require__){var map={"./stories/0-Welcome.stories.js":1320,"./stories/1-Canvas.stories.js":1331,"./stories/2-Program.stories.js":1333,"./stories/3-Example.stories.js":1342};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1319},1320:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(492),addSourceDecorator=(__webpack_require__(93).withSource,__webpack_require__(93).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <div>\n  <h1>react-glc</h1>\n  <h2>Work in Progress</h2>\n</div>;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",locationsMap:{"welcome--to-storybook":{startLoc:{col:27,line:9},endLoc:{col:6,line:12},startBody:{col:27,line:9},endBody:{col:6,line:12}}}}},title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_1__.Welcome};var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"react-glc"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"Work in Progress")),ToStorybook=addSourceDecorator((function(){return _ref}),{__STORY__:"import React from 'react';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default {\n  title: 'Welcome',\n  component: Welcome,\n};\n\nexport const ToStorybook = () => <div>\n  <h1>react-glc</h1>\n  <h2>Work in Progress</h2>\n</div>;\n\nToStorybook.story = {\n  name: 'to Storybook',\n};\n",__ADDS_MAP__:{"welcome--to-storybook":{startLoc:{col:27,line:9},endLoc:{col:6,line:12},startBody:{col:27,line:9},endBody:{col:6,line:12}}},__MAIN_FILE_LOCATION__:"/0-Welcome.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\dev\\react\\react-animation-frame-component\\src\\stories",__IDS_TO_FRAMEWORKS__:{}});ToStorybook.story={name:"to Storybook"}},1331:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Canvas",(function(){return _Canvas})),__webpack_require__.d(__webpack_exports__,"Sizing",(function(){return Sizing})),__webpack_require__.d(__webpack_exports__,"ClearColor",(function(){return ClearColor})),__webpack_require__.d(__webpack_exports__,"Animated",(function(){return Animated}));var C_dev_react_react_animation_frame_component_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(49),addSourceDecorator=(__webpack_require__(93).withSource,__webpack_require__(93).addSource),__SOURCE_PREFIX__="C:\\dev\\react\\react-animation-frame-component\\src\\stories",__STORY__="import React, { useState, useCallback } from 'react';\r\nimport { Canvas } from '../components';\r\n\r\nexport default {\r\n    title: 'Canvas',\r\n    component: Canvas,\r\n    parameters: {\r\n        componentSubtitle: 'Handy status label',\r\n    },\r\n   \r\n};\r\n\r\nexport const _Canvas = () => <Canvas />\r\n\r\nexport const Sizing = () => <Canvas width={400} height={100} />\r\n\r\nexport const ClearColor = () => <Canvas clearColor={[0,1,1,1]} />\r\n\r\nexport const Animated = () => {\r\n    const [red, setRed] = useState(0);\r\n    \r\n    const onFrameStep = useCallback( ({time}) => {\r\n        setRed(Math.abs(Math.sin(time)));\r\n    }, [] );\r\n\r\n    return <Canvas clearColor={[red, 0, 0, 1]} animated onFrameStep={onFrameStep} />\r\n}\r\n",__ADDS_MAP__={"canvas--canvas":{startLoc:{col:23,line:13},endLoc:{col:39,line:13},startBody:{col:23,line:13},endBody:{col:39,line:13}},"canvas--sizing":{startLoc:{col:22,line:15},endLoc:{col:63,line:15},startBody:{col:22,line:15},endBody:{col:63,line:15}},"canvas--clear-color":{startLoc:{col:26,line:17},endLoc:{col:65,line:17},startBody:{col:26,line:17},endBody:{col:65,line:17}},"canvas--animated":{startLoc:{col:24,line:19},endLoc:{col:1,line:27},startBody:{col:24,line:19},endBody:{col:1,line:27}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={title:"Canvas",component:_components__WEBPACK_IMPORTED_MODULE_2__.a,parameters:{storySource:{source:"import React, { useState, useCallback } from 'react';\r\nimport { Canvas } from '../components';\r\n\r\nexport default {\r\n    title: 'Canvas',\r\n    component: Canvas,\r\n    parameters: {\r\n        componentSubtitle: 'Handy status label',\r\n    },\r\n   \r\n};\r\n\r\nexport const _Canvas = () => <Canvas />\r\n\r\nexport const Sizing = () => <Canvas width={400} height={100} />\r\n\r\nexport const ClearColor = () => <Canvas clearColor={[0,1,1,1]} />\r\n\r\nexport const Animated = () => {\r\n    const [red, setRed] = useState(0);\r\n    \r\n    const onFrameStep = useCallback( ({time}) => {\r\n        setRed(Math.abs(Math.sin(time)));\r\n    }, [] );\r\n\r\n    return <Canvas clearColor={[red, 0, 0, 1]} animated onFrameStep={onFrameStep} />\r\n}\r\n",locationsMap:{"canvas--canvas":{startLoc:{col:23,line:13},endLoc:{col:39,line:13},startBody:{col:23,line:13},endBody:{col:39,line:13}},"canvas--sizing":{startLoc:{col:22,line:15},endLoc:{col:63,line:15},startBody:{col:22,line:15},endBody:{col:63,line:15}},"canvas--clear-color":{startLoc:{col:26,line:17},endLoc:{col:65,line:17},startBody:{col:26,line:17},endBody:{col:65,line:17}},"canvas--animated":{startLoc:{col:24,line:19},endLoc:{col:1,line:27},startBody:{col:24,line:19},endBody:{col:1,line:27}}}},componentSubtitle:"Handy status label"}};var _ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.a,null),_Canvas=addSourceDecorator((function(){return _ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Canvas.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),_ref2=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.a,{width:400,height:100}),Sizing=addSourceDecorator((function(){return _ref2}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Canvas.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),ClearColor=addSourceDecorator((function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.a,{clearColor:[0,1,1,1]})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Canvas.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),Animated=addSourceDecorator((function(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=Object(C_dev_react_react_animation_frame_component_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),red=_useState2[0],setRed=_useState2[1],onFrameStep=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(_ref3){var time=_ref3.time;setRed(Math.abs(Math.sin(time)))}),[]);return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.a,{clearColor:[red,0,0,1],animated:!0,onFrameStep:onFrameStep})}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/1-Canvas.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1333:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"_Program",(function(){return _Program})),__webpack_require__.d(__webpack_exports__,"ProgramWithShaders",(function(){return ProgramWithShaders}));__webpack_require__(13),__webpack_require__(446),__webpack_require__(8),__webpack_require__(451),__webpack_require__(454),__webpack_require__(455),__webpack_require__(456),__webpack_require__(457),__webpack_require__(458),__webpack_require__(459),__webpack_require__(460),__webpack_require__(461),__webpack_require__(462),__webpack_require__(463),__webpack_require__(464),__webpack_require__(465),__webpack_require__(466),__webpack_require__(467),__webpack_require__(468),__webpack_require__(469),__webpack_require__(470),__webpack_require__(471),__webpack_require__(472),__webpack_require__(473),__webpack_require__(474),__webpack_require__(475),__webpack_require__(476),__webpack_require__(477);var react__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_28___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_28__),_components__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__(49),addSourceDecorator=(__webpack_require__(95),__webpack_require__(93).withSource,__webpack_require__(93).addSource),__SOURCE_PREFIX__="C:\\dev\\react\\react-animation-frame-component\\src\\stories",__STORY__="import React, { useState, useCallback } from 'react';\r\nimport { Canvas, Program, Mesh, Uniform } from '../components';\r\nimport { UNIFORM } from '../constants';\r\n\r\nexport default {\r\n    title: 'Program',\r\n    component: Program,\r\n    parameters: {\r\n        componentSubtitle: 'Handy status label',\r\n    },\r\n\r\n};\r\n\r\nconst vertexShader = `\r\n  void main() {\r\n    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\r\n    gl_PointSize = 100.0;\r\n  }`;\r\n\r\nconst fragmentShader = `\r\n  void main() {\r\n    gl_FragColor = vec4(gl_FragCoord.x/200., gl_FragCoord.y/200., 0.0, 1.0);\r\n  }`;\r\n\r\nexport const _Program = () => <Canvas><Program /></Canvas>;\r\n\r\nexport const ProgramWithShaders = () => {\r\n    const attributesData = { aPosition: new Float32Array([0, 0, 0]) };\r\n    const indices = new Uint16Array([0]);\r\n\r\n    return <Canvas>\r\n        <Program fragment={fragmentShader} vertex={vertexShader}>\r\n            <Mesh attributesData={attributesData} indices={indices} drawMode=\"POINTS\" />\r\n        </Program>\r\n    </Canvas>\r\n}",__ADDS_MAP__={"program--program":{startLoc:{col:24,line:25},endLoc:{col:58,line:25},startBody:{col:24,line:25},endBody:{col:58,line:25}},"program--program-with-shaders":{startLoc:{col:34,line:27},endLoc:{col:1,line:36},startBody:{col:34,line:27},endBody:{col:1,line:36}}},__MODULE_DEPENDENCIES__=[],__LOCAL_DEPENDENCIES__={},__IDS_TO_FRAMEWORKS__={};__webpack_exports__.default={title:"Program",component:_components__WEBPACK_IMPORTED_MODULE_29__.d,parameters:{storySource:{source:"import React, { useState, useCallback } from 'react';\r\nimport { Canvas, Program, Mesh, Uniform } from '../components';\r\nimport { UNIFORM } from '../constants';\r\n\r\nexport default {\r\n    title: 'Program',\r\n    component: Program,\r\n    parameters: {\r\n        componentSubtitle: 'Handy status label',\r\n    },\r\n\r\n};\r\n\r\nconst vertexShader = `\r\n  void main() {\r\n    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\r\n    gl_PointSize = 100.0;\r\n  }`;\r\n\r\nconst fragmentShader = `\r\n  void main() {\r\n    gl_FragColor = vec4(gl_FragCoord.x/200., gl_FragCoord.y/200., 0.0, 1.0);\r\n  }`;\r\n\r\nexport const _Program = () => <Canvas><Program /></Canvas>;\r\n\r\nexport const ProgramWithShaders = () => {\r\n    const attributesData = { aPosition: new Float32Array([0, 0, 0]) };\r\n    const indices = new Uint16Array([0]);\r\n\r\n    return <Canvas>\r\n        <Program fragment={fragmentShader} vertex={vertexShader}>\r\n            <Mesh attributesData={attributesData} indices={indices} drawMode=\"POINTS\" />\r\n        </Program>\r\n    </Canvas>\r\n}",locationsMap:{"program--program":{startLoc:{col:24,line:25},endLoc:{col:58,line:25},startBody:{col:24,line:25},endBody:{col:58,line:25}},"program--program-with-shaders":{startLoc:{col:34,line:27},endLoc:{col:1,line:36},startBody:{col:34,line:27},endBody:{col:1,line:36}}}},componentSubtitle:"Handy status label"}};var _ref=react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_29__.a,null,react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_29__.d,null)),_Program=addSourceDecorator((function(){return _ref}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-Program.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__}),ProgramWithShaders=addSourceDecorator((function(){var attributesData={aPosition:new Float32Array([0,0,0])},indices=new Uint16Array([0]);return react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_29__.a,null,react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_29__.d,{fragment:"\n  void main() {\n    gl_FragColor = vec4(gl_FragCoord.x/200., gl_FragCoord.y/200., 0.0, 1.0);\n  }",vertex:"\n  void main() {\n    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n    gl_PointSize = 100.0;\n  }"},react__WEBPACK_IMPORTED_MODULE_28___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_29__.c,{attributesData:attributesData,indices:indices,drawMode:"POINTS"})))}),{__STORY__:__STORY__,__ADDS_MAP__:__ADDS_MAP__,__MAIN_FILE_LOCATION__:"/2-Program.stories.js",__MODULE_DEPENDENCIES__:__MODULE_DEPENDENCIES__,__LOCAL_DEPENDENCIES__:__LOCAL_DEPENDENCIES__,__SOURCE_PREFIX__:__SOURCE_PREFIX__,__IDS_TO_FRAMEWORKS__:__IDS_TO_FRAMEWORKS__})},1342:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"First",(function(){return First}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=(__webpack_require__(13),__webpack_require__(446),__webpack_require__(8),__webpack_require__(451),__webpack_require__(454),__webpack_require__(455),__webpack_require__(456),__webpack_require__(457),__webpack_require__(458),__webpack_require__(459),__webpack_require__(460),__webpack_require__(461),__webpack_require__(462),__webpack_require__(463),__webpack_require__(464),__webpack_require__(465),__webpack_require__(466),__webpack_require__(467),__webpack_require__(468),__webpack_require__(469),__webpack_require__(470),__webpack_require__(471),__webpack_require__(472),__webpack_require__(473),__webpack_require__(474),__webpack_require__(475),__webpack_require__(476),__webpack_require__(477),__webpack_require__(43)),components=__webpack_require__(49),contexts=__webpack_require__(29),constants=__webpack_require__(95),FramePrinter=function(){var _useContext=Object(react.useContext)(contexts.a),frame=_useContext.frame,time=_useContext.time,delta=_useContext.delta;return react_default.a.createElement("div",null,react_default.a.createElement("p",null,"Frame Count : ",frame),react_default.a.createElement("p",null,"Frame Time : ",time),react_default.a.createElement("p",null,"Delta : ",delta))};FramePrinter.displayName="FramePrinter";var projectionMatrix=new Float32Array([3.732050895690918,0,0,0,0,3.732050895690918,0,0,0,0,-1.0020020008087158,-1,0,0,-.20020020008087158,0]),res=new Float32Array([512,512]),attributesData={aPosition:new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0])},indices=new Uint16Array([0,1,2,0,2,3]),attributes=[{name:"aPosition",location:0,size:3,normalized:!1,stride:0,offset:0}],Plane=function(_ref){var _ref$x=_ref.x,x=void 0===_ref$x?0:_ref$x,_ref$y=_ref.y,y=void 0===_ref$y?0:_ref$y,_ref$z=_ref.z,z=void 0===_ref$z?0:_ref$z,_ref$rotateY=_ref.rotateY,rotateY=void 0===_ref$rotateY?0:_ref$rotateY,sinT=Math.sin(rotateY),cosT=Math.cos(rotateY),modelMatrix=new Float32Array([1,0,0,0,0,cosT,-sinT,0,0,sinT,cosT,0,x,y,z,1]);return react_default.a.createElement(components.c,{attributesData:attributesData,indices:indices,drawMode:"TRIANGLES"},react_default.a.createElement(components.e,{name:"uModelMatrix",type:constants.a.MATRIX4,value:modelMatrix}))};Plane.displayName="Plane";var RotatingPlane=function(_ref2){var _ref2$x=_ref2.x,x=void 0===_ref2$x?0:_ref2$x,_ref2$y=_ref2.y,y=void 0===_ref2$y?0:_ref2$y,_ref2$z=_ref2.z,z=void 0===_ref2$z?0:_ref2$z,_ref2$speed=_ref2.speed,speed=void 0===_ref2$speed?1:_ref2$speed,theta=Object(react.useContext)(contexts.a).time*speed%Math.PI;return react_default.a.createElement(Plane,{x:x,y:y,z:z,rotateY:theta})};RotatingPlane.displayName="RotatingPlane";var _ref4=react_default.a.createElement(components.b,null),ExampleProgram=function(_ref3){var children=_ref3.children,camX=_ref3.camX,camY=_ref3.camY,camZ=_ref3.camZ,time=Object(react.useContext)(contexts.a).time,viewMatrix=new Float32Array([-1,0,0,0,0,1,0,0,0,0,-1,0,camX,camY,camZ,1]);return react_default.a.createElement(components.d,{attributes:attributes,fragment:"precision mediump float;\n  uniform float uTime;\n  uniform vec2 uResolution;\n  void main() {\n    gl_FragColor = vec4(gl_FragCoord.x/uResolution.x ,gl_FragCoord.y/uResolution.y,sin(uTime),1.0);\n  }",vertex:"precision mediump float;\n  struct Light\n  {\n          int Type;\n          vec4 Position;\n  };\n  attribute vec3 aPosition;\n  uniform mat4 uViewMatrix;\n  uniform mat4 uProjectionMatrix;\n  uniform mat4 uModelMatrix;\n  uniform vec4 uA[5];\n  uniform Light light;\n  void main() {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0) + (uA[0] * 0. * uA[1] * 0. * light.Position);\n    gl_PointSize = 10.0;\n  }"},react_default.a.createElement(components.e,{name:"uTime",type:constants.a.FLOAT1,value:time}),react_default.a.createElement(components.e,{name:"uResolution",type:constants.a.FLOAT2,value:res}),react_default.a.createElement(components.e,{name:"uViewMatrix",type:constants.a.MATRIX4,value:viewMatrix}),react_default.a.createElement(components.e,{name:"uProjectionMatrix",type:constants.a.MATRIX4,value:projectionMatrix}),_ref4,children)};ExampleProgram.displayName="ExampleProgram";var _ref5=react_default.a.createElement(Plane,{x:1.25,y:1.75,z:6}),_ref6=react_default.a.createElement(RotatingPlane,{x:-1.25,y:1.5,z:8,speed:2}),_ref7=react_default.a.createElement(RotatingPlane,{x:1.25,y:-1.5,z:8,speed:.5}),_ref8=react_default.a.createElement(RotatingPlane,{x:0,y:0,z:50,speed:4}),_ref9=react_default.a.createElement(RotatingPlane,{x:5,y:0,z:50,speed:5}),_ref10=react_default.a.createElement(RotatingPlane,{x:-5,y:0,z:50,speed:5}),_ref11=react_default.a.createElement(Plane,{x:-1.25,y:-1.75,z:6}),_ref12=react_default.a.createElement(FramePrinter,null),_ref13=react_default.a.createElement("br",null),_ref14=react_default.a.createElement("br",null),_ref15=react_default.a.createElement("br",null),ExampleComponent=function(){var _useState=Object(react.useState)(!0),_useState2=Object(slicedToArray.a)(_useState,2),animated=_useState2[0],setAnimated=_useState2[1],_useState3=Object(react.useState)(0),_useState4=Object(slicedToArray.a)(_useState3,2),camX=_useState4[0],setCamX=_useState4[1],_useState5=Object(react.useState)(0),_useState6=Object(slicedToArray.a)(_useState5,2),camY=_useState6[0],setCamY=_useState6[1],_useState7=Object(react.useState)(-5),_useState8=Object(slicedToArray.a)(_useState7,2),camZ=_useState8[0],setCamZ=_useState8[1];return react_default.a.createElement("div",null,react_default.a.createElement(components.a,{width:512,height:512,animated:animated},react_default.a.createElement(ExampleProgram,{camX:camX,camY:camY,camZ:camZ},_ref5,_ref6,_ref7,_ref8,_ref9,_ref10,_ref11),_ref12),react_default.a.createElement("input",{type:"range",min:-3,max:3,step:.05,value:camX,onChange:function onChange(event){return setCamX(+event.target.value)}})," ",_ref13,react_default.a.createElement("input",{type:"range",min:-2,max:2,step:.05,value:camY,onChange:function onChange(event){return setCamY(+event.target.value)}})," ",_ref14,react_default.a.createElement("input",{type:"range",min:-8,max:20,step:.05,value:camZ,onChange:function onChange(event){return setCamZ(+event.target.value)}})," ",_ref15,react_default.a.createElement("button",{onClick:function onClick(){return setAnimated(!animated)}},animated?"Stop":"Play"))};ExampleComponent.displayName="ExampleComponent",Plane.__docgenInfo={description:"",methods:[],displayName:"Plane",props:{x:{defaultValue:{value:"0",computed:!1},required:!1},y:{defaultValue:{value:"0",computed:!1},required:!1},z:{defaultValue:{value:"0",computed:!1},required:!1},rotateY:{defaultValue:{value:"0",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\example.js"]={name:"Plane",docgenInfo:Plane.__docgenInfo,path:"src\\example.js"}),RotatingPlane.__docgenInfo={description:"",methods:[],displayName:"RotatingPlane",props:{x:{defaultValue:{value:"0",computed:!1},required:!1},y:{defaultValue:{value:"0",computed:!1},required:!1},z:{defaultValue:{value:"0",computed:!1},required:!1},speed:{defaultValue:{value:"1.",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\example.js"]={name:"RotatingPlane",docgenInfo:RotatingPlane.__docgenInfo,path:"src\\example.js"}),ExampleProgram.__docgenInfo={description:"",methods:[],displayName:"ExampleProgram"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\example.js"]={name:"ExampleProgram",docgenInfo:ExampleProgram.__docgenInfo,path:"src\\example.js"}),ExampleComponent.__docgenInfo={description:"",methods:[],displayName:"ExampleComponent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\example.js"]={name:"ExampleComponent",docgenInfo:ExampleComponent.__docgenInfo,path:"src\\example.js"});__webpack_require__(93).withSource;var addSourceDecorator=__webpack_require__(93).addSource,_3_Example_stories_ref=(__webpack_exports__.default={parameters:{storySource:{source:"import React from 'react';\nimport { ExampleComponent } from '../example';\n\nexport default {\n  title: 'Example',\n  component: ExampleComponent,\n};\n\n\nexport const First = () => <ExampleComponent></ExampleComponent>;\n",locationsMap:{"example--first":{startLoc:{col:21,line:10},endLoc:{col:64,line:10},startBody:{col:21,line:10},endBody:{col:64,line:10}}}}},title:"Example",component:ExampleComponent},react_default.a.createElement(ExampleComponent,null)),First=addSourceDecorator((function(){return _3_Example_stories_ref}),{__STORY__:"import React from 'react';\nimport { ExampleComponent } from '../example';\n\nexport default {\n  title: 'Example',\n  component: ExampleComponent,\n};\n\n\nexport const First = () => <ExampleComponent></ExampleComponent>;\n",__ADDS_MAP__:{"example--first":{startLoc:{col:21,line:10},endLoc:{col:64,line:10},startBody:{col:21,line:10},endBody:{col:64,line:10}}},__MAIN_FILE_LOCATION__:"/3-Example.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"C:\\dev\\react\\react-animation-frame-component\\src\\stories",__IDS_TO_FRAMEWORKS__:{}})},29:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AnimationFrameContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return CanvasContext})),__webpack_require__.d(__webpack_exports__,"c",(function(){return MeshAssetContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ProgramContext}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),AnimationFrameContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null),CanvasContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null),MeshAssetContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null),ProgramContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null)},49:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Canvas})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Clear})),__webpack_require__.d(__webpack_exports__,"c",(function(){return Mesh})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Program})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Uniform}));var slicedToArray=__webpack_require__(43),react=__webpack_require__(0),react_default=__webpack_require__.n(react),contexts=__webpack_require__(29),AnimationFrame=function(_ref){var children=_ref.children,_ref$animated=_ref.animated,animated=void 0!==_ref$animated&&_ref$animated,_ref$onFrameStep=_ref.onFrameStep,onFrameStep=void 0===_ref$onFrameStep?function(){}:_ref$onFrameStep,_useState=Object(react.useState)({frame:0,delta:0,time:0}),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],requestRef=react_default.a.useRef(),animate=Object(react.useCallback)((function(currentTime){setValue((function(_ref2){var frame=_ref2.frame,time=_ref2.time,newTime=.001*currentTime;return{frame:frame+1,time:newTime,delta:newTime-time}})),requestRef.current=requestAnimationFrame(animate)}),[]);return Object(react.useEffect)((function(){onFrameStep(value)}),[value,onFrameStep]),Object(react.useEffect)((function(){return animated?requestRef.current=requestAnimationFrame(animate):cancelAnimationFrame(requestRef.current),function(){return cancelAnimationFrame(requestRef.current)}}),[animate,animated]),react_default.a.createElement(contexts.a.Provider,{value:value},children)};AnimationFrame.displayName="AnimationFrame",AnimationFrame.__docgenInfo={description:"",methods:[],displayName:"AnimationFrame",props:{animated:{defaultValue:{value:"false",computed:!1},required:!1},onFrameStep:{defaultValue:{value:"() => {}",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\AnimationFrame.js"]={name:"AnimationFrame",docgenInfo:AnimationFrame.__docgenInfo,path:"src\\components\\AnimationFrame.js"});var toConsumableArray=__webpack_require__(159),objToHashSymbol=(__webpack_require__(18),__webpack_require__(85),__webpack_require__(26),__webpack_require__(14),__webpack_require__(28),__webpack_require__(1),__webpack_require__(12),__webpack_require__(55),__webpack_require__(72),__webpack_require__(1332),__webpack_require__(8),__webpack_require__(17),function(obj){return Symbol.for((str=JSON.stringify(obj),Array.from(str).reduce((function(s,c){return 0|Math.imul(31,s)+c.charCodeAt(0)}),0)));var str}),createMesh=function(_ref,hash){var gl=_ref.gl,attributes=_ref.attributes,attributesData=_ref.attributesData,indices=_ref.indices,indexBuffer=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer),gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indices,gl.STATIC_DRAW);var attributeBuffers={};return attributes.forEach((function(_ref2){var name=_ref2.name,data=attributesData[name];if(data){var attribBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,attribBuffer),gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW),attributeBuffers[name]=attribBuffer}})),{attributeBuffers:attributeBuffers,indexBuffer:indexBuffer,vertexCount:indices.length,hash:hash}},meshAssetReducer=function(state,action){switch(action.type){case"ADD_MESH":var _action$payload=action.payload,attributesData=_action$payload.attributesData,indices=_action$payload.indices,hash=objToHashSymbol({attributesData:attributesData,indices:indices});return state.find((function(oldMesh){return oldMesh.hash===hash}))?state:[].concat(Object(toConsumableArray.a)(state),[createMesh(action.payload,hash)]);default:return state}},Canvas=function(_ref){var children=_ref.children,_ref$width=_ref.width,width=void 0===_ref$width?128:_ref$width,_ref$height=_ref.height,height=void 0===_ref$height?128:_ref$height,_ref$contextAttribute=_ref.contextAttributes,contextAttributes=void 0===_ref$contextAttribute?{}:_ref$contextAttribute,_ref$animated=_ref.animated,animated=void 0!==_ref$animated&&_ref$animated,_ref$clearColor=_ref.clearColor,clearColor=void 0===_ref$clearColor?[0,0,0,1]:_ref$clearColor,_ref$onFrameStep=_ref.onFrameStep,onFrameStep=void 0===_ref$onFrameStep?function(){}:_ref$onFrameStep,_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),gl=_useState2[0],setGl=_useState2[1],meshes=Object(react.useReducer)(meshAssetReducer,[]),ctxRef=Object(react.useCallback)((function(node){if(null!==node){var ctx=node.getContext("webgl",contextAttributes)||node.getContext("experimental-webgl",contextAttributes);ctx.clearColor.apply(ctx,Object(toConsumableArray.a)(clearColor)),ctx.frontFace(ctx.CCW),ctx.viewport(0,0,ctx.drawingBufferWidth,ctx.drawingBufferHeight),ctx.clear(ctx.COLOR_BUFFER_BIT),setGl(ctx)}}),[]);return Object(react.useEffect)((function(){gl&&(gl.clearColor.apply(gl,Object(toConsumableArray.a)(clearColor)),gl.clear(gl.COLOR_BUFFER_BIT))}),[clearColor]),react_default.a.createElement("div",null,react_default.a.createElement("canvas",{ref:ctxRef,width:width,height:height}),react_default.a.createElement(contexts.b.Provider,{value:gl},react_default.a.createElement(contexts.c.Provider,{value:meshes},gl&&react_default.a.createElement(AnimationFrame,{animated:animated,onFrameStep:onFrameStep},children))))};Canvas.displayName="Canvas",Canvas.__docgenInfo={description:"",methods:[],displayName:"Canvas",props:{width:{defaultValue:{value:"128",computed:!1},type:{name:"number"},required:!1,description:""},height:{defaultValue:{value:"128",computed:!1},type:{name:"number"},required:!1,description:""},contextAttributes:{defaultValue:{value:"{}",computed:!1},type:{name:"shape",value:{alpha:{name:"bool",required:!1},desynchronized:{name:"bool",required:!1},antialias:{name:"bool",required:!1},depth:{name:"bool",required:!1},failIfMajorPerformanceCaveat:{name:"bool",required:!1},powerPreference:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'high-performance'",computed:!1},{value:"'low-power'",computed:!1}],required:!1},premultipliedAlpha:{name:"bool",required:!1},preserveDrawingBuffer:{name:"bool",required:!1},stencil:{name:"bool",required:!1}}},required:!1,description:""},animated:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},clearColor:{defaultValue:{value:"[0, 0, 0, 1]",computed:!1},required:!1},onFrameStep:{defaultValue:{value:"() => { }",computed:!1},type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Canvas.js"]={name:"Canvas",docgenInfo:Canvas.__docgenInfo,path:"src\\components\\Canvas.js"});var Clear_ref=react_default.a.createElement(react.Fragment,null),Clear=function(){var gl=Object(react.useContext)(contexts.b),frame=Object(react.useContext)(contexts.a).frame;return Object(react.useLayoutEffect)((function(){gl.clear(gl.COLOR_BUFFER_BIT)}),[gl,frame]),Clear_ref};Clear.displayName="Clear",Clear.__docgenInfo={description:"",methods:[],displayName:"Clear"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Clear.js"]={name:"Clear",docgenInfo:Clear.__docgenInfo,path:"src\\components\\Clear.js"});var Mesh=function(_ref){var children=_ref.children,attributesData=_ref.attributesData,indices=_ref.indices,_ref$drawMode=_ref.drawMode,drawMode=void 0===_ref$drawMode?"TRIANGLES":_ref$drawMode,gl=Object(react.useContext)(contexts.b),frame=Object(react.useContext)(contexts.a).frame,_useContext2=Object(react.useContext)(contexts.c),_useContext3=Object(slicedToArray.a)(_useContext2,2),meshes=_useContext3[0],meshDispatch=_useContext3[1],attributes=Object(react.useContext)(contexts.d).attributes,_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),mesh=_useState2[0],setMesh=_useState2[1];return Object(react.useLayoutEffect)((function(){meshDispatch({type:"ADD_MESH",payload:{gl:gl,attributes:attributes,attributesData:attributesData,indices:indices}})}),[gl,attributes,attributesData,indices,meshDispatch]),Object(react.useEffect)((function(){var hash=objToHashSymbol({attributesData:attributesData,indices:indices});setMesh(meshes.find((function(oldMesh){return oldMesh.hash===hash})))}),[meshes,attributesData,indices]),Object(react.useLayoutEffect)((function(){mesh&&(attributes.forEach((function(attribute){gl.bindBuffer(gl.ARRAY_BUFFER,mesh.attributeBuffers[attribute.name]),gl.enableVertexAttribArray(attribute.location),gl.vertexAttribPointer(attribute.location,attribute.size,attribute.type,attribute.normalized,attribute.stride,attribute.offset)})),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,mesh.indexBuffer),gl.drawElements(gl[drawMode],mesh.vertexCount,gl.UNSIGNED_SHORT,0))}),[gl,mesh,frame,attributes,drawMode]),react_default.a.createElement(react.Fragment,null,mesh&&children)};Mesh.displayName="Mesh",Mesh.__docgenInfo={description:"",methods:[],displayName:"Mesh",props:{drawMode:{defaultValue:{value:"'TRIANGLES'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Mesh.js"]={name:"Mesh",docgenInfo:Mesh.__docgenInfo,path:"src\\components\\Mesh.js"});var compileShader=function(gl,source,type){var shader=gl.createShader(type);if(gl.shaderSource(shader,source),gl.compileShader(shader),!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){var info=gl.getShaderInfoLog(shader);throw gl.deleteShader(shader),new Error("An error occurred compiling the shaders  \n\n"+info)}return shader},Program=function(_ref){var children=_ref.children,_ref$attributes=_ref.attributes,attributes=void 0===_ref$attributes?[]:_ref$attributes,_ref$vertex=_ref.vertex,vertex=void 0===_ref$vertex?"void main() {\n  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n}":_ref$vertex,_ref$fragment=_ref.fragment,fragment=void 0===_ref$fragment?"void main() {\n  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n}":_ref$fragment,gl=Object(react.useContext)(contexts.b),frame=Object(react.useContext)(contexts.a).frame,_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),program=_useState2[0],setProgram=_useState2[1];return attributes.forEach((function(item){return item.type=gl.FLOAT})),Object(react.useLayoutEffect)((function(){var vertexShader=compileShader(gl,vertex,gl.VERTEX_SHADER),fragmentShader=compileShader(gl,fragment,gl.FRAGMENT_SHADER),shaderProgram=gl.createProgram();if(gl.attachShader(shaderProgram,vertexShader),gl.attachShader(shaderProgram,fragmentShader),gl.linkProgram(shaderProgram),!gl.getProgramParameter(shaderProgram,gl.LINK_STATUS)){var info=gl.getProgramInfoLog(shaderProgram);throw new Error("Could not compile WebGL program. \n\n"+info)}setProgram(shaderProgram)}),[gl,vertex,fragment]),Object(react.useLayoutEffect)((function(){program&&gl.useProgram(program)}),[gl,program,frame]),react_default.a.createElement(contexts.d.Provider,{value:{program:program,attributes:attributes}},program&&children)};Program.displayName="Program",Program.__docgenInfo={description:"",methods:[],displayName:"Program",props:{attributes:{defaultValue:{value:"[]",computed:!1},required:!1},vertex:{defaultValue:{value:"`void main() {\n  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n}`",computed:!1},required:!1},fragment:{defaultValue:{value:"`void main() {\n  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n}`",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Program.js"]={name:"Program",docgenInfo:Program.__docgenInfo,path:"src\\components\\Program.js"});var _uniformFns,defineProperty=__webpack_require__(160),constants=__webpack_require__(95),uniformFns=(_uniformFns={},Object(defineProperty.a)(_uniformFns,constants.a.FLOAT1,(function(gl,location,value){return gl.uniform1f(location,value)})),Object(defineProperty.a)(_uniformFns,constants.a.FLOAT2,(function(gl,location,value){return gl.uniform2fv(location,value)})),Object(defineProperty.a)(_uniformFns,constants.a.FLOAT3,(function(gl,location,value){return gl.uniform3fv(location,value)})),Object(defineProperty.a)(_uniformFns,constants.a.MATRIX4,(function(gl,location,value){return gl.uniformMatrix4fv(location,!1,value)})),_uniformFns),_ref2=react_default.a.createElement(react.Fragment,null),Uniform=function(_ref){var name=_ref.name,type=_ref.type,value=_ref.value,gl=Object(react.useContext)(contexts.b),frame=Object(react.useContext)(contexts.a).frame,program=Object(react.useContext)(contexts.d).program,_useState=Object(react.useState)(null),_useState2=Object(slicedToArray.a)(_useState,2),location=_useState2[0],setLocation=_useState2[1],_useState3=Object(react.useState)((function(){return function(){return null}})),_useState4=Object(slicedToArray.a)(_useState3,2),uniformFn=_useState4[0],setUniformFn=_useState4[1];return Object(react.useEffect)((function(){var fn=uniformFns[type];fn&&setUniformFn((function(){return fn}))}),[gl,type]),Object(react.useLayoutEffect)((function(){setLocation(gl.getUniformLocation(program,name))}),[gl,program,name]),Object(react.useLayoutEffect)((function(){uniformFn(gl,location,value)}),[gl,program,location,value,frame,uniformFn]),_ref2};Uniform.displayName="Uniform",Uniform.__docgenInfo={description:"",methods:[],displayName:"Uniform"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Uniform.js"]={name:"Uniform",docgenInfo:Uniform.__docgenInfo,path:"src\\components\\Uniform.js"})},493:function(module,exports,__webpack_require__){__webpack_require__(494),__webpack_require__(637),__webpack_require__(638),__webpack_require__(1291),module.exports=__webpack_require__(1292)},556:function(module,exports){},95:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return UNIFORM}));var UNIFORM={FLOAT1:"float1",FLOAT2:"float2",FLOAT3:"float3",MATRIX4:"mat4"}}},[[493,1,2]]]);
//# sourceMappingURL=main.0979acb45ca81ef469d8.bundle.js.map
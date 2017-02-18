var nameArr = function() {
    this.arr = [
    {
        "type": "module1",
        "id": "title2body",
        "body": [
            {
                "type": "img",
                "imgarr": [
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/安指示灯.png",
                        detailtext: '此灯表示发动机停机系统是否起动。',
                        text: '1、不带智能进入和起动系统（需要用钥匙启动）的车辆：\<br\>关闭发动机，指示灯工作，系统正常运行；发动机启动后，指示灯停止闪烁，表示系统已被取消。\<br\>2、带智能进入和起动系统（不需钥匙启动）的车辆：\<br\>关闭发动机，指示灯工作，系统正常运行；\<br\>将发动机开关切换至 ACCESSORY 或 IGNITION ON 模式后，指示灯停止闪烁，表示系统已被取消。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/车门没关.png",
                        detailtext: '灯亮时，表示一扇或多扇车门（警示灯中相应位置的车门）未完全关闭。',
                        text: '检查并确认所有车门都已关闭。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/充电系统警告灯.png",
                        detailtext: '灯亮时，表示车辆充电系统（电瓶）存在故障。',
                        text: '立即将车辆停放在安全地点，然后请联系丰田经销店。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/打滑指示灯.png",
                        detailtext: '灯亮时，表示车辆车身稳定系统出现故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/大灯远光指视灯.png",
                        detailtext: '灯亮时，表示大灯（远光灯开启）。',
                        text: '两种方式打开大灯\<br\>方式一：转动控制杆端部打开车灯\<br\>方式二：抬压控制杆来打开车灯。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/档位和档位指示灯.png",
                        detailtext: '此灯表示当前的档位状态。',
                        text: '踩下制动踏板（刹车）时，通过档杆进行档位切换。切换档位时，确保车辆处于停止状态。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/低燃油油位警告灯.png",
                        detailtext: '灯亮时，表示油量低（剩余燃油量约为 7.35 L （公升）或更少）。',
                        text: '给车辆加注燃油。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/电子专向.png",
                        detailtext: '红色或黄色灯亮时，表示车辆电子转向系统出现故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/发动机冷却.png",
                        detailtext: '灯闪烁时，发动机可能过热，需要小心驾驶\<br\>灯亮时，表示发动机过热，立即停止驾驶。',
                        text: '立即将车辆停放在安全地点，然后请联系丰田经销店。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/发动机油压.png",
                        detailtext: '灯亮时，表示发动机油压过低。',
                        text: '立即将车辆停放在安全地点，然后请联系丰田经销店。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/故障指示灯.png",
                        detailtext: '灯亮时，表示车辆电控系统出现故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/后雾灯指示灯.png",
                        detailtext: '灯亮时，表示后雾灯开启。',
                        text: '利用操作杆中部旋钮进行操作。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/环保驾驶指示灯.png",
                        detailtext: '此灯表示当前是否处于环保驾驶状态。',
                        text: '在环保加速操作 （环保驾驶，轻踩油门时）期间，环保驾驶指示灯将点亮。过度踩下加速踏板时，以及车辆停止时，指示灯熄灭。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/驾驶员和前排乘客.png",
                        detailtext: '灯亮时，表示驾驶员或者前排乘客没有系好安全带。',
                        text: '请驾驶员和前排乘客系好安全带。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/前雾灯指示灯.png",
                        detailtext: '灯亮时，表示前雾灯开启。',
                        text: '利用操作杆中部旋钮进行操作。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/巡航控制警示灯.png",
                        detailtext: '此灯表示巡航系统的状态，绿色灯亮起时，表示巡航系统开启。灯灭时表示巡航系统关闭。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/巡航控制指示灯.png",
                        detailtext: '此灯表示巡航系统的状态，绿色灯亮起时，表示巡航系统开启。灯灭时表示巡航系统关闭。',
                        text: '第一步：\<br\>按下操纵杆底端的“ON-OFF”按钮可以激活巡航控制。巡航控制指示灯将点亮。再次按下该按钮可以禁用巡航控制。\<br\>第二步：\<br\>然后向下压控制杆以设定车速。SET指示灯将点亮。\<br\>第三步：\<br\>向上抬操纵杆以增加车速。\<br\>向下压操纵杆以减低车速。\<br\>第四步：\<br\>向自己身体方向拉动操纵杆，可以取消定速巡航。\<br\>向上方推动操纵杆，在车速超过40km/h的情况下，可以恢复定速巡航。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/制动系统警告灯.png",
                        detailtext: '未解除驻车制动（手刹未放）时会亮起。\<br\>如解除驻车制动（放下手刹）仍亮时，则意味：制动液（刹车液）液位低或制动系统存在故障。',
                        text: '立即将车辆停放在安全地点，然后请联系丰田经销店。继续驾驶车辆可能会有危险。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/智能进入和起.png",
                        detailtext: '踩下制动踏板（刹车），车辆可以启动时，此灯就会亮起。',
                        text: '用力踩下制动踏板（刹车）。\<br\>智能进入和起动系统指示灯 （绿色）将点亮。\<br\>如果指示灯未点亮，则发动机无法起动。'

                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/智能进入系统.png",
                        detailtext: '当此灯以黄色并开始闪烁15秒以上，表明车辆智能示智能进入和起动系统存在故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/智能启停指示灯.png",
                        detailtext: '（当手动挡车型离合器踩下或无级变速车辆档位在N档或P档时），此灯亮起，表示智能启停系统运转，发动机停机。\<br\>（当手动挡车型离合器抬起或无级变速车辆档位在D档或M档时），此灯熄灭，表示智能启停系统停止，发动机重新启动。',
                        text: '按下智能启停取消开关可禁用智能启停系统。\<br\>同时智能启停取消指示灯将点亮。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/智能起停.png",
                        detailtext: '此指示灯点亮、熄灭为正常状态。\<br\>当此灯出现黄色并开始闪烁时，表明车辆智能起停系统存在故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/转向信号指示灯.png",
                        detailtext: '灯亮时表示当前左转向等或右转向灯已打开。',
                        text: '1.向上推动控制杆至尽头，则右转向灯工作，可以右转。\<br\>2.向右变道时，向上推动控制杆并将其保持在中途位置右侧信号灯将闪烁，直至松开信号灯控制杆为止。\<br\>3.向左变道变道时，向下推动控制杆并将其保持在中途位置左侧信号灯将闪烁，直至松开信号灯控制杆为止。\<br\>4.向下推动控制杆致尽头，则左转向等工作，可以左转。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/ABS警告灯.png",
                        detailtext: '灯亮时，表示车辆ABS防抱死系统出现故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                    {
                        imgurl: "img/hand/fourth/ZX/仪表盘/SRS 警告灯.png",
                        detailtext: '灯亮时，表示车辆气囊系统出现故障。',
                        text: '请立即联系丰田经销店对车辆进行检查。'
                    },
                ]
            },
        ]
    },
];

return this.arr;
}
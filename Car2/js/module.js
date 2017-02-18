var makemodule = function() {
	var _ = this;
	this.makemenu = function(obj, mainobj) {
		var menu = document.createElement('div');
		menu.className = "menu";
		for(var i = 0;i < obj.menu.length;i ++) {
			var menuitem = document.createElement('a');
			menuitem.href = obj.menu[i].url;
			var menuitemimg = document.createElement('img');
			menuitemimg.className = 'menuitem';
			menuitemimg.src = obj.menu[i].img;
			menuitem.appendChild(menuitemimg);
			menu.appendChild(menuitem);
		}
		mainobj.appendChild(menu);
	}

	this.makeabstract = function(obj, mainobj) {
		var abstract = document.createElement('div');
		abstract.className = 'abstract';
		for(var i = 0;i < obj.body.length;i ++) {
			if(obj.body[i].type == 'title') {
				var temp = document.createElement('p');
				temp.className = 'abstracttitle';
				temp.innerHTML = obj.body[i].text;
				abstract.appendChild(temp);
			} else if(obj.body[i].type == 'img') {
				var temp = document.createElement('img');
				temp.className = 'showimg';
				temp.src = obj.body[i].imgurl;
				abstract.appendChild(temp);
			} else if(obj.body[i].type == 'imgtext') {
				var temp = document.createElement('p');
				temp.className = 'explaintext';
				temp.innerHTML = obj.body[i].text;
				abstract.appendChild(temp);
			}
		}
		mainobj.appendChild(abstract);
	}

	this.makemodule1 = function(obj, mainobj, m) {
		var arr1 = new Array();
		var arr2 = new Array();
		var template = document.createElement('div');
		template.className = 'module1';
		template.id = obj.id;
		var xuanfu = [];
		for(var i = 0;i < obj.body.length;i ++) {
			if(obj.body[i].type == 'title') {
				var temp = document.createElement('p');
				temp.className = 'mtitle';
				temp.innerHTML = '<span class="yellowrect"></span>' + obj.body[i].text;
				template.appendChild(temp);
			} else if(obj.body[i].type == 'img') {
				var temp = document.createElement('div');
				temp.className = 'm1body';
				var count = 0;
				for(var j = 0;j < obj.body[i].imgarr.length;j ++) {
					if(obj.body[i].imgarr[j].detailtext == undefined) {
						var te = document.createElement('div');
						te.className = 'm1itemtitle';
						var tem = document.createElement('img');
						tem.className = 'miitemtitleimg';
						tem.src = obj.body[i].imgarr[j].imgurl;
						te.appendChild(tem);
						temp.appendChild(te);
						continue;
					}
					var te = document.createElement('div');
					te.className = 'm1item';
					var tem = document.createElement('img');
					tem.className = 'm1itemimg';
					tem.id = 'm1itemimg' + m + j;
					tem.src = obj.body[i].imgarr[j].imgurl;
					te.appendChild(tem);
					arr1.push(tem);
					temp.appendChild(te);
					xuanfu.push(_.makemask(obj, i, j, m));
					if(count % 2 == 1) {
						for(var k = 0;k < xuanfu.length; k ++) {
							temp.appendChild(xuanfu[k]);
						}
						xuanfu = [];
					}
					count ++;
				}
				for(var k = 0;k < xuanfu.length; k ++) {
							temp.appendChild(xuanfu[k]);
						}
				template.appendChild(temp);
			}
		}
		mainobj.appendChild(template);
		_.maskbind(arr1);
	}

	this.makemodule2 = function(obj, mainobj) {
		var template = document.createElement('div');
		template.className = 'module2';
		template.id = obj.id;
		for(var i = 0;i < obj.body.length;i ++) {
			if(obj.body[i].type == 'title') {
				var temp = document.createElement('p');
				temp.className = 'mtitle';
				temp.innerHTML = '<span class="yellowrect"></span>' + obj.body[i].text;
				template.appendChild(temp);
			} else if(obj.body[i].type == 'imgtop') {
				var temp = document.createElement('div');
				temp.className = 'm2head';
				var te = document.createElement('img')
				te.className = 'm2headimg';
				te.src = obj.body[i].imgurl;
				temp.appendChild(te);
				template.appendChild(temp);
			} else if(obj.body[i].type == 'imgbody') {
				var temp = document.createElement('div');
				temp.className = 'm2body';
				var te = document.createElement('img')
				te.className = 'm2bodyarticle';
				te.src = obj.body[i].imgurl;
				temp.appendChild(te);
				template.appendChild(temp);
			}
		}
		mainobj.appendChild(template);
	}

	this.makemodule3 = function(obj, mainobj) {
		var template = document.createElement('div');
		template.className = 'module3';
		template.id = obj.id;
		for(var i = 0;i < obj.body.length;i ++) {
			if(obj.body[i].type == 'title') {
				var temp = document.createElement('p');
				temp.className = 'mtitle';
				temp.innerHTML = '<span class="yellowrect"></span>' + obj.body[i].text;
				template.appendChild(temp);
			} else if(obj.body[i].type == 'titleimg') {
				var temp = document.createElement('img');
				temp.className = 'm3detailimg';
				temp.src = obj.body[i].imgurl;
				template.appendChild(temp);
			} else if(obj.body[i].type == 'explaintext') {
				var temp = document.createElement('div');
				temp.className = 'm3imgexplaintext';
				temp.innerHTML = obj.body[i].text;
				template.appendChild(temp);
			} else if(obj.body[i].type == 'detail') {
				var temp = document.createElement('div');
				temp.className = 'm3explaindetail';
				var te = document.createElement('div');
				te.className = 'm3explaintitle';
				te.innerHTML = '详情';
				temp.appendChild(te);
				for(var j = 0;j < obj.body[i].body.length;j ++) {
					var tem = document.createElement('div');
					tem.className = 'm3detailtext';
					tem.innerHTML = obj.body[i].body[j];
					temp.appendChild(tem);
				}
				template.appendChild(temp);
			} else if(obj.body[i].type == 'excute') {
				var temp = document.createElement('div');
				temp.className = 'm3explaindetail';
				var te = document.createElement('div');
				te.className = 'm3explaintitle';
				te.innerHTML = '操作';
				temp.appendChild(te);
				for(var j = 0;j < obj.body[i].body.length;j ++) {
					if(obj.body[i].body[j].type == 'img') {
						var tem = document.createElement('img');
						tem.className = 'm3excuteimg';
						tem.src = obj.body[i].body[j].imgurl;
						temp.appendChild(tem);
					} else if(obj.body[i].body[j].type == 'text') {
						for(var k = 0;k < obj.body[i].body[j].text.length; k ++) {
							var tem = document.createElement('div');
							tem.className = 'm3detailtext';
							tem.innerHTML = obj.body[i].body[j].text[k];
							temp.appendChild(tem);
						}
					}
				}
				template.appendChild(temp);
			}
		}
		mainobj.appendChild(template);
	}

	this.makemask = function(obj, i, j, m) {
		var xuan = document.createElement('div');
		xuan.id = 'm1itemimg' + m + j + 'xuan';
		xuan.className = 'm1itemdetail';
		var part1 = document.createElement('div');
		part1.className = 'part1';
		var p1title = document.createElement('img');
		p1title.src = 'img/hand/fourth/xuanfu/详情1.png'
		p1title.className = 'm1itemdetailtitle';
		var p1text = document.createElement('p');
		p1text.className = 'm1itemdetailtext';
		p1text.innerHTML = obj.body[i].imgarr[j].detailtext;
		part1.appendChild(p1title);
		part1.appendChild(p1text);
		xuan.appendChild(part1);
		if(obj.body[i].imgarr[j].text != undefined) {
			var part2 = document.createElement('div');
			part2.className = 'part2';
			var p2title = document.createElement('img');
			p2title.src = 'img/hand/fourth/xuanfu/操作1.png';
			p2title.className = 'm1itemdetailtitle';
			var p2text = document.createElement('p');
			p2text.className = 'm1itemdetailtext';
			p2text.innerHTML = obj.body[i].imgarr[j].text;
			part2.appendChild(p2title);
			part2.appendChild(p2text);
			xuan.appendChild(part2);
		}
		xuan.addEventListener('click', function() {
			this.style.display = 'none';
		})
		return xuan;
	}

	this.maskbind = function(arr1) {
		for(var i = 0;i < arr1.length;i ++) {
			(function(index) {
				arr1[index].addEventListener('click', function() {
					var targetid = this.id + 'xuan';
					console.log(targetid);
					if(document.getElementById(targetid).style.display == 'block') {
						document.getElementById(targetid).style.display = 'none';
					} else {
						var itemarr = document.getElementsByClassName('m1itemdetail');
						for(var j = 0;j < itemarr.length;j ++) {
							itemarr[j].style.display = 'none';
						}
						document.getElementById(targetid).style.display = 'block';
					}
				})
			})(i)
		}
	}

	this.choose = function(type) {
		var typeobj = {'menu': _.makemenu, 'abstract': _.makeabstract, 'module1': _.makemodule1, 'module2': _.makemodule2, 'module3': _.makemodule3};
		return typeobj[type];
	}

	this.dojob = function(obj, mainobj, m) {
		_.choose(obj.type)(obj, mainobj, m);
	}

	return this.dojob;
}
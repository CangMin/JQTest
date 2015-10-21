    // 	$("img:odd").mouseenter(function(e){
	// 		$(this).css("opacity",0.5);
	// 	}).mouseout(function(e){
	// 		$(this).css("opacity",1.0);
	// 	});


	// 	$("label").css("color","blue").add("input[name!='rose']")
	// .filter("[for!='snowdrop']").css("font-size",".75em");

	// 	var jq1=$("img:odd");
	// 	console.log("上下文对象是："+jq1.context.tagName);

	// 	var jq2=$("img:odd",$('.drow'));
	// 	console.log("上下问对象是："+jq2.context.tagName);

	// 	var jq3=$("img:odd",document.getElementById("oblock"));
	// 	console.log("上下问对象是："+jq3.context.tagName);

	// 	console.log("-------------------------------");
	// 	var labelElems = document.getElementsByTagName("label");
	// 	console.log(labelElems);
	// 	var jq =$("img[src*=daffodil]");
	// 	console.log(jq);
	// 	$("img:even").add("img[src*=primula]").add(jq).add(labelElems).css("border","thick double red");
	// 	console.log("-------------------------------");
// 		jq.first().css("border","thick double red");
// 		jq.last().css("border","thick double green");
// 		jq.eq(2).css("border","thick double black");
// 		jq.eq(-2).css("border","thick double black");
		
// 				var jq = $("label");

// 		jq.slice(0,2).css("border","thick double black");
// 		jq.slice(4).css("border","thick double red");
	 
// 	    $("img").not("[src*=s]").css("border","thick double red");

// 		var jq=$("[for*=p]");
// 		$("label").not(jq).css("color","blue");

// 		var elem=document.getElementsByTagName("label")[1];
// 		$("label").not(elem).css("font-size","1.5em");

// 		$("img").not(function(index){
// 			return this.getAttribute("src") == "peony.png"||index==4;
// 		}).css("border","thick solid red");

// 		$("div.dcell").has("img[src*=aster]").css("border","thick solid red");
// 		var jq=$("[for*=p]");
// 		$("div.dcell").has(jq).css("border","thick solid blue");
		
// 		$("div.dcell").map(function(index,elem){
// 			return elem.getElementsByTagName("img")[0];
// 		}).css("border","thick solid red");
// 		$("div.dcell").map(function(index,elem){
// 			return $(elem).children()[1];
// 		}).css("border","thick solid blue")

// 		var isResult=$("img").is(function(index){
// 			return this.getAttribute("src")=="img/rose.png";
// 		});
// 		console.log("result:"+isResult);

// 		$("label").first().css("border","thick solid blue").end().css("font-size","1.5em");

// 		$("div.dcell").children("img").addBack().css("border","thick solid blue");

// 		var childCount=$("div.drow").children().each(function(index,elem){
// 			console.log("child:"+elem.tagName+""+elem.className);
// 		}).length;
// 		console.log("there are"+childCount+"children");

// 		var descCount=$("div.drow").find("img").each(function(index,elem){
// 			console.log("Descendant:"+elem.tagName+""+elem.src);
// 		}).length;
// 		console.log("there are"+descCount+"img descendants");

// 		var jq=$("label").filter("[for*=p]").not("[for=peony]");
// 		$("div.drow").find(jq).css("border","thick solid blue");

// 		$("div.dcell").parent().each(function(index,elem){
// 			console.log("element:"+elem.tagName+" "+elem.id);
// 		});

// 		$("div.dcell").parent("#row1").each(function(index,elem){
// 			console.log("filtered element:"+elem.tagName+" "+elem.id);
// 		});

// 		$("img[src*=peony],img[src*=rose]").parentsUntil("form",":not(.dcell)").each(function(index,elem){
// 			console.log("element:"+elem.tagName+" "+elem.className+" "+elem.id);
// 		});

// 		$("img").closest(".drow").each(function(index,elem){
// 			console.log("element:"+elem.tagName+" "+elem.className+" "+elem.id);
// 		});

// 		var contextElem=document.getElementById("row1");
// 		$("img").closest(".drow",contextElem).each(function(index,elem){
// 			console.log("element:"+elem.tagName+" "+elem.className+" "+elem.id);
// 		});

// 		$("img[src*=aster],img[src*=primula]").parent().siblings().css("border","thick solid blue");

// 			$("img[src*=aster]").parent().nextAll().css("border","thick solid blue");
// 		$("img[src*=primula]").parent().prevAll().css("border","thick solid red");

// 		var newElems=$('<div class="dcell"><img src="lily.png"/></div>');
// 		newElems.each(function(index,elem){
// 			console.log("新元素是："+elem.tagName+" "+elem.className);
// 		});

// 		newElems.children().each(function(index,elem){
// 			console.log("子元素是："+elem.tagName+" " +elem.src);
// 		});

// 		var divElem=document.creatElement("div");
// 		divElem.classList.add('dcell');

// 		var imgElem=document.createElement("img");
// 		imgElem.src="lily.png"

// 		divElem.appendChild(imgElem);

// 		var newElems=$(divElem);

// 		newElems.each(function(index,elem){
// 			console.log("新元素是："+elem.tagName+" "+elem.className);
// 		});

// 		newElems.children('img').each(function(index,elem){
// 			console.log("子元素是："+elem.tagName+" " +elem.src);
// 		});

// 		var newElems=$("<div class='dcell'></div>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:")
// 		.append("<input name='lily' value='0' required />");

// 		newElems.css("border","thick solid red");

// 		$("#row1").append(newElems);

// 				var orchidElems=$("<div class='dcell'/>")
// 		.append("<img src='img/orchid.png' />")
// 		.append("<label for='orchid'>orchid:")
// 		.append("<input name='orchid' value='0' required />");

// 		var newElems=$("<div class='dcell'></div>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:")
// 		.append("<input name='lily' value='0' required />").add(orchidElems);

// 		newElems.css("border","thick solid red");

// 		$("#row1").append(newElems);
// 		$("#row2").prepend(newElems.clone());

// 		var newElems=$("<div class='dcell' />");

// 		$('img').appendTo(newElems);

// 		$('#row1').append(newElems);

// 		var orchidElems=$("<div class='dcell'/>")
// 		.append("<img src='img/orchid.png' />")
// 		.append("<label for='orchid'>orchid:</label>")
// 		.append("<input name='orchid' value='0' required />");

// 		var lilyElems=$("<div class='dcell'/>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:</label>")
// 		.append("<input name='lily' value='0' required />");

// 		$(orchidElems).add(lilyElems).css("border","thick solid red");

// 		$("div.drow").append(function(index,html){
// 			if(this.id=="row1"){
// 				return orchidElems;
// 			}else{
// 				return lilyElems;
// 			}
// 		});

// 			var newElem=$("<div>").css("border","thick solid red");
// 		$(".dcell").wrapInner(newElem);

// 		$('.drow').wrap(function(index){
// 			if($(this).has('img[src*=rose]').length>0){
// 				return $('<div>').css("border","thick solid blue");
// 			}else{
// 				return $('<div>').css("border","thick solid red");
// 			}
// 		});

// 		var orchidElems=$("<div class='dcell'/>")
// 		.append("<img src='img/orchid.png' />")
// 		.append("<label for='orchid'>orchid:</label>")
// 		.append("<input name='orchid' value='0' required />");

// 		var lilyElems=$("<div class='dcell'/>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:</label>")
// 		.append("<input name='lily' value='0' required />");

// 		$(orchidElems).add(lilyElems).css("border","thick solid red");

// 		orchidElems.insertAfter("#row1 div.dcell");
// 		lilyElems.insertBefore("#row2 div.dcell");

// 			$('#row1 div.dcell').after(function(index,html){
// 			if(index==0){
// 				return $("<div class='dcell'/>")
// 		.append("<img src='img/orchid.png' />")
// 		.append("<label for='orchid'>orchid:</label>")
// 		.append("<input name='orchid' value='0' required />")
// 		.css("border","thick solid red");
// 			}else if(index==1){
// 				return $("<div class='dcell'/>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:</label>")
// 		.append("<input name='lily' value='0' required />")
// 		.css("border","thick solid red");
// 			}
// 		});

// 		var newElems=$("<div class='dcell'></div>")
// 		.append("<img src='img/lily.png' />")
// 		.append("<label for='lily'>Lily:")
// 		.append("<input name='lily' value='0' required />")
// 		.css("border","thick solid red");

// 		$("#row1").children().first().replaceWith(newElems);
// 		$("<img src='img/rose.png'/>").replaceAll('#row2 img').css("boreder","thick solid red");

// 		$('div.drow img').replaceWith(function(){
// 			if(this.src.indexof("rose")>-1){
// 				return $("<img src='img/carnation.png'>").css("border","thick solid red");
// 			}else if(this.src.indexof("peony")>-1){
// 				return $("<img src='img/lily.png'/>").css("border","thick solid red");
// 			}else{
// 				return $(this).clone();
// 			}
// 		});

// 		$("img[src*=daffodil],img[src*=snow]").parent().remove();

// 		$("div.dcell").remove(":has(img[src*=snow],img[src*=daffodil])");

// 		$("#row2").append($("img[src*=aster]").parent().detach());

// 		$("#row1").children().eq(1).empty().css("border","thick solid red");

// 		$("div.dcell").unwrap();

// 		var srcValue=$("img").attr('src');
// 		console.log("Attribute value:"+srcValue);
		
// 		$('img').each(function(index,elem){
// 			var srcValue=$(elem).attr('src');
// 			console.log("Attribute value:"+srcValue);
// 		});

// 		$('img').attr("src","lily.png");

// 		var attrValues={//新建一个元素属性的对象
// 			src:"img/aster.png",
// 			style:"border:thick solid red"
// 		};
// 		$("img").attr(attrValues);//将对象传递给attr方法

// 		$('img').attr("src",function(index,oldVal){
// 			if(oldVal.indexOf("rose")>-1){
// 				return "img/aster.png";
// 			}else if($(this).closest("#row2").length>0){
// 				return "img/peony.png"
// 			}
// 		});

// 		$("img").attr("style","border:thick solid red");
// 		$("img:odd").removeAttr("style");

// 		$("*[class]").each(function(index,elem){
// 			console.log("Element:"+elem.tagName+" "+$(elem).prop("className"));
// 		});

// 				$("img").addClass("redBorder");
// 		$("img:even").removeClass("redBorder").addClass("blueBorder");

// 		console.log("all elements:"+$("img").hasClass("redBorder"));
// 		$("img").each(function(index,elem){
// 			console.log("Element:"+$(elem).hasClass("redBorder")+" "+elem.src);
// 		});

// 		$('img').addClass(function(index,currentClasses){
// 			if(index%2==0){
// 				return "blueBorder"
// 			}else{
// 				return "redBorder"
// 			}
// 		});

// 		$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");

// 		$('img').removeClass(function(index,currentClasses){
// 			if($(this).closest('#row2').length>0&&currentClasses.indexOf('redBorder')>-1){
// 				return "redBorder";
// 			}else{
// 				return "";
// 			}
// 		});

// 			$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");

// 		$("<button>切换</button>").appendTo("#buttonDiv").click(doToggle);
// 		function doToggle(e){
// 			$("img").toggleClass("redBorder");
// 			e.preventDefault();
// 		};

// 		$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");

// 		$("<button>切换</button>").appendTo("#buttonDiv").click(doToggle);
// 		function doToggle(e){
// 			$("img").toggleClass("redBorder blueBorder");
// 			e.preventDefault();
// 		};

// 		$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");
// 		$('label').addClass("bigFont");

// 		$("<button>切换</button>").appendTo("#buttonDiv").click(doToggle);
// 		function doToggle(e){
// 			$("img,label").toggleClass();
// 			e.preventDefault();
// 		};
		
// 				$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");

// 		$("<button>开启切换</button>").appendTo("#buttonDiv").click(doToggleOn);
// 		$("<button>关闭切换</button>").appendTo("#buttonDiv").click(doToggleOff);
// 		function doToggleOn(e){
// 			$("img,label").toggleClass("redBorder",true);
// 			e.preventDefault();
// 		};
// 		function doToggleOff(e){
// 			$("img,label").toggleClass("redBorder",false);
// 			e.preventDefault();
// 		};

// 		$('img').filter(':odd').addClass("redBorder").end().filter(':even').addClass("blueBorder");

// 		$("<button>切换</button>").appendTo("#buttonDiv").click(doToggle);
		
// 		function doToggle(e){
// 			$("img").toggleClass(function(index,currentClasses)
// 			{
// 				if(index%2==0){
// 					return "redBorder";
// 				}else{
// 					return "";
// 				}

// 			});
// 			e.preventDefault();
// 		};

// 		var sizeVal=$('label').css("font-size");
// 		console.log("size:"+sizeVal);
// 		$('label').css("font-size","1.5em");
		
// 		var propertyNames=["font-size","color","border"];
// 		var cssValues=$("label").css(propertyNames);
// 		for(var i=0;i<propertyNames.length;i++){
// 			console.log("property:"+propertyNames[i]+"value:"+cssValues[propertyNames[i]]);
// 		}

// 		$('label').css("font-size","1.5em").css("color","blue");
		
// 		var cssVals={
// 			"font-size":"1.5em",
// 			"color":"blue"
// 		};
// 		$("label").css(cssVals);

// 		$("label:odd").css("font-size","+=5");
// 		$("label:even").css("font-size","-=5");

// 		$("label").css("border",function(index,currentValue){
// 			if($(this).closest("#row1").length>0){
// 				return "thick solid red"
// 			}else if(index%2==1){
// 				return "thick double blue";
// 			}
// 		});

// 		var pos=$("img").position();
// 		console.log("Position top:"+pos.top+"left:"+pos.left);

// 		$("#row1 img").css("border","thick solid red").height(function(index,currentValue){
// 			return (index+1)*25;
// 		});

// 		var html=$("div.dcell").html();
// 		console.log(html);

// 		$("#row2 div.dcell").html($("div.dcell").html());

// 				$("label").css("border","thick solid red")
// 		.text(function(index,currentValue){
// 			return "index"+index;
// 		});

// 		$("input").each(function(index,elem){
// 			console.log("name:"+elem.name+"value:"+$(elem).val());
// 		});

// 		$("<button>设置数值</button>").appendTo("#buttonDiv")
// 		.click(function(e){
// 			$("input").val(100);
// 			e.preventDefault();
// 		});

// 		$("input").val(function(index,currentVal){
// 			return (index+1)*100;
// 		});

// 		<script>
// 	$(document).ready(function(){
// 		//设置数据
// 		$('img').each(function(){
// 			$(this).data("product",$(this).siblings("input[name]").attr("name"));
// 		});

// 		//查找带有相关数据的元素并读取其值
// 		$("*").filter(function(){
// 			return $(this).data("product")!=null;
// 		}).each(function(){
// 			console.log("elem:"+this.tagName+" "+$(this).data("product"));
// 		});

// 		//删除所有数据
// 		$("img").removeData();
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
// 		function handleMouseEnter(e){
// 			$(this).css({
// 				"border":"thick solid red",
// 				"opacity":"0.5"
// 			});
// 		};

// 		function handleMouseOut(){
// 			$(this).css({
// 				"border":"",
// 				"opacity":""
// 			});
// 		}
// 		$('img').bind("mouseenter",handleMouseEnter)
// 		.bind("mouseout",handleMouseOut);
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
// 		function handleMouse(e){
// 			 var cssData={
// 				"border":"thick solid red",
// 				"opacity":"0.5"
// 			}
// 		if(event.type=="mouseout"){
// 			cssData.border="";
// 			cssData.opacity="";
// 		}
// 		$(this).css(cssData);
// 	}
		
// 		$('img').bind("mouseenter mouseout",handleMouse);
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
			
// 		$('img').bind({
// 			mouseenter:function(){
// 				$(this).css("border","thick solid red");
// 			},
// 			mouseout:function(){
// 				$(this).css("border","");
// 			}
// 		});
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
// 		function handleMouse(e){
// 			var cssData={
// 				"border":"thick solid "+e.data,
// 			}
// 			if(event.type=="mouseout"){
// 				cssData.border="";
// 			}
// 			$(this).css(cssData);
// 		}	
// 		$('img:odd').bind("mouseenter mouseout","red",handleMouse);
// 		$('img:even').bind("mouseenter mouseout","blue",handleMouse);
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
// 		$("button:submit").bind("click",function(e){
// 			e.preventDefault();//阻止按钮的默认行为（）
// 		});
// 	});	
// </script>
// <script>
// 	$(document).ready(function(){
// 		$("button:submit").bind("click",false);
// 	});	
// </script>
// <script>
// console.log("9.1.4");
// 	$(document).ready(function(){
// 		$("button:submit").bind("click",false);
// 	});	
// </script>
// <script>
// 	console.log("9.1.4");
// 	$(document).ready(function(){
// 		function handleMouse(e){
// 			 var cssData={
// 				"border":"thick solid red",
// 				"opacity":"0.5"
// 			}
// 		if(event.type=="mouseout"){
// 			cssData.border="";
// 			cssData.opacity="";
// 		}
// 		$(this).css(cssData);
// 	}
		
// 		$('img').bind("mouseenter mouseout",handleMouse);
// 		$("img[src*=rose]").unbind("mouseout");//选择性的撤销了mouseout事件处理函数，保留了mouseenter事件处理函数
// 	});	
// </script>
	 
	
	// console.log("9.1.4");
	// $(document).ready(function(){
	// 	var handledCount=0;

	// 	function handleMouseEnter(e){
	// 		$(this).css("border","thick solid red");
	// 	}
	// 	function handleMouseExit(e){
	// 		$(this).css("border","");
	// 		handledCount++;
	// 		if(handledCount==2){
	// 			$(this).unbind(e);
	// 		}
	// 	}
	// 	$("img").bind("mouseenter",handleMouseEnter).bind("mouseout",handleMouseExit);
	// });	
	
	// console.log("9.1.5");
	// $(document).ready(function(){

	// 	function handleMouseEnter(e){
	// 		$(this).css("border","thick solid red");
	// 	}
	// 	function handleMouseOut(e){
	// 		$(this).css("border","");
	// 	}
	// 	$("img").one("mouseenter",handleMouseEnter).bind("mouseout",handleMouseOut);
	// });

	// 	console.log("9.2");
	// $(document).ready(function(){

	// 	$(document).on({
	// 		mouseenter:function(){
	// 			$(this).css("border","thick solid red");
	// 		},
	// 		mouseout:function(){
	// 			$(this).css("border","");
	// 		}
	// 	},"img");
	// 	$("#row1").append($("<div class='dcell'/>")
	// 	.append("<img src='lily.png'/>")
	// 	.append("<label for='lily'>Lily:</label>")
	// 	.append("<input name='lily' value='0' required/>"));
	// });
	// 
	// 	$(document).ready(function(){
	// 	$('#row1').delegate("img",{
	// 		mouseenter:function(){
	// 			$(this).css("border","thick solid red");
	// 		},
	// 		mouseout:function(){
	// 			$(this).css("border","");
	// 		}
	// 	});

	// 	$("#row1").append($("<div class='dcell'/>")
	// 	.append("<img src='carnation.png'/>")
	// 	.append("<label for='carnation'>carnation:</label>")
	// 	.append("<input name='carnation' value='0' required/>"));

	// 	$("#row2").append($("<div class='dcell'/>")
	// 	.append("<img src='lily.png'/>")
	// 	.append("<label for='lily'>Lily:</label>")
	// 	.append("<input name='lily' value='0' required/>"));
	// });


	// $(document).ready(function(){
	// 	$('#row1 img').bind("mouseenter",function(){
	// 			$(this).css("border","thick solid red");
	// 		});
	// 	$('#row2 img').bind("mouseenter",function(e){
	// 			$(this).css("border","thick solid blue");
	// 			$("#row1 img").trigger(e);
	// 		});

	// });

// $(document).ready(function(){
// 		$('#row1 img').bind("mouseenter",function(){
// 				$(this).css("border","thick solid red");
// 			});
// 		$('#row2 img').bind("mouseenter",function(e){
// 				$(this).css("border","thick solid blue");
// 				$("#row1 img").triggerHandler("mouseenter");
// 			});

// 	});

// 
// $(document).ready(function(){
// 	$("<button>toggle</button>")
// 	.appendTo("#buttonDiv")
// 	.click(function(e){
// 		$("div.dcell:first-child").toggle();
// 		e.preventDefault();
// 	});

// 	});
// $(document).ready(function(){
// 	$("<button>toggle</button>")
// 	.appendTo("#buttonDiv")
// 	.click(function(e){
// 		$("div.dcell:first-child").toggle(false);
// 		e.preventDefault();
// 	});

// 	});
// $(document).ready(function(){
// 	$("<button>toggle</button>")
// 	.appendTo("#buttonDiv")
// 	.click(function(e){
// 		$("img").toggle("fast","linear");
// 		e.preventDefault();
// 	});

// 	});
// 
// $(document).ready(function(){
// 	var hiddenRow="#row2";
// 	var visibleRow="#row1";

// 	$(hiddenRow).hide();

// 	$("<button>switch</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$(visibleRow).hide("fast",function(){
// 			$(hiddenRow).show("fast",function(){
// 				var temp =hiddenRow;
// 				hiddenRow=visibleRow;
// 				visibleRow=temp;
// 			});
// 		});
// 		e.preventDefault();

// 	});

// 	});
// 	
// $(document).ready(function(){

// 	$("<button>循环动画</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		performEffect();
// 		e.preventDefault();

// 	});
// 	function performEffect(){
// 		$("h1").toggle("slow",performEffect);
// 	}

// 	});
// $(document).ready(function(){

// 	$("<button>滑动</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$("h1").slideToggle("fast");
// 		e.preventDefault();

// 	});
// 	});
// $(document).ready(function(){

// 	$("<button>淡入淡出</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$("img").fadeToggle();
// 		e.preventDefault();

// 	});
// 	});
// $(document).ready(function(){

// 	$("<button>淡入淡出</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$("img").fadeTo("fast",0.5);
// 		e.preventDefault();

// 	});
// 	});
// $(document).ready(function(){

// 	$("form").css({
// 		"position":"fixed",
// 		"top":"70px",
// 		"z-index":"2"
// 	});

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0"
// 	});

// 	$("<button>定制动画</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$("h1").animate({
// 			height:$("h1").height()+$("form").height()+10,
// 			width:($("form").width())
// 					});
// 		e.preventDefault();

// 	});
// 	});
// $(document).ready(function(){

// 	$("form").css({
// 		"position":"fixed",
// 		"top":"70px",
// 		"z-index":"2"
// 	});

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0"
// 	});

// 	$("<button>定制动画</button>")
// 	.insertAfter("#buttonDiv button")
// 	.click(function(e){
// 		$("h1").animate({
// 			height:"+=10",
// 			width:"-=700"
// 					});
// 		e.preventDefault();

// 	});
// 	});
// $(document).ready(function(){

// 	$("form").css({
// 		"position":"fixed",
// 		"top":"70px",
// 		"z-index":"2"
// 	});

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0",
// 		"background-color":"red"
// 	});

// 	var timespan="slow";

// 	cycleEffects();

// 	function cycleEffects(){
// 		$("h1")
// 		.animate({left:"+=100"},timespan)
// 		.animate({left:"-=100"},timespan)
// 		.animate({height:223,width:700},timespan)
// 		.animate({height:30,width:500},timespan)
// 		.slideUp(timespan)
// 		.slideDown(timespan,cycleEffects);
// 	}
// 	});
// $(document).ready(function(){

// 	$("form").remove();

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0",
// 		"background-color":"red"
// 	});

// 	$("<table border=1></table>")
// 	.appendTo("body").css({
// 		position:"fixed","z-index":"2",
// 		"border-collapse":"collapse",top:100
// 	});

// 	var timespan="slow";

// 	cycleEffects();
// 	printQueue();

// 	function cycleEffects(){
// 		$("h1")
// 		.animate({left:"+=100"},timespan)
// 		.animate({left:"-=100"},timespan)
// 		.animate({height:223,width:700},timespan)
// 		.animate({height:30,width:500},timespan)
// 		.slideUp(timespan)
// 		.slideDown(timespan,cycleEffects);
// 	}

// 	function printQueue(){
// 		var q=$("h1").queue();
// 		var qtable=$("table");
// 		qtable.html("<tr><th>Queue Length:</th><td>"+q.length+"<td></tr>");
// 		for(var i=0;i<q.length;i++){
// 			var baseString="<tr><th>"+i+":</td></tr>";
// 			if(q[i]=="inprogress"){
// 				$("table").append(baseString+"in progress</td></tr>");
// 			}else{
// 				$("table").append(baseString+q[i]+"</td></tr>");
// 			}
// 		}
// 		setTimeout(printQueue,500);
// 	}
// 	});
// $(document).ready(function(){

// 	$("form").remove();

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0",
// 		"background-color":"red"
// 	});

// 	$("<table border=1></table>")
// 	.appendTo("body").css({
// 		position:"fixed","z-index":"2",
// 		"border-collapse":"collapse",top:100
// 	});

// 	$("<button>停止</button><button>开始</button>")
// 	.appendTo($("<div/>").appendTo("body").css({
// 		position:"fixed","z-index":"2","border-collapse":"collapse",top:100,
// 		left:200
// 	})).click(function(e){
// 		$(this).text()=="停止" ? $("h1").stop(true,true) : cycleEffects();
// 	});

// 	var timespan="slow";

// 	cycleEffects();
// 	printQueue();

// 	function cycleEffects(){
// 		$("h1")
// 		.animate({left:"+=100"},timespan)
// 		.animate({left:"-=100"},timespan)
// 		.animate({height:223,width:700},timespan)
// 		.animate({height:30,width:500},timespan)
// 		.slideUp(timespan)
// 		.slideDown(timespan,cycleEffects);
// 	}

// 	function printQueue(){
// 		var q=$("h1").queue();
// 		var qtable=$("table");
// 		qtable.html("<tr><th>Queue Length:</th><td>"+q.length+"<td></tr>");
// 		for(var i=0;i<q.length;i++){
// 			var baseString="<tr><th>"+i+":</td></tr>";
// 			if(q[i]=="inprogress"){
// 				$("table").append(baseString+"in progress</td></tr>");
// 			}else{
// 				$("table").append(baseString+q[i]+"</td></tr>");
// 			}
// 		}
// 		setTimeout(printQueue,500);
// 	}
// 	});
// $(document).ready(function(){

// 	$("form").remove();

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0",
// 		"background-color":"red"
// 	});

// 	$("<table border=1></table>")
// 	.appendTo("body").css({
// 		position:"fixed","z-index":"2",
// 		"border-collapse":"collapse",top:100
// 	});

// 	$("<button>停止</button><button>开始</button>")
// 	.appendTo($("<div/>").appendTo("body").css({
// 		position:"fixed","z-index":"2","border-collapse":"collapse",top:100,
// 		left:200
// 	})).click(function(e){
// 		$(this).text()=="停止" ? $("h1").stop(true,true) : cycleEffects();
// 	});

// 	var timespan="slow";

// 	cycleEffects();
// 	printQueue();

// 	function cycleEffects(){
// 		$("h1")
// 		.animate({left:"+=100"},timespan)
// 		.animate({left:"-=100"},timespan)
// 		.delay(1000)
// 		.animate({height:223,width:700},timespan)
// 		.animate({height:30,width:500},timespan)
// 		.delay(1000)
// 		.slideUp(timespan)
// 		.slideDown(timespan,cycleEffects);
// 	}

// 	function printQueue(){
// 		var q=$("h1").queue();
// 		var qtable=$("table");
// 		qtable.html("<tr><th>Queue Length:</th><td>"+q.length+"<td></tr>");
// 		for(var i=0;i<q.length;i++){
// 			var baseString="<tr><th>"+i+":</td></tr>";
// 			if(q[i]=="inprogress"){
// 				$("table").append(baseString+"in progress</td></tr>");
// 			}else{
// 				$("table").append(baseString+q[i]+"</td></tr>");
// 			}
// 		}
// 		setTimeout(printQueue,500);
// 	}
// 	});
// 	
// $(document).ready(function(){

// 	$("form").remove();

// 	$("h1").css({
// 		"position":"fixed",
// 		"z-index":"1",
// 		"min-width":"0",
// 		"background-color":"red"
// 	});

// 	$("<table border=1></table>")
// 	.appendTo("body").css({
// 		position:"fixed","z-index":"2",
// 		"border-collapse":"collapse",top:100
// 	});

// 	$("<button>停止</button><button>开始</button>")
// 	.appendTo($("<div/>").appendTo("body").css({
// 		position:"fixed","z-index":"2","border-collapse":"collapse",top:100,
// 		left:200
// 	})).click(function(e){
// 		$(this).text()=="停止" ? $("h1").stop(true,true) : cycleEffects();
// 	});

// 	var timespan="slow";

// 	cycleEffects();
// 	printQueue();

// 	function cycleEffects(){
// 		$("h1")
// 		.animate({left:"+=100"},timespan)
// 		.animate({left:"-=100"},timespan)
// 		.queue(function(){
// 			$("body").fadeTo(timespan,0).fadeTo(timespan,1);
// 		})
// 		.animate({height:223,width:700},timespan)
// 		.animate({height:30,width:500},timespan)
// 		.delay(1000)
// 		.slideUp(timespan)
// 		.slideDown(timespan,function(){
// 			if(!finishAnimations){
// 				cycleEffects();
// 			}
// 		});
// 	}

// 	function printQueue(){
// 		var q=$("h1").queue();
// 		var qtable=$("table");
// 		qtable.html("<tr><th>Queue Length:</th><td>"+q.length+"<td></tr>");
// 		for(var i=0;i<q.length;i++){
// 			var baseString="<tr><th>"+i+":</td></tr>";
// 			if(q[i]=="inprogress"){
// 				$("table").append(baseString+"in progress</td></tr>");
// 			}else{
// 				$("table").append(baseString+q[i]+"</td></tr>");
// 			}
// 		}
// 		setTimeout(printQueue,500);
// 	}
// 	});
$(document).ready(function(){
	$.fx.off = true;
	$("form").remove();

	$("h1").css({
		"position":"fixed",
		"z-index":"1",
		"min-width":"0",
		"background-color":"red"
	});

	$("<table border=1></table>")
	.appendTo("body").css({
		position:"fixed","z-index":"2",
		"border-collapse":"collapse",top:100
	});

	$("<button>停止</button><button>开始</button>")
	.appendTo($("<div/>").appendTo("body").css({
		position:"fixed","z-index":"2","border-collapse":"collapse",top:100,
		left:200
	})).click(function(e){
		$(this).text()=="停止" ? $("h1").stop(true,true) : cycleEffects();
	});

	var timespan="slow";

	cycleEffects();
	printQueue();

	function cycleEffects(){
		$("h1")
		.animate({left:"+=100"},timespan)
		.animate({left:"-=100"},timespan)
		.queue(function(){
			$("body").fadeTo(timespan,0).fadeTo(timespan,1);
		})
		.animate({height:223,width:700},timespan)
		.animate({height:30,width:500},timespan)
		.delay(1000)
		.slideUp(timespan)
		.slideDown(timespan,function(){
			if(!finishAnimations){
				cycleEffects();
			}
		});
	}

	function printQueue(){
		var q=$("h1").queue();
		var qtable=$("table");
		qtable.html("<tr><th>Queue Length:</th><td>"+q.length+"<td></tr>");
		for(var i=0;i<q.length;i++){
			var baseString="<tr><th>"+i+":</td></tr>";
			if(q[i]=="inprogress"){
				$("table").append(baseString+"in progress</td></tr>");
			}else{
				$("table").append(baseString+q[i]+"</td></tr>");
			}
		}
		setTimeout(printQueue,500);
	}
	});
(function($){

				$.fn.parallelRoll = function(options){

					var opts = $.extend({}, $.fn.parallelRoll.defaults, options);

					var _this = this;					

					var l = _this.find(opts.tagName).length;

					var autoRollTimer;

					var flag = true; // 防止用户快速多次点击上下按钮

					var arr = new Array();

					/**

					 * 如果当  (可视个数+滚动个数 >滚动元素个数)  时  为不出现空白停顿   将滚动元素再赋值一次

					 * 同时赋值以后的滚动元素个数是之前的两倍  2 * l.

					 * */

					if(opts.amount + opts.visual > l){

						_this[0].innerHTML += _this[0].innerHTML;

						l = 2 * l;

					}else{

						l = l;

					}					
					console.log(l);
					var w = 2.6//$(opts.tagName).outerWidth(true); //计算元素的宽度  包括补白+边框
					console.log(w);
					_this.css({width: (l * w) + 'rem'}); // 设置滚动层盒子的宽度

					return this.each(function(){

						_this.closest('.'+opts.boxName).hover(function(){							

							clearInterval(autoRollTimer);

						},function(){							

							switch (opts.direction){

								case 'left':

									autoRollTimer = setInterval(function(){

										left();

									},opts.time);

								break;

								case 'right':

									autoRollTimer = setInterval(function(){

										right();

									},opts.time);

								break;

								default : 

									alert('参数错误！');

								break;

							}							

						}).trigger('mouseleave');

						$('.'+opts.prev).on('click',function(){

							flag ? left() : "";

						});

						$('.'+opts.next).on('click',function(){

							flag ? right() : "";

						});

					});					

					function left(){

						flag = false;

						_this.animate({marginLeft : -(w*opts.amount)+'rem'},1000,function(){
							

							_this.find(opts.tagName).slice(0,opts.amount).appendTo(_this);

							_this.css({marginLeft:0+'rem'});

							flag = true;

						});

					};

					function right(){

						flag = false;

						arr = _this.find(opts.tagName).slice(-opts.amount);										

						for(var i = 0; i<opts.amount; i++){

							$(arr[i]).css({marginLeft : -w*(i+1)}).prependTo(_this);

						}										

						_this.animate({marginLeft : w*opts.amount},1000,function(){

							_this.find(opts.tagName).removeAttr('style');

							_this.css({marginLeft:0});

							flag = true;

						});

					};

				};

				//插件默认选项

			    $.fn.parallelRoll.defaults = {

			    	boxName : 'fwxmBox',

			        tagName : 'dd',

			        time : 3000,  // 

			        direction : 'left', // 滚动方向

			        visual : 12 , //可视数

			        prev : 'prev',

			        next : 'next22',

			        amount : 1   // 滚动数  默认是1

			    };

			})(jQuery);
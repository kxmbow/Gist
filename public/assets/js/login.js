//LOGIN STUFF

$(document).ready(function() {
	
	var loginForm = $('#login-form');
	var lostForm = $('#lost-form');
	var registerForm = $('#register-form');
	var divForms = $('#div-forms');
	var modalAnimateTime = 300;
	var msgAnimateTime = 150;
	var msgShowTime = 2000;

	$("form").submit(function() {

		switch(this.id) {
			case "login-form":
				var lg_username = $('#login_username').val();
				var lg_password = $('#login_password').val();

				if (lg_username == "ERROR") {
					msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "fa fa-times", "Login error");
				} else {
					msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "success", "fa fa-check", "Login OK");
				}
				return false;
				break;
			case "lost-form":
				var ls_email=$('#lost_email').val();

				if (ls_email == "ERROR") {
					msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "fa fa-times", "Send error");
				} else {
					msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "fa fa-check", "Send OK");
				}
				return false;
				break;
			case "register-form":
				var rg_username=$('#register_username').val();
				var rg_email=$('#register_email').val();
				var rg_password=$('#register_password').val();
				if (rg_username == "ERROR") {
					msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "fa fa-times", "Register error");
				} else {
					msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "fa fa-check", "Register OK");
				}
				return false;
				break;
			default:
				return false;
		}
		return false;
	});
	
	function modalAnimate (form1, form2) {
		var oldH = form1.height();
		var newH = form2.height();
		divForms.css("height",oldH);
		form1.fadeToggle(modalAnimateTime, function(){
			divForms.animate({height: newH}, modalAnimateTime, function(){
				form2.fadeToggle(modalAnimateTime);
			});
		});
	}
	

	// Click functions for changes pages
	// login form
	$('#login_register_btn').click(function() { 
		modalAnimate(loginForm, registerForm); 
	});
	$('#login_lost_btn').click(function() { 
		modalAnimate(loginForm, lostForm); 
	});	
	//lost form
	$('#lost_login_btn').click(function() { 
		modalAnimate(lostForm, loginForm); 
	});
	$('#lost_register_btn').click(function() { 
		modalAnimate(lostForm, registerForm); 
	});
	// register form
	$('#register_lost_btn').click(function() { 
		modalAnimate(registerForm, lostForm); 
	});
	$('#register_login_btn').click(function() { 
		modalAnimate(registerForm, loginForm); 
	});

	
	function msgFade (msgId, msgText) {
		msgId.fadeOut(msgAnimateTime, function() {
			$(this).text(msgText).fadeIn(msgAnimateTime);
		});
	}
	
	function msgChange(divTag, iconTag, textTag, divClass, iconClass, msgText) {
		var msgOld = divTag.text();

		msgFade(textTag, msgText);
		divTag.addClass(divClass);
		iconTag.removeClass("fa fa-chevron-right");
		iconTag.addClass(iconClass + " " + divClass);

		setTimeout(function() 
		{
			msgFade(textTag, msgOld);
			divTag.removeClass(divClass);
			iconTag.addClass("fa fa-chevron-right");
			iconTag.removeClass(iconClass + " " + divClass);
		}, 
		msgShowTime);
	}

	// $.post("register.php", {
 //    name1: register_username,
 //    email1: register_email,
 //    password1: register_password
	// }, function(data) {
 //    if (data == 'You have Successfully Registered.....') {
 //        $("register-form")[0].reset();
 //    }
 //    alert(data);
// });

	
});





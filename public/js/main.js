$(document).ready((()=>{$("a").on("click",(function(t){t.preventDefault(),window.location.replace(window.location.href)})),$(".cb-input").on("focus",(function(){$(this).parent().parent().parent().parent().parent().addClass("cb-form-field-float"),$(this).parent().parent().parent().parent().parent().addClass("cb-focused")})),$(".cb-input").on("blur",(function(){$(this).parent().parent().parent().parent().parent().removeClass("cb-form-field-float"),$(this).parent().parent().parent().parent().parent().removeClass("cb-focused"),""!==$(this).val()&&$(this).parent().parent().parent().parent().parent().addClass("cb-form-field-float")})),$(".cb-input-mask").on("focus",(function(){$(this).attr("type","text")})),$(".cb-input-mask").on("blur",(function(){$(this).attr("type","password")})),$(".cb-cta-button").on("click",(function(){$(".cb-notification").hide()})),$(".cb-input").on("keyup blur",(function(){$(this).val().trim().length<3?$(this).parent().parent().parent().parent().parent().addClass("cb-invalid"):$(this).parent().parent().parent().parent().parent().removeClass("cb-invalid");var t=!1;$(".cb-input").each((function(){$(this).val().trim().length<3&&(t=!0)})),t?$(".cb-button").attr("disabled",!0):$(".cb-button").attr("disabled",!1)}))}));
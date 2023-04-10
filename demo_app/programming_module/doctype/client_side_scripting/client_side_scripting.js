// Copyright (c) 2023, intcl and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	// refresh: function(frm) {
    //   //frappe.msgprint("hello altersense")
	//   //frappe.throw("This is an Error")
	// }
	// onload: function(frm)
	// {
	// 	frappe.msgprint("onload event")
	// }
	// validate: function(frm)
	// {
	// 	frappe.throw("validate event")
	// }
	// before_save: function(frm)
	// {
	// 	frappe.throw("before save event")
	// }
	// after_save: function(frm)
	// {
	// 	frappe.throw("after save event")
	// }
	// enable: function(frm)
	// {
	// 	frappe.msgprint("enable fieldname event")
	// },
	// age: function(frm)
	// {
	// 	frappe.msgprint("age fieldname event")
	// }
	//    family_members_on_form_rendered: function(frm)
	//    {
	// 	frappe.msgprint("family members child table rendered event")
	//    }
	// before_submit: function(frm)
	// {
	// 	frappe.throw("before submit event")
	// }
	// on_submit:function(frm)
	// {
	// 	frappe.msgprint("on submit event")
	// }
	// before_cancel: function(frm)
	// {
	// 	frappe.throw("before cancel event")
	// }
	// after_cancel: function(frm)
	// {
	// 	frappe.msgprint("after cancel event")
	// }
    // after_save:function(frm)
	// {
	// 	frappe.msgprint(__("The full name is '{0}'",
	// 	   [frm.doc.first_name+" " + frm.doc.middle_name+" "+frm.doc.last_name]))
	// for(let row of frm.doc.family_member)
	// {
	// 	frappe.msgprint(__("{0}. The family member name is '{1}' and relation is '{2}'",
	// 	[row.idx,row.name1,row.relation]))
	// }
	// 	}
	// refresh:function(frm)
	// {
	// 	frm.set_intro('hello, u can create a new client side scripting doctype')
	    
	// },


	// validate:function(frm)
	// {
	// 	//frm.set_value('full_name',frm.doc.first_name + " " + frm.doc.middle_name+" "+frm.doc.last_name)
	// let row = frm.add_child('family_member',{
	// 	name1:'Dbc',
	// 	relation: 'bhai',
	// 	age: 26,
	// })
	// }
	// enable:function(frm)
	// {
	// 	frm.set_df_property('first_name','reqd',1)

	// 	frm.set_df_property('middle_name','read_only',1)

	// 	frm.toggle_reqd('age',true)
	// }
	refresh:function(frm)
	{
		// frm.add_custom_button('Click me',() =>{
		// 	frappe.msgprint(__('You Clicked Me!!'));
		// })
		frm.add_custom_button('Click me1!',()=>{
			frappe.msgprint(__('You clicked 1 !!'));
		},'click me')
		frm.add_custom_button('Click me2',()=>{
			frappe.msgprint(__('You clicked 2!!'));
		},'click me')
		if(frm.is_new())
		{
			frm.set_intro('hello you can create a new client side scripting doctype')
		}
	}
	
	



});
// frappe.ui.form.on('Family Members',{
// 	// name1: function(frm)
// 	// {
// 	// 	frappe.msgprint("name1 event")
// 	// }
// 	age(frm,cdt,cdn)
// 	{
// 		frappe.msgprint("child doc type fieldname event ")
// 	}
// })

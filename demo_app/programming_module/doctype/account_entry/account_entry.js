// Copyright (c) 2023, intcl and contributors
// For license information, please see license.txt

frappe.ui.form.on('Account Entry', {
	// refresh: function(frm) {

	// }
	bank_submission: function (frm) {
		let bank_submission = frm.doc.bank_submission
		if (bank_submission) {
			frappe.call({
				method: "demo_app.programming_module.doctype.account_entry.account_entry.get_details",
				args: { bank_submission: bank_submission }
			}).done((r) => {
				$.each(r.message, function (index, child) {
					let entry = frm.add_child("account_entry_child")
					entry.account = child.account;
					entry.total_amount = child.outstanding_amount;
				})
				refresh_field("account_entry_child")
			})

		}
		
	},
	// validate: function(frm) {
    //     // iterate through each row in account entry child
	// 	frappe.msgprint("hello")
    //     frm.doc.account_entry_child.forEach(function(account_entry_child) {
    //         // get the total amount field value from the current row in account entry child
    //         var amount = account_entry_child.total_amount;

    //         // load the parent bank submission
    //         frappe.model.with_doc("Bank Submission", account_entry_child.bank_submission, function(parent_doc) {
    //             // iterate through each row in bank submission account
	// 			console.log(" hello",parent_doc);
    //             parent_doc.account_entry_child.forEach(function(bank_submission_account) {
    //                 // if the row matches the current row in account entry child
	// 				console.log("account", bank_submission_account);
    //                 if (bank_submission_account.account == account_entry_child.bank_submission_account) {
    //                     // update the outstanding amount field value in bank submission account
    //                     frappe.model.set_value(bank_submission_account.doctype, bank_submission_account.name, "Outstanding Amount", amount);
    //                 }
    //             });
    //         });
    //     });
    //     // save the changes to the Bank Submission Account child documents
    // }
	// on_submit: function(frm) {
    //     // get the quantity field value from Sales Order Item
	// 	$.each(r.message, function (index, child) {
			
	// 	})
    //     var amount = frm.doc.total_amount;

    //     // load the parent Purchase Order document
    //     frappe.model.with_doc("Bank_submission", frm.doc.bank_submission, function(parent_doc) {
    //         // load the Purchase Order Item child document
    //         frappe.model.with_doc("Account Entry Child", frm.doc.account_entry_child, function(child_doc) {
    //             // update the quantity field value in Purchase Order Item
    //             frappe.model.set_value(child_doc.doctype, child_doc.account, "Outstanding_Amount",outstanding_amount);
                
    //             // save the Purchase Order Item child document
    //             frappe.db.commit();
    //         });
    //     });
    // }

});

// frappe.ui.form.on("Account Entry Child", {
//     on_submit: function(frm) {
//         // iterate through each row in account entry child
//         frm.doc.items.forEach(function(account_entry_child) {
//             // get the total amount field value from the current row in account entry child
//             var amount = account_entry_child.total_amount;

//             // load the parent bank submission
//             frappe.model.with_doc("Bank Submission", account_entry_child.bank_submission, function(parent_doc) {
//                 // iterate through each row in bank submission account
// 				console.log(" hello",parent_doc);
//                 parent_doc.items.forEach(function(bank_submission_account) {
//                     // if the row matches the current row in account entry child
// 					console.log("account", bank_submission_account);
//                     if (bank_submission_account.account == account_entry_child.bank_submission_account) {
//                         // update the outstanding amount field value in bank submission account
//                         frappe.model.set_value(bank_submission_account.doctype, bank_submission_account.name, "Outstanding Amount", amount);
//                     }
//                 });
//             });
//         });
//         // save the changes to the Bank Submission Account child documents
//         frappe.db.commit();
//     }
// });


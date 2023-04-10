// Copyright (c) 2023, intcl and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bank Submission', {
	// refresh: function(frm) {

	// }

});
frappe.ui.form.on("Bank Submission Account", "percentage", function(frm, cdt, cdn) {

	let row = locals[cdt][cdn]; 
    let amount = cur_frm.doc.total_amount;

	let percent = row.percentage;
	let total = parseFloat((amount*percent)/100);
	row.total_amount = total;
	row.outstanding_amount= total;
	
    frm.refresh_field('bank_submission_account')
	var bank_submission_account_doc = frm.doc.bank_submission_account;
    var sum = 0
    for(let account_amount in bank_submission_account_doc) {
	sum = sum +bank_submission_account_doc[account_amount].total_amount
	}
	if(sum > cur_frm.doc.total_amount)
	{
		frappe.throw("the sum is above its limit 100%")
	}
	
	
});


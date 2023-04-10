# Copyright (c) 2023, intcl and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AccountEntry(Document):
    def on_submit(self):
        bank_submission_doc = frappe.get_doc("Bank Submission",self.bank_submission)
        bank_submission_account_child_doc = bank_submission_doc.bank_submission_account

        account_entry_child_doc = self.account_entry_child

        for account_entry_child_doc_index in account_entry_child_doc:
            for bank_submission_account_child_doc_index in bank_submission_account_child_doc:
                if(bank_submission_account_child_doc_index .account==account_entry_child_doc_index.account):
                    if(float(bank_submission_account_child_doc_index.outstanding_amount) < float(account_entry_child_doc_index.total_amount)):
                        frappe.throw("You can't do it")
                    else:
                        bank_submission_account_child_doc_index.outstanding_amount=float(bank_submission_account_child_doc_index.outstanding_amount)-float(account_entry_child_doc_index.total_amount) 
                    bank_submission_doc.save()
                    bank_submission_doc.submit()
                    frappe.db.commit()



@frappe.whitelist()
def get_details(bank_submission):

    detail = frappe.db.sql("""  SELECT account,outstanding_amount FROM `tabBank Submission Account` WHERE parent =%s """, (bank_submission), as_dict=1)
    return detail

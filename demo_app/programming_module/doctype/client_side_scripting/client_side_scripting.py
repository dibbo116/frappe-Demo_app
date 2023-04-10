# Copyright (c) 2023, intcl and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ClientSideScripting(Document):
	pass


@frappe.whitelist()
def frappe_call(msg):
	return "hi this message from frappe_call"
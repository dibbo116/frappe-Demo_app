# Copyright (c) 2023, intcl and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ServerSideScripting(Document):
    
    # def validate(self):
    # 	frappe.msgprint("Hello Frappe")
    # def before_save(self):
    # 	frappe.throw("before save event")
    # def before_insert(self):
    # 	frappe.throw("before insert event")
    # def after_insert(self):
    # 	frappe.throw("after insert event")
    # def on_update(self):
    # 	frappe.msgprint("on update event")
    # def before_submit(self):
    # 	frappe.msgprint("before submit event")
    # def on_submit(self):
    # 	frappe.msgprint("on submit event")
    # def on_cancel(self):
    # 	frappe.msgprint("on cancel event")
    # def on_trash(self):
    # 	frappe.msgprint("on trash event")
    # def after_delete(self):
    # 	frappe.msgprint("after delete event")
    # def validate(self):
    # 	frappe.msgprint( ("my full name is '{0}' ").format(
    # 		self.first_name + " "+self.middle_name+" "+self.last_name ))
    # def validate(self):
    # 	for row in self.get("family_member"):
    # 		frappe.msgprint( (
    # 			"'{0}'. The family member name is '{1}' and relation is '{2}'"
    # 		).format(row.idx,row.name1,row.relation))
    # def on_submit(self):

    #     self.get_document()
        
    # def get_document(self):
    #     frappe.db.set_value('Client Side Scripting',self.client_side_doc,'first_name','anika')
    #     doc = frappe.get_doc('Client Side Scripting',self.client_side_doc)
         
    #     frappe.msgprint( ("The first name is {0} ans Age is {1}").format(doc.first_name,doc.age))
        
        # for row in doc.get("family_member"):
        #     frappe.msgprint( (
        #         "{0}. The Family Member name is '{1}' and relation is '{2}'"
        #         ).format(row.idx,row.name1,row.relation))
    # def validate(self):
    # 	self.new_document()

    # def new_document(self):
    # 	doc = frappe.new_doc('Client Side Scripting')
    # 	doc.first_name = 'Abid'
    # 	doc.last_name = 'mahmud'
    # 	doc.age = 26
    # 	doc.append("family_member",{
    # 		"name1" : "rudra",
    # 		"relation" : "brother",
    # 		"age" : 26
    # 	})

    # 	doc.insert()
    # def validate(self):
    # 	frappe.delete_doc('Client Side Scripting','PRE-0011')
    # def validate(self):
    # 	self.get_list()
    
    # def get_list(self):
    # 	doc = frappe.db.get_list('Client Side Scripting',
    # 	        # filters={
    # 	        #  	'enable':1
    # 	        # },
    # 	        fields=['first_name','age'])

    # 	for d in doc:
    # 		frappe.msgprint( ("The Parent First name is {0} and age is {1}").format(d.first_name,d.age))
    # def validate(self):
    # 	self.get_value()
    
    # def get_value(self):
    # 	first_name,age = frappe.db.get_value('Client Side Scripting','PRE-0003',['first_name','age'])
    # 	frappe.msgprint( ("The parent name is {0} and age is {1}").format(first_name,age))
    # def validate(self):
    # 	frappe.db.set_value('Client Side Scripting','PRE-0003','age',15)

    # 	first_name,age = frappe.db.get_value('Client Side Scripting','PRE-0003',['first_name','age'])
    # 	frappe.msgprint( ("The parent first name is {0} and new age is {1}").format(first_name,age))
    # def validate(self):
    # 	if frappe.db.exists('Client Side Scripting','PRE-0001'):
    # 		frappe.msgprint( ("The document exists in the Database"))
    # 	else:
    # 		frappe.msgprint( ("The Document doesn't exist in the Database"))
    
    # def validate(self):
    # 	c = frappe.db.count('Client Side Scripting',{'enable':0})
    # 	frappe.msgprint( ("The enable document count is {0}").format(c))
    # def validate(self):
    # 	self.sql()

    
    


    # def sql(self):
    #     data = frappe.db.sql("""
    #                             SELECT
    #                                 first_name,
    #                                 age
    #                             FROM
    #                                 `tabClient Side Scripting`
    #                             WHERE
    #                                 enable=0
    #                         """,as_dict=1)
    #     for d in data:
    #         frappe.msgprint( ("The parent first name is {0} and age is {1}").format(d.first_name,d.age))
    # @frappe.whitelist()
    def frm_call(self,msg):
        import time
        time.sleep(5)
        frappe.msgprint(msg)
        self.age =11
        return "hi this msg is from frm_call"
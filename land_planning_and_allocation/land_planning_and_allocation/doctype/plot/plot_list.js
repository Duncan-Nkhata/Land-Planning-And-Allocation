
frappe.listview_settings['Plot'] = {
	add_fields: ["status"],
	get_indicator: function(doc) {
		return [__(doc.status), {
			"Reserved": "orange",
			"Under Construction": "red",
			"Available": "green",
			"Completed": "darkgrey"
		}[doc.status], "status,=," + doc.status];
	}
};

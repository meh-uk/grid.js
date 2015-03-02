QUnit.test("refresh grid", function (assert) {
	assert.equal(true, false);
	$('body').append('<table id="grid"></table>');
	$('#grid').jqGrid({
		colModel: [
            { label: 'Inv No', name: 'id', width: 75, key: true },
            { label: 'Date', name: 'invdate', width: 90 },
            { label: 'Client', name: 'name', width: 100 },
            { label: 'Amount', name: 'amount', width: 80 },
            { label: 'Tax', name: 'tax', width: 80 },
            { label: 'Total', name: 'total', width: 80 },
            { label: 'Notes', name: 'note', width: 150 }
		],
		url: './data/basic.json',
		gridComplete: function () {
			assert.equal($('#grid tr').length, 6);
		}
	});
});

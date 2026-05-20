/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/sample/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});

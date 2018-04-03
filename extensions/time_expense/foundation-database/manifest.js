{
  "name": "time_expense",
  "version": "2.4.5",
  "comment": "Time Expense Management extension",
  "loadOrder": 100,
  "defaultSchema": "te",
  "dependencies": ["project"],
  "databaseScripts": [
    "te/schema/create_te_schema.sql",
    "version.sql",

    "priv.sql",
    "initscript.sql",

    "te/functions/calcrate.sql",
    "te/functions/copyitem.sql",
    "te/functions/invoicesheets.sql",
    "te/functions/postsheet.sql",
    "te/functions/sheetstate.sql",
    "te/functions/unnest.sql",
    "te/functions/vouchersheet.sql",

    "te/tables/tecustrate.sql",
    "te/tables/teemp.sql",
    "te/tables/teexp.sql",
    "te/tables/tehead.sql",
    "te/tables/teitem.sql",
    "te/tables/teprj.sql",
    "te/tables/teprjtask.sql",

    "te/trigger_functions/tehead.sql",
    "te/trigger_functions/teitem.sql",
    "te/trigger_functions/teprj.sql",

    "te/tables/pkgmetasql/customer-savetecustrate.mql",
    "te/tables/pkgmetasql/customer-seltecustrate.mql",
    "te/tables/pkgmetasql/employee-saveteemp.mql",
    "te/tables/pkgmetasql/employee-selteemp.mql",
    "te/tables/pkgmetasql/item-saveteexp.mql",
    "te/tables/pkgmetasql/item-selteexp.mql",
    "te/tables/pkgmetasql/project-formatdates.mql",
    "te/tables/pkgmetasql/project-selteprj.mql",
    "te/tables/pkgmetasql/project-saveteprj.mql",
    "te/tables/pkgmetasql/projectGantt-getprj.mql",
    "te/tables/pkgmetasql/projectGantt-jsGantt.mql",
    "te/tables/pkgmetasql/projectGantt-jsganttcss.mql",
    "te/tables/pkgmetasql/projectGantt-tasks.mql",
    "te/tables/pkgmetasql/task-saveteprjtask.mql",
    "te/tables/pkgmetasql/task-getWorksheetDetails.mql",
    "te/tables/pkgmetasql/task-selteprjtask.mql",
    "te/tables/pkgmetasql/timeexpensehistory-detail.mql",
    "te/tables/pkgmetasql/timeexpensesheet-deltehead.mql",
    "te/tables/pkgmetasql/timeexpensesheet-delteitem.mql",
    "te/tables/pkgmetasql/timeexpensesheet-detail.mql",
    "te/tables/pkgmetasql/timeexpensesheet-header.mql",
    "te/tables/pkgmetasql/timeexpensesheet-instehead.mql",
    "te/tables/pkgmetasql/timeexpensesheet-updtehead.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-detail.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-emptotals.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-getcustinfo.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-gettask.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-getterate.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-instask.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-insteitem.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-nextlinenum.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-taskbudg.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-taskdefaults.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-taskrollup.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-teitemnext.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-teitemprev.mql",
    "te/tables/pkgmetasql/timeexpensesheetitem-updteitem.mql",
    "te/tables/pkgmetasql/timeexpensesheets-approve.mql",
    "te/tables/pkgmetasql/timeexpensesheets-close.mql",
    "te/tables/pkgmetasql/timeexpensesheets-detail.mql",
    "te/tables/pkgmetasql/timeexpensesheets-invoice.mql",
    "te/tables/pkgmetasql/timeexpensesheets-post.mql",
    "te/tables/pkgmetasql/timeexpensesheets-reopen.mql",
    "te/tables/pkgmetasql/timeexpensesheets-unapprove.mql",
    "te/tables/pkgmetasql/timeexpensesheets-voucher.mql",

    "te/tables/pkgreport/TimeExpenseHistory.xml",
    "te/tables/pkgreport/TimeExpenseSheet.xml",
    "te/tables/pkgreport/TimeExpenseSheets.xml",

    "te/tables/pkgscript/configureCRM.js",
    "te/tables/pkgscript/customer.js",
    "te/tables/pkgscript/dspTimeExpenseHistory.js",
    "te/tables/pkgscript/employee.js",
    "te/tables/pkgscript/initMenu.js",
    "te/tables/pkgscript/item.js",
    "te/tables/pkgscript/jsGantt.js",
    "te/tables/pkgscript/jsGanttCSS.js",
    "te/tables/pkgscript/project.js",
    "te/tables/pkgscript/projectGantt.js",
    "te/tables/pkgscript/task.js",
    "te/tables/pkgscript/taskList.js",
    "te/tables/pkgscript/tebilling.js",
    "te/tables/pkgscript/timeExpenseSheet.js",
    "te/tables/pkgscript/timeExpenseSheetItem.js",
    "te/tables/pkgscript/timeExpenseSheets.js",
    "te/tables/pkgscript/xtte.js",

    "te/tables/pkguiform/dspTimeExpenseHistory.ui",
    "te/tables/pkguiform/projectGantt.ui",
    "te/tables/pkguiform/tebilling.ui",
    "te/tables/pkguiform/tecustomer.ui",
    "te/tables/pkguiform/teexpense.ui",
    "te/tables/pkguiform/timeExpenseSheet.ui",
    "te/tables/pkguiform/timeExpenseSheetItem.ui",
    "te/tables/pkguiform/timeExpenseSheets.ui",

    "finalscript.sql"

  ]
}

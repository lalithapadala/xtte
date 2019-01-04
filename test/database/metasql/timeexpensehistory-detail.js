var _      = require("underscore"),
    assert = require('chai').assert,
    dblib  = require('../../../../xtuple/test/database/dblib');

(function () {
  "use strict";
  var group  = "timeexpensehistory",
      name   = "detail"
      ;

  describe(group + '-' + name + ' mql', function () {
    var datasource = dblib.datasource,
        adminCred  = dblib.generateCreds(),
        constants  = { open: 'Open', approved: 'Approved', closed: 'Closed',
                       time: 'time', expense:  'Expense',  error:  'Error' },
        mql
        ;

    before(function (done) {
      var sql = "select metasql_query from metasql"        +
                " where metasql_group = '" + group + "'"   +
                "   and metasql_name  = '" + name  + "'"   +
                "   and metasql_grade = 0;";
      datasource.query(sql, adminCred, function (err, res) {
        assert.isNull(err);
        assert.equal(res.rowCount, 1);
        mql = res.rows[0].metasql_query;
        mql = mql.replace(/"/g, "'").replace(/--.*\n/g, "").replace(/\n/g, " ");
        done();
      });
    });

    _.each([ constants,
             _.extend({}, constants, { classcode_id:       1           }),
             _.extend({}, constants, { classcode_pattern: 'E'          }),
             _.extend({}, constants, { cust_id:            2           }),
             _.extend({}, constants, { custgrp_id:         3           }),
             _.extend({}, constants, { custtype_id:        4           }),
             _.extend({}, constants, { custtype_pattern:  'A'          }),
             _.extend({}, constants, { emp_id:             5           }),
             _.extend({}, constants, { empgrp_id:          6           }),
             _.extend({}, constants, { endDate:           '2020-12-31' }),
             _.extend({}, constants, { expenseOnly:       true         }),
             _.extend({}, constants, { includeFormatted:  true         }),
             _.extend({}, constants, { item_id:            7           }),
             _.extend({}, constants, { itemgrp_id:         8           }),
             _.extend({}, constants, { prj_id:             9           }),
             _.extend({}, constants, { startDate:         '2010-01-01' }),
             _.extend({}, constants, { timeOnly:          true         })
    ], function (p) {
        it(JSON.stringify(p), function (done) {
           var sql = "do $$"
              + "var params = { params: " + JSON.stringify(p) + "},"
              + "    mql    = \""         + mql               + "\","
              + "    sql    = XT.MetaSQL.parser.parse(mql, params),"
              + "    rows   = plv8.execute(sql);"
              + "$$ language plv8;";
          datasource.query(sql, adminCred, function (err /*, res*/) {
            assert.isNull(err);
            done();
          });
        });
    });
  });

}());


/* JavaScript Document */


$(document).ready(function () {

  $.tablesorter.addParser({

    id: 'getDateAttr',
    is: function (sort) { return false; },
    format: function (sort, table, cell, cellIndex) { return $(cell).attr('data-date'); },
    type: 'text'

  });


  $('table#courses').tablesorter({

    sortList: [[0, 0]],
    cssAsc: 'sorted asc',
    cssDesc: 'sorted desc',

    /*  run custom sorter for the specified column, defined above in addParser  
    headers: { 3: { sorter: 'getDateAttr' } }  */

  });

});

/* alert('working');   */
/* sortList: [[2,1]];    1 is descending 0 is ascending, column count starts with zero  */
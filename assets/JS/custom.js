/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
// $(document).ready(function () {
//   //searching

//   //sorting
//   $("#csvheader").click(function () {
//     console.log("reached here");
//     var column = $(this).attr("id");
//     var order = $(this).attr("data-order");

//     // change sort order
//     if (order === "desc") {
//       $(this).attr("data-order", "asc");
//     } else {
//       $(this).attr("data-order", "desc");
//     }

//     // sort the table
//     sortTable(column, order);
//   });

//   function sortTable(column, order) {
//     var rows = $("tbody tr").get();

//     rows.sort(function (a, b) {
//       var A = $(a).children("td").eq(column).text().toUpperCase();
//       var B = $(b).children("td").eq(column).text().toUpperCase();

//       if (A < B) {
//         return order === "asc" ? -1 : 1;
//       } else if (A > B) {
//         return order === "asc" ? 1 : -1;
//       }
//       return 0;
//     });

//     $.each(rows, function (index, row) {
//       $("tbody").append(row);
//     });
//   }
// });

// function sortTableByColumn(table, column, asc = true) {
//   const dirModifier = asc ? 1 : -1;
//   const tBody = table.tBodies[0];
//   const rows = Array.from(tBody.querySelectorAll("tr"));

//   // Sort each row
//   const sortedRows = rows.sort((a, b) => {
//     const aColText = a
//       .querySelector(`td:nth-child(${column + 1})`)
//       .textContent.trim();
//     const bColText = b
//       .querySelector(`td:nth-child(${column + 1})`)
//       .textContent.trim();

//     return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
//   });

//   // Remove all existing TRs from the table
//   while (tBody.firstChild) {
//     tBody.removeChild(tBody.firstChild);
//   }

//   // Re-add the newly sorted rows
//   tBody.append(...sortedRows);

//   // Remember how the column is currently sorted
//   table
//     .querySelectorAll("th")
//     .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
//   table
//     .querySelector(`th:nth-child(${column + 1})`)
//     .classList.toggle("th-sort-asc", asc);
//   table
//     .querySelector(`th:nth-child(${column + 1})`)
//     .classList.toggle("th-sort-desc", !asc);
// }

// document.querySelectorAll("#csvheader").forEach((headerCell) => {
//   headerCell.addEventListener("click", () => {
//     const tableElement = headerCell.parentElement.parentElement.parentElement;
//     const headerIndex = Array.prototype.indexOf.call(
//       headerCell.parentElement.children,
//       headerCell
//     );
//     const currentIsAscending = headerCell.classList.contains("th-sort-asc");

//     sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
//   });
// });

$(document).ready(function () {
  (function () {
    var table = document.querySelector("#csvtbl");
    (ths = table.querySelectorAll("thead th")),
      (row = table.querySelectorAll("tbody tr")),
      (tBody = table.querySelector("tbody")),
      (docF = document.createDocumentFragment());
    function sortMe(e) {
      var thsArray = [].slice.call(ths),
        rowArray = [].slice.call(row),
        target = e.target,
        thsIndex = thsArray.indexOf(target);

      rowArray.sort(function (a, b) {
        var tdA = a.children[thsIndex].textContent,
          tdB = b.children[thsIndex].textContent;

        if (tdA > tdB) {
          return 1;
        } else if (tdA < tdB) {
          return -1;
        } else {
          return 0;
        }
      });

      rowArray.forEach(function (row) {
        docF.appendChild(row);
      });

      tBody.appendChild(docF);
    }

    $("#search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    for (var i = 0; i < ths.length; i++) {
      ths[i].addEventListener("click", sortMe, false);
    }
  })();
});

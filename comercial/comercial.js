$("#dataTable thead").show();

$("#getJsonSrc").click(function() {
  var $table = $("#dataTable"), 
  startDate = $("#startDate").val();
// //     
  endDate = $("#endDate").val();

    // $jsonSrc = "a.json";;

  var my_array='2019-02-22';
//   $.getJSON($jsonSrc).then(function(data) {
//     my_array = [];
  console.log("startDate",startDate, "my_array",my_array,"endDate",endDate);
    // for (var i = 0; i < data.length; i++) {
    //   var this_date = new Date(my_array.Date);
  if ((my_array >= startDate) && (my_array <= endDate)) {
    alert($("#f4").val());
        
    
    //   }
  }
    // my_array = JSON.stringify(my_array);
   
  });
 ////////// $table.bootstrapTable("load", my_array);
// });




// function display(startDate,endDate) {
//   //alert(startDate)
//   startDateArray= startDate.split("/");
//   endDateArray= endDate.split("/");
  
//   var startDateTimeStamp = new Date(startDateArray[2],+startDateArray[0],startDateArray[1]).getTime();
//   var endDateTimeStamp = new Date(endDateArray[2],+endDateArray[0],endDateArray[1]).getTime();

//   $("table tbody.mainBody tr").each(function() {
//       var rowDate = $(this).find('td:eq(2)').html();
//       rowDateArray= rowDate.split("/");

//       var rowDateTimeStamp =  new Date(rowDateArray[2],+rowDateArray[0],rowDateArray[1]).getTime() ;
//       // alert(startDateTimeStamp<=rowDateTimeStamp)
//       // alert(rowDateTimeStamp<=endDateTimeStamp)
//       if(startDateTimeStamp<=rowDateTimeStamp && rowDateTimeStamp<=endDateTimeStamp) {
//           $(this).css("display","block");
//       } else {
//           $(this).css("display","none");
//       }
//   });
//}
























// $("#getJsonSrc").click(function() {
// $("#dataTable thead").show();
// var $table = $("#dataTable"),
// startDate = $("#startDate").val();
// //     
// endDate = $("#endDate").val();

//     $jsonSrc = "a.json";;

//   var my_array;
//   $.getJSON($jsonSrc).then(function(data) {
//     my_array = [];

//     for (var i = 0; i < data.length; i++) {
//       var this_date = new Date(data[i].date);
//       if ((this_date >= $startDate) && (this_date <= $endDate)) {
//         my_array.push(data[i]);

//       }
//   }
//     my_array = JSON.stringify(my_array);
//     alert(my_array);
//   });
// });
// //   $table.bootstrapTable("load", my_array);

// //   startDateArray= startDate.split("/");
// //   endDateArray= endDate.split("/");
  
  
// //   var startDateTimeStamp = new Date(startDateArray[2],+startDateArray[0],startDateArray[1]).getTime();
// //   var endDateTimeStamp = new Date(endDateArray[2],+endDateArray[0],endDateArray[1]).getTime();
// //   console.log(startDateTimeStamp);
// //   $("table tbody.mainBody tr").each(function() {
// //       var rowDate = $(this).find('td:eq(2)').html();
// //       rowDateArray= rowDate.split("/");

// //       var rowDateTimeStamp =  new Date(rowDateArray[2],+rowDateArray[0],rowDateArray[1]).getTime() ;
// //       // alert(startDateTimeStamp<=rowDateTimeStamp)
// //       // alert(rowDateTimeStamp<=endDateTimeStamp)
// //       if(startDateTimeStamp<=rowDateTimeStamp && rowDateTimeStamp<=endDateTimeStamp) {
// //           $(this).css("display","block");
// //           alert("IN!!!!!!!")
// //       } else {
// //           $(this).css("display","none");
// //           alert("OUT")
// //       }
// //   });

// // });


// // function display(startDate,endDate) {
// //   //alert(startDate)
  

$(document).ready(function () {
    $('#hostel_id').on('change', function () {
        if (this.value == '1') {
            $("#new_hostel").show();
        }
        else {
            $("#new_hostel").hide();
        }
    });
    $('#hostel_id').on('change', function () {
        if (this.value == '2') {
            $("#new_hostel_state").show();
        }
        else {
            $("#new_hostel_state").hide();
        }
    });
});
// $(document).ready(function () {
//     $("#form-check-hostel").click(function () {
//         if ($(this).is(":checked")) {
//             $(".chkHostel").show();
//         } else {
//             $(".chkHostel").hide();
//         }
//     });
// });
$.validator.setDefaults({
    debug: true,
    success: "valid"
});
$("#non_completion_form").validate({
    rules: {
        non_completion: {
            required: true,
            maxlength: 100,
            minlength: 10
        }
    }
});

$(document).ready(function () {

    $("#show").click(function () {
        var hostel = $("#hostel_id");
        if (hostel.val() === "") {
            document.getElementById("hostel_id_message").innerHTML = "Hostel Id Can't be empty";
            document.getElementById("hostel_id_message").style.color = "red";
            document.getElementById("hostel_id_message").style.margin = "20px";
        }
        else {
            document.getElementById("hostel_id_message").innerHTML = "pass";
            document.getElementById("hostel_id_message").style.color = "green";
        }
    });
    $("#save").click(function () {
        var hostel = $("#actual_amt_Central_share");
        if (hostel.val() === "") {
            document.getElementById("actual_amt_share_message").innerHTML = "Central Share can not be empty";
            document.getElementById("actual_amt_share_message").style.display = "block";
        }
        else {
            document.getElementById("actual_amt_share_message").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var village = $("#central_assis_State_uni");
        if (village.val() === "") {
            document.getElementById("central_assis_State_uni_message").innerHTML = "State/University can not be Empty";
            document.getElementById("central_assis_State_uni_message").style.display = "block";
        }
        else {
            document.getElementById("central_assis_State_uni_message").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var expenses_radio = $("form-check-hostel");
        if (expenses_radio.val() === "") {
            document.getElementsByClassName("expenses_btn_msg").innerHTML = "Please Tick";
            document.getElementsByClassName("expenses_btn_msg").style.display = "block";
        }
        else {
            document.getElementById("expenses_btn_msg").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var financial_year = $("#financial_year");
        if (financial_year.val() === "") {
            document.getElementById("financial_year_message").innerHTML = "Financial Year can not be Empty";
            document.getElementById("financial_year_message").style.display = "block";
        }
        else {
            document.getElementById("financial_year_message").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var date_of_completion = $("#date_of_completion");
        if (date_of_completion.val() === "") {
            document.getElementById("date_of_completion_message").innerHTML = "Construction Status can not be Empty";
            document.getElementById("date_of_completion_message").style.display = "block";
        }
        else {
            document.getElementById("date_of_completion_message").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var sanction_letter = $("#sanction_letter");
        if (sanction_letter.val() === "") {
            document.getElementById("sanction_letter_message").innerHTML = "Utilization Certificate can not be Empty";
            document.getElementById("sanction_letter_message").style.display = "block";
        }
        else {
            document.getElementById("sanction_letter_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#sanction_letter').on('change', function () {
        myFile = $("#sanction_letter").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });

    $("#save").click(function () {
        var audit_report = $("#audit_report");
        if (audit_report.val() === "") {
            document.getElementById("audit_report_message").innerHTML = "Audit Report can not be Empty";
            document.getElementById("audit_report_message").style.color = "red";
            document.getElementById("audit_report_message").style.margin = "20px";
            document.getElementById("audit_report_message").style.display = "block";
        }
        else {
            document.getElementById("audit_report_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#audit_report').on('change', function () {

        myFile = $("#audit_report").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var balance_sheet = $("#balance_sheet");
        if (balance_sheet.val() === "") {
            document.getElementById("balance_sheet_message").innerHTML = "Balance Sheet can not be Empty";
            document.getElementById("balance_sheet_message").style.color = "red";
            document.getElementById("balance_sheet_message").style.margin = "20px";
            document.getElementById("balance_sheet_message").style.display = "block";
        }
        else {
            document.getElementById("balance_sheet_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#balance_sheet').on('change', function () {

        myFile = $("#balance_sheet").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var income_expenditure = $("#income_expenditure");
        if (income_expenditure.val() === "") {
            document.getElementById("income_expenditure_message").innerHTML = "Income Expenditure can not be Empty";
            document.getElementById("income_expenditure_message").style.color = "red";
            document.getElementById("income_expenditure_message").style.margin = "20px";
            document.getElementById("income_expenditure_message").style.display = "block";
        }
        else {
            document.getElementById("income_expenditure_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#income_expenditure').on('change', function () {

        myFile = $("#income_expenditure").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var receipt_of_payment = $("#receipt_of_payment");
        if (receipt_of_payment.val() === "") {
            document.getElementById("receipt_of_payment_message").innerHTML = "Receipt of Payment can not be Empty";
            document.getElementById("receipt_of_payment_message").style.color = "red";
            document.getElementById("receipt_of_payment_message").style.margin = "20px";
            document.getElementById("receipt_of_payment_message").style.display = "block";
        }
        else {
            document.getElementById("receipt_of_payment_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#receipt_of_payment').on('change', function () {

        myFile = $("#receipt_of_payment").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var bank_statement = $("#bank_statement");
        if (bank_statement.val() === "") {
            document.getElementById("bank_statement_message").innerHTML = "Bank Statement can not be Empty";
            document.getElementById("bank_statement_message").style.color = "red";
            document.getElementById("bank_statement_message").style.margin = "20px";
            document.getElementById("bank_statement_message").style.display = "block";
        }
        else {
            document.getElementById("bank_statement_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#bank_statement').on('change', function () {

        myFile = $("#bank_statement").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var details_of_intrest_earn = $("#details_of_intrest_earn");
        if (details_of_intrest_earn.val() === "") {
            document.getElementById("details_of_intrest_earn_message").innerHTML = "Refund of interest earned can not be Empty";
            document.getElementById("details_of_intrest_earn_message").style.color = "red";
            document.getElementById("details_of_intrest_earn_message").style.margin = "20px";
            document.getElementById("details_of_intrest_earn_message").style.display = "block";
        }
        else {
            document.getElementById("details_of_intrest_earn_message").innerHTML = "";
        }
    });
    $("#save").click(function () {
        var construction1 = $("#construction_status_central");
        if (construction1.val() === "") {
            document.getElementById("construction_status_central-msg").innerHTML = "Construction Status can not be Empty";
            document.getElementById("construction_status_central-msg").style.color = "red";
            document.getElementById("construction_status_central-msg").style.margin = "20px";
            document.getElementById("construction_status_central-msg").style.display = "block";
        }
        else {
            document.getElementById("construction_status_central-msg").innerHTML = "";
        }
    });
    var myFile = "";
    $('#details_of_intrest_earn').on('change', function () {

        myFile = $("#details_of_intrest_earn").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var status_of_utilization = $("#status_of_utilization");
        if (status_of_utilization.val() === "") {
            document.getElementById("status_of_utilization_message").innerHTML = "Status of Utilization can not be Empty";
            document.getElementById("status_of_utilization_message").style.color = "red";
            document.getElementById("status_of_utilization_message").style.margin = "20px";
            document.getElementById("status_of_utilization_message").style.display = "block";
        }
        else {
            document.getElementById("income_expenditure_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#status_of_utilization').on('change', function () {

        myFile = $("#status_of_utilization").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var site_inspection_report = $("#site_inspection_report");
        if (site_inspection_report.val() === "") {
            document.getElementById("site_inspection_report_message").innerHTML = "Site Inspection Report can not be Empty";
            document.getElementById("site_inspection_report_message").style.color = "red";
            document.getElementById("site_inspection_report_message").style.margin = "20px";
            document.getElementById("site_inspection_report_message").style.display = "block";
        }
        else {
            document.getElementById("site_inspection_report_message").innerHTML = "";
        }
    });
    var myFile = "";
    $('#site_inspection_report').on('change', function () {

        myFile = $("#site_inspection_report").val();
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    });
    $("#save").click(function () {
        var color_photographs_of_project = $("#color_photographs_of_project");
        if (color_photographs_of_project.val() === "") {
            document.getElementById("color_photographs_of_project_message").innerHTML = "Color Photographs can not be Empty";
            document.getElementById("color_photographs_of_project_message").style.color = "red";
            document.getElementById("color_photographs_of_project_message").style.margin = "20px";
            document.getElementById("color_photographs_of_project_message").style.display = "block";
        }
        else {
            document.getElementById("color_photographs_of_project_message").innerHTML = "pass";
        }
    });
    var myFile = "";
    $('#color_photographs_of_project').on('change', function () {

        myFile = $("#color_photographs_of_project").val();
        console.log(myFile);
        var upld = myFile.split('.').pop();
        if (upld == 'pdf') {
        } else {
            alert("Only PDF are allowed")
        }
        if (this.files[0].size > 5242880) {
            alert("Please upload pdf file less than 5MB ....");
            $(this).val('');
        }

    })
});

$(document).ready(function () {
    $("#Yes").click(function () {
        if ($(this).is(":checked")) {
            $(".wheather-yes").show();
            $(".wheather-none").hide();
        } else {
            $(".wheather-none").hide();
        }
    });
    $("#No").click(function () {
        if ($(this).is(":checked")) {
            $(".wheather-none").show();
            $(".wheather-yes").hide();
        } else {
            $(".wheather-yes").hide();
        }
    });
});
// $(document).ready(function () {
//     $("#W-Yes").click(function () {
//         if ($(this).is(":checked")) {
//             $(".wheather-return-input").show();
//         } else {
//             $(".wheather-return-input").hide();
//         }
//     });
//     $("#W-No").click(function () {
//         if ($(this).is(":checked")) {
//             $(".wheather-return-input").hide();
//         } else {
//             $(".wheather-return-input").show();
//         }
//     });
// });
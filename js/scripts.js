// business logic
function Task(task, duedate, urgency, category, notes) {
  this.taskName = task;
  this.dueDate = duedate;
  this.urgencyLevel = urgency;
  this.categoryType = category;
  this.notesInfo = notes;
}

// user interface logic
$(document).ready(function() {
  $("form#todo-form").submit(function() {
    event.preventDefault();

    var inputtedTask = $("#task-name").val();
    var inputtedDate = $("#due-date").val();
    var inputtedUrgency = $("#urgency-level").val();
    var inputtedCategory = $("input:radio[name=category-type]:checked").val();
    var inputtedNotes = $("#notes-box").val();

    var newTask = new Task(inputtedTask, inputtedDate, inputtedUrgency, inputtedCategory, inputtedNotes);
    var taskId = inputtedTask.concat();
    $("form#unfinished").append("<div class='form-check' id='" + taskId + "'>" + "<input id='" + taskId + "toRemove' class='form-check-input' type='checkbox' value='' id='defaultCheck1'>" + "<label class='form-check-label clickable' for='defaultCheck1'>" + newTask.taskName + "</label>" + "</div>");

    $(".form-check-label").last().click(function() {
      $("#task-detail").show();
      $("#task-detail h2").text(newTask.taskName);
      $(".detail-duedate").text(newTask.dueDate);
      $(".detail-urgency").text(newTask.urgencyLevel);
      $(".detail-category").text(newTask.categoryType);
      $(".detail-notes").text(newTask.notesInfo);
    });

    $("#" + taskId + "toRemove").click(function() {
      $("#" + taskId).remove();
      $("form#complete").append("<div class='form-check' id='" + taskId + "' >" + "<input id='" + taskId + "toRemove' class='form-check-input' type='checkbox' value='' id='defaultCheck1' checked>" + "<label class='form-check-label' for='defaultCheck1'>" + newTask.taskName + "</label>" + "</div>");

      $("#complete input").last().click(function(){
        $(this).parent().closest("div").remove();
        // $("#" + taskId).remove();
        $("form#unfinished").append("<div class='form-check' id='" + taskId + "'>" + "<input id='" + taskId + "toRemove' class='form-check-input' type='checkbox' value='' id='defaultCheck1'>" + "<label class='form-check-label clickable' for='defaultCheck1'>" + newTask.taskName + "</label>" + "</div>");

      });

    });

  console.log("end of function");
  });
});

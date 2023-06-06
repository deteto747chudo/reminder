function toggleGoalForm() {
    var goalForm = document.getElementById("goalForm");
  var addGoalButton = document.getElementById("addGoalButton");

  if (goalForm.style.display === "none") {
    goalForm.style.display = "block";
    addGoalButton.textContent = "Cancel";
  } else {
    goalForm.style.display = "none";
    addGoalButton.textContent = "Add Goal";
    clearGoalForm();
  }
  }
  
  function addGoal() {
    var goalIdInput = document.getElementById("goalIdInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var goalTitleInput = document.getElementById("goalTitleInput");
    var descriptionInput = document.getElementById("descriptionInput");
  
    var goalId = goalIdInput.value.trim();
    var deadline = deadlineInput.value.trim();
    var goalTitle = goalTitleInput.value.trim();
    var description = descriptionInput.value.trim();
  
    if (goalId !== "" && deadline !== "" && goalTitle !== "" && description !== "") {
      var goalList = document.getElementById("goals");
      var listItem = document.createElement("li");
      listItem.dataset.goalId = goalId;
      listItem.innerHTML = `
        <div class="goal-info">
          <span><strong>ID:</strong> ${goalId}</span>
          <span><strong>Deadline:</strong> ${deadline}</span>
          <span><strong>Title:</strong> ${goalTitle}</span>
          <span><strong>Description:</strong> ${description}</span>
        </div>
        <button class="delete-button" onclick="deleteGoal(${goalId})">Delete</button>
      `;
      goalList.appendChild(listItem);
  
      goalIdInput.value = "";
      deadlineInput.value = "";
      goalTitleInput.value = "";
      descriptionInput.value = "";
  
      toggleGoalForm();
    }
  }
  
  function deleteGoal(goalId) {
    var goalList = document.getElementById("goals");
    var listItem = document.querySelector(`li[data-goal-id="${goalId}"]`);
    if (listItem) {
      goalList.removeChild(listItem);
    }
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    // трябва да се добавят още
    var sampleGoal = {
      "id": 1,
      "title": "Успешна IT-кариера",
      "description": "искам да стана web designer",
      "deadline": "15/05/2023 10:50",
      "status": "in progress"
    };

    var sampleGoal2 = {
        "id": 2,
        "title": "Успешна IT-кариера",
        "description": "искам да стана c# dev",
        "deadline": "15/05/2023 10:50",
        "status": "done"
      };
  
    var goalIdInput = document.getElementById("goalIdInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var goalTitleInput = document.getElementById("goalTitleInput");
    var descriptionInput = document.getElementById("descriptionInput");
  
    goalIdInput.value = sampleGoal.id;
    deadlineInput.value = sampleGoal.deadline;
    goalTitleInput.value = sampleGoal.title;    
    descriptionInput.value = sampleGoal.description;
    
    addGoal();
  });

  function clearGoalForm() {
    var goalIdInput = document.getElementById("goalIdInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var goalTitleInput = document.getElementById("goalTitleInput");
    var descriptionInput = document.getElementById("descriptionInput");
  
    goalIdInput.value = "";
    deadlineInput.value = "";
    goalTitleInput.value = "";
    descriptionInput.value = "";
  }

  // трябва му дооправяне
  function deleteGoal(goalId) {
    var goalList = document.getElementById("goals");
    var listItem = document.querySelector(`li[data-goal-id="${goalId}"]`);
    if (listItem) {
      goalList.removeChild(listItem);
    }
  }
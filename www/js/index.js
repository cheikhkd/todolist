document.addEventListener("deviceready", function() {
    console.log("Cordova is ready!");
    initSwipeEvents();
}, false);

function ajouterTache() {
    var taskInput = document.getElementById("task");
    var task = taskInput.value.trim();
    if (task !== "") {
        var li = createListItem(task);
        document.getElementById("enCours").appendChild(li);
        taskInput.value = "";
        initSwipeEvents();
    }
}

function createListItem(task) {
    var li = document.createElement("li");
    li.textContent = task;
    li.classList.add("task-item");
    return li;
}

function reinitialiserTaches() {
    document.getElementById("enCours").innerHTML = `
        <li class="task-item">Tâche 1</li>
        <li class="task-item">Tâche 2</li>
        <li class="task-item">Tâche 3</li>
    `;
    document.getElementById("terminees").innerHTML = `
        <li class="task-item">Tâche 1</li>
        <li class="task-item">Tâche 2</li>
        <li class="task-item">Tâche 3</li>
    `;
    initSwipeEvents();
}

function initSwipeEvents() {
    $(".task-item").off("swipeleft swiperight");

    $(".task-item").on("swipeleft", function() {
        $(this).addClass("hidden");
    });

    $(".task-item").on("swiperight", function() {
        if ($(this).closest("#terminees").length > 0) {
            $("#enCours").append(this);
        } else {
            $("#terminees").append(this);
        }
    });
}

$(document).ready(function() {
    initSwipeEvents();
});

$(function () {
    $(".changeStatus").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data("newStatus");

        var newEatState = {
            devoured: newStatus
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eat to", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".createBurger").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgName").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $(".deleteBurger").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id);

        // Send the POST request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                console.log("del new burger" + id);
                // Reload the page to get the updated list
                location.reload();
            }
        );

    });
});
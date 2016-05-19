
var url = 'https://train-schedule-5aa86.firebaseio.com/'

var trainData = new Firebase("https://train-schedule-5aa86.firebaseio.com/");

$("#submit").on("click",function(){

var trainName = "";
var destination = "";
var frequency = 0;

//capturing user inputes and storing into the variables
  trainName = $("#trainName").val().trim();
  destination = $("#destination").val().trim();
  frequency = $("#frequency").val().trim();

//adds train data to database
trainData.push ({
  trainName: trainName,
  destination: destination,
  frequency: frequency,
  dateAdded: Firebase.ServerValue.TIMESTAMP
})

//so the page isn't refreshed
return false;
});

//to get info from the database when the page loads or when a new train is added
trainData.on("child_added", function(childSnapshot){

//logs everything to console for troubleshooting
  console.log(childSnapshot.val().trainName);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().frequency);

 
//add each train's data into the table
$("#trainTable").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +  frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td><tr>");

//Handle the error
}, function(errorObject){

});

//html being changed here to reflect data
trainData.orderByChild("dataAdded").limitToLast(1).on("child_added",function(snapshot){

  $("#trainNamedisplay").html(snapshot.val().trainName);
  $("#destinationdisplay").html(snapshot.val().destination);
  $("#frequencydisplay").html(snapshot.val().frequency);

})


function startTime(){

//convert time?
//showing current time
var currentTime = moment().format('HH:mm:');
$('#time').html(currentTime);

}

//time difference?
// next train: 4:18am
//current time 4:16am

//tarin will arrive in: 2 minutes

var timeDifference = moment().diff();
var trainArrival = trainFrequency - timeLeft;



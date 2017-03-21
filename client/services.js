angular.module('AngularinClass.services', [])
.service('PersonService', function() {
   var peopleArray = [
        {
            name: 'David Stapleton',
            title: 'Instructor'
        },
        {
            name: 'Kelsey Nichols',
            title: 'Teaching Ass.'
        }
    ];

    this.all = function() {
        return peopleArray;
    }

    this.read = function(num) {
        return peopleArray[num]
    }
})

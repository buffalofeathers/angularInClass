angular.module('AngularinClass.factories', [])
.factory('PersonFactory', function() {
    var f = {};
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
    
    f.all = function() {
        return peopleArray;
    }

    f.read = function(num) {
        return peopleArray[num];
    }

    return f;
})
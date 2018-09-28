const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/
var userSchema = new Schema({
    "rankYear": 0,
    "rankYearCompare": 0,
    "rankYearsAvailable": [
      0
    ],
    "numberOfSchools": 0,
    "numberOfPages": 0,
    "schoolList": [
      {
        "schoolid": "string",
        "schoolName": "string",
        "phone": "string",
        "url": "string",
        "urlCompare": "string",
        "address": {
          "latLong": {
            "latitude": 0,
            "longitude": 0
          },
          "street": "string",
          "city": "string",
          "state": "string",
          "stateFull": "string",
          "zip": "string",
          "zip4": "string",
          "cityURL": "string",
          "zipURL": "string",
          "html": "string"
        },
        "distance": 0,
        "lowGrade": "string",
        "highGrade": "string",
        "schoolLevel": "string",
        "isCharterSchool": "string",
        "isMagnetSchool": "string",
        "isVirtualSchool": "string",
        "isTitleISchool": "string",
        "isTitleISchoolwideSchool": "string",
        "district": {
          "districtID": "string",
          "districtName": "string",
          "url": "string",
          "rankURL": "string"
        },
        "county": {
          "countyName": "string",
          "countyURL": "string"
        },
        "rankHistory": [
          {
            "year": 0,
            "rank": 0,
            "rankOf": 0,
            "rankStars": 0,
            "rankLevel": "string",
            "rankStatewidePercentage": 0,
            "averageStandardScore": 0
          }
        ],
        "rankMovement": 0,
        "locationIsWithinBoundary": Boolean,
        "schoolYearlyDetails": [
          {
            "year": 0,
            "numberOfStudents": 0,
            "percentFreeDiscLunch": 0,
            "percentofAfricanAmericanStudents": 0,
            "percentofAsianStudents": 0,
            "percentofHispanicStudents": 0,
            "percentofIndianStudents": 0,
            "percentofPacificIslanderStudents": 0,
            "percentofWhiteStudents": 0,
            "percentofTwoOrMoreRaceStudents": 0,
            "percentofUnspecifiedRaceStudents": 0,
            "teachersFulltime": 0,
            "pupilTeacherRatio": 0,
            "numberofAfricanAmericanStudents": 0,
            "numberofAsianStudents": 0,
            "numberofHispanicStudents": 0,
            "numberofIndianStudents": 0,
            "numberofPacificIslanderStudents": 0,
            "numberofWhiteStudents": 0,
            "numberofTwoOrMoreRaceStudents": 0,
            "numberofUnspecifiedRaceStudents": 0
          }
        ],
        "isPrivate": Boolean,
        "privateDays": 0,
        "privateHours": 0,
        "privateHasLibrary": Boolean,
        "privateCoed": "string",
        "privateOrientation": "string",
        "hasBoundary": Boolean
      }
    ]
  }
)


var schoolData = mongoose.model('schoolData', userSchema);
module.exports = schoolData;
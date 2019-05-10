export class App {
  table1Data = [];
  table2Data = [];
  showDetail = false;
  sampleData = {
    Class1: [{
        Name: "Tony",
        Maths: 80,
        Science: 50,
        English: 80,
        Geography: 70,
        History: 50,
        Status: "pass"

      },
      {
        Name: "Samuel",
        Maths: 80,
        Science: 80,
        English: 80,
        Geography: 80,
        History: 80,
        Status: "fail"
      }
    ],
    Class2: [{
        Name: "John",
        Maths: 50,
        Science: 50,
        English: 40,
        Geography: 60,
        History: 30,
        Status: "fail"
      },
      {
        Name: "Tinkle",
        Maths: 25,
        Science: 40,
        English: 30,
        Geography: 50,
        History: 30,
        Status: "fail"
      }
    ],
    Class3: [{
      Name: "Angel",
      Maths: 80,
      Science: 70,
      English: 80,
      Geography: 70,
      History: 50,
      Status: "pass"
    }]
  }
  attached() {
    for (var eachClass in this.sampleData) {
      var sampleObj = {};
      sampleObj["name"] = eachClass;
      sampleObj["totalNoOfStudents"] = this.sampleData[eachClass].length;
      sampleObj["pass"] = this.getStatusCount("pass", this.sampleData[eachClass]);
      sampleObj["fail"] = this.getStatusCount("fail", this.sampleData[eachClass]);
      this.table1Data.push(sampleObj);

    }
  }

  getStatusCount(status, eachClass) {
    var countStatus = 0;
    for (var i = 0; i < eachClass.length; i++) {
      if (eachClass[i]["Status"] == status) {
        countStatus++;
      }
    }
    return countStatus;
  }

  getStudentDetail(eachClass) {
    for (var i = 0; i < eachClass.length; i++) {
      var sampleObj = {};
      sampleObj["studentName"] = eachClass[i]['Name'];
      sampleObj["Maths"] = eachClass[i]['Maths'];
      sampleObj["Science"] = eachClass[i]['Science'];
      sampleObj["English"] = eachClass[i]['English'];
      sampleObj["Geography"] = eachClass[i]['Geography'];
      sampleObj["History"] = eachClass[i]['History'];
      this.table2Data.push(sampleObj);
    }

  }

  displayStudentDetail(eachClass) {
    this.showDetail = true;
    this.table2Data = [];
    this.getStudentDetail(this.sampleData[eachClass]);
  }
}

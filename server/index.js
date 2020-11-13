const express = require('express')
const app = express()
const port = 3001
const data = {
  "resourceType": "Patient",
  "id": "xcda",
  "text": {
    "status": "generated",
    "div": "\n      \n      <p>Henry Levin the 7th</p>\n    \n    </div>"
  },
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "system": "htt://hl7.org/fhir/v2/0203",
            "code": "MR"
          }
        ]
      },
      "system": "urn:oid:2.16.840.1.113883.19.5",
      "value": "12345"
    }
  ]    
  ,
  "active": true,
  "name": [
    {
      "family": [
        "Levin"
      ],
      "given": [
        "Henry"
      ]
    }
  ],
  "gender": "male",
  "birthDate": "2020-09-24",
  "managingOrganization": {
    "reference": "Organization/2.16.840.1.113883.19.5",
    "display": "University Health Network"
  },
  "conditions": [
    "Diabetes",
    "High blood pressure",
    "Asthma"
  ]
};

app.get('/api', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
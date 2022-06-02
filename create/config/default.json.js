export default () => {
  return `{
  "mysql":{
    "host":"localhost",
    "port":"3306",
    "user":"root",
    "password":"root",
    "database":"codehub"
  },
  "mongodb":{
    "open":true,
    "url":"mongodb://localhost:27017/test",
    "autoIndex":false
  },
  "express":{
    "port":"8886"
  },
  "jwt":{
    "period_of_validity": "30 days"
  },
  "expressJwt":{
    "exclude": ["/user", "/login"]
  }
}
  `;
};

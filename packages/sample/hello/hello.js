function main(args) {
    
  const moment = require("moment");
    
  let date = args.date;
  let partner = args.partner;

  date = new Date("August 19, 1975 23:15:30");
  partner = "Joice";

  let tag = date.getDate(); //Sunday = 0, Monday = 1, ... 
   if (partner == "Joice"){
    if (tag == 0) {
      return {"body": {"delivery": moment(date).subtract(2, 'days')}};
    }else if(tag == 1) {
      return {"body": {"delivery": moment(date).subtract(3, 'days')}};
    }else {
      return {"body": {"delivery": moment(date).subtract(1, 'days')}};
    }
  }

  if (partner == "Panda"){
    if (tag == 0 || tag == 4) {
      return {"body": {"delivery": moment(date).subtract(2, 'days')}};
    }else if(tag == 1) {
      return {"body": {"delivery": moment(date).subtract(3, 'days')}};
    }else if(tag == 2) {
      return null
    }else {
      return {"body": {"delivery": moment(date).subtract(1, 'days')}};
    }
  }
  return {"body": {"delivery": null}};
}

exports.main = main

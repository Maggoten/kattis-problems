var line;
var compare = [];
while (line = readline()) {
  var nums = line.split(' ').map(Number);
  var a = (nums[0] + nums[1] + nums[2] + nums[3]) / 2;
  compare.push(a);
}
  if(compare[0] < compare[1]){
    res = "Emma";
  }
  else if(compare[0] > compare[1]){
    res = "Gunnar";
  } 
  else{
    res = "Tie";
  }
  print(res);

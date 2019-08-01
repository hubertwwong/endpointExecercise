// TODO: change this to file or cmd input
const input = `CREATE fruits
CREATE vegetables
CREATE grains
CREATE fruits/apples
CREATE fruits/apples/fuji
LIST
CREATE grains/squash
MOVE grains/squash vegetables
CREATE foods
MOVE grains foods
MOVE fruits foods
MOVE vegetables foods
LIST
DELETE fruits/apples
DELETE foods/fruits/apples
LIST`;

// split input
const cmds = input.split('\n');

// DS to store directory struct
let ds = {};

// Helper functions

// Splits a file into an array list
function pathSplit(path) {
  return path.split("/");
}

// Util function to check is an object is empty
// Using empty object to figure out leaf nodes.
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

// create a file/dir
function create(path) {
  const pathA = pathSplit(path);
  for (let i = 0 ; i < pathA.length ; i++) {
    console.log("> create > start");
    // need to append on the path.
    let curPath = pathA[i];
    let curDir = ds[curPath];
    let fullPathRef = "";
    
    // debug
    console.log(">CP " + curPath);
    console.log(">CD " + curDir);
    console.log(curDir);

    // check if the key exist.
    // Unsure on how to refernce a nested property.
    if (curDir) {
      console.log("nested");
      curDir[curPath] = {};
    } else {
      ds[curPath] = {};
    }
  }
}

// delete a file/dir
function del() {

}

// List directory
function list() {
  listDFS(ds);
}

// Move.
// Need to get create and delete to work
// Then you can use that those commands for this.
function move(from, to) {

}

function listDFS(obj, indent = 0) {
  for (const p in obj) {
    // print spaces.
    for (let i = 0 ; i < indent ; i++) {
      process.stdout.write(" ");
    }

    // check for nested object
    // if its not nested, its has no subdir and you can just print it.
    if (isEmpty(obj[p])) {
      console.log(p);
    } else {
      listDFS(obj[p], indent+2);
    }
  };
}

// process each command
//
// for (let i = 0 ; i < cmds.length ; i++) {
//   //console.log(cmds[i]);

//   // split the command to the actual command and args
//   const curCmd = cmds[i].split(' ');
//   if (curCmd == "CREATE") {
//     create(curCmd[1]);
//   }
// }

//let res = pathSplit("foo/bar");
//console.log(res);

// create("foo");
// create("foo/bar");
// console.log("> end");
// console.log(ds);


// Small example to test out list.
// ds = {
//   "foo": {},
//   "bar": {
//     "baz": {}
//   }
// }
list();
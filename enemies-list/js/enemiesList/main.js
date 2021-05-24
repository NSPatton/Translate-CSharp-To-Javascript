// Put your code here

for (const myEnemy in enemies) {
    if (myEnemy.isReallyHated) {
        console.log(`${myEnemy.firstName} ${myEnemy.LastName} Really, really dislike!`)
    }
    else {
        console.log(`${myEnemy.FirstName} ${myEnemy.LastName}`)
    }
}
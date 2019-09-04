

const Tweeter = function(){

    
    let posts =  []
    
   
    let postIdCounter = 0
   
    let commentIdCounter = 0

    const getPosts =() => posts
    

    const addPost = function(input){
        postIdCounter += 1

        let post = 
        {text: input,
        id: "p" + postIdCounter,
        comments: []}    
        
        posts.unshift(post)
    }

    const removePost = function(id){
        debugger
        for(let i in posts){
            if(posts[i].id == id){
                posts.splice(i, 1)   
                return
            }
        }
    }

    const addComment = function(input, id){
        for(let i in posts){
            if(posts[i].id == id){
                commentIdCounter += 1

                posts[i].comments.push(
                    {id: "c" + commentIdCounter,
                    text: input,})
   
            }
        }
    }

    const removeComment = function(pid, cid){
    
        for(let i in posts){
            if (posts[i].id == pid){
                for(let j in posts[i].comments){
                    if (posts[i].comments[j].id ==cid){
                        posts[i].comments.splice(j, 1)
                    }
                }
                
            }
        }
    }
    return {
        addPost,
        getPosts,
        removePost,
        addComment,
        removeComment
    }


}


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// // console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())



// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// // //This should be added to the third post's comments array:
// // //{id: "c7", text: "Damn straight it is!"}

// // //This should be added to the second post's comments array:
// // //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())

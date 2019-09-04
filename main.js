const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$("#posts").on("click", ".delete", function(){
    
    let id = $(this).closest(".post").data().id

    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
})

$("#posts").on("click", ".delete-comment", function(){

    let pid = $(this).closest(".post").data().id
    let cid = $(this).closest(".comments").data().id
    tweeter.removeComment(pid, cid)
    renderer.renderPosts(tweeter.getPosts())
})

const poster = function(){
    
    let input = $("#input").val()
    tweeter.addPost(input)
    renderer.renderPosts(tweeter.getPosts())
    $("#input").val("")
}

$("#posts").on("click", ".sendcom", function(){

    let input = $(this).closest("div").find("input").val()
    let pid = $(this).closest(".post").data().id
    tweeter.addComment(input, pid)
   

    renderer.renderPosts(tweeter.getPosts())
})
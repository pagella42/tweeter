

const Renderer = function () {


    const commenter = function (commentlist) {
        let comment = ""
        for (let j in commentlist) {
            let comtext = commentlist[j].text
            let comid = commentlist[j].id
            comment += `<div class=comments data-id=${comid}> <i class="fas fa-times delete-comment"></i>
             ${comtext} </div>`


        }
        comments =
            `<div class=combigcont>
                <div class=commentscontainer> ${comment} </div>
             </div>`
        if (comment.length > 1) {
            return comments
        }

    }


    const renderPosts = function (posts) {
        $("#posts").empty()

        if (posts.length == 0) {
            let element = `<div id="nothing" class="post">Nothing here... Post something!</div>`
            $("#posts").append(element)

        }

        for (let i in posts) {
            let posttext = posts[i].text
            let postid = posts[i].id

            let commentlist = posts[i].comments
            let comments = commenter(commentlist)
            let post

            
                post =
                `<div class=post data-id= ${postid}> 
                     <div class=post-text> ${posttext} </div>
                
                             ${comments ? comments : ""} 
                
                
                    <div class=sendcoment>
                    <i class="fas fa-trash delete"></i> <input id=input placeholder=Comment> <i class="far fa-comment-alt sendcom"></i>
                    </div>
                
                </div> `

            $("#posts").append(post)



        }

    }


    return { renderPosts }
}
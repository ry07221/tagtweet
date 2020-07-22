if (location.pathname.match("tweets/new")){
  window.addEventListener("load", (e) => {
  const inputElement = document.getElementById("tweets_tag_name");
    inputElement.addEventListener("keyup", (e) => {
      const input = document.getElementById("tweets_tag_name").value;
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `search/?input=${input}`, true);
      xhr.responseType = "json";
      xhr.send();
      xhr.onload = () => {
        const tagName = xhr.response.keyword;
        const serachResult = document.getElementById('show-lists')
        serachResult.innerHTML = ''
        tagName.forEach(function(tag){
 
          const parentsElement = document.createElement('div')
          const childElement = document.createElement('div')
 
          parentsElement.setAttribute('id', 'parents')
          childElement.setAttribute('id', tag.id )
          childElement.setAttribute('class', 'child' )
 
          parentsElement.appendChild(childElement)
          childElement.innerHTML = tag.name
          serachResult.appendChild(parentsElement)
 
          const clickElement = document.getElementById(tag.id)
          clickElement.addEventListener("click", () => {
            document.getElementById("tweets_tag_name").value = clickElement.textContent;
            clickElement.remove();
          })
        })
      }
    });
  })
 };
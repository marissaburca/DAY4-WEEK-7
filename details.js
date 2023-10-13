let photoIdFromAddressBar = new URLSearchParams(window.location.search).get(
    'photoId'
  )

const main = document.getElementById('main')
const newCard = document.createElement('div')
newCard.classList.add('col-md-4')
newCard.innerHTML = `
<div class="card mb-4 shadow-sm">
  <img
  id="photo"
    src="https://picsum.photos/id/237/300/200"
    class="bd-placeholder-img card-img-top"
  />
  <div class="card-body">
    <h5 class="card-title" id="title">Lorem Ipsum</h5>
    <p><a id="link" class="link-offset-2 link-underline link-underline-opacity-0" href="#">Underline opacity 0</a></p>
  </div>
</div>
`
main.appendChild(newCard)



const getSingleCard = function () {
    
    fetch("https://api.pexels.com/v1/photos/" + photoIdFromAddressBar , {
        headers: {
          Authorization: "S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE",
        },
      })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error getting single image details')
        }
      })
      .then((singleImageDetails) => {
        console.log(singleImageDetails)
         
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getSingleCard()
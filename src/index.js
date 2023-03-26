document.addEventListener("DOMContentLoaded", () => {
  function collectData(){
    let form=document.querySelector("#new-task-description")

    form.addEventListener("submit", (event) =>{
      event.preventDefault()
      let description=document.querySelector("#description")
      let formData = {
        TaskDescription:event.target.description.value,
      }
      console.log(formData)
    })
  }
  
});
collectData()

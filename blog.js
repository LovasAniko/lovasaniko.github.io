let path = "kozzetettPosztok";

$("#kozzeteszgomb").on('click', (event) => {
    event.preventDefault();
    let title = $('#title').val();
    let text = $('#text').val();
    let dataToSave = { title: title, text: text };
    $('#korabbiBejegyzes').prepend('<div class="korabbi-post"><h3>' + title + '</h3><p>' + text + '</p></div>');
    fb.ref(path).push(dataToSave)
});



fb.ref("kozzetettPosztok").once('value').then(data => {
    data.forEach(element => {
      $('#korabbiBejegyzes').prepend(`
      <div class=korabbi-post>
        <h3>${element.child('title').val()} </h3>
        <p>${element.child('text').val()}</p>
        
      </div>`);
    });
  });



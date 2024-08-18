



    export  function appoint(){
        const container =document.querySelector('.main');
        const submitbtn=document.createElement('button');
        submitbtn.classList.add("submitbtn");
        submitbtn.textContent="submit";
        

        //form elements
        const form=document.createElement('form');
        form.classList.add("form-items");
        const namelabel=document.createElement('label');
        const createname=document.createElement('input');
       
        createname.classList.add("name");
        createname.required="true";
        namelabel.classList.add("label");
        const datelabel=document.createElement('label');
        const date=document.createElement('input');
        date.type='date';
        date.classList.add("name");
        date.required="true";
        datelabel.classList.add("label");
        const reasonlabel=document.createElement('label');
        const reason=document.createElement('textarea');
        reason.classList.add("name");
        reason.required="true";
        reasonlabel.classList.add("label");

      
        
        //append 
           form.appendChild(namelabel);
           form.appendChild(createname);
           form.appendChild(datelabel);
           form.appendChild(date);
           form.appendChild(reasonlabel);
           form.appendChild(reason);
           form.appendChild(submitbtn);
           container.appendChild(form);
        

           namelabel.textContent="Name";
           createname.placeholder="enter your name";
           //date
           datelabel.textContent="date";
           //textarea
           reasonlabel.textContent="enter your inquiry";
           reason.placeholder="enter your message";

    

  //div.appendChild(container);

   
           
  //Create a div to display appointment data
  const displayDiv = document.createElement('div');
  displayDiv.classList.add('appointment-display');
  displayDiv.style.display = 'none';
  container.appendChild(displayDiv);

  //div.appendChild(container);

  submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    const formData = {
      name: createname.value,
      date: date.value,
      reason: reason.value
    };
    const jsonData = JSON.stringify(formData, null, 2);
    localStorage.setItem('appointmentData', jsonData);
    console.log('Data saved to localStorage');

    // Hide the form and display the data
    form.style.display = 'none';
   displayAppointmentData();
  });

  // Function to display appointment data
  function displayAppointmentData() {
    const storedData = localStorage.getItem('appointmentData');
    if (storedData) {
      const appointmentData = JSON.parse(storedData);
      displayDiv.innerHTML = `
        <h2>Appointment Details</h2>
        <p><strong>Name:</strong> ${appointmentData.name}</p>
        <p><strong>Date:</strong> ${appointmentData.date}</p>
        <p><strong>Reason:</strong> ${appointmentData.reason}</p>
        <button class="new-appointment">Edit Appointment</button>
      `;
      displayDiv.style.display = 'block';

      // Add event listener to "Make New Appointment" button
      const newAppointmentBtn = displayDiv.querySelector('.new-appointment');
      newAppointmentBtn.addEventListener('click', function() {

        displayDiv.innerHTML = `
        <h2>Appointment Details</h2>
        <p><strong>Name:</strong> ${appointmentData.name}</p>
        <p><strong>Date:</strong> ${appointmentData.date}</p>
        <p><strong>Reason:</strong> ${appointmentData.reason}</p>
        <button class="new-appointment">Edit Appointment</button>
      `;
        form.style.display = 'grid';
        displayDiv.style.display = 'none';
      });
    }
  }


        

  



    }




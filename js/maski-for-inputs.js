const validation = new JustValidate('#form');

validation
   .addField('#name', [
      {
         rule: 'minLength',
         value: 3,
      },
      {
         rule: 'maxLength',
         value: 30,
      },
      {
         rule: 'required',
         errorMessage: 'Naim is required',
      },
   ])
   .addField('#email', [
      {
         rule: 'required',
         errorMessage: 'Email is required',
      },
      {
         rule: 'email',
         errorMessage: 'Email is invalid!',
      },
   ]);
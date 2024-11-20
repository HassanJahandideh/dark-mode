function darkMode() {
   const body = document.body;
   const btn = document.querySelector('.btn');

   body.classList.toggle('dark');

   if (body.classList.contains('dark')) {
      btn.textContent = 'Light'
   } else {
      btn.textContent = 'Dark'
   }
}
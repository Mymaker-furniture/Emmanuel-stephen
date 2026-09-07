
document.querySelectorAll('[data-demo-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const success=form.querySelector('.success');
    if(success){success.style.display='block';success.textContent='Thanks! This demo captured the enquiry successfully.'}
    form.reset();
  });
});
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());

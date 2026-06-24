const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      form.reset();
      successMsg.style.display = 'block';
      btn.textContent = '✓ Sent!';
    } else {
      btn.textContent = 'Try Again';
      btn.disabled = false;
    }
  } catch {
    btn.textContent = 'Try Again';
    btn.disabled = false;
  }
});

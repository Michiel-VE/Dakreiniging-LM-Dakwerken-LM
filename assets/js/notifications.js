const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

export function showToast(message, type = 'success') {
  toastMessage.textContent = message;

  toast.classList.remove('bg-green-500', 'bg-red-500');
  toast.classList.add(type === 'success' ? 'bg-green-500' : 'bg-red-500');
  toast.classList.add(type === 'success' ? 'text-black' : 'text-white');

  toast.classList.remove('hidden');

  requestAnimationFrame(() => {
    toast.classList.remove('translate-x-full', 'opacity-0');
    toast.classList.add('translate-x-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.remove('translate-x-0', 'opacity-100');
    toast.classList.add('translate-x-full', 'opacity-0');

    setTimeout(() => {
      toast.classList.add('hidden');
    }, 500);
  }, 4000);
}
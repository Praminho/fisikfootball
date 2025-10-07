function showToast(title, message, type = 'normal', duration = 3000) {
    const toastComponent = document.getElementById('toast-component');
    const toastTitle = document.getElementById('toast-title');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toastComponent) return;

    // Reset classes and inline styles
    toastComponent.classList.remove(
        'bg-red-50', 'border-red-500', 'text-red-600',
        'bg-green-50', 'border-green-500', 'text-green-600',
        'bg-white', 'border-gray-300', 'text-gray-800'
    );
    toastComponent.style.border = '';
    toastTitle.style.fontWeight = 'bold';
    toastMessage.style.fontWeight = '500'; // sedikit lebih ringan dari title
    toastTitle.style.fontSize = '1.1rem';
    toastMessage.style.fontSize = '1rem';

    // Set type styles and border
    if (type === 'success') {
        toastComponent.classList.add('bg-green-50', 'border-green-500', 'text-green-600');
        toastComponent.style.border = '2px solid #22c55e';
    } else if (type === 'error') {
        toastComponent.classList.add('bg-red-50', 'border-red-500', 'text-red-600');
        toastComponent.style.border = '2px solid #ef4444';
    } else {
        toastComponent.classList.add('bg-white', 'border-gray-300', 'text-gray-800');
        toastComponent.style.border = '2px solid #d1d5db';
    }

    // Set title and message text
    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Animate toast in
    toastComponent.classList.remove('opacity-0', 'translate-y-64');
    toastComponent.classList.add('opacity-100', 'translate-y-0');

    // Hide toast after duration
    setTimeout(() => {
        toastComponent.classList.remove('opacity-100', 'translate-y-0');
        toastComponent.classList.add('opacity-0', 'translate-y-64');
    }, duration);
}

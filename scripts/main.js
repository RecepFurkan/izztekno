document.addEventListener('DOMContentLoaded', function () {
    function toggleDigerAciklama() {
        document.getElementById('diger-aciklama').style.display = 
            document.getElementById('diger').checked ? 'inline' : 'none';
    }

    function toggleProjeAciklama() {
        const isVisible = document.getElementById('evet').checked;
        document.getElementById('proje-aciklama').style.display = isVisible ? 'block' : 'none';
        document.getElementById('proje-aciklama-label').style.display = isVisible ? 'block' : 'none';
    }

    // Event listener ekleme işlemi optimize edildi
    document.querySelectorAll('#diger, #evet, #hayir').forEach(el => {
        el.addEventListener('click', function () {
            if (el.id === 'diger') toggleDigerAciklama();
            else toggleProjeAciklama();
        });
    });

    document.querySelector('form').addEventListener('submit', function (event) {
        if (!document.querySelectorAll('input[name="ilgi-alanlari"]:checked').length) {
            alert('Lütfen en az bir ilgi alanı seçin.');
            event.preventDefault();
            return;
        }
    });
});

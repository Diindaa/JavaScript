function hitung(tombol){
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value); 
    
    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
        history.go(0);
    }    
    
    switch (tombol) {
        case 'btn_tambah':
            var total = a1 + a2; //rumus
            frm.hasil.value = total; //penempatan hasil 
        break;

        case 'btn_kurang':
            var total = a1 - a2; //rumus
            frm.hasil.value = total; //penempatan hasil
            break;

        case 'btn_kali':
            var total = a1 * a2; //rumus
            frm.hasil.value = total; //penempatan hasil 
            break;

         case 'btn_bagi':
            var total = a1 / a2; //rumus
            frm.hasil.value = total; //penempatan hasil 
            break;

        case 'btn_pangkat' :
            var total = Math.pow(a1,a2); //rumus
            frm.hasil.value = total; //penempatan hasil
        default:
            break;
    }
}

    



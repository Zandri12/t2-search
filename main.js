
var students = [
    {
    nis: '123456',
    nama:'zandri',
    avatar: 'img/1.jpg'
    },
    {
    nis: '170700803',
    nama:'danol',
    avatar: 'img/1.jpg'
    },
    {
    nis: '123456',
    nama:'zandri',
    avatar: 'img/1.png'
    },
    {
    nis: '170777689',
    nama:'farid',
    avatar: 'img/2.png'
    },
    {
    nis: '1234567890',
    nama:'qolbi',
    avatar: 'img/1.png'
    },
    {
    nis: '170700807',
    nama:'yoghie',
    avatar: 'img/2.png'
    },
    {
    nis: '170700808',
    nama:'mustafa',
    avatar: 'img/2.png'
    },
    {
    nis: '170700809',
    nama:'gia',
    avatar: 'img/1.png'
    },
    {
     nis: '170700900',
    nama:'al azim',
    avatar: 'img/2.png'
    },
    {
    nis: '170700901',
    nama:'m.luthfy',
    avatar: 'img/1.png'
    },
    {
    nis: '170700902',
    nama:'m.akhdanul wafiy',
    avatar: 'img/2.png'
    },
    {
    nis: '170700903',
    nama:'hamizan ',
    avatar: 'img/1.png'
    },
    {
    nis: '170700904',
    nama:'m.reyhan septio',
    avatar: 'img/2.png'
    },
    {
    nis: '170700905',
    nama:'m.ridwan',
    avatar: 'img/1.png'
    },
    {
    nis: '170700906',
    nama:'muhammad andika',
    avatar: 'img/2.png'
    },
    {
    nis: '170700907',
    nama:'rizki ananda',
    avatar: 'img/1.jpg'
    },
    {
    nis: '170700908',
    nama:'rizki fauzan',
    avatar: 'img/2.png'
    },
    {
    nis: '170700909',
    nama:'arif habibi',
    avatar: 'img/2.png'
    },
    {
    nis: '170700910',
    nama:'ahmad fuady',
    avatar: 'img/1.png'
    }
]
function cari(){
var ketik = document.getElementById('search').value
for(var i =0;i <students.length; i = i + 1 )
if(students[i].nis==ketik){
    document.getElementById('tampil').textContent = students[i].nama
    document.getElementById('gbr').setAttribute("src", students[i].avatar)
}else if(students[i].nama==ketik){
    document.getElementById('tampil').textContent = students[i].nis
    
}

 //ini untuk proses pencarian data
    //ketika tombol ditekan

   
}
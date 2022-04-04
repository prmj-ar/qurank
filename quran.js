// we need it to search -  this dict i was create so dont take lot time to search you will not get something like this take it and use it :) and other dict is from tanzil site

//programmed by  @RGMY.ME  / https//instagrma.com/rgmy.me  https://github.com/prmg-ar/quran_rgmy
// we will add a lot of projects
var QuranData = {};
 sname_arb = {'الفاتحة': {'ayat': 7, 'sura_num': 1}, 'البقرة': {'ayat': 286, 'sura_num': 2}, 'آل عمران': {'ayat': 200, 'sura_num': 3}, 'النساء': {'ayat': 176, 'sura_num': 4}, 'المائدة': {'ayat': 120, 'sura_num': 5}, 'الأنعام': {'ayat': 165, 'sura_num': 6}, 'الأعراف': {'ayat': 206, 'sura_num': 7}, 'الأنفال': {'ayat': 75, 'sura_num': 8}, 'التوبة': {'ayat': 129, 'sura_num': 9}, 'يونس': {'ayat': 109, 'sura_num': 10}, 'هود': {'ayat': 123, 'sura_num': 11}, 'يوسف': {'ayat': 111, 'sura_num': 12}, 'الرعد': {'ayat': 43, 'sura_num': 13}, 'ابراهيم': {'ayat': 52, 'sura_num': 14}, 'الحجر': {'ayat': 99, 'sura_num': 15}, 'النحل': {'ayat': 128, 'sura_num': 16}, 'الإسراء': {'ayat': 111, 'sura_num': 17}, 'الكهف': {'ayat': 110, 'sura_num': 18}, 'مريم': {'ayat': 98, 'sura_num': 19}, 'طه': {'ayat': 135, 'sura_num': 20}, 'الأنبياء': {'ayat': 112, 'sura_num': 21}, 'الحج': {'ayat': 78, 'sura_num': 22}, 'المؤمنون': {'ayat': 118, 'sura_num': 23}, 'النور': {'ayat': 64, 'sura_num': 24}, 'الفرقان': {'ayat': 77, 'sura_num': 25}, 'الشعراء': {'ayat': 227, 'sura_num': 26}, 'النمل': {'ayat': 93, 'sura_num': 27}, 'القصص': {'ayat': 88, 'sura_num': 28}, 'العنكبوت': {'ayat': 69, 'sura_num': 29}, 'الروم': {'ayat': 60, 'sura_num': 30}, 'لقمان': {'ayat': 34, 'sura_num': 31}, 'السجدة': {'ayat': 30, 'sura_num': 32}, 'الأحزاب': {'ayat': 73, 'sura_num': 33}, 'سبإ': {'ayat': 54, 'sura_num': 34}, 'فاطر': {'ayat': 45, 'sura_num': 35}, 'يس': {'ayat': 83, 'sura_num': 36}, 'الصافات': {'ayat': 182, 'sura_num': 37}, 'ص': {'ayat': 88, 'sura_num': 38}, 'الزمر': {'ayat': 75, 'sura_num': 39}, 'غافر': {'ayat': 85, 'sura_num': 40}, 'فصلت': {'ayat': 54, 'sura_num': 41}, 'الشورى': {'ayat': 53, 'sura_num': 42}, 'الزخرف': {'ayat': 89, 'sura_num': 43}, 'الدخان': {'ayat': 59, 'sura_num': 44}, 'الجاثية': {'ayat': 37, 'sura_num': 45}, 'الأحقاف': {'ayat': 35, 'sura_num': 46}, 'محمد': {'ayat': 38, 'sura_num': 47}, 'الفتح': {'ayat': 29, 'sura_num': 48}, 'الحجرات': {'ayat': 18, 'sura_num': 49}, 'ق': {'ayat': 45, 'sura_num': 50}, 'الذاريات': {'ayat': 60, 'sura_num': 51}, 'الطور': {'ayat': 49, 'sura_num': 52}, 'النجم': {'ayat': 62, 'sura_num': 53}, 'القمر': {'ayat': 55, 'sura_num': 54}, 'الرحمن': {'ayat': 78, 'sura_num': 55}, 'الواقعة': {'ayat': 96, 'sura_num': 56}, 'الحديد': {'ayat': 29, 'sura_num': 57}, 'المجادلة': {'ayat': 22, 'sura_num': 58}, 'الحشر': {'ayat': 24, 'sura_num': 59}, 'الممتحنة': {'ayat': 13, 'sura_num': 60}, 'الصف': {'ayat': 14, 'sura_num': 61}, 'الجمعة': {'ayat': 11, 'sura_num': 62}, 'المنافقون': {'ayat': 11, 'sura_num': 63}, 'التغابن': {'ayat': 18, 'sura_num': 64}, 'الطلاق': {'ayat': 12, 'sura_num': 65}, 'التحريم': {'ayat': 12, 'sura_num': 66}, 'الملك': {'ayat': 30, 'sura_num': 67}, 'القلم': {'ayat': 52, 'sura_num': 68}, 'الحاقة': {'ayat': 52, 'sura_num': 69}, 'المعارج': {'ayat': 44, 'sura_num': 70}, 'نوح': {'ayat': 28, 'sura_num': 71}, 'الجن': {'ayat': 28, 'sura_num': 72}, 'المزمل': {'ayat': 20, 'sura_num': 73}, 'المدثر': {'ayat': 56, 'sura_num': 74}, 'القيامة': {'ayat': 40, 'sura_num': 75}, 'الانسان': {'ayat': 31, 'sura_num': 76}, 'المرسلات': {'ayat': 50, 'sura_num': 77}, 'النبإ': {'ayat': 40, 'sura_num': 78}, 'النازعات': {'ayat': 46, 'sura_num': 79}, 'عبس': {'ayat': 42, 'sura_num': 80}, 'التكوير': {'ayat': 29, 'sura_num': 81}, 'الإنفطار': {'ayat': 19, 'sura_num': 82}, 'المطففين': {'ayat': 36, 'sura_num': 83}, 'الإنشقاق': {'ayat': 25, 'sura_num': 84}, 'البروج': {'ayat': 22, 'sura_num': 85}, 'الطارق': {'ayat': 17, 'sura_num': 86}, 'الأعلى': {'ayat': 19, 'sura_num': 87}, 'الغاشية': {'ayat': 26, 'sura_num': 88}, 'الفجر': {'ayat': 30, 'sura_num': 89}, 'البلد': {'ayat': 20, 'sura_num': 90}, 'الشمس': {'ayat': 15, 'sura_num': 91}, 'الليل': {'ayat': 21, 'sura_num': 92}, 'الضحى': {'ayat': 11, 'sura_num': 93}, 'الشرح': {'ayat': 8, 'sura_num': 94}, 'التين': {'ayat': 8, 'sura_num': 95}, 'العلق': {'ayat': 19, 'sura_num': 96}, 'القدر': {'ayat': 5, 'sura_num': 97}, 'البينة': {'ayat': 8, 'sura_num': 98}, 'الزلزلة': {'ayat': 8, 'sura_num': 99}, 'العاديات': {'ayat': 11, 'sura_num': 100}, 'القارعة': {'ayat': 11, 'sura_num': 101}, 'التكاثر': {'ayat': 8, 'sura_num': 102}, 'العصر': {'ayat': 3, 'sura_num': 103}, 'الهمزة': {'ayat': 9, 'sura_num': 104}, 'الفيل': {'ayat': 5, 'sura_num': 105}, 'قريش': {'ayat': 4, 'sura_num': 106}, 'الماعون': {'ayat': 7, 'sura_num': 107}, 'الكوثر': {'ayat': 3, 'sura_num': 108}, 'الكافرون': {'ayat': 6, 'sura_num': 109}, 'النصر': {'ayat': 3, 'sura_num': 110}, 'المسد': {'ayat': 5, 'sura_num': 111}, 'الإخلاص': {'ayat': 4, 'sura_num': 112}, 'الفلق': {'ayat': 5, 'sura_num': 113}, 'الناس': {'ayat': 6, 'sura_num': 114}}

QuranData.Sura = [
        // [start, ayas, order, rukus, name, tname, ename, type]
        [],
        [0, 7, 5, 1, 'الفاتحة', "Al-Faatiha", 'The Opening', 'Meccan'],
        [7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Cow', 'Medinan'],
        [293, 200, 89, 20, 'آل عمران', "Aal-i-Imraan", 'The Family of Imraan', 'Medinan'],
        [493, 176, 92, 24, 'النساء', "An-Nisaa", 'The Women', 'Medinan'],
        [669, 120, 112, 16, 'المائدة', "Al-Maaida", 'Tsname_arbhe Table', 'Medinan'],
        [789, 165, 55, 20, 'الأنعام', "Al-An'aam", 'The Cattle', 'Meccan'],
        [954, 206, 39, 24, 'الأعراف', "Al-A'raaf", 'The Heights', 'Meccan'],
        [1160, 75, 88, 10, 'الأنفال', "Al-Anfaal", 'The Spoils of War', 'Medinan'],
        [1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 'Medinan'],
        [1364, 109, 51, 11, 'يونس', "Yunus", 'Jonas', 'Meccan'],
        [1473, 123, 52, 10, 'هود', "Hud", 'Hud', 'Meccan'],
        [1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 'Meccan'],
        [1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 'Medinan'],
        [1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 'Meccan'],
        [1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Rock', 'Meccan'],
        [1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Bee', 'Meccan'],
        [2029, 111, 50, 12, 'الإسراء', "Al-Israa", 'The Night Journey', 'Meccan'],
        [2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 'Meccan'],
        [2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 'Meccan'],
        [2348, 135, 45, 8, 'طه', "Taa-Haa", 'Taa-Haa', 'Meccan'],
        [2483, 112, 73, 7, 'الأنبياء', "Al-Anbiyaa", 'The Prophets', 'Meccan'],
        [2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
        [2673, 118, 74, 6, 'المؤمنون', "Al-Muminoon", 'The Believers', 'Meccan'],
        [2791, 64, 102, 9, 'النور', "An-Noor", 'The Light', 'Medinan'],
        [2855, 77, 42, 6, 'الفرقان', "Al-Furqaan", 'The Criterion', 'Meccan'],
        [2932, 227, 47, 11, 'الشعراء', "Ash-Shu'araa", 'The Poets', 'Meccan'],
        [3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 'Meccan'],
        [3252, 88, 49, 8, 'القصص', "Al-Qasas", 'The Stories', 'Meccan'],
        [3340, 69, 85, 7, 'العنكبوت', "Al-Ankaboot", 'The Spider', 'Meccan'],
        [3409, 60, 84, 6, 'الروم', "Ar-Room", 'The Romans', 'Meccan'],
        [3469, 34, 57, 3, 'لقمان', "Luqman", 'Luqman', 'Meccan'],
        [3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 'Meccan'],
        [3533, 73, 90, 9, 'الأحزاب', "Al-Ahzaab", 'The Clans', 'Medinan'],
        [3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 'Meccan'],
        [3660, 45, 43, 5, 'فاطر', "Faatir", 'The Originator', 'Meccan'],
        [3705, 83, 41, 5, 'يس', "Yaseen", 'Yaseen', 'Meccan'],
        [3788, 182, 56, 5, 'الصافات', "As-Saaffaat", 'Those drawn up in Ranks', 'Meccan'],
        [3970, 88, 38, 5, 'ص', "Saad", 'The letter Saad', 'Meccan'],
        [4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Groups', 'Meccan'],
        [4133, 85, 60, 9, 'غافر', "Al-Ghaafir", 'The Forgiver', 'Meccan'],
        [4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in detail', 'Meccan'],
        [4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'Consultation', 'Meccan'],
        [4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'Ornaments of gold', 'Meccan'],
        [4414, 59, 64, 3, 'الدخان', "Ad-Dukhaan", 'The Smoke', 'Meccan'],
        [4473, 37, 65, 4, 'الجاثية', "Al-Jaathiya", 'Crouching', 'Meccan'],
        [4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 'Meccan'],
        [4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 'Medinan'],
        [4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 'Medinan'],
        [4612, 18, 106, 2, 'الحجرات', "Al-Hujuraat", 'The Inner Apartments', 'Medinan'],
        [4630, 45, 34, 3, 'ق', "Qaaf", 'The letter Qaaf', 'Meccan'],
        [4675, 60, 67, 3, 'الذاريات', "Adh-Dhaariyat", 'The Winnowing Winds', 'Meccan'],
        [4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 'Meccan'],
        [4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 'Meccan'],
        [4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 'Meccan'],
        [4901, 78, 97, 3, 'الرحمن', "Ar-Rahmaan", 'The Beneficent', 'Medinan'],
        [4979, 96, 46, 3, 'الواقعة', "Al-Waaqia", 'The Inevitable', 'Meccan'],
        [5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 'Medinan'],
        [5104, 22, 105, 3, 'المجادلة', "Al-Mujaadila", 'The Pleading Woman', 'Medinan'],
        [5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 'Medinan'],
        [5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahana", 'She that is to be examined', 'Medinan'],
        [5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 'Medinan'],
        [5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 'Medinan'],
        [5188, 11, 104, 2, 'المنافقون', "Al-Munaafiqoon", 'The Hypocrites', 'Medinan'],
        [5199, 18, 108, 2, 'التغابن', "At-Taghaabun", 'Mutual Disillusion', 'Medinan'],
        [5217, 12, 99, 2, 'الطلاق', "At-Talaaq", 'Divorce', 'Medinan'],
        [5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 'Medinan'],
        [5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 'Meccan'],
        [5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 'Meccan'],
        [5323, 52, 78, 2, 'الحاقة', "Al-Haaqqa", 'The Reality', 'Meccan'],
        [5375, 44, 79, 2, 'المعارج', "Al-Ma'aarij", 'The Ascending Stairways', 'Meccan'],
        [5419, 28, 71, 2, 'نوح', "Nooh", 'Noah', 'Meccan'],
        [5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 'Meccan'],
        [5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
        [5495, 56, 4, 2, 'المدثر', "Al-Muddaththir", 'The Cloaked One', 'Meccan'],
        [5551, 40, 31, 2, 'القيامة', "Al-Qiyaama", 'The Resurrection', 'Meccan'],
        [5591, 31, 98, 2, 'الانسان', "Al-Insaan", 'Man', 'Medinan'],
        [5622, 50, 33, 2, 'المرسلات', "Al-Mursalaat", 'The Emissaries', 'Meccan'],
        [5672, 40, 80, 2, 'النبإ', "An-Naba", 'The Announcement', 'Meccan'],
        [5712, 46, 81, 2, 'النازعات', "An-Naazi'aat", 'Those who drag forth', 'Meccan'],
        [5758, 42, 24, 1, 'عبس', "Abasa", 'He frowned', 'Meccan'],
        [5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Overthrowing', 'Meccan'],
        [5829, 19, 82, 1, 'الإنفطار', "Al-Infitaar", 'The Cleaving', 'Meccan'],
        [5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
        [5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaaq", 'The Splitting Open', 'Meccan'],
        [5909, 22, 27, 1, 'البروج', "Al-Burooj", 'The Constellations', 'Meccan'],
        [5931, 17, 36, 1, 'الطارق', "At-Taariq", 'The Morning Star', 'Meccan'],
        [5948, 19, 8, 1, 'الأعلى', "Al-A'laa", 'The Most High', 'Meccan'],
        [5967, 26, 68, 1, 'الغاشية', "Al-Ghaashiya", 'The Overwhelming', 'Meccan'],
        [5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 'Meccan'],
        [6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 'Meccan'],
        [6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 'Meccan'],
        [6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 'Meccan'],
        [6079, 11, 11, 1, 'الضحى', "Ad-Dhuhaa", 'The Morning Hours', 'Meccan'],
        [6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 'Meccan'],
        [6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 'Meccan'],
        [6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 'Meccan'],
        [6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 'Meccan'],
        [6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 'Medinan'],
        [6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 'Medinan'],
        [6146, 11, 14, 1, 'العاديات', "Al-Aadiyaat", 'The Chargers', 'Meccan'],
        [6157, 11, 30, 1, 'القارعة', "Al-Qaari'a", 'The Calamity', 'Meccan'],
        [6168, 8, 16, 1, 'التكاثر', "At-Takaathur", 'Competition', 'Meccan'],
        [6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Declining Day, Epoch', 'Meccan'],
        [6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 'Meccan'],
        [6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 'Meccan'],
        [6193, 4, 29, 1, 'قريش', "Quraish", 'Quraysh', 'Meccan'],
        [6197, 7, 17, 1, 'الماعون', "Al-Maa'un", 'Almsgiving', 'Meccan'],
        [6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 'Meccan'],
        [6207, 6, 18, 1, 'الكافرون', "Al-Kaafiroon", 'The Disbelievers', 'Meccan'],
        [6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 'Medinan'],
        [6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 'Meccan'],
        [6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlaas", 'Sincerity', 'Meccan'],
        [6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 'Meccan'],
        [6230, 6, 21, 1, 'الناس', "An-Naas", 'Mankind', 'Meccan'],
        [6236, 1]
];

//sleep function its useful like time sleep in python :)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));}
async function  lod()
{    
    // we gonna sleep 
    $("#antdr").removeClass('visually-hidden')
   await sleep(200);
    $("#antdr").addClass('visually-hidden')
} 
async function get_sura(num,page){
    // wait until await - request ending
    return  await $.ajax({
  url: "/quran_api.php",
  method: "GET",
  data: { "sura_num":num,"page":page},
  dataType: "json",
    success: function(data) {
     return data // return respone
    },
    error: function(){
         return false
    }
});
}

function safe(v){
    // we need to make it safe from xss client side only 99% 
   return $('<div>').text(v).text()
}
function to_text(ayat){
  try{
 sura_text = ''
 sura_name = ''
 // we store all data in quran key {'quran': {'sura':"alhmdllh","text":"...."}
$.each(ayat['quran'],function( i ,v) {
    if (v){
    sura_name = v['sura'] // sura name
    // ayat of sura in "text" key 
    sura_text += v['text'].replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ','')+' {'+(i+1)+'} ';// we gonna remove it cuz we need it in top of screen and we dont wanna cut it from text just we will remove it and re insert it
    }
});
//create sura name in header or  reading box
   $('#read_sname').text(QuranData.Sura[sura_name][4]);
   // create new bsm allah in top of screen 
   if (ayat['page'] == 1){
     $('#start_aya').text('بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيم');    // get all ayat stored in sura text and move it to id="read_ayat"
   } else{
        $('#start_aya').text(ayat['page'] + ':الصفحة')
   }
  $('#read_ayat').text(safe(sura_text)).text();
}catch(e){
    console.log(e);
}
}
async function sura_open(sura_num,nowpage){
  try{ //catch any error then show us msg about it
      // show loading in screen 
    lod();
    // send requests to php and get sura data from database
   server_rsp = await get_sura(sura_num,nowpage)
   pages_button = server_rsp['pages'];
  $('#pages').html('');
  for(var i = 1; i <= pages_button; i++) {
      lod();
      if (i == nowpage){
          //create pages button but here set selected page to purple color or active
         $('#pages').append('<li class="page-item active"><span class="btn btn-sm bg-primary rounded-0" onclick="page_url('+sura_num+','+i+')">'+i+'</span></li>')  
      }else{
          // non active pages
         $('#pages').append('<li class="page-item"><span class="btn btn-outline-primary btn-sm rounded-0" onclick="page_url('+sura_num+','+i+',true)">'+i+'</span></li>')  }
      }
      page_url(sura_num,nowpage,false);
      to_text(server_rsp)
  }catch(e){
      console.log('error in sura open',e)
      return false;
  }
}

function page_url(sura_num,use_page,run){
   window.location.hash = sura_num+':'+use_page
   if (run){
     sura_open(sura_num,use_page);
    }else{
      return true;
   }
}
// search by word function val is maen  sura name
function search_by_word(val){
        var  find = $('[id=sura_name_click]:contains("'+safe(val)+'")')
 //   $([document.documentElement, document.body]).animate({
     //   scrollTop:  find.offset().top     }, 100); 
        $("#over_menu").scrollTop(find.offset().top)
        
        find.fadeOut(1000);
        find.fadeIn(1000);
 }
 
 async function run (){
 try{
    var hashs = safe(window.location.hash).split(':');
    if ($.isArray(hashs)){
    var sura_num =hashs[0].replace('#',''); 
    var page_num = hashs[1]
    if (sura_num !== "#" && $.isNumeric(page_num) && $.isNumeric(sura_num) ){
        console.log('we will take hash ',sura_num)
    await sura_open(sura_num,page_num)
        return true;
    }
    }
    
 }catch(e){
     console.log('There is No #1:1')
 }
     await sura_open(1,1)
     return false
 }

function build_page(){
    // make sura search 
  $('#search_sura').on('change',    function() {
  words = this.value
  if (words !== ''){
  search_by_word(words); //call search function by sura name or letter 
   }
  this.value = ""
  });
  
  // if we wanna enable selection its commented by /* in html page so uncomment it    
 // $('#suramenu').on('change',  async function() {
  // v = this.value;
   //to_text(await get_sura(v) );
  //});
  
  // loop sname_arb dict we create then every sura name hit make new button or item when we click to it will make website open same sura selected
  $.each(sname_arb,function(key,val){ 
    $('#sura_name_list').append(' <span class="list-group-item list-group-item-action list-group-item-primary" data-bs-toggle="list" data-bs-dismiss="offcanvas" aria-label="Close" id="sura_name_click" role="tab" onclick="sura_open('+safe(val['sura_num'])+',1)">'+safe(key)+'</span>')
  });
}
// wait until page done better then take risk of errors
$( document ).ready( function() {
build_page()
run(); // build page and call run() to get last sura or aya
// startup here 
});

//programmed by  @RGMY.ME  / https//instagram.com/rgmy.me 
// we will add a lot of projects

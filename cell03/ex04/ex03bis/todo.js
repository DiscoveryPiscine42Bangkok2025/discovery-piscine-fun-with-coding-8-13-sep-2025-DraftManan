$(function () {
  const COOKIE = "todos";
  const DAYS = 365;
  const $list = $('#ft_list');

  // อ่าน cookie แล้วแปลงเป็น array
  const read = () => {
    const m = document.cookie.match(new RegExp('(?:^|; )' + COOKIE + '=([^;]*)'));
    return m ? JSON.parse(decodeURIComponent(m[1])) : [];
  };

  // เก็บรายการทั้งหมดลง cookie
  const save = () => {
    const data = $list.children().map(function () {
      return $(this).text();
    }).get();
    const exp = new Date(Date.now() + DAYS * 864e5).toUTCString();
    document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(data))};expires=${exp};path=/;SameSite=Lax`;
  };

  // สร้าง element TODO
  function make(text) {
    const $div = $('<div>').addClass('todo').text(text);
    $div.on('click', function () {
      if (confirm(`Remove?\n\n${text}`)) {
        $div.remove();
        save();
      }
    });
    return $div;
  }

  // เพิ่มงานใหม่
  function add(text) {
    const t = (text || "").trim();
    if (!t) return;
    $list.prepend(make(t));
    save();
  }

  // ปุ่ม New
  $('#btn-new').on('click', function () {
    const t = prompt("Enter a new TO DO:");
    if (t !== null && t.trim() !== "") add(t);
  });

  // โหลดงานที่เคยบันทึกไว้
  read().forEach(t => $list.append(make(t)));
});
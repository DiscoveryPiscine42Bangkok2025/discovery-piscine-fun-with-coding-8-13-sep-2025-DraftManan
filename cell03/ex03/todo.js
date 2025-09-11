const COOKIE = "todos"; 
const DAYS = 365;
const list = document.getElementById("ft_list");

const read = () => {
  const m = document.cookie.match(new RegExp('(?:^|; )'+COOKIE+'=([^;]*)'));
  return m ? JSON.parse(decodeURIComponent(m[1])) : [];
};

const save = () => {
  const data = Array.from(list.children).map(el => el.textContent);
  const exp = new Date(Date.now()+DAYS*864e5).toUTCString();
  document.cookie = `${COOKIE}=${encodeURIComponent(JSON.stringify(data))};expires=${exp};path=/;SameSite=Lax`;
};

function make(text){
  const div = document.createElement("div");
  div.className = "todo"; 
  div.textContent = text;
  div.onclick = () => { if (confirm(`Remove?\n\n${text}`)){ div.remove(); save(); } };
  return div;
}
function add(text){
  const t = (text||"").trim(); if(!t) return;
  list.prepend(make(t)); save();
}

document.getElementById("btn-new").onclick = () => {
  const t = prompt("Enter a new TO DO:");
  if (t !== null && t.trim() !== "") add(t);
};

read().forEach(t => list.append(make(t)));
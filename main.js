// main.js
import { db } from './firebase.js'; 
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const postBtn = document.getElementById('post-btn');
const postsContainer = document.getElementById('posts-container');

async function loadPosts(){
  postsContainer.innerHTML = '';
  const q = query(collection(db, "posts"), orderBy("createdAt","desc"));
  const snapshot = await getDocs(q);
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement('div');
    div.className = 'post-item';
    div.innerHTML = `
      <strong>${data.title}</strong> by ${data.author}<br>
      <p>${data.content}</p>
      <small>${data.createdAt?.toDate ? data.createdAt.toDate().toLocaleString() : data.createdAt}</small>
      <hr>
    `;
    postsContainer.appendChild(div);
  });
}

postBtn.addEventListener('click', async () => {
  const author = document.getElementById('author').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  if(!author || !title || !content) return alert("모든 필드를 입력해주세요!");

  await addDoc(collection(db, "posts"), {
    author, title, content, createdAt: serverTimestamp()
  });

  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  loadPosts();
});

// 초기 로드
loadPosts();

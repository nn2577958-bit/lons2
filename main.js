// main.js
import { db } from '../../firebase.js';  // main.js 기준 상대경로
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const postsContainer = document.getElementById('posts-container');
const postBtn = document.getElementById('post-btn');

// 게시글 불러오기 함수
async function loadPosts() {
  postsContainer.innerHTML = ''; // 초기화
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.content}</p>
      <small>작성자: ${data.author}</small>
    `;
    postsContainer.appendChild(div);
  });
}

// 게시글 작성 이벤트
postBtn.addEventListener('click', async () => {
  const author = document.getElementById('author').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!author || !title || !content) return alert("모든 필드를 입력해주세요!");

  // Firestore에 게시글 추가
  await addDoc(collection(db, "posts"), {
    author,
    title,
    content,
    createdAt: serverTimestamp()
  });

  // 입력 초기화
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  loadPosts(); // 최신 게시글 다시 불러오기
});

// 페이지 로드 시 게시글 불러오기
loadPosts();

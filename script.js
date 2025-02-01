// Exemplo de funcionalidade para adicionar uma postagem
document.querySelector('.post-box button').addEventListener('click', function () {
    const postText = document.querySelector('.post-box input').value;
    if (postText.trim() !== '') {
      const feed = document.querySelector('.feed');
      const newPost = document.createElement('div');
      newPost.classList.add('post');
      newPost.innerHTML = `
        <div class="post-author">@novousuario</div>
        <div class="post-text">${postText}</div>
        <div class="post-actions">
          <button>Curtir</button>
          <button>Comentar</button>
          <button>Compartilhar</button>
        </div>
      `;
      feed.prepend(newPost);
      document.querySelector('.post-box input').value = ''; // Limpa o campo de texto
    }
  });
  document.querySelector('post-button').addEventListener('click', function () {
    const postText = document.querySelector('#post-box textarea').value;
    const fileInput = document.querySelector('#file-input');
    const files = fileInput.files;
  
    if (postText.trim() !== '' || files.length > 0) {
      const feed = document.querySelector('.feed');
      const newPost = document.createElement('div');
      newPost.classList.add('post');
  
      // Adiciona o texto da postagem
      newPost.innerHTML = `
        <div class="post-author">@novousuario</div>
        <div class="post-text">${postText}</div>
        <div class="post-media"></div>
        <div class="post-actions">
          <button>Curtir</button>
          <button>Comentar</button>
          <button>Compartilhar</button>
        </div>
      `;
  
      // Adiciona as mídias (imagens/documentos)
      const postMedia = newPost.querySelector('.post-media');
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          // Se for uma imagem, exibe como imagem
          const reader = new FileReader();
          reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            postMedia.appendChild(img);
          };
          reader.readAsDataURL(file);
        } else {
          // Se for um documento, exibe como link para download
          const link = document.createElement('a');
          link.href = URL.createObjectURL(file);
          link.textContent = file.name;
          link.download = file.name;
          postMedia.appendChild(link);
        }
      }
  
      // Adiciona a nova postagem ao feed
      feed.prepend(newPost);
  
      // Limpa o campo de texto e o input de arquivo
      document.querySelector('.post-box textarea').value = '';
      fileInput.value = '';
    }
  });

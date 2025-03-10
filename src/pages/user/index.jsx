import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchApiUsersPosts, fetchApiUserProfile, fetchApiUsersComments, fetchApiUsersAlbums, fetchApiUsersAlbumsPhotos } from '../../services/fetchApi';

export default function User() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [displayPosts, setDisplayPosts] = useState(""); // Estado para controlar se exibe postagens ou comentários
  const [albumsPhotos, setAlbumsPhotos] = useState([]);

  useEffect(() => {
    async function onLoad() {
      const profile = await fetchApiUserProfile(id);
      setUserProfile(profile);

      const posts = await fetchApiUsersPosts();
      const postFiltered = posts.filter((post) => post.userId === parseInt(id))
      setUserPosts(postFiltered);

      handlePosts()
    }
    onLoad();
  }, [id]);

  // Função para carregar os comentários
  async function handleComments() {
    const comments = await fetchApiUsersComments();
    const commentsFiltered = comments.filter((comment) => comment.postId === parseInt(id))
    setUserComments(commentsFiltered);
    setDisplayPosts("comments"); // Exibir comentários
  }
  // Função para carregar os albuns
  async function handleAlbuns() {
    const albums = await fetchApiUsersAlbums();
    const albumsFiltered = albums.filter((albums) => albums.userId === parseInt(id))
    setUserAlbums(albumsFiltered);
    setDisplayPosts("albums"); // Exibir albuns

    const Photos = await fetchApiUsersAlbumsPhotos()
    setAlbumsPhotos(Photos)
  }
  // console.log("PHOTOS:", albumsPhotos)

  const albumsPhotosFilter = albumsPhotos
    .filter((items) => items.albumId === parseInt(id))
   
    // console.log("albumsPhotosFilter",albumsPhotosFilter)

  // Função para voltar a exibir postagens
  function handlePosts() {
    setDisplayPosts("posts"); // Exibir postagens
  }


  return (
    <div>
      <div className='flex gap-2 my-2 w-full sm:w-10 md:w-200 mx-auto'>
        <div className='border-2 p-3 gap-3 flex flex-col pr-15 max-h-80'>
          <h1 className='font-extrabold text-xl'>Filtra por:</h1>
          <p className='cursor-pointer' onClick={handlePosts}>Publicações</p>
          <p className='cursor-pointer' onClick={handleComments}>Comentários</p>
          <p className='cursor-pointer' onClick={handleAlbuns}>Albuns</p>

        </div>

        <div>
          <div>
            <p>{userProfile.name}</p>
            <p>{userProfile.email}</p>
            <p>Endereço: {userProfile.address?.street}, {userProfile.address?.suite}.</p>
            <p>{userProfile.address?.city}, zipcode: {userProfile.address?.zipcode}</p>
          </div>

          <div className='border-2 mt-5 p-2 mb-16'>
            <h1 className='font-extrabold text-xl mb-6'>Resultado:</h1>

            {displayPosts === "posts" ? (
              userPosts
                .map((post) => (
                  <div key={post.id}>
                    <h2 className='font-extrabold'>Título</h2>
                    <h2 className='mb-2'>{post.title}</h2>
                    <h2 className='font-extrabold'>Postagem:</h2>
                    <p className='mb-8 border-b border-b-gray-300 pb-5'>{post.body}</p>
                  </div>
                ))
            ) : null}

            {displayPosts === "comments" ? (
              userComments
                .map((comment) => (
                  <div key={comment.id}>
                    <h2 className='font-extrabold'>Comentário:</h2>
                    <p className='mb-8 border-b border-b-gray-300 pb-5'>{comment.body}</p>
                  </div>
                ))
            ) : null}
            
           { displayPosts === "albums" ? (
              userAlbums
                .map((albums, index) => (
                  <div key={albums.id} className='w-full sm:w-10 md:w-152.5'>
                    <h2 className='font-extrabold'>Albuns:</h2>
                    <p className='mb-8 border-b border-b-gray-300 pb-5'>{albums.title}</p>
                    <img src={albumsPhotosFilter[index]} alt="not found" />
                  </div>
                ))
            ) : null}
              
            
          </div>
        </div>
      </div>
    </div>
  );
}

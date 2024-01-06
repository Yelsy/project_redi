// src/app/blog/[..slug]/page.js
/*import { useRouter } from 'next/router';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const BlogPage = ({ blog }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <ReactMarkdown source={blog.content} />
    </div>
  );
};

export const getStaticPaths = async () => {
  // Obtener los slugs de la API de Flask
  const response = await axios.get('http://tu-api-flask/blogs');
  const blogs = response.data;

  // Crear rutas estáticas para cada blog
  const paths = blogs.map(blog => ({
    params: { slug: blog.slug.split('/') },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  // Obtener el blog específico según el slug
  const slug = params.slug.join('/');
  const response = await axios.get(`http://tu-api-flask/blogs/${slug}`);
  const blog = response.data;

  return { props: { blog }, revalidate: 1 };
};

export default BlogPage;
*/
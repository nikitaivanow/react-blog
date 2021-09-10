import About from '../pages/About';
import Post from '../pages/Post';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PostIdPage from '../pages/PostIdPage';

export const privateRoutes = [
  {path: '/about', component: About, exact:true},
  {path: '/posts', component: Post, exact:true},
  {path: '/posts/:id', component: PostIdPage, exact:true}
]

export const publicRoutes = [
  {path: '/login', component: Login, exact:true},
]
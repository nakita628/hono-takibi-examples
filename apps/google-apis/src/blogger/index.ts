import { OpenAPIHono } from '@hono/zod-openapi'
import {
  blogsHandler,
  blogUserInfosHandler,
  commentsHandler,
  pagesHandler,
  pageViewsHandler,
  postsHandler,
  postUserInfosHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', blogsHandler)
  .route('/', commentsHandler)
  .route('/', pagesHandler)
  .route('/', pageViewsHandler)
  .route('/', postsHandler)
  .route('/', usersHandler)
  .route('/', blogUserInfosHandler)
  .route('/', postUserInfosHandler)

export default app

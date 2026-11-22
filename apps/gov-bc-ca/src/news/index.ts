import { OpenAPIHono } from '@hono/zod-openapi'
import {
  facebookPostsHandler,
  homeHandler,
  ministriesHandler,
  newslettersHandler,
  postsHandler,
  resourceLinksHandler,
  sectorsHandler,
  servicesHandler,
  slidesHandler,
  tagsHandler,
  themesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', facebookPostsHandler)
  .route('/', homeHandler)
  .route('/', ministriesHandler)
  .route('/', newslettersHandler)
  .route('/', postsHandler)
  .route('/', resourceLinksHandler)
  .route('/', sectorsHandler)
  .route('/', servicesHandler)
  .route('/', slidesHandler)
  .route('/', tagsHandler)
  .route('/', themesHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  categoriesHandler,
  channelsHandler,
  contentratingsHandler,
  creativecommonsHandler,
  groupsHandler,
  languagesHandler,
  meHandler,
  oauthHandler,
  ondemandHandler,
  tagsHandler,
  tokensHandler,
  tutorialHandler,
  usersHandler,
  videosHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', categoriesHandler)
  .route('/', channelsHandler)
  .route('/', contentratingsHandler)
  .route('/', creativecommonsHandler)
  .route('/', groupsHandler)
  .route('/', languagesHandler)
  .route('/', meHandler)
  .route('/', oauthHandler)
  .route('/', ondemandHandler)
  .route('/', tagsHandler)
  .route('/', tokensHandler)
  .route('/', tutorialHandler)
  .route('/', usersHandler)
  .route('/', videosHandler)

export default app

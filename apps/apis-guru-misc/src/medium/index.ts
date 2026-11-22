import { OpenAPIHono } from '@hono/zod-openapi'
import {
  articleHandler,
  listHandler,
  miscHandler,
  publicationHandler,
  searchHandler,
  userHandler,
  welcomeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', welcomeHandler)
  .route('/', articleHandler)
  .route('/', miscHandler)
  .route('/', listHandler)
  .route('/', publicationHandler)
  .route('/', searchHandler)
  .route('/', userHandler)

export default app

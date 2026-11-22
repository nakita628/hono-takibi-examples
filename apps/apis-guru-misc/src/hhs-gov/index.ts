import { OpenAPIHono } from '@hono/zod-openapi'
import {
  campaignsHandler,
  languagesHandler,
  mediaHandler,
  mediaTypesHandler,
  resourcesHandler,
  sourcesHandler,
  tagsHandler,
  userMediaListsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', resourcesHandler)
  .route('/', campaignsHandler)
  .route('/', languagesHandler)
  .route('/', mediaHandler)
  .route('/', mediaTypesHandler)
  .route('/', sourcesHandler)
  .route('/', tagsHandler)
  .route('/', userMediaListsHandler)

export default app

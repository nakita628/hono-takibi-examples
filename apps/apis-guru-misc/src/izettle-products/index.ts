import { OpenAPIHono } from '@hono/zod-openapi'
import {
  categoriesHandler,
  discountsHandler,
  imagesHandler,
  importHandler,
  libraryHandler,
  productsHandler,
  productsOnlineHandler,
  taxesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', categoriesHandler)
  .route('/', discountsHandler)
  .route('/', imagesHandler)
  .route('/', importHandler)
  .route('/', libraryHandler)
  .route('/', productsHandler)
  .route('/', productsOnlineHandler)
  .route('/', taxesHandler)

export default app

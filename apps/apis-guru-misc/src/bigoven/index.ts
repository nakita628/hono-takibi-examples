import { OpenAPIHono } from '@hono/zod-openapi'
import {
  collectionHandler,
  groceryListHandler,
  imagesHandler,
  meHandler,
  noteHandler,
  recipeHandler,
  reviewHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionHandler)
  .route('/', groceryListHandler)
  .route('/', imagesHandler)
  .route('/', meHandler)
  .route('/', recipeHandler)
  .route('/', reviewHandler)
  .route('/', noteHandler)

export default app

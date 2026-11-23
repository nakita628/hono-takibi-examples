import { OpenAPIHono } from '@hono/zod-openapi'
import {
  collectionHandler,
  collectionsHandler,
  grocerylistHandler,
  imageHandler,
  meHandler,
  recipeHandler,
  recipesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', collectionHandler)
  .route('/', collectionsHandler)
  .route('/', grocerylistHandler)
  .route('/', imageHandler)
  .route('/', meHandler)
  .route('/', recipeHandler)
  .route('/', recipesHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  foodHandler,
  ingredientsHandler,
  mealPlanningHandler,
  menuItemsHandler,
  miscHandler,
  productsHandler,
  recipesHandler,
  wineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', miscHandler)
  .route('/', ingredientsHandler)
  .route('/', recipesHandler)
  .route('/', menuItemsHandler)
  .route('/', productsHandler)
  .route('/', foodHandler)
  .route('/', wineHandler)
  .route('/', mealPlanningHandler)

export default app

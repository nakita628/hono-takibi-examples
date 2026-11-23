import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodBrandedBarcodePhpRoute,
  getFoodBrandedNamePhpRoute,
  getFoodBrandedSearchPhpRoute,
  getFoodIngredientSearchPhpRoute,
} from './routes'
import {
  getFoodBrandedBarcodePhpRouteHandler,
  getFoodBrandedNamePhpRouteHandler,
  getFoodBrandedSearchPhpRouteHandler,
  getFoodIngredientSearchPhpRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFoodBrandedBarcodePhpRoute, getFoodBrandedBarcodePhpRouteHandler)
  .openapi(getFoodBrandedNamePhpRoute, getFoodBrandedNamePhpRouteHandler)
  .openapi(getFoodBrandedSearchPhpRoute, getFoodBrandedSearchPhpRouteHandler)
  .openapi(getFoodIngredientSearchPhpRoute, getFoodIngredientSearchPhpRouteHandler)

export default app

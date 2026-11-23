import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodBrandedBarcodePhpRoute,
  getFoodBrandedNamePhpRoute,
  getFoodBrandedSearchPhpRoute,
  getFoodIngredientSearchPhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const foodHandler = app
  .openapi(getFoodBrandedBarcodePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodBrandedNamePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodBrandedSearchPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodIngredientSearchPhpRoute, (c) => {
    throw new Error('Not implemented')
  })

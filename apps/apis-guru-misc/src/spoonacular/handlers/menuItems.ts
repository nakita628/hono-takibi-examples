import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodMenuItemsIdNutritionLabelPngRoute,
  getFoodMenuItemsIdNutritionLabelRoute,
  getFoodMenuItemsIdNutritionWidgetPngRoute,
  getFoodMenuItemsIdNutritionWidgetRoute,
  getFoodMenuItemsIdRoute,
  getFoodMenuItemsSearchRoute,
  getFoodMenuItemsSuggestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const menuItemsHandler = app
  .openapi(getFoodMenuItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionLabelPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodMenuItemsIdNutritionWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFoodProductsIdNutritionLabelPngRoute,
  getFoodProductsIdNutritionLabelRoute,
  getFoodProductsIdNutritionWidgetPngRoute,
  getFoodProductsIdNutritionWidgetRoute,
  getFoodProductsIdRoute,
  getFoodProductsSearchRoute,
  getFoodProductsSuggestRoute,
  getFoodProductsUpcUpcComparableRoute,
  getFoodProductsUpcUpcRoute,
  postFoodProductsClassifyBatchRoute,
  postFoodProductsClassifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(postFoodProductsClassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodProductsClassifyBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsUpcUpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsUpcUpcComparableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionLabelPngRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionWidgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodProductsIdNutritionWidgetPngRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getFoodRoute, getFoodSearchRoute, postFoodSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const foodHandler = app
  .openapi(getFoodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFoodSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoodSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

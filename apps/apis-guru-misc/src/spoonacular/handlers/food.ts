import { OpenAPIHono } from '@hono/zod-openapi'
import { getFoodRestaurantsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const foodHandler = app.openapi(getFoodRestaurantsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { putDriverAtRestaurantRoute } from '../routes'

const app = new OpenAPIHono()

export const driverAtRestaurantHandler = app.openapi(putDriverAtRestaurantRoute, (c) => {
  throw new Error('Not implemented')
})

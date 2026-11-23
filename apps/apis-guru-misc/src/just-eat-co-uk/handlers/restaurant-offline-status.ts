import { OpenAPIHono } from '@hono/zod-openapi'
import { putRestaurantOfflineStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantOfflineStatusHandler = app.openapi(putRestaurantOfflineStatusRoute, (c) => {
  throw new Error('Not implemented')
})

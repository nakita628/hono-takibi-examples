import { OpenAPIHono } from '@hono/zod-openapi'
import { putRestaurantOnlineStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantOnlineStatusHandler = app.openapi(putRestaurantOnlineStatusRoute, (c) => {
  throw new Error('Not implemented')
})

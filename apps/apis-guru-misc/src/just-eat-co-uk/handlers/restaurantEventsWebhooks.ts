import { OpenAPIHono } from '@hono/zod-openapi'
import { putRestaurantOfflineStatusRoute, putRestaurantOnlineStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantEventsWebhooksHandler = app
  .openapi(putRestaurantOfflineStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestaurantOnlineStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { putRestaurantOfflineStatusRoute, putRestaurantOnlineStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantEventsWebhooksHandler = app
  .openapi(putRestaurantOfflineStatusRoute, (c) => {})
  .openapi(putRestaurantOnlineStatusRoute, (c) => {})

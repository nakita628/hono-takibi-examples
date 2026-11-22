import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderEligibleForRestaurantCompensationRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantQueriesWebhooksHandler = app.openapi(
  postOrderEligibleForRestaurantCompensationRoute,
  (c) => {},
)

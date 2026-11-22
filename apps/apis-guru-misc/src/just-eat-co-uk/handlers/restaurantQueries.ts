import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrdersTenantOrderIdRestaurantqueriesCompensationRoute } from '../routes'

const app = new OpenAPIHono()

export const restaurantQueriesHandler = app.openapi(
  postOrdersTenantOrderIdRestaurantqueriesCompensationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

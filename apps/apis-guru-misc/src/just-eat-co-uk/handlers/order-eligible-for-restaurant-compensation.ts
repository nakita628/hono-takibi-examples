import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrderEligibleForRestaurantCompensationRoute } from '../routes'

const app = new OpenAPIHono()

export const orderEligibleForRestaurantCompensationHandler = app.openapi(
  postOrderEligibleForRestaurantCompensationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

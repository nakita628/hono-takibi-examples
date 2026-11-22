import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2PaymentsFindEligibleMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const findEligibleMethodsHandler = app.openapi(
  postV2PaymentsFindEligibleMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

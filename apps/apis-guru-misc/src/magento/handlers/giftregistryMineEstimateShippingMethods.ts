import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GiftregistryMineEstimateShippingMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const giftregistryMineEstimateShippingMethodsHandler = app.openapi(
  postV1GiftregistryMineEstimateShippingMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

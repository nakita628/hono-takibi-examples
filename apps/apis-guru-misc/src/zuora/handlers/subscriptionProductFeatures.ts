import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ObjectSubscriptionProductFeatureIdRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionProductFeaturesHandler = app.openapi(
  getV1ObjectSubscriptionProductFeatureIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

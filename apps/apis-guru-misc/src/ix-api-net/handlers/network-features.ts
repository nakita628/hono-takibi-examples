import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworkFeaturesIdRoute, getNetworkFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const networkFeaturesHandler = app
  .openapi(getNetworkFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNetworkFeaturesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

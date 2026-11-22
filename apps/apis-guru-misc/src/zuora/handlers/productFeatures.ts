import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1ObjectProductFeatureIdRoute, getV1ObjectProductFeatureIdRoute } from '../routes'

const app = new OpenAPIHono()

export const productFeaturesHandler = app
  .openapi(deleteV1ObjectProductFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ObjectProductFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })

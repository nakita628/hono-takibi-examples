import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureFeatureIdRoute, getFeatureRoute, getFeatureTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const featureHandler = app
  .openapi(getFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })

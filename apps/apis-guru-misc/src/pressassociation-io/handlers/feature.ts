import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureFeatureIdRoute, getFeatureRoute } from '../routes'

const app = new OpenAPIHono()

export const featureHandler = app
  .openapi(getFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeatureFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })

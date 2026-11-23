import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const featureTypeHandler = app.openapi(getFeatureTypeRoute, (c) => {
  throw new Error('Not implemented')
})

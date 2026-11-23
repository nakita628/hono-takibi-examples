import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const featureTypesHandler = app.openapi(getFeatureTypesRoute, (c) => {
  throw new Error('Not implemented')
})

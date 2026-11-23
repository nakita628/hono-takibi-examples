import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeatureClassesRoute } from '../routes'

const app = new OpenAPIHono()

export const featureClassesHandler = app.openapi(getFeatureClassesRoute, (c) => {
  throw new Error('Not implemented')
})

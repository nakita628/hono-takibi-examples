import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeaturesFeatureIdRoute } from '../routes'

const app = new OpenAPIHono()

export const featureHandler = app.openapi(getFeaturesFeatureIdRoute, (c) => {
  throw new Error('Not implemented')
})

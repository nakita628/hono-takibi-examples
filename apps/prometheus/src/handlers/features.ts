import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app.openapi(getFeaturesRoute, (c) => {
  throw new Error('Not implemented')
})

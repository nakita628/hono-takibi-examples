import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeaturesConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app.openapi(getFeaturesConfigRoute, (c) => {
  throw new Error('Not implemented')
})

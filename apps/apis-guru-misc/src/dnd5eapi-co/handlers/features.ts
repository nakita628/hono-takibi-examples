import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiFeaturesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const featuresHandler = app.openapi(getApiFeaturesIndexRoute, (c) => {
  throw new Error('Not implemented')
})

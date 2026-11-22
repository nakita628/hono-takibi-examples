import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlternativeOcppLastSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ocppHandler = app.openapi(getAlternativeOcppLastSessionsRoute, (c) => {
  throw new Error('Not implemented')
})

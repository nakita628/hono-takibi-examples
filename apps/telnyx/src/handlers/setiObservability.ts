import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetiBlackBoxTestResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const setiObservabilityHandler = app.openapi(getSetiBlackBoxTestResultsRoute, (c) => {
  throw new Error('Not implemented')
})

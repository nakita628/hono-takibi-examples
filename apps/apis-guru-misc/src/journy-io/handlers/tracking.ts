import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrackingSnippetRoute } from '../routes'

const app = new OpenAPIHono()

export const trackingHandler = app.openapi(getTrackingSnippetRoute, (c) => {
  throw new Error('Not implemented')
})

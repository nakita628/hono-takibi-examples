import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrackingSnippetRoute } from '../routes'

const app = new OpenAPIHono()

export const websitesHandler = app.openapi(getTrackingSnippetRoute, (c) => {
  throw new Error('Not implemented')
})

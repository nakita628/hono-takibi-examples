import { OpenAPIHono } from '@hono/zod-openapi'
import { postTraceSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const TraceSummariesHandler = app.openapi(postTraceSummariesRoute, (c) => {
  throw new Error('Not implemented')
})

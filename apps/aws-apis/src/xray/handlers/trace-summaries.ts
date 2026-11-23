import { OpenAPIHono } from '@hono/zod-openapi'
import { postTraceSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const traceSummariesHandler = app.openapi(postTraceSummariesRoute, (c) => {
  throw new Error('Not implemented')
})

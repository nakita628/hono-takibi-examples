import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SourcesSourceIdExecuteRoute } from '../routes'

const app = new OpenAPIHono()

export const sourceExecutionHandler = app.openapi(postV1SourcesSourceIdExecuteRoute, (c) => {
  throw new Error('Not implemented')
})

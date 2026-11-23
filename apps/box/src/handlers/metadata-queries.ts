import { OpenAPIHono } from '@hono/zod-openapi'
import { postMetadataQueriesExecuteReadRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataQueriesHandler = app.openapi(postMetadataQueriesExecuteReadRoute, (c) => {
  throw new Error('Not implemented')
})

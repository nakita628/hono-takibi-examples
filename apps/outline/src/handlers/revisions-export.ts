import { OpenAPIHono } from '@hono/zod-openapi'
import { postRevisionsExportRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsExportHandler = app.openapi(postRevisionsExportRoute, (c) => {
  throw new Error('Not implemented')
})

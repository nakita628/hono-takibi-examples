import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelWorldExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelWorldExportJobHandler = app.openapi(postCancelWorldExportJobRoute, (c) => {
  throw new Error('Not implemented')
})

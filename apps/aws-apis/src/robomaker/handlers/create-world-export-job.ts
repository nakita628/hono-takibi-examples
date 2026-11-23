import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateWorldExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const createWorldExportJobHandler = app.openapi(postCreateWorldExportJobRoute, (c) => {
  throw new Error('Not implemented')
})

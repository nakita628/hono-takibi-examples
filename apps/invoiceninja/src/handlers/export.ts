import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ExportRoute } from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app.openapi(postApiV1ExportRoute, (c) => {
  throw new Error('Not implemented')
})

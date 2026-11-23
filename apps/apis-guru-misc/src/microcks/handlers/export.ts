import { OpenAPIHono } from '@hono/zod-openapi'
import { getExportRoute } from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app.openapi(getExportRoute, (c) => {
  throw new Error('Not implemented')
})

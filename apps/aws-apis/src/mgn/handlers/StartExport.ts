import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartExportRoute } from '../routes'

const app = new OpenAPIHono()

export const StartExportHandler = app.openapi(postStartExportRoute, (c) => {
  throw new Error('Not implemented')
})

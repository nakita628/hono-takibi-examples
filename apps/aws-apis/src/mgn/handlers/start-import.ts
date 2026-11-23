import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartImportRoute } from '../routes'

const app = new OpenAPIHono()

export const startImportHandler = app.openapi(postStartImportRoute, (c) => {
  throw new Error('Not implemented')
})

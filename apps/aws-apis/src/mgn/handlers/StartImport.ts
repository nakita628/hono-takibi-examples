import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartImportRoute } from '../routes'

const app = new OpenAPIHono()

export const StartImportHandler = app.openapi(postStartImportRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postCustomFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const customFilesHandler = app.openapi(postCustomFilesRoute, (c) => {
  throw new Error('Not implemented')
})

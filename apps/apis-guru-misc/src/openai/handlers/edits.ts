import { OpenAPIHono } from '@hono/zod-openapi'
import { postEditsRoute } from '../routes'

const app = new OpenAPIHono()

export const editsHandler = app.openapi(postEditsRoute, (c) => {
  throw new Error('Not implemented')
})

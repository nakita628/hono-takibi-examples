import { OpenAPIHono } from '@hono/zod-openapi'
import { postFileOperationsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const fileOperationsDeleteHandler = app.openapi(postFileOperationsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteHandler = app.openapi(deleteDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

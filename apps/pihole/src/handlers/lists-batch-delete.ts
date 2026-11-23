import { OpenAPIHono } from '@hono/zod-openapi'
import { postListsBatchDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const listsBatchDeleteHandler = app.openapi(postListsBatchDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

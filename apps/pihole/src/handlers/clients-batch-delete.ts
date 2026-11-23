import { OpenAPIHono } from '@hono/zod-openapi'
import { postClientsBatchDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const clientsBatchDeleteHandler = app.openapi(postClientsBatchDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

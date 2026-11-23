import { OpenAPIHono } from '@hono/zod-openapi'
import { postGroupsBatchDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsBatchDeleteHandler = app.openapi(postGroupsBatchDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteByQueryTaskIdRethrottleRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteByQueryHandler = app.openapi(postDeleteByQueryTaskIdRethrottleRoute, (c) => {
  throw new Error('Not implemented')
})

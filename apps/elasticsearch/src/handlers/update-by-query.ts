import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateByQueryTaskIdRethrottleRoute } from '../routes'

const app = new OpenAPIHono()

export const updateByQueryHandler = app.openapi(postUpdateByQueryTaskIdRethrottleRoute, (c) => {
  throw new Error('Not implemented')
})

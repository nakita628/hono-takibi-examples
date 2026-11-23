import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteTargetHandler = app.openapi(postDeleteTargetRoute, (c) => {
  throw new Error('Not implemented')
})

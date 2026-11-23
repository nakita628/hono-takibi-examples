import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostActionsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const postActionsJsonHandler = app.openapi(postPostActionsJsonRoute, (c) => {
  throw new Error('Not implemented')
})

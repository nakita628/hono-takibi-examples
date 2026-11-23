import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountCartAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const accountCartAddJsonHandler = app.openapi(postAccountCartAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})

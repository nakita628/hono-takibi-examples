import { OpenAPIHono } from '@hono/zod-openapi'
import { postFollowRoute } from '../routes'

const app = new OpenAPIHono()

export const followHandler = app.openapi(postFollowRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserBadgesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const userBadgesJsonHandler = app.openapi(postUserBadgesJsonRoute, (c) => {
  throw new Error('Not implemented')
})

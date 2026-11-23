import { OpenAPIHono } from '@hono/zod-openapi'
import { postJoinStringsRoute } from '../routes'

const app = new OpenAPIHono()

export const joinStringsHandler = app.openapi(postJoinStringsRoute, (c) => {
  throw new Error('Not implemented')
})

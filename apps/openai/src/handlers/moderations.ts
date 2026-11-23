import { OpenAPIHono } from '@hono/zod-openapi'
import { postModerationsRoute } from '../routes'

const app = new OpenAPIHono()

export const moderationsHandler = app.openapi(postModerationsRoute, (c) => {
  throw new Error('Not implemented')
})

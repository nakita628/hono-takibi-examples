import { OpenAPIHono } from '@hono/zod-openapi'
import { postRebootRoute } from '../routes'

const app = new OpenAPIHono()

export const rebootHandler = app.openapi(postRebootRoute, (c) => {
  throw new Error('Not implemented')
})

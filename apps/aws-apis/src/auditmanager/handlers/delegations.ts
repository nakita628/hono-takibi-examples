import { OpenAPIHono } from '@hono/zod-openapi'
import { getDelegationsRoute } from '../routes'

const app = new OpenAPIHono()

export const delegationsHandler = app.openapi(getDelegationsRoute, (c) => {
  throw new Error('Not implemented')
})

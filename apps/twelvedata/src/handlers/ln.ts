import { OpenAPIHono } from '@hono/zod-openapi'
import { getLnRoute } from '../routes'

const app = new OpenAPIHono()

export const lnHandler = app.openapi(getLnRoute, (c) => {
  throw new Error('Not implemented')
})

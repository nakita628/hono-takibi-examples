import { OpenAPIHono } from '@hono/zod-openapi'
import { getCancelbabelBoxIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelbabelHandler = app.openapi(getCancelbabelBoxIdRoute, (c) => {
  throw new Error('Not implemented')
})

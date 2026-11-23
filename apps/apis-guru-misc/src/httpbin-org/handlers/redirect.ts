import { OpenAPIHono } from '@hono/zod-openapi'
import { getRedirectNRoute } from '../routes'

const app = new OpenAPIHono()

export const redirectHandler = app.openapi(getRedirectNRoute, (c) => {
  throw new Error('Not implemented')
})

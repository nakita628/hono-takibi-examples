import { OpenAPIHono } from '@hono/zod-openapi'
import { getAbsoluteRedirectNRoute } from '../routes'

const app = new OpenAPIHono()

export const absoluteRedirectHandler = app.openapi(getAbsoluteRedirectNRoute, (c) => {
  throw new Error('Not implemented')
})

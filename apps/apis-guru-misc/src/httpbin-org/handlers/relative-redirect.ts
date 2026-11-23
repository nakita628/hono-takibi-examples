import { OpenAPIHono } from '@hono/zod-openapi'
import { getRelativeRedirectNRoute } from '../routes'

const app = new OpenAPIHono()

export const relativeRedirectHandler = app.openapi(getRelativeRedirectNRoute, (c) => {
  throw new Error('Not implemented')
})

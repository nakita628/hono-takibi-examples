import { OpenAPIHono } from '@hono/zod-openapi'
import { postApplePaySessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const applePayHandler = app.openapi(postApplePaySessionsRoute, (c) => {
  throw new Error('Not implemented')
})

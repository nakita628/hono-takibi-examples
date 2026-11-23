import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateAlertRoute } from '../routes'

const app = new OpenAPIHono()

export const updateAlertHandler = app.openapi(postUpdateAlertRoute, (c) => {
  throw new Error('Not implemented')
})

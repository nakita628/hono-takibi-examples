import { OpenAPIHono } from '@hono/zod-openapi'
import { postPasswordResetConfirmIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordResetConfirmHandler = app.openapi(postPasswordResetConfirmIndexRoute, (c) => {
  throw new Error('Not implemented')
})

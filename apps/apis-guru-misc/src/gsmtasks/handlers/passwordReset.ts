import { OpenAPIHono } from '@hono/zod-openapi'
import { postPasswordResetIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordResetHandler = app.openapi(postPasswordResetIndexRoute, (c) => {
  throw new Error('Not implemented')
})

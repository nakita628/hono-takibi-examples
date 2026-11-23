import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestPasswordResetRoute } from '../routes'

const app = new OpenAPIHono()

export const requestPasswordResetHandler = app.openapi(postRequestPasswordResetRoute, (c) => {
  throw new Error('Not implemented')
})

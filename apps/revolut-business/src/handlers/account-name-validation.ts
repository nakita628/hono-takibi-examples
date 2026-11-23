import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountNameValidationRoute } from '../routes'

const app = new OpenAPIHono()

export const accountNameValidationHandler = app.openapi(postAccountNameValidationRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateEmailRoute } from '../routes'

const app = new OpenAPIHono()

export const validateEmailHandler = app.openapi(postValidateEmailRoute, (c) => {
  throw new Error('Not implemented')
})

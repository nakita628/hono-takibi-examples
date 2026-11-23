import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateEntityRoute } from '../routes'

const app = new OpenAPIHono()

export const validateEntityHandler = app.openapi(postValidateEntityRoute, (c) => {
  throw new Error('Not implemented')
})

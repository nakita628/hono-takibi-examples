import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateJobRoute } from '../routes'

const app = new OpenAPIHono()

export const validateHandler = app.openapi(postValidateJobRoute, (c) => {
  throw new Error('Not implemented')
})

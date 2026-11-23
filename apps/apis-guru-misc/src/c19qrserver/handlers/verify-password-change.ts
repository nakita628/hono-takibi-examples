import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyPasswordChangeRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyPasswordChangeHandler = app.openapi(postVerifyPasswordChangeRoute, (c) => {
  throw new Error('Not implemented')
})

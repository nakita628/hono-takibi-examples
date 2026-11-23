import { OpenAPIHono } from '@hono/zod-openapi'
import { postChangePasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const changePasswordHandler = app.openapi(postChangePasswordRoute, (c) => {
  throw new Error('Not implemented')
})

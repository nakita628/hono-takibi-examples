import { OpenAPIHono } from '@hono/zod-openapi'
import { postSmsVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const smsVerifyHandler = app.openapi(postSmsVerifyRoute, (c) => {
  throw new Error('Not implemented')
})

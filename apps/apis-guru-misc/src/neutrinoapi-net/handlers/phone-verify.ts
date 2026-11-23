import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneVerifyHandler = app.openapi(postPhoneVerifyRoute, (c) => {
  throw new Error('Not implemented')
})

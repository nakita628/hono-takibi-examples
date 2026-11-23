import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneCallRedirectsRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneCallRedirectsHandler = app.openapi(postPhoneCallRedirectsRoute, (c) => {
  throw new Error('Not implemented')
})

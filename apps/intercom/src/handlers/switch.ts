import { OpenAPIHono } from '@hono/zod-openapi'
import { postPhoneCallRedirectsRoute } from '../routes'

const app = new OpenAPIHono()

export const switchHandler = app.openapi(postPhoneCallRedirectsRoute, (c) => {
  throw new Error('Not implemented')
})

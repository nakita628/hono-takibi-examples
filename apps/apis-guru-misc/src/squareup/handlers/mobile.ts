import { OpenAPIHono } from '@hono/zod-openapi'
import { postMobileAuthorizationCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const mobileHandler = app.openapi(postMobileAuthorizationCodeRoute, (c) => {
  throw new Error('Not implemented')
})

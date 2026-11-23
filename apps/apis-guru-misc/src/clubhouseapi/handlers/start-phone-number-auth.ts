import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartPhoneNumberAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const startPhoneNumberAuthHandler = app.openapi(postStartPhoneNumberAuthRoute, (c) => {
  throw new Error('Not implemented')
})

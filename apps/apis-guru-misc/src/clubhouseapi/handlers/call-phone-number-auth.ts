import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallPhoneNumberAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const callPhoneNumberAuthHandler = app.openapi(postCallPhoneNumberAuthRoute, (c) => {
  throw new Error('Not implemented')
})

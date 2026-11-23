import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompletePhoneNumberAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const completePhoneNumberAuthHandler = app.openapi(postCompletePhoneNumberAuthRoute, (c) => {
  throw new Error('Not implemented')
})

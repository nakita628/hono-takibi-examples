import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDCallsRoute } from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app.openapi(postVersionPhoneNumberIDCallsRoute, (c) => {
  throw new Error('Not implemented')
})

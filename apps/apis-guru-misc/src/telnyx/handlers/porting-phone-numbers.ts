import { OpenAPIHono } from '@hono/zod-openapi'
import { getPortingPhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const portingPhoneNumbersHandler = app.openapi(getPortingPhoneNumbersRoute, (c) => {
  throw new Error('Not implemented')
})

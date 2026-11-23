import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvailablePhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const availablePhoneNumbersHandler = app.openapi(getAvailablePhoneNumbersRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getPhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersHandler = app.openapi(getPhoneNumbersRoute, (c) => {
  throw new Error('Not implemented')
})

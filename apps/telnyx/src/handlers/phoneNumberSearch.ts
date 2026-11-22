import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvailablePhoneNumberBlocksRoute, getAvailablePhoneNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumberSearchHandler = app
  .openapi(getAvailablePhoneNumberBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAvailablePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getAvailablePhoneNumberBlocksRoute } from '../routes'

const app = new OpenAPIHono()

export const availablePhoneNumberBlocksHandler = app.openapi(
  getAvailablePhoneNumberBlocksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionPhoneNumberIDMessageHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const messageHistoryHandler = app.openapi(
  getVersionPhoneNumberIDMessageHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

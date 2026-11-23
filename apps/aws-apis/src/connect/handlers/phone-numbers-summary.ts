import { OpenAPIHono } from '@hono/zod-openapi'
import { getPhoneNumbersSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const phoneNumbersSummaryHandler = app.openapi(
  getPhoneNumbersSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

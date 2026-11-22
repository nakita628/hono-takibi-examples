import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDMarketingMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const marketingMessagesHandler = app.openapi(
  postVersionPhoneNumberIDMarketingMessagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

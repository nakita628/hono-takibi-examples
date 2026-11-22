import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionPhoneNumberIDConversationalAutomationRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationalAutomationHandler = app.openapi(
  postVersionPhoneNumberIDConversationalAutomationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

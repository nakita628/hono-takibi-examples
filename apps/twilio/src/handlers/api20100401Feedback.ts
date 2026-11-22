import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidMessagesMessageSidFeedbackJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401FeedbackHandler = app.openapi(
  post20100401AccountsAccountSidMessagesMessageSidFeedbackJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

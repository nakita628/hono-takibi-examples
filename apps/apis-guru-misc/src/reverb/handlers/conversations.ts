import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsConversationIdOfferRoute, postConversationsIdOfferRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsHandler = app
  .openapi(postConversationsConversationIdOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConversationsIdOfferRoute, (c) => {
    throw new Error('Not implemented')
  })

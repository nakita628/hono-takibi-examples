import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokensTokenIndexRoute,
  deleteTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenMemberRoute,
  getTokensTokenRoute,
  getTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenWebhooksRoute,
  postTokensTokenWebhooksRoute,
  putTokensTokenWebhooksIdWebhookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokensTokenWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokensTokenWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTokensTokenWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokensTokenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

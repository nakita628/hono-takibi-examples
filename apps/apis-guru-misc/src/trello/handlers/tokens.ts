import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTokensTokenRoute,
  deleteTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenFieldRoute,
  getTokensTokenMemberFieldRoute,
  getTokensTokenMemberRoute,
  getTokensTokenRoute,
  getTokensTokenWebhooksIdWebhookRoute,
  getTokensTokenWebhooksRoute,
  postTokensTokenWebhooksRoute,
  putTokensTokenWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(deleteTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenMemberFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTokensTokenWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTokensTokenWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTokensTokenWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenWebhooksIdWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTokensTokenFieldRoute, (c) => {
    throw new Error('Not implemented')
  })

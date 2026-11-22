import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute,
  getApiV1AccountsAccountIdWebhooksRoute,
  patchApiV1AccountsAccountIdWebhooksWebhookIdRoute,
  postApiV1AccountsAccountIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })

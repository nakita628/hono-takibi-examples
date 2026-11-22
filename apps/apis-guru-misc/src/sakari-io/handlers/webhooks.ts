import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdWebhooksUrlRoute,
  getV1AccountsAccountIdWebhooksRoute,
  postV1AccountsAccountIdWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdWebhooksUrlRoute, (c) => {
    throw new Error('Not implemented')
  })

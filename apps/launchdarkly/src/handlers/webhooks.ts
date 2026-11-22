import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WebhooksIdRoute,
  getApiV2WebhooksIdRoute,
  getApiV2WebhooksRoute,
  patchApiV2WebhooksIdRoute,
  postApiV2WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getApiV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

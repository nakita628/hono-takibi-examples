import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0WebhooksIdRoute,
  getV0WebhooksIdRoute,
  getV0WebhooksRoute,
  patchV0WebhooksIdRoute,
  postV0WebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postV0WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

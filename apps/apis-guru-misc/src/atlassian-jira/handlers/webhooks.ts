import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3WebhookRoute,
  getRestApi3WebhookFailedRoute,
  getRestApi3WebhookRoute,
  postRestApi3WebhookRoute,
  putRestApi3WebhookRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(deleteRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3WebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3WebhookFailedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3WebhookRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebhooksRegistrationsIdRoute,
  getWebhooksRegistrationsIdRoute,
  getWebhooksRegistrationsRoute,
  postWebhooksRegistrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWebhooksRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWebhooksRegistrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksRegistrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

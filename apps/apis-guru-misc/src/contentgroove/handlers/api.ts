import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ClipsIdRoute,
  deleteApiV1MediasIdRoute,
  deleteApiV1WebhookSubscriptionsIdRoute,
  getApiV1ClipsIdRoute,
  getApiV1ClipsRoute,
  getApiV1DirectUploadsRoute,
  getApiV1MediasIdRoute,
  getApiV1MediasRoute,
  getApiV1WebhookSubscriptionsIdRoute,
  getApiV1WebhookSubscriptionsRoute,
  postApiV1ClipsRoute,
  postApiV1MediasRoute,
  postApiV1WebhookSubscriptionsRoute,
  putApiV1ClipsIdRoute,
  putApiV1MediasIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ClipsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DirectUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MediasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MediasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MediasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MediasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhookSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1WebhookSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1WebhookSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WebhookSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

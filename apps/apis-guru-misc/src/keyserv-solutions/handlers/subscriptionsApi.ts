import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscriptionsApiSerialRoute,
  patchV1SubscriptionsApiDisableRoute,
  patchV1SubscriptionsApiEnableRoute,
  postV1SubscriptionsApiCountRoute,
  postV1SubscriptionsApiDisableRoute,
  postV1SubscriptionsApiEnableRoute,
  postV1SubscriptionsApiFindRoute,
  postV1SubscriptionsApiListRoute,
  postV1SubscriptionsApiRoute,
  postV1SubscriptionsApiSaveRoute,
  postV1SubscriptionsApiSerialRoute,
  putV1SubscriptionsApiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsApiHandler = app
  .openapi(postV1SubscriptionsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SubscriptionsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscriptionsApiDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscriptionsApiEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SubscriptionsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })

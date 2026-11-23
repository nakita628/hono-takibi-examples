import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProductsApiSerialRoute,
  deleteV1SubscriptionsApiSerialRoute,
  getV1KeysApiCurrentSerialRoute,
  getV1KeysApiCustomSerialRoute,
  getV1KeysApiExpirySerialRoute,
  getV1KeysApiFindSerialRoute,
  patchV1ProductsApiRoute,
  patchV1SubscriptionsApiDisableRoute,
  patchV1SubscriptionsApiEnableRoute,
  postV1ProductsApiCountRoute,
  postV1ProductsApiFindRoute,
  postV1ProductsApiListRoute,
  postV1ProductsApiRoute,
  postV1ProductsApiSaveRoute,
  postV1ProductsApiSerialRoute,
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

export const v1Handler = app
  .openapi(getV1KeysApiCurrentSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiCustomSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiExpirySerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1KeysApiFindSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProductsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsApiSerialRoute, (c) => {
    throw new Error('Not implemented')
  })
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

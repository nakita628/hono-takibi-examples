import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConsumerV1ServicesAllocationsIdRoute,
  getConsumerV1ServicesIdAllocationsRoute,
  getConsumerV1ServicesIdResourcesRoute,
  getConsumerV1ServicesIdRoute,
  getConsumerV1ServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getConsumerV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })

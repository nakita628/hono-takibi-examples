import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CancellationsIdRoute,
  deleteV1RunsRunIDRoute,
  deleteV1WebhooksIdRoute,
  getV1CancellationsRoute,
  getV1EventsInternalIDRoute,
  getV1EventsInternalIDRunsRoute,
  getV1EventsRoute,
  getV1RunsRunIDJobsRoute,
  getV1RunsRunIDRoute,
  getV1WebhooksIdRoute,
  getV1WebhooksRoute,
  postV1CancellationsRoute,
  postV1SignalsRoute,
  postV1WebhooksRoute,
  putV1WebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsInternalIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EventsInternalIDRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RunsRunIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RunsRunIDJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SignalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CancellationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })

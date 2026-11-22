import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EventsTriggerTransactionIdRoute,
  postV1EventsTriggerBroadcastRoute,
  postV1EventsTriggerBulkRoute,
  postV1EventsTriggerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postV1EventsTriggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsTriggerBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EventsTriggerBroadcastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EventsTriggerTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

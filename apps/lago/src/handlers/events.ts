import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsRoute,
  getEventsTransactionIdRoute,
  postEventsBatchEstimateInstantFeesRoute,
  postEventsBatchRoute,
  postEventsEstimateFeesRoute,
  postEventsEstimateInstantFeesRoute,
  postEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEstimateFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsEstimateInstantFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsBatchEstimateInstantFeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

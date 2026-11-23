import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsubscriptionsIndexRoute,
  getEventsubscriptionsSubscriptionIdRoute,
  postEventsubscriptionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsubscriptionsHandler = app
  .openapi(deleteEventsubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventsubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

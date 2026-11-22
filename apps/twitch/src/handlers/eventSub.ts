import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEventsubSubscriptionsRoute,
  getEventsubSubscriptionsRoute,
  postEventsubSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventSubHandler = app
  .openapi(postEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSubscriptionsIdRoute,
  getSubscriptionsIdEventsRoute,
  getSubscriptionsIdRoute,
  getSubscriptionsRoute,
  postSubscriptionsRoute,
  putSubscriptionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

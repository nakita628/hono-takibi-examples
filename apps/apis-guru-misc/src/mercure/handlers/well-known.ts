import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWellKnownMercureRoute,
  getWellKnownMercureSubscriptionsRoute,
  getWellKnownMercureSubscriptionsTopicRoute,
  getWellKnownMercureSubscriptionsTopicSubscriberRoute,
  postWellKnownMercureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wellKnownHandler = app
  .openapi(getWellKnownMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWellKnownMercureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownMercureSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownMercureSubscriptionsTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWellKnownMercureSubscriptionsTopicSubscriberRoute, (c) => {
    throw new Error('Not implemented')
  })

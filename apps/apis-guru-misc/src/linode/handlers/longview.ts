import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLongviewClientsClientIdRoute,
  getLongviewClientsClientIdRoute,
  getLongviewClientsRoute,
  getLongviewPlanRoute,
  getLongviewSubscriptionsRoute,
  getLongviewSubscriptionsSubscriptionIdRoute,
  postLongviewClientsRoute,
  putLongviewClientsClientIdRoute,
  putLongviewPlanRoute,
} from '../routes'

const app = new OpenAPIHono()

export const longviewHandler = app
  .openapi(getLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLongviewClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLongviewClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLongviewPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLongviewSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLongviewSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactionsRoute,
  getOmnichannelSubscriptionsOmnichannelSubscriptionIdRoute,
  getOmnichannelSubscriptionsRoute,
  postOmnichannelSubscriptionsOmnichannelSubscriptionIdMoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelSubscriptionsHandler = app
  .openapi(postOmnichannelSubscriptionsOmnichannelSubscriptionIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOmnichannelSubscriptionsOmnichannelSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOmnichannelSubscriptionsOmnichannelSubscriptionIdOmnichannelTransactionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOmnichannelSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

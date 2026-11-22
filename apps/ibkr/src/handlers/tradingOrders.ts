import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute,
  getV1ApiIserverAccountOrdersRoute,
  getV1ApiIserverAccountOrderStatusOrderIdRoute,
  getV1ApiIserverAccountTradesRoute,
  postV1ApiIserverAccountAccountIdOrderOrderIdRoute,
  postV1ApiIserverAccountAccountIdOrdersRoute,
  postV1ApiIserverAccountAccountIdOrdersWhatifRoute,
  postV1ApiIserverNotificationRoute,
  postV1ApiIserverQuestionsSuppressResetRoute,
  postV1ApiIserverQuestionsSuppressRoute,
  postV1ApiIserverReplyReplyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingOrdersHandler = app
  .openapi(postV1ApiIserverAccountAccountIdOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ApiIserverAccountAccountIdOrderOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverAccountAccountIdOrdersWhatifRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverQuestionsSuppressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverQuestionsSuppressResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverReplyReplyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountOrderStatusOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountTradesRoute, (c) => {
    throw new Error('Not implemented')
  })

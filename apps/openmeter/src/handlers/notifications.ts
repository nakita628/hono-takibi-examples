import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1NotificationChannelsChannelIdRoute,
  deleteApiV1NotificationRulesRuleIdRoute,
  getApiV1NotificationChannelsChannelIdRoute,
  getApiV1NotificationChannelsRoute,
  getApiV1NotificationEventsEventIdRoute,
  getApiV1NotificationEventsRoute,
  getApiV1NotificationRulesRoute,
  getApiV1NotificationRulesRuleIdRoute,
  postApiV1NotificationChannelsRoute,
  postApiV1NotificationEventsEventIdResendRoute,
  postApiV1NotificationRulesRoute,
  postApiV1NotificationRulesRuleIdTestRoute,
  putApiV1NotificationChannelsChannelIdRoute,
  putApiV1NotificationRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getApiV1NotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationEventsEventIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRulesRuleIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })

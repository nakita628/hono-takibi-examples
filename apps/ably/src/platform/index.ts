import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePushChannelSubscriptionsRoute,
  deletePushDeviceRegistrationsDeviceIdRoute,
  deletePushDeviceRegistrationsRoute,
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPresenceHistoryRoute,
  getChannelsChannelIdPresenceRoute,
  getChannelsChannelIdRoute,
  getChannelsRoute,
  getPushChannelsRoute,
  getPushChannelSubscriptionsRoute,
  getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute,
  getPushDeviceRegistrationsDeviceIdRoute,
  getPushDeviceRegistrationsRoute,
  getStatsRoute,
  getTimeRoute,
  patchPushDeviceRegistrationsDeviceIdRoute,
  postChannelsChannelIdMessagesRoute,
  postKeysKeyNameRequestTokenRoute,
  postPushChannelSubscriptionsRoute,
  postPushDeviceRegistrationsRoute,
  postPushPublishRoute,
  putPushDeviceRegistrationsDeviceIdRoute,
} from './routes'
import {
  deletePushChannelSubscriptionsRouteHandler,
  deletePushDeviceRegistrationsDeviceIdRouteHandler,
  deletePushDeviceRegistrationsRouteHandler,
  getChannelsChannelIdMessagesRouteHandler,
  getChannelsChannelIdPresenceHistoryRouteHandler,
  getChannelsChannelIdPresenceRouteHandler,
  getChannelsChannelIdRouteHandler,
  getChannelsRouteHandler,
  getPushChannelsRouteHandler,
  getPushChannelSubscriptionsRouteHandler,
  getPushDeviceRegistrationsDeviceIdResetUpdateTokenRouteHandler,
  getPushDeviceRegistrationsDeviceIdRouteHandler,
  getPushDeviceRegistrationsRouteHandler,
  getStatsRouteHandler,
  getTimeRouteHandler,
  patchPushDeviceRegistrationsDeviceIdRouteHandler,
  postChannelsChannelIdMessagesRouteHandler,
  postKeysKeyNameRequestTokenRouteHandler,
  postPushChannelSubscriptionsRouteHandler,
  postPushDeviceRegistrationsRouteHandler,
  postPushPublishRouteHandler,
  putPushDeviceRegistrationsDeviceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getChannelsChannelIdMessagesRoute, getChannelsChannelIdMessagesRouteHandler)
  .openapi(postChannelsChannelIdMessagesRoute, postChannelsChannelIdMessagesRouteHandler)
  .openapi(getChannelsChannelIdPresenceRoute, getChannelsChannelIdPresenceRouteHandler)
  .openapi(
    getChannelsChannelIdPresenceHistoryRoute,
    getChannelsChannelIdPresenceHistoryRouteHandler,
  )
  .openapi(getChannelsChannelIdRoute, getChannelsChannelIdRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(getPushDeviceRegistrationsRoute, getPushDeviceRegistrationsRouteHandler)
  .openapi(postPushDeviceRegistrationsRoute, postPushDeviceRegistrationsRouteHandler)
  .openapi(deletePushDeviceRegistrationsRoute, deletePushDeviceRegistrationsRouteHandler)
  .openapi(getPushDeviceRegistrationsDeviceIdRoute, getPushDeviceRegistrationsDeviceIdRouteHandler)
  .openapi(putPushDeviceRegistrationsDeviceIdRoute, putPushDeviceRegistrationsDeviceIdRouteHandler)
  .openapi(
    patchPushDeviceRegistrationsDeviceIdRoute,
    patchPushDeviceRegistrationsDeviceIdRouteHandler,
  )
  .openapi(
    deletePushDeviceRegistrationsDeviceIdRoute,
    deletePushDeviceRegistrationsDeviceIdRouteHandler,
  )
  .openapi(
    getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute,
    getPushDeviceRegistrationsDeviceIdResetUpdateTokenRouteHandler,
  )
  .openapi(getPushChannelSubscriptionsRoute, getPushChannelSubscriptionsRouteHandler)
  .openapi(postPushChannelSubscriptionsRoute, postPushChannelSubscriptionsRouteHandler)
  .openapi(deletePushChannelSubscriptionsRoute, deletePushChannelSubscriptionsRouteHandler)
  .openapi(getPushChannelsRoute, getPushChannelsRouteHandler)
  .openapi(postPushPublishRoute, postPushPublishRouteHandler)
  .openapi(postKeysKeyNameRequestTokenRoute, postKeysKeyNameRequestTokenRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getTimeRoute, getTimeRouteHandler)

export default app

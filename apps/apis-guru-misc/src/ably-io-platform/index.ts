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
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(getChannelsChannelIdRoute, getChannelsChannelIdRouteHandler)
  .openapi(getChannelsChannelIdMessagesRoute, getChannelsChannelIdMessagesRouteHandler)
  .openapi(postChannelsChannelIdMessagesRoute, postChannelsChannelIdMessagesRouteHandler)
  .openapi(getChannelsChannelIdPresenceRoute, getChannelsChannelIdPresenceRouteHandler)
  .openapi(
    getChannelsChannelIdPresenceHistoryRoute,
    getChannelsChannelIdPresenceHistoryRouteHandler,
  )
  .openapi(postKeysKeyNameRequestTokenRoute, postKeysKeyNameRequestTokenRouteHandler)
  .openapi(deletePushChannelSubscriptionsRoute, deletePushChannelSubscriptionsRouteHandler)
  .openapi(getPushChannelSubscriptionsRoute, getPushChannelSubscriptionsRouteHandler)
  .openapi(postPushChannelSubscriptionsRoute, postPushChannelSubscriptionsRouteHandler)
  .openapi(getPushChannelsRoute, getPushChannelsRouteHandler)
  .openapi(deletePushDeviceRegistrationsRoute, deletePushDeviceRegistrationsRouteHandler)
  .openapi(getPushDeviceRegistrationsRoute, getPushDeviceRegistrationsRouteHandler)
  .openapi(postPushDeviceRegistrationsRoute, postPushDeviceRegistrationsRouteHandler)
  .openapi(
    deletePushDeviceRegistrationsDeviceIdRoute,
    deletePushDeviceRegistrationsDeviceIdRouteHandler,
  )
  .openapi(getPushDeviceRegistrationsDeviceIdRoute, getPushDeviceRegistrationsDeviceIdRouteHandler)
  .openapi(
    patchPushDeviceRegistrationsDeviceIdRoute,
    patchPushDeviceRegistrationsDeviceIdRouteHandler,
  )
  .openapi(putPushDeviceRegistrationsDeviceIdRoute, putPushDeviceRegistrationsDeviceIdRouteHandler)
  .openapi(
    getPushDeviceRegistrationsDeviceIdResetUpdateTokenRoute,
    getPushDeviceRegistrationsDeviceIdResetUpdateTokenRouteHandler,
  )
  .openapi(postPushPublishRoute, postPushPublishRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getTimeRoute, getTimeRouteHandler)

export default app

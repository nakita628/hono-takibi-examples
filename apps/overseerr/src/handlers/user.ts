import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIdPushSubscriptionEndpointRoute,
  deleteUserUserIdRoute,
  getUserRoute,
  getUserUserIdPushSubscriptionEndpointRoute,
  getUserUserIdPushSubscriptionsRoute,
  getUserUserIdQuotaRoute,
  getUserUserIdRequestsRoute,
  getUserUserIdRoute,
  getUserUserIdSettingsMainRoute,
  getUserUserIdSettingsNotificationsRoute,
  getUserUserIdSettingsPasswordRoute,
  getUserUserIdSettingsPermissionsRoute,
  getUserUserIdWatchDataRoute,
  getUserUserIdWatchlistRoute,
  postUserImportFromPlexRoute,
  postUserRegisterPushSubscriptionRoute,
  postUserRoute,
  postUserUserIdSettingsMainRoute,
  postUserUserIdSettingsNotificationsRoute,
  postUserUserIdSettingsPasswordRoute,
  postUserUserIdSettingsPermissionsRoute,
  putUserRoute,
  putUserUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserImportFromPlexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserRegisterPushSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPushSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdPushSubscriptionEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdPushSubscriptionEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdWatchlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdSettingsMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdSettingsMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdSettingsPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdSettingsPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdSettingsNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdSettingsNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdSettingsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIdSettingsPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdWatchDataRoute, (c) => {
    throw new Error('Not implemented')
  })

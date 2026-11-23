import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeAlertWordsRoute,
  deleteUsersMeAndroidGcmRegIdRoute,
  deleteUsersMeApnsDeviceTokenRoute,
  deleteUsersMeAvatarRoute,
  deleteUsersMeMutedUsersMutedUserIdRoute,
  deleteUsersMeProfileDataRoute,
  deleteUsersMeRoute,
  deleteUsersMeSubscriptionsRoute,
  deleteUsersUserIdRoute,
  getUsersEmailRoute,
  getUsersMeAlertWordsRoute,
  getUsersMeRoute,
  getUsersMeStreamIdTopicsRoute,
  getUsersMeSubscriptionsRoute,
  getUsersRoute,
  getUsersUserIdChannelsRoute,
  getUsersUserIdOrEmailPresenceRoute,
  getUsersUserIdRoute,
  getUsersUserIdStatusRoute,
  getUsersUserIdSubscriptionsStreamIdRoute,
  patchUsersEmailRoute,
  patchUsersMeProfileDataRoute,
  patchUsersMeSubscriptionsMutedTopicsRoute,
  patchUsersMeSubscriptionsStreamIdRoute,
  patchUsersUserIdRoute,
  postUsersMeAlertWordsRoute,
  postUsersMeAndroidGcmRegIdRoute,
  postUsersMeApiKeyRegenerateRoute,
  postUsersMeApnsDeviceTokenRoute,
  postUsersMeAvatarRoute,
  postUsersMeMutedUsersMutedUserIdRoute,
  postUsersMePresenceRoute,
  postUsersMeStatusRoute,
  postUsersMeSubscriptionsPropertiesRoute,
  postUsersMeSubscriptionsRoute,
  postUsersRoute,
  postUsersUserIdReactivateRoute,
  postUsersUserIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdOrEmailPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeApiKeyRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAlertWordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeProfileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeProfileDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeStreamIdTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeSubscriptionsMutedTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeMutedUsersMutedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeMutedUsersMutedUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeApnsDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeApnsDeviceTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAndroidGcmRegIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAndroidGcmRegIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdSubscriptionsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeAvatarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeSubscriptionsPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeSubscriptionsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })

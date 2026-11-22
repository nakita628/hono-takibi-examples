import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
  deleteApiUsersUserNotificationsNotificationRoute,
  deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute,
  deleteApiUsersUserRoute,
  deleteApiUsersUserViewsViewRoute,
  deleteApiUsersUserWebhooksWebhookRoute,
  getApiUsersRoute,
  getApiUsersUserGetStatsRoute,
  getApiUsersUserLinkedIdentitiesLinkedIdentityRoute,
  getApiUsersUserLinkedIdentitiesRoute,
  getApiUsersUserNotificationsRoute,
  getApiUsersUserPersonalAccessTokensRoute,
  getApiUsersUserRoute,
  getApiUsersUserSettingsRoute,
  getApiUsersUserSettingsSettingRoute,
  getApiUsersUserStatsRoute,
  getApiUsersUserUsageRoute,
  getApiUsersUserViewsRoute,
  getApiUsersUserViewsViewRoute,
  getApiUsersUserWebhooksRoute,
  getApiUsersUserWebhooksWebhookGetSigningSecretRoute,
  patchApiUsersUserNotificationsNotificationRoute,
  patchApiUsersUserRoute,
  patchApiUsersUserSettingsSettingRoute,
  patchApiUsersUserViewsViewRoute,
  patchApiUsersUserWebhooksWebhookRoute,
  postApiUsersBatchGetRoute,
  postApiUsersRoute,
  postApiUsersUserImportMemosRoute,
  postApiUsersUserLinkedIdentitiesRoute,
  postApiUsersUserPersonalAccessTokensRoute,
  postApiUsersUserViewsReorderRoute,
  postApiUsersUserViewsRoute,
  postApiUsersUserWebhooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userServiceHandler = app
  .openapi(getApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserLinkedIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserLinkedIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserLinkedIdentitiesLinkedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserNotificationsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserNotificationsNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserPersonalAccessTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserSettingsSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserViewsViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserViewsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersUserWebhooksWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersUserWebhooksWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserWebhooksWebhookGetSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersUserGetStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersUserImportMemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUsersBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })

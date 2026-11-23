import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiNotificationsDeleteSelectedJsonRoute,
  deleteApiPinnedSearchesIdJsonRoute,
  deleteApiUsersIdJsonRoute,
  getApiNotificationsJsonRoute,
  getApiNotificationsLookupJsonRoute,
  getApiNotificationsMarkReadSelectedJsonRoute,
  getApiNotificationsSyncingJsonRoute,
  getApiNotificationsUnreadCountJsonRoute,
  getApiPinnedSearchesIdJsonRoute,
  getApiPinnedSearchesJsonRoute,
  getApiUsersProfileJsonRoute,
  patchApiPinnedSearchesIdJsonRoute,
  patchApiUsersIdJsonRoute,
  postApiNotificationsArchiveSelectedJsonRoute,
  postApiNotificationsIdStarJsonRoute,
  postApiNotificationsMuteSelectedJsonRoute,
  postApiNotificationsSyncJsonRoute,
  postApiPinnedSearchesJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiNotificationsArchiveSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiNotificationsDeleteSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsLookupJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsMarkReadSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsMuteSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsIdStarJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsSyncJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsSyncingJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsUnreadCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPinnedSearchesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPinnedSearchesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiUsersProfileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiUsersIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

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
} from './routes'
import {
  deleteApiNotificationsDeleteSelectedJsonRouteHandler,
  deleteApiPinnedSearchesIdJsonRouteHandler,
  deleteApiUsersIdJsonRouteHandler,
  getApiNotificationsJsonRouteHandler,
  getApiNotificationsLookupJsonRouteHandler,
  getApiNotificationsMarkReadSelectedJsonRouteHandler,
  getApiNotificationsSyncingJsonRouteHandler,
  getApiNotificationsUnreadCountJsonRouteHandler,
  getApiPinnedSearchesIdJsonRouteHandler,
  getApiPinnedSearchesJsonRouteHandler,
  getApiUsersProfileJsonRouteHandler,
  patchApiPinnedSearchesIdJsonRouteHandler,
  patchApiUsersIdJsonRouteHandler,
  postApiNotificationsArchiveSelectedJsonRouteHandler,
  postApiNotificationsIdStarJsonRouteHandler,
  postApiNotificationsMuteSelectedJsonRouteHandler,
  postApiNotificationsSyncJsonRouteHandler,
  postApiPinnedSearchesJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postApiNotificationsArchiveSelectedJsonRoute,
    postApiNotificationsArchiveSelectedJsonRouteHandler,
  )
  .openapi(
    deleteApiNotificationsDeleteSelectedJsonRoute,
    deleteApiNotificationsDeleteSelectedJsonRouteHandler,
  )
  .openapi(getApiNotificationsJsonRoute, getApiNotificationsJsonRouteHandler)
  .openapi(getApiNotificationsLookupJsonRoute, getApiNotificationsLookupJsonRouteHandler)
  .openapi(
    getApiNotificationsMarkReadSelectedJsonRoute,
    getApiNotificationsMarkReadSelectedJsonRouteHandler,
  )
  .openapi(
    postApiNotificationsMuteSelectedJsonRoute,
    postApiNotificationsMuteSelectedJsonRouteHandler,
  )
  .openapi(postApiNotificationsIdStarJsonRoute, postApiNotificationsIdStarJsonRouteHandler)
  .openapi(postApiNotificationsSyncJsonRoute, postApiNotificationsSyncJsonRouteHandler)
  .openapi(getApiNotificationsSyncingJsonRoute, getApiNotificationsSyncingJsonRouteHandler)
  .openapi(getApiNotificationsUnreadCountJsonRoute, getApiNotificationsUnreadCountJsonRouteHandler)
  .openapi(postApiPinnedSearchesJsonRoute, postApiPinnedSearchesJsonRouteHandler)
  .openapi(getApiPinnedSearchesJsonRoute, getApiPinnedSearchesJsonRouteHandler)
  .openapi(deleteApiPinnedSearchesIdJsonRoute, deleteApiPinnedSearchesIdJsonRouteHandler)
  .openapi(getApiPinnedSearchesIdJsonRoute, getApiPinnedSearchesIdJsonRouteHandler)
  .openapi(patchApiPinnedSearchesIdJsonRoute, patchApiPinnedSearchesIdJsonRouteHandler)
  .openapi(getApiUsersProfileJsonRoute, getApiUsersProfileJsonRouteHandler)
  .openapi(patchApiUsersIdJsonRoute, patchApiUsersIdJsonRouteHandler)
  .openapi(deleteApiUsersIdJsonRoute, deleteApiUsersIdJsonRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsCalendarIdAclRuleIdRoute,
  deleteCalendarsCalendarIdEventsEventIdRoute,
  deleteCalendarsCalendarIdRoute,
  deleteUsersMeCalendarListCalendarIdRoute,
  getCalendarsCalendarIdAclRoute,
  getCalendarsCalendarIdAclRuleIdRoute,
  getCalendarsCalendarIdEventsEventIdInstancesRoute,
  getCalendarsCalendarIdEventsEventIdRoute,
  getCalendarsCalendarIdEventsRoute,
  getCalendarsCalendarIdRoute,
  getColorsRoute,
  getUsersMeCalendarListCalendarIdRoute,
  getUsersMeCalendarListRoute,
  getUsersMeSettingsRoute,
  getUsersMeSettingsSettingRoute,
  patchCalendarsCalendarIdAclRuleIdRoute,
  patchCalendarsCalendarIdEventsEventIdRoute,
  patchCalendarsCalendarIdRoute,
  patchUsersMeCalendarListCalendarIdRoute,
  postCalendarsCalendarIdAclRoute,
  postCalendarsCalendarIdAclWatchRoute,
  postCalendarsCalendarIdClearRoute,
  postCalendarsCalendarIdEventsEventIdMoveRoute,
  postCalendarsCalendarIdEventsImportRoute,
  postCalendarsCalendarIdEventsQuickAddRoute,
  postCalendarsCalendarIdEventsRoute,
  postCalendarsCalendarIdEventsWatchRoute,
  postCalendarsRoute,
  postChannelsStopRoute,
  postFreeBusyRoute,
  postUsersMeCalendarListRoute,
  postUsersMeCalendarListWatchRoute,
  postUsersMeSettingsWatchRoute,
  putCalendarsCalendarIdAclRuleIdRoute,
  putCalendarsCalendarIdEventsEventIdRoute,
  putCalendarsCalendarIdRoute,
  putUsersMeCalendarListCalendarIdRoute,
} from './routes'
import {
  deleteCalendarsCalendarIdAclRuleIdRouteHandler,
  deleteCalendarsCalendarIdEventsEventIdRouteHandler,
  deleteCalendarsCalendarIdRouteHandler,
  deleteUsersMeCalendarListCalendarIdRouteHandler,
  getCalendarsCalendarIdAclRouteHandler,
  getCalendarsCalendarIdAclRuleIdRouteHandler,
  getCalendarsCalendarIdEventsEventIdInstancesRouteHandler,
  getCalendarsCalendarIdEventsEventIdRouteHandler,
  getCalendarsCalendarIdEventsRouteHandler,
  getCalendarsCalendarIdRouteHandler,
  getColorsRouteHandler,
  getUsersMeCalendarListCalendarIdRouteHandler,
  getUsersMeCalendarListRouteHandler,
  getUsersMeSettingsRouteHandler,
  getUsersMeSettingsSettingRouteHandler,
  patchCalendarsCalendarIdAclRuleIdRouteHandler,
  patchCalendarsCalendarIdEventsEventIdRouteHandler,
  patchCalendarsCalendarIdRouteHandler,
  patchUsersMeCalendarListCalendarIdRouteHandler,
  postCalendarsCalendarIdAclRouteHandler,
  postCalendarsCalendarIdAclWatchRouteHandler,
  postCalendarsCalendarIdClearRouteHandler,
  postCalendarsCalendarIdEventsEventIdMoveRouteHandler,
  postCalendarsCalendarIdEventsImportRouteHandler,
  postCalendarsCalendarIdEventsQuickAddRouteHandler,
  postCalendarsCalendarIdEventsRouteHandler,
  postCalendarsCalendarIdEventsWatchRouteHandler,
  postCalendarsRouteHandler,
  postChannelsStopRouteHandler,
  postFreeBusyRouteHandler,
  postUsersMeCalendarListRouteHandler,
  postUsersMeCalendarListWatchRouteHandler,
  postUsersMeSettingsWatchRouteHandler,
  putCalendarsCalendarIdAclRuleIdRouteHandler,
  putCalendarsCalendarIdEventsEventIdRouteHandler,
  putCalendarsCalendarIdRouteHandler,
  putUsersMeCalendarListCalendarIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCalendarsRoute, postCalendarsRouteHandler)
  .openapi(deleteCalendarsCalendarIdRoute, deleteCalendarsCalendarIdRouteHandler)
  .openapi(getCalendarsCalendarIdRoute, getCalendarsCalendarIdRouteHandler)
  .openapi(patchCalendarsCalendarIdRoute, patchCalendarsCalendarIdRouteHandler)
  .openapi(putCalendarsCalendarIdRoute, putCalendarsCalendarIdRouteHandler)
  .openapi(getCalendarsCalendarIdAclRoute, getCalendarsCalendarIdAclRouteHandler)
  .openapi(postCalendarsCalendarIdAclRoute, postCalendarsCalendarIdAclRouteHandler)
  .openapi(postCalendarsCalendarIdAclWatchRoute, postCalendarsCalendarIdAclWatchRouteHandler)
  .openapi(deleteCalendarsCalendarIdAclRuleIdRoute, deleteCalendarsCalendarIdAclRuleIdRouteHandler)
  .openapi(getCalendarsCalendarIdAclRuleIdRoute, getCalendarsCalendarIdAclRuleIdRouteHandler)
  .openapi(patchCalendarsCalendarIdAclRuleIdRoute, patchCalendarsCalendarIdAclRuleIdRouteHandler)
  .openapi(putCalendarsCalendarIdAclRuleIdRoute, putCalendarsCalendarIdAclRuleIdRouteHandler)
  .openapi(postCalendarsCalendarIdClearRoute, postCalendarsCalendarIdClearRouteHandler)
  .openapi(getCalendarsCalendarIdEventsRoute, getCalendarsCalendarIdEventsRouteHandler)
  .openapi(postCalendarsCalendarIdEventsRoute, postCalendarsCalendarIdEventsRouteHandler)
  .openapi(
    postCalendarsCalendarIdEventsImportRoute,
    postCalendarsCalendarIdEventsImportRouteHandler,
  )
  .openapi(
    postCalendarsCalendarIdEventsQuickAddRoute,
    postCalendarsCalendarIdEventsQuickAddRouteHandler,
  )
  .openapi(postCalendarsCalendarIdEventsWatchRoute, postCalendarsCalendarIdEventsWatchRouteHandler)
  .openapi(
    deleteCalendarsCalendarIdEventsEventIdRoute,
    deleteCalendarsCalendarIdEventsEventIdRouteHandler,
  )
  .openapi(
    getCalendarsCalendarIdEventsEventIdRoute,
    getCalendarsCalendarIdEventsEventIdRouteHandler,
  )
  .openapi(
    patchCalendarsCalendarIdEventsEventIdRoute,
    patchCalendarsCalendarIdEventsEventIdRouteHandler,
  )
  .openapi(
    putCalendarsCalendarIdEventsEventIdRoute,
    putCalendarsCalendarIdEventsEventIdRouteHandler,
  )
  .openapi(
    getCalendarsCalendarIdEventsEventIdInstancesRoute,
    getCalendarsCalendarIdEventsEventIdInstancesRouteHandler,
  )
  .openapi(
    postCalendarsCalendarIdEventsEventIdMoveRoute,
    postCalendarsCalendarIdEventsEventIdMoveRouteHandler,
  )
  .openapi(postChannelsStopRoute, postChannelsStopRouteHandler)
  .openapi(getColorsRoute, getColorsRouteHandler)
  .openapi(postFreeBusyRoute, postFreeBusyRouteHandler)
  .openapi(getUsersMeCalendarListRoute, getUsersMeCalendarListRouteHandler)
  .openapi(postUsersMeCalendarListRoute, postUsersMeCalendarListRouteHandler)
  .openapi(postUsersMeCalendarListWatchRoute, postUsersMeCalendarListWatchRouteHandler)
  .openapi(
    deleteUsersMeCalendarListCalendarIdRoute,
    deleteUsersMeCalendarListCalendarIdRouteHandler,
  )
  .openapi(getUsersMeCalendarListCalendarIdRoute, getUsersMeCalendarListCalendarIdRouteHandler)
  .openapi(patchUsersMeCalendarListCalendarIdRoute, patchUsersMeCalendarListCalendarIdRouteHandler)
  .openapi(putUsersMeCalendarListCalendarIdRoute, putUsersMeCalendarListCalendarIdRouteHandler)
  .openapi(getUsersMeSettingsRoute, getUsersMeSettingsRouteHandler)
  .openapi(postUsersMeSettingsWatchRoute, postUsersMeSettingsWatchRouteHandler)
  .openapi(getUsersMeSettingsSettingRoute, getUsersMeSettingsSettingRouteHandler)

export default app

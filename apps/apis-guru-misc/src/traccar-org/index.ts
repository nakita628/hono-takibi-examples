import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributesComputedIdRoute,
  deleteCalendarsIdRoute,
  deleteCommandsIdRoute,
  deleteDevicesIdRoute,
  deleteDriversIdRoute,
  deleteGeofencesIdRoute,
  deleteGroupsIdRoute,
  deleteMaintenanceIdRoute,
  deleteNotificationsIdRoute,
  deletePermissionsRoute,
  deleteSessionRoute,
  deleteUsersIdRoute,
  getAttributesComputedRoute,
  getCalendarsRoute,
  getCommandsRoute,
  getCommandsSendRoute,
  getCommandsTypesRoute,
  getDevicesRoute,
  getDriversRoute,
  getEventsIdRoute,
  getGeofencesRoute,
  getGroupsRoute,
  getMaintenanceRoute,
  getNotificationsRoute,
  getNotificationsTypesRoute,
  getPositionsRoute,
  getReportsEventsRoute,
  getReportsRouteRoute,
  getReportsStopsRoute,
  getReportsSummaryRoute,
  getReportsTripsRoute,
  getServerRoute,
  getSessionRoute,
  getStatisticsRoute,
  getUsersRoute,
  postAttributesComputedRoute,
  postCalendarsRoute,
  postCommandsRoute,
  postCommandsSendRoute,
  postDevicesRoute,
  postDriversRoute,
  postGeofencesRoute,
  postGroupsRoute,
  postMaintenanceRoute,
  postNotificationsRoute,
  postNotificationsTestRoute,
  postPermissionsRoute,
  postSessionRoute,
  postUsersRoute,
  putAttributesComputedIdRoute,
  putCalendarsIdRoute,
  putCommandsIdRoute,
  putDevicesIdAccumulatorsRoute,
  putDevicesIdRoute,
  putDriversIdRoute,
  putGeofencesIdRoute,
  putGroupsIdRoute,
  putMaintenanceIdRoute,
  putNotificationsIdRoute,
  putServerRoute,
  putUsersIdRoute,
} from './routes'
import {
  deleteAttributesComputedIdRouteHandler,
  deleteCalendarsIdRouteHandler,
  deleteCommandsIdRouteHandler,
  deleteDevicesIdRouteHandler,
  deleteDriversIdRouteHandler,
  deleteGeofencesIdRouteHandler,
  deleteGroupsIdRouteHandler,
  deleteMaintenanceIdRouteHandler,
  deleteNotificationsIdRouteHandler,
  deletePermissionsRouteHandler,
  deleteSessionRouteHandler,
  deleteUsersIdRouteHandler,
  getAttributesComputedRouteHandler,
  getCalendarsRouteHandler,
  getCommandsRouteHandler,
  getCommandsSendRouteHandler,
  getCommandsTypesRouteHandler,
  getDevicesRouteHandler,
  getDriversRouteHandler,
  getEventsIdRouteHandler,
  getGeofencesRouteHandler,
  getGroupsRouteHandler,
  getMaintenanceRouteHandler,
  getNotificationsRouteHandler,
  getNotificationsTypesRouteHandler,
  getPositionsRouteHandler,
  getReportsEventsRouteHandler,
  getReportsRouteRouteHandler,
  getReportsStopsRouteHandler,
  getReportsSummaryRouteHandler,
  getReportsTripsRouteHandler,
  getServerRouteHandler,
  getSessionRouteHandler,
  getStatisticsRouteHandler,
  getUsersRouteHandler,
  postAttributesComputedRouteHandler,
  postCalendarsRouteHandler,
  postCommandsRouteHandler,
  postCommandsSendRouteHandler,
  postDevicesRouteHandler,
  postDriversRouteHandler,
  postGeofencesRouteHandler,
  postGroupsRouteHandler,
  postMaintenanceRouteHandler,
  postNotificationsRouteHandler,
  postNotificationsTestRouteHandler,
  postPermissionsRouteHandler,
  postSessionRouteHandler,
  postUsersRouteHandler,
  putAttributesComputedIdRouteHandler,
  putCalendarsIdRouteHandler,
  putCommandsIdRouteHandler,
  putDevicesIdAccumulatorsRouteHandler,
  putDevicesIdRouteHandler,
  putDriversIdRouteHandler,
  putGeofencesIdRouteHandler,
  putGroupsIdRouteHandler,
  putMaintenanceIdRouteHandler,
  putNotificationsIdRouteHandler,
  putServerRouteHandler,
  putUsersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAttributesComputedRoute, getAttributesComputedRouteHandler)
  .openapi(postAttributesComputedRoute, postAttributesComputedRouteHandler)
  .openapi(deleteAttributesComputedIdRoute, deleteAttributesComputedIdRouteHandler)
  .openapi(putAttributesComputedIdRoute, putAttributesComputedIdRouteHandler)
  .openapi(getCalendarsRoute, getCalendarsRouteHandler)
  .openapi(postCalendarsRoute, postCalendarsRouteHandler)
  .openapi(deleteCalendarsIdRoute, deleteCalendarsIdRouteHandler)
  .openapi(putCalendarsIdRoute, putCalendarsIdRouteHandler)
  .openapi(getCommandsRoute, getCommandsRouteHandler)
  .openapi(postCommandsRoute, postCommandsRouteHandler)
  .openapi(getCommandsSendRoute, getCommandsSendRouteHandler)
  .openapi(postCommandsSendRoute, postCommandsSendRouteHandler)
  .openapi(getCommandsTypesRoute, getCommandsTypesRouteHandler)
  .openapi(deleteCommandsIdRoute, deleteCommandsIdRouteHandler)
  .openapi(putCommandsIdRoute, putCommandsIdRouteHandler)
  .openapi(getDevicesRoute, getDevicesRouteHandler)
  .openapi(postDevicesRoute, postDevicesRouteHandler)
  .openapi(deleteDevicesIdRoute, deleteDevicesIdRouteHandler)
  .openapi(putDevicesIdRoute, putDevicesIdRouteHandler)
  .openapi(putDevicesIdAccumulatorsRoute, putDevicesIdAccumulatorsRouteHandler)
  .openapi(getDriversRoute, getDriversRouteHandler)
  .openapi(postDriversRoute, postDriversRouteHandler)
  .openapi(deleteDriversIdRoute, deleteDriversIdRouteHandler)
  .openapi(putDriversIdRoute, putDriversIdRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)
  .openapi(getGeofencesRoute, getGeofencesRouteHandler)
  .openapi(postGeofencesRoute, postGeofencesRouteHandler)
  .openapi(deleteGeofencesIdRoute, deleteGeofencesIdRouteHandler)
  .openapi(putGeofencesIdRoute, putGeofencesIdRouteHandler)
  .openapi(getGroupsRoute, getGroupsRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(deleteGroupsIdRoute, deleteGroupsIdRouteHandler)
  .openapi(putGroupsIdRoute, putGroupsIdRouteHandler)
  .openapi(getMaintenanceRoute, getMaintenanceRouteHandler)
  .openapi(postMaintenanceRoute, postMaintenanceRouteHandler)
  .openapi(deleteMaintenanceIdRoute, deleteMaintenanceIdRouteHandler)
  .openapi(putMaintenanceIdRoute, putMaintenanceIdRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(postNotificationsRoute, postNotificationsRouteHandler)
  .openapi(postNotificationsTestRoute, postNotificationsTestRouteHandler)
  .openapi(getNotificationsTypesRoute, getNotificationsTypesRouteHandler)
  .openapi(deleteNotificationsIdRoute, deleteNotificationsIdRouteHandler)
  .openapi(putNotificationsIdRoute, putNotificationsIdRouteHandler)
  .openapi(deletePermissionsRoute, deletePermissionsRouteHandler)
  .openapi(postPermissionsRoute, postPermissionsRouteHandler)
  .openapi(getPositionsRoute, getPositionsRouteHandler)
  .openapi(getReportsEventsRoute, getReportsEventsRouteHandler)
  .openapi(getReportsRouteRoute, getReportsRouteRouteHandler)
  .openapi(getReportsStopsRoute, getReportsStopsRouteHandler)
  .openapi(getReportsSummaryRoute, getReportsSummaryRouteHandler)
  .openapi(getReportsTripsRoute, getReportsTripsRouteHandler)
  .openapi(getServerRoute, getServerRouteHandler)
  .openapi(putServerRoute, putServerRouteHandler)
  .openapi(deleteSessionRoute, deleteSessionRouteHandler)
  .openapi(getSessionRoute, getSessionRouteHandler)
  .openapi(postSessionRoute, postSessionRouteHandler)
  .openapi(getStatisticsRoute, getStatisticsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(putUsersIdRoute, putUsersIdRouteHandler)

export default app

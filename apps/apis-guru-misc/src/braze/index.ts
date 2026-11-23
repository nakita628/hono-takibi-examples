import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCampaignsDataSeriesRoute,
  getCampaignsDetailsRoute,
  getCampaignsListRoute,
  getCanvasDataSeriesRoute,
  getCanvasDataSummaryRoute,
  getCanvasDetailsRoute,
  getCanvasListRoute,
  getContentBlocksInfoRoute,
  getContentBlocksListRoute,
  getEmailHardBouncesRoute,
  getEmailUnsubscribesRoute,
  getEventsDataSeriesRoute,
  getEventsListRoute,
  getFeedDataSeriesRoute,
  getFeedDetailsRoute,
  getFeedListRoute,
  getKpiDauDataSeriesRoute,
  getKpiMauDataSeriesRoute,
  getKpiNewUsersDataSeriesRoute,
  getKpiUninstallsDataSeriesRoute,
  getMessagesScheduledBroadcastsRoute,
  getSegmentsDataSeriesRoute,
  getSegmentsDetailsRoute,
  getSegmentsListRoute,
  getSendsDataSeriesRoute,
  getSessionsDataSeriesRoute,
  getSubscriptionStatusGetRoute,
  getSubscriptionUserStatusRoute,
  getTemplatesEmailInfoRoute,
  getTemplatesEmailListRoute,
  postCanvasTriggerScheduleCreateRoute,
} from './routes'
import {
  getCampaignsDataSeriesRouteHandler,
  getCampaignsDetailsRouteHandler,
  getCampaignsListRouteHandler,
  getCanvasDataSeriesRouteHandler,
  getCanvasDataSummaryRouteHandler,
  getCanvasDetailsRouteHandler,
  getCanvasListRouteHandler,
  getContentBlocksInfoRouteHandler,
  getContentBlocksListRouteHandler,
  getEmailHardBouncesRouteHandler,
  getEmailUnsubscribesRouteHandler,
  getEventsDataSeriesRouteHandler,
  getEventsListRouteHandler,
  getFeedDataSeriesRouteHandler,
  getFeedDetailsRouteHandler,
  getFeedListRouteHandler,
  getKpiDauDataSeriesRouteHandler,
  getKpiMauDataSeriesRouteHandler,
  getKpiNewUsersDataSeriesRouteHandler,
  getKpiUninstallsDataSeriesRouteHandler,
  getMessagesScheduledBroadcastsRouteHandler,
  getSegmentsDataSeriesRouteHandler,
  getSegmentsDetailsRouteHandler,
  getSegmentsListRouteHandler,
  getSendsDataSeriesRouteHandler,
  getSessionsDataSeriesRouteHandler,
  getSubscriptionStatusGetRouteHandler,
  getSubscriptionUserStatusRouteHandler,
  getTemplatesEmailInfoRouteHandler,
  getTemplatesEmailListRouteHandler,
  postCanvasTriggerScheduleCreateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCampaignsDataSeriesRoute, getCampaignsDataSeriesRouteHandler)
  .openapi(getCampaignsDetailsRoute, getCampaignsDetailsRouteHandler)
  .openapi(getCampaignsListRoute, getCampaignsListRouteHandler)
  .openapi(getCanvasDataSeriesRoute, getCanvasDataSeriesRouteHandler)
  .openapi(getCanvasDataSummaryRoute, getCanvasDataSummaryRouteHandler)
  .openapi(getCanvasDetailsRoute, getCanvasDetailsRouteHandler)
  .openapi(getCanvasListRoute, getCanvasListRouteHandler)
  .openapi(postCanvasTriggerScheduleCreateRoute, postCanvasTriggerScheduleCreateRouteHandler)
  .openapi(getContentBlocksInfoRoute, getContentBlocksInfoRouteHandler)
  .openapi(getContentBlocksListRoute, getContentBlocksListRouteHandler)
  .openapi(getEmailHardBouncesRoute, getEmailHardBouncesRouteHandler)
  .openapi(getEmailUnsubscribesRoute, getEmailUnsubscribesRouteHandler)
  .openapi(getEventsDataSeriesRoute, getEventsDataSeriesRouteHandler)
  .openapi(getEventsListRoute, getEventsListRouteHandler)
  .openapi(getFeedDataSeriesRoute, getFeedDataSeriesRouteHandler)
  .openapi(getFeedDetailsRoute, getFeedDetailsRouteHandler)
  .openapi(getFeedListRoute, getFeedListRouteHandler)
  .openapi(getKpiDauDataSeriesRoute, getKpiDauDataSeriesRouteHandler)
  .openapi(getKpiMauDataSeriesRoute, getKpiMauDataSeriesRouteHandler)
  .openapi(getKpiNewUsersDataSeriesRoute, getKpiNewUsersDataSeriesRouteHandler)
  .openapi(getKpiUninstallsDataSeriesRoute, getKpiUninstallsDataSeriesRouteHandler)
  .openapi(getMessagesScheduledBroadcastsRoute, getMessagesScheduledBroadcastsRouteHandler)
  .openapi(getSegmentsDataSeriesRoute, getSegmentsDataSeriesRouteHandler)
  .openapi(getSegmentsDetailsRoute, getSegmentsDetailsRouteHandler)
  .openapi(getSegmentsListRoute, getSegmentsListRouteHandler)
  .openapi(getSendsDataSeriesRoute, getSendsDataSeriesRouteHandler)
  .openapi(getSessionsDataSeriesRoute, getSessionsDataSeriesRouteHandler)
  .openapi(getSubscriptionStatusGetRoute, getSubscriptionStatusGetRouteHandler)
  .openapi(getSubscriptionUserStatusRoute, getSubscriptionUserStatusRouteHandler)
  .openapi(getTemplatesEmailInfoRoute, getTemplatesEmailInfoRouteHandler)
  .openapi(getTemplatesEmailListRoute, getTemplatesEmailListRouteHandler)

export default app

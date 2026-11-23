import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRnsPubSubscriptionsIdItemsItemIdRoute,
  getApiRnsPubCyclesCycleIdRoute,
  getApiRnsPubCyclesRoute,
  getApiRnsPubSubscriptionsIdRoute,
  getApiRnsPubSubscriptionsRoute,
  getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute,
  getApiRnsPvtPlansIdRoute,
  getApiRnsPvtPlansRoute,
  getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute,
  getApiRnsPvtReportsRoute,
  getApiRnsSettingsRoute,
  patchApiRnsPubSubscriptionsIdItemsItemIdRoute,
  patchApiRnsPubSubscriptionsIdRoute,
  postApiRnsPubCyclesCycleIdRetryRoute,
  postApiRnsPubSubscriptionsIdItemsRoute,
  postApiRnsPubSubscriptionsIdSimulateRoute,
  postApiRnsPubSubscriptionsRoute,
  postApiRnsPubSubscriptionsSimulateRoute,
  postApiRnsPvtReportsReportNameDocumentsRoute,
  postApiRnsSettingsRoute,
} from './routes'
import {
  deleteApiRnsPubSubscriptionsIdItemsItemIdRouteHandler,
  getApiRnsPubCyclesCycleIdRouteHandler,
  getApiRnsPubCyclesRouteHandler,
  getApiRnsPubSubscriptionsIdRouteHandler,
  getApiRnsPubSubscriptionsRouteHandler,
  getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRouteHandler,
  getApiRnsPvtPlansIdRouteHandler,
  getApiRnsPvtPlansRouteHandler,
  getApiRnsPvtReportsReportNameDocumentsDocumentIdRouteHandler,
  getApiRnsPvtReportsRouteHandler,
  getApiRnsSettingsRouteHandler,
  patchApiRnsPubSubscriptionsIdItemsItemIdRouteHandler,
  patchApiRnsPubSubscriptionsIdRouteHandler,
  postApiRnsPubCyclesCycleIdRetryRouteHandler,
  postApiRnsPubSubscriptionsIdItemsRouteHandler,
  postApiRnsPubSubscriptionsIdSimulateRouteHandler,
  postApiRnsPubSubscriptionsRouteHandler,
  postApiRnsPubSubscriptionsSimulateRouteHandler,
  postApiRnsPvtReportsReportNameDocumentsRouteHandler,
  postApiRnsSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiRnsPubCyclesRoute, getApiRnsPubCyclesRouteHandler)
  .openapi(getApiRnsPubCyclesCycleIdRoute, getApiRnsPubCyclesCycleIdRouteHandler)
  .openapi(postApiRnsPubCyclesCycleIdRetryRoute, postApiRnsPubCyclesCycleIdRetryRouteHandler)
  .openapi(getApiRnsPubSubscriptionsRoute, getApiRnsPubSubscriptionsRouteHandler)
  .openapi(postApiRnsPubSubscriptionsRoute, postApiRnsPubSubscriptionsRouteHandler)
  .openapi(postApiRnsPubSubscriptionsSimulateRoute, postApiRnsPubSubscriptionsSimulateRouteHandler)
  .openapi(getApiRnsPubSubscriptionsIdRoute, getApiRnsPubSubscriptionsIdRouteHandler)
  .openapi(patchApiRnsPubSubscriptionsIdRoute, patchApiRnsPubSubscriptionsIdRouteHandler)
  .openapi(postApiRnsPubSubscriptionsIdItemsRoute, postApiRnsPubSubscriptionsIdItemsRouteHandler)
  .openapi(
    deleteApiRnsPubSubscriptionsIdItemsItemIdRoute,
    deleteApiRnsPubSubscriptionsIdItemsItemIdRouteHandler,
  )
  .openapi(
    patchApiRnsPubSubscriptionsIdItemsItemIdRoute,
    patchApiRnsPubSubscriptionsIdItemsItemIdRouteHandler,
  )
  .openapi(
    postApiRnsPubSubscriptionsIdSimulateRoute,
    postApiRnsPubSubscriptionsIdSimulateRouteHandler,
  )
  .openapi(
    getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute,
    getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRouteHandler,
  )
  .openapi(getApiRnsPvtPlansRoute, getApiRnsPvtPlansRouteHandler)
  .openapi(getApiRnsPvtPlansIdRoute, getApiRnsPvtPlansIdRouteHandler)
  .openapi(getApiRnsPvtReportsRoute, getApiRnsPvtReportsRouteHandler)
  .openapi(
    postApiRnsPvtReportsReportNameDocumentsRoute,
    postApiRnsPvtReportsReportNameDocumentsRouteHandler,
  )
  .openapi(
    getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute,
    getApiRnsPvtReportsReportNameDocumentsDocumentIdRouteHandler,
  )
  .openapi(getApiRnsSettingsRoute, getApiRnsSettingsRouteHandler)
  .openapi(postApiRnsSettingsRoute, postApiRnsSettingsRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1betaNameRoute,
  getV1betaAccountsRoute,
  getV1betaAccountSummariesRoute,
  getV1betaNameRoute,
  getV1betaParentConversionEventsRoute,
  getV1betaParentCustomDimensionsRoute,
  getV1betaParentCustomMetricsRoute,
  getV1betaParentDataStreamsRoute,
  getV1betaParentFirebaseLinksRoute,
  getV1betaParentGoogleAdsLinksRoute,
  getV1betaParentMeasurementProtocolSecretsRoute,
  getV1betaPropertiesRoute,
  patchV1betaNameRoute,
  postV1betaAccountSearchChangeHistoryEventsRoute,
  postV1betaAccountsProvisionAccountTicketRoute,
  postV1betaEntityRunAccessReportRoute,
  postV1betaNameArchiveRoute,
  postV1betaParentConversionEventsRoute,
  postV1betaParentCustomDimensionsRoute,
  postV1betaParentCustomMetricsRoute,
  postV1betaParentDataStreamsRoute,
  postV1betaParentFirebaseLinksRoute,
  postV1betaParentGoogleAdsLinksRoute,
  postV1betaParentMeasurementProtocolSecretsRoute,
  postV1betaPropertiesRoute,
  postV1betaPropertyAcknowledgeUserDataCollectionRoute,
} from './routes'
import {
  deleteV1betaNameRouteHandler,
  getV1betaAccountsRouteHandler,
  getV1betaAccountSummariesRouteHandler,
  getV1betaNameRouteHandler,
  getV1betaParentConversionEventsRouteHandler,
  getV1betaParentCustomDimensionsRouteHandler,
  getV1betaParentCustomMetricsRouteHandler,
  getV1betaParentDataStreamsRouteHandler,
  getV1betaParentFirebaseLinksRouteHandler,
  getV1betaParentGoogleAdsLinksRouteHandler,
  getV1betaParentMeasurementProtocolSecretsRouteHandler,
  getV1betaPropertiesRouteHandler,
  patchV1betaNameRouteHandler,
  postV1betaAccountSearchChangeHistoryEventsRouteHandler,
  postV1betaAccountsProvisionAccountTicketRouteHandler,
  postV1betaEntityRunAccessReportRouteHandler,
  postV1betaNameArchiveRouteHandler,
  postV1betaParentConversionEventsRouteHandler,
  postV1betaParentCustomDimensionsRouteHandler,
  postV1betaParentCustomMetricsRouteHandler,
  postV1betaParentDataStreamsRouteHandler,
  postV1betaParentFirebaseLinksRouteHandler,
  postV1betaParentGoogleAdsLinksRouteHandler,
  postV1betaParentMeasurementProtocolSecretsRouteHandler,
  postV1betaPropertiesRouteHandler,
  postV1betaPropertyAcknowledgeUserDataCollectionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1betaAccountSummariesRoute, getV1betaAccountSummariesRouteHandler)
  .openapi(getV1betaAccountsRoute, getV1betaAccountsRouteHandler)
  .openapi(
    postV1betaAccountsProvisionAccountTicketRoute,
    postV1betaAccountsProvisionAccountTicketRouteHandler,
  )
  .openapi(getV1betaPropertiesRoute, getV1betaPropertiesRouteHandler)
  .openapi(postV1betaPropertiesRoute, postV1betaPropertiesRouteHandler)
  .openapi(
    postV1betaAccountSearchChangeHistoryEventsRoute,
    postV1betaAccountSearchChangeHistoryEventsRouteHandler,
  )
  .openapi(postV1betaEntityRunAccessReportRoute, postV1betaEntityRunAccessReportRouteHandler)
  .openapi(deleteV1betaNameRoute, deleteV1betaNameRouteHandler)
  .openapi(getV1betaNameRoute, getV1betaNameRouteHandler)
  .openapi(patchV1betaNameRoute, patchV1betaNameRouteHandler)
  .openapi(postV1betaNameArchiveRoute, postV1betaNameArchiveRouteHandler)
  .openapi(getV1betaParentConversionEventsRoute, getV1betaParentConversionEventsRouteHandler)
  .openapi(postV1betaParentConversionEventsRoute, postV1betaParentConversionEventsRouteHandler)
  .openapi(getV1betaParentCustomDimensionsRoute, getV1betaParentCustomDimensionsRouteHandler)
  .openapi(postV1betaParentCustomDimensionsRoute, postV1betaParentCustomDimensionsRouteHandler)
  .openapi(getV1betaParentCustomMetricsRoute, getV1betaParentCustomMetricsRouteHandler)
  .openapi(postV1betaParentCustomMetricsRoute, postV1betaParentCustomMetricsRouteHandler)
  .openapi(getV1betaParentDataStreamsRoute, getV1betaParentDataStreamsRouteHandler)
  .openapi(postV1betaParentDataStreamsRoute, postV1betaParentDataStreamsRouteHandler)
  .openapi(getV1betaParentFirebaseLinksRoute, getV1betaParentFirebaseLinksRouteHandler)
  .openapi(postV1betaParentFirebaseLinksRoute, postV1betaParentFirebaseLinksRouteHandler)
  .openapi(getV1betaParentGoogleAdsLinksRoute, getV1betaParentGoogleAdsLinksRouteHandler)
  .openapi(postV1betaParentGoogleAdsLinksRoute, postV1betaParentGoogleAdsLinksRouteHandler)
  .openapi(
    getV1betaParentMeasurementProtocolSecretsRoute,
    getV1betaParentMeasurementProtocolSecretsRouteHandler,
  )
  .openapi(
    postV1betaParentMeasurementProtocolSecretsRoute,
    postV1betaParentMeasurementProtocolSecretsRouteHandler,
  )
  .openapi(
    postV1betaPropertyAcknowledgeUserDataCollectionRoute,
    postV1betaPropertyAcknowledgeUserDataCollectionRouteHandler,
  )

export default app

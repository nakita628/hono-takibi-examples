import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertsAlertIdRoute,
  deleteAlertsAlertIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsRoute,
  getAccountsAccountIdAdclientsAdClientIdUrlchannelsRoute,
  getAccountsAccountIdAdclientsRoute,
  getAccountsAccountIdAlertsRoute,
  getAccountsAccountIdPaymentsRoute,
  getAccountsAccountIdReportsRoute,
  getAccountsAccountIdReportsSavedReportIdRoute,
  getAccountsAccountIdReportsSavedRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSavedadstylesRoute,
  getAccountsAccountIdSavedadstylesSavedAdStyleIdRoute,
  getAccountsRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAdclientsAdClientIdAdunitsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
  getAdclientsAdClientIdUrlchannelsRoute,
  getAdclientsRoute,
  getAlertsRoute,
  getMetadataDimensionsRoute,
  getMetadataMetricsRoute,
  getPaymentsRoute,
  getReportsRoute,
  getReportsSavedReportIdRoute,
  getReportsSavedRoute,
  getSavedadstylesRoute,
  getSavedadstylesSavedAdStyleIdRoute,
} from './routes'
import {
  deleteAccountsAccountIdAlertsAlertIdRouteHandler,
  deleteAlertsAlertIdRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdcodeRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdUrlchannelsRouteHandler,
  getAccountsAccountIdAdclientsRouteHandler,
  getAccountsAccountIdAlertsRouteHandler,
  getAccountsAccountIdPaymentsRouteHandler,
  getAccountsAccountIdReportsRouteHandler,
  getAccountsAccountIdReportsSavedReportIdRouteHandler,
  getAccountsAccountIdReportsSavedRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsAccountIdSavedadstylesRouteHandler,
  getAccountsAccountIdSavedadstylesSavedAdStyleIdRouteHandler,
  getAccountsRouteHandler,
  getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRouteHandler,
  getAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  getAdclientsAdClientIdAdunitsRouteHandler,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRouteHandler,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  getAdclientsAdClientIdCustomchannelsRouteHandler,
  getAdclientsAdClientIdUrlchannelsRouteHandler,
  getAdclientsRouteHandler,
  getAlertsRouteHandler,
  getMetadataDimensionsRouteHandler,
  getMetadataMetricsRouteHandler,
  getPaymentsRouteHandler,
  getReportsRouteHandler,
  getReportsSavedReportIdRouteHandler,
  getReportsSavedRouteHandler,
  getSavedadstylesRouteHandler,
  getSavedadstylesSavedAdStyleIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdAdclientsRoute, getAccountsAccountIdAdclientsRouteHandler)
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdcodeRoute,
    getAccountsAccountIdAdclientsAdClientIdAdcodeRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsRoute,
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdUrlchannelsRoute,
    getAccountsAccountIdAdclientsAdClientIdUrlchannelsRouteHandler,
  )
  .openapi(getAccountsAccountIdAlertsRoute, getAccountsAccountIdAlertsRouteHandler)
  .openapi(
    deleteAccountsAccountIdAlertsAlertIdRoute,
    deleteAccountsAccountIdAlertsAlertIdRouteHandler,
  )
  .openapi(getAccountsAccountIdPaymentsRoute, getAccountsAccountIdPaymentsRouteHandler)
  .openapi(getAccountsAccountIdReportsRoute, getAccountsAccountIdReportsRouteHandler)
  .openapi(getAccountsAccountIdReportsSavedRoute, getAccountsAccountIdReportsSavedRouteHandler)
  .openapi(
    getAccountsAccountIdReportsSavedReportIdRoute,
    getAccountsAccountIdReportsSavedReportIdRouteHandler,
  )
  .openapi(getAccountsAccountIdSavedadstylesRoute, getAccountsAccountIdSavedadstylesRouteHandler)
  .openapi(
    getAccountsAccountIdSavedadstylesSavedAdStyleIdRoute,
    getAccountsAccountIdSavedadstylesSavedAdStyleIdRouteHandler,
  )
  .openapi(getAdclientsRoute, getAdclientsRouteHandler)
  .openapi(getAdclientsAdClientIdAdunitsRoute, getAdclientsAdClientIdAdunitsRouteHandler)
  .openapi(
    getAdclientsAdClientIdAdunitsAdUnitIdRoute,
    getAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
    getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
    getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdCustomchannelsRoute,
    getAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
    getAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
    getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRouteHandler,
  )
  .openapi(getAdclientsAdClientIdUrlchannelsRoute, getAdclientsAdClientIdUrlchannelsRouteHandler)
  .openapi(getAlertsRoute, getAlertsRouteHandler)
  .openapi(deleteAlertsAlertIdRoute, deleteAlertsAlertIdRouteHandler)
  .openapi(getMetadataDimensionsRoute, getMetadataDimensionsRouteHandler)
  .openapi(getMetadataMetricsRoute, getMetadataMetricsRouteHandler)
  .openapi(getPaymentsRoute, getPaymentsRouteHandler)
  .openapi(getReportsRoute, getReportsRouteHandler)
  .openapi(getReportsSavedRoute, getReportsSavedRouteHandler)
  .openapi(getReportsSavedReportIdRoute, getReportsSavedReportIdRouteHandler)
  .openapi(getSavedadstylesRoute, getSavedadstylesRouteHandler)
  .openapi(getSavedadstylesSavedAdStyleIdRoute, getSavedadstylesSavedAdStyleIdRouteHandler)

export default app

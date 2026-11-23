import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBouncesIdRoute,
  deleteBouncesRoute,
  deleteCampaignsIdRoute,
  deleteImportSubscribersRoute,
  deleteListsListIdRoute,
  deleteMaintenanceAnalyticsTypeRoute,
  deleteMaintenanceSubscribersTypeRoute,
  deleteMaintenanceSubscriptionsUnconfirmedRoute,
  deleteMediaIdRoute,
  deleteSubscribersIdBouncesRoute,
  deleteSubscribersIdRoute,
  deleteSubscribersRoute,
  deleteTemplatesIdRoute,
  getBouncesIdRoute,
  getBouncesRoute,
  getCampaignsAnalyticsTypeRoute,
  getCampaignsIdPreviewRoute,
  getCampaignsIdRoute,
  getCampaignsRoute,
  getCampaignsRunningStatsRoute,
  getConfigRoute,
  getDashboardChartsRoute,
  getDashboardCountsRoute,
  getHealthRoute,
  getImportSubscribersLogsRoute,
  getImportSubscribersRoute,
  getLangLangRoute,
  getListsListIdRoute,
  getListsRoute,
  getLogsRoute,
  getMediaIdRoute,
  getMediaRoute,
  getPublicListsRoute,
  getSettingsRoute,
  getSubscribersIdBouncesRoute,
  getSubscribersIdExportRoute,
  getSubscribersIdRoute,
  getSubscribersRoute,
  getTemplatesIdPreviewRoute,
  getTemplatesIdRoute,
  getTemplatesRoute,
  postAdminReloadRoute,
  postCampaignsIdContentRoute,
  postCampaignsIdPreviewRoute,
  postCampaignsIdTestRoute,
  postCampaignsIdTextRoute,
  postCampaignsRoute,
  postImportSubscribersRoute,
  postListsRoute,
  postMediaRoute,
  postPublicSubscriptionRoute,
  postSettingsSmtpTestRoute,
  postSubscribersIdOptinRoute,
  postSubscribersQueryDeleteRoute,
  postSubscribersRoute,
  postTemplatesPreviewRoute,
  postTemplatesRoute,
  postTxRoute,
  putCampaignsIdArchiveRoute,
  putCampaignsIdRoute,
  putCampaignsIdStatusRoute,
  putListsListIdRoute,
  putSettingsRoute,
  putSubscribersBlocklistRoute,
  putSubscribersIdBlocklistRoute,
  putSubscribersIdRoute,
  putSubscribersListsIdRoute,
  putSubscribersListsRoute,
  putSubscribersQueryBlocklistRoute,
  putSubscribersQueryListsRoute,
  putTemplatesIdDefaultRoute,
  putTemplatesIdRoute,
} from './routes'
import {
  deleteBouncesIdRouteHandler,
  deleteBouncesRouteHandler,
  deleteCampaignsIdRouteHandler,
  deleteImportSubscribersRouteHandler,
  deleteListsListIdRouteHandler,
  deleteMaintenanceAnalyticsTypeRouteHandler,
  deleteMaintenanceSubscribersTypeRouteHandler,
  deleteMaintenanceSubscriptionsUnconfirmedRouteHandler,
  deleteMediaIdRouteHandler,
  deleteSubscribersIdBouncesRouteHandler,
  deleteSubscribersIdRouteHandler,
  deleteSubscribersRouteHandler,
  deleteTemplatesIdRouteHandler,
  getBouncesIdRouteHandler,
  getBouncesRouteHandler,
  getCampaignsAnalyticsTypeRouteHandler,
  getCampaignsIdPreviewRouteHandler,
  getCampaignsIdRouteHandler,
  getCampaignsRouteHandler,
  getCampaignsRunningStatsRouteHandler,
  getConfigRouteHandler,
  getDashboardChartsRouteHandler,
  getDashboardCountsRouteHandler,
  getHealthRouteHandler,
  getImportSubscribersLogsRouteHandler,
  getImportSubscribersRouteHandler,
  getLangLangRouteHandler,
  getListsListIdRouteHandler,
  getListsRouteHandler,
  getLogsRouteHandler,
  getMediaIdRouteHandler,
  getMediaRouteHandler,
  getPublicListsRouteHandler,
  getSettingsRouteHandler,
  getSubscribersIdBouncesRouteHandler,
  getSubscribersIdExportRouteHandler,
  getSubscribersIdRouteHandler,
  getSubscribersRouteHandler,
  getTemplatesIdPreviewRouteHandler,
  getTemplatesIdRouteHandler,
  getTemplatesRouteHandler,
  postAdminReloadRouteHandler,
  postCampaignsIdContentRouteHandler,
  postCampaignsIdPreviewRouteHandler,
  postCampaignsIdTestRouteHandler,
  postCampaignsIdTextRouteHandler,
  postCampaignsRouteHandler,
  postImportSubscribersRouteHandler,
  postListsRouteHandler,
  postMediaRouteHandler,
  postPublicSubscriptionRouteHandler,
  postSettingsSmtpTestRouteHandler,
  postSubscribersIdOptinRouteHandler,
  postSubscribersQueryDeleteRouteHandler,
  postSubscribersRouteHandler,
  postTemplatesPreviewRouteHandler,
  postTemplatesRouteHandler,
  postTxRouteHandler,
  putCampaignsIdArchiveRouteHandler,
  putCampaignsIdRouteHandler,
  putCampaignsIdStatusRouteHandler,
  putListsListIdRouteHandler,
  putSettingsRouteHandler,
  putSubscribersBlocklistRouteHandler,
  putSubscribersIdBlocklistRouteHandler,
  putSubscribersIdRouteHandler,
  putSubscribersListsIdRouteHandler,
  putSubscribersListsRouteHandler,
  putSubscribersQueryBlocklistRouteHandler,
  putSubscribersQueryListsRouteHandler,
  putTemplatesIdDefaultRouteHandler,
  putTemplatesIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getLangLangRoute, getLangLangRouteHandler)
  .openapi(getDashboardChartsRoute, getDashboardChartsRouteHandler)
  .openapi(getDashboardCountsRoute, getDashboardCountsRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(putSettingsRoute, putSettingsRouteHandler)
  .openapi(postSettingsSmtpTestRoute, postSettingsSmtpTestRouteHandler)
  .openapi(postAdminReloadRoute, postAdminReloadRouteHandler)
  .openapi(getLogsRoute, getLogsRouteHandler)
  .openapi(getSubscribersRoute, getSubscribersRouteHandler)
  .openapi(postSubscribersRoute, postSubscribersRouteHandler)
  .openapi(deleteSubscribersRoute, deleteSubscribersRouteHandler)
  .openapi(getSubscribersIdRoute, getSubscribersIdRouteHandler)
  .openapi(putSubscribersIdRoute, putSubscribersIdRouteHandler)
  .openapi(deleteSubscribersIdRoute, deleteSubscribersIdRouteHandler)
  .openapi(putSubscribersListsRoute, putSubscribersListsRouteHandler)
  .openapi(putSubscribersListsIdRoute, putSubscribersListsIdRouteHandler)
  .openapi(putSubscribersBlocklistRoute, putSubscribersBlocklistRouteHandler)
  .openapi(putSubscribersIdBlocklistRoute, putSubscribersIdBlocklistRouteHandler)
  .openapi(getSubscribersIdExportRoute, getSubscribersIdExportRouteHandler)
  .openapi(getSubscribersIdBouncesRoute, getSubscribersIdBouncesRouteHandler)
  .openapi(deleteSubscribersIdBouncesRoute, deleteSubscribersIdBouncesRouteHandler)
  .openapi(postSubscribersIdOptinRoute, postSubscribersIdOptinRouteHandler)
  .openapi(postSubscribersQueryDeleteRoute, postSubscribersQueryDeleteRouteHandler)
  .openapi(putSubscribersQueryBlocklistRoute, putSubscribersQueryBlocklistRouteHandler)
  .openapi(putSubscribersQueryListsRoute, putSubscribersQueryListsRouteHandler)
  .openapi(getBouncesRoute, getBouncesRouteHandler)
  .openapi(deleteBouncesRoute, deleteBouncesRouteHandler)
  .openapi(getBouncesIdRoute, getBouncesIdRouteHandler)
  .openapi(deleteBouncesIdRoute, deleteBouncesIdRouteHandler)
  .openapi(getListsRoute, getListsRouteHandler)
  .openapi(postListsRoute, postListsRouteHandler)
  .openapi(getListsListIdRoute, getListsListIdRouteHandler)
  .openapi(putListsListIdRoute, putListsListIdRouteHandler)
  .openapi(deleteListsListIdRoute, deleteListsListIdRouteHandler)
  .openapi(getImportSubscribersRoute, getImportSubscribersRouteHandler)
  .openapi(postImportSubscribersRoute, postImportSubscribersRouteHandler)
  .openapi(deleteImportSubscribersRoute, deleteImportSubscribersRouteHandler)
  .openapi(getImportSubscribersLogsRoute, getImportSubscribersLogsRouteHandler)
  .openapi(getCampaignsRoute, getCampaignsRouteHandler)
  .openapi(postCampaignsRoute, postCampaignsRouteHandler)
  .openapi(getCampaignsIdRoute, getCampaignsIdRouteHandler)
  .openapi(putCampaignsIdRoute, putCampaignsIdRouteHandler)
  .openapi(deleteCampaignsIdRoute, deleteCampaignsIdRouteHandler)
  .openapi(getCampaignsRunningStatsRoute, getCampaignsRunningStatsRouteHandler)
  .openapi(getCampaignsAnalyticsTypeRoute, getCampaignsAnalyticsTypeRouteHandler)
  .openapi(getCampaignsIdPreviewRoute, getCampaignsIdPreviewRouteHandler)
  .openapi(postCampaignsIdPreviewRoute, postCampaignsIdPreviewRouteHandler)
  .openapi(postCampaignsIdTextRoute, postCampaignsIdTextRouteHandler)
  .openapi(putCampaignsIdStatusRoute, putCampaignsIdStatusRouteHandler)
  .openapi(putCampaignsIdArchiveRoute, putCampaignsIdArchiveRouteHandler)
  .openapi(postCampaignsIdContentRoute, postCampaignsIdContentRouteHandler)
  .openapi(postCampaignsIdTestRoute, postCampaignsIdTestRouteHandler)
  .openapi(getMediaRoute, getMediaRouteHandler)
  .openapi(postMediaRoute, postMediaRouteHandler)
  .openapi(getMediaIdRoute, getMediaIdRouteHandler)
  .openapi(deleteMediaIdRoute, deleteMediaIdRouteHandler)
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(getTemplatesIdRoute, getTemplatesIdRouteHandler)
  .openapi(putTemplatesIdRoute, putTemplatesIdRouteHandler)
  .openapi(deleteTemplatesIdRoute, deleteTemplatesIdRouteHandler)
  .openapi(postTemplatesPreviewRoute, postTemplatesPreviewRouteHandler)
  .openapi(getTemplatesIdPreviewRoute, getTemplatesIdPreviewRouteHandler)
  .openapi(putTemplatesIdDefaultRoute, putTemplatesIdDefaultRouteHandler)
  .openapi(postTxRoute, postTxRouteHandler)
  .openapi(deleteMaintenanceSubscribersTypeRoute, deleteMaintenanceSubscribersTypeRouteHandler)
  .openapi(deleteMaintenanceAnalyticsTypeRoute, deleteMaintenanceAnalyticsTypeRouteHandler)
  .openapi(
    deleteMaintenanceSubscriptionsUnconfirmedRoute,
    deleteMaintenanceSubscriptionsUnconfirmedRouteHandler,
  )
  .openapi(getPublicListsRoute, getPublicListsRouteHandler)
  .openapi(postPublicSubscriptionRoute, postPublicSubscriptionRouteHandler)

export default app

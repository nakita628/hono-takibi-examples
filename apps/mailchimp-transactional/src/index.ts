import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAllowlistsAddRoute,
  postAllowlistsDeleteRoute,
  postAllowlistsListRoute,
  postExportsActivityRoute,
  postExportsAllowlistRoute,
  postExportsInfoRoute,
  postExportsListRoute,
  postExportsRejectsRoute,
  postExportsWhitelistRoute,
  postInboundAddDomainRoute,
  postInboundAddRouteRoute,
  postInboundCheckDomainRoute,
  postInboundDeleteDomainRoute,
  postInboundDeleteRouteRoute,
  postInboundDomainsRoute,
  postInboundRoutesRoute,
  postInboundSendRawRoute,
  postInboundUpdateRouteRoute,
  postIpsCancelWarmupRoute,
  postIpsCheckCustomDnsRoute,
  postIpsCreatePoolRoute,
  postIpsDeletePoolRoute,
  postIpsDeleteRoute,
  postIpsInfoRoute,
  postIpsListPoolsRoute,
  postIpsListRoute,
  postIpsPoolInfoRoute,
  postIpsProvisionRoute,
  postIpsSetCustomDnsRoute,
  postIpsSetPoolRoute,
  postIpsStartWarmupRoute,
  postMctemplatesInfoRoute,
  postMctemplatesListRoute,
  postMctemplatesRenderRoute,
  postMctemplatesTimeSeriesRoute,
  postMessagesCancelScheduledRoute,
  postMessagesContentRoute,
  postMessagesInfoRoute,
  postMessagesListScheduledRoute,
  postMessagesParseRoute,
  postMessagesRescheduleRoute,
  postMessagesSearchRoute,
  postMessagesSearchTimeSeriesRoute,
  postMessagesSendMcTemplateRoute,
  postMessagesSendRawRoute,
  postMessagesSendRoute,
  postMessagesSendSmsRoute,
  postMessagesSendTemplateRoute,
  postMetadataAddRoute,
  postMetadataDeleteRoute,
  postMetadataListRoute,
  postMetadataUpdateRoute,
  postRejectsAddRoute,
  postRejectsAddSmsRoute,
  postRejectsDeleteRoute,
  postRejectsDeleteSmsRoute,
  postRejectsListRoute,
  postRejectsListSmsRoute,
  postSendersAddDomainRoute,
  postSendersCheckDomainRoute,
  postSendersDeleteDomainRoute,
  postSendersDomainsRoute,
  postSendersInfoRoute,
  postSendersListRoute,
  postSendersTimeSeriesRoute,
  postSendersVerifyDomainRoute,
  postSubaccountsAddRoute,
  postSubaccountsDeleteRoute,
  postSubaccountsInfoRoute,
  postSubaccountsListRoute,
  postSubaccountsPauseRoute,
  postSubaccountsResumeRoute,
  postSubaccountsUpdateRoute,
  postTagsAllTimeSeriesRoute,
  postTagsDeleteRoute,
  postTagsInfoRoute,
  postTagsListRoute,
  postTagsTimeSeriesRoute,
  postTemplatesAddRoute,
  postTemplatesDeleteRoute,
  postTemplatesInfoRoute,
  postTemplatesListRoute,
  postTemplatesPublishRoute,
  postTemplatesRenderRoute,
  postTemplatesTimeSeriesRoute,
  postTemplatesUpdateRoute,
  postUrlsAddTrackingDomainRoute,
  postUrlsCheckTrackingDomainRoute,
  postUrlsDeleteTrackingDomainRoute,
  postUrlsTrackingDomainsRoute,
  postUsersInfoRoute,
  postUsersPing2Route,
  postUsersPingRoute,
  postUsersSendersRoute,
  postWebhooksAddRoute,
  postWebhooksDeleteRoute,
  postWebhooksInfoRoute,
  postWebhooksListRoute,
  postWebhooksUpdateRoute,
} from './routes'
import {
  postAllowlistsAddRouteHandler,
  postAllowlistsDeleteRouteHandler,
  postAllowlistsListRouteHandler,
  postExportsActivityRouteHandler,
  postExportsAllowlistRouteHandler,
  postExportsInfoRouteHandler,
  postExportsListRouteHandler,
  postExportsRejectsRouteHandler,
  postExportsWhitelistRouteHandler,
  postInboundAddDomainRouteHandler,
  postInboundAddRouteRouteHandler,
  postInboundCheckDomainRouteHandler,
  postInboundDeleteDomainRouteHandler,
  postInboundDeleteRouteRouteHandler,
  postInboundDomainsRouteHandler,
  postInboundRoutesRouteHandler,
  postInboundSendRawRouteHandler,
  postInboundUpdateRouteRouteHandler,
  postIpsCancelWarmupRouteHandler,
  postIpsCheckCustomDnsRouteHandler,
  postIpsCreatePoolRouteHandler,
  postIpsDeletePoolRouteHandler,
  postIpsDeleteRouteHandler,
  postIpsInfoRouteHandler,
  postIpsListPoolsRouteHandler,
  postIpsListRouteHandler,
  postIpsPoolInfoRouteHandler,
  postIpsProvisionRouteHandler,
  postIpsSetCustomDnsRouteHandler,
  postIpsSetPoolRouteHandler,
  postIpsStartWarmupRouteHandler,
  postMctemplatesInfoRouteHandler,
  postMctemplatesListRouteHandler,
  postMctemplatesRenderRouteHandler,
  postMctemplatesTimeSeriesRouteHandler,
  postMessagesCancelScheduledRouteHandler,
  postMessagesContentRouteHandler,
  postMessagesInfoRouteHandler,
  postMessagesListScheduledRouteHandler,
  postMessagesParseRouteHandler,
  postMessagesRescheduleRouteHandler,
  postMessagesSearchRouteHandler,
  postMessagesSearchTimeSeriesRouteHandler,
  postMessagesSendMcTemplateRouteHandler,
  postMessagesSendRawRouteHandler,
  postMessagesSendRouteHandler,
  postMessagesSendSmsRouteHandler,
  postMessagesSendTemplateRouteHandler,
  postMetadataAddRouteHandler,
  postMetadataDeleteRouteHandler,
  postMetadataListRouteHandler,
  postMetadataUpdateRouteHandler,
  postRejectsAddRouteHandler,
  postRejectsAddSmsRouteHandler,
  postRejectsDeleteRouteHandler,
  postRejectsDeleteSmsRouteHandler,
  postRejectsListRouteHandler,
  postRejectsListSmsRouteHandler,
  postSendersAddDomainRouteHandler,
  postSendersCheckDomainRouteHandler,
  postSendersDeleteDomainRouteHandler,
  postSendersDomainsRouteHandler,
  postSendersInfoRouteHandler,
  postSendersListRouteHandler,
  postSendersTimeSeriesRouteHandler,
  postSendersVerifyDomainRouteHandler,
  postSubaccountsAddRouteHandler,
  postSubaccountsDeleteRouteHandler,
  postSubaccountsInfoRouteHandler,
  postSubaccountsListRouteHandler,
  postSubaccountsPauseRouteHandler,
  postSubaccountsResumeRouteHandler,
  postSubaccountsUpdateRouteHandler,
  postTagsAllTimeSeriesRouteHandler,
  postTagsDeleteRouteHandler,
  postTagsInfoRouteHandler,
  postTagsListRouteHandler,
  postTagsTimeSeriesRouteHandler,
  postTemplatesAddRouteHandler,
  postTemplatesDeleteRouteHandler,
  postTemplatesInfoRouteHandler,
  postTemplatesListRouteHandler,
  postTemplatesPublishRouteHandler,
  postTemplatesRenderRouteHandler,
  postTemplatesTimeSeriesRouteHandler,
  postTemplatesUpdateRouteHandler,
  postUrlsAddTrackingDomainRouteHandler,
  postUrlsCheckTrackingDomainRouteHandler,
  postUrlsDeleteTrackingDomainRouteHandler,
  postUrlsTrackingDomainsRouteHandler,
  postUsersInfoRouteHandler,
  postUsersPing2RouteHandler,
  postUsersPingRouteHandler,
  postUsersSendersRouteHandler,
  postWebhooksAddRouteHandler,
  postWebhooksDeleteRouteHandler,
  postWebhooksInfoRouteHandler,
  postWebhooksListRouteHandler,
  postWebhooksUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAllowlistsAddRoute, postAllowlistsAddRouteHandler)
  .openapi(postAllowlistsListRoute, postAllowlistsListRouteHandler)
  .openapi(postAllowlistsDeleteRoute, postAllowlistsDeleteRouteHandler)
  .openapi(postExportsInfoRoute, postExportsInfoRouteHandler)
  .openapi(postExportsListRoute, postExportsListRouteHandler)
  .openapi(postExportsRejectsRoute, postExportsRejectsRouteHandler)
  .openapi(postExportsWhitelistRoute, postExportsWhitelistRouteHandler)
  .openapi(postExportsAllowlistRoute, postExportsAllowlistRouteHandler)
  .openapi(postExportsActivityRoute, postExportsActivityRouteHandler)
  .openapi(postIpsListRoute, postIpsListRouteHandler)
  .openapi(postIpsInfoRoute, postIpsInfoRouteHandler)
  .openapi(postIpsProvisionRoute, postIpsProvisionRouteHandler)
  .openapi(postIpsStartWarmupRoute, postIpsStartWarmupRouteHandler)
  .openapi(postIpsCancelWarmupRoute, postIpsCancelWarmupRouteHandler)
  .openapi(postIpsSetPoolRoute, postIpsSetPoolRouteHandler)
  .openapi(postIpsDeleteRoute, postIpsDeleteRouteHandler)
  .openapi(postIpsListPoolsRoute, postIpsListPoolsRouteHandler)
  .openapi(postIpsPoolInfoRoute, postIpsPoolInfoRouteHandler)
  .openapi(postIpsCreatePoolRoute, postIpsCreatePoolRouteHandler)
  .openapi(postIpsDeletePoolRoute, postIpsDeletePoolRouteHandler)
  .openapi(postIpsCheckCustomDnsRoute, postIpsCheckCustomDnsRouteHandler)
  .openapi(postIpsSetCustomDnsRoute, postIpsSetCustomDnsRouteHandler)
  .openapi(postInboundDomainsRoute, postInboundDomainsRouteHandler)
  .openapi(postInboundAddDomainRoute, postInboundAddDomainRouteHandler)
  .openapi(postInboundCheckDomainRoute, postInboundCheckDomainRouteHandler)
  .openapi(postInboundDeleteDomainRoute, postInboundDeleteDomainRouteHandler)
  .openapi(postInboundRoutesRoute, postInboundRoutesRouteHandler)
  .openapi(postInboundAddRouteRoute, postInboundAddRouteRouteHandler)
  .openapi(postInboundUpdateRouteRoute, postInboundUpdateRouteRouteHandler)
  .openapi(postInboundDeleteRouteRoute, postInboundDeleteRouteRouteHandler)
  .openapi(postInboundSendRawRoute, postInboundSendRawRouteHandler)
  .openapi(postMctemplatesInfoRoute, postMctemplatesInfoRouteHandler)
  .openapi(postMctemplatesListRoute, postMctemplatesListRouteHandler)
  .openapi(postMctemplatesRenderRoute, postMctemplatesRenderRouteHandler)
  .openapi(postMctemplatesTimeSeriesRoute, postMctemplatesTimeSeriesRouteHandler)
  .openapi(postMessagesSendRoute, postMessagesSendRouteHandler)
  .openapi(postMessagesSendTemplateRoute, postMessagesSendTemplateRouteHandler)
  .openapi(postMessagesSendMcTemplateRoute, postMessagesSendMcTemplateRouteHandler)
  .openapi(postMessagesSearchRoute, postMessagesSearchRouteHandler)
  .openapi(postMessagesSearchTimeSeriesRoute, postMessagesSearchTimeSeriesRouteHandler)
  .openapi(postMessagesInfoRoute, postMessagesInfoRouteHandler)
  .openapi(postMessagesContentRoute, postMessagesContentRouteHandler)
  .openapi(postMessagesParseRoute, postMessagesParseRouteHandler)
  .openapi(postMessagesSendRawRoute, postMessagesSendRawRouteHandler)
  .openapi(postMessagesListScheduledRoute, postMessagesListScheduledRouteHandler)
  .openapi(postMessagesCancelScheduledRoute, postMessagesCancelScheduledRouteHandler)
  .openapi(postMessagesRescheduleRoute, postMessagesRescheduleRouteHandler)
  .openapi(postMessagesSendSmsRoute, postMessagesSendSmsRouteHandler)
  .openapi(postMetadataListRoute, postMetadataListRouteHandler)
  .openapi(postMetadataAddRoute, postMetadataAddRouteHandler)
  .openapi(postMetadataUpdateRoute, postMetadataUpdateRouteHandler)
  .openapi(postMetadataDeleteRoute, postMetadataDeleteRouteHandler)
  .openapi(postRejectsAddRoute, postRejectsAddRouteHandler)
  .openapi(postRejectsAddSmsRoute, postRejectsAddSmsRouteHandler)
  .openapi(postRejectsListRoute, postRejectsListRouteHandler)
  .openapi(postRejectsListSmsRoute, postRejectsListSmsRouteHandler)
  .openapi(postRejectsDeleteRoute, postRejectsDeleteRouteHandler)
  .openapi(postRejectsDeleteSmsRoute, postRejectsDeleteSmsRouteHandler)
  .openapi(postSendersListRoute, postSendersListRouteHandler)
  .openapi(postSendersDomainsRoute, postSendersDomainsRouteHandler)
  .openapi(postSendersAddDomainRoute, postSendersAddDomainRouteHandler)
  .openapi(postSendersCheckDomainRoute, postSendersCheckDomainRouteHandler)
  .openapi(postSendersVerifyDomainRoute, postSendersVerifyDomainRouteHandler)
  .openapi(postSendersInfoRoute, postSendersInfoRouteHandler)
  .openapi(postSendersTimeSeriesRoute, postSendersTimeSeriesRouteHandler)
  .openapi(postSendersDeleteDomainRoute, postSendersDeleteDomainRouteHandler)
  .openapi(postSubaccountsListRoute, postSubaccountsListRouteHandler)
  .openapi(postSubaccountsAddRoute, postSubaccountsAddRouteHandler)
  .openapi(postSubaccountsInfoRoute, postSubaccountsInfoRouteHandler)
  .openapi(postSubaccountsUpdateRoute, postSubaccountsUpdateRouteHandler)
  .openapi(postSubaccountsDeleteRoute, postSubaccountsDeleteRouteHandler)
  .openapi(postSubaccountsPauseRoute, postSubaccountsPauseRouteHandler)
  .openapi(postSubaccountsResumeRoute, postSubaccountsResumeRouteHandler)
  .openapi(postTagsListRoute, postTagsListRouteHandler)
  .openapi(postTagsDeleteRoute, postTagsDeleteRouteHandler)
  .openapi(postTagsInfoRoute, postTagsInfoRouteHandler)
  .openapi(postTagsTimeSeriesRoute, postTagsTimeSeriesRouteHandler)
  .openapi(postTagsAllTimeSeriesRoute, postTagsAllTimeSeriesRouteHandler)
  .openapi(postTemplatesAddRoute, postTemplatesAddRouteHandler)
  .openapi(postTemplatesInfoRoute, postTemplatesInfoRouteHandler)
  .openapi(postTemplatesUpdateRoute, postTemplatesUpdateRouteHandler)
  .openapi(postTemplatesPublishRoute, postTemplatesPublishRouteHandler)
  .openapi(postTemplatesDeleteRoute, postTemplatesDeleteRouteHandler)
  .openapi(postTemplatesListRoute, postTemplatesListRouteHandler)
  .openapi(postTemplatesTimeSeriesRoute, postTemplatesTimeSeriesRouteHandler)
  .openapi(postTemplatesRenderRoute, postTemplatesRenderRouteHandler)
  .openapi(postUrlsTrackingDomainsRoute, postUrlsTrackingDomainsRouteHandler)
  .openapi(postUrlsAddTrackingDomainRoute, postUrlsAddTrackingDomainRouteHandler)
  .openapi(postUrlsCheckTrackingDomainRoute, postUrlsCheckTrackingDomainRouteHandler)
  .openapi(postUrlsDeleteTrackingDomainRoute, postUrlsDeleteTrackingDomainRouteHandler)
  .openapi(postUsersInfoRoute, postUsersInfoRouteHandler)
  .openapi(postUsersPingRoute, postUsersPingRouteHandler)
  .openapi(postUsersPing2Route, postUsersPing2RouteHandler)
  .openapi(postUsersSendersRoute, postUsersSendersRouteHandler)
  .openapi(postWebhooksListRoute, postWebhooksListRouteHandler)
  .openapi(postWebhooksAddRoute, postWebhooksAddRouteHandler)
  .openapi(postWebhooksInfoRoute, postWebhooksInfoRouteHandler)
  .openapi(postWebhooksUpdateRoute, postWebhooksUpdateRouteHandler)
  .openapi(postWebhooksDeleteRoute, postWebhooksDeleteRouteHandler)

export default app

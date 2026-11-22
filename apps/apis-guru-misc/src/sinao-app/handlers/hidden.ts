import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAccessInviteAccessTokenRoute,
  deleteAppsAppIdAccessInviteIdRoute,
  deleteAppsAppIdAccessUserIdRoute,
  deleteAppsAppIdBanksIndexRoute,
  deleteAppsAppIdLogsAutoreconcileIndexRoute,
  deleteAppsAppIdProductcategoryIdRoute,
  deleteAppsAppIdRecurringinvoicesBatchRoute,
  deleteAppsAppIdRecurringinvoicesIdRoute,
  deleteAppsAppIdRulesIdRoute,
  deleteAppsAppIdSalesdocumentmodelsIdRoute,
  deleteAppsAppIdSubscriptionPlanRoute,
  deleteAppsAppIdSubscriptionSourceRoute,
  getAppsAccessInviteAccessTokenRoute,
  getAppsAppIdAccessInviteRoute,
  getAppsAppIdAccessProfilesRoute,
  getAppsAppIdAccessRoute,
  getAppsAppIdAccessUserIdRoute,
  getAppsAppIdBanksConnectRoute,
  getAppsAppIdBanksIdFunnelEditRoute,
  getAppsAppIdBanksIdFunnelSyncRoute,
  getAppsAppIdBanksIdFunnelValidateRoute,
  getAppsAppIdBanksIndexRoute,
  getAppsAppIdLogsAutoreconcileIndexRoute,
  getAppsAppIdPingRoute,
  getAppsAppIdProductcategoryIdRoute,
  getAppsAppIdProductcategoryRoute,
  getAppsAppIdRecurringinvoicesIdPlanRoute,
  getAppsAppIdRecurringinvoicesIdRoute,
  getAppsAppIdRecurringinvoicesPeriodsRoute,
  getAppsAppIdRecurringinvoicesRoute,
  getAppsAppIdRulesIdRoute,
  getAppsAppIdRulesIndexRoute,
  getAppsAppIdSalesdocumentmodelsIdRoute,
  getAppsAppIdSalesdocumentmodelsRoute,
  getAppsAppIdServicesStripeWebhookRoute,
  getAppsAppIdSubscriptionCheckoutAddSourceRoute,
  getAppsAppIdSubscriptionPlanRoute,
  getAppsAppIdSubscriptionPlansRoute,
  getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute,
  getAppsAppIdSubscriptionPlansStripePlanRoute,
  getAppsAppIdTemplatesDefaultRoute,
  getAppsAppIdTemplatesIdRoute,
  getAppsAppIdTemplatesRoute,
  getPingRoute,
  getServicesViesSirenRoute,
  postAppsAccessInviteAccessTokenRegisterRoute,
  postAppsAppIdAccessInviteRoute,
  postAppsAppIdAccessUserIdRoute,
  postAppsAppIdAccountsBatchRoute,
  postAppsAppIdBanksIdSelectAccountsRoute,
  postAppsAppIdBanksSynchronizeRoute,
  postAppsAppIdContactsMergeRoute,
  postAppsAppIdLogsAutoreconcileIndexRoute,
  postAppsAppIdProductcategoryIdRoute,
  postAppsAppIdProductcategoryRoute,
  postAppsAppIdRecurringinvoicesBatchRoute,
  postAppsAppIdRecurringinvoicesIdRoute,
  postAppsAppIdRecurringinvoicesRoute,
  postAppsAppIdResetRoute,
  postAppsAppIdRulesExecuteOnRoute,
  postAppsAppIdRulesIdRoute,
  postAppsAppIdRulesIndexRoute,
  postAppsAppIdSalesdocumentmodelsIdRoute,
  postAppsAppIdSalesdocumentmodelsRoute,
  postAppsAppIdServicesStripeWebhookRoute,
  postAppsAppIdServicesYousignWebhookRoute,
  postAppsAppIdSubscriptionAnchordateRoute,
  postAppsAppIdSubscriptionCouponRoute,
  postAppsAppIdSubscriptionExtendTrialRoute,
  postAppsAppIdSubscriptionExtraStripePlanRoute,
  postAppsAppIdSubscriptionPayAllRoute,
  postAppsAppIdSubscriptionPlansStripePlanRoute,
  postAppsAppIdSubscriptionSourceDefaultRoute,
  postAppsAppIdSubscriptionSourceRoute,
  postAppsAppIdTemplatesBatchRoute,
  postAppsAppIdTemplatesIdRoute,
  postAppsAppIdTemplatesRoute,
  postAppsRoute,
  postChangepasswordRoute,
  postLogoutRoute,
  postRegisterRoute,
  postSendpasswordRoute,
  postServicesCollectorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hiddenHandler = app
  .openapi(postAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAccessInviteAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAccessInviteAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAccessInviteAccessTokenRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccessInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccessInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccessUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdBanksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBanksSynchronizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdBanksIdFunnelValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdBanksIdSelectAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdContactsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdLogsAutoreconcileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductcategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductcategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRecurringinvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRecurringinvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRecurringinvoicesIdPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesExecuteOnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSalesdocumentmodelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSalesdocumentmodelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSalesdocumentmodelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdServicesStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdServicesStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdServicesYousignWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionAnchordateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionCheckoutAddSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionCouponRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionExtendTrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionExtraStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionPayAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionPlansStripePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdSubscriptionPlansStripePlanCheckoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdSubscriptionSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdSubscriptionSourceDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangepasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesCollectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesViesSirenRoute, (c) => {
    throw new Error('Not implemented')
  })

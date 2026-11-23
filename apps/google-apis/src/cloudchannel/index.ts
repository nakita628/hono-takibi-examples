import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AccountListSubscribersRoute,
  getV1CustomerListPurchasableOffersRoute,
  getV1CustomerListPurchasableSkusRoute,
  getV1EntitlementLookupOfferRoute,
  getV1NameRoute,
  getV1ParentChannelPartnerLinksRoute,
  getV1ParentChannelPartnerRepricingConfigsRoute,
  getV1ParentCustomerRepricingConfigsRoute,
  getV1ParentCustomersRoute,
  getV1ParentEntitlementsRoute,
  getV1ParentListEntitlementChangesRoute,
  getV1ParentOffersRoute,
  getV1ParentReportsRoute,
  getV1ParentSkusRoute,
  getV1ProductsRoute,
  patchV1NameRoute,
  postV1AccountRegisterRoute,
  postV1AccountUnregisterRoute,
  postV1CustomerProvisionCloudIdentityRoute,
  postV1NameActivateRoute,
  postV1NameCancelRoute,
  postV1NameChangeOfferRoute,
  postV1NameChangeParametersRoute,
  postV1NameChangeRenewalSettingsRoute,
  postV1NameRunRoute,
  postV1NameStartPaidServiceRoute,
  postV1NameSuspendRoute,
  postV1ParentChannelPartnerLinksRoute,
  postV1ParentChannelPartnerRepricingConfigsRoute,
  postV1ParentCheckCloudIdentityAccountsExistRoute,
  postV1ParentCustomerRepricingConfigsRoute,
  postV1ParentCustomersImportRoute,
  postV1ParentCustomersRoute,
  postV1ParentEntitlementsRoute,
  postV1ParentListTransferableOffersRoute,
  postV1ParentListTransferableSkusRoute,
  postV1ParentTransferEntitlementsRoute,
  postV1ParentTransferEntitlementsToGoogleRoute,
  postV1ReportJobFetchReportResultsRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1AccountListSubscribersRouteHandler,
  getV1CustomerListPurchasableOffersRouteHandler,
  getV1CustomerListPurchasableSkusRouteHandler,
  getV1EntitlementLookupOfferRouteHandler,
  getV1NameRouteHandler,
  getV1ParentChannelPartnerLinksRouteHandler,
  getV1ParentChannelPartnerRepricingConfigsRouteHandler,
  getV1ParentCustomerRepricingConfigsRouteHandler,
  getV1ParentCustomersRouteHandler,
  getV1ParentEntitlementsRouteHandler,
  getV1ParentListEntitlementChangesRouteHandler,
  getV1ParentOffersRouteHandler,
  getV1ParentReportsRouteHandler,
  getV1ParentSkusRouteHandler,
  getV1ProductsRouteHandler,
  patchV1NameRouteHandler,
  postV1AccountRegisterRouteHandler,
  postV1AccountUnregisterRouteHandler,
  postV1CustomerProvisionCloudIdentityRouteHandler,
  postV1NameActivateRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameChangeOfferRouteHandler,
  postV1NameChangeParametersRouteHandler,
  postV1NameChangeRenewalSettingsRouteHandler,
  postV1NameRunRouteHandler,
  postV1NameStartPaidServiceRouteHandler,
  postV1NameSuspendRouteHandler,
  postV1ParentChannelPartnerLinksRouteHandler,
  postV1ParentChannelPartnerRepricingConfigsRouteHandler,
  postV1ParentCheckCloudIdentityAccountsExistRouteHandler,
  postV1ParentCustomerRepricingConfigsRouteHandler,
  postV1ParentCustomersImportRouteHandler,
  postV1ParentCustomersRouteHandler,
  postV1ParentEntitlementsRouteHandler,
  postV1ParentListTransferableOffersRouteHandler,
  postV1ParentListTransferableSkusRouteHandler,
  postV1ParentTransferEntitlementsRouteHandler,
  postV1ParentTransferEntitlementsToGoogleRouteHandler,
  postV1ReportJobFetchReportResultsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ProductsRoute, getV1ProductsRouteHandler)
  .openapi(getV1AccountListSubscribersRoute, getV1AccountListSubscribersRouteHandler)
  .openapi(postV1AccountRegisterRoute, postV1AccountRegisterRouteHandler)
  .openapi(postV1AccountUnregisterRoute, postV1AccountUnregisterRouteHandler)
  .openapi(getV1CustomerListPurchasableOffersRoute, getV1CustomerListPurchasableOffersRouteHandler)
  .openapi(getV1CustomerListPurchasableSkusRoute, getV1CustomerListPurchasableSkusRouteHandler)
  .openapi(
    postV1CustomerProvisionCloudIdentityRoute,
    postV1CustomerProvisionCloudIdentityRouteHandler,
  )
  .openapi(getV1EntitlementLookupOfferRoute, getV1EntitlementLookupOfferRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(postV1NameActivateRoute, postV1NameActivateRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameChangeOfferRoute, postV1NameChangeOfferRouteHandler)
  .openapi(postV1NameChangeParametersRoute, postV1NameChangeParametersRouteHandler)
  .openapi(postV1NameChangeRenewalSettingsRoute, postV1NameChangeRenewalSettingsRouteHandler)
  .openapi(postV1NameRunRoute, postV1NameRunRouteHandler)
  .openapi(postV1NameStartPaidServiceRoute, postV1NameStartPaidServiceRouteHandler)
  .openapi(postV1NameSuspendRoute, postV1NameSuspendRouteHandler)
  .openapi(getV1ParentChannelPartnerLinksRoute, getV1ParentChannelPartnerLinksRouteHandler)
  .openapi(postV1ParentChannelPartnerLinksRoute, postV1ParentChannelPartnerLinksRouteHandler)
  .openapi(
    getV1ParentChannelPartnerRepricingConfigsRoute,
    getV1ParentChannelPartnerRepricingConfigsRouteHandler,
  )
  .openapi(
    postV1ParentChannelPartnerRepricingConfigsRoute,
    postV1ParentChannelPartnerRepricingConfigsRouteHandler,
  )
  .openapi(
    getV1ParentCustomerRepricingConfigsRoute,
    getV1ParentCustomerRepricingConfigsRouteHandler,
  )
  .openapi(
    postV1ParentCustomerRepricingConfigsRoute,
    postV1ParentCustomerRepricingConfigsRouteHandler,
  )
  .openapi(getV1ParentCustomersRoute, getV1ParentCustomersRouteHandler)
  .openapi(postV1ParentCustomersRoute, postV1ParentCustomersRouteHandler)
  .openapi(postV1ParentCustomersImportRoute, postV1ParentCustomersImportRouteHandler)
  .openapi(getV1ParentEntitlementsRoute, getV1ParentEntitlementsRouteHandler)
  .openapi(postV1ParentEntitlementsRoute, postV1ParentEntitlementsRouteHandler)
  .openapi(getV1ParentOffersRoute, getV1ParentOffersRouteHandler)
  .openapi(getV1ParentReportsRoute, getV1ParentReportsRouteHandler)
  .openapi(getV1ParentSkusRoute, getV1ParentSkusRouteHandler)
  .openapi(
    postV1ParentCheckCloudIdentityAccountsExistRoute,
    postV1ParentCheckCloudIdentityAccountsExistRouteHandler,
  )
  .openapi(getV1ParentListEntitlementChangesRoute, getV1ParentListEntitlementChangesRouteHandler)
  .openapi(postV1ParentListTransferableOffersRoute, postV1ParentListTransferableOffersRouteHandler)
  .openapi(postV1ParentListTransferableSkusRoute, postV1ParentListTransferableSkusRouteHandler)
  .openapi(postV1ParentTransferEntitlementsRoute, postV1ParentTransferEntitlementsRouteHandler)
  .openapi(
    postV1ParentTransferEntitlementsToGoogleRoute,
    postV1ParentTransferEntitlementsToGoogleRouteHandler,
  )
  .openapi(postV1ReportJobFetchReportResultsRoute, postV1ReportJobFetchReportResultsRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountListSubscribersRoute,
  getV1CustomerListPurchasableOffersRoute,
  getV1CustomerListPurchasableSkusRoute,
  getV1EntitlementLookupOfferRoute,
  getV1ParentChannelPartnerLinksRoute,
  getV1ParentChannelPartnerRepricingConfigsRoute,
  getV1ParentCustomerRepricingConfigsRoute,
  getV1ParentCustomersRoute,
  getV1ParentEntitlementsRoute,
  getV1ParentListEntitlementChangesRoute,
  getV1ParentOffersRoute,
  getV1ParentReportsRoute,
  patchV1NameRoute,
  postV1AccountRegisterRoute,
  postV1AccountUnregisterRoute,
  postV1CustomerProvisionCloudIdentityRoute,
  postV1NameActivateRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1AccountListSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerListPurchasableOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerListPurchasableSkusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerProvisionCloudIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitlementLookupOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameChangeOfferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameChangeParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameChangeRenewalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameStartPaidServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentChannelPartnerLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentChannelPartnerLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentChannelPartnerRepricingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentChannelPartnerRepricingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCustomerRepricingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCustomerRepricingConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCustomersImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCheckCloudIdentityAccountsExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentListEntitlementChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentListTransferableOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentListTransferableSkusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTransferEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentTransferEntitlementsToGoogleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportJobFetchReportResultsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CompanyAnnouncementIdRoute,
  getApiV1CompanyDeepsearchLeiNumberRoute,
  getApiV1CompanyDeepsearchNameCountryNameRoute,
  getApiV1CompanyDeepsearchNumberCountryNumberRoute,
  getApiV1CompanyIdAnnouncementsRoute,
  getApiV1CompanyIdDatasetRoute,
  getApiV1CompanyIdSuperCountryRoute,
  getApiV1CompanyMonitoringChangeTypesRoute,
  getApiV1CompanyMonitoringListIdRoute,
  getApiV1CompanyMonitoringListRoute,
  getApiV1CompanyNotificationListIdRoute,
  getApiV1CompanyNotificationListRoute,
  getApiV1CompanySearchNameCountryNameRoute,
  getApiV1CompanySearchNumberCountryNumberRoute,
  getApiV1EinVerificationBasicCheckRoute,
  getApiV1EinVerificationComprehensiveCheckRoute,
  getApiV1EinVerificationLookupRoute,
  getApiV1PepsanctionMonitorListRoute,
  getApiV1PepsanctionRetrieveIdRoute,
  getApiV1ProductAvailabilitySkuSubjectIdRoute,
  getApiV1ProductCatalogCountryRoute,
  getApiV1ProductNotifierNotifierIdRoute,
  getApiV1ProductOrderIdRoute,
  getApiV1ProductSearchSubjectIdRoute,
  getApiV1ProductStatusOrderIdRoute,
  getApiV1SystemCountriesRoute,
  getApiV1SystemHealthRoute,
  getApiV1SystemPricelistRoute,
  getApiV1TinVerificationBasicCheckRoute,
  getApiV1TinVerificationComprehensiveCheckRoute,
  getApiV1TinVerificationNameLookupRoute,
  postApiV1CompanyDeepsearchIsinRoute,
  postApiV1CompanyMonitoringRegisterIdRoute,
  postApiV1CompanyMonitoringUnregisterIdRoute,
  postApiV1CompanyNotificationRegisterIdRoute,
  postApiV1CompanyNotificationUnregisterIdRoute,
  postApiV1CompanySearchCountryRoute,
  postApiV1IbanVerificationCheckIbanRoute,
  postApiV1IbanVerificationComprehensiveCheckIbanRoute,
  postApiV1NifVerificationBasicCheckCountryRoute,
  postApiV1NifVerificationComprehensiveCheckCountryRoute,
  postApiV1PepsanctionMonitorUnregisterIdRoute,
  postApiV1PepsanctionMonitorUpdateIdRoute,
  postApiV1PepsanctionOrderTypeSearchRoute,
  postApiV1ProductNotifierOrderIdTypeUriRoute,
  postApiV1ProductOrderConciergeRoute,
  postApiV1ProductOrderSkuOptionSubjectIdRoute,
  postApiV1ProductOrderSkuSubjectIdRoute,
  postApiV1ProductOrderUboRoute,
  postApiV1ProductUpdateActionOrderIdRoute,
  postApiV1VatVerificationBasicCheckCountryRoute,
  postApiV1VatVerificationComprehensiveCheckCountryRoute,
  postApiV1VatVerificationLeveltwoCheckCountryRoute,
  postApiV1VatVerificationLookupCountryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1CompanyAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyDeepsearchIsinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchLeiNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchNameCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchNumberCountryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringChangeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyMonitoringRegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyMonitoringUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyNotificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyNotificationListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyNotificationRegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyNotificationUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanySearchNameCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanySearchNumberCountryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanySearchCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdSuperCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EinVerificationBasicCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EinVerificationComprehensiveCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EinVerificationLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IbanVerificationCheckIbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1IbanVerificationComprehensiveCheckIbanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NifVerificationBasicCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NifVerificationComprehensiveCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PepsanctionMonitorListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionMonitorUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionMonitorUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PepsanctionOrderTypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PepsanctionRetrieveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductAvailabilitySkuSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductCatalogCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductNotifierNotifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductNotifierOrderIdTypeUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderConciergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderUboRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderSkuOptionSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductOrderSkuSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductSearchSubjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductStatusOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ProductUpdateActionOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ProductOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemPricelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TinVerificationBasicCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TinVerificationComprehensiveCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TinVerificationNameLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationBasicCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationComprehensiveCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationLeveltwoCheckCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VatVerificationLookupCountryRoute, (c) => {
    throw new Error('Not implemented')
  })

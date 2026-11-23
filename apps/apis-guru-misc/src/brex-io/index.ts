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
} from './routes'
import {
  getApiV1CompanyAnnouncementIdRouteHandler,
  getApiV1CompanyDeepsearchLeiNumberRouteHandler,
  getApiV1CompanyDeepsearchNameCountryNameRouteHandler,
  getApiV1CompanyDeepsearchNumberCountryNumberRouteHandler,
  getApiV1CompanyIdAnnouncementsRouteHandler,
  getApiV1CompanyIdDatasetRouteHandler,
  getApiV1CompanyIdSuperCountryRouteHandler,
  getApiV1CompanyMonitoringChangeTypesRouteHandler,
  getApiV1CompanyMonitoringListIdRouteHandler,
  getApiV1CompanyMonitoringListRouteHandler,
  getApiV1CompanyNotificationListIdRouteHandler,
  getApiV1CompanyNotificationListRouteHandler,
  getApiV1CompanySearchNameCountryNameRouteHandler,
  getApiV1CompanySearchNumberCountryNumberRouteHandler,
  getApiV1EinVerificationBasicCheckRouteHandler,
  getApiV1EinVerificationComprehensiveCheckRouteHandler,
  getApiV1EinVerificationLookupRouteHandler,
  getApiV1PepsanctionMonitorListRouteHandler,
  getApiV1PepsanctionRetrieveIdRouteHandler,
  getApiV1ProductAvailabilitySkuSubjectIdRouteHandler,
  getApiV1ProductCatalogCountryRouteHandler,
  getApiV1ProductNotifierNotifierIdRouteHandler,
  getApiV1ProductOrderIdRouteHandler,
  getApiV1ProductSearchSubjectIdRouteHandler,
  getApiV1ProductStatusOrderIdRouteHandler,
  getApiV1SystemCountriesRouteHandler,
  getApiV1SystemHealthRouteHandler,
  getApiV1SystemPricelistRouteHandler,
  getApiV1TinVerificationBasicCheckRouteHandler,
  getApiV1TinVerificationComprehensiveCheckRouteHandler,
  getApiV1TinVerificationNameLookupRouteHandler,
  postApiV1CompanyDeepsearchIsinRouteHandler,
  postApiV1CompanyMonitoringRegisterIdRouteHandler,
  postApiV1CompanyMonitoringUnregisterIdRouteHandler,
  postApiV1CompanyNotificationRegisterIdRouteHandler,
  postApiV1CompanyNotificationUnregisterIdRouteHandler,
  postApiV1CompanySearchCountryRouteHandler,
  postApiV1IbanVerificationCheckIbanRouteHandler,
  postApiV1IbanVerificationComprehensiveCheckIbanRouteHandler,
  postApiV1NifVerificationBasicCheckCountryRouteHandler,
  postApiV1NifVerificationComprehensiveCheckCountryRouteHandler,
  postApiV1PepsanctionMonitorUnregisterIdRouteHandler,
  postApiV1PepsanctionMonitorUpdateIdRouteHandler,
  postApiV1PepsanctionOrderTypeSearchRouteHandler,
  postApiV1ProductNotifierOrderIdTypeUriRouteHandler,
  postApiV1ProductOrderConciergeRouteHandler,
  postApiV1ProductOrderSkuOptionSubjectIdRouteHandler,
  postApiV1ProductOrderSkuSubjectIdRouteHandler,
  postApiV1ProductOrderUboRouteHandler,
  postApiV1ProductUpdateActionOrderIdRouteHandler,
  postApiV1VatVerificationBasicCheckCountryRouteHandler,
  postApiV1VatVerificationComprehensiveCheckCountryRouteHandler,
  postApiV1VatVerificationLeveltwoCheckCountryRouteHandler,
  postApiV1VatVerificationLookupCountryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1CompanyAnnouncementIdRoute, getApiV1CompanyAnnouncementIdRouteHandler)
  .openapi(postApiV1CompanyDeepsearchIsinRoute, postApiV1CompanyDeepsearchIsinRouteHandler)
  .openapi(getApiV1CompanyDeepsearchLeiNumberRoute, getApiV1CompanyDeepsearchLeiNumberRouteHandler)
  .openapi(
    getApiV1CompanyDeepsearchNameCountryNameRoute,
    getApiV1CompanyDeepsearchNameCountryNameRouteHandler,
  )
  .openapi(
    getApiV1CompanyDeepsearchNumberCountryNumberRoute,
    getApiV1CompanyDeepsearchNumberCountryNumberRouteHandler,
  )
  .openapi(
    getApiV1CompanyMonitoringChangeTypesRoute,
    getApiV1CompanyMonitoringChangeTypesRouteHandler,
  )
  .openapi(getApiV1CompanyMonitoringListRoute, getApiV1CompanyMonitoringListRouteHandler)
  .openapi(getApiV1CompanyMonitoringListIdRoute, getApiV1CompanyMonitoringListIdRouteHandler)
  .openapi(
    postApiV1CompanyMonitoringRegisterIdRoute,
    postApiV1CompanyMonitoringRegisterIdRouteHandler,
  )
  .openapi(
    postApiV1CompanyMonitoringUnregisterIdRoute,
    postApiV1CompanyMonitoringUnregisterIdRouteHandler,
  )
  .openapi(getApiV1CompanyNotificationListRoute, getApiV1CompanyNotificationListRouteHandler)
  .openapi(getApiV1CompanyNotificationListIdRoute, getApiV1CompanyNotificationListIdRouteHandler)
  .openapi(
    postApiV1CompanyNotificationRegisterIdRoute,
    postApiV1CompanyNotificationRegisterIdRouteHandler,
  )
  .openapi(
    postApiV1CompanyNotificationUnregisterIdRoute,
    postApiV1CompanyNotificationUnregisterIdRouteHandler,
  )
  .openapi(
    getApiV1CompanySearchNameCountryNameRoute,
    getApiV1CompanySearchNameCountryNameRouteHandler,
  )
  .openapi(
    getApiV1CompanySearchNumberCountryNumberRoute,
    getApiV1CompanySearchNumberCountryNumberRouteHandler,
  )
  .openapi(postApiV1CompanySearchCountryRoute, postApiV1CompanySearchCountryRouteHandler)
  .openapi(getApiV1CompanyIdAnnouncementsRoute, getApiV1CompanyIdAnnouncementsRouteHandler)
  .openapi(getApiV1CompanyIdSuperCountryRoute, getApiV1CompanyIdSuperCountryRouteHandler)
  .openapi(getApiV1CompanyIdDatasetRoute, getApiV1CompanyIdDatasetRouteHandler)
  .openapi(getApiV1EinVerificationBasicCheckRoute, getApiV1EinVerificationBasicCheckRouteHandler)
  .openapi(
    getApiV1EinVerificationComprehensiveCheckRoute,
    getApiV1EinVerificationComprehensiveCheckRouteHandler,
  )
  .openapi(getApiV1EinVerificationLookupRoute, getApiV1EinVerificationLookupRouteHandler)
  .openapi(postApiV1IbanVerificationCheckIbanRoute, postApiV1IbanVerificationCheckIbanRouteHandler)
  .openapi(
    postApiV1IbanVerificationComprehensiveCheckIbanRoute,
    postApiV1IbanVerificationComprehensiveCheckIbanRouteHandler,
  )
  .openapi(
    postApiV1NifVerificationBasicCheckCountryRoute,
    postApiV1NifVerificationBasicCheckCountryRouteHandler,
  )
  .openapi(
    postApiV1NifVerificationComprehensiveCheckCountryRoute,
    postApiV1NifVerificationComprehensiveCheckCountryRouteHandler,
  )
  .openapi(getApiV1PepsanctionMonitorListRoute, getApiV1PepsanctionMonitorListRouteHandler)
  .openapi(
    postApiV1PepsanctionMonitorUnregisterIdRoute,
    postApiV1PepsanctionMonitorUnregisterIdRouteHandler,
  )
  .openapi(
    postApiV1PepsanctionMonitorUpdateIdRoute,
    postApiV1PepsanctionMonitorUpdateIdRouteHandler,
  )
  .openapi(
    postApiV1PepsanctionOrderTypeSearchRoute,
    postApiV1PepsanctionOrderTypeSearchRouteHandler,
  )
  .openapi(getApiV1PepsanctionRetrieveIdRoute, getApiV1PepsanctionRetrieveIdRouteHandler)
  .openapi(
    getApiV1ProductAvailabilitySkuSubjectIdRoute,
    getApiV1ProductAvailabilitySkuSubjectIdRouteHandler,
  )
  .openapi(getApiV1ProductCatalogCountryRoute, getApiV1ProductCatalogCountryRouteHandler)
  .openapi(getApiV1ProductNotifierNotifierIdRoute, getApiV1ProductNotifierNotifierIdRouteHandler)
  .openapi(
    postApiV1ProductNotifierOrderIdTypeUriRoute,
    postApiV1ProductNotifierOrderIdTypeUriRouteHandler,
  )
  .openapi(postApiV1ProductOrderConciergeRoute, postApiV1ProductOrderConciergeRouteHandler)
  .openapi(postApiV1ProductOrderUboRoute, postApiV1ProductOrderUboRouteHandler)
  .openapi(
    postApiV1ProductOrderSkuOptionSubjectIdRoute,
    postApiV1ProductOrderSkuOptionSubjectIdRouteHandler,
  )
  .openapi(postApiV1ProductOrderSkuSubjectIdRoute, postApiV1ProductOrderSkuSubjectIdRouteHandler)
  .openapi(getApiV1ProductSearchSubjectIdRoute, getApiV1ProductSearchSubjectIdRouteHandler)
  .openapi(getApiV1ProductStatusOrderIdRoute, getApiV1ProductStatusOrderIdRouteHandler)
  .openapi(
    postApiV1ProductUpdateActionOrderIdRoute,
    postApiV1ProductUpdateActionOrderIdRouteHandler,
  )
  .openapi(getApiV1ProductOrderIdRoute, getApiV1ProductOrderIdRouteHandler)
  .openapi(getApiV1SystemCountriesRoute, getApiV1SystemCountriesRouteHandler)
  .openapi(getApiV1SystemHealthRoute, getApiV1SystemHealthRouteHandler)
  .openapi(getApiV1SystemPricelistRoute, getApiV1SystemPricelistRouteHandler)
  .openapi(getApiV1TinVerificationBasicCheckRoute, getApiV1TinVerificationBasicCheckRouteHandler)
  .openapi(
    getApiV1TinVerificationComprehensiveCheckRoute,
    getApiV1TinVerificationComprehensiveCheckRouteHandler,
  )
  .openapi(getApiV1TinVerificationNameLookupRoute, getApiV1TinVerificationNameLookupRouteHandler)
  .openapi(
    postApiV1VatVerificationBasicCheckCountryRoute,
    postApiV1VatVerificationBasicCheckCountryRouteHandler,
  )
  .openapi(
    postApiV1VatVerificationComprehensiveCheckCountryRoute,
    postApiV1VatVerificationComprehensiveCheckCountryRouteHandler,
  )
  .openapi(
    postApiV1VatVerificationLeveltwoCheckCountryRoute,
    postApiV1VatVerificationLeveltwoCheckCountryRouteHandler,
  )
  .openapi(
    postApiV1VatVerificationLookupCountryRoute,
    postApiV1VatVerificationLookupCountryRouteHandler,
  )

export default app

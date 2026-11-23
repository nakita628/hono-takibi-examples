import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BatchesBatchIdRoute,
  deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute,
  deleteV1ConnectionsInsuranceShipsuranceRoute,
  deleteV1EnvironmentWebhooksWebhookIdRoute,
  deleteV1PackagesPackageIdRoute,
  deleteV1PickupsPickupIdRoute,
  deleteV1ShipmentsShipmentIdTagsTagNameRoute,
  deleteV1TagsTagNameRoute,
  deleteV1WarehousesWarehouseIdRoute,
  getV1BatchesBatchIdErrorsRoute,
  getV1BatchesBatchIdRoute,
  getV1BatchesExternalBatchIdExternalBatchIdRoute,
  getV1BatchesRoute,
  getV1CarriersCarrierIdOptionsRoute,
  getV1CarriersCarrierIdPackagesRoute,
  getV1CarriersCarrierIdRoute,
  getV1CarriersCarrierIdServicesRoute,
  getV1CarriersRoute,
  getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
  getV1DownloadsDirSubdirFilenameRoute,
  getV1EnvironmentWebhooksRoute,
  getV1EnvironmentWebhooksWebhookIdRoute,
  getV1InsuranceShipsuranceBalanceRoute,
  getV1LabelsExternalShipmentIdExternalShipmentIdRoute,
  getV1LabelsLabelIdRoute,
  getV1LabelsLabelIdTrackRoute,
  getV1LabelsRoute,
  getV1ManifestsManifestIdRoute,
  getV1ManifestsRequestsManifestRequestIdRoute,
  getV1ManifestsRoute,
  getV1PackagesPackageIdRoute,
  getV1PackagesRoute,
  getV1PickupsPickupIdRoute,
  getV1PickupsRoute,
  getV1RatesRateIdRoute,
  getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute,
  getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute,
  getV1ShipmentsRoute,
  getV1ShipmentsShipmentIdRatesRoute,
  getV1ShipmentsShipmentIdRoute,
  getV1TagsRoute,
  getV1TrackingRoute,
  getV1WarehousesRoute,
  getV1WarehousesWarehouseIdRoute,
  patchV1InsuranceShipsuranceAddFundsRoute,
  postV1AddressesValidateRoute,
  postV1BatchesBatchIdAddRoute,
  postV1BatchesBatchIdProcessLabelsRoute,
  postV1BatchesBatchIdRemoveRoute,
  postV1BatchesRoute,
  postV1ConnectionsCarriersCarrierNameRoute,
  postV1ConnectionsInsuranceShipsuranceRoute,
  postV1EnvironmentWebhooksRoute,
  postV1LabelsLabelIdReturnRoute,
  postV1LabelsRatesRateIdRoute,
  postV1LabelsRoute,
  postV1LabelsShipmentShipmentIdRoute,
  postV1ManifestsRoute,
  postV1PackagesRoute,
  postV1PickupsRoute,
  postV1RatesBulkRoute,
  postV1RatesEstimateRoute,
  postV1RatesRoute,
  postV1ServicePointsListRoute,
  postV1ShipmentsRoute,
  postV1ShipmentsShipmentIdTagsTagNameRoute,
  postV1TagsTagNameRoute,
  postV1TokensEphemeralRoute,
  postV1TrackingStartRoute,
  postV1TrackingStopRoute,
  postV1WarehousesRoute,
  putV1AddressesRecognizeRoute,
  putV1BatchesBatchIdRoute,
  putV1CarriersCarrierIdAddFundsRoute,
  putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
  putV1EnvironmentWebhooksWebhookIdRoute,
  putV1LabelsLabelIdVoidRoute,
  putV1PackagesPackageIdRoute,
  putV1ShipmentsRecognizeRoute,
  putV1ShipmentsShipmentIdCancelRoute,
  putV1ShipmentsShipmentIdRoute,
  putV1TagsTagNameNewTagNameRoute,
  putV1WarehousesWarehouseIdRoute,
  putV1WarehousesWarehouseIdSettingsRoute,
} from './routes'
import {
  deleteV1BatchesBatchIdRouteHandler,
  deleteV1ConnectionsCarriersCarrierNameCarrierIdRouteHandler,
  deleteV1ConnectionsInsuranceShipsuranceRouteHandler,
  deleteV1EnvironmentWebhooksWebhookIdRouteHandler,
  deleteV1PackagesPackageIdRouteHandler,
  deleteV1PickupsPickupIdRouteHandler,
  deleteV1ShipmentsShipmentIdTagsTagNameRouteHandler,
  deleteV1TagsTagNameRouteHandler,
  deleteV1WarehousesWarehouseIdRouteHandler,
  getV1BatchesBatchIdErrorsRouteHandler,
  getV1BatchesBatchIdRouteHandler,
  getV1BatchesExternalBatchIdExternalBatchIdRouteHandler,
  getV1BatchesRouteHandler,
  getV1CarriersCarrierIdOptionsRouteHandler,
  getV1CarriersCarrierIdPackagesRouteHandler,
  getV1CarriersCarrierIdRouteHandler,
  getV1CarriersCarrierIdServicesRouteHandler,
  getV1CarriersRouteHandler,
  getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRouteHandler,
  getV1DownloadsDirSubdirFilenameRouteHandler,
  getV1EnvironmentWebhooksRouteHandler,
  getV1EnvironmentWebhooksWebhookIdRouteHandler,
  getV1InsuranceShipsuranceBalanceRouteHandler,
  getV1LabelsExternalShipmentIdExternalShipmentIdRouteHandler,
  getV1LabelsLabelIdRouteHandler,
  getV1LabelsLabelIdTrackRouteHandler,
  getV1LabelsRouteHandler,
  getV1ManifestsManifestIdRouteHandler,
  getV1ManifestsRequestsManifestRequestIdRouteHandler,
  getV1ManifestsRouteHandler,
  getV1PackagesPackageIdRouteHandler,
  getV1PackagesRouteHandler,
  getV1PickupsPickupIdRouteHandler,
  getV1PickupsRouteHandler,
  getV1RatesRateIdRouteHandler,
  getV1ServicePointsCarrierCodeCountryCodeServicePointIdRouteHandler,
  getV1ShipmentsExternalShipmentIdExternalShipmentIdRouteHandler,
  getV1ShipmentsRouteHandler,
  getV1ShipmentsShipmentIdRatesRouteHandler,
  getV1ShipmentsShipmentIdRouteHandler,
  getV1TagsRouteHandler,
  getV1TrackingRouteHandler,
  getV1WarehousesRouteHandler,
  getV1WarehousesWarehouseIdRouteHandler,
  patchV1InsuranceShipsuranceAddFundsRouteHandler,
  postV1AddressesValidateRouteHandler,
  postV1BatchesBatchIdAddRouteHandler,
  postV1BatchesBatchIdProcessLabelsRouteHandler,
  postV1BatchesBatchIdRemoveRouteHandler,
  postV1BatchesRouteHandler,
  postV1ConnectionsCarriersCarrierNameRouteHandler,
  postV1ConnectionsInsuranceShipsuranceRouteHandler,
  postV1EnvironmentWebhooksRouteHandler,
  postV1LabelsLabelIdReturnRouteHandler,
  postV1LabelsRatesRateIdRouteHandler,
  postV1LabelsRouteHandler,
  postV1LabelsShipmentShipmentIdRouteHandler,
  postV1ManifestsRouteHandler,
  postV1PackagesRouteHandler,
  postV1PickupsRouteHandler,
  postV1RatesBulkRouteHandler,
  postV1RatesEstimateRouteHandler,
  postV1RatesRouteHandler,
  postV1ServicePointsListRouteHandler,
  postV1ShipmentsRouteHandler,
  postV1ShipmentsShipmentIdTagsTagNameRouteHandler,
  postV1TagsTagNameRouteHandler,
  postV1TokensEphemeralRouteHandler,
  postV1TrackingStartRouteHandler,
  postV1TrackingStopRouteHandler,
  postV1WarehousesRouteHandler,
  putV1AddressesRecognizeRouteHandler,
  putV1BatchesBatchIdRouteHandler,
  putV1CarriersCarrierIdAddFundsRouteHandler,
  putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRouteHandler,
  putV1EnvironmentWebhooksWebhookIdRouteHandler,
  putV1LabelsLabelIdVoidRouteHandler,
  putV1PackagesPackageIdRouteHandler,
  putV1ShipmentsRecognizeRouteHandler,
  putV1ShipmentsShipmentIdCancelRouteHandler,
  putV1ShipmentsShipmentIdRouteHandler,
  putV1TagsTagNameNewTagNameRouteHandler,
  putV1WarehousesWarehouseIdRouteHandler,
  putV1WarehousesWarehouseIdSettingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putV1AddressesRecognizeRoute, putV1AddressesRecognizeRouteHandler)
  .openapi(postV1AddressesValidateRoute, postV1AddressesValidateRouteHandler)
  .openapi(getV1BatchesRoute, getV1BatchesRouteHandler)
  .openapi(postV1BatchesRoute, postV1BatchesRouteHandler)
  .openapi(
    getV1BatchesExternalBatchIdExternalBatchIdRoute,
    getV1BatchesExternalBatchIdExternalBatchIdRouteHandler,
  )
  .openapi(deleteV1BatchesBatchIdRoute, deleteV1BatchesBatchIdRouteHandler)
  .openapi(getV1BatchesBatchIdRoute, getV1BatchesBatchIdRouteHandler)
  .openapi(putV1BatchesBatchIdRoute, putV1BatchesBatchIdRouteHandler)
  .openapi(postV1BatchesBatchIdAddRoute, postV1BatchesBatchIdAddRouteHandler)
  .openapi(getV1BatchesBatchIdErrorsRoute, getV1BatchesBatchIdErrorsRouteHandler)
  .openapi(postV1BatchesBatchIdProcessLabelsRoute, postV1BatchesBatchIdProcessLabelsRouteHandler)
  .openapi(postV1BatchesBatchIdRemoveRoute, postV1BatchesBatchIdRemoveRouteHandler)
  .openapi(getV1CarriersRoute, getV1CarriersRouteHandler)
  .openapi(getV1CarriersCarrierIdRoute, getV1CarriersCarrierIdRouteHandler)
  .openapi(putV1CarriersCarrierIdAddFundsRoute, putV1CarriersCarrierIdAddFundsRouteHandler)
  .openapi(getV1CarriersCarrierIdOptionsRoute, getV1CarriersCarrierIdOptionsRouteHandler)
  .openapi(getV1CarriersCarrierIdPackagesRoute, getV1CarriersCarrierIdPackagesRouteHandler)
  .openapi(getV1CarriersCarrierIdServicesRoute, getV1CarriersCarrierIdServicesRouteHandler)
  .openapi(
    postV1ConnectionsCarriersCarrierNameRoute,
    postV1ConnectionsCarriersCarrierNameRouteHandler,
  )
  .openapi(
    deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute,
    deleteV1ConnectionsCarriersCarrierNameCarrierIdRouteHandler,
  )
  .openapi(
    getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
    getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRouteHandler,
  )
  .openapi(
    putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute,
    putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRouteHandler,
  )
  .openapi(
    deleteV1ConnectionsInsuranceShipsuranceRoute,
    deleteV1ConnectionsInsuranceShipsuranceRouteHandler,
  )
  .openapi(
    postV1ConnectionsInsuranceShipsuranceRoute,
    postV1ConnectionsInsuranceShipsuranceRouteHandler,
  )
  .openapi(getV1DownloadsDirSubdirFilenameRoute, getV1DownloadsDirSubdirFilenameRouteHandler)
  .openapi(getV1EnvironmentWebhooksRoute, getV1EnvironmentWebhooksRouteHandler)
  .openapi(postV1EnvironmentWebhooksRoute, postV1EnvironmentWebhooksRouteHandler)
  .openapi(
    deleteV1EnvironmentWebhooksWebhookIdRoute,
    deleteV1EnvironmentWebhooksWebhookIdRouteHandler,
  )
  .openapi(getV1EnvironmentWebhooksWebhookIdRoute, getV1EnvironmentWebhooksWebhookIdRouteHandler)
  .openapi(putV1EnvironmentWebhooksWebhookIdRoute, putV1EnvironmentWebhooksWebhookIdRouteHandler)
  .openapi(
    patchV1InsuranceShipsuranceAddFundsRoute,
    patchV1InsuranceShipsuranceAddFundsRouteHandler,
  )
  .openapi(getV1InsuranceShipsuranceBalanceRoute, getV1InsuranceShipsuranceBalanceRouteHandler)
  .openapi(getV1LabelsRoute, getV1LabelsRouteHandler)
  .openapi(postV1LabelsRoute, postV1LabelsRouteHandler)
  .openapi(
    getV1LabelsExternalShipmentIdExternalShipmentIdRoute,
    getV1LabelsExternalShipmentIdExternalShipmentIdRouteHandler,
  )
  .openapi(postV1LabelsRatesRateIdRoute, postV1LabelsRatesRateIdRouteHandler)
  .openapi(postV1LabelsShipmentShipmentIdRoute, postV1LabelsShipmentShipmentIdRouteHandler)
  .openapi(getV1LabelsLabelIdRoute, getV1LabelsLabelIdRouteHandler)
  .openapi(postV1LabelsLabelIdReturnRoute, postV1LabelsLabelIdReturnRouteHandler)
  .openapi(getV1LabelsLabelIdTrackRoute, getV1LabelsLabelIdTrackRouteHandler)
  .openapi(putV1LabelsLabelIdVoidRoute, putV1LabelsLabelIdVoidRouteHandler)
  .openapi(getV1ManifestsRoute, getV1ManifestsRouteHandler)
  .openapi(postV1ManifestsRoute, postV1ManifestsRouteHandler)
  .openapi(
    getV1ManifestsRequestsManifestRequestIdRoute,
    getV1ManifestsRequestsManifestRequestIdRouteHandler,
  )
  .openapi(getV1ManifestsManifestIdRoute, getV1ManifestsManifestIdRouteHandler)
  .openapi(getV1PackagesRoute, getV1PackagesRouteHandler)
  .openapi(postV1PackagesRoute, postV1PackagesRouteHandler)
  .openapi(deleteV1PackagesPackageIdRoute, deleteV1PackagesPackageIdRouteHandler)
  .openapi(getV1PackagesPackageIdRoute, getV1PackagesPackageIdRouteHandler)
  .openapi(putV1PackagesPackageIdRoute, putV1PackagesPackageIdRouteHandler)
  .openapi(getV1PickupsRoute, getV1PickupsRouteHandler)
  .openapi(postV1PickupsRoute, postV1PickupsRouteHandler)
  .openapi(deleteV1PickupsPickupIdRoute, deleteV1PickupsPickupIdRouteHandler)
  .openapi(getV1PickupsPickupIdRoute, getV1PickupsPickupIdRouteHandler)
  .openapi(postV1RatesRoute, postV1RatesRouteHandler)
  .openapi(postV1RatesBulkRoute, postV1RatesBulkRouteHandler)
  .openapi(postV1RatesEstimateRoute, postV1RatesEstimateRouteHandler)
  .openapi(getV1RatesRateIdRoute, getV1RatesRateIdRouteHandler)
  .openapi(postV1ServicePointsListRoute, postV1ServicePointsListRouteHandler)
  .openapi(
    getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute,
    getV1ServicePointsCarrierCodeCountryCodeServicePointIdRouteHandler,
  )
  .openapi(getV1ShipmentsRoute, getV1ShipmentsRouteHandler)
  .openapi(postV1ShipmentsRoute, postV1ShipmentsRouteHandler)
  .openapi(
    getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute,
    getV1ShipmentsExternalShipmentIdExternalShipmentIdRouteHandler,
  )
  .openapi(putV1ShipmentsRecognizeRoute, putV1ShipmentsRecognizeRouteHandler)
  .openapi(getV1ShipmentsShipmentIdRoute, getV1ShipmentsShipmentIdRouteHandler)
  .openapi(putV1ShipmentsShipmentIdRoute, putV1ShipmentsShipmentIdRouteHandler)
  .openapi(putV1ShipmentsShipmentIdCancelRoute, putV1ShipmentsShipmentIdCancelRouteHandler)
  .openapi(getV1ShipmentsShipmentIdRatesRoute, getV1ShipmentsShipmentIdRatesRouteHandler)
  .openapi(
    deleteV1ShipmentsShipmentIdTagsTagNameRoute,
    deleteV1ShipmentsShipmentIdTagsTagNameRouteHandler,
  )
  .openapi(
    postV1ShipmentsShipmentIdTagsTagNameRoute,
    postV1ShipmentsShipmentIdTagsTagNameRouteHandler,
  )
  .openapi(getV1TagsRoute, getV1TagsRouteHandler)
  .openapi(deleteV1TagsTagNameRoute, deleteV1TagsTagNameRouteHandler)
  .openapi(postV1TagsTagNameRoute, postV1TagsTagNameRouteHandler)
  .openapi(putV1TagsTagNameNewTagNameRoute, putV1TagsTagNameNewTagNameRouteHandler)
  .openapi(postV1TokensEphemeralRoute, postV1TokensEphemeralRouteHandler)
  .openapi(getV1TrackingRoute, getV1TrackingRouteHandler)
  .openapi(postV1TrackingStartRoute, postV1TrackingStartRouteHandler)
  .openapi(postV1TrackingStopRoute, postV1TrackingStopRouteHandler)
  .openapi(getV1WarehousesRoute, getV1WarehousesRouteHandler)
  .openapi(postV1WarehousesRoute, postV1WarehousesRouteHandler)
  .openapi(deleteV1WarehousesWarehouseIdRoute, deleteV1WarehousesWarehouseIdRouteHandler)
  .openapi(getV1WarehousesWarehouseIdRoute, getV1WarehousesWarehouseIdRouteHandler)
  .openapi(putV1WarehousesWarehouseIdRoute, putV1WarehousesWarehouseIdRouteHandler)
  .openapi(putV1WarehousesWarehouseIdSettingsRoute, putV1WarehousesWarehouseIdSettingsRouteHandler)

export default app

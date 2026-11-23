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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(putV1AddressesRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AddressesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesExternalBatchIdExternalBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BatchesBatchIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdProcessLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BatchesBatchIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CarriersCarrierIdAddFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CarriersCarrierIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsCarriersCarrierNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectionsInsuranceShipsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectionsInsuranceShipsuranceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DownloadsDirSubdirFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EnvironmentWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EnvironmentWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1InsuranceShipsuranceAddFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InsuranceShipsuranceBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsExternalShipmentIdExternalShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsShipmentShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LabelsLabelIdReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LabelsLabelIdTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1LabelsLabelIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManifestsRequestsManifestRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManifestsManifestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PickupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PickupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PickupsPickupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PickupsPickupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RatesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RatesEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ServicePointsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsRecognizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShipmentsShipmentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsShipmentIdRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ShipmentsShipmentIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentsShipmentIdTagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TagsTagNameNewTagNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokensEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TrackingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TrackingStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TrackingStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehousesWarehouseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

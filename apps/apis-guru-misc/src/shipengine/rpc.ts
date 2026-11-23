import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putV1AddressesRecognize(
  args: InferRequestType<typeof client.v1.addresses.recognize.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.addresses.recognize.$put(args, options))
}

export async function postV1AddressesValidate(
  args: InferRequestType<typeof client.v1.addresses.validate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.addresses.validate.$post(args, options))
}

export async function getV1Batches(
  args: InferRequestType<typeof client.v1.batches.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$get(args, options))
}

export async function postV1Batches(
  args: InferRequestType<typeof client.v1.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches.$post(args, options))
}

export async function getV1BatchesExternalBatchIdExternalBatchId(
  args: InferRequestType<
    (typeof client.v1.batches.external_batch_id)[':external_batch_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.batches.external_batch_id[':external_batch_id'].$get(args, options),
  )
}

export async function getV1BatchesBatchId(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].$get(args, options))
}

export async function putV1BatchesBatchId(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].$put(args, options))
}

export async function deleteV1BatchesBatchId(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].$delete(args, options))
}

export async function postV1BatchesBatchIdAdd(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['add']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].add.$post(args, options))
}

export async function getV1BatchesBatchIdErrors(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].errors.$get(args, options))
}

export async function postV1BatchesBatchIdProcessLabels(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['process']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].process.labels.$post(args, options))
}

export async function postV1BatchesBatchIdRemove(
  args: InferRequestType<(typeof client.v1.batches)[':batch_id']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.batches[':batch_id'].remove.$post(args, options))
}

export async function getV1Carriers(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.carriers.$get(undefined, options))
}

export async function getV1CarriersCarrierId(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.carriers[':carrier_id'].$get(args, options))
}

export async function putV1CarriersCarrierIdAddFunds(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['add_funds']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.carriers[':carrier_id'].add_funds.$put(args, options))
}

export async function getV1CarriersCarrierIdOptions(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.carriers[':carrier_id'].options.$get(args, options))
}

export async function getV1CarriersCarrierIdPackages(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['packages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.carriers[':carrier_id'].packages.$get(args, options))
}

export async function getV1CarriersCarrierIdServices(
  args: InferRequestType<(typeof client.v1.carriers)[':carrier_id']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.carriers[':carrier_id'].services.$get(args, options))
}

export async function postV1ConnectionsCarriersCarrierName(
  args: InferRequestType<(typeof client.v1.connections.carriers)[':carrier_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.carriers[':carrier_name'].$post(args, options))
}

export async function deleteV1ConnectionsCarriersCarrierNameCarrierId(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connections.carriers[':carrier_name'][':carrier_id'].$delete(args, options),
  )
}

export async function getV1ConnectionsCarriersCarrierNameCarrierIdSettings(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$get(args, options),
  )
}

export async function putV1ConnectionsCarriersCarrierNameCarrierIdSettings(
  args: InferRequestType<
    (typeof client.v1.connections.carriers)[':carrier_name'][':carrier_id']['settings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.connections.carriers[':carrier_name'][':carrier_id'].settings.$put(args, options),
  )
}

export async function postV1ConnectionsInsuranceShipsurance(
  args: InferRequestType<typeof client.v1.connections.insurance.shipsurance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.connections.insurance.shipsurance.$post(args, options))
}

export async function deleteV1ConnectionsInsuranceShipsurance(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v1.connections.insurance.shipsurance.$delete(undefined, options),
  )
}

export async function getV1DownloadsDirSubdirFilename(
  args: InferRequestType<(typeof client.v1.downloads)[':dir'][':subdir'][':filename']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.downloads[':dir'][':subdir'][':filename'].$get(args, options),
  )
}

export async function getV1EnvironmentWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.environment.webhooks.$get(undefined, options))
}

export async function postV1EnvironmentWebhooks(
  args: InferRequestType<typeof client.v1.environment.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environment.webhooks.$post(args, options))
}

export async function getV1EnvironmentWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environment.webhooks[':webhook_id'].$get(args, options))
}

export async function putV1EnvironmentWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environment.webhooks[':webhook_id'].$put(args, options))
}

export async function deleteV1EnvironmentWebhooksWebhookId(
  args: InferRequestType<(typeof client.v1.environment.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environment.webhooks[':webhook_id'].$delete(args, options))
}

export async function patchV1InsuranceShipsuranceAddFunds(
  args: InferRequestType<typeof client.v1.insurance.shipsurance.add_funds.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.insurance.shipsurance.add_funds.$patch(args, options))
}

export async function getV1InsuranceShipsuranceBalance(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.insurance.shipsurance.balance.$get(undefined, options))
}

export async function getV1Labels(
  args: InferRequestType<typeof client.v1.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels.$get(args, options))
}

export async function postV1Labels(
  args: InferRequestType<typeof client.v1.labels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels.$post(args, options))
}

export async function getV1LabelsExternalShipmentIdExternalShipmentId(
  args: InferRequestType<
    (typeof client.v1.labels.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.labels.external_shipment_id[':external_shipment_id'].$get(args, options),
  )
}

export async function postV1LabelsRatesRateId(
  args: InferRequestType<(typeof client.v1.labels.rates)[':rate_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels.rates[':rate_id'].$post(args, options))
}

export async function postV1LabelsShipmentShipmentId(
  args: InferRequestType<(typeof client.v1.labels.shipment)[':shipment_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels.shipment[':shipment_id'].$post(args, options))
}

export async function getV1LabelsLabelId(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels[':label_id'].$get(args, options))
}

export async function postV1LabelsLabelIdReturn(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['return']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels[':label_id'].return.$post(args, options))
}

export async function getV1LabelsLabelIdTrack(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['track']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels[':label_id'].track.$get(args, options))
}

export async function putV1LabelsLabelIdVoid(
  args: InferRequestType<(typeof client.v1.labels)[':label_id']['void']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.labels[':label_id'].void.$put(args, options))
}

export async function getV1Manifests(
  args: InferRequestType<typeof client.v1.manifests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.manifests.$get(args, options))
}

export async function postV1Manifests(
  args: InferRequestType<typeof client.v1.manifests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.manifests.$post(args, options))
}

export async function getV1ManifestsRequestsManifestRequestId(
  args: InferRequestType<(typeof client.v1.manifests.requests)[':manifest_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.manifests.requests[':manifest_request_id'].$get(args, options),
  )
}

export async function getV1ManifestsManifestId(
  args: InferRequestType<(typeof client.v1.manifests)[':manifest_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.manifests[':manifest_id'].$get(args, options))
}

export async function getV1Packages(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.packages.$get(undefined, options))
}

export async function postV1Packages(
  args: InferRequestType<typeof client.v1.packages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.packages.$post(args, options))
}

export async function getV1PackagesPackageId(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.packages[':package_id'].$get(args, options))
}

export async function putV1PackagesPackageId(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.packages[':package_id'].$put(args, options))
}

export async function deleteV1PackagesPackageId(
  args: InferRequestType<(typeof client.v1.packages)[':package_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.packages[':package_id'].$delete(args, options))
}

export async function getV1Pickups(
  args: InferRequestType<typeof client.v1.pickups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pickups.$get(args, options))
}

export async function postV1Pickups(
  args: InferRequestType<typeof client.v1.pickups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pickups.$post(args, options))
}

export async function getV1PickupsPickupId(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pickups[':pickup_id'].$get(args, options))
}

export async function deleteV1PickupsPickupId(
  args: InferRequestType<(typeof client.v1.pickups)[':pickup_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.pickups[':pickup_id'].$delete(args, options))
}

export async function postV1Rates(
  args: InferRequestType<typeof client.v1.rates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rates.$post(args, options))
}

export async function postV1RatesBulk(
  args: InferRequestType<typeof client.v1.rates.bulk.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rates.bulk.$post(args, options))
}

export async function postV1RatesEstimate(
  args: InferRequestType<typeof client.v1.rates.estimate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rates.estimate.$post(args, options))
}

export async function getV1RatesRateId(
  args: InferRequestType<(typeof client.v1.rates)[':rate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.rates[':rate_id'].$get(args, options))
}

export async function postV1ServicePointsList(
  args: InferRequestType<typeof client.v1.service_points.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.service_points.list.$post(args, options))
}

export async function getV1ServicePointsCarrierCodeCountryCodeServicePointId(
  args: InferRequestType<
    (typeof client.v1.service_points)[':carrier_code'][':country_code'][':service_point_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.service_points[':carrier_code'][':country_code'][':service_point_id'].$get(
      args,
      options,
    ),
  )
}

export async function getV1Shipments(
  args: InferRequestType<typeof client.v1.shipments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments.$get(args, options))
}

export async function postV1Shipments(
  args: InferRequestType<typeof client.v1.shipments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments.$post(args, options))
}

export async function getV1ShipmentsExternalShipmentIdExternalShipmentId(
  args: InferRequestType<
    (typeof client.v1.shipments.external_shipment_id)[':external_shipment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.shipments.external_shipment_id[':external_shipment_id'].$get(args, options),
  )
}

export async function putV1ShipmentsRecognize(
  args: InferRequestType<typeof client.v1.shipments.recognize.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments.recognize.$put(args, options))
}

export async function getV1ShipmentsShipmentId(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments[':shipment_id'].$get(args, options))
}

export async function putV1ShipmentsShipmentId(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments[':shipment_id'].$put(args, options))
}

export async function putV1ShipmentsShipmentIdCancel(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments[':shipment_id'].cancel.$put(args, options))
}

export async function getV1ShipmentsShipmentIdRates(
  args: InferRequestType<(typeof client.v1.shipments)[':shipment_id']['rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.shipments[':shipment_id'].rates.$get(args, options))
}

export async function postV1ShipmentsShipmentIdTagsTagName(
  args: InferRequestType<
    (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.shipments[':shipment_id'].tags[':tag_name'].$post(args, options),
  )
}

export async function deleteV1ShipmentsShipmentIdTagsTagName(
  args: InferRequestType<
    (typeof client.v1.shipments)[':shipment_id']['tags'][':tag_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.shipments[':shipment_id'].tags[':tag_name'].$delete(args, options),
  )
}

export async function getV1Tags(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.tags.$get(undefined, options))
}

export async function postV1TagsTagName(
  args: InferRequestType<(typeof client.v1.tags)[':tag_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tag_name'].$post(args, options))
}

export async function deleteV1TagsTagName(
  args: InferRequestType<(typeof client.v1.tags)[':tag_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tag_name'].$delete(args, options))
}

export async function putV1TagsTagNameNewTagName(
  args: InferRequestType<(typeof client.v1.tags)[':tag_name'][':new_tag_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tag_name'][':new_tag_name'].$put(args, options))
}

export async function postV1TokensEphemeral(
  args: InferRequestType<typeof client.v1.tokens.ephemeral.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tokens.ephemeral.$post(args, options))
}

export async function getV1Tracking(
  args: InferRequestType<typeof client.v1.tracking.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tracking.$get(args, options))
}

export async function postV1TrackingStart(
  args: InferRequestType<typeof client.v1.tracking.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tracking.start.$post(args, options))
}

export async function postV1TrackingStop(
  args: InferRequestType<typeof client.v1.tracking.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tracking.stop.$post(args, options))
}

export async function getV1Warehouses(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.warehouses.$get(undefined, options))
}

export async function postV1Warehouses(
  args: InferRequestType<typeof client.v1.warehouses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses.$post(args, options))
}

export async function getV1WarehousesWarehouseId(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses[':warehouse_id'].$get(args, options))
}

export async function putV1WarehousesWarehouseId(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses[':warehouse_id'].$put(args, options))
}

export async function deleteV1WarehousesWarehouseId(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses[':warehouse_id'].$delete(args, options))
}

export async function putV1WarehousesWarehouseIdSettings(
  args: InferRequestType<(typeof client.v1.warehouses)[':warehouse_id']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.warehouses[':warehouse_id'].settings.$put(args, options))
}

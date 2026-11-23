import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFrames(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
      'time-frames'
    ].$get(args, options),
  )
}

export async function getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTime(
  args: InferRequestType<
    (typeof client.api)['logistics-capacity']['resources']['carrier@{capacityType}@{shippingPolicyId}']['time-frames'][':windowDayF{windowStartTime}T{windowEndTime}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['logistics-capacity'].resources['carrier@{capacityType}@{shippingPolicyId}'][
      'time-frames'
    ][':windowDayF{windowStartTime}T{windowEndTime}'].$get(args, options),
  )
}

export async function postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblocked(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['adddayofweekblocked']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.carriers[':carrierId'].adddayofweekblocked.$post(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblocked(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['getdayofweekblocked']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.carriers[':carrierId'].getdayofweekblocked.$get(
      args,
      options,
    ),
  )
}

export async function postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblocked(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.carriers)[':carrierId']['removedayofweekblocked']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.carriers[':carrierId'].removedayofweekblocked.$post(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtConfigurationDocks(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.docks.$get(args, options))
}

export async function postApiLogisticsPvtConfigurationDocks(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.docks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.docks.$post(args, options))
}

export async function getApiLogisticsPvtConfigurationDocksDockId(
  args: InferRequestType<(typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.docks[':dockId'].$get(args, options),
  )
}

export async function deleteApiLogisticsPvtConfigurationDocksDockId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.docks[':dockId'].$delete(args, options),
  )
}

export async function postApiLogisticsPvtConfigurationDocksDockIdActivation(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['activation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.docks[':dockId'].activation.$post(args, options),
  )
}

export async function postApiLogisticsPvtConfigurationDocksDockIdDeactivation(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.docks)[':dockId']['deactivation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.docks[':dockId'].deactivation.$post(args, options),
  )
}

export async function postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdate(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId']['values']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.freights[':carrierId'].values.update.$post(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtConfigurationFreightsCarrierIdCepValues(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.freights)[':carrierId'][':cep']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.freights[':carrierId'][':cep'].values.$get(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtConfigurationGeoshape(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.geoshape.$get(args, options))
}

export async function putApiLogisticsPvtConfigurationGeoshape(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.geoshape.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.geoshape.$put(args, options))
}

export async function getApiLogisticsPvtConfigurationGeoshapePolygonName(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.geoshape[':polygonName'].$get(args, options),
  )
}

export async function deleteApiLogisticsPvtConfigurationGeoshapePolygonName(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.geoshape)[':polygonName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.geoshape[':polygonName'].$delete(args, options),
  )
}

export async function getApiLogisticsPvtConfigurationHolidays(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.holidays.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.holidays.$get(args, options))
}

export async function getApiLogisticsPvtConfigurationHolidaysHolidayId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.holidays[':holidayId'].$get(args, options),
  )
}

export async function putApiLogisticsPvtConfigurationHolidaysHolidayId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.holidays[':holidayId'].$put(args, options),
  )
}

export async function deleteApiLogisticsPvtConfigurationHolidaysHolidayId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.holidays)[':holidayId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.holidays[':holidayId'].$delete(args, options),
  )
}

export async function getApiLogisticsPvtConfigurationPickuppoints(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.pickuppoints.$get(args, options),
  )
}

export async function getApiLogisticsPvtConfigurationPickuppointsSearch(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.pickuppoints._search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.pickuppoints._search.$get(args, options),
  )
}

export async function getApiLogisticsPvtConfigurationPickuppointsPickupPointId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$get(args, options),
  )
}

export async function putApiLogisticsPvtConfigurationPickuppointsPickupPointId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$put(args, options),
  )
}

export async function deleteApiLogisticsPvtConfigurationPickuppointsPickupPointId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.pickuppoints)[':pickupPointId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.pickuppoints[':pickupPointId'].$delete(args, options),
  )
}

export async function getApiLogisticsPvtConfigurationWarehouses(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.warehouses.$get(args, options))
}

export async function postApiLogisticsPvtConfigurationWarehouses(
  args: InferRequestType<typeof client.api.logistics.pvt.configuration.warehouses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.configuration.warehouses.$post(args, options))
}

export async function getApiLogisticsPvtConfigurationWarehousesWarehouseId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$get(args, options),
  )
}

export async function deleteApiLogisticsPvtConfigurationWarehousesWarehouseId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.warehouses[':warehouseId'].$delete(args, options),
  )
}

export async function postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivation(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['activation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.warehouses[':warehouseId'].activation.$post(
      args,
      options,
    ),
  )
}

export async function postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivation(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.configuration.warehouses)[':warehouseId']['deactivation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.configuration.warehouses[':warehouseId'].deactivation.$post(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatched(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':itemId']['warehouses'][':warehouseId']['dispatched']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':itemId'].warehouses[':warehouseId'].dispatched.$get(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtInventoryItemsSkuIdDocksDockId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].$get(args, options),
  )
}

export async function getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['docks'][':dockId']['warehouses'][':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].docks[':dockId'].warehouses[
      ':warehouseId'
    ].$get(args, options),
  )
}

export async function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].$get(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLots(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots.$get(
      args,
      options,
    ),
  )
}

export async function putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
      ':supplyLotId'
    ].$put(args, options),
  )
}

export async function postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransfer(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.items)[':skuId']['warehouses'][':warehouseId']['supplyLots'][':supplyLotId']['transfer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.items[':skuId'].warehouses[':warehouseId'].supplyLots[
      ':supplyLotId'
    ].transfer.$post(args, options),
  )
}

export async function postApiLogisticsPvtInventoryReservations(
  args: InferRequestType<typeof client.api.logistics.pvt.inventory.reservations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.inventory.reservations.$post(args, options))
}

export async function getApiLogisticsPvtInventoryReservationsReservationId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.reservations[':reservationId'].$get(args, options),
  )
}

export async function postApiLogisticsPvtInventoryReservationsReservationIdAcknowledge(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.reservations[':reservationId'].acknowledge.$post(
      args,
      options,
    ),
  )
}

export async function postApiLogisticsPvtInventoryReservationsReservationIdCancel(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.reservations[':reservationId'].cancel.$post(args, options),
  )
}

export async function postApiLogisticsPvtInventoryReservationsReservationIdConfirm(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':reservationId']['confirm']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.reservations[':reservationId'].confirm.$post(args, options),
  )
}

export async function getApiLogisticsPvtInventoryReservationsWarehouseIdSkuId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.reservations)[':warehouseId'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.reservations[':warehouseId'][':skuId'].$get(args, options),
  )
}

export async function getApiLogisticsPvtInventorySkusSkuId(
  args: InferRequestType<(typeof client.api.logistics.pvt.inventory.skus)[':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.inventory.skus[':skuId'].$get(args, options))
}

export async function putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseId(
  args: InferRequestType<
    (typeof client.api.logistics.pvt.inventory.skus)[':skuId']['warehouses'][':warehouseId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt.inventory.skus[':skuId'].warehouses[':warehouseId'].$put(
      args,
      options,
    ),
  )
}

export async function getApiLogisticsPvtShippingPolicies(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt['shipping-policies'].$get(args, options))
}

export async function postApiLogisticsPvtShippingPolicies(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt['shipping-policies'].$post(args, options))
}

export async function getApiLogisticsPvtShippingPoliciesId(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt['shipping-policies'][':id'].$get(args, options),
  )
}

export async function putApiLogisticsPvtShippingPoliciesId(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt['shipping-policies'][':id'].$put(args, options),
  )
}

export async function deleteApiLogisticsPvtShippingPoliciesId(
  args: InferRequestType<(typeof client.api.logistics.pvt)['shipping-policies'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.logistics.pvt['shipping-policies'][':id'].$delete(args, options),
  )
}

export async function postApiLogisticsPvtShippingCalculate(
  args: InferRequestType<typeof client.api.logistics.pvt.shipping.calculate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.logistics.pvt.shipping.calculate.$post(args, options))
}

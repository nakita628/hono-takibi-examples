import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationDocksDockIdRoute,
  deleteApiLogisticsPvtConfigurationGeoshapePolygonNameRoute,
  deleteApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
  deleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
  deleteApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute,
  deleteApiLogisticsPvtShippingPoliciesIdRoute,
  getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesRoute,
  getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRoute,
  getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedRoute,
  getApiLogisticsPvtConfigurationDocksDockIdRoute,
  getApiLogisticsPvtConfigurationDocksRoute,
  getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesRoute,
  getApiLogisticsPvtConfigurationGeoshapePolygonNameRoute,
  getApiLogisticsPvtConfigurationGeoshapeRoute,
  getApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
  getApiLogisticsPvtConfigurationHolidaysRoute,
  getApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
  getApiLogisticsPvtConfigurationPickuppointsRoute,
  getApiLogisticsPvtConfigurationPickuppointsSearchRoute,
  getApiLogisticsPvtConfigurationWarehousesRoute,
  getApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute,
  getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedRoute,
  getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsRoute,
  getApiLogisticsPvtInventoryReservationsReservationIdRoute,
  getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdRoute,
  getApiLogisticsPvtInventorySkusSkuIdRoute,
  getApiLogisticsPvtShippingPoliciesIdRoute,
  getApiLogisticsPvtShippingPoliciesRoute,
  postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedRoute,
  postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedRoute,
  postApiLogisticsPvtConfigurationDocksDockIdActivationRoute,
  postApiLogisticsPvtConfigurationDocksDockIdDeactivationRoute,
  postApiLogisticsPvtConfigurationDocksRoute,
  postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateRoute,
  postApiLogisticsPvtConfigurationWarehousesRoute,
  postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationRoute,
  postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationRoute,
  postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdCancelRoute,
  postApiLogisticsPvtInventoryReservationsReservationIdConfirmRoute,
  postApiLogisticsPvtInventoryReservationsRoute,
  postApiLogisticsPvtShippingCalculateRoute,
  postApiLogisticsPvtShippingPoliciesRoute,
  putApiLogisticsPvtConfigurationGeoshapeRoute,
  putApiLogisticsPvtConfigurationHolidaysHolidayIdRoute,
  putApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute,
  putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdRoute,
  putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdRoute,
  putApiLogisticsPvtShippingPoliciesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(
    getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiLogisticsCapacityResourcesCarrierCapacityTypeShippingPolicyIdTimeFramesWindowDayFWindowStartTimeTWindowEndTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiLogisticsPvtConfigurationCarriersCarrierIdAdddayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationCarriersCarrierIdGetdayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationCarriersCarrierIdRemovedayofweekblockedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationDocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksDockIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationDocksDockIdDeactivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationFreightsCarrierIdValuesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationFreightsCarrierIdCepValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationGeoshapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationGeoshapeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationGeoshapePolygonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationGeoshapePolygonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationHolidaysHolidayIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationPickuppointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationPickuppointsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtConfigurationPickuppointsPickupPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postApiLogisticsPvtInventoryReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryReservationsReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtInventoryReservationsReservationIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryReservationsWarehouseIdSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventorySkusSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtShippingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtShippingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtShippingPoliciesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtShippingCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })

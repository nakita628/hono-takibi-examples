import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDcimCablesIdIndexRoute,
  deleteDcimConsolePortsIdIndexRoute,
  deleteDcimConsolePortTemplatesIdIndexRoute,
  deleteDcimConsoleServerPortsIdIndexRoute,
  deleteDcimConsoleServerPortTemplatesIdIndexRoute,
  deleteDcimDeviceBaysIdIndexRoute,
  deleteDcimDeviceBayTemplatesIdIndexRoute,
  deleteDcimDeviceRolesIdIndexRoute,
  deleteDcimDevicesIdIndexRoute,
  deleteDcimDeviceTypesIdIndexRoute,
  deleteDcimFrontPortsIdIndexRoute,
  deleteDcimFrontPortTemplatesIdIndexRoute,
  deleteDcimInterfacesIdIndexRoute,
  deleteDcimInterfaceTemplatesIdIndexRoute,
  deleteDcimInventoryItemsIdIndexRoute,
  deleteDcimManufacturersIdIndexRoute,
  deleteDcimPlatformsIdIndexRoute,
  deleteDcimPowerFeedsIdIndexRoute,
  deleteDcimPowerOutletsIdIndexRoute,
  deleteDcimPowerOutletTemplatesIdIndexRoute,
  deleteDcimPowerPanelsIdIndexRoute,
  deleteDcimPowerPortsIdIndexRoute,
  deleteDcimPowerPortTemplatesIdIndexRoute,
  deleteDcimRackGroupsIdIndexRoute,
  deleteDcimRackReservationsIdIndexRoute,
  deleteDcimRackRolesIdIndexRoute,
  deleteDcimRacksIdIndexRoute,
  deleteDcimRearPortsIdIndexRoute,
  deleteDcimRearPortTemplatesIdIndexRoute,
  deleteDcimRegionsIdIndexRoute,
  deleteDcimSitesIdIndexRoute,
  deleteDcimVirtualChassisIdIndexRoute,
  getDcimCablesIdIndexRoute,
  getDcimCablesIndexRoute,
  getDcimConnectedDeviceIndexRoute,
  getDcimConsoleConnectionsIndexRoute,
  getDcimConsolePortsIdIndexRoute,
  getDcimConsolePortsIdTraceIndexRoute,
  getDcimConsolePortsIndexRoute,
  getDcimConsolePortTemplatesIdIndexRoute,
  getDcimConsolePortTemplatesIndexRoute,
  getDcimConsoleServerPortsIdIndexRoute,
  getDcimConsoleServerPortsIdTraceIndexRoute,
  getDcimConsoleServerPortsIndexRoute,
  getDcimConsoleServerPortTemplatesIdIndexRoute,
  getDcimConsoleServerPortTemplatesIndexRoute,
  getDcimDeviceBaysIdIndexRoute,
  getDcimDeviceBaysIndexRoute,
  getDcimDeviceBayTemplatesIdIndexRoute,
  getDcimDeviceBayTemplatesIndexRoute,
  getDcimDeviceRolesIdIndexRoute,
  getDcimDeviceRolesIndexRoute,
  getDcimDevicesIdGraphsIndexRoute,
  getDcimDevicesIdIndexRoute,
  getDcimDevicesIdNapalmIndexRoute,
  getDcimDevicesIndexRoute,
  getDcimDeviceTypesIdIndexRoute,
  getDcimDeviceTypesIndexRoute,
  getDcimFrontPortsIdIndexRoute,
  getDcimFrontPortsIdTraceIndexRoute,
  getDcimFrontPortsIndexRoute,
  getDcimFrontPortTemplatesIdIndexRoute,
  getDcimFrontPortTemplatesIndexRoute,
  getDcimInterfaceConnectionsIndexRoute,
  getDcimInterfacesIdGraphsIndexRoute,
  getDcimInterfacesIdIndexRoute,
  getDcimInterfacesIdTraceIndexRoute,
  getDcimInterfacesIndexRoute,
  getDcimInterfaceTemplatesIdIndexRoute,
  getDcimInterfaceTemplatesIndexRoute,
  getDcimInventoryItemsIdIndexRoute,
  getDcimInventoryItemsIndexRoute,
  getDcimManufacturersIdIndexRoute,
  getDcimManufacturersIndexRoute,
  getDcimPlatformsIdIndexRoute,
  getDcimPlatformsIndexRoute,
  getDcimPowerConnectionsIndexRoute,
  getDcimPowerFeedsIdIndexRoute,
  getDcimPowerFeedsIndexRoute,
  getDcimPowerOutletsIdIndexRoute,
  getDcimPowerOutletsIdTraceIndexRoute,
  getDcimPowerOutletsIndexRoute,
  getDcimPowerOutletTemplatesIdIndexRoute,
  getDcimPowerOutletTemplatesIndexRoute,
  getDcimPowerPanelsIdIndexRoute,
  getDcimPowerPanelsIndexRoute,
  getDcimPowerPortsIdIndexRoute,
  getDcimPowerPortsIdTraceIndexRoute,
  getDcimPowerPortsIndexRoute,
  getDcimPowerPortTemplatesIdIndexRoute,
  getDcimPowerPortTemplatesIndexRoute,
  getDcimRackGroupsIdIndexRoute,
  getDcimRackGroupsIndexRoute,
  getDcimRackReservationsIdIndexRoute,
  getDcimRackReservationsIndexRoute,
  getDcimRackRolesIdIndexRoute,
  getDcimRackRolesIndexRoute,
  getDcimRacksIdElevationIndexRoute,
  getDcimRacksIdIndexRoute,
  getDcimRacksIndexRoute,
  getDcimRearPortsIdIndexRoute,
  getDcimRearPortsIdTraceIndexRoute,
  getDcimRearPortsIndexRoute,
  getDcimRearPortTemplatesIdIndexRoute,
  getDcimRearPortTemplatesIndexRoute,
  getDcimRegionsIdIndexRoute,
  getDcimRegionsIndexRoute,
  getDcimSitesIdGraphsIndexRoute,
  getDcimSitesIdIndexRoute,
  getDcimSitesIndexRoute,
  getDcimVirtualChassisIdIndexRoute,
  getDcimVirtualChassisIndexRoute,
  patchDcimCablesIdIndexRoute,
  patchDcimConsolePortsIdIndexRoute,
  patchDcimConsolePortTemplatesIdIndexRoute,
  patchDcimConsoleServerPortsIdIndexRoute,
  patchDcimConsoleServerPortTemplatesIdIndexRoute,
  patchDcimDeviceBaysIdIndexRoute,
  patchDcimDeviceBayTemplatesIdIndexRoute,
  patchDcimDeviceRolesIdIndexRoute,
  patchDcimDevicesIdIndexRoute,
  patchDcimDeviceTypesIdIndexRoute,
  patchDcimFrontPortsIdIndexRoute,
  patchDcimFrontPortTemplatesIdIndexRoute,
  patchDcimInterfacesIdIndexRoute,
  patchDcimInterfaceTemplatesIdIndexRoute,
  patchDcimInventoryItemsIdIndexRoute,
  patchDcimManufacturersIdIndexRoute,
  patchDcimPlatformsIdIndexRoute,
  patchDcimPowerFeedsIdIndexRoute,
  patchDcimPowerOutletsIdIndexRoute,
  patchDcimPowerOutletTemplatesIdIndexRoute,
  patchDcimPowerPanelsIdIndexRoute,
  patchDcimPowerPortsIdIndexRoute,
  patchDcimPowerPortTemplatesIdIndexRoute,
  patchDcimRackGroupsIdIndexRoute,
  patchDcimRackReservationsIdIndexRoute,
  patchDcimRackRolesIdIndexRoute,
  patchDcimRacksIdIndexRoute,
  patchDcimRearPortsIdIndexRoute,
  patchDcimRearPortTemplatesIdIndexRoute,
  patchDcimRegionsIdIndexRoute,
  patchDcimSitesIdIndexRoute,
  patchDcimVirtualChassisIdIndexRoute,
  postDcimCablesIndexRoute,
  postDcimConsolePortsIndexRoute,
  postDcimConsolePortTemplatesIndexRoute,
  postDcimConsoleServerPortsIndexRoute,
  postDcimConsoleServerPortTemplatesIndexRoute,
  postDcimDeviceBaysIndexRoute,
  postDcimDeviceBayTemplatesIndexRoute,
  postDcimDeviceRolesIndexRoute,
  postDcimDevicesIndexRoute,
  postDcimDeviceTypesIndexRoute,
  postDcimFrontPortsIndexRoute,
  postDcimFrontPortTemplatesIndexRoute,
  postDcimInterfacesIndexRoute,
  postDcimInterfaceTemplatesIndexRoute,
  postDcimInventoryItemsIndexRoute,
  postDcimManufacturersIndexRoute,
  postDcimPlatformsIndexRoute,
  postDcimPowerFeedsIndexRoute,
  postDcimPowerOutletsIndexRoute,
  postDcimPowerOutletTemplatesIndexRoute,
  postDcimPowerPanelsIndexRoute,
  postDcimPowerPortsIndexRoute,
  postDcimPowerPortTemplatesIndexRoute,
  postDcimRackGroupsIndexRoute,
  postDcimRackReservationsIndexRoute,
  postDcimRackRolesIndexRoute,
  postDcimRacksIndexRoute,
  postDcimRearPortsIndexRoute,
  postDcimRearPortTemplatesIndexRoute,
  postDcimRegionsIndexRoute,
  postDcimSitesIndexRoute,
  postDcimVirtualChassisIndexRoute,
  putDcimCablesIdIndexRoute,
  putDcimConsolePortsIdIndexRoute,
  putDcimConsolePortTemplatesIdIndexRoute,
  putDcimConsoleServerPortsIdIndexRoute,
  putDcimConsoleServerPortTemplatesIdIndexRoute,
  putDcimDeviceBaysIdIndexRoute,
  putDcimDeviceBayTemplatesIdIndexRoute,
  putDcimDeviceRolesIdIndexRoute,
  putDcimDevicesIdIndexRoute,
  putDcimDeviceTypesIdIndexRoute,
  putDcimFrontPortsIdIndexRoute,
  putDcimFrontPortTemplatesIdIndexRoute,
  putDcimInterfacesIdIndexRoute,
  putDcimInterfaceTemplatesIdIndexRoute,
  putDcimInventoryItemsIdIndexRoute,
  putDcimManufacturersIdIndexRoute,
  putDcimPlatformsIdIndexRoute,
  putDcimPowerFeedsIdIndexRoute,
  putDcimPowerOutletsIdIndexRoute,
  putDcimPowerOutletTemplatesIdIndexRoute,
  putDcimPowerPanelsIdIndexRoute,
  putDcimPowerPortsIdIndexRoute,
  putDcimPowerPortTemplatesIdIndexRoute,
  putDcimRackGroupsIdIndexRoute,
  putDcimRackReservationsIdIndexRoute,
  putDcimRackRolesIdIndexRoute,
  putDcimRacksIdIndexRoute,
  putDcimRearPortsIdIndexRoute,
  putDcimRearPortTemplatesIdIndexRoute,
  putDcimRegionsIdIndexRoute,
  putDcimSitesIdIndexRoute,
  putDcimVirtualChassisIdIndexRoute,
} from '../routes'

export const getDcimCablesIndexRouteHandler: RouteHandler<typeof getDcimCablesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDcimCablesIndexRouteHandler: RouteHandler<
  typeof postDcimCablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimCablesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimCablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimCablesIdIndexRouteHandler: RouteHandler<
  typeof getDcimCablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimCablesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimCablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimCablesIdIndexRouteHandler: RouteHandler<
  typeof putDcimCablesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConnectedDeviceIndexRouteHandler: RouteHandler<
  typeof getDcimConnectedDeviceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleConnectionsIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimConsolePortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsolePortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsolePortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimConsolePortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsolePortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimConsolePortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof postDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimConsolePortsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsolePortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortsIdIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsolePortsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimConsolePortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsolePortsIdIndexRouteHandler: RouteHandler<
  typeof putDcimConsolePortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimConsoleServerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsoleServerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsoleServerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimConsoleServerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsoleServerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimConsoleServerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof postDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimConsoleServerPortsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsoleServerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortsIdIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsoleServerPortsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimConsoleServerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsoleServerPortsIdIndexRouteHandler: RouteHandler<
  typeof putDcimConsoleServerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimDeviceBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimDeviceBaysIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBaysIdIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceBaysIdIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceBaysIdIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimDeviceRolesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceRolesIdIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceRolesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceRolesIdIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimDeviceTypesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceTypesIdIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceTypesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceTypesIdIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDevicesIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDevicesIndexRouteHandler: RouteHandler<
  typeof postDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimDevicesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimDevicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDevicesIdIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDevicesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimDevicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDevicesIdIndexRouteHandler: RouteHandler<
  typeof putDcimDevicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDevicesIdGraphsIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIdGraphsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDevicesIdNapalmIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIdNapalmIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimFrontPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimFrontPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimFrontPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimFrontPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimFrontPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimFrontPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof postDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimFrontPortsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimFrontPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortsIdIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimFrontPortsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimFrontPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimFrontPortsIdIndexRouteHandler: RouteHandler<
  typeof putDcimFrontPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfaceConnectionsIndexRouteHandler: RouteHandler<
  typeof getDcimInterfaceConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInterfaceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimInterfaceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfaceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimInterfaceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInterfaceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimInterfaceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInterfaceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimInterfaceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof postDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInterfacesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimInterfacesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfacesIdIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInterfacesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimInterfacesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInterfacesIdIndexRouteHandler: RouteHandler<
  typeof putDcimInterfacesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfacesIdGraphsIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIdGraphsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfacesIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof postDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemsIdIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemsIdIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof getDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof postDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimManufacturersIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimManufacturersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimManufacturersIdIndexRouteHandler: RouteHandler<
  typeof getDcimManufacturersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimManufacturersIdIndexRouteHandler: RouteHandler<
  typeof patchDcimManufacturersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimManufacturersIdIndexRouteHandler: RouteHandler<
  typeof putDcimManufacturersIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof getDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof postDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPlatformsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPlatformsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPlatformsIdIndexRouteHandler: RouteHandler<
  typeof getDcimPlatformsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPlatformsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPlatformsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPlatformsIdIndexRouteHandler: RouteHandler<
  typeof putDcimPlatformsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerConnectionsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerConnectionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerFeedsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerFeedsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerFeedsIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerFeedsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerFeedsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerFeedsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerFeedsIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerFeedsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerOutletTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerOutletTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerOutletTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerOutletTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerOutletTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerOutletTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerOutletsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerOutletsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletsIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerOutletsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerOutletsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerOutletsIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerOutletsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerPanelsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPanelsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPanelsIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPanelsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPanelsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPanelsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPanelsIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPanelsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerPortsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortsIdIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPortsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPortsIdIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackGroupsIndexRouteHandler: RouteHandler<
  typeof getDcimRackGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRackGroupsIndexRouteHandler: RouteHandler<
  typeof postDcimRackGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRackGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRackGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackGroupsIdIndexRouteHandler: RouteHandler<
  typeof getDcimRackGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRackGroupsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRackGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRackGroupsIdIndexRouteHandler: RouteHandler<
  typeof putDcimRackGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof getDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof postDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRackReservationsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRackReservationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackReservationsIdIndexRouteHandler: RouteHandler<
  typeof getDcimRackReservationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRackReservationsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRackReservationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRackReservationsIdIndexRouteHandler: RouteHandler<
  typeof putDcimRackReservationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof getDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof postDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRackRolesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRackRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackRolesIdIndexRouteHandler: RouteHandler<
  typeof getDcimRackRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRackRolesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRackRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRackRolesIdIndexRouteHandler: RouteHandler<
  typeof putDcimRackRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRacksIndexRouteHandler: RouteHandler<typeof getDcimRacksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDcimRacksIndexRouteHandler: RouteHandler<typeof postDcimRacksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDcimRacksIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRacksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRacksIdIndexRouteHandler: RouteHandler<
  typeof getDcimRacksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRacksIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRacksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRacksIdIndexRouteHandler: RouteHandler<
  typeof putDcimRacksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRacksIdElevationIndexRouteHandler: RouteHandler<
  typeof getDcimRacksIdElevationIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRearPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRearPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRearPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRearPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRearPortTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimRearPortTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof postDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRearPortsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRearPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortsIdIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRearPortsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRearPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRearPortsIdIndexRouteHandler: RouteHandler<
  typeof putDcimRearPortsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRegionsIndexRouteHandler: RouteHandler<
  typeof getDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRegionsIndexRouteHandler: RouteHandler<
  typeof postDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRegionsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimRegionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRegionsIdIndexRouteHandler: RouteHandler<
  typeof getDcimRegionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRegionsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimRegionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRegionsIdIndexRouteHandler: RouteHandler<
  typeof putDcimRegionsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSitesIndexRouteHandler: RouteHandler<typeof getDcimSitesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDcimSitesIndexRouteHandler: RouteHandler<typeof postDcimSitesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDcimSitesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimSitesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSitesIdIndexRouteHandler: RouteHandler<
  typeof getDcimSitesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimSitesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimSitesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimSitesIdIndexRouteHandler: RouteHandler<
  typeof putDcimSitesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSitesIdGraphsIndexRouteHandler: RouteHandler<
  typeof getDcimSitesIdGraphsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof getDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof postDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimVirtualChassisIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimVirtualChassisIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimVirtualChassisIdIndexRouteHandler: RouteHandler<
  typeof getDcimVirtualChassisIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimVirtualChassisIdIndexRouteHandler: RouteHandler<
  typeof patchDcimVirtualChassisIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimVirtualChassisIdIndexRouteHandler: RouteHandler<
  typeof putDcimVirtualChassisIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

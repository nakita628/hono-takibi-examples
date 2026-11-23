import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDcimCablesIdIndexRoute,
  deleteDcimCablesIndexRoute,
  deleteDcimCableTerminationsIdIndexRoute,
  deleteDcimCableTerminationsIndexRoute,
  deleteDcimConsolePortsIdIndexRoute,
  deleteDcimConsolePortsIndexRoute,
  deleteDcimConsolePortTemplatesIdIndexRoute,
  deleteDcimConsolePortTemplatesIndexRoute,
  deleteDcimConsoleServerPortsIdIndexRoute,
  deleteDcimConsoleServerPortsIndexRoute,
  deleteDcimConsoleServerPortTemplatesIdIndexRoute,
  deleteDcimConsoleServerPortTemplatesIndexRoute,
  deleteDcimDeviceBaysIdIndexRoute,
  deleteDcimDeviceBaysIndexRoute,
  deleteDcimDeviceBayTemplatesIdIndexRoute,
  deleteDcimDeviceBayTemplatesIndexRoute,
  deleteDcimDeviceRolesIdIndexRoute,
  deleteDcimDeviceRolesIndexRoute,
  deleteDcimDevicesIdIndexRoute,
  deleteDcimDevicesIndexRoute,
  deleteDcimDeviceTypesIdIndexRoute,
  deleteDcimDeviceTypesIndexRoute,
  deleteDcimFrontPortsIdIndexRoute,
  deleteDcimFrontPortsIndexRoute,
  deleteDcimFrontPortTemplatesIdIndexRoute,
  deleteDcimFrontPortTemplatesIndexRoute,
  deleteDcimInterfacesIdIndexRoute,
  deleteDcimInterfacesIndexRoute,
  deleteDcimInterfaceTemplatesIdIndexRoute,
  deleteDcimInterfaceTemplatesIndexRoute,
  deleteDcimInventoryItemRolesIdIndexRoute,
  deleteDcimInventoryItemRolesIndexRoute,
  deleteDcimInventoryItemsIdIndexRoute,
  deleteDcimInventoryItemsIndexRoute,
  deleteDcimInventoryItemTemplatesIdIndexRoute,
  deleteDcimInventoryItemTemplatesIndexRoute,
  deleteDcimLocationsIdIndexRoute,
  deleteDcimLocationsIndexRoute,
  deleteDcimManufacturersIdIndexRoute,
  deleteDcimManufacturersIndexRoute,
  deleteDcimModuleBaysIdIndexRoute,
  deleteDcimModuleBaysIndexRoute,
  deleteDcimModuleBayTemplatesIdIndexRoute,
  deleteDcimModuleBayTemplatesIndexRoute,
  deleteDcimModulesIdIndexRoute,
  deleteDcimModulesIndexRoute,
  deleteDcimModuleTypesIdIndexRoute,
  deleteDcimModuleTypesIndexRoute,
  deleteDcimPlatformsIdIndexRoute,
  deleteDcimPlatformsIndexRoute,
  deleteDcimPowerFeedsIdIndexRoute,
  deleteDcimPowerFeedsIndexRoute,
  deleteDcimPowerOutletsIdIndexRoute,
  deleteDcimPowerOutletsIndexRoute,
  deleteDcimPowerOutletTemplatesIdIndexRoute,
  deleteDcimPowerOutletTemplatesIndexRoute,
  deleteDcimPowerPanelsIdIndexRoute,
  deleteDcimPowerPanelsIndexRoute,
  deleteDcimPowerPortsIdIndexRoute,
  deleteDcimPowerPortsIndexRoute,
  deleteDcimPowerPortTemplatesIdIndexRoute,
  deleteDcimPowerPortTemplatesIndexRoute,
  deleteDcimRackReservationsIdIndexRoute,
  deleteDcimRackReservationsIndexRoute,
  deleteDcimRackRolesIdIndexRoute,
  deleteDcimRackRolesIndexRoute,
  deleteDcimRacksIdIndexRoute,
  deleteDcimRacksIndexRoute,
  deleteDcimRearPortsIdIndexRoute,
  deleteDcimRearPortsIndexRoute,
  deleteDcimRearPortTemplatesIdIndexRoute,
  deleteDcimRearPortTemplatesIndexRoute,
  deleteDcimRegionsIdIndexRoute,
  deleteDcimRegionsIndexRoute,
  deleteDcimSiteGroupsIdIndexRoute,
  deleteDcimSiteGroupsIndexRoute,
  deleteDcimSitesIdIndexRoute,
  deleteDcimSitesIndexRoute,
  deleteDcimVirtualChassisIdIndexRoute,
  deleteDcimVirtualChassisIndexRoute,
  deleteDcimVirtualDeviceContextsIdIndexRoute,
  deleteDcimVirtualDeviceContextsIndexRoute,
  getDcimCablesIdIndexRoute,
  getDcimCablesIndexRoute,
  getDcimCableTerminationsIdIndexRoute,
  getDcimCableTerminationsIndexRoute,
  getDcimConnectedDeviceIndexRoute,
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
  getDcimDevicesIdIndexRoute,
  getDcimDevicesIdNapalmIndexRoute,
  getDcimDevicesIndexRoute,
  getDcimDeviceTypesIdIndexRoute,
  getDcimDeviceTypesIndexRoute,
  getDcimFrontPortsIdIndexRoute,
  getDcimFrontPortsIdPathsIndexRoute,
  getDcimFrontPortsIndexRoute,
  getDcimFrontPortTemplatesIdIndexRoute,
  getDcimFrontPortTemplatesIndexRoute,
  getDcimInterfacesIdIndexRoute,
  getDcimInterfacesIdTraceIndexRoute,
  getDcimInterfacesIndexRoute,
  getDcimInterfaceTemplatesIdIndexRoute,
  getDcimInterfaceTemplatesIndexRoute,
  getDcimInventoryItemRolesIdIndexRoute,
  getDcimInventoryItemRolesIndexRoute,
  getDcimInventoryItemsIdIndexRoute,
  getDcimInventoryItemsIndexRoute,
  getDcimInventoryItemTemplatesIdIndexRoute,
  getDcimInventoryItemTemplatesIndexRoute,
  getDcimLocationsIdIndexRoute,
  getDcimLocationsIndexRoute,
  getDcimManufacturersIdIndexRoute,
  getDcimManufacturersIndexRoute,
  getDcimModuleBaysIdIndexRoute,
  getDcimModuleBaysIndexRoute,
  getDcimModuleBayTemplatesIdIndexRoute,
  getDcimModuleBayTemplatesIndexRoute,
  getDcimModulesIdIndexRoute,
  getDcimModulesIndexRoute,
  getDcimModuleTypesIdIndexRoute,
  getDcimModuleTypesIndexRoute,
  getDcimPlatformsIdIndexRoute,
  getDcimPlatformsIndexRoute,
  getDcimPowerFeedsIdIndexRoute,
  getDcimPowerFeedsIdTraceIndexRoute,
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
  getDcimRackReservationsIdIndexRoute,
  getDcimRackReservationsIndexRoute,
  getDcimRackRolesIdIndexRoute,
  getDcimRackRolesIndexRoute,
  getDcimRacksIdElevationIndexRoute,
  getDcimRacksIdIndexRoute,
  getDcimRacksIndexRoute,
  getDcimRearPortsIdIndexRoute,
  getDcimRearPortsIdPathsIndexRoute,
  getDcimRearPortsIndexRoute,
  getDcimRearPortTemplatesIdIndexRoute,
  getDcimRearPortTemplatesIndexRoute,
  getDcimRegionsIdIndexRoute,
  getDcimRegionsIndexRoute,
  getDcimSiteGroupsIdIndexRoute,
  getDcimSiteGroupsIndexRoute,
  getDcimSitesIdIndexRoute,
  getDcimSitesIndexRoute,
  getDcimVirtualChassisIdIndexRoute,
  getDcimVirtualChassisIndexRoute,
  getDcimVirtualDeviceContextsIdIndexRoute,
  getDcimVirtualDeviceContextsIndexRoute,
  patchDcimCablesIdIndexRoute,
  patchDcimCablesIndexRoute,
  patchDcimCableTerminationsIdIndexRoute,
  patchDcimCableTerminationsIndexRoute,
  patchDcimConsolePortsIdIndexRoute,
  patchDcimConsolePortsIndexRoute,
  patchDcimConsolePortTemplatesIdIndexRoute,
  patchDcimConsolePortTemplatesIndexRoute,
  patchDcimConsoleServerPortsIdIndexRoute,
  patchDcimConsoleServerPortsIndexRoute,
  patchDcimConsoleServerPortTemplatesIdIndexRoute,
  patchDcimConsoleServerPortTemplatesIndexRoute,
  patchDcimDeviceBaysIdIndexRoute,
  patchDcimDeviceBaysIndexRoute,
  patchDcimDeviceBayTemplatesIdIndexRoute,
  patchDcimDeviceBayTemplatesIndexRoute,
  patchDcimDeviceRolesIdIndexRoute,
  patchDcimDeviceRolesIndexRoute,
  patchDcimDevicesIdIndexRoute,
  patchDcimDevicesIndexRoute,
  patchDcimDeviceTypesIdIndexRoute,
  patchDcimDeviceTypesIndexRoute,
  patchDcimFrontPortsIdIndexRoute,
  patchDcimFrontPortsIndexRoute,
  patchDcimFrontPortTemplatesIdIndexRoute,
  patchDcimFrontPortTemplatesIndexRoute,
  patchDcimInterfacesIdIndexRoute,
  patchDcimInterfacesIndexRoute,
  patchDcimInterfaceTemplatesIdIndexRoute,
  patchDcimInterfaceTemplatesIndexRoute,
  patchDcimInventoryItemRolesIdIndexRoute,
  patchDcimInventoryItemRolesIndexRoute,
  patchDcimInventoryItemsIdIndexRoute,
  patchDcimInventoryItemsIndexRoute,
  patchDcimInventoryItemTemplatesIdIndexRoute,
  patchDcimInventoryItemTemplatesIndexRoute,
  patchDcimLocationsIdIndexRoute,
  patchDcimLocationsIndexRoute,
  patchDcimManufacturersIdIndexRoute,
  patchDcimManufacturersIndexRoute,
  patchDcimModuleBaysIdIndexRoute,
  patchDcimModuleBaysIndexRoute,
  patchDcimModuleBayTemplatesIdIndexRoute,
  patchDcimModuleBayTemplatesIndexRoute,
  patchDcimModulesIdIndexRoute,
  patchDcimModulesIndexRoute,
  patchDcimModuleTypesIdIndexRoute,
  patchDcimModuleTypesIndexRoute,
  patchDcimPlatformsIdIndexRoute,
  patchDcimPlatformsIndexRoute,
  patchDcimPowerFeedsIdIndexRoute,
  patchDcimPowerFeedsIndexRoute,
  patchDcimPowerOutletsIdIndexRoute,
  patchDcimPowerOutletsIndexRoute,
  patchDcimPowerOutletTemplatesIdIndexRoute,
  patchDcimPowerOutletTemplatesIndexRoute,
  patchDcimPowerPanelsIdIndexRoute,
  patchDcimPowerPanelsIndexRoute,
  patchDcimPowerPortsIdIndexRoute,
  patchDcimPowerPortsIndexRoute,
  patchDcimPowerPortTemplatesIdIndexRoute,
  patchDcimPowerPortTemplatesIndexRoute,
  patchDcimRackReservationsIdIndexRoute,
  patchDcimRackReservationsIndexRoute,
  patchDcimRackRolesIdIndexRoute,
  patchDcimRackRolesIndexRoute,
  patchDcimRacksIdIndexRoute,
  patchDcimRacksIndexRoute,
  patchDcimRearPortsIdIndexRoute,
  patchDcimRearPortsIndexRoute,
  patchDcimRearPortTemplatesIdIndexRoute,
  patchDcimRearPortTemplatesIndexRoute,
  patchDcimRegionsIdIndexRoute,
  patchDcimRegionsIndexRoute,
  patchDcimSiteGroupsIdIndexRoute,
  patchDcimSiteGroupsIndexRoute,
  patchDcimSitesIdIndexRoute,
  patchDcimSitesIndexRoute,
  patchDcimVirtualChassisIdIndexRoute,
  patchDcimVirtualChassisIndexRoute,
  patchDcimVirtualDeviceContextsIdIndexRoute,
  patchDcimVirtualDeviceContextsIndexRoute,
  postDcimCablesIndexRoute,
  postDcimCableTerminationsIndexRoute,
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
  postDcimInventoryItemRolesIndexRoute,
  postDcimInventoryItemsIndexRoute,
  postDcimInventoryItemTemplatesIndexRoute,
  postDcimLocationsIndexRoute,
  postDcimManufacturersIndexRoute,
  postDcimModuleBaysIndexRoute,
  postDcimModuleBayTemplatesIndexRoute,
  postDcimModulesIndexRoute,
  postDcimModuleTypesIndexRoute,
  postDcimPlatformsIndexRoute,
  postDcimPowerFeedsIndexRoute,
  postDcimPowerOutletsIndexRoute,
  postDcimPowerOutletTemplatesIndexRoute,
  postDcimPowerPanelsIndexRoute,
  postDcimPowerPortsIndexRoute,
  postDcimPowerPortTemplatesIndexRoute,
  postDcimRackReservationsIndexRoute,
  postDcimRackRolesIndexRoute,
  postDcimRacksIndexRoute,
  postDcimRearPortsIndexRoute,
  postDcimRearPortTemplatesIndexRoute,
  postDcimRegionsIndexRoute,
  postDcimSiteGroupsIndexRoute,
  postDcimSitesIndexRoute,
  postDcimVirtualChassisIndexRoute,
  postDcimVirtualDeviceContextsIndexRoute,
  putDcimCablesIdIndexRoute,
  putDcimCablesIndexRoute,
  putDcimCableTerminationsIdIndexRoute,
  putDcimCableTerminationsIndexRoute,
  putDcimConsolePortsIdIndexRoute,
  putDcimConsolePortsIndexRoute,
  putDcimConsolePortTemplatesIdIndexRoute,
  putDcimConsolePortTemplatesIndexRoute,
  putDcimConsoleServerPortsIdIndexRoute,
  putDcimConsoleServerPortsIndexRoute,
  putDcimConsoleServerPortTemplatesIdIndexRoute,
  putDcimConsoleServerPortTemplatesIndexRoute,
  putDcimDeviceBaysIdIndexRoute,
  putDcimDeviceBaysIndexRoute,
  putDcimDeviceBayTemplatesIdIndexRoute,
  putDcimDeviceBayTemplatesIndexRoute,
  putDcimDeviceRolesIdIndexRoute,
  putDcimDeviceRolesIndexRoute,
  putDcimDevicesIdIndexRoute,
  putDcimDevicesIndexRoute,
  putDcimDeviceTypesIdIndexRoute,
  putDcimDeviceTypesIndexRoute,
  putDcimFrontPortsIdIndexRoute,
  putDcimFrontPortsIndexRoute,
  putDcimFrontPortTemplatesIdIndexRoute,
  putDcimFrontPortTemplatesIndexRoute,
  putDcimInterfacesIdIndexRoute,
  putDcimInterfacesIndexRoute,
  putDcimInterfaceTemplatesIdIndexRoute,
  putDcimInterfaceTemplatesIndexRoute,
  putDcimInventoryItemRolesIdIndexRoute,
  putDcimInventoryItemRolesIndexRoute,
  putDcimInventoryItemsIdIndexRoute,
  putDcimInventoryItemsIndexRoute,
  putDcimInventoryItemTemplatesIdIndexRoute,
  putDcimInventoryItemTemplatesIndexRoute,
  putDcimLocationsIdIndexRoute,
  putDcimLocationsIndexRoute,
  putDcimManufacturersIdIndexRoute,
  putDcimManufacturersIndexRoute,
  putDcimModuleBaysIdIndexRoute,
  putDcimModuleBaysIndexRoute,
  putDcimModuleBayTemplatesIdIndexRoute,
  putDcimModuleBayTemplatesIndexRoute,
  putDcimModulesIdIndexRoute,
  putDcimModulesIndexRoute,
  putDcimModuleTypesIdIndexRoute,
  putDcimModuleTypesIndexRoute,
  putDcimPlatformsIdIndexRoute,
  putDcimPlatformsIndexRoute,
  putDcimPowerFeedsIdIndexRoute,
  putDcimPowerFeedsIndexRoute,
  putDcimPowerOutletsIdIndexRoute,
  putDcimPowerOutletsIndexRoute,
  putDcimPowerOutletTemplatesIdIndexRoute,
  putDcimPowerOutletTemplatesIndexRoute,
  putDcimPowerPanelsIdIndexRoute,
  putDcimPowerPanelsIndexRoute,
  putDcimPowerPortsIdIndexRoute,
  putDcimPowerPortsIndexRoute,
  putDcimPowerPortTemplatesIdIndexRoute,
  putDcimPowerPortTemplatesIndexRoute,
  putDcimRackReservationsIdIndexRoute,
  putDcimRackReservationsIndexRoute,
  putDcimRackRolesIdIndexRoute,
  putDcimRackRolesIndexRoute,
  putDcimRacksIdIndexRoute,
  putDcimRacksIndexRoute,
  putDcimRearPortsIdIndexRoute,
  putDcimRearPortsIndexRoute,
  putDcimRearPortTemplatesIdIndexRoute,
  putDcimRearPortTemplatesIndexRoute,
  putDcimRegionsIdIndexRoute,
  putDcimRegionsIndexRoute,
  putDcimSiteGroupsIdIndexRoute,
  putDcimSiteGroupsIndexRoute,
  putDcimSitesIdIndexRoute,
  putDcimSitesIndexRoute,
  putDcimVirtualChassisIdIndexRoute,
  putDcimVirtualChassisIndexRoute,
  putDcimVirtualDeviceContextsIdIndexRoute,
  putDcimVirtualDeviceContextsIndexRoute,
} from '../routes'

export const deleteDcimCableTerminationsIndexRouteHandler: RouteHandler<
  typeof deleteDcimCableTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimCableTerminationsIndexRouteHandler: RouteHandler<
  typeof getDcimCableTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimCableTerminationsIndexRouteHandler: RouteHandler<
  typeof patchDcimCableTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimCableTerminationsIndexRouteHandler: RouteHandler<
  typeof postDcimCableTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimCableTerminationsIndexRouteHandler: RouteHandler<
  typeof putDcimCableTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimCableTerminationsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimCableTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimCableTerminationsIdIndexRouteHandler: RouteHandler<
  typeof getDcimCableTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimCableTerminationsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimCableTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimCableTerminationsIdIndexRouteHandler: RouteHandler<
  typeof putDcimCableTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimCablesIndexRouteHandler: RouteHandler<
  typeof deleteDcimCablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimCablesIndexRouteHandler: RouteHandler<typeof getDcimCablesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDcimCablesIndexRouteHandler: RouteHandler<
  typeof patchDcimCablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimCablesIndexRouteHandler: RouteHandler<
  typeof postDcimCablesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimCablesIndexRouteHandler: RouteHandler<typeof putDcimCablesIndexRoute> = async (
  c,
) => {
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

export const deleteDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimConsolePortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsolePortTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimConsolePortTemplatesIndexRoute
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

export const deleteDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof getDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof patchDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof postDcimConsolePortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsolePortsIndexRouteHandler: RouteHandler<
  typeof putDcimConsolePortsIndexRoute
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

export const deleteDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimConsoleServerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsoleServerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimConsoleServerPortTemplatesIndexRoute
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

export const deleteDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof deleteDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof getDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof patchDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof postDcimConsoleServerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimConsoleServerPortsIndexRouteHandler: RouteHandler<
  typeof putDcimConsoleServerPortsIndexRoute
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

export const deleteDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceBayTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceBayTemplatesIndexRoute
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

export const deleteDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceBaysIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceBaysIndexRoute
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

export const deleteDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceRolesIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceRolesIndexRoute
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

export const deleteDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof deleteDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof getDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof patchDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof postDcimDeviceTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDeviceTypesIndexRouteHandler: RouteHandler<
  typeof putDcimDeviceTypesIndexRoute
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

export const deleteDcimDevicesIndexRouteHandler: RouteHandler<
  typeof deleteDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimDevicesIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimDevicesIndexRouteHandler: RouteHandler<
  typeof patchDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimDevicesIndexRouteHandler: RouteHandler<
  typeof postDcimDevicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimDevicesIndexRouteHandler: RouteHandler<
  typeof putDcimDevicesIndexRoute
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

export const getDcimDevicesIdNapalmIndexRouteHandler: RouteHandler<
  typeof getDcimDevicesIdNapalmIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimFrontPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimFrontPortTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimFrontPortTemplatesIndexRoute
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

export const deleteDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof deleteDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof patchDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof postDcimFrontPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimFrontPortsIndexRouteHandler: RouteHandler<
  typeof putDcimFrontPortsIndexRoute
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

export const getDcimFrontPortsIdPathsIndexRouteHandler: RouteHandler<
  typeof getDcimFrontPortsIdPathsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimInterfaceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInterfaceTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimInterfaceTemplatesIndexRoute
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

export const deleteDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof deleteDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof patchDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof postDcimInterfacesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInterfacesIndexRouteHandler: RouteHandler<
  typeof putDcimInterfacesIndexRoute
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

export const getDcimInterfacesIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimInterfacesIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemRolesIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemRolesIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemRolesIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInventoryItemRolesIndexRouteHandler: RouteHandler<
  typeof postDcimInventoryItemRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemRolesIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemRolesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemRolesIdIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemRolesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemRolesIdIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInventoryItemTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimInventoryItemTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof deleteDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof getDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof patchDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof postDcimInventoryItemsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimInventoryItemsIndexRouteHandler: RouteHandler<
  typeof putDcimInventoryItemsIndexRoute
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

export const deleteDcimLocationsIndexRouteHandler: RouteHandler<
  typeof deleteDcimLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimLocationsIndexRouteHandler: RouteHandler<
  typeof getDcimLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimLocationsIndexRouteHandler: RouteHandler<
  typeof patchDcimLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimLocationsIndexRouteHandler: RouteHandler<
  typeof postDcimLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimLocationsIndexRouteHandler: RouteHandler<
  typeof putDcimLocationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimLocationsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimLocationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimLocationsIdIndexRouteHandler: RouteHandler<
  typeof getDcimLocationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimLocationsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimLocationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimLocationsIdIndexRouteHandler: RouteHandler<
  typeof putDcimLocationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof deleteDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof getDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof patchDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof postDcimManufacturersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimManufacturersIndexRouteHandler: RouteHandler<
  typeof putDcimManufacturersIndexRoute
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

export const deleteDcimModuleBayTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleBayTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimModuleBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleBayTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimModuleBayTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimModuleBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleBayTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimModuleBayTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModuleBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getDcimModuleBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleBayTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putDcimModuleBayTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModuleBaysIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleBaysIndexRouteHandler: RouteHandler<
  typeof getDcimModuleBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleBaysIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimModuleBaysIndexRouteHandler: RouteHandler<
  typeof postDcimModuleBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleBaysIndexRouteHandler: RouteHandler<
  typeof putDcimModuleBaysIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModuleBaysIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleBaysIdIndexRouteHandler: RouteHandler<
  typeof getDcimModuleBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleBaysIdIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleBaysIdIndexRouteHandler: RouteHandler<
  typeof putDcimModuleBaysIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModuleTypesIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleTypesIndexRouteHandler: RouteHandler<
  typeof getDcimModuleTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleTypesIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimModuleTypesIndexRouteHandler: RouteHandler<
  typeof postDcimModuleTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleTypesIndexRouteHandler: RouteHandler<
  typeof putDcimModuleTypesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModuleTypesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimModuleTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModuleTypesIdIndexRouteHandler: RouteHandler<
  typeof getDcimModuleTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModuleTypesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimModuleTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModuleTypesIdIndexRouteHandler: RouteHandler<
  typeof putDcimModuleTypesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModulesIndexRouteHandler: RouteHandler<
  typeof deleteDcimModulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModulesIndexRouteHandler: RouteHandler<
  typeof getDcimModulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModulesIndexRouteHandler: RouteHandler<
  typeof patchDcimModulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimModulesIndexRouteHandler: RouteHandler<
  typeof postDcimModulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModulesIndexRouteHandler: RouteHandler<
  typeof putDcimModulesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimModulesIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimModulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimModulesIdIndexRouteHandler: RouteHandler<
  typeof getDcimModulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimModulesIdIndexRouteHandler: RouteHandler<
  typeof patchDcimModulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimModulesIdIndexRouteHandler: RouteHandler<
  typeof putDcimModulesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof deleteDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof getDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof patchDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof postDcimPlatformsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPlatformsIndexRouteHandler: RouteHandler<
  typeof putDcimPlatformsIndexRoute
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

export const deleteDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerFeedsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerFeedsIndexRouteHandler: RouteHandler<
  typeof putDcimPowerFeedsIndexRoute
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

export const getDcimPowerFeedsIdTraceIndexRouteHandler: RouteHandler<
  typeof getDcimPowerFeedsIdTraceIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimPowerOutletTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerOutletTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimPowerOutletTemplatesIndexRoute
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

export const deleteDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerOutletsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerOutletsIndexRouteHandler: RouteHandler<
  typeof putDcimPowerOutletsIndexRoute
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

export const deleteDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPanelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPanelsIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPanelsIndexRoute
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

export const deleteDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPortTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPortTemplatesIndexRoute
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

export const deleteDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof deleteDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof getDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof patchDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof postDcimPowerPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimPowerPortsIndexRouteHandler: RouteHandler<
  typeof putDcimPowerPortsIndexRoute
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

export const deleteDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof deleteDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof getDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof patchDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof postDcimRackReservationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRackReservationsIndexRouteHandler: RouteHandler<
  typeof putDcimRackReservationsIndexRoute
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

export const deleteDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof deleteDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof getDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof patchDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof postDcimRackRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRackRolesIndexRouteHandler: RouteHandler<
  typeof putDcimRackRolesIndexRoute
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

export const deleteDcimRacksIndexRouteHandler: RouteHandler<
  typeof deleteDcimRacksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRacksIndexRouteHandler: RouteHandler<typeof getDcimRacksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDcimRacksIndexRouteHandler: RouteHandler<
  typeof patchDcimRacksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRacksIndexRouteHandler: RouteHandler<typeof postDcimRacksIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDcimRacksIndexRouteHandler: RouteHandler<typeof putDcimRacksIndexRoute> = async (
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

export const deleteDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof patchDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof postDcimRearPortTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRearPortTemplatesIndexRouteHandler: RouteHandler<
  typeof putDcimRearPortTemplatesIndexRoute
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

export const deleteDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof deleteDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof patchDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof postDcimRearPortsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRearPortsIndexRouteHandler: RouteHandler<
  typeof putDcimRearPortsIndexRoute
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

export const getDcimRearPortsIdPathsIndexRouteHandler: RouteHandler<
  typeof getDcimRearPortsIdPathsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimRegionsIndexRouteHandler: RouteHandler<
  typeof deleteDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimRegionsIndexRouteHandler: RouteHandler<
  typeof getDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimRegionsIndexRouteHandler: RouteHandler<
  typeof patchDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimRegionsIndexRouteHandler: RouteHandler<
  typeof postDcimRegionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimRegionsIndexRouteHandler: RouteHandler<
  typeof putDcimRegionsIndexRoute
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

export const deleteDcimSiteGroupsIndexRouteHandler: RouteHandler<
  typeof deleteDcimSiteGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSiteGroupsIndexRouteHandler: RouteHandler<
  typeof getDcimSiteGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimSiteGroupsIndexRouteHandler: RouteHandler<
  typeof patchDcimSiteGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimSiteGroupsIndexRouteHandler: RouteHandler<
  typeof postDcimSiteGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimSiteGroupsIndexRouteHandler: RouteHandler<
  typeof putDcimSiteGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimSiteGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimSiteGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSiteGroupsIdIndexRouteHandler: RouteHandler<
  typeof getDcimSiteGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimSiteGroupsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimSiteGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimSiteGroupsIdIndexRouteHandler: RouteHandler<
  typeof putDcimSiteGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimSitesIndexRouteHandler: RouteHandler<
  typeof deleteDcimSitesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimSitesIndexRouteHandler: RouteHandler<typeof getDcimSitesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchDcimSitesIndexRouteHandler: RouteHandler<
  typeof patchDcimSitesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimSitesIndexRouteHandler: RouteHandler<typeof postDcimSitesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putDcimSitesIndexRouteHandler: RouteHandler<typeof putDcimSitesIndexRoute> = async (
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

export const deleteDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof deleteDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof getDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof patchDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof postDcimVirtualChassisIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimVirtualChassisIndexRouteHandler: RouteHandler<
  typeof putDcimVirtualChassisIndexRoute
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

export const deleteDcimVirtualDeviceContextsIndexRouteHandler: RouteHandler<
  typeof deleteDcimVirtualDeviceContextsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimVirtualDeviceContextsIndexRouteHandler: RouteHandler<
  typeof getDcimVirtualDeviceContextsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimVirtualDeviceContextsIndexRouteHandler: RouteHandler<
  typeof patchDcimVirtualDeviceContextsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDcimVirtualDeviceContextsIndexRouteHandler: RouteHandler<
  typeof postDcimVirtualDeviceContextsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimVirtualDeviceContextsIndexRouteHandler: RouteHandler<
  typeof putDcimVirtualDeviceContextsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDcimVirtualDeviceContextsIdIndexRouteHandler: RouteHandler<
  typeof deleteDcimVirtualDeviceContextsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDcimVirtualDeviceContextsIdIndexRouteHandler: RouteHandler<
  typeof getDcimVirtualDeviceContextsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDcimVirtualDeviceContextsIdIndexRouteHandler: RouteHandler<
  typeof patchDcimVirtualDeviceContextsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDcimVirtualDeviceContextsIdIndexRouteHandler: RouteHandler<
  typeof putDcimVirtualDeviceContextsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

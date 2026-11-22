import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const dcimHandler = app
  .openapi(deleteDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimCableTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimCableTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimCableTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimCableTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConnectedDeviceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsoleServerPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDevicesIdNapalmIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortsIdPathsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfacesIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerFeedsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerOutletsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRacksIdElevationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRearPortsIdPathsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

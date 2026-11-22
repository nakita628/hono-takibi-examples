import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDcimCableBundlesIdIndexRoute,
  deleteApiDcimCableBundlesIndexRoute,
  deleteApiDcimCablesIdIndexRoute,
  deleteApiDcimCablesIndexRoute,
  deleteApiDcimConsolePortsIdIndexRoute,
  deleteApiDcimConsolePortsIndexRoute,
  deleteApiDcimConsolePortTemplatesIdIndexRoute,
  deleteApiDcimConsolePortTemplatesIndexRoute,
  deleteApiDcimConsoleServerPortsIdIndexRoute,
  deleteApiDcimConsoleServerPortsIndexRoute,
  deleteApiDcimConsoleServerPortTemplatesIdIndexRoute,
  deleteApiDcimConsoleServerPortTemplatesIndexRoute,
  deleteApiDcimCoolingFeedsIdIndexRoute,
  deleteApiDcimCoolingFeedsIndexRoute,
  deleteApiDcimCoolingIntakesIdIndexRoute,
  deleteApiDcimCoolingIntakesIndexRoute,
  deleteApiDcimCoolingIntakeTemplatesIdIndexRoute,
  deleteApiDcimCoolingIntakeTemplatesIndexRoute,
  deleteApiDcimCoolingOutflowsIdIndexRoute,
  deleteApiDcimCoolingOutflowsIndexRoute,
  deleteApiDcimCoolingOutflowTemplatesIdIndexRoute,
  deleteApiDcimCoolingOutflowTemplatesIndexRoute,
  deleteApiDcimCoolingSourcesIdIndexRoute,
  deleteApiDcimCoolingSourcesIndexRoute,
  deleteApiDcimDeviceBaysIdIndexRoute,
  deleteApiDcimDeviceBaysIndexRoute,
  deleteApiDcimDeviceBayTemplatesIdIndexRoute,
  deleteApiDcimDeviceBayTemplatesIndexRoute,
  deleteApiDcimDeviceRolesIdIndexRoute,
  deleteApiDcimDeviceRolesIndexRoute,
  deleteApiDcimDevicesIdIndexRoute,
  deleteApiDcimDevicesIndexRoute,
  deleteApiDcimDeviceTypesIdIndexRoute,
  deleteApiDcimDeviceTypesIndexRoute,
  deleteApiDcimFrontPortsIdIndexRoute,
  deleteApiDcimFrontPortsIndexRoute,
  deleteApiDcimFrontPortTemplatesIdIndexRoute,
  deleteApiDcimFrontPortTemplatesIndexRoute,
  deleteApiDcimInterfacesIdIndexRoute,
  deleteApiDcimInterfacesIndexRoute,
  deleteApiDcimInterfaceTemplatesIdIndexRoute,
  deleteApiDcimInterfaceTemplatesIndexRoute,
  deleteApiDcimInventoryItemRolesIdIndexRoute,
  deleteApiDcimInventoryItemRolesIndexRoute,
  deleteApiDcimInventoryItemsIdIndexRoute,
  deleteApiDcimInventoryItemsIndexRoute,
  deleteApiDcimInventoryItemTemplatesIdIndexRoute,
  deleteApiDcimInventoryItemTemplatesIndexRoute,
  deleteApiDcimLocationsIdIndexRoute,
  deleteApiDcimLocationsIndexRoute,
  deleteApiDcimMacAddressesIdIndexRoute,
  deleteApiDcimMacAddressesIndexRoute,
  deleteApiDcimManufacturersIdIndexRoute,
  deleteApiDcimManufacturersIndexRoute,
  deleteApiDcimModuleBaysIdIndexRoute,
  deleteApiDcimModuleBaysIndexRoute,
  deleteApiDcimModuleBayTemplatesIdIndexRoute,
  deleteApiDcimModuleBayTemplatesIndexRoute,
  deleteApiDcimModuleBayTypesIdIndexRoute,
  deleteApiDcimModuleBayTypesIndexRoute,
  deleteApiDcimModulesIdIndexRoute,
  deleteApiDcimModulesIndexRoute,
  deleteApiDcimModuleTypeProfilesIdIndexRoute,
  deleteApiDcimModuleTypeProfilesIndexRoute,
  deleteApiDcimModuleTypesIdIndexRoute,
  deleteApiDcimModuleTypesIndexRoute,
  deleteApiDcimPlatformsIdIndexRoute,
  deleteApiDcimPlatformsIndexRoute,
  deleteApiDcimPowerFeedsIdIndexRoute,
  deleteApiDcimPowerFeedsIndexRoute,
  deleteApiDcimPowerOutletsIdIndexRoute,
  deleteApiDcimPowerOutletsIndexRoute,
  deleteApiDcimPowerOutletTemplatesIdIndexRoute,
  deleteApiDcimPowerOutletTemplatesIndexRoute,
  deleteApiDcimPowerPanelsIdIndexRoute,
  deleteApiDcimPowerPanelsIndexRoute,
  deleteApiDcimPowerPortsIdIndexRoute,
  deleteApiDcimPowerPortsIndexRoute,
  deleteApiDcimPowerPortTemplatesIdIndexRoute,
  deleteApiDcimPowerPortTemplatesIndexRoute,
  deleteApiDcimRackGroupsIdIndexRoute,
  deleteApiDcimRackGroupsIndexRoute,
  deleteApiDcimRackReservationsIdIndexRoute,
  deleteApiDcimRackReservationsIndexRoute,
  deleteApiDcimRackRolesIdIndexRoute,
  deleteApiDcimRackRolesIndexRoute,
  deleteApiDcimRacksIdIndexRoute,
  deleteApiDcimRacksIndexRoute,
  deleteApiDcimRackTypesIdIndexRoute,
  deleteApiDcimRackTypesIndexRoute,
  deleteApiDcimRearPortsIdIndexRoute,
  deleteApiDcimRearPortsIndexRoute,
  deleteApiDcimRearPortTemplatesIdIndexRoute,
  deleteApiDcimRearPortTemplatesIndexRoute,
  deleteApiDcimRegionsIdIndexRoute,
  deleteApiDcimRegionsIndexRoute,
  deleteApiDcimSiteGroupsIdIndexRoute,
  deleteApiDcimSiteGroupsIndexRoute,
  deleteApiDcimSitesIdIndexRoute,
  deleteApiDcimSitesIndexRoute,
  deleteApiDcimVirtualChassisIdIndexRoute,
  deleteApiDcimVirtualChassisIndexRoute,
  deleteApiDcimVirtualDeviceContextsIdIndexRoute,
  deleteApiDcimVirtualDeviceContextsIndexRoute,
  getApiDcimCableBundlesIdIndexRoute,
  getApiDcimCableBundlesIndexRoute,
  getApiDcimCablesIdIndexRoute,
  getApiDcimCablesIndexRoute,
  getApiDcimCableTerminationsIdIndexRoute,
  getApiDcimCableTerminationsIndexRoute,
  getApiDcimConnectedDeviceIndexRoute,
  getApiDcimConsolePortsIdIndexRoute,
  getApiDcimConsolePortsIdTraceIndexRoute,
  getApiDcimConsolePortsIndexRoute,
  getApiDcimConsolePortTemplatesIdIndexRoute,
  getApiDcimConsolePortTemplatesIndexRoute,
  getApiDcimConsoleServerPortsIdIndexRoute,
  getApiDcimConsoleServerPortsIdTraceIndexRoute,
  getApiDcimConsoleServerPortsIndexRoute,
  getApiDcimConsoleServerPortTemplatesIdIndexRoute,
  getApiDcimConsoleServerPortTemplatesIndexRoute,
  getApiDcimCoolingFeedsIdIndexRoute,
  getApiDcimCoolingFeedsIndexRoute,
  getApiDcimCoolingIntakesIdIndexRoute,
  getApiDcimCoolingIntakesIndexRoute,
  getApiDcimCoolingIntakeTemplatesIdIndexRoute,
  getApiDcimCoolingIntakeTemplatesIndexRoute,
  getApiDcimCoolingOutflowsIdIndexRoute,
  getApiDcimCoolingOutflowsIndexRoute,
  getApiDcimCoolingOutflowTemplatesIdIndexRoute,
  getApiDcimCoolingOutflowTemplatesIndexRoute,
  getApiDcimCoolingSourcesIdIndexRoute,
  getApiDcimCoolingSourcesIndexRoute,
  getApiDcimDeviceBaysIdIndexRoute,
  getApiDcimDeviceBaysIndexRoute,
  getApiDcimDeviceBayTemplatesIdIndexRoute,
  getApiDcimDeviceBayTemplatesIndexRoute,
  getApiDcimDeviceRolesIdIndexRoute,
  getApiDcimDeviceRolesIndexRoute,
  getApiDcimDevicesIdIndexRoute,
  getApiDcimDevicesIndexRoute,
  getApiDcimDeviceTypesIdIndexRoute,
  getApiDcimDeviceTypesIndexRoute,
  getApiDcimFrontPortsIdIndexRoute,
  getApiDcimFrontPortsIdPathsIndexRoute,
  getApiDcimFrontPortsIndexRoute,
  getApiDcimFrontPortTemplatesIdIndexRoute,
  getApiDcimFrontPortTemplatesIndexRoute,
  getApiDcimInterfacesIdIndexRoute,
  getApiDcimInterfacesIdTraceIndexRoute,
  getApiDcimInterfacesIndexRoute,
  getApiDcimInterfaceTemplatesIdIndexRoute,
  getApiDcimInterfaceTemplatesIndexRoute,
  getApiDcimInventoryItemRolesIdIndexRoute,
  getApiDcimInventoryItemRolesIndexRoute,
  getApiDcimInventoryItemsIdIndexRoute,
  getApiDcimInventoryItemsIndexRoute,
  getApiDcimInventoryItemTemplatesIdIndexRoute,
  getApiDcimInventoryItemTemplatesIndexRoute,
  getApiDcimLocationsIdIndexRoute,
  getApiDcimLocationsIndexRoute,
  getApiDcimMacAddressesIdIndexRoute,
  getApiDcimMacAddressesIndexRoute,
  getApiDcimManufacturersIdIndexRoute,
  getApiDcimManufacturersIndexRoute,
  getApiDcimModuleBaysIdIndexRoute,
  getApiDcimModuleBaysIndexRoute,
  getApiDcimModuleBayTemplatesIdIndexRoute,
  getApiDcimModuleBayTemplatesIndexRoute,
  getApiDcimModuleBayTypesIdIndexRoute,
  getApiDcimModuleBayTypesIndexRoute,
  getApiDcimModulesIdIndexRoute,
  getApiDcimModulesIndexRoute,
  getApiDcimModuleTypeProfilesIdIndexRoute,
  getApiDcimModuleTypeProfilesIndexRoute,
  getApiDcimModuleTypesIdIndexRoute,
  getApiDcimModuleTypesIndexRoute,
  getApiDcimPlatformsIdIndexRoute,
  getApiDcimPlatformsIndexRoute,
  getApiDcimPowerFeedsIdIndexRoute,
  getApiDcimPowerFeedsIdTraceIndexRoute,
  getApiDcimPowerFeedsIndexRoute,
  getApiDcimPowerOutletsIdIndexRoute,
  getApiDcimPowerOutletsIdTraceIndexRoute,
  getApiDcimPowerOutletsIndexRoute,
  getApiDcimPowerOutletTemplatesIdIndexRoute,
  getApiDcimPowerOutletTemplatesIndexRoute,
  getApiDcimPowerPanelsIdIndexRoute,
  getApiDcimPowerPanelsIndexRoute,
  getApiDcimPowerPortsIdIndexRoute,
  getApiDcimPowerPortsIdTraceIndexRoute,
  getApiDcimPowerPortsIndexRoute,
  getApiDcimPowerPortTemplatesIdIndexRoute,
  getApiDcimPowerPortTemplatesIndexRoute,
  getApiDcimRackGroupsIdIndexRoute,
  getApiDcimRackGroupsIndexRoute,
  getApiDcimRackReservationsIdIndexRoute,
  getApiDcimRackReservationsIndexRoute,
  getApiDcimRackRolesIdIndexRoute,
  getApiDcimRackRolesIndexRoute,
  getApiDcimRacksIdElevationIndexRoute,
  getApiDcimRacksIdIndexRoute,
  getApiDcimRacksIndexRoute,
  getApiDcimRackTypesIdIndexRoute,
  getApiDcimRackTypesIndexRoute,
  getApiDcimRearPortsIdIndexRoute,
  getApiDcimRearPortsIdPathsIndexRoute,
  getApiDcimRearPortsIndexRoute,
  getApiDcimRearPortTemplatesIdIndexRoute,
  getApiDcimRearPortTemplatesIndexRoute,
  getApiDcimRegionsIdIndexRoute,
  getApiDcimRegionsIndexRoute,
  getApiDcimSiteGroupsIdIndexRoute,
  getApiDcimSiteGroupsIndexRoute,
  getApiDcimSitesIdIndexRoute,
  getApiDcimSitesIndexRoute,
  getApiDcimVirtualChassisIdIndexRoute,
  getApiDcimVirtualChassisIndexRoute,
  getApiDcimVirtualDeviceContextsIdIndexRoute,
  getApiDcimVirtualDeviceContextsIndexRoute,
  patchApiDcimCableBundlesIdIndexRoute,
  patchApiDcimCableBundlesIndexRoute,
  patchApiDcimCablesIdIndexRoute,
  patchApiDcimCablesIndexRoute,
  patchApiDcimConsolePortsIdIndexRoute,
  patchApiDcimConsolePortsIndexRoute,
  patchApiDcimConsolePortTemplatesIdIndexRoute,
  patchApiDcimConsolePortTemplatesIndexRoute,
  patchApiDcimConsoleServerPortsIdIndexRoute,
  patchApiDcimConsoleServerPortsIndexRoute,
  patchApiDcimConsoleServerPortTemplatesIdIndexRoute,
  patchApiDcimConsoleServerPortTemplatesIndexRoute,
  patchApiDcimCoolingFeedsIdIndexRoute,
  patchApiDcimCoolingFeedsIndexRoute,
  patchApiDcimCoolingIntakesIdIndexRoute,
  patchApiDcimCoolingIntakesIndexRoute,
  patchApiDcimCoolingIntakeTemplatesIdIndexRoute,
  patchApiDcimCoolingIntakeTemplatesIndexRoute,
  patchApiDcimCoolingOutflowsIdIndexRoute,
  patchApiDcimCoolingOutflowsIndexRoute,
  patchApiDcimCoolingOutflowTemplatesIdIndexRoute,
  patchApiDcimCoolingOutflowTemplatesIndexRoute,
  patchApiDcimCoolingSourcesIdIndexRoute,
  patchApiDcimCoolingSourcesIndexRoute,
  patchApiDcimDeviceBaysIdIndexRoute,
  patchApiDcimDeviceBaysIndexRoute,
  patchApiDcimDeviceBayTemplatesIdIndexRoute,
  patchApiDcimDeviceBayTemplatesIndexRoute,
  patchApiDcimDeviceRolesIdIndexRoute,
  patchApiDcimDeviceRolesIndexRoute,
  patchApiDcimDevicesIdIndexRoute,
  patchApiDcimDevicesIndexRoute,
  patchApiDcimDeviceTypesIdIndexRoute,
  patchApiDcimDeviceTypesIndexRoute,
  patchApiDcimFrontPortsIdIndexRoute,
  patchApiDcimFrontPortsIndexRoute,
  patchApiDcimFrontPortTemplatesIdIndexRoute,
  patchApiDcimFrontPortTemplatesIndexRoute,
  patchApiDcimInterfacesIdIndexRoute,
  patchApiDcimInterfacesIndexRoute,
  patchApiDcimInterfaceTemplatesIdIndexRoute,
  patchApiDcimInterfaceTemplatesIndexRoute,
  patchApiDcimInventoryItemRolesIdIndexRoute,
  patchApiDcimInventoryItemRolesIndexRoute,
  patchApiDcimInventoryItemsIdIndexRoute,
  patchApiDcimInventoryItemsIndexRoute,
  patchApiDcimInventoryItemTemplatesIdIndexRoute,
  patchApiDcimInventoryItemTemplatesIndexRoute,
  patchApiDcimLocationsIdIndexRoute,
  patchApiDcimLocationsIndexRoute,
  patchApiDcimMacAddressesIdIndexRoute,
  patchApiDcimMacAddressesIndexRoute,
  patchApiDcimManufacturersIdIndexRoute,
  patchApiDcimManufacturersIndexRoute,
  patchApiDcimModuleBaysIdIndexRoute,
  patchApiDcimModuleBaysIndexRoute,
  patchApiDcimModuleBayTemplatesIdIndexRoute,
  patchApiDcimModuleBayTemplatesIndexRoute,
  patchApiDcimModuleBayTypesIdIndexRoute,
  patchApiDcimModuleBayTypesIndexRoute,
  patchApiDcimModulesIdIndexRoute,
  patchApiDcimModulesIndexRoute,
  patchApiDcimModuleTypeProfilesIdIndexRoute,
  patchApiDcimModuleTypeProfilesIndexRoute,
  patchApiDcimModuleTypesIdIndexRoute,
  patchApiDcimModuleTypesIndexRoute,
  patchApiDcimPlatformsIdIndexRoute,
  patchApiDcimPlatformsIndexRoute,
  patchApiDcimPowerFeedsIdIndexRoute,
  patchApiDcimPowerFeedsIndexRoute,
  patchApiDcimPowerOutletsIdIndexRoute,
  patchApiDcimPowerOutletsIndexRoute,
  patchApiDcimPowerOutletTemplatesIdIndexRoute,
  patchApiDcimPowerOutletTemplatesIndexRoute,
  patchApiDcimPowerPanelsIdIndexRoute,
  patchApiDcimPowerPanelsIndexRoute,
  patchApiDcimPowerPortsIdIndexRoute,
  patchApiDcimPowerPortsIndexRoute,
  patchApiDcimPowerPortTemplatesIdIndexRoute,
  patchApiDcimPowerPortTemplatesIndexRoute,
  patchApiDcimRackGroupsIdIndexRoute,
  patchApiDcimRackGroupsIndexRoute,
  patchApiDcimRackReservationsIdIndexRoute,
  patchApiDcimRackReservationsIndexRoute,
  patchApiDcimRackRolesIdIndexRoute,
  patchApiDcimRackRolesIndexRoute,
  patchApiDcimRacksIdIndexRoute,
  patchApiDcimRacksIndexRoute,
  patchApiDcimRackTypesIdIndexRoute,
  patchApiDcimRackTypesIndexRoute,
  patchApiDcimRearPortsIdIndexRoute,
  patchApiDcimRearPortsIndexRoute,
  patchApiDcimRearPortTemplatesIdIndexRoute,
  patchApiDcimRearPortTemplatesIndexRoute,
  patchApiDcimRegionsIdIndexRoute,
  patchApiDcimRegionsIndexRoute,
  patchApiDcimSiteGroupsIdIndexRoute,
  patchApiDcimSiteGroupsIndexRoute,
  patchApiDcimSitesIdIndexRoute,
  patchApiDcimSitesIndexRoute,
  patchApiDcimVirtualChassisIdIndexRoute,
  patchApiDcimVirtualChassisIndexRoute,
  patchApiDcimVirtualDeviceContextsIdIndexRoute,
  patchApiDcimVirtualDeviceContextsIndexRoute,
  postApiDcimCableBundlesIndexRoute,
  postApiDcimCablesIndexRoute,
  postApiDcimConsolePortsIndexRoute,
  postApiDcimConsolePortTemplatesIndexRoute,
  postApiDcimConsoleServerPortsIndexRoute,
  postApiDcimConsoleServerPortTemplatesIndexRoute,
  postApiDcimCoolingFeedsIndexRoute,
  postApiDcimCoolingIntakesIndexRoute,
  postApiDcimCoolingIntakeTemplatesIndexRoute,
  postApiDcimCoolingOutflowsIndexRoute,
  postApiDcimCoolingOutflowTemplatesIndexRoute,
  postApiDcimCoolingSourcesIndexRoute,
  postApiDcimDeviceBaysIndexRoute,
  postApiDcimDeviceBayTemplatesIndexRoute,
  postApiDcimDeviceRolesIndexRoute,
  postApiDcimDevicesIdRenderConfigIndexRoute,
  postApiDcimDevicesIndexRoute,
  postApiDcimDeviceTypesIndexRoute,
  postApiDcimFrontPortsIndexRoute,
  postApiDcimFrontPortTemplatesIndexRoute,
  postApiDcimInterfacesIndexRoute,
  postApiDcimInterfaceTemplatesIndexRoute,
  postApiDcimInventoryItemRolesIndexRoute,
  postApiDcimInventoryItemsIndexRoute,
  postApiDcimInventoryItemTemplatesIndexRoute,
  postApiDcimLocationsIndexRoute,
  postApiDcimMacAddressesIndexRoute,
  postApiDcimManufacturersIndexRoute,
  postApiDcimModuleBaysIndexRoute,
  postApiDcimModuleBayTemplatesIndexRoute,
  postApiDcimModuleBayTypesIndexRoute,
  postApiDcimModulesIndexRoute,
  postApiDcimModuleTypeProfilesIndexRoute,
  postApiDcimModuleTypesIndexRoute,
  postApiDcimPlatformsIndexRoute,
  postApiDcimPowerFeedsIndexRoute,
  postApiDcimPowerOutletsIndexRoute,
  postApiDcimPowerOutletTemplatesIndexRoute,
  postApiDcimPowerPanelsIndexRoute,
  postApiDcimPowerPortsIndexRoute,
  postApiDcimPowerPortTemplatesIndexRoute,
  postApiDcimRackGroupsIndexRoute,
  postApiDcimRackReservationsIndexRoute,
  postApiDcimRackRolesIndexRoute,
  postApiDcimRacksIndexRoute,
  postApiDcimRackTypesIndexRoute,
  postApiDcimRearPortsIndexRoute,
  postApiDcimRearPortTemplatesIndexRoute,
  postApiDcimRegionsIndexRoute,
  postApiDcimSiteGroupsIndexRoute,
  postApiDcimSitesIndexRoute,
  postApiDcimVirtualChassisIndexRoute,
  postApiDcimVirtualDeviceContextsIndexRoute,
  putApiDcimCableBundlesIdIndexRoute,
  putApiDcimCableBundlesIndexRoute,
  putApiDcimCablesIdIndexRoute,
  putApiDcimCablesIndexRoute,
  putApiDcimConsolePortsIdIndexRoute,
  putApiDcimConsolePortsIndexRoute,
  putApiDcimConsolePortTemplatesIdIndexRoute,
  putApiDcimConsolePortTemplatesIndexRoute,
  putApiDcimConsoleServerPortsIdIndexRoute,
  putApiDcimConsoleServerPortsIndexRoute,
  putApiDcimConsoleServerPortTemplatesIdIndexRoute,
  putApiDcimConsoleServerPortTemplatesIndexRoute,
  putApiDcimCoolingFeedsIdIndexRoute,
  putApiDcimCoolingFeedsIndexRoute,
  putApiDcimCoolingIntakesIdIndexRoute,
  putApiDcimCoolingIntakesIndexRoute,
  putApiDcimCoolingIntakeTemplatesIdIndexRoute,
  putApiDcimCoolingIntakeTemplatesIndexRoute,
  putApiDcimCoolingOutflowsIdIndexRoute,
  putApiDcimCoolingOutflowsIndexRoute,
  putApiDcimCoolingOutflowTemplatesIdIndexRoute,
  putApiDcimCoolingOutflowTemplatesIndexRoute,
  putApiDcimCoolingSourcesIdIndexRoute,
  putApiDcimCoolingSourcesIndexRoute,
  putApiDcimDeviceBaysIdIndexRoute,
  putApiDcimDeviceBaysIndexRoute,
  putApiDcimDeviceBayTemplatesIdIndexRoute,
  putApiDcimDeviceBayTemplatesIndexRoute,
  putApiDcimDeviceRolesIdIndexRoute,
  putApiDcimDeviceRolesIndexRoute,
  putApiDcimDevicesIdIndexRoute,
  putApiDcimDevicesIndexRoute,
  putApiDcimDeviceTypesIdIndexRoute,
  putApiDcimDeviceTypesIndexRoute,
  putApiDcimFrontPortsIdIndexRoute,
  putApiDcimFrontPortsIndexRoute,
  putApiDcimFrontPortTemplatesIdIndexRoute,
  putApiDcimFrontPortTemplatesIndexRoute,
  putApiDcimInterfacesIdIndexRoute,
  putApiDcimInterfacesIndexRoute,
  putApiDcimInterfaceTemplatesIdIndexRoute,
  putApiDcimInterfaceTemplatesIndexRoute,
  putApiDcimInventoryItemRolesIdIndexRoute,
  putApiDcimInventoryItemRolesIndexRoute,
  putApiDcimInventoryItemsIdIndexRoute,
  putApiDcimInventoryItemsIndexRoute,
  putApiDcimInventoryItemTemplatesIdIndexRoute,
  putApiDcimInventoryItemTemplatesIndexRoute,
  putApiDcimLocationsIdIndexRoute,
  putApiDcimLocationsIndexRoute,
  putApiDcimMacAddressesIdIndexRoute,
  putApiDcimMacAddressesIndexRoute,
  putApiDcimManufacturersIdIndexRoute,
  putApiDcimManufacturersIndexRoute,
  putApiDcimModuleBaysIdIndexRoute,
  putApiDcimModuleBaysIndexRoute,
  putApiDcimModuleBayTemplatesIdIndexRoute,
  putApiDcimModuleBayTemplatesIndexRoute,
  putApiDcimModuleBayTypesIdIndexRoute,
  putApiDcimModuleBayTypesIndexRoute,
  putApiDcimModulesIdIndexRoute,
  putApiDcimModulesIndexRoute,
  putApiDcimModuleTypeProfilesIdIndexRoute,
  putApiDcimModuleTypeProfilesIndexRoute,
  putApiDcimModuleTypesIdIndexRoute,
  putApiDcimModuleTypesIndexRoute,
  putApiDcimPlatformsIdIndexRoute,
  putApiDcimPlatformsIndexRoute,
  putApiDcimPowerFeedsIdIndexRoute,
  putApiDcimPowerFeedsIndexRoute,
  putApiDcimPowerOutletsIdIndexRoute,
  putApiDcimPowerOutletsIndexRoute,
  putApiDcimPowerOutletTemplatesIdIndexRoute,
  putApiDcimPowerOutletTemplatesIndexRoute,
  putApiDcimPowerPanelsIdIndexRoute,
  putApiDcimPowerPanelsIndexRoute,
  putApiDcimPowerPortsIdIndexRoute,
  putApiDcimPowerPortsIndexRoute,
  putApiDcimPowerPortTemplatesIdIndexRoute,
  putApiDcimPowerPortTemplatesIndexRoute,
  putApiDcimRackGroupsIdIndexRoute,
  putApiDcimRackGroupsIndexRoute,
  putApiDcimRackReservationsIdIndexRoute,
  putApiDcimRackReservationsIndexRoute,
  putApiDcimRackRolesIdIndexRoute,
  putApiDcimRackRolesIndexRoute,
  putApiDcimRacksIdIndexRoute,
  putApiDcimRacksIndexRoute,
  putApiDcimRackTypesIdIndexRoute,
  putApiDcimRackTypesIndexRoute,
  putApiDcimRearPortsIdIndexRoute,
  putApiDcimRearPortsIndexRoute,
  putApiDcimRearPortTemplatesIdIndexRoute,
  putApiDcimRearPortTemplatesIndexRoute,
  putApiDcimRegionsIdIndexRoute,
  putApiDcimRegionsIndexRoute,
  putApiDcimSiteGroupsIdIndexRoute,
  putApiDcimSiteGroupsIndexRoute,
  putApiDcimSitesIdIndexRoute,
  putApiDcimSitesIndexRoute,
  putApiDcimVirtualChassisIdIndexRoute,
  putApiDcimVirtualChassisIndexRoute,
  putApiDcimVirtualDeviceContextsIdIndexRoute,
  putApiDcimVirtualDeviceContextsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dcimHandler = app
  .openapi(getApiDcimCableBundlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCableBundlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCableBundlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCableBundlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCableBundlesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCableBundlesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCableBundlesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCableBundlesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCableBundlesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCableTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCableTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConnectedDeviceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsolePortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsolePortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsolePortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsoleServerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimConsoleServerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimConsoleServerPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingIntakeTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingIntakeTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingIntakeTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingIntakeTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingIntakeTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingIntakeTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingIntakeTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingIntakeTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingIntakeTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingIntakesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingIntakesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingIntakesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingIntakesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingIntakesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingIntakesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingIntakesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingIntakesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingIntakesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingOutflowTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingOutflowTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingOutflowTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingOutflowTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingOutflowTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingOutflowTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingOutflowTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingOutflowTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingOutflowTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingOutflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingOutflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingOutflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingOutflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingOutflowsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingOutflowsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingOutflowsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingOutflowsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingOutflowsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimCoolingSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingSourcesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimCoolingSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimCoolingSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimCoolingSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimCoolingSourcesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDeviceTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimDevicesIdRenderConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimFrontPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimFrontPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimFrontPortsIdPathsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInterfaceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInterfacesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInterfacesIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimInventoryItemsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimMacAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimMacAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimMacAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimMacAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimMacAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimMacAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimMacAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimMacAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimMacAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimManufacturersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBayTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBayTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModuleBayTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBayTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBayTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBayTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBayTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBayTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBayTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBayTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleBaysIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleTypeProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModuleTypeProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleTypeProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleTypeProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleTypeProfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleTypeProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleTypeProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleTypeProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleTypeProfilesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModuleTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimModulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPlatformsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerFeedsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerFeedsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerOutletTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerOutletsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerOutletsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPanelsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimPowerPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimPowerPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackReservationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRackTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRackTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRackTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRackTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRackTypesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRacksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRacksIdElevationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRearPortTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRearPortsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRearPortsIdPathsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimRegionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimSiteGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimSiteGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimSitesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimVirtualChassisIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimVirtualDeviceContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDcimVirtualDeviceContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

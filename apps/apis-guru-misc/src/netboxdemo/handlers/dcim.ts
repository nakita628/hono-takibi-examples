import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const dcimHandler = app
  .openapi(getDcimCablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimCablesIndexRoute, (c) => {
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
  .openapi(getDcimConsoleConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimConsolePortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsolePortTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimConsolePortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsolePortsIndexRoute, (c) => {
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
  .openapi(getDcimConsoleServerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsoleServerPortTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimConsoleServerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimConsoleServerPortsIndexRoute, (c) => {
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
  .openapi(getDcimDeviceBayTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceBayTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimDeviceBaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceBaysIndexRoute, (c) => {
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
  .openapi(getDcimDeviceRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceRolesIndexRoute, (c) => {
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
  .openapi(getDcimDeviceTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDeviceTypesIndexRoute, (c) => {
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
  .openapi(getDcimDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimDevicesIndexRoute, (c) => {
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
  .openapi(getDcimDevicesIdGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimDevicesIdNapalmIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimFrontPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimFrontPortTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimFrontPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimFrontPortsIndexRoute, (c) => {
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
  .openapi(getDcimFrontPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfaceConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfaceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInterfaceTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimInterfacesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInterfacesIndexRoute, (c) => {
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
  .openapi(getDcimInterfacesIdGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInterfacesIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimInventoryItemsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimInventoryItemsIndexRoute, (c) => {
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
  .openapi(getDcimManufacturersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimManufacturersIndexRoute, (c) => {
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
  .openapi(getDcimPlatformsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPlatformsIndexRoute, (c) => {
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
  .openapi(getDcimPowerConnectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimPowerFeedsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerFeedsIndexRoute, (c) => {
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
  .openapi(getDcimPowerOutletTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerOutletTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimPowerOutletsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerOutletsIndexRoute, (c) => {
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
  .openapi(getDcimPowerPanelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPanelsIndexRoute, (c) => {
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
  .openapi(getDcimPowerPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPortTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimPowerPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimPowerPortsIndexRoute, (c) => {
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
  .openapi(getDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRackGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDcimRackGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRackReservationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRackReservationsIndexRoute, (c) => {
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
  .openapi(getDcimRackRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRackRolesIndexRoute, (c) => {
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
  .openapi(getDcimRacksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRacksIndexRoute, (c) => {
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
  .openapi(getDcimRearPortTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRearPortTemplatesIndexRoute, (c) => {
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
  .openapi(getDcimRearPortsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRearPortsIndexRoute, (c) => {
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
  .openapi(getDcimRearPortsIdTraceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimRegionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimRegionsIndexRoute, (c) => {
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
  .openapi(getDcimSitesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimSitesIndexRoute, (c) => {
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
  .openapi(getDcimSitesIdGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDcimVirtualChassisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDcimVirtualChassisIndexRoute, (c) => {
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCircuitsCircuitsIdIndexRoute,
  deleteCircuitsCircuitTerminationsIdIndexRoute,
  deleteCircuitsCircuitTypesIdIndexRoute,
  deleteCircuitsProvidersIdIndexRoute,
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
  deleteExtrasConfigContextsIdIndexRoute,
  deleteExtrasExportTemplatesIdIndexRoute,
  deleteExtrasGraphsIdIndexRoute,
  deleteExtrasImageAttachmentsIdIndexRoute,
  deleteExtrasTagsIdIndexRoute,
  deleteIpamAggregatesIdIndexRoute,
  deleteIpamIpAddressesIdIndexRoute,
  deleteIpamPrefixesIdIndexRoute,
  deleteIpamRirsIdIndexRoute,
  deleteIpamRolesIdIndexRoute,
  deleteIpamServicesIdIndexRoute,
  deleteIpamVlanGroupsIdIndexRoute,
  deleteIpamVlansIdIndexRoute,
  deleteIpamVrfsIdIndexRoute,
  deleteSecretsSecretRolesIdIndexRoute,
  deleteSecretsSecretsIdIndexRoute,
  deleteTenancyTenantGroupsIdIndexRoute,
  deleteTenancyTenantsIdIndexRoute,
  deleteVirtualizationClusterGroupsIdIndexRoute,
  deleteVirtualizationClustersIdIndexRoute,
  deleteVirtualizationClusterTypesIdIndexRoute,
  deleteVirtualizationInterfacesIdIndexRoute,
  deleteVirtualizationVirtualMachinesIdIndexRoute,
  getCircuitsCircuitsIdIndexRoute,
  getCircuitsCircuitsIndexRoute,
  getCircuitsCircuitTerminationsIdIndexRoute,
  getCircuitsCircuitTerminationsIndexRoute,
  getCircuitsCircuitTypesIdIndexRoute,
  getCircuitsCircuitTypesIndexRoute,
  getCircuitsProvidersIdGraphsIndexRoute,
  getCircuitsProvidersIdIndexRoute,
  getCircuitsProvidersIndexRoute,
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
  getExtrasConfigContextsIdIndexRoute,
  getExtrasConfigContextsIndexRoute,
  getExtrasCustomFieldChoicesIdIndexRoute,
  getExtrasCustomFieldChoicesIndexRoute,
  getExtrasExportTemplatesIdIndexRoute,
  getExtrasExportTemplatesIndexRoute,
  getExtrasGraphsIdIndexRoute,
  getExtrasGraphsIndexRoute,
  getExtrasImageAttachmentsIdIndexRoute,
  getExtrasImageAttachmentsIndexRoute,
  getExtrasObjectChangesIdIndexRoute,
  getExtrasObjectChangesIndexRoute,
  getExtrasReportsIdIndexRoute,
  getExtrasReportsIndexRoute,
  getExtrasScriptsIdIndexRoute,
  getExtrasScriptsIndexRoute,
  getExtrasTagsIdIndexRoute,
  getExtrasTagsIndexRoute,
  getIpamAggregatesIdIndexRoute,
  getIpamAggregatesIndexRoute,
  getIpamIpAddressesIdIndexRoute,
  getIpamIpAddressesIndexRoute,
  getIpamPrefixesIdAvailableIpsIndexRoute,
  getIpamPrefixesIdAvailablePrefixesIndexRoute,
  getIpamPrefixesIdIndexRoute,
  getIpamPrefixesIndexRoute,
  getIpamRirsIdIndexRoute,
  getIpamRirsIndexRoute,
  getIpamRolesIdIndexRoute,
  getIpamRolesIndexRoute,
  getIpamServicesIdIndexRoute,
  getIpamServicesIndexRoute,
  getIpamVlanGroupsIdIndexRoute,
  getIpamVlanGroupsIndexRoute,
  getIpamVlansIdIndexRoute,
  getIpamVlansIndexRoute,
  getIpamVrfsIdIndexRoute,
  getIpamVrfsIndexRoute,
  getSecretsGenerateRsaKeyPairIndexRoute,
  getSecretsSecretRolesIdIndexRoute,
  getSecretsSecretRolesIndexRoute,
  getSecretsSecretsIdIndexRoute,
  getSecretsSecretsIndexRoute,
  getTenancyTenantGroupsIdIndexRoute,
  getTenancyTenantGroupsIndexRoute,
  getTenancyTenantsIdIndexRoute,
  getTenancyTenantsIndexRoute,
  getVirtualizationClusterGroupsIdIndexRoute,
  getVirtualizationClusterGroupsIndexRoute,
  getVirtualizationClustersIdIndexRoute,
  getVirtualizationClustersIndexRoute,
  getVirtualizationClusterTypesIdIndexRoute,
  getVirtualizationClusterTypesIndexRoute,
  getVirtualizationInterfacesIdIndexRoute,
  getVirtualizationInterfacesIndexRoute,
  getVirtualizationVirtualMachinesIdIndexRoute,
  getVirtualizationVirtualMachinesIndexRoute,
  patchCircuitsCircuitsIdIndexRoute,
  patchCircuitsCircuitTerminationsIdIndexRoute,
  patchCircuitsCircuitTypesIdIndexRoute,
  patchCircuitsProvidersIdIndexRoute,
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
  patchExtrasConfigContextsIdIndexRoute,
  patchExtrasExportTemplatesIdIndexRoute,
  patchExtrasGraphsIdIndexRoute,
  patchExtrasImageAttachmentsIdIndexRoute,
  patchExtrasTagsIdIndexRoute,
  patchIpamAggregatesIdIndexRoute,
  patchIpamIpAddressesIdIndexRoute,
  patchIpamPrefixesIdIndexRoute,
  patchIpamRirsIdIndexRoute,
  patchIpamRolesIdIndexRoute,
  patchIpamServicesIdIndexRoute,
  patchIpamVlanGroupsIdIndexRoute,
  patchIpamVlansIdIndexRoute,
  patchIpamVrfsIdIndexRoute,
  patchSecretsSecretRolesIdIndexRoute,
  patchSecretsSecretsIdIndexRoute,
  patchTenancyTenantGroupsIdIndexRoute,
  patchTenancyTenantsIdIndexRoute,
  patchVirtualizationClusterGroupsIdIndexRoute,
  patchVirtualizationClustersIdIndexRoute,
  patchVirtualizationClusterTypesIdIndexRoute,
  patchVirtualizationInterfacesIdIndexRoute,
  patchVirtualizationVirtualMachinesIdIndexRoute,
  postCircuitsCircuitsIndexRoute,
  postCircuitsCircuitTerminationsIndexRoute,
  postCircuitsCircuitTypesIndexRoute,
  postCircuitsProvidersIndexRoute,
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
  postExtrasConfigContextsIndexRoute,
  postExtrasExportTemplatesIndexRoute,
  postExtrasGraphsIndexRoute,
  postExtrasImageAttachmentsIndexRoute,
  postExtrasReportsIdRunIndexRoute,
  postExtrasTagsIndexRoute,
  postIpamAggregatesIndexRoute,
  postIpamIpAddressesIndexRoute,
  postIpamPrefixesIdAvailableIpsIndexRoute,
  postIpamPrefixesIdAvailablePrefixesIndexRoute,
  postIpamPrefixesIndexRoute,
  postIpamRirsIndexRoute,
  postIpamRolesIndexRoute,
  postIpamServicesIndexRoute,
  postIpamVlanGroupsIndexRoute,
  postIpamVlansIndexRoute,
  postIpamVrfsIndexRoute,
  postSecretsGetSessionKeyIndexRoute,
  postSecretsSecretRolesIndexRoute,
  postSecretsSecretsIndexRoute,
  postTenancyTenantGroupsIndexRoute,
  postTenancyTenantsIndexRoute,
  postVirtualizationClusterGroupsIndexRoute,
  postVirtualizationClustersIndexRoute,
  postVirtualizationClusterTypesIndexRoute,
  postVirtualizationInterfacesIndexRoute,
  postVirtualizationVirtualMachinesIndexRoute,
  putCircuitsCircuitsIdIndexRoute,
  putCircuitsCircuitTerminationsIdIndexRoute,
  putCircuitsCircuitTypesIdIndexRoute,
  putCircuitsProvidersIdIndexRoute,
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
  putExtrasConfigContextsIdIndexRoute,
  putExtrasExportTemplatesIdIndexRoute,
  putExtrasGraphsIdIndexRoute,
  putExtrasImageAttachmentsIdIndexRoute,
  putExtrasTagsIdIndexRoute,
  putIpamAggregatesIdIndexRoute,
  putIpamIpAddressesIdIndexRoute,
  putIpamPrefixesIdIndexRoute,
  putIpamRirsIdIndexRoute,
  putIpamRolesIdIndexRoute,
  putIpamServicesIdIndexRoute,
  putIpamVlanGroupsIdIndexRoute,
  putIpamVlansIdIndexRoute,
  putIpamVrfsIdIndexRoute,
  putSecretsSecretRolesIdIndexRoute,
  putSecretsSecretsIdIndexRoute,
  putTenancyTenantGroupsIdIndexRoute,
  putTenancyTenantsIdIndexRoute,
  putVirtualizationClusterGroupsIdIndexRoute,
  putVirtualizationClustersIdIndexRoute,
  putVirtualizationClusterTypesIdIndexRoute,
  putVirtualizationInterfacesIdIndexRoute,
  putVirtualizationVirtualMachinesIdIndexRoute,
} from './routes'
import {
  deleteCircuitsCircuitsIdIndexRouteHandler,
  deleteCircuitsCircuitTerminationsIdIndexRouteHandler,
  deleteCircuitsCircuitTypesIdIndexRouteHandler,
  deleteCircuitsProvidersIdIndexRouteHandler,
  deleteDcimCablesIdIndexRouteHandler,
  deleteDcimConsolePortsIdIndexRouteHandler,
  deleteDcimConsolePortTemplatesIdIndexRouteHandler,
  deleteDcimConsoleServerPortsIdIndexRouteHandler,
  deleteDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  deleteDcimDeviceBaysIdIndexRouteHandler,
  deleteDcimDeviceBayTemplatesIdIndexRouteHandler,
  deleteDcimDeviceRolesIdIndexRouteHandler,
  deleteDcimDevicesIdIndexRouteHandler,
  deleteDcimDeviceTypesIdIndexRouteHandler,
  deleteDcimFrontPortsIdIndexRouteHandler,
  deleteDcimFrontPortTemplatesIdIndexRouteHandler,
  deleteDcimInterfacesIdIndexRouteHandler,
  deleteDcimInterfaceTemplatesIdIndexRouteHandler,
  deleteDcimInventoryItemsIdIndexRouteHandler,
  deleteDcimManufacturersIdIndexRouteHandler,
  deleteDcimPlatformsIdIndexRouteHandler,
  deleteDcimPowerFeedsIdIndexRouteHandler,
  deleteDcimPowerOutletsIdIndexRouteHandler,
  deleteDcimPowerOutletTemplatesIdIndexRouteHandler,
  deleteDcimPowerPanelsIdIndexRouteHandler,
  deleteDcimPowerPortsIdIndexRouteHandler,
  deleteDcimPowerPortTemplatesIdIndexRouteHandler,
  deleteDcimRackGroupsIdIndexRouteHandler,
  deleteDcimRackReservationsIdIndexRouteHandler,
  deleteDcimRackRolesIdIndexRouteHandler,
  deleteDcimRacksIdIndexRouteHandler,
  deleteDcimRearPortsIdIndexRouteHandler,
  deleteDcimRearPortTemplatesIdIndexRouteHandler,
  deleteDcimRegionsIdIndexRouteHandler,
  deleteDcimSitesIdIndexRouteHandler,
  deleteDcimVirtualChassisIdIndexRouteHandler,
  deleteExtrasConfigContextsIdIndexRouteHandler,
  deleteExtrasExportTemplatesIdIndexRouteHandler,
  deleteExtrasGraphsIdIndexRouteHandler,
  deleteExtrasImageAttachmentsIdIndexRouteHandler,
  deleteExtrasTagsIdIndexRouteHandler,
  deleteIpamAggregatesIdIndexRouteHandler,
  deleteIpamIpAddressesIdIndexRouteHandler,
  deleteIpamPrefixesIdIndexRouteHandler,
  deleteIpamRirsIdIndexRouteHandler,
  deleteIpamRolesIdIndexRouteHandler,
  deleteIpamServicesIdIndexRouteHandler,
  deleteIpamVlanGroupsIdIndexRouteHandler,
  deleteIpamVlansIdIndexRouteHandler,
  deleteIpamVrfsIdIndexRouteHandler,
  deleteSecretsSecretRolesIdIndexRouteHandler,
  deleteSecretsSecretsIdIndexRouteHandler,
  deleteTenancyTenantGroupsIdIndexRouteHandler,
  deleteTenancyTenantsIdIndexRouteHandler,
  deleteVirtualizationClusterGroupsIdIndexRouteHandler,
  deleteVirtualizationClustersIdIndexRouteHandler,
  deleteVirtualizationClusterTypesIdIndexRouteHandler,
  deleteVirtualizationInterfacesIdIndexRouteHandler,
  deleteVirtualizationVirtualMachinesIdIndexRouteHandler,
  getCircuitsCircuitsIdIndexRouteHandler,
  getCircuitsCircuitsIndexRouteHandler,
  getCircuitsCircuitTerminationsIdIndexRouteHandler,
  getCircuitsCircuitTerminationsIndexRouteHandler,
  getCircuitsCircuitTypesIdIndexRouteHandler,
  getCircuitsCircuitTypesIndexRouteHandler,
  getCircuitsProvidersIdGraphsIndexRouteHandler,
  getCircuitsProvidersIdIndexRouteHandler,
  getCircuitsProvidersIndexRouteHandler,
  getDcimCablesIdIndexRouteHandler,
  getDcimCablesIndexRouteHandler,
  getDcimConnectedDeviceIndexRouteHandler,
  getDcimConsoleConnectionsIndexRouteHandler,
  getDcimConsolePortsIdIndexRouteHandler,
  getDcimConsolePortsIdTraceIndexRouteHandler,
  getDcimConsolePortsIndexRouteHandler,
  getDcimConsolePortTemplatesIdIndexRouteHandler,
  getDcimConsolePortTemplatesIndexRouteHandler,
  getDcimConsoleServerPortsIdIndexRouteHandler,
  getDcimConsoleServerPortsIdTraceIndexRouteHandler,
  getDcimConsoleServerPortsIndexRouteHandler,
  getDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  getDcimConsoleServerPortTemplatesIndexRouteHandler,
  getDcimDeviceBaysIdIndexRouteHandler,
  getDcimDeviceBaysIndexRouteHandler,
  getDcimDeviceBayTemplatesIdIndexRouteHandler,
  getDcimDeviceBayTemplatesIndexRouteHandler,
  getDcimDeviceRolesIdIndexRouteHandler,
  getDcimDeviceRolesIndexRouteHandler,
  getDcimDevicesIdGraphsIndexRouteHandler,
  getDcimDevicesIdIndexRouteHandler,
  getDcimDevicesIdNapalmIndexRouteHandler,
  getDcimDevicesIndexRouteHandler,
  getDcimDeviceTypesIdIndexRouteHandler,
  getDcimDeviceTypesIndexRouteHandler,
  getDcimFrontPortsIdIndexRouteHandler,
  getDcimFrontPortsIdTraceIndexRouteHandler,
  getDcimFrontPortsIndexRouteHandler,
  getDcimFrontPortTemplatesIdIndexRouteHandler,
  getDcimFrontPortTemplatesIndexRouteHandler,
  getDcimInterfaceConnectionsIndexRouteHandler,
  getDcimInterfacesIdGraphsIndexRouteHandler,
  getDcimInterfacesIdIndexRouteHandler,
  getDcimInterfacesIdTraceIndexRouteHandler,
  getDcimInterfacesIndexRouteHandler,
  getDcimInterfaceTemplatesIdIndexRouteHandler,
  getDcimInterfaceTemplatesIndexRouteHandler,
  getDcimInventoryItemsIdIndexRouteHandler,
  getDcimInventoryItemsIndexRouteHandler,
  getDcimManufacturersIdIndexRouteHandler,
  getDcimManufacturersIndexRouteHandler,
  getDcimPlatformsIdIndexRouteHandler,
  getDcimPlatformsIndexRouteHandler,
  getDcimPowerConnectionsIndexRouteHandler,
  getDcimPowerFeedsIdIndexRouteHandler,
  getDcimPowerFeedsIndexRouteHandler,
  getDcimPowerOutletsIdIndexRouteHandler,
  getDcimPowerOutletsIdTraceIndexRouteHandler,
  getDcimPowerOutletsIndexRouteHandler,
  getDcimPowerOutletTemplatesIdIndexRouteHandler,
  getDcimPowerOutletTemplatesIndexRouteHandler,
  getDcimPowerPanelsIdIndexRouteHandler,
  getDcimPowerPanelsIndexRouteHandler,
  getDcimPowerPortsIdIndexRouteHandler,
  getDcimPowerPortsIdTraceIndexRouteHandler,
  getDcimPowerPortsIndexRouteHandler,
  getDcimPowerPortTemplatesIdIndexRouteHandler,
  getDcimPowerPortTemplatesIndexRouteHandler,
  getDcimRackGroupsIdIndexRouteHandler,
  getDcimRackGroupsIndexRouteHandler,
  getDcimRackReservationsIdIndexRouteHandler,
  getDcimRackReservationsIndexRouteHandler,
  getDcimRackRolesIdIndexRouteHandler,
  getDcimRackRolesIndexRouteHandler,
  getDcimRacksIdElevationIndexRouteHandler,
  getDcimRacksIdIndexRouteHandler,
  getDcimRacksIndexRouteHandler,
  getDcimRearPortsIdIndexRouteHandler,
  getDcimRearPortsIdTraceIndexRouteHandler,
  getDcimRearPortsIndexRouteHandler,
  getDcimRearPortTemplatesIdIndexRouteHandler,
  getDcimRearPortTemplatesIndexRouteHandler,
  getDcimRegionsIdIndexRouteHandler,
  getDcimRegionsIndexRouteHandler,
  getDcimSitesIdGraphsIndexRouteHandler,
  getDcimSitesIdIndexRouteHandler,
  getDcimSitesIndexRouteHandler,
  getDcimVirtualChassisIdIndexRouteHandler,
  getDcimVirtualChassisIndexRouteHandler,
  getExtrasConfigContextsIdIndexRouteHandler,
  getExtrasConfigContextsIndexRouteHandler,
  getExtrasCustomFieldChoicesIdIndexRouteHandler,
  getExtrasCustomFieldChoicesIndexRouteHandler,
  getExtrasExportTemplatesIdIndexRouteHandler,
  getExtrasExportTemplatesIndexRouteHandler,
  getExtrasGraphsIdIndexRouteHandler,
  getExtrasGraphsIndexRouteHandler,
  getExtrasImageAttachmentsIdIndexRouteHandler,
  getExtrasImageAttachmentsIndexRouteHandler,
  getExtrasObjectChangesIdIndexRouteHandler,
  getExtrasObjectChangesIndexRouteHandler,
  getExtrasReportsIdIndexRouteHandler,
  getExtrasReportsIndexRouteHandler,
  getExtrasScriptsIdIndexRouteHandler,
  getExtrasScriptsIndexRouteHandler,
  getExtrasTagsIdIndexRouteHandler,
  getExtrasTagsIndexRouteHandler,
  getIpamAggregatesIdIndexRouteHandler,
  getIpamAggregatesIndexRouteHandler,
  getIpamIpAddressesIdIndexRouteHandler,
  getIpamIpAddressesIndexRouteHandler,
  getIpamPrefixesIdAvailableIpsIndexRouteHandler,
  getIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  getIpamPrefixesIdIndexRouteHandler,
  getIpamPrefixesIndexRouteHandler,
  getIpamRirsIdIndexRouteHandler,
  getIpamRirsIndexRouteHandler,
  getIpamRolesIdIndexRouteHandler,
  getIpamRolesIndexRouteHandler,
  getIpamServicesIdIndexRouteHandler,
  getIpamServicesIndexRouteHandler,
  getIpamVlanGroupsIdIndexRouteHandler,
  getIpamVlanGroupsIndexRouteHandler,
  getIpamVlansIdIndexRouteHandler,
  getIpamVlansIndexRouteHandler,
  getIpamVrfsIdIndexRouteHandler,
  getIpamVrfsIndexRouteHandler,
  getSecretsGenerateRsaKeyPairIndexRouteHandler,
  getSecretsSecretRolesIdIndexRouteHandler,
  getSecretsSecretRolesIndexRouteHandler,
  getSecretsSecretsIdIndexRouteHandler,
  getSecretsSecretsIndexRouteHandler,
  getTenancyTenantGroupsIdIndexRouteHandler,
  getTenancyTenantGroupsIndexRouteHandler,
  getTenancyTenantsIdIndexRouteHandler,
  getTenancyTenantsIndexRouteHandler,
  getVirtualizationClusterGroupsIdIndexRouteHandler,
  getVirtualizationClusterGroupsIndexRouteHandler,
  getVirtualizationClustersIdIndexRouteHandler,
  getVirtualizationClustersIndexRouteHandler,
  getVirtualizationClusterTypesIdIndexRouteHandler,
  getVirtualizationClusterTypesIndexRouteHandler,
  getVirtualizationInterfacesIdIndexRouteHandler,
  getVirtualizationInterfacesIndexRouteHandler,
  getVirtualizationVirtualMachinesIdIndexRouteHandler,
  getVirtualizationVirtualMachinesIndexRouteHandler,
  patchCircuitsCircuitsIdIndexRouteHandler,
  patchCircuitsCircuitTerminationsIdIndexRouteHandler,
  patchCircuitsCircuitTypesIdIndexRouteHandler,
  patchCircuitsProvidersIdIndexRouteHandler,
  patchDcimCablesIdIndexRouteHandler,
  patchDcimConsolePortsIdIndexRouteHandler,
  patchDcimConsolePortTemplatesIdIndexRouteHandler,
  patchDcimConsoleServerPortsIdIndexRouteHandler,
  patchDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  patchDcimDeviceBaysIdIndexRouteHandler,
  patchDcimDeviceBayTemplatesIdIndexRouteHandler,
  patchDcimDeviceRolesIdIndexRouteHandler,
  patchDcimDevicesIdIndexRouteHandler,
  patchDcimDeviceTypesIdIndexRouteHandler,
  patchDcimFrontPortsIdIndexRouteHandler,
  patchDcimFrontPortTemplatesIdIndexRouteHandler,
  patchDcimInterfacesIdIndexRouteHandler,
  patchDcimInterfaceTemplatesIdIndexRouteHandler,
  patchDcimInventoryItemsIdIndexRouteHandler,
  patchDcimManufacturersIdIndexRouteHandler,
  patchDcimPlatformsIdIndexRouteHandler,
  patchDcimPowerFeedsIdIndexRouteHandler,
  patchDcimPowerOutletsIdIndexRouteHandler,
  patchDcimPowerOutletTemplatesIdIndexRouteHandler,
  patchDcimPowerPanelsIdIndexRouteHandler,
  patchDcimPowerPortsIdIndexRouteHandler,
  patchDcimPowerPortTemplatesIdIndexRouteHandler,
  patchDcimRackGroupsIdIndexRouteHandler,
  patchDcimRackReservationsIdIndexRouteHandler,
  patchDcimRackRolesIdIndexRouteHandler,
  patchDcimRacksIdIndexRouteHandler,
  patchDcimRearPortsIdIndexRouteHandler,
  patchDcimRearPortTemplatesIdIndexRouteHandler,
  patchDcimRegionsIdIndexRouteHandler,
  patchDcimSitesIdIndexRouteHandler,
  patchDcimVirtualChassisIdIndexRouteHandler,
  patchExtrasConfigContextsIdIndexRouteHandler,
  patchExtrasExportTemplatesIdIndexRouteHandler,
  patchExtrasGraphsIdIndexRouteHandler,
  patchExtrasImageAttachmentsIdIndexRouteHandler,
  patchExtrasTagsIdIndexRouteHandler,
  patchIpamAggregatesIdIndexRouteHandler,
  patchIpamIpAddressesIdIndexRouteHandler,
  patchIpamPrefixesIdIndexRouteHandler,
  patchIpamRirsIdIndexRouteHandler,
  patchIpamRolesIdIndexRouteHandler,
  patchIpamServicesIdIndexRouteHandler,
  patchIpamVlanGroupsIdIndexRouteHandler,
  patchIpamVlansIdIndexRouteHandler,
  patchIpamVrfsIdIndexRouteHandler,
  patchSecretsSecretRolesIdIndexRouteHandler,
  patchSecretsSecretsIdIndexRouteHandler,
  patchTenancyTenantGroupsIdIndexRouteHandler,
  patchTenancyTenantsIdIndexRouteHandler,
  patchVirtualizationClusterGroupsIdIndexRouteHandler,
  patchVirtualizationClustersIdIndexRouteHandler,
  patchVirtualizationClusterTypesIdIndexRouteHandler,
  patchVirtualizationInterfacesIdIndexRouteHandler,
  patchVirtualizationVirtualMachinesIdIndexRouteHandler,
  postCircuitsCircuitsIndexRouteHandler,
  postCircuitsCircuitTerminationsIndexRouteHandler,
  postCircuitsCircuitTypesIndexRouteHandler,
  postCircuitsProvidersIndexRouteHandler,
  postDcimCablesIndexRouteHandler,
  postDcimConsolePortsIndexRouteHandler,
  postDcimConsolePortTemplatesIndexRouteHandler,
  postDcimConsoleServerPortsIndexRouteHandler,
  postDcimConsoleServerPortTemplatesIndexRouteHandler,
  postDcimDeviceBaysIndexRouteHandler,
  postDcimDeviceBayTemplatesIndexRouteHandler,
  postDcimDeviceRolesIndexRouteHandler,
  postDcimDevicesIndexRouteHandler,
  postDcimDeviceTypesIndexRouteHandler,
  postDcimFrontPortsIndexRouteHandler,
  postDcimFrontPortTemplatesIndexRouteHandler,
  postDcimInterfacesIndexRouteHandler,
  postDcimInterfaceTemplatesIndexRouteHandler,
  postDcimInventoryItemsIndexRouteHandler,
  postDcimManufacturersIndexRouteHandler,
  postDcimPlatformsIndexRouteHandler,
  postDcimPowerFeedsIndexRouteHandler,
  postDcimPowerOutletsIndexRouteHandler,
  postDcimPowerOutletTemplatesIndexRouteHandler,
  postDcimPowerPanelsIndexRouteHandler,
  postDcimPowerPortsIndexRouteHandler,
  postDcimPowerPortTemplatesIndexRouteHandler,
  postDcimRackGroupsIndexRouteHandler,
  postDcimRackReservationsIndexRouteHandler,
  postDcimRackRolesIndexRouteHandler,
  postDcimRacksIndexRouteHandler,
  postDcimRearPortsIndexRouteHandler,
  postDcimRearPortTemplatesIndexRouteHandler,
  postDcimRegionsIndexRouteHandler,
  postDcimSitesIndexRouteHandler,
  postDcimVirtualChassisIndexRouteHandler,
  postExtrasConfigContextsIndexRouteHandler,
  postExtrasExportTemplatesIndexRouteHandler,
  postExtrasGraphsIndexRouteHandler,
  postExtrasImageAttachmentsIndexRouteHandler,
  postExtrasReportsIdRunIndexRouteHandler,
  postExtrasTagsIndexRouteHandler,
  postIpamAggregatesIndexRouteHandler,
  postIpamIpAddressesIndexRouteHandler,
  postIpamPrefixesIdAvailableIpsIndexRouteHandler,
  postIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  postIpamPrefixesIndexRouteHandler,
  postIpamRirsIndexRouteHandler,
  postIpamRolesIndexRouteHandler,
  postIpamServicesIndexRouteHandler,
  postIpamVlanGroupsIndexRouteHandler,
  postIpamVlansIndexRouteHandler,
  postIpamVrfsIndexRouteHandler,
  postSecretsGetSessionKeyIndexRouteHandler,
  postSecretsSecretRolesIndexRouteHandler,
  postSecretsSecretsIndexRouteHandler,
  postTenancyTenantGroupsIndexRouteHandler,
  postTenancyTenantsIndexRouteHandler,
  postVirtualizationClusterGroupsIndexRouteHandler,
  postVirtualizationClustersIndexRouteHandler,
  postVirtualizationClusterTypesIndexRouteHandler,
  postVirtualizationInterfacesIndexRouteHandler,
  postVirtualizationVirtualMachinesIndexRouteHandler,
  putCircuitsCircuitsIdIndexRouteHandler,
  putCircuitsCircuitTerminationsIdIndexRouteHandler,
  putCircuitsCircuitTypesIdIndexRouteHandler,
  putCircuitsProvidersIdIndexRouteHandler,
  putDcimCablesIdIndexRouteHandler,
  putDcimConsolePortsIdIndexRouteHandler,
  putDcimConsolePortTemplatesIdIndexRouteHandler,
  putDcimConsoleServerPortsIdIndexRouteHandler,
  putDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  putDcimDeviceBaysIdIndexRouteHandler,
  putDcimDeviceBayTemplatesIdIndexRouteHandler,
  putDcimDeviceRolesIdIndexRouteHandler,
  putDcimDevicesIdIndexRouteHandler,
  putDcimDeviceTypesIdIndexRouteHandler,
  putDcimFrontPortsIdIndexRouteHandler,
  putDcimFrontPortTemplatesIdIndexRouteHandler,
  putDcimInterfacesIdIndexRouteHandler,
  putDcimInterfaceTemplatesIdIndexRouteHandler,
  putDcimInventoryItemsIdIndexRouteHandler,
  putDcimManufacturersIdIndexRouteHandler,
  putDcimPlatformsIdIndexRouteHandler,
  putDcimPowerFeedsIdIndexRouteHandler,
  putDcimPowerOutletsIdIndexRouteHandler,
  putDcimPowerOutletTemplatesIdIndexRouteHandler,
  putDcimPowerPanelsIdIndexRouteHandler,
  putDcimPowerPortsIdIndexRouteHandler,
  putDcimPowerPortTemplatesIdIndexRouteHandler,
  putDcimRackGroupsIdIndexRouteHandler,
  putDcimRackReservationsIdIndexRouteHandler,
  putDcimRackRolesIdIndexRouteHandler,
  putDcimRacksIdIndexRouteHandler,
  putDcimRearPortsIdIndexRouteHandler,
  putDcimRearPortTemplatesIdIndexRouteHandler,
  putDcimRegionsIdIndexRouteHandler,
  putDcimSitesIdIndexRouteHandler,
  putDcimVirtualChassisIdIndexRouteHandler,
  putExtrasConfigContextsIdIndexRouteHandler,
  putExtrasExportTemplatesIdIndexRouteHandler,
  putExtrasGraphsIdIndexRouteHandler,
  putExtrasImageAttachmentsIdIndexRouteHandler,
  putExtrasTagsIdIndexRouteHandler,
  putIpamAggregatesIdIndexRouteHandler,
  putIpamIpAddressesIdIndexRouteHandler,
  putIpamPrefixesIdIndexRouteHandler,
  putIpamRirsIdIndexRouteHandler,
  putIpamRolesIdIndexRouteHandler,
  putIpamServicesIdIndexRouteHandler,
  putIpamVlanGroupsIdIndexRouteHandler,
  putIpamVlansIdIndexRouteHandler,
  putIpamVrfsIdIndexRouteHandler,
  putSecretsSecretRolesIdIndexRouteHandler,
  putSecretsSecretsIdIndexRouteHandler,
  putTenancyTenantGroupsIdIndexRouteHandler,
  putTenancyTenantsIdIndexRouteHandler,
  putVirtualizationClusterGroupsIdIndexRouteHandler,
  putVirtualizationClustersIdIndexRouteHandler,
  putVirtualizationClusterTypesIdIndexRouteHandler,
  putVirtualizationInterfacesIdIndexRouteHandler,
  putVirtualizationVirtualMachinesIdIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCircuitsCircuitTerminationsIndexRoute,
    getCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    postCircuitsCircuitTerminationsIndexRoute,
    postCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    deleteCircuitsCircuitTerminationsIdIndexRoute,
    deleteCircuitsCircuitTerminationsIdIndexRouteHandler,
  )
  .openapi(
    getCircuitsCircuitTerminationsIdIndexRoute,
    getCircuitsCircuitTerminationsIdIndexRouteHandler,
  )
  .openapi(
    patchCircuitsCircuitTerminationsIdIndexRoute,
    patchCircuitsCircuitTerminationsIdIndexRouteHandler,
  )
  .openapi(
    putCircuitsCircuitTerminationsIdIndexRoute,
    putCircuitsCircuitTerminationsIdIndexRouteHandler,
  )
  .openapi(getCircuitsCircuitTypesIndexRoute, getCircuitsCircuitTypesIndexRouteHandler)
  .openapi(postCircuitsCircuitTypesIndexRoute, postCircuitsCircuitTypesIndexRouteHandler)
  .openapi(deleteCircuitsCircuitTypesIdIndexRoute, deleteCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(getCircuitsCircuitTypesIdIndexRoute, getCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(patchCircuitsCircuitTypesIdIndexRoute, patchCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(putCircuitsCircuitTypesIdIndexRoute, putCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(getCircuitsCircuitsIndexRoute, getCircuitsCircuitsIndexRouteHandler)
  .openapi(postCircuitsCircuitsIndexRoute, postCircuitsCircuitsIndexRouteHandler)
  .openapi(deleteCircuitsCircuitsIdIndexRoute, deleteCircuitsCircuitsIdIndexRouteHandler)
  .openapi(getCircuitsCircuitsIdIndexRoute, getCircuitsCircuitsIdIndexRouteHandler)
  .openapi(patchCircuitsCircuitsIdIndexRoute, patchCircuitsCircuitsIdIndexRouteHandler)
  .openapi(putCircuitsCircuitsIdIndexRoute, putCircuitsCircuitsIdIndexRouteHandler)
  .openapi(getCircuitsProvidersIndexRoute, getCircuitsProvidersIndexRouteHandler)
  .openapi(postCircuitsProvidersIndexRoute, postCircuitsProvidersIndexRouteHandler)
  .openapi(deleteCircuitsProvidersIdIndexRoute, deleteCircuitsProvidersIdIndexRouteHandler)
  .openapi(getCircuitsProvidersIdIndexRoute, getCircuitsProvidersIdIndexRouteHandler)
  .openapi(patchCircuitsProvidersIdIndexRoute, patchCircuitsProvidersIdIndexRouteHandler)
  .openapi(putCircuitsProvidersIdIndexRoute, putCircuitsProvidersIdIndexRouteHandler)
  .openapi(getCircuitsProvidersIdGraphsIndexRoute, getCircuitsProvidersIdGraphsIndexRouteHandler)
  .openapi(getDcimCablesIndexRoute, getDcimCablesIndexRouteHandler)
  .openapi(postDcimCablesIndexRoute, postDcimCablesIndexRouteHandler)
  .openapi(deleteDcimCablesIdIndexRoute, deleteDcimCablesIdIndexRouteHandler)
  .openapi(getDcimCablesIdIndexRoute, getDcimCablesIdIndexRouteHandler)
  .openapi(patchDcimCablesIdIndexRoute, patchDcimCablesIdIndexRouteHandler)
  .openapi(putDcimCablesIdIndexRoute, putDcimCablesIdIndexRouteHandler)
  .openapi(getDcimConnectedDeviceIndexRoute, getDcimConnectedDeviceIndexRouteHandler)
  .openapi(getDcimConsoleConnectionsIndexRoute, getDcimConsoleConnectionsIndexRouteHandler)
  .openapi(getDcimConsolePortTemplatesIndexRoute, getDcimConsolePortTemplatesIndexRouteHandler)
  .openapi(postDcimConsolePortTemplatesIndexRoute, postDcimConsolePortTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimConsolePortTemplatesIdIndexRoute,
    deleteDcimConsolePortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimConsolePortTemplatesIdIndexRoute, getDcimConsolePortTemplatesIdIndexRouteHandler)
  .openapi(
    patchDcimConsolePortTemplatesIdIndexRoute,
    patchDcimConsolePortTemplatesIdIndexRouteHandler,
  )
  .openapi(putDcimConsolePortTemplatesIdIndexRoute, putDcimConsolePortTemplatesIdIndexRouteHandler)
  .openapi(getDcimConsolePortsIndexRoute, getDcimConsolePortsIndexRouteHandler)
  .openapi(postDcimConsolePortsIndexRoute, postDcimConsolePortsIndexRouteHandler)
  .openapi(deleteDcimConsolePortsIdIndexRoute, deleteDcimConsolePortsIdIndexRouteHandler)
  .openapi(getDcimConsolePortsIdIndexRoute, getDcimConsolePortsIdIndexRouteHandler)
  .openapi(patchDcimConsolePortsIdIndexRoute, patchDcimConsolePortsIdIndexRouteHandler)
  .openapi(putDcimConsolePortsIdIndexRoute, putDcimConsolePortsIdIndexRouteHandler)
  .openapi(getDcimConsolePortsIdTraceIndexRoute, getDcimConsolePortsIdTraceIndexRouteHandler)
  .openapi(
    getDcimConsoleServerPortTemplatesIndexRoute,
    getDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    postDcimConsoleServerPortTemplatesIndexRoute,
    postDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    deleteDcimConsoleServerPortTemplatesIdIndexRoute,
    deleteDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(
    getDcimConsoleServerPortTemplatesIdIndexRoute,
    getDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(
    patchDcimConsoleServerPortTemplatesIdIndexRoute,
    patchDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(
    putDcimConsoleServerPortTemplatesIdIndexRoute,
    putDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimConsoleServerPortsIndexRoute, getDcimConsoleServerPortsIndexRouteHandler)
  .openapi(postDcimConsoleServerPortsIndexRoute, postDcimConsoleServerPortsIndexRouteHandler)
  .openapi(
    deleteDcimConsoleServerPortsIdIndexRoute,
    deleteDcimConsoleServerPortsIdIndexRouteHandler,
  )
  .openapi(getDcimConsoleServerPortsIdIndexRoute, getDcimConsoleServerPortsIdIndexRouteHandler)
  .openapi(patchDcimConsoleServerPortsIdIndexRoute, patchDcimConsoleServerPortsIdIndexRouteHandler)
  .openapi(putDcimConsoleServerPortsIdIndexRoute, putDcimConsoleServerPortsIdIndexRouteHandler)
  .openapi(
    getDcimConsoleServerPortsIdTraceIndexRoute,
    getDcimConsoleServerPortsIdTraceIndexRouteHandler,
  )
  .openapi(getDcimDeviceBayTemplatesIndexRoute, getDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(postDcimDeviceBayTemplatesIndexRoute, postDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimDeviceBayTemplatesIdIndexRoute,
    deleteDcimDeviceBayTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimDeviceBayTemplatesIdIndexRoute, getDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(patchDcimDeviceBayTemplatesIdIndexRoute, patchDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(putDcimDeviceBayTemplatesIdIndexRoute, putDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(getDcimDeviceBaysIndexRoute, getDcimDeviceBaysIndexRouteHandler)
  .openapi(postDcimDeviceBaysIndexRoute, postDcimDeviceBaysIndexRouteHandler)
  .openapi(deleteDcimDeviceBaysIdIndexRoute, deleteDcimDeviceBaysIdIndexRouteHandler)
  .openapi(getDcimDeviceBaysIdIndexRoute, getDcimDeviceBaysIdIndexRouteHandler)
  .openapi(patchDcimDeviceBaysIdIndexRoute, patchDcimDeviceBaysIdIndexRouteHandler)
  .openapi(putDcimDeviceBaysIdIndexRoute, putDcimDeviceBaysIdIndexRouteHandler)
  .openapi(getDcimDeviceRolesIndexRoute, getDcimDeviceRolesIndexRouteHandler)
  .openapi(postDcimDeviceRolesIndexRoute, postDcimDeviceRolesIndexRouteHandler)
  .openapi(deleteDcimDeviceRolesIdIndexRoute, deleteDcimDeviceRolesIdIndexRouteHandler)
  .openapi(getDcimDeviceRolesIdIndexRoute, getDcimDeviceRolesIdIndexRouteHandler)
  .openapi(patchDcimDeviceRolesIdIndexRoute, patchDcimDeviceRolesIdIndexRouteHandler)
  .openapi(putDcimDeviceRolesIdIndexRoute, putDcimDeviceRolesIdIndexRouteHandler)
  .openapi(getDcimDeviceTypesIndexRoute, getDcimDeviceTypesIndexRouteHandler)
  .openapi(postDcimDeviceTypesIndexRoute, postDcimDeviceTypesIndexRouteHandler)
  .openapi(deleteDcimDeviceTypesIdIndexRoute, deleteDcimDeviceTypesIdIndexRouteHandler)
  .openapi(getDcimDeviceTypesIdIndexRoute, getDcimDeviceTypesIdIndexRouteHandler)
  .openapi(patchDcimDeviceTypesIdIndexRoute, patchDcimDeviceTypesIdIndexRouteHandler)
  .openapi(putDcimDeviceTypesIdIndexRoute, putDcimDeviceTypesIdIndexRouteHandler)
  .openapi(getDcimDevicesIndexRoute, getDcimDevicesIndexRouteHandler)
  .openapi(postDcimDevicesIndexRoute, postDcimDevicesIndexRouteHandler)
  .openapi(deleteDcimDevicesIdIndexRoute, deleteDcimDevicesIdIndexRouteHandler)
  .openapi(getDcimDevicesIdIndexRoute, getDcimDevicesIdIndexRouteHandler)
  .openapi(patchDcimDevicesIdIndexRoute, patchDcimDevicesIdIndexRouteHandler)
  .openapi(putDcimDevicesIdIndexRoute, putDcimDevicesIdIndexRouteHandler)
  .openapi(getDcimDevicesIdGraphsIndexRoute, getDcimDevicesIdGraphsIndexRouteHandler)
  .openapi(getDcimDevicesIdNapalmIndexRoute, getDcimDevicesIdNapalmIndexRouteHandler)
  .openapi(getDcimFrontPortTemplatesIndexRoute, getDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(postDcimFrontPortTemplatesIndexRoute, postDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimFrontPortTemplatesIdIndexRoute,
    deleteDcimFrontPortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimFrontPortTemplatesIdIndexRoute, getDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimFrontPortTemplatesIdIndexRoute, patchDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimFrontPortTemplatesIdIndexRoute, putDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(getDcimFrontPortsIndexRoute, getDcimFrontPortsIndexRouteHandler)
  .openapi(postDcimFrontPortsIndexRoute, postDcimFrontPortsIndexRouteHandler)
  .openapi(deleteDcimFrontPortsIdIndexRoute, deleteDcimFrontPortsIdIndexRouteHandler)
  .openapi(getDcimFrontPortsIdIndexRoute, getDcimFrontPortsIdIndexRouteHandler)
  .openapi(patchDcimFrontPortsIdIndexRoute, patchDcimFrontPortsIdIndexRouteHandler)
  .openapi(putDcimFrontPortsIdIndexRoute, putDcimFrontPortsIdIndexRouteHandler)
  .openapi(getDcimFrontPortsIdTraceIndexRoute, getDcimFrontPortsIdTraceIndexRouteHandler)
  .openapi(getDcimInterfaceConnectionsIndexRoute, getDcimInterfaceConnectionsIndexRouteHandler)
  .openapi(getDcimInterfaceTemplatesIndexRoute, getDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(postDcimInterfaceTemplatesIndexRoute, postDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimInterfaceTemplatesIdIndexRoute,
    deleteDcimInterfaceTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimInterfaceTemplatesIdIndexRoute, getDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(patchDcimInterfaceTemplatesIdIndexRoute, patchDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(putDcimInterfaceTemplatesIdIndexRoute, putDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(getDcimInterfacesIndexRoute, getDcimInterfacesIndexRouteHandler)
  .openapi(postDcimInterfacesIndexRoute, postDcimInterfacesIndexRouteHandler)
  .openapi(deleteDcimInterfacesIdIndexRoute, deleteDcimInterfacesIdIndexRouteHandler)
  .openapi(getDcimInterfacesIdIndexRoute, getDcimInterfacesIdIndexRouteHandler)
  .openapi(patchDcimInterfacesIdIndexRoute, patchDcimInterfacesIdIndexRouteHandler)
  .openapi(putDcimInterfacesIdIndexRoute, putDcimInterfacesIdIndexRouteHandler)
  .openapi(getDcimInterfacesIdGraphsIndexRoute, getDcimInterfacesIdGraphsIndexRouteHandler)
  .openapi(getDcimInterfacesIdTraceIndexRoute, getDcimInterfacesIdTraceIndexRouteHandler)
  .openapi(getDcimInventoryItemsIndexRoute, getDcimInventoryItemsIndexRouteHandler)
  .openapi(postDcimInventoryItemsIndexRoute, postDcimInventoryItemsIndexRouteHandler)
  .openapi(deleteDcimInventoryItemsIdIndexRoute, deleteDcimInventoryItemsIdIndexRouteHandler)
  .openapi(getDcimInventoryItemsIdIndexRoute, getDcimInventoryItemsIdIndexRouteHandler)
  .openapi(patchDcimInventoryItemsIdIndexRoute, patchDcimInventoryItemsIdIndexRouteHandler)
  .openapi(putDcimInventoryItemsIdIndexRoute, putDcimInventoryItemsIdIndexRouteHandler)
  .openapi(getDcimManufacturersIndexRoute, getDcimManufacturersIndexRouteHandler)
  .openapi(postDcimManufacturersIndexRoute, postDcimManufacturersIndexRouteHandler)
  .openapi(deleteDcimManufacturersIdIndexRoute, deleteDcimManufacturersIdIndexRouteHandler)
  .openapi(getDcimManufacturersIdIndexRoute, getDcimManufacturersIdIndexRouteHandler)
  .openapi(patchDcimManufacturersIdIndexRoute, patchDcimManufacturersIdIndexRouteHandler)
  .openapi(putDcimManufacturersIdIndexRoute, putDcimManufacturersIdIndexRouteHandler)
  .openapi(getDcimPlatformsIndexRoute, getDcimPlatformsIndexRouteHandler)
  .openapi(postDcimPlatformsIndexRoute, postDcimPlatformsIndexRouteHandler)
  .openapi(deleteDcimPlatformsIdIndexRoute, deleteDcimPlatformsIdIndexRouteHandler)
  .openapi(getDcimPlatformsIdIndexRoute, getDcimPlatformsIdIndexRouteHandler)
  .openapi(patchDcimPlatformsIdIndexRoute, patchDcimPlatformsIdIndexRouteHandler)
  .openapi(putDcimPlatformsIdIndexRoute, putDcimPlatformsIdIndexRouteHandler)
  .openapi(getDcimPowerConnectionsIndexRoute, getDcimPowerConnectionsIndexRouteHandler)
  .openapi(getDcimPowerFeedsIndexRoute, getDcimPowerFeedsIndexRouteHandler)
  .openapi(postDcimPowerFeedsIndexRoute, postDcimPowerFeedsIndexRouteHandler)
  .openapi(deleteDcimPowerFeedsIdIndexRoute, deleteDcimPowerFeedsIdIndexRouteHandler)
  .openapi(getDcimPowerFeedsIdIndexRoute, getDcimPowerFeedsIdIndexRouteHandler)
  .openapi(patchDcimPowerFeedsIdIndexRoute, patchDcimPowerFeedsIdIndexRouteHandler)
  .openapi(putDcimPowerFeedsIdIndexRoute, putDcimPowerFeedsIdIndexRouteHandler)
  .openapi(getDcimPowerOutletTemplatesIndexRoute, getDcimPowerOutletTemplatesIndexRouteHandler)
  .openapi(postDcimPowerOutletTemplatesIndexRoute, postDcimPowerOutletTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimPowerOutletTemplatesIdIndexRoute,
    deleteDcimPowerOutletTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimPowerOutletTemplatesIdIndexRoute, getDcimPowerOutletTemplatesIdIndexRouteHandler)
  .openapi(
    patchDcimPowerOutletTemplatesIdIndexRoute,
    patchDcimPowerOutletTemplatesIdIndexRouteHandler,
  )
  .openapi(putDcimPowerOutletTemplatesIdIndexRoute, putDcimPowerOutletTemplatesIdIndexRouteHandler)
  .openapi(getDcimPowerOutletsIndexRoute, getDcimPowerOutletsIndexRouteHandler)
  .openapi(postDcimPowerOutletsIndexRoute, postDcimPowerOutletsIndexRouteHandler)
  .openapi(deleteDcimPowerOutletsIdIndexRoute, deleteDcimPowerOutletsIdIndexRouteHandler)
  .openapi(getDcimPowerOutletsIdIndexRoute, getDcimPowerOutletsIdIndexRouteHandler)
  .openapi(patchDcimPowerOutletsIdIndexRoute, patchDcimPowerOutletsIdIndexRouteHandler)
  .openapi(putDcimPowerOutletsIdIndexRoute, putDcimPowerOutletsIdIndexRouteHandler)
  .openapi(getDcimPowerOutletsIdTraceIndexRoute, getDcimPowerOutletsIdTraceIndexRouteHandler)
  .openapi(getDcimPowerPanelsIndexRoute, getDcimPowerPanelsIndexRouteHandler)
  .openapi(postDcimPowerPanelsIndexRoute, postDcimPowerPanelsIndexRouteHandler)
  .openapi(deleteDcimPowerPanelsIdIndexRoute, deleteDcimPowerPanelsIdIndexRouteHandler)
  .openapi(getDcimPowerPanelsIdIndexRoute, getDcimPowerPanelsIdIndexRouteHandler)
  .openapi(patchDcimPowerPanelsIdIndexRoute, patchDcimPowerPanelsIdIndexRouteHandler)
  .openapi(putDcimPowerPanelsIdIndexRoute, putDcimPowerPanelsIdIndexRouteHandler)
  .openapi(getDcimPowerPortTemplatesIndexRoute, getDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(postDcimPowerPortTemplatesIndexRoute, postDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimPowerPortTemplatesIdIndexRoute,
    deleteDcimPowerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimPowerPortTemplatesIdIndexRoute, getDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimPowerPortTemplatesIdIndexRoute, patchDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimPowerPortTemplatesIdIndexRoute, putDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(getDcimPowerPortsIndexRoute, getDcimPowerPortsIndexRouteHandler)
  .openapi(postDcimPowerPortsIndexRoute, postDcimPowerPortsIndexRouteHandler)
  .openapi(deleteDcimPowerPortsIdIndexRoute, deleteDcimPowerPortsIdIndexRouteHandler)
  .openapi(getDcimPowerPortsIdIndexRoute, getDcimPowerPortsIdIndexRouteHandler)
  .openapi(patchDcimPowerPortsIdIndexRoute, patchDcimPowerPortsIdIndexRouteHandler)
  .openapi(putDcimPowerPortsIdIndexRoute, putDcimPowerPortsIdIndexRouteHandler)
  .openapi(getDcimPowerPortsIdTraceIndexRoute, getDcimPowerPortsIdTraceIndexRouteHandler)
  .openapi(getDcimRackGroupsIndexRoute, getDcimRackGroupsIndexRouteHandler)
  .openapi(postDcimRackGroupsIndexRoute, postDcimRackGroupsIndexRouteHandler)
  .openapi(deleteDcimRackGroupsIdIndexRoute, deleteDcimRackGroupsIdIndexRouteHandler)
  .openapi(getDcimRackGroupsIdIndexRoute, getDcimRackGroupsIdIndexRouteHandler)
  .openapi(patchDcimRackGroupsIdIndexRoute, patchDcimRackGroupsIdIndexRouteHandler)
  .openapi(putDcimRackGroupsIdIndexRoute, putDcimRackGroupsIdIndexRouteHandler)
  .openapi(getDcimRackReservationsIndexRoute, getDcimRackReservationsIndexRouteHandler)
  .openapi(postDcimRackReservationsIndexRoute, postDcimRackReservationsIndexRouteHandler)
  .openapi(deleteDcimRackReservationsIdIndexRoute, deleteDcimRackReservationsIdIndexRouteHandler)
  .openapi(getDcimRackReservationsIdIndexRoute, getDcimRackReservationsIdIndexRouteHandler)
  .openapi(patchDcimRackReservationsIdIndexRoute, patchDcimRackReservationsIdIndexRouteHandler)
  .openapi(putDcimRackReservationsIdIndexRoute, putDcimRackReservationsIdIndexRouteHandler)
  .openapi(getDcimRackRolesIndexRoute, getDcimRackRolesIndexRouteHandler)
  .openapi(postDcimRackRolesIndexRoute, postDcimRackRolesIndexRouteHandler)
  .openapi(deleteDcimRackRolesIdIndexRoute, deleteDcimRackRolesIdIndexRouteHandler)
  .openapi(getDcimRackRolesIdIndexRoute, getDcimRackRolesIdIndexRouteHandler)
  .openapi(patchDcimRackRolesIdIndexRoute, patchDcimRackRolesIdIndexRouteHandler)
  .openapi(putDcimRackRolesIdIndexRoute, putDcimRackRolesIdIndexRouteHandler)
  .openapi(getDcimRacksIndexRoute, getDcimRacksIndexRouteHandler)
  .openapi(postDcimRacksIndexRoute, postDcimRacksIndexRouteHandler)
  .openapi(deleteDcimRacksIdIndexRoute, deleteDcimRacksIdIndexRouteHandler)
  .openapi(getDcimRacksIdIndexRoute, getDcimRacksIdIndexRouteHandler)
  .openapi(patchDcimRacksIdIndexRoute, patchDcimRacksIdIndexRouteHandler)
  .openapi(putDcimRacksIdIndexRoute, putDcimRacksIdIndexRouteHandler)
  .openapi(getDcimRacksIdElevationIndexRoute, getDcimRacksIdElevationIndexRouteHandler)
  .openapi(getDcimRearPortTemplatesIndexRoute, getDcimRearPortTemplatesIndexRouteHandler)
  .openapi(postDcimRearPortTemplatesIndexRoute, postDcimRearPortTemplatesIndexRouteHandler)
  .openapi(deleteDcimRearPortTemplatesIdIndexRoute, deleteDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(getDcimRearPortTemplatesIdIndexRoute, getDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimRearPortTemplatesIdIndexRoute, patchDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimRearPortTemplatesIdIndexRoute, putDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(getDcimRearPortsIndexRoute, getDcimRearPortsIndexRouteHandler)
  .openapi(postDcimRearPortsIndexRoute, postDcimRearPortsIndexRouteHandler)
  .openapi(deleteDcimRearPortsIdIndexRoute, deleteDcimRearPortsIdIndexRouteHandler)
  .openapi(getDcimRearPortsIdIndexRoute, getDcimRearPortsIdIndexRouteHandler)
  .openapi(patchDcimRearPortsIdIndexRoute, patchDcimRearPortsIdIndexRouteHandler)
  .openapi(putDcimRearPortsIdIndexRoute, putDcimRearPortsIdIndexRouteHandler)
  .openapi(getDcimRearPortsIdTraceIndexRoute, getDcimRearPortsIdTraceIndexRouteHandler)
  .openapi(getDcimRegionsIndexRoute, getDcimRegionsIndexRouteHandler)
  .openapi(postDcimRegionsIndexRoute, postDcimRegionsIndexRouteHandler)
  .openapi(deleteDcimRegionsIdIndexRoute, deleteDcimRegionsIdIndexRouteHandler)
  .openapi(getDcimRegionsIdIndexRoute, getDcimRegionsIdIndexRouteHandler)
  .openapi(patchDcimRegionsIdIndexRoute, patchDcimRegionsIdIndexRouteHandler)
  .openapi(putDcimRegionsIdIndexRoute, putDcimRegionsIdIndexRouteHandler)
  .openapi(getDcimSitesIndexRoute, getDcimSitesIndexRouteHandler)
  .openapi(postDcimSitesIndexRoute, postDcimSitesIndexRouteHandler)
  .openapi(deleteDcimSitesIdIndexRoute, deleteDcimSitesIdIndexRouteHandler)
  .openapi(getDcimSitesIdIndexRoute, getDcimSitesIdIndexRouteHandler)
  .openapi(patchDcimSitesIdIndexRoute, patchDcimSitesIdIndexRouteHandler)
  .openapi(putDcimSitesIdIndexRoute, putDcimSitesIdIndexRouteHandler)
  .openapi(getDcimSitesIdGraphsIndexRoute, getDcimSitesIdGraphsIndexRouteHandler)
  .openapi(getDcimVirtualChassisIndexRoute, getDcimVirtualChassisIndexRouteHandler)
  .openapi(postDcimVirtualChassisIndexRoute, postDcimVirtualChassisIndexRouteHandler)
  .openapi(deleteDcimVirtualChassisIdIndexRoute, deleteDcimVirtualChassisIdIndexRouteHandler)
  .openapi(getDcimVirtualChassisIdIndexRoute, getDcimVirtualChassisIdIndexRouteHandler)
  .openapi(patchDcimVirtualChassisIdIndexRoute, patchDcimVirtualChassisIdIndexRouteHandler)
  .openapi(putDcimVirtualChassisIdIndexRoute, putDcimVirtualChassisIdIndexRouteHandler)
  .openapi(getExtrasCustomFieldChoicesIndexRoute, getExtrasCustomFieldChoicesIndexRouteHandler)
  .openapi(getExtrasCustomFieldChoicesIdIndexRoute, getExtrasCustomFieldChoicesIdIndexRouteHandler)
  .openapi(getExtrasConfigContextsIndexRoute, getExtrasConfigContextsIndexRouteHandler)
  .openapi(postExtrasConfigContextsIndexRoute, postExtrasConfigContextsIndexRouteHandler)
  .openapi(deleteExtrasConfigContextsIdIndexRoute, deleteExtrasConfigContextsIdIndexRouteHandler)
  .openapi(getExtrasConfigContextsIdIndexRoute, getExtrasConfigContextsIdIndexRouteHandler)
  .openapi(patchExtrasConfigContextsIdIndexRoute, patchExtrasConfigContextsIdIndexRouteHandler)
  .openapi(putExtrasConfigContextsIdIndexRoute, putExtrasConfigContextsIdIndexRouteHandler)
  .openapi(getExtrasExportTemplatesIndexRoute, getExtrasExportTemplatesIndexRouteHandler)
  .openapi(postExtrasExportTemplatesIndexRoute, postExtrasExportTemplatesIndexRouteHandler)
  .openapi(deleteExtrasExportTemplatesIdIndexRoute, deleteExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(getExtrasExportTemplatesIdIndexRoute, getExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(patchExtrasExportTemplatesIdIndexRoute, patchExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(putExtrasExportTemplatesIdIndexRoute, putExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(getExtrasGraphsIndexRoute, getExtrasGraphsIndexRouteHandler)
  .openapi(postExtrasGraphsIndexRoute, postExtrasGraphsIndexRouteHandler)
  .openapi(deleteExtrasGraphsIdIndexRoute, deleteExtrasGraphsIdIndexRouteHandler)
  .openapi(getExtrasGraphsIdIndexRoute, getExtrasGraphsIdIndexRouteHandler)
  .openapi(patchExtrasGraphsIdIndexRoute, patchExtrasGraphsIdIndexRouteHandler)
  .openapi(putExtrasGraphsIdIndexRoute, putExtrasGraphsIdIndexRouteHandler)
  .openapi(getExtrasImageAttachmentsIndexRoute, getExtrasImageAttachmentsIndexRouteHandler)
  .openapi(postExtrasImageAttachmentsIndexRoute, postExtrasImageAttachmentsIndexRouteHandler)
  .openapi(
    deleteExtrasImageAttachmentsIdIndexRoute,
    deleteExtrasImageAttachmentsIdIndexRouteHandler,
  )
  .openapi(getExtrasImageAttachmentsIdIndexRoute, getExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(patchExtrasImageAttachmentsIdIndexRoute, patchExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(putExtrasImageAttachmentsIdIndexRoute, putExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(getExtrasObjectChangesIndexRoute, getExtrasObjectChangesIndexRouteHandler)
  .openapi(getExtrasObjectChangesIdIndexRoute, getExtrasObjectChangesIdIndexRouteHandler)
  .openapi(getExtrasReportsIndexRoute, getExtrasReportsIndexRouteHandler)
  .openapi(getExtrasReportsIdIndexRoute, getExtrasReportsIdIndexRouteHandler)
  .openapi(postExtrasReportsIdRunIndexRoute, postExtrasReportsIdRunIndexRouteHandler)
  .openapi(getExtrasScriptsIndexRoute, getExtrasScriptsIndexRouteHandler)
  .openapi(getExtrasScriptsIdIndexRoute, getExtrasScriptsIdIndexRouteHandler)
  .openapi(getExtrasTagsIndexRoute, getExtrasTagsIndexRouteHandler)
  .openapi(postExtrasTagsIndexRoute, postExtrasTagsIndexRouteHandler)
  .openapi(deleteExtrasTagsIdIndexRoute, deleteExtrasTagsIdIndexRouteHandler)
  .openapi(getExtrasTagsIdIndexRoute, getExtrasTagsIdIndexRouteHandler)
  .openapi(patchExtrasTagsIdIndexRoute, patchExtrasTagsIdIndexRouteHandler)
  .openapi(putExtrasTagsIdIndexRoute, putExtrasTagsIdIndexRouteHandler)
  .openapi(getIpamAggregatesIndexRoute, getIpamAggregatesIndexRouteHandler)
  .openapi(postIpamAggregatesIndexRoute, postIpamAggregatesIndexRouteHandler)
  .openapi(deleteIpamAggregatesIdIndexRoute, deleteIpamAggregatesIdIndexRouteHandler)
  .openapi(getIpamAggregatesIdIndexRoute, getIpamAggregatesIdIndexRouteHandler)
  .openapi(patchIpamAggregatesIdIndexRoute, patchIpamAggregatesIdIndexRouteHandler)
  .openapi(putIpamAggregatesIdIndexRoute, putIpamAggregatesIdIndexRouteHandler)
  .openapi(getIpamIpAddressesIndexRoute, getIpamIpAddressesIndexRouteHandler)
  .openapi(postIpamIpAddressesIndexRoute, postIpamIpAddressesIndexRouteHandler)
  .openapi(deleteIpamIpAddressesIdIndexRoute, deleteIpamIpAddressesIdIndexRouteHandler)
  .openapi(getIpamIpAddressesIdIndexRoute, getIpamIpAddressesIdIndexRouteHandler)
  .openapi(patchIpamIpAddressesIdIndexRoute, patchIpamIpAddressesIdIndexRouteHandler)
  .openapi(putIpamIpAddressesIdIndexRoute, putIpamIpAddressesIdIndexRouteHandler)
  .openapi(getIpamPrefixesIndexRoute, getIpamPrefixesIndexRouteHandler)
  .openapi(postIpamPrefixesIndexRoute, postIpamPrefixesIndexRouteHandler)
  .openapi(deleteIpamPrefixesIdIndexRoute, deleteIpamPrefixesIdIndexRouteHandler)
  .openapi(getIpamPrefixesIdIndexRoute, getIpamPrefixesIdIndexRouteHandler)
  .openapi(patchIpamPrefixesIdIndexRoute, patchIpamPrefixesIdIndexRouteHandler)
  .openapi(putIpamPrefixesIdIndexRoute, putIpamPrefixesIdIndexRouteHandler)
  .openapi(getIpamPrefixesIdAvailableIpsIndexRoute, getIpamPrefixesIdAvailableIpsIndexRouteHandler)
  .openapi(
    postIpamPrefixesIdAvailableIpsIndexRoute,
    postIpamPrefixesIdAvailableIpsIndexRouteHandler,
  )
  .openapi(
    getIpamPrefixesIdAvailablePrefixesIndexRoute,
    getIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  )
  .openapi(
    postIpamPrefixesIdAvailablePrefixesIndexRoute,
    postIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  )
  .openapi(getIpamRirsIndexRoute, getIpamRirsIndexRouteHandler)
  .openapi(postIpamRirsIndexRoute, postIpamRirsIndexRouteHandler)
  .openapi(deleteIpamRirsIdIndexRoute, deleteIpamRirsIdIndexRouteHandler)
  .openapi(getIpamRirsIdIndexRoute, getIpamRirsIdIndexRouteHandler)
  .openapi(patchIpamRirsIdIndexRoute, patchIpamRirsIdIndexRouteHandler)
  .openapi(putIpamRirsIdIndexRoute, putIpamRirsIdIndexRouteHandler)
  .openapi(getIpamRolesIndexRoute, getIpamRolesIndexRouteHandler)
  .openapi(postIpamRolesIndexRoute, postIpamRolesIndexRouteHandler)
  .openapi(deleteIpamRolesIdIndexRoute, deleteIpamRolesIdIndexRouteHandler)
  .openapi(getIpamRolesIdIndexRoute, getIpamRolesIdIndexRouteHandler)
  .openapi(patchIpamRolesIdIndexRoute, patchIpamRolesIdIndexRouteHandler)
  .openapi(putIpamRolesIdIndexRoute, putIpamRolesIdIndexRouteHandler)
  .openapi(getIpamServicesIndexRoute, getIpamServicesIndexRouteHandler)
  .openapi(postIpamServicesIndexRoute, postIpamServicesIndexRouteHandler)
  .openapi(deleteIpamServicesIdIndexRoute, deleteIpamServicesIdIndexRouteHandler)
  .openapi(getIpamServicesIdIndexRoute, getIpamServicesIdIndexRouteHandler)
  .openapi(patchIpamServicesIdIndexRoute, patchIpamServicesIdIndexRouteHandler)
  .openapi(putIpamServicesIdIndexRoute, putIpamServicesIdIndexRouteHandler)
  .openapi(getIpamVlanGroupsIndexRoute, getIpamVlanGroupsIndexRouteHandler)
  .openapi(postIpamVlanGroupsIndexRoute, postIpamVlanGroupsIndexRouteHandler)
  .openapi(deleteIpamVlanGroupsIdIndexRoute, deleteIpamVlanGroupsIdIndexRouteHandler)
  .openapi(getIpamVlanGroupsIdIndexRoute, getIpamVlanGroupsIdIndexRouteHandler)
  .openapi(patchIpamVlanGroupsIdIndexRoute, patchIpamVlanGroupsIdIndexRouteHandler)
  .openapi(putIpamVlanGroupsIdIndexRoute, putIpamVlanGroupsIdIndexRouteHandler)
  .openapi(getIpamVlansIndexRoute, getIpamVlansIndexRouteHandler)
  .openapi(postIpamVlansIndexRoute, postIpamVlansIndexRouteHandler)
  .openapi(deleteIpamVlansIdIndexRoute, deleteIpamVlansIdIndexRouteHandler)
  .openapi(getIpamVlansIdIndexRoute, getIpamVlansIdIndexRouteHandler)
  .openapi(patchIpamVlansIdIndexRoute, patchIpamVlansIdIndexRouteHandler)
  .openapi(putIpamVlansIdIndexRoute, putIpamVlansIdIndexRouteHandler)
  .openapi(getIpamVrfsIndexRoute, getIpamVrfsIndexRouteHandler)
  .openapi(postIpamVrfsIndexRoute, postIpamVrfsIndexRouteHandler)
  .openapi(deleteIpamVrfsIdIndexRoute, deleteIpamVrfsIdIndexRouteHandler)
  .openapi(getIpamVrfsIdIndexRoute, getIpamVrfsIdIndexRouteHandler)
  .openapi(patchIpamVrfsIdIndexRoute, patchIpamVrfsIdIndexRouteHandler)
  .openapi(putIpamVrfsIdIndexRoute, putIpamVrfsIdIndexRouteHandler)
  .openapi(getSecretsGenerateRsaKeyPairIndexRoute, getSecretsGenerateRsaKeyPairIndexRouteHandler)
  .openapi(postSecretsGetSessionKeyIndexRoute, postSecretsGetSessionKeyIndexRouteHandler)
  .openapi(getSecretsSecretRolesIndexRoute, getSecretsSecretRolesIndexRouteHandler)
  .openapi(postSecretsSecretRolesIndexRoute, postSecretsSecretRolesIndexRouteHandler)
  .openapi(deleteSecretsSecretRolesIdIndexRoute, deleteSecretsSecretRolesIdIndexRouteHandler)
  .openapi(getSecretsSecretRolesIdIndexRoute, getSecretsSecretRolesIdIndexRouteHandler)
  .openapi(patchSecretsSecretRolesIdIndexRoute, patchSecretsSecretRolesIdIndexRouteHandler)
  .openapi(putSecretsSecretRolesIdIndexRoute, putSecretsSecretRolesIdIndexRouteHandler)
  .openapi(getSecretsSecretsIndexRoute, getSecretsSecretsIndexRouteHandler)
  .openapi(postSecretsSecretsIndexRoute, postSecretsSecretsIndexRouteHandler)
  .openapi(deleteSecretsSecretsIdIndexRoute, deleteSecretsSecretsIdIndexRouteHandler)
  .openapi(getSecretsSecretsIdIndexRoute, getSecretsSecretsIdIndexRouteHandler)
  .openapi(patchSecretsSecretsIdIndexRoute, patchSecretsSecretsIdIndexRouteHandler)
  .openapi(putSecretsSecretsIdIndexRoute, putSecretsSecretsIdIndexRouteHandler)
  .openapi(getTenancyTenantGroupsIndexRoute, getTenancyTenantGroupsIndexRouteHandler)
  .openapi(postTenancyTenantGroupsIndexRoute, postTenancyTenantGroupsIndexRouteHandler)
  .openapi(deleteTenancyTenantGroupsIdIndexRoute, deleteTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(getTenancyTenantGroupsIdIndexRoute, getTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(patchTenancyTenantGroupsIdIndexRoute, patchTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(putTenancyTenantGroupsIdIndexRoute, putTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(getTenancyTenantsIndexRoute, getTenancyTenantsIndexRouteHandler)
  .openapi(postTenancyTenantsIndexRoute, postTenancyTenantsIndexRouteHandler)
  .openapi(deleteTenancyTenantsIdIndexRoute, deleteTenancyTenantsIdIndexRouteHandler)
  .openapi(getTenancyTenantsIdIndexRoute, getTenancyTenantsIdIndexRouteHandler)
  .openapi(patchTenancyTenantsIdIndexRoute, patchTenancyTenantsIdIndexRouteHandler)
  .openapi(putTenancyTenantsIdIndexRoute, putTenancyTenantsIdIndexRouteHandler)
  .openapi(
    getVirtualizationClusterGroupsIndexRoute,
    getVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    postVirtualizationClusterGroupsIndexRoute,
    postVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    deleteVirtualizationClusterGroupsIdIndexRoute,
    deleteVirtualizationClusterGroupsIdIndexRouteHandler,
  )
  .openapi(
    getVirtualizationClusterGroupsIdIndexRoute,
    getVirtualizationClusterGroupsIdIndexRouteHandler,
  )
  .openapi(
    patchVirtualizationClusterGroupsIdIndexRoute,
    patchVirtualizationClusterGroupsIdIndexRouteHandler,
  )
  .openapi(
    putVirtualizationClusterGroupsIdIndexRoute,
    putVirtualizationClusterGroupsIdIndexRouteHandler,
  )
  .openapi(getVirtualizationClusterTypesIndexRoute, getVirtualizationClusterTypesIndexRouteHandler)
  .openapi(
    postVirtualizationClusterTypesIndexRoute,
    postVirtualizationClusterTypesIndexRouteHandler,
  )
  .openapi(
    deleteVirtualizationClusterTypesIdIndexRoute,
    deleteVirtualizationClusterTypesIdIndexRouteHandler,
  )
  .openapi(
    getVirtualizationClusterTypesIdIndexRoute,
    getVirtualizationClusterTypesIdIndexRouteHandler,
  )
  .openapi(
    patchVirtualizationClusterTypesIdIndexRoute,
    patchVirtualizationClusterTypesIdIndexRouteHandler,
  )
  .openapi(
    putVirtualizationClusterTypesIdIndexRoute,
    putVirtualizationClusterTypesIdIndexRouteHandler,
  )
  .openapi(getVirtualizationClustersIndexRoute, getVirtualizationClustersIndexRouteHandler)
  .openapi(postVirtualizationClustersIndexRoute, postVirtualizationClustersIndexRouteHandler)
  .openapi(
    deleteVirtualizationClustersIdIndexRoute,
    deleteVirtualizationClustersIdIndexRouteHandler,
  )
  .openapi(getVirtualizationClustersIdIndexRoute, getVirtualizationClustersIdIndexRouteHandler)
  .openapi(patchVirtualizationClustersIdIndexRoute, patchVirtualizationClustersIdIndexRouteHandler)
  .openapi(putVirtualizationClustersIdIndexRoute, putVirtualizationClustersIdIndexRouteHandler)
  .openapi(getVirtualizationInterfacesIndexRoute, getVirtualizationInterfacesIndexRouteHandler)
  .openapi(postVirtualizationInterfacesIndexRoute, postVirtualizationInterfacesIndexRouteHandler)
  .openapi(
    deleteVirtualizationInterfacesIdIndexRoute,
    deleteVirtualizationInterfacesIdIndexRouteHandler,
  )
  .openapi(getVirtualizationInterfacesIdIndexRoute, getVirtualizationInterfacesIdIndexRouteHandler)
  .openapi(
    patchVirtualizationInterfacesIdIndexRoute,
    patchVirtualizationInterfacesIdIndexRouteHandler,
  )
  .openapi(putVirtualizationInterfacesIdIndexRoute, putVirtualizationInterfacesIdIndexRouteHandler)
  .openapi(
    getVirtualizationVirtualMachinesIndexRoute,
    getVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    postVirtualizationVirtualMachinesIndexRoute,
    postVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    deleteVirtualizationVirtualMachinesIdIndexRoute,
    deleteVirtualizationVirtualMachinesIdIndexRouteHandler,
  )
  .openapi(
    getVirtualizationVirtualMachinesIdIndexRoute,
    getVirtualizationVirtualMachinesIdIndexRouteHandler,
  )
  .openapi(
    patchVirtualizationVirtualMachinesIdIndexRoute,
    patchVirtualizationVirtualMachinesIdIndexRouteHandler,
  )
  .openapi(
    putVirtualizationVirtualMachinesIdIndexRoute,
    putVirtualizationVirtualMachinesIdIndexRouteHandler,
  )

export default app

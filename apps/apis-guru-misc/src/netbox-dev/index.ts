import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCircuitsCircuitsIdIndexRoute,
  deleteCircuitsCircuitsIndexRoute,
  deleteCircuitsCircuitTerminationsIdIndexRoute,
  deleteCircuitsCircuitTerminationsIndexRoute,
  deleteCircuitsCircuitTypesIdIndexRoute,
  deleteCircuitsCircuitTypesIndexRoute,
  deleteCircuitsProviderNetworksIdIndexRoute,
  deleteCircuitsProviderNetworksIndexRoute,
  deleteCircuitsProvidersIdIndexRoute,
  deleteCircuitsProvidersIndexRoute,
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
  deleteExtrasConfigContextsIdIndexRoute,
  deleteExtrasConfigContextsIndexRoute,
  deleteExtrasCustomFieldsIdIndexRoute,
  deleteExtrasCustomFieldsIndexRoute,
  deleteExtrasCustomLinksIdIndexRoute,
  deleteExtrasCustomLinksIndexRoute,
  deleteExtrasExportTemplatesIdIndexRoute,
  deleteExtrasExportTemplatesIndexRoute,
  deleteExtrasImageAttachmentsIdIndexRoute,
  deleteExtrasImageAttachmentsIndexRoute,
  deleteExtrasJournalEntriesIdIndexRoute,
  deleteExtrasJournalEntriesIndexRoute,
  deleteExtrasSavedFiltersIdIndexRoute,
  deleteExtrasSavedFiltersIndexRoute,
  deleteExtrasTagsIdIndexRoute,
  deleteExtrasTagsIndexRoute,
  deleteExtrasWebhooksIdIndexRoute,
  deleteExtrasWebhooksIndexRoute,
  deleteIpamAggregatesIdIndexRoute,
  deleteIpamAggregatesIndexRoute,
  deleteIpamAsnsIdIndexRoute,
  deleteIpamAsnsIndexRoute,
  deleteIpamFhrpGroupAssignmentsIdIndexRoute,
  deleteIpamFhrpGroupAssignmentsIndexRoute,
  deleteIpamFhrpGroupsIdIndexRoute,
  deleteIpamFhrpGroupsIndexRoute,
  deleteIpamIpAddressesIdIndexRoute,
  deleteIpamIpAddressesIndexRoute,
  deleteIpamIpRangesIdIndexRoute,
  deleteIpamIpRangesIndexRoute,
  deleteIpamL2vpnsIdIndexRoute,
  deleteIpamL2vpnsIndexRoute,
  deleteIpamL2vpnTerminationsIdIndexRoute,
  deleteIpamL2vpnTerminationsIndexRoute,
  deleteIpamPrefixesIdIndexRoute,
  deleteIpamPrefixesIndexRoute,
  deleteIpamRirsIdIndexRoute,
  deleteIpamRirsIndexRoute,
  deleteIpamRolesIdIndexRoute,
  deleteIpamRolesIndexRoute,
  deleteIpamRouteTargetsIdIndexRoute,
  deleteIpamRouteTargetsIndexRoute,
  deleteIpamServicesIdIndexRoute,
  deleteIpamServicesIndexRoute,
  deleteIpamServiceTemplatesIdIndexRoute,
  deleteIpamServiceTemplatesIndexRoute,
  deleteIpamVlanGroupsIdIndexRoute,
  deleteIpamVlanGroupsIndexRoute,
  deleteIpamVlansIdIndexRoute,
  deleteIpamVlansIndexRoute,
  deleteIpamVrfsIdIndexRoute,
  deleteIpamVrfsIndexRoute,
  deleteTenancyContactAssignmentsIdIndexRoute,
  deleteTenancyContactAssignmentsIndexRoute,
  deleteTenancyContactGroupsIdIndexRoute,
  deleteTenancyContactGroupsIndexRoute,
  deleteTenancyContactRolesIdIndexRoute,
  deleteTenancyContactRolesIndexRoute,
  deleteTenancyContactsIdIndexRoute,
  deleteTenancyContactsIndexRoute,
  deleteTenancyTenantGroupsIdIndexRoute,
  deleteTenancyTenantGroupsIndexRoute,
  deleteTenancyTenantsIdIndexRoute,
  deleteTenancyTenantsIndexRoute,
  deleteUsersGroupsIdIndexRoute,
  deleteUsersGroupsIndexRoute,
  deleteUsersPermissionsIdIndexRoute,
  deleteUsersPermissionsIndexRoute,
  deleteUsersTokensIdIndexRoute,
  deleteUsersTokensIndexRoute,
  deleteUsersUsersIdIndexRoute,
  deleteUsersUsersIndexRoute,
  deleteVirtualizationClusterGroupsIdIndexRoute,
  deleteVirtualizationClusterGroupsIndexRoute,
  deleteVirtualizationClustersIdIndexRoute,
  deleteVirtualizationClustersIndexRoute,
  deleteVirtualizationClusterTypesIdIndexRoute,
  deleteVirtualizationClusterTypesIndexRoute,
  deleteVirtualizationInterfacesIdIndexRoute,
  deleteVirtualizationInterfacesIndexRoute,
  deleteVirtualizationVirtualMachinesIdIndexRoute,
  deleteVirtualizationVirtualMachinesIndexRoute,
  deleteWirelessWirelessLanGroupsIdIndexRoute,
  deleteWirelessWirelessLanGroupsIndexRoute,
  deleteWirelessWirelessLansIdIndexRoute,
  deleteWirelessWirelessLansIndexRoute,
  deleteWirelessWirelessLinksIdIndexRoute,
  deleteWirelessWirelessLinksIndexRoute,
  getCircuitsCircuitsIdIndexRoute,
  getCircuitsCircuitsIndexRoute,
  getCircuitsCircuitTerminationsIdIndexRoute,
  getCircuitsCircuitTerminationsIdPathsIndexRoute,
  getCircuitsCircuitTerminationsIndexRoute,
  getCircuitsCircuitTypesIdIndexRoute,
  getCircuitsCircuitTypesIndexRoute,
  getCircuitsProviderNetworksIdIndexRoute,
  getCircuitsProviderNetworksIndexRoute,
  getCircuitsProvidersIdIndexRoute,
  getCircuitsProvidersIndexRoute,
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
  getExtrasConfigContextsIdIndexRoute,
  getExtrasConfigContextsIndexRoute,
  getExtrasContentTypesIdIndexRoute,
  getExtrasContentTypesIndexRoute,
  getExtrasCustomFieldsIdIndexRoute,
  getExtrasCustomFieldsIndexRoute,
  getExtrasCustomLinksIdIndexRoute,
  getExtrasCustomLinksIndexRoute,
  getExtrasExportTemplatesIdIndexRoute,
  getExtrasExportTemplatesIndexRoute,
  getExtrasImageAttachmentsIdIndexRoute,
  getExtrasImageAttachmentsIndexRoute,
  getExtrasJobResultsIdIndexRoute,
  getExtrasJobResultsIndexRoute,
  getExtrasJournalEntriesIdIndexRoute,
  getExtrasJournalEntriesIndexRoute,
  getExtrasObjectChangesIdIndexRoute,
  getExtrasObjectChangesIndexRoute,
  getExtrasReportsIdIndexRoute,
  getExtrasReportsIndexRoute,
  getExtrasSavedFiltersIdIndexRoute,
  getExtrasSavedFiltersIndexRoute,
  getExtrasScriptsIdIndexRoute,
  getExtrasScriptsIndexRoute,
  getExtrasTagsIdIndexRoute,
  getExtrasTagsIndexRoute,
  getExtrasWebhooksIdIndexRoute,
  getExtrasWebhooksIndexRoute,
  getIpamAggregatesIdIndexRoute,
  getIpamAggregatesIndexRoute,
  getIpamAsnsIdIndexRoute,
  getIpamAsnsIndexRoute,
  getIpamFhrpGroupAssignmentsIdIndexRoute,
  getIpamFhrpGroupAssignmentsIndexRoute,
  getIpamFhrpGroupsIdIndexRoute,
  getIpamFhrpGroupsIndexRoute,
  getIpamIpAddressesIdIndexRoute,
  getIpamIpAddressesIndexRoute,
  getIpamIpRangesIdAvailableIpsIndexRoute,
  getIpamIpRangesIdIndexRoute,
  getIpamIpRangesIndexRoute,
  getIpamL2vpnsIdIndexRoute,
  getIpamL2vpnsIndexRoute,
  getIpamL2vpnTerminationsIdIndexRoute,
  getIpamL2vpnTerminationsIndexRoute,
  getIpamPrefixesIdAvailableIpsIndexRoute,
  getIpamPrefixesIdAvailablePrefixesIndexRoute,
  getIpamPrefixesIdIndexRoute,
  getIpamPrefixesIndexRoute,
  getIpamRirsIdIndexRoute,
  getIpamRirsIndexRoute,
  getIpamRolesIdIndexRoute,
  getIpamRolesIndexRoute,
  getIpamRouteTargetsIdIndexRoute,
  getIpamRouteTargetsIndexRoute,
  getIpamServicesIdIndexRoute,
  getIpamServicesIndexRoute,
  getIpamServiceTemplatesIdIndexRoute,
  getIpamServiceTemplatesIndexRoute,
  getIpamVlanGroupsIdAvailableVlansIndexRoute,
  getIpamVlanGroupsIdIndexRoute,
  getIpamVlanGroupsIndexRoute,
  getIpamVlansIdIndexRoute,
  getIpamVlansIndexRoute,
  getIpamVrfsIdIndexRoute,
  getIpamVrfsIndexRoute,
  getStatusIndexRoute,
  getTenancyContactAssignmentsIdIndexRoute,
  getTenancyContactAssignmentsIndexRoute,
  getTenancyContactGroupsIdIndexRoute,
  getTenancyContactGroupsIndexRoute,
  getTenancyContactRolesIdIndexRoute,
  getTenancyContactRolesIndexRoute,
  getTenancyContactsIdIndexRoute,
  getTenancyContactsIndexRoute,
  getTenancyTenantGroupsIdIndexRoute,
  getTenancyTenantGroupsIndexRoute,
  getTenancyTenantsIdIndexRoute,
  getTenancyTenantsIndexRoute,
  getUsersConfigIndexRoute,
  getUsersGroupsIdIndexRoute,
  getUsersGroupsIndexRoute,
  getUsersPermissionsIdIndexRoute,
  getUsersPermissionsIndexRoute,
  getUsersTokensIdIndexRoute,
  getUsersTokensIndexRoute,
  getUsersUsersIdIndexRoute,
  getUsersUsersIndexRoute,
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
  getWirelessWirelessLanGroupsIdIndexRoute,
  getWirelessWirelessLanGroupsIndexRoute,
  getWirelessWirelessLansIdIndexRoute,
  getWirelessWirelessLansIndexRoute,
  getWirelessWirelessLinksIdIndexRoute,
  getWirelessWirelessLinksIndexRoute,
  patchCircuitsCircuitsIdIndexRoute,
  patchCircuitsCircuitsIndexRoute,
  patchCircuitsCircuitTerminationsIdIndexRoute,
  patchCircuitsCircuitTerminationsIndexRoute,
  patchCircuitsCircuitTypesIdIndexRoute,
  patchCircuitsCircuitTypesIndexRoute,
  patchCircuitsProviderNetworksIdIndexRoute,
  patchCircuitsProviderNetworksIndexRoute,
  patchCircuitsProvidersIdIndexRoute,
  patchCircuitsProvidersIndexRoute,
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
  patchExtrasConfigContextsIdIndexRoute,
  patchExtrasConfigContextsIndexRoute,
  patchExtrasCustomFieldsIdIndexRoute,
  patchExtrasCustomFieldsIndexRoute,
  patchExtrasCustomLinksIdIndexRoute,
  patchExtrasCustomLinksIndexRoute,
  patchExtrasExportTemplatesIdIndexRoute,
  patchExtrasExportTemplatesIndexRoute,
  patchExtrasImageAttachmentsIdIndexRoute,
  patchExtrasImageAttachmentsIndexRoute,
  patchExtrasJournalEntriesIdIndexRoute,
  patchExtrasJournalEntriesIndexRoute,
  patchExtrasSavedFiltersIdIndexRoute,
  patchExtrasSavedFiltersIndexRoute,
  patchExtrasTagsIdIndexRoute,
  patchExtrasTagsIndexRoute,
  patchExtrasWebhooksIdIndexRoute,
  patchExtrasWebhooksIndexRoute,
  patchIpamAggregatesIdIndexRoute,
  patchIpamAggregatesIndexRoute,
  patchIpamAsnsIdIndexRoute,
  patchIpamAsnsIndexRoute,
  patchIpamFhrpGroupAssignmentsIdIndexRoute,
  patchIpamFhrpGroupAssignmentsIndexRoute,
  patchIpamFhrpGroupsIdIndexRoute,
  patchIpamFhrpGroupsIndexRoute,
  patchIpamIpAddressesIdIndexRoute,
  patchIpamIpAddressesIndexRoute,
  patchIpamIpRangesIdIndexRoute,
  patchIpamIpRangesIndexRoute,
  patchIpamL2vpnsIdIndexRoute,
  patchIpamL2vpnsIndexRoute,
  patchIpamL2vpnTerminationsIdIndexRoute,
  patchIpamL2vpnTerminationsIndexRoute,
  patchIpamPrefixesIdIndexRoute,
  patchIpamPrefixesIndexRoute,
  patchIpamRirsIdIndexRoute,
  patchIpamRirsIndexRoute,
  patchIpamRolesIdIndexRoute,
  patchIpamRolesIndexRoute,
  patchIpamRouteTargetsIdIndexRoute,
  patchIpamRouteTargetsIndexRoute,
  patchIpamServicesIdIndexRoute,
  patchIpamServicesIndexRoute,
  patchIpamServiceTemplatesIdIndexRoute,
  patchIpamServiceTemplatesIndexRoute,
  patchIpamVlanGroupsIdIndexRoute,
  patchIpamVlanGroupsIndexRoute,
  patchIpamVlansIdIndexRoute,
  patchIpamVlansIndexRoute,
  patchIpamVrfsIdIndexRoute,
  patchIpamVrfsIndexRoute,
  patchTenancyContactAssignmentsIdIndexRoute,
  patchTenancyContactAssignmentsIndexRoute,
  patchTenancyContactGroupsIdIndexRoute,
  patchTenancyContactGroupsIndexRoute,
  patchTenancyContactRolesIdIndexRoute,
  patchTenancyContactRolesIndexRoute,
  patchTenancyContactsIdIndexRoute,
  patchTenancyContactsIndexRoute,
  patchTenancyTenantGroupsIdIndexRoute,
  patchTenancyTenantGroupsIndexRoute,
  patchTenancyTenantsIdIndexRoute,
  patchTenancyTenantsIndexRoute,
  patchUsersGroupsIdIndexRoute,
  patchUsersGroupsIndexRoute,
  patchUsersPermissionsIdIndexRoute,
  patchUsersPermissionsIndexRoute,
  patchUsersTokensIdIndexRoute,
  patchUsersTokensIndexRoute,
  patchUsersUsersIdIndexRoute,
  patchUsersUsersIndexRoute,
  patchVirtualizationClusterGroupsIdIndexRoute,
  patchVirtualizationClusterGroupsIndexRoute,
  patchVirtualizationClustersIdIndexRoute,
  patchVirtualizationClustersIndexRoute,
  patchVirtualizationClusterTypesIdIndexRoute,
  patchVirtualizationClusterTypesIndexRoute,
  patchVirtualizationInterfacesIdIndexRoute,
  patchVirtualizationInterfacesIndexRoute,
  patchVirtualizationVirtualMachinesIdIndexRoute,
  patchVirtualizationVirtualMachinesIndexRoute,
  patchWirelessWirelessLanGroupsIdIndexRoute,
  patchWirelessWirelessLanGroupsIndexRoute,
  patchWirelessWirelessLansIdIndexRoute,
  patchWirelessWirelessLansIndexRoute,
  patchWirelessWirelessLinksIdIndexRoute,
  patchWirelessWirelessLinksIndexRoute,
  postCircuitsCircuitsIndexRoute,
  postCircuitsCircuitTerminationsIndexRoute,
  postCircuitsCircuitTypesIndexRoute,
  postCircuitsProviderNetworksIndexRoute,
  postCircuitsProvidersIndexRoute,
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
  postExtrasConfigContextsIndexRoute,
  postExtrasCustomFieldsIndexRoute,
  postExtrasCustomLinksIndexRoute,
  postExtrasExportTemplatesIndexRoute,
  postExtrasImageAttachmentsIndexRoute,
  postExtrasJournalEntriesIndexRoute,
  postExtrasReportsIdRunIndexRoute,
  postExtrasSavedFiltersIndexRoute,
  postExtrasTagsIndexRoute,
  postExtrasWebhooksIndexRoute,
  postIpamAggregatesIndexRoute,
  postIpamAsnsIndexRoute,
  postIpamFhrpGroupAssignmentsIndexRoute,
  postIpamFhrpGroupsIndexRoute,
  postIpamIpAddressesIndexRoute,
  postIpamIpRangesIdAvailableIpsIndexRoute,
  postIpamIpRangesIndexRoute,
  postIpamL2vpnsIndexRoute,
  postIpamL2vpnTerminationsIndexRoute,
  postIpamPrefixesIdAvailableIpsIndexRoute,
  postIpamPrefixesIdAvailablePrefixesIndexRoute,
  postIpamPrefixesIndexRoute,
  postIpamRirsIndexRoute,
  postIpamRolesIndexRoute,
  postIpamRouteTargetsIndexRoute,
  postIpamServicesIndexRoute,
  postIpamServiceTemplatesIndexRoute,
  postIpamVlanGroupsIdAvailableVlansIndexRoute,
  postIpamVlanGroupsIndexRoute,
  postIpamVlansIndexRoute,
  postIpamVrfsIndexRoute,
  postTenancyContactAssignmentsIndexRoute,
  postTenancyContactGroupsIndexRoute,
  postTenancyContactRolesIndexRoute,
  postTenancyContactsIndexRoute,
  postTenancyTenantGroupsIndexRoute,
  postTenancyTenantsIndexRoute,
  postUsersGroupsIndexRoute,
  postUsersPermissionsIndexRoute,
  postUsersTokensIndexRoute,
  postUsersTokensProvisionIndexRoute,
  postUsersUsersIndexRoute,
  postVirtualizationClusterGroupsIndexRoute,
  postVirtualizationClustersIndexRoute,
  postVirtualizationClusterTypesIndexRoute,
  postVirtualizationInterfacesIndexRoute,
  postVirtualizationVirtualMachinesIndexRoute,
  postWirelessWirelessLanGroupsIndexRoute,
  postWirelessWirelessLansIndexRoute,
  postWirelessWirelessLinksIndexRoute,
  putCircuitsCircuitsIdIndexRoute,
  putCircuitsCircuitsIndexRoute,
  putCircuitsCircuitTerminationsIdIndexRoute,
  putCircuitsCircuitTerminationsIndexRoute,
  putCircuitsCircuitTypesIdIndexRoute,
  putCircuitsCircuitTypesIndexRoute,
  putCircuitsProviderNetworksIdIndexRoute,
  putCircuitsProviderNetworksIndexRoute,
  putCircuitsProvidersIdIndexRoute,
  putCircuitsProvidersIndexRoute,
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
  putExtrasConfigContextsIdIndexRoute,
  putExtrasConfigContextsIndexRoute,
  putExtrasCustomFieldsIdIndexRoute,
  putExtrasCustomFieldsIndexRoute,
  putExtrasCustomLinksIdIndexRoute,
  putExtrasCustomLinksIndexRoute,
  putExtrasExportTemplatesIdIndexRoute,
  putExtrasExportTemplatesIndexRoute,
  putExtrasImageAttachmentsIdIndexRoute,
  putExtrasImageAttachmentsIndexRoute,
  putExtrasJournalEntriesIdIndexRoute,
  putExtrasJournalEntriesIndexRoute,
  putExtrasSavedFiltersIdIndexRoute,
  putExtrasSavedFiltersIndexRoute,
  putExtrasTagsIdIndexRoute,
  putExtrasTagsIndexRoute,
  putExtrasWebhooksIdIndexRoute,
  putExtrasWebhooksIndexRoute,
  putIpamAggregatesIdIndexRoute,
  putIpamAggregatesIndexRoute,
  putIpamAsnsIdIndexRoute,
  putIpamAsnsIndexRoute,
  putIpamFhrpGroupAssignmentsIdIndexRoute,
  putIpamFhrpGroupAssignmentsIndexRoute,
  putIpamFhrpGroupsIdIndexRoute,
  putIpamFhrpGroupsIndexRoute,
  putIpamIpAddressesIdIndexRoute,
  putIpamIpAddressesIndexRoute,
  putIpamIpRangesIdIndexRoute,
  putIpamIpRangesIndexRoute,
  putIpamL2vpnsIdIndexRoute,
  putIpamL2vpnsIndexRoute,
  putIpamL2vpnTerminationsIdIndexRoute,
  putIpamL2vpnTerminationsIndexRoute,
  putIpamPrefixesIdIndexRoute,
  putIpamPrefixesIndexRoute,
  putIpamRirsIdIndexRoute,
  putIpamRirsIndexRoute,
  putIpamRolesIdIndexRoute,
  putIpamRolesIndexRoute,
  putIpamRouteTargetsIdIndexRoute,
  putIpamRouteTargetsIndexRoute,
  putIpamServicesIdIndexRoute,
  putIpamServicesIndexRoute,
  putIpamServiceTemplatesIdIndexRoute,
  putIpamServiceTemplatesIndexRoute,
  putIpamVlanGroupsIdIndexRoute,
  putIpamVlanGroupsIndexRoute,
  putIpamVlansIdIndexRoute,
  putIpamVlansIndexRoute,
  putIpamVrfsIdIndexRoute,
  putIpamVrfsIndexRoute,
  putTenancyContactAssignmentsIdIndexRoute,
  putTenancyContactAssignmentsIndexRoute,
  putTenancyContactGroupsIdIndexRoute,
  putTenancyContactGroupsIndexRoute,
  putTenancyContactRolesIdIndexRoute,
  putTenancyContactRolesIndexRoute,
  putTenancyContactsIdIndexRoute,
  putTenancyContactsIndexRoute,
  putTenancyTenantGroupsIdIndexRoute,
  putTenancyTenantGroupsIndexRoute,
  putTenancyTenantsIdIndexRoute,
  putTenancyTenantsIndexRoute,
  putUsersGroupsIdIndexRoute,
  putUsersGroupsIndexRoute,
  putUsersPermissionsIdIndexRoute,
  putUsersPermissionsIndexRoute,
  putUsersTokensIdIndexRoute,
  putUsersTokensIndexRoute,
  putUsersUsersIdIndexRoute,
  putUsersUsersIndexRoute,
  putVirtualizationClusterGroupsIdIndexRoute,
  putVirtualizationClusterGroupsIndexRoute,
  putVirtualizationClustersIdIndexRoute,
  putVirtualizationClustersIndexRoute,
  putVirtualizationClusterTypesIdIndexRoute,
  putVirtualizationClusterTypesIndexRoute,
  putVirtualizationInterfacesIdIndexRoute,
  putVirtualizationInterfacesIndexRoute,
  putVirtualizationVirtualMachinesIdIndexRoute,
  putVirtualizationVirtualMachinesIndexRoute,
  putWirelessWirelessLanGroupsIdIndexRoute,
  putWirelessWirelessLanGroupsIndexRoute,
  putWirelessWirelessLansIdIndexRoute,
  putWirelessWirelessLansIndexRoute,
  putWirelessWirelessLinksIdIndexRoute,
  putWirelessWirelessLinksIndexRoute,
} from './routes'
import {
  deleteCircuitsCircuitsIdIndexRouteHandler,
  deleteCircuitsCircuitsIndexRouteHandler,
  deleteCircuitsCircuitTerminationsIdIndexRouteHandler,
  deleteCircuitsCircuitTerminationsIndexRouteHandler,
  deleteCircuitsCircuitTypesIdIndexRouteHandler,
  deleteCircuitsCircuitTypesIndexRouteHandler,
  deleteCircuitsProviderNetworksIdIndexRouteHandler,
  deleteCircuitsProviderNetworksIndexRouteHandler,
  deleteCircuitsProvidersIdIndexRouteHandler,
  deleteCircuitsProvidersIndexRouteHandler,
  deleteDcimCablesIdIndexRouteHandler,
  deleteDcimCablesIndexRouteHandler,
  deleteDcimCableTerminationsIdIndexRouteHandler,
  deleteDcimCableTerminationsIndexRouteHandler,
  deleteDcimConsolePortsIdIndexRouteHandler,
  deleteDcimConsolePortsIndexRouteHandler,
  deleteDcimConsolePortTemplatesIdIndexRouteHandler,
  deleteDcimConsolePortTemplatesIndexRouteHandler,
  deleteDcimConsoleServerPortsIdIndexRouteHandler,
  deleteDcimConsoleServerPortsIndexRouteHandler,
  deleteDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  deleteDcimConsoleServerPortTemplatesIndexRouteHandler,
  deleteDcimDeviceBaysIdIndexRouteHandler,
  deleteDcimDeviceBaysIndexRouteHandler,
  deleteDcimDeviceBayTemplatesIdIndexRouteHandler,
  deleteDcimDeviceBayTemplatesIndexRouteHandler,
  deleteDcimDeviceRolesIdIndexRouteHandler,
  deleteDcimDeviceRolesIndexRouteHandler,
  deleteDcimDevicesIdIndexRouteHandler,
  deleteDcimDevicesIndexRouteHandler,
  deleteDcimDeviceTypesIdIndexRouteHandler,
  deleteDcimDeviceTypesIndexRouteHandler,
  deleteDcimFrontPortsIdIndexRouteHandler,
  deleteDcimFrontPortsIndexRouteHandler,
  deleteDcimFrontPortTemplatesIdIndexRouteHandler,
  deleteDcimFrontPortTemplatesIndexRouteHandler,
  deleteDcimInterfacesIdIndexRouteHandler,
  deleteDcimInterfacesIndexRouteHandler,
  deleteDcimInterfaceTemplatesIdIndexRouteHandler,
  deleteDcimInterfaceTemplatesIndexRouteHandler,
  deleteDcimInventoryItemRolesIdIndexRouteHandler,
  deleteDcimInventoryItemRolesIndexRouteHandler,
  deleteDcimInventoryItemsIdIndexRouteHandler,
  deleteDcimInventoryItemsIndexRouteHandler,
  deleteDcimInventoryItemTemplatesIdIndexRouteHandler,
  deleteDcimInventoryItemTemplatesIndexRouteHandler,
  deleteDcimLocationsIdIndexRouteHandler,
  deleteDcimLocationsIndexRouteHandler,
  deleteDcimManufacturersIdIndexRouteHandler,
  deleteDcimManufacturersIndexRouteHandler,
  deleteDcimModuleBaysIdIndexRouteHandler,
  deleteDcimModuleBaysIndexRouteHandler,
  deleteDcimModuleBayTemplatesIdIndexRouteHandler,
  deleteDcimModuleBayTemplatesIndexRouteHandler,
  deleteDcimModulesIdIndexRouteHandler,
  deleteDcimModulesIndexRouteHandler,
  deleteDcimModuleTypesIdIndexRouteHandler,
  deleteDcimModuleTypesIndexRouteHandler,
  deleteDcimPlatformsIdIndexRouteHandler,
  deleteDcimPlatformsIndexRouteHandler,
  deleteDcimPowerFeedsIdIndexRouteHandler,
  deleteDcimPowerFeedsIndexRouteHandler,
  deleteDcimPowerOutletsIdIndexRouteHandler,
  deleteDcimPowerOutletsIndexRouteHandler,
  deleteDcimPowerOutletTemplatesIdIndexRouteHandler,
  deleteDcimPowerOutletTemplatesIndexRouteHandler,
  deleteDcimPowerPanelsIdIndexRouteHandler,
  deleteDcimPowerPanelsIndexRouteHandler,
  deleteDcimPowerPortsIdIndexRouteHandler,
  deleteDcimPowerPortsIndexRouteHandler,
  deleteDcimPowerPortTemplatesIdIndexRouteHandler,
  deleteDcimPowerPortTemplatesIndexRouteHandler,
  deleteDcimRackReservationsIdIndexRouteHandler,
  deleteDcimRackReservationsIndexRouteHandler,
  deleteDcimRackRolesIdIndexRouteHandler,
  deleteDcimRackRolesIndexRouteHandler,
  deleteDcimRacksIdIndexRouteHandler,
  deleteDcimRacksIndexRouteHandler,
  deleteDcimRearPortsIdIndexRouteHandler,
  deleteDcimRearPortsIndexRouteHandler,
  deleteDcimRearPortTemplatesIdIndexRouteHandler,
  deleteDcimRearPortTemplatesIndexRouteHandler,
  deleteDcimRegionsIdIndexRouteHandler,
  deleteDcimRegionsIndexRouteHandler,
  deleteDcimSiteGroupsIdIndexRouteHandler,
  deleteDcimSiteGroupsIndexRouteHandler,
  deleteDcimSitesIdIndexRouteHandler,
  deleteDcimSitesIndexRouteHandler,
  deleteDcimVirtualChassisIdIndexRouteHandler,
  deleteDcimVirtualChassisIndexRouteHandler,
  deleteDcimVirtualDeviceContextsIdIndexRouteHandler,
  deleteDcimVirtualDeviceContextsIndexRouteHandler,
  deleteExtrasConfigContextsIdIndexRouteHandler,
  deleteExtrasConfigContextsIndexRouteHandler,
  deleteExtrasCustomFieldsIdIndexRouteHandler,
  deleteExtrasCustomFieldsIndexRouteHandler,
  deleteExtrasCustomLinksIdIndexRouteHandler,
  deleteExtrasCustomLinksIndexRouteHandler,
  deleteExtrasExportTemplatesIdIndexRouteHandler,
  deleteExtrasExportTemplatesIndexRouteHandler,
  deleteExtrasImageAttachmentsIdIndexRouteHandler,
  deleteExtrasImageAttachmentsIndexRouteHandler,
  deleteExtrasJournalEntriesIdIndexRouteHandler,
  deleteExtrasJournalEntriesIndexRouteHandler,
  deleteExtrasSavedFiltersIdIndexRouteHandler,
  deleteExtrasSavedFiltersIndexRouteHandler,
  deleteExtrasTagsIdIndexRouteHandler,
  deleteExtrasTagsIndexRouteHandler,
  deleteExtrasWebhooksIdIndexRouteHandler,
  deleteExtrasWebhooksIndexRouteHandler,
  deleteIpamAggregatesIdIndexRouteHandler,
  deleteIpamAggregatesIndexRouteHandler,
  deleteIpamAsnsIdIndexRouteHandler,
  deleteIpamAsnsIndexRouteHandler,
  deleteIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  deleteIpamFhrpGroupAssignmentsIndexRouteHandler,
  deleteIpamFhrpGroupsIdIndexRouteHandler,
  deleteIpamFhrpGroupsIndexRouteHandler,
  deleteIpamIpAddressesIdIndexRouteHandler,
  deleteIpamIpAddressesIndexRouteHandler,
  deleteIpamIpRangesIdIndexRouteHandler,
  deleteIpamIpRangesIndexRouteHandler,
  deleteIpamL2vpnsIdIndexRouteHandler,
  deleteIpamL2vpnsIndexRouteHandler,
  deleteIpamL2vpnTerminationsIdIndexRouteHandler,
  deleteIpamL2vpnTerminationsIndexRouteHandler,
  deleteIpamPrefixesIdIndexRouteHandler,
  deleteIpamPrefixesIndexRouteHandler,
  deleteIpamRirsIdIndexRouteHandler,
  deleteIpamRirsIndexRouteHandler,
  deleteIpamRolesIdIndexRouteHandler,
  deleteIpamRolesIndexRouteHandler,
  deleteIpamRouteTargetsIdIndexRouteHandler,
  deleteIpamRouteTargetsIndexRouteHandler,
  deleteIpamServicesIdIndexRouteHandler,
  deleteIpamServicesIndexRouteHandler,
  deleteIpamServiceTemplatesIdIndexRouteHandler,
  deleteIpamServiceTemplatesIndexRouteHandler,
  deleteIpamVlanGroupsIdIndexRouteHandler,
  deleteIpamVlanGroupsIndexRouteHandler,
  deleteIpamVlansIdIndexRouteHandler,
  deleteIpamVlansIndexRouteHandler,
  deleteIpamVrfsIdIndexRouteHandler,
  deleteIpamVrfsIndexRouteHandler,
  deleteTenancyContactAssignmentsIdIndexRouteHandler,
  deleteTenancyContactAssignmentsIndexRouteHandler,
  deleteTenancyContactGroupsIdIndexRouteHandler,
  deleteTenancyContactGroupsIndexRouteHandler,
  deleteTenancyContactRolesIdIndexRouteHandler,
  deleteTenancyContactRolesIndexRouteHandler,
  deleteTenancyContactsIdIndexRouteHandler,
  deleteTenancyContactsIndexRouteHandler,
  deleteTenancyTenantGroupsIdIndexRouteHandler,
  deleteTenancyTenantGroupsIndexRouteHandler,
  deleteTenancyTenantsIdIndexRouteHandler,
  deleteTenancyTenantsIndexRouteHandler,
  deleteUsersGroupsIdIndexRouteHandler,
  deleteUsersGroupsIndexRouteHandler,
  deleteUsersPermissionsIdIndexRouteHandler,
  deleteUsersPermissionsIndexRouteHandler,
  deleteUsersTokensIdIndexRouteHandler,
  deleteUsersTokensIndexRouteHandler,
  deleteUsersUsersIdIndexRouteHandler,
  deleteUsersUsersIndexRouteHandler,
  deleteVirtualizationClusterGroupsIdIndexRouteHandler,
  deleteVirtualizationClusterGroupsIndexRouteHandler,
  deleteVirtualizationClustersIdIndexRouteHandler,
  deleteVirtualizationClustersIndexRouteHandler,
  deleteVirtualizationClusterTypesIdIndexRouteHandler,
  deleteVirtualizationClusterTypesIndexRouteHandler,
  deleteVirtualizationInterfacesIdIndexRouteHandler,
  deleteVirtualizationInterfacesIndexRouteHandler,
  deleteVirtualizationVirtualMachinesIdIndexRouteHandler,
  deleteVirtualizationVirtualMachinesIndexRouteHandler,
  deleteWirelessWirelessLanGroupsIdIndexRouteHandler,
  deleteWirelessWirelessLanGroupsIndexRouteHandler,
  deleteWirelessWirelessLansIdIndexRouteHandler,
  deleteWirelessWirelessLansIndexRouteHandler,
  deleteWirelessWirelessLinksIdIndexRouteHandler,
  deleteWirelessWirelessLinksIndexRouteHandler,
  getCircuitsCircuitsIdIndexRouteHandler,
  getCircuitsCircuitsIndexRouteHandler,
  getCircuitsCircuitTerminationsIdIndexRouteHandler,
  getCircuitsCircuitTerminationsIdPathsIndexRouteHandler,
  getCircuitsCircuitTerminationsIndexRouteHandler,
  getCircuitsCircuitTypesIdIndexRouteHandler,
  getCircuitsCircuitTypesIndexRouteHandler,
  getCircuitsProviderNetworksIdIndexRouteHandler,
  getCircuitsProviderNetworksIndexRouteHandler,
  getCircuitsProvidersIdIndexRouteHandler,
  getCircuitsProvidersIndexRouteHandler,
  getDcimCablesIdIndexRouteHandler,
  getDcimCablesIndexRouteHandler,
  getDcimCableTerminationsIdIndexRouteHandler,
  getDcimCableTerminationsIndexRouteHandler,
  getDcimConnectedDeviceIndexRouteHandler,
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
  getDcimDevicesIdIndexRouteHandler,
  getDcimDevicesIdNapalmIndexRouteHandler,
  getDcimDevicesIndexRouteHandler,
  getDcimDeviceTypesIdIndexRouteHandler,
  getDcimDeviceTypesIndexRouteHandler,
  getDcimFrontPortsIdIndexRouteHandler,
  getDcimFrontPortsIdPathsIndexRouteHandler,
  getDcimFrontPortsIndexRouteHandler,
  getDcimFrontPortTemplatesIdIndexRouteHandler,
  getDcimFrontPortTemplatesIndexRouteHandler,
  getDcimInterfacesIdIndexRouteHandler,
  getDcimInterfacesIdTraceIndexRouteHandler,
  getDcimInterfacesIndexRouteHandler,
  getDcimInterfaceTemplatesIdIndexRouteHandler,
  getDcimInterfaceTemplatesIndexRouteHandler,
  getDcimInventoryItemRolesIdIndexRouteHandler,
  getDcimInventoryItemRolesIndexRouteHandler,
  getDcimInventoryItemsIdIndexRouteHandler,
  getDcimInventoryItemsIndexRouteHandler,
  getDcimInventoryItemTemplatesIdIndexRouteHandler,
  getDcimInventoryItemTemplatesIndexRouteHandler,
  getDcimLocationsIdIndexRouteHandler,
  getDcimLocationsIndexRouteHandler,
  getDcimManufacturersIdIndexRouteHandler,
  getDcimManufacturersIndexRouteHandler,
  getDcimModuleBaysIdIndexRouteHandler,
  getDcimModuleBaysIndexRouteHandler,
  getDcimModuleBayTemplatesIdIndexRouteHandler,
  getDcimModuleBayTemplatesIndexRouteHandler,
  getDcimModulesIdIndexRouteHandler,
  getDcimModulesIndexRouteHandler,
  getDcimModuleTypesIdIndexRouteHandler,
  getDcimModuleTypesIndexRouteHandler,
  getDcimPlatformsIdIndexRouteHandler,
  getDcimPlatformsIndexRouteHandler,
  getDcimPowerFeedsIdIndexRouteHandler,
  getDcimPowerFeedsIdTraceIndexRouteHandler,
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
  getDcimRackReservationsIdIndexRouteHandler,
  getDcimRackReservationsIndexRouteHandler,
  getDcimRackRolesIdIndexRouteHandler,
  getDcimRackRolesIndexRouteHandler,
  getDcimRacksIdElevationIndexRouteHandler,
  getDcimRacksIdIndexRouteHandler,
  getDcimRacksIndexRouteHandler,
  getDcimRearPortsIdIndexRouteHandler,
  getDcimRearPortsIdPathsIndexRouteHandler,
  getDcimRearPortsIndexRouteHandler,
  getDcimRearPortTemplatesIdIndexRouteHandler,
  getDcimRearPortTemplatesIndexRouteHandler,
  getDcimRegionsIdIndexRouteHandler,
  getDcimRegionsIndexRouteHandler,
  getDcimSiteGroupsIdIndexRouteHandler,
  getDcimSiteGroupsIndexRouteHandler,
  getDcimSitesIdIndexRouteHandler,
  getDcimSitesIndexRouteHandler,
  getDcimVirtualChassisIdIndexRouteHandler,
  getDcimVirtualChassisIndexRouteHandler,
  getDcimVirtualDeviceContextsIdIndexRouteHandler,
  getDcimVirtualDeviceContextsIndexRouteHandler,
  getExtrasConfigContextsIdIndexRouteHandler,
  getExtrasConfigContextsIndexRouteHandler,
  getExtrasContentTypesIdIndexRouteHandler,
  getExtrasContentTypesIndexRouteHandler,
  getExtrasCustomFieldsIdIndexRouteHandler,
  getExtrasCustomFieldsIndexRouteHandler,
  getExtrasCustomLinksIdIndexRouteHandler,
  getExtrasCustomLinksIndexRouteHandler,
  getExtrasExportTemplatesIdIndexRouteHandler,
  getExtrasExportTemplatesIndexRouteHandler,
  getExtrasImageAttachmentsIdIndexRouteHandler,
  getExtrasImageAttachmentsIndexRouteHandler,
  getExtrasJobResultsIdIndexRouteHandler,
  getExtrasJobResultsIndexRouteHandler,
  getExtrasJournalEntriesIdIndexRouteHandler,
  getExtrasJournalEntriesIndexRouteHandler,
  getExtrasObjectChangesIdIndexRouteHandler,
  getExtrasObjectChangesIndexRouteHandler,
  getExtrasReportsIdIndexRouteHandler,
  getExtrasReportsIndexRouteHandler,
  getExtrasSavedFiltersIdIndexRouteHandler,
  getExtrasSavedFiltersIndexRouteHandler,
  getExtrasScriptsIdIndexRouteHandler,
  getExtrasScriptsIndexRouteHandler,
  getExtrasTagsIdIndexRouteHandler,
  getExtrasTagsIndexRouteHandler,
  getExtrasWebhooksIdIndexRouteHandler,
  getExtrasWebhooksIndexRouteHandler,
  getIpamAggregatesIdIndexRouteHandler,
  getIpamAggregatesIndexRouteHandler,
  getIpamAsnsIdIndexRouteHandler,
  getIpamAsnsIndexRouteHandler,
  getIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  getIpamFhrpGroupAssignmentsIndexRouteHandler,
  getIpamFhrpGroupsIdIndexRouteHandler,
  getIpamFhrpGroupsIndexRouteHandler,
  getIpamIpAddressesIdIndexRouteHandler,
  getIpamIpAddressesIndexRouteHandler,
  getIpamIpRangesIdAvailableIpsIndexRouteHandler,
  getIpamIpRangesIdIndexRouteHandler,
  getIpamIpRangesIndexRouteHandler,
  getIpamL2vpnsIdIndexRouteHandler,
  getIpamL2vpnsIndexRouteHandler,
  getIpamL2vpnTerminationsIdIndexRouteHandler,
  getIpamL2vpnTerminationsIndexRouteHandler,
  getIpamPrefixesIdAvailableIpsIndexRouteHandler,
  getIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  getIpamPrefixesIdIndexRouteHandler,
  getIpamPrefixesIndexRouteHandler,
  getIpamRirsIdIndexRouteHandler,
  getIpamRirsIndexRouteHandler,
  getIpamRolesIdIndexRouteHandler,
  getIpamRolesIndexRouteHandler,
  getIpamRouteTargetsIdIndexRouteHandler,
  getIpamRouteTargetsIndexRouteHandler,
  getIpamServicesIdIndexRouteHandler,
  getIpamServicesIndexRouteHandler,
  getIpamServiceTemplatesIdIndexRouteHandler,
  getIpamServiceTemplatesIndexRouteHandler,
  getIpamVlanGroupsIdAvailableVlansIndexRouteHandler,
  getIpamVlanGroupsIdIndexRouteHandler,
  getIpamVlanGroupsIndexRouteHandler,
  getIpamVlansIdIndexRouteHandler,
  getIpamVlansIndexRouteHandler,
  getIpamVrfsIdIndexRouteHandler,
  getIpamVrfsIndexRouteHandler,
  getStatusIndexRouteHandler,
  getTenancyContactAssignmentsIdIndexRouteHandler,
  getTenancyContactAssignmentsIndexRouteHandler,
  getTenancyContactGroupsIdIndexRouteHandler,
  getTenancyContactGroupsIndexRouteHandler,
  getTenancyContactRolesIdIndexRouteHandler,
  getTenancyContactRolesIndexRouteHandler,
  getTenancyContactsIdIndexRouteHandler,
  getTenancyContactsIndexRouteHandler,
  getTenancyTenantGroupsIdIndexRouteHandler,
  getTenancyTenantGroupsIndexRouteHandler,
  getTenancyTenantsIdIndexRouteHandler,
  getTenancyTenantsIndexRouteHandler,
  getUsersConfigIndexRouteHandler,
  getUsersGroupsIdIndexRouteHandler,
  getUsersGroupsIndexRouteHandler,
  getUsersPermissionsIdIndexRouteHandler,
  getUsersPermissionsIndexRouteHandler,
  getUsersTokensIdIndexRouteHandler,
  getUsersTokensIndexRouteHandler,
  getUsersUsersIdIndexRouteHandler,
  getUsersUsersIndexRouteHandler,
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
  getWirelessWirelessLanGroupsIdIndexRouteHandler,
  getWirelessWirelessLanGroupsIndexRouteHandler,
  getWirelessWirelessLansIdIndexRouteHandler,
  getWirelessWirelessLansIndexRouteHandler,
  getWirelessWirelessLinksIdIndexRouteHandler,
  getWirelessWirelessLinksIndexRouteHandler,
  patchCircuitsCircuitsIdIndexRouteHandler,
  patchCircuitsCircuitsIndexRouteHandler,
  patchCircuitsCircuitTerminationsIdIndexRouteHandler,
  patchCircuitsCircuitTerminationsIndexRouteHandler,
  patchCircuitsCircuitTypesIdIndexRouteHandler,
  patchCircuitsCircuitTypesIndexRouteHandler,
  patchCircuitsProviderNetworksIdIndexRouteHandler,
  patchCircuitsProviderNetworksIndexRouteHandler,
  patchCircuitsProvidersIdIndexRouteHandler,
  patchCircuitsProvidersIndexRouteHandler,
  patchDcimCablesIdIndexRouteHandler,
  patchDcimCablesIndexRouteHandler,
  patchDcimCableTerminationsIdIndexRouteHandler,
  patchDcimCableTerminationsIndexRouteHandler,
  patchDcimConsolePortsIdIndexRouteHandler,
  patchDcimConsolePortsIndexRouteHandler,
  patchDcimConsolePortTemplatesIdIndexRouteHandler,
  patchDcimConsolePortTemplatesIndexRouteHandler,
  patchDcimConsoleServerPortsIdIndexRouteHandler,
  patchDcimConsoleServerPortsIndexRouteHandler,
  patchDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  patchDcimConsoleServerPortTemplatesIndexRouteHandler,
  patchDcimDeviceBaysIdIndexRouteHandler,
  patchDcimDeviceBaysIndexRouteHandler,
  patchDcimDeviceBayTemplatesIdIndexRouteHandler,
  patchDcimDeviceBayTemplatesIndexRouteHandler,
  patchDcimDeviceRolesIdIndexRouteHandler,
  patchDcimDeviceRolesIndexRouteHandler,
  patchDcimDevicesIdIndexRouteHandler,
  patchDcimDevicesIndexRouteHandler,
  patchDcimDeviceTypesIdIndexRouteHandler,
  patchDcimDeviceTypesIndexRouteHandler,
  patchDcimFrontPortsIdIndexRouteHandler,
  patchDcimFrontPortsIndexRouteHandler,
  patchDcimFrontPortTemplatesIdIndexRouteHandler,
  patchDcimFrontPortTemplatesIndexRouteHandler,
  patchDcimInterfacesIdIndexRouteHandler,
  patchDcimInterfacesIndexRouteHandler,
  patchDcimInterfaceTemplatesIdIndexRouteHandler,
  patchDcimInterfaceTemplatesIndexRouteHandler,
  patchDcimInventoryItemRolesIdIndexRouteHandler,
  patchDcimInventoryItemRolesIndexRouteHandler,
  patchDcimInventoryItemsIdIndexRouteHandler,
  patchDcimInventoryItemsIndexRouteHandler,
  patchDcimInventoryItemTemplatesIdIndexRouteHandler,
  patchDcimInventoryItemTemplatesIndexRouteHandler,
  patchDcimLocationsIdIndexRouteHandler,
  patchDcimLocationsIndexRouteHandler,
  patchDcimManufacturersIdIndexRouteHandler,
  patchDcimManufacturersIndexRouteHandler,
  patchDcimModuleBaysIdIndexRouteHandler,
  patchDcimModuleBaysIndexRouteHandler,
  patchDcimModuleBayTemplatesIdIndexRouteHandler,
  patchDcimModuleBayTemplatesIndexRouteHandler,
  patchDcimModulesIdIndexRouteHandler,
  patchDcimModulesIndexRouteHandler,
  patchDcimModuleTypesIdIndexRouteHandler,
  patchDcimModuleTypesIndexRouteHandler,
  patchDcimPlatformsIdIndexRouteHandler,
  patchDcimPlatformsIndexRouteHandler,
  patchDcimPowerFeedsIdIndexRouteHandler,
  patchDcimPowerFeedsIndexRouteHandler,
  patchDcimPowerOutletsIdIndexRouteHandler,
  patchDcimPowerOutletsIndexRouteHandler,
  patchDcimPowerOutletTemplatesIdIndexRouteHandler,
  patchDcimPowerOutletTemplatesIndexRouteHandler,
  patchDcimPowerPanelsIdIndexRouteHandler,
  patchDcimPowerPanelsIndexRouteHandler,
  patchDcimPowerPortsIdIndexRouteHandler,
  patchDcimPowerPortsIndexRouteHandler,
  patchDcimPowerPortTemplatesIdIndexRouteHandler,
  patchDcimPowerPortTemplatesIndexRouteHandler,
  patchDcimRackReservationsIdIndexRouteHandler,
  patchDcimRackReservationsIndexRouteHandler,
  patchDcimRackRolesIdIndexRouteHandler,
  patchDcimRackRolesIndexRouteHandler,
  patchDcimRacksIdIndexRouteHandler,
  patchDcimRacksIndexRouteHandler,
  patchDcimRearPortsIdIndexRouteHandler,
  patchDcimRearPortsIndexRouteHandler,
  patchDcimRearPortTemplatesIdIndexRouteHandler,
  patchDcimRearPortTemplatesIndexRouteHandler,
  patchDcimRegionsIdIndexRouteHandler,
  patchDcimRegionsIndexRouteHandler,
  patchDcimSiteGroupsIdIndexRouteHandler,
  patchDcimSiteGroupsIndexRouteHandler,
  patchDcimSitesIdIndexRouteHandler,
  patchDcimSitesIndexRouteHandler,
  patchDcimVirtualChassisIdIndexRouteHandler,
  patchDcimVirtualChassisIndexRouteHandler,
  patchDcimVirtualDeviceContextsIdIndexRouteHandler,
  patchDcimVirtualDeviceContextsIndexRouteHandler,
  patchExtrasConfigContextsIdIndexRouteHandler,
  patchExtrasConfigContextsIndexRouteHandler,
  patchExtrasCustomFieldsIdIndexRouteHandler,
  patchExtrasCustomFieldsIndexRouteHandler,
  patchExtrasCustomLinksIdIndexRouteHandler,
  patchExtrasCustomLinksIndexRouteHandler,
  patchExtrasExportTemplatesIdIndexRouteHandler,
  patchExtrasExportTemplatesIndexRouteHandler,
  patchExtrasImageAttachmentsIdIndexRouteHandler,
  patchExtrasImageAttachmentsIndexRouteHandler,
  patchExtrasJournalEntriesIdIndexRouteHandler,
  patchExtrasJournalEntriesIndexRouteHandler,
  patchExtrasSavedFiltersIdIndexRouteHandler,
  patchExtrasSavedFiltersIndexRouteHandler,
  patchExtrasTagsIdIndexRouteHandler,
  patchExtrasTagsIndexRouteHandler,
  patchExtrasWebhooksIdIndexRouteHandler,
  patchExtrasWebhooksIndexRouteHandler,
  patchIpamAggregatesIdIndexRouteHandler,
  patchIpamAggregatesIndexRouteHandler,
  patchIpamAsnsIdIndexRouteHandler,
  patchIpamAsnsIndexRouteHandler,
  patchIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  patchIpamFhrpGroupAssignmentsIndexRouteHandler,
  patchIpamFhrpGroupsIdIndexRouteHandler,
  patchIpamFhrpGroupsIndexRouteHandler,
  patchIpamIpAddressesIdIndexRouteHandler,
  patchIpamIpAddressesIndexRouteHandler,
  patchIpamIpRangesIdIndexRouteHandler,
  patchIpamIpRangesIndexRouteHandler,
  patchIpamL2vpnsIdIndexRouteHandler,
  patchIpamL2vpnsIndexRouteHandler,
  patchIpamL2vpnTerminationsIdIndexRouteHandler,
  patchIpamL2vpnTerminationsIndexRouteHandler,
  patchIpamPrefixesIdIndexRouteHandler,
  patchIpamPrefixesIndexRouteHandler,
  patchIpamRirsIdIndexRouteHandler,
  patchIpamRirsIndexRouteHandler,
  patchIpamRolesIdIndexRouteHandler,
  patchIpamRolesIndexRouteHandler,
  patchIpamRouteTargetsIdIndexRouteHandler,
  patchIpamRouteTargetsIndexRouteHandler,
  patchIpamServicesIdIndexRouteHandler,
  patchIpamServicesIndexRouteHandler,
  patchIpamServiceTemplatesIdIndexRouteHandler,
  patchIpamServiceTemplatesIndexRouteHandler,
  patchIpamVlanGroupsIdIndexRouteHandler,
  patchIpamVlanGroupsIndexRouteHandler,
  patchIpamVlansIdIndexRouteHandler,
  patchIpamVlansIndexRouteHandler,
  patchIpamVrfsIdIndexRouteHandler,
  patchIpamVrfsIndexRouteHandler,
  patchTenancyContactAssignmentsIdIndexRouteHandler,
  patchTenancyContactAssignmentsIndexRouteHandler,
  patchTenancyContactGroupsIdIndexRouteHandler,
  patchTenancyContactGroupsIndexRouteHandler,
  patchTenancyContactRolesIdIndexRouteHandler,
  patchTenancyContactRolesIndexRouteHandler,
  patchTenancyContactsIdIndexRouteHandler,
  patchTenancyContactsIndexRouteHandler,
  patchTenancyTenantGroupsIdIndexRouteHandler,
  patchTenancyTenantGroupsIndexRouteHandler,
  patchTenancyTenantsIdIndexRouteHandler,
  patchTenancyTenantsIndexRouteHandler,
  patchUsersGroupsIdIndexRouteHandler,
  patchUsersGroupsIndexRouteHandler,
  patchUsersPermissionsIdIndexRouteHandler,
  patchUsersPermissionsIndexRouteHandler,
  patchUsersTokensIdIndexRouteHandler,
  patchUsersTokensIndexRouteHandler,
  patchUsersUsersIdIndexRouteHandler,
  patchUsersUsersIndexRouteHandler,
  patchVirtualizationClusterGroupsIdIndexRouteHandler,
  patchVirtualizationClusterGroupsIndexRouteHandler,
  patchVirtualizationClustersIdIndexRouteHandler,
  patchVirtualizationClustersIndexRouteHandler,
  patchVirtualizationClusterTypesIdIndexRouteHandler,
  patchVirtualizationClusterTypesIndexRouteHandler,
  patchVirtualizationInterfacesIdIndexRouteHandler,
  patchVirtualizationInterfacesIndexRouteHandler,
  patchVirtualizationVirtualMachinesIdIndexRouteHandler,
  patchVirtualizationVirtualMachinesIndexRouteHandler,
  patchWirelessWirelessLanGroupsIdIndexRouteHandler,
  patchWirelessWirelessLanGroupsIndexRouteHandler,
  patchWirelessWirelessLansIdIndexRouteHandler,
  patchWirelessWirelessLansIndexRouteHandler,
  patchWirelessWirelessLinksIdIndexRouteHandler,
  patchWirelessWirelessLinksIndexRouteHandler,
  postCircuitsCircuitsIndexRouteHandler,
  postCircuitsCircuitTerminationsIndexRouteHandler,
  postCircuitsCircuitTypesIndexRouteHandler,
  postCircuitsProviderNetworksIndexRouteHandler,
  postCircuitsProvidersIndexRouteHandler,
  postDcimCablesIndexRouteHandler,
  postDcimCableTerminationsIndexRouteHandler,
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
  postDcimInventoryItemRolesIndexRouteHandler,
  postDcimInventoryItemsIndexRouteHandler,
  postDcimInventoryItemTemplatesIndexRouteHandler,
  postDcimLocationsIndexRouteHandler,
  postDcimManufacturersIndexRouteHandler,
  postDcimModuleBaysIndexRouteHandler,
  postDcimModuleBayTemplatesIndexRouteHandler,
  postDcimModulesIndexRouteHandler,
  postDcimModuleTypesIndexRouteHandler,
  postDcimPlatformsIndexRouteHandler,
  postDcimPowerFeedsIndexRouteHandler,
  postDcimPowerOutletsIndexRouteHandler,
  postDcimPowerOutletTemplatesIndexRouteHandler,
  postDcimPowerPanelsIndexRouteHandler,
  postDcimPowerPortsIndexRouteHandler,
  postDcimPowerPortTemplatesIndexRouteHandler,
  postDcimRackReservationsIndexRouteHandler,
  postDcimRackRolesIndexRouteHandler,
  postDcimRacksIndexRouteHandler,
  postDcimRearPortsIndexRouteHandler,
  postDcimRearPortTemplatesIndexRouteHandler,
  postDcimRegionsIndexRouteHandler,
  postDcimSiteGroupsIndexRouteHandler,
  postDcimSitesIndexRouteHandler,
  postDcimVirtualChassisIndexRouteHandler,
  postDcimVirtualDeviceContextsIndexRouteHandler,
  postExtrasConfigContextsIndexRouteHandler,
  postExtrasCustomFieldsIndexRouteHandler,
  postExtrasCustomLinksIndexRouteHandler,
  postExtrasExportTemplatesIndexRouteHandler,
  postExtrasImageAttachmentsIndexRouteHandler,
  postExtrasJournalEntriesIndexRouteHandler,
  postExtrasReportsIdRunIndexRouteHandler,
  postExtrasSavedFiltersIndexRouteHandler,
  postExtrasTagsIndexRouteHandler,
  postExtrasWebhooksIndexRouteHandler,
  postIpamAggregatesIndexRouteHandler,
  postIpamAsnsIndexRouteHandler,
  postIpamFhrpGroupAssignmentsIndexRouteHandler,
  postIpamFhrpGroupsIndexRouteHandler,
  postIpamIpAddressesIndexRouteHandler,
  postIpamIpRangesIdAvailableIpsIndexRouteHandler,
  postIpamIpRangesIndexRouteHandler,
  postIpamL2vpnsIndexRouteHandler,
  postIpamL2vpnTerminationsIndexRouteHandler,
  postIpamPrefixesIdAvailableIpsIndexRouteHandler,
  postIpamPrefixesIdAvailablePrefixesIndexRouteHandler,
  postIpamPrefixesIndexRouteHandler,
  postIpamRirsIndexRouteHandler,
  postIpamRolesIndexRouteHandler,
  postIpamRouteTargetsIndexRouteHandler,
  postIpamServicesIndexRouteHandler,
  postIpamServiceTemplatesIndexRouteHandler,
  postIpamVlanGroupsIdAvailableVlansIndexRouteHandler,
  postIpamVlanGroupsIndexRouteHandler,
  postIpamVlansIndexRouteHandler,
  postIpamVrfsIndexRouteHandler,
  postTenancyContactAssignmentsIndexRouteHandler,
  postTenancyContactGroupsIndexRouteHandler,
  postTenancyContactRolesIndexRouteHandler,
  postTenancyContactsIndexRouteHandler,
  postTenancyTenantGroupsIndexRouteHandler,
  postTenancyTenantsIndexRouteHandler,
  postUsersGroupsIndexRouteHandler,
  postUsersPermissionsIndexRouteHandler,
  postUsersTokensIndexRouteHandler,
  postUsersTokensProvisionIndexRouteHandler,
  postUsersUsersIndexRouteHandler,
  postVirtualizationClusterGroupsIndexRouteHandler,
  postVirtualizationClustersIndexRouteHandler,
  postVirtualizationClusterTypesIndexRouteHandler,
  postVirtualizationInterfacesIndexRouteHandler,
  postVirtualizationVirtualMachinesIndexRouteHandler,
  postWirelessWirelessLanGroupsIndexRouteHandler,
  postWirelessWirelessLansIndexRouteHandler,
  postWirelessWirelessLinksIndexRouteHandler,
  putCircuitsCircuitsIdIndexRouteHandler,
  putCircuitsCircuitsIndexRouteHandler,
  putCircuitsCircuitTerminationsIdIndexRouteHandler,
  putCircuitsCircuitTerminationsIndexRouteHandler,
  putCircuitsCircuitTypesIdIndexRouteHandler,
  putCircuitsCircuitTypesIndexRouteHandler,
  putCircuitsProviderNetworksIdIndexRouteHandler,
  putCircuitsProviderNetworksIndexRouteHandler,
  putCircuitsProvidersIdIndexRouteHandler,
  putCircuitsProvidersIndexRouteHandler,
  putDcimCablesIdIndexRouteHandler,
  putDcimCablesIndexRouteHandler,
  putDcimCableTerminationsIdIndexRouteHandler,
  putDcimCableTerminationsIndexRouteHandler,
  putDcimConsolePortsIdIndexRouteHandler,
  putDcimConsolePortsIndexRouteHandler,
  putDcimConsolePortTemplatesIdIndexRouteHandler,
  putDcimConsolePortTemplatesIndexRouteHandler,
  putDcimConsoleServerPortsIdIndexRouteHandler,
  putDcimConsoleServerPortsIndexRouteHandler,
  putDcimConsoleServerPortTemplatesIdIndexRouteHandler,
  putDcimConsoleServerPortTemplatesIndexRouteHandler,
  putDcimDeviceBaysIdIndexRouteHandler,
  putDcimDeviceBaysIndexRouteHandler,
  putDcimDeviceBayTemplatesIdIndexRouteHandler,
  putDcimDeviceBayTemplatesIndexRouteHandler,
  putDcimDeviceRolesIdIndexRouteHandler,
  putDcimDeviceRolesIndexRouteHandler,
  putDcimDevicesIdIndexRouteHandler,
  putDcimDevicesIndexRouteHandler,
  putDcimDeviceTypesIdIndexRouteHandler,
  putDcimDeviceTypesIndexRouteHandler,
  putDcimFrontPortsIdIndexRouteHandler,
  putDcimFrontPortsIndexRouteHandler,
  putDcimFrontPortTemplatesIdIndexRouteHandler,
  putDcimFrontPortTemplatesIndexRouteHandler,
  putDcimInterfacesIdIndexRouteHandler,
  putDcimInterfacesIndexRouteHandler,
  putDcimInterfaceTemplatesIdIndexRouteHandler,
  putDcimInterfaceTemplatesIndexRouteHandler,
  putDcimInventoryItemRolesIdIndexRouteHandler,
  putDcimInventoryItemRolesIndexRouteHandler,
  putDcimInventoryItemsIdIndexRouteHandler,
  putDcimInventoryItemsIndexRouteHandler,
  putDcimInventoryItemTemplatesIdIndexRouteHandler,
  putDcimInventoryItemTemplatesIndexRouteHandler,
  putDcimLocationsIdIndexRouteHandler,
  putDcimLocationsIndexRouteHandler,
  putDcimManufacturersIdIndexRouteHandler,
  putDcimManufacturersIndexRouteHandler,
  putDcimModuleBaysIdIndexRouteHandler,
  putDcimModuleBaysIndexRouteHandler,
  putDcimModuleBayTemplatesIdIndexRouteHandler,
  putDcimModuleBayTemplatesIndexRouteHandler,
  putDcimModulesIdIndexRouteHandler,
  putDcimModulesIndexRouteHandler,
  putDcimModuleTypesIdIndexRouteHandler,
  putDcimModuleTypesIndexRouteHandler,
  putDcimPlatformsIdIndexRouteHandler,
  putDcimPlatformsIndexRouteHandler,
  putDcimPowerFeedsIdIndexRouteHandler,
  putDcimPowerFeedsIndexRouteHandler,
  putDcimPowerOutletsIdIndexRouteHandler,
  putDcimPowerOutletsIndexRouteHandler,
  putDcimPowerOutletTemplatesIdIndexRouteHandler,
  putDcimPowerOutletTemplatesIndexRouteHandler,
  putDcimPowerPanelsIdIndexRouteHandler,
  putDcimPowerPanelsIndexRouteHandler,
  putDcimPowerPortsIdIndexRouteHandler,
  putDcimPowerPortsIndexRouteHandler,
  putDcimPowerPortTemplatesIdIndexRouteHandler,
  putDcimPowerPortTemplatesIndexRouteHandler,
  putDcimRackReservationsIdIndexRouteHandler,
  putDcimRackReservationsIndexRouteHandler,
  putDcimRackRolesIdIndexRouteHandler,
  putDcimRackRolesIndexRouteHandler,
  putDcimRacksIdIndexRouteHandler,
  putDcimRacksIndexRouteHandler,
  putDcimRearPortsIdIndexRouteHandler,
  putDcimRearPortsIndexRouteHandler,
  putDcimRearPortTemplatesIdIndexRouteHandler,
  putDcimRearPortTemplatesIndexRouteHandler,
  putDcimRegionsIdIndexRouteHandler,
  putDcimRegionsIndexRouteHandler,
  putDcimSiteGroupsIdIndexRouteHandler,
  putDcimSiteGroupsIndexRouteHandler,
  putDcimSitesIdIndexRouteHandler,
  putDcimSitesIndexRouteHandler,
  putDcimVirtualChassisIdIndexRouteHandler,
  putDcimVirtualChassisIndexRouteHandler,
  putDcimVirtualDeviceContextsIdIndexRouteHandler,
  putDcimVirtualDeviceContextsIndexRouteHandler,
  putExtrasConfigContextsIdIndexRouteHandler,
  putExtrasConfigContextsIndexRouteHandler,
  putExtrasCustomFieldsIdIndexRouteHandler,
  putExtrasCustomFieldsIndexRouteHandler,
  putExtrasCustomLinksIdIndexRouteHandler,
  putExtrasCustomLinksIndexRouteHandler,
  putExtrasExportTemplatesIdIndexRouteHandler,
  putExtrasExportTemplatesIndexRouteHandler,
  putExtrasImageAttachmentsIdIndexRouteHandler,
  putExtrasImageAttachmentsIndexRouteHandler,
  putExtrasJournalEntriesIdIndexRouteHandler,
  putExtrasJournalEntriesIndexRouteHandler,
  putExtrasSavedFiltersIdIndexRouteHandler,
  putExtrasSavedFiltersIndexRouteHandler,
  putExtrasTagsIdIndexRouteHandler,
  putExtrasTagsIndexRouteHandler,
  putExtrasWebhooksIdIndexRouteHandler,
  putExtrasWebhooksIndexRouteHandler,
  putIpamAggregatesIdIndexRouteHandler,
  putIpamAggregatesIndexRouteHandler,
  putIpamAsnsIdIndexRouteHandler,
  putIpamAsnsIndexRouteHandler,
  putIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  putIpamFhrpGroupAssignmentsIndexRouteHandler,
  putIpamFhrpGroupsIdIndexRouteHandler,
  putIpamFhrpGroupsIndexRouteHandler,
  putIpamIpAddressesIdIndexRouteHandler,
  putIpamIpAddressesIndexRouteHandler,
  putIpamIpRangesIdIndexRouteHandler,
  putIpamIpRangesIndexRouteHandler,
  putIpamL2vpnsIdIndexRouteHandler,
  putIpamL2vpnsIndexRouteHandler,
  putIpamL2vpnTerminationsIdIndexRouteHandler,
  putIpamL2vpnTerminationsIndexRouteHandler,
  putIpamPrefixesIdIndexRouteHandler,
  putIpamPrefixesIndexRouteHandler,
  putIpamRirsIdIndexRouteHandler,
  putIpamRirsIndexRouteHandler,
  putIpamRolesIdIndexRouteHandler,
  putIpamRolesIndexRouteHandler,
  putIpamRouteTargetsIdIndexRouteHandler,
  putIpamRouteTargetsIndexRouteHandler,
  putIpamServicesIdIndexRouteHandler,
  putIpamServicesIndexRouteHandler,
  putIpamServiceTemplatesIdIndexRouteHandler,
  putIpamServiceTemplatesIndexRouteHandler,
  putIpamVlanGroupsIdIndexRouteHandler,
  putIpamVlanGroupsIndexRouteHandler,
  putIpamVlansIdIndexRouteHandler,
  putIpamVlansIndexRouteHandler,
  putIpamVrfsIdIndexRouteHandler,
  putIpamVrfsIndexRouteHandler,
  putTenancyContactAssignmentsIdIndexRouteHandler,
  putTenancyContactAssignmentsIndexRouteHandler,
  putTenancyContactGroupsIdIndexRouteHandler,
  putTenancyContactGroupsIndexRouteHandler,
  putTenancyContactRolesIdIndexRouteHandler,
  putTenancyContactRolesIndexRouteHandler,
  putTenancyContactsIdIndexRouteHandler,
  putTenancyContactsIndexRouteHandler,
  putTenancyTenantGroupsIdIndexRouteHandler,
  putTenancyTenantGroupsIndexRouteHandler,
  putTenancyTenantsIdIndexRouteHandler,
  putTenancyTenantsIndexRouteHandler,
  putUsersGroupsIdIndexRouteHandler,
  putUsersGroupsIndexRouteHandler,
  putUsersPermissionsIdIndexRouteHandler,
  putUsersPermissionsIndexRouteHandler,
  putUsersTokensIdIndexRouteHandler,
  putUsersTokensIndexRouteHandler,
  putUsersUsersIdIndexRouteHandler,
  putUsersUsersIndexRouteHandler,
  putVirtualizationClusterGroupsIdIndexRouteHandler,
  putVirtualizationClusterGroupsIndexRouteHandler,
  putVirtualizationClustersIdIndexRouteHandler,
  putVirtualizationClustersIndexRouteHandler,
  putVirtualizationClusterTypesIdIndexRouteHandler,
  putVirtualizationClusterTypesIndexRouteHandler,
  putVirtualizationInterfacesIdIndexRouteHandler,
  putVirtualizationInterfacesIndexRouteHandler,
  putVirtualizationVirtualMachinesIdIndexRouteHandler,
  putVirtualizationVirtualMachinesIndexRouteHandler,
  putWirelessWirelessLanGroupsIdIndexRouteHandler,
  putWirelessWirelessLanGroupsIndexRouteHandler,
  putWirelessWirelessLansIdIndexRouteHandler,
  putWirelessWirelessLansIndexRouteHandler,
  putWirelessWirelessLinksIdIndexRouteHandler,
  putWirelessWirelessLinksIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    deleteCircuitsCircuitTerminationsIndexRoute,
    deleteCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    getCircuitsCircuitTerminationsIndexRoute,
    getCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    patchCircuitsCircuitTerminationsIndexRoute,
    patchCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    postCircuitsCircuitTerminationsIndexRoute,
    postCircuitsCircuitTerminationsIndexRouteHandler,
  )
  .openapi(
    putCircuitsCircuitTerminationsIndexRoute,
    putCircuitsCircuitTerminationsIndexRouteHandler,
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
  .openapi(
    getCircuitsCircuitTerminationsIdPathsIndexRoute,
    getCircuitsCircuitTerminationsIdPathsIndexRouteHandler,
  )
  .openapi(deleteCircuitsCircuitTypesIndexRoute, deleteCircuitsCircuitTypesIndexRouteHandler)
  .openapi(getCircuitsCircuitTypesIndexRoute, getCircuitsCircuitTypesIndexRouteHandler)
  .openapi(patchCircuitsCircuitTypesIndexRoute, patchCircuitsCircuitTypesIndexRouteHandler)
  .openapi(postCircuitsCircuitTypesIndexRoute, postCircuitsCircuitTypesIndexRouteHandler)
  .openapi(putCircuitsCircuitTypesIndexRoute, putCircuitsCircuitTypesIndexRouteHandler)
  .openapi(deleteCircuitsCircuitTypesIdIndexRoute, deleteCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(getCircuitsCircuitTypesIdIndexRoute, getCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(patchCircuitsCircuitTypesIdIndexRoute, patchCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(putCircuitsCircuitTypesIdIndexRoute, putCircuitsCircuitTypesIdIndexRouteHandler)
  .openapi(deleteCircuitsCircuitsIndexRoute, deleteCircuitsCircuitsIndexRouteHandler)
  .openapi(getCircuitsCircuitsIndexRoute, getCircuitsCircuitsIndexRouteHandler)
  .openapi(patchCircuitsCircuitsIndexRoute, patchCircuitsCircuitsIndexRouteHandler)
  .openapi(postCircuitsCircuitsIndexRoute, postCircuitsCircuitsIndexRouteHandler)
  .openapi(putCircuitsCircuitsIndexRoute, putCircuitsCircuitsIndexRouteHandler)
  .openapi(deleteCircuitsCircuitsIdIndexRoute, deleteCircuitsCircuitsIdIndexRouteHandler)
  .openapi(getCircuitsCircuitsIdIndexRoute, getCircuitsCircuitsIdIndexRouteHandler)
  .openapi(patchCircuitsCircuitsIdIndexRoute, patchCircuitsCircuitsIdIndexRouteHandler)
  .openapi(putCircuitsCircuitsIdIndexRoute, putCircuitsCircuitsIdIndexRouteHandler)
  .openapi(
    deleteCircuitsProviderNetworksIndexRoute,
    deleteCircuitsProviderNetworksIndexRouteHandler,
  )
  .openapi(getCircuitsProviderNetworksIndexRoute, getCircuitsProviderNetworksIndexRouteHandler)
  .openapi(patchCircuitsProviderNetworksIndexRoute, patchCircuitsProviderNetworksIndexRouteHandler)
  .openapi(postCircuitsProviderNetworksIndexRoute, postCircuitsProviderNetworksIndexRouteHandler)
  .openapi(putCircuitsProviderNetworksIndexRoute, putCircuitsProviderNetworksIndexRouteHandler)
  .openapi(
    deleteCircuitsProviderNetworksIdIndexRoute,
    deleteCircuitsProviderNetworksIdIndexRouteHandler,
  )
  .openapi(getCircuitsProviderNetworksIdIndexRoute, getCircuitsProviderNetworksIdIndexRouteHandler)
  .openapi(
    patchCircuitsProviderNetworksIdIndexRoute,
    patchCircuitsProviderNetworksIdIndexRouteHandler,
  )
  .openapi(putCircuitsProviderNetworksIdIndexRoute, putCircuitsProviderNetworksIdIndexRouteHandler)
  .openapi(deleteCircuitsProvidersIndexRoute, deleteCircuitsProvidersIndexRouteHandler)
  .openapi(getCircuitsProvidersIndexRoute, getCircuitsProvidersIndexRouteHandler)
  .openapi(patchCircuitsProvidersIndexRoute, patchCircuitsProvidersIndexRouteHandler)
  .openapi(postCircuitsProvidersIndexRoute, postCircuitsProvidersIndexRouteHandler)
  .openapi(putCircuitsProvidersIndexRoute, putCircuitsProvidersIndexRouteHandler)
  .openapi(deleteCircuitsProvidersIdIndexRoute, deleteCircuitsProvidersIdIndexRouteHandler)
  .openapi(getCircuitsProvidersIdIndexRoute, getCircuitsProvidersIdIndexRouteHandler)
  .openapi(patchCircuitsProvidersIdIndexRoute, patchCircuitsProvidersIdIndexRouteHandler)
  .openapi(putCircuitsProvidersIdIndexRoute, putCircuitsProvidersIdIndexRouteHandler)
  .openapi(deleteDcimCableTerminationsIndexRoute, deleteDcimCableTerminationsIndexRouteHandler)
  .openapi(getDcimCableTerminationsIndexRoute, getDcimCableTerminationsIndexRouteHandler)
  .openapi(patchDcimCableTerminationsIndexRoute, patchDcimCableTerminationsIndexRouteHandler)
  .openapi(postDcimCableTerminationsIndexRoute, postDcimCableTerminationsIndexRouteHandler)
  .openapi(putDcimCableTerminationsIndexRoute, putDcimCableTerminationsIndexRouteHandler)
  .openapi(deleteDcimCableTerminationsIdIndexRoute, deleteDcimCableTerminationsIdIndexRouteHandler)
  .openapi(getDcimCableTerminationsIdIndexRoute, getDcimCableTerminationsIdIndexRouteHandler)
  .openapi(patchDcimCableTerminationsIdIndexRoute, patchDcimCableTerminationsIdIndexRouteHandler)
  .openapi(putDcimCableTerminationsIdIndexRoute, putDcimCableTerminationsIdIndexRouteHandler)
  .openapi(deleteDcimCablesIndexRoute, deleteDcimCablesIndexRouteHandler)
  .openapi(getDcimCablesIndexRoute, getDcimCablesIndexRouteHandler)
  .openapi(patchDcimCablesIndexRoute, patchDcimCablesIndexRouteHandler)
  .openapi(postDcimCablesIndexRoute, postDcimCablesIndexRouteHandler)
  .openapi(putDcimCablesIndexRoute, putDcimCablesIndexRouteHandler)
  .openapi(deleteDcimCablesIdIndexRoute, deleteDcimCablesIdIndexRouteHandler)
  .openapi(getDcimCablesIdIndexRoute, getDcimCablesIdIndexRouteHandler)
  .openapi(patchDcimCablesIdIndexRoute, patchDcimCablesIdIndexRouteHandler)
  .openapi(putDcimCablesIdIndexRoute, putDcimCablesIdIndexRouteHandler)
  .openapi(getDcimConnectedDeviceIndexRoute, getDcimConnectedDeviceIndexRouteHandler)
  .openapi(
    deleteDcimConsolePortTemplatesIndexRoute,
    deleteDcimConsolePortTemplatesIndexRouteHandler,
  )
  .openapi(getDcimConsolePortTemplatesIndexRoute, getDcimConsolePortTemplatesIndexRouteHandler)
  .openapi(patchDcimConsolePortTemplatesIndexRoute, patchDcimConsolePortTemplatesIndexRouteHandler)
  .openapi(postDcimConsolePortTemplatesIndexRoute, postDcimConsolePortTemplatesIndexRouteHandler)
  .openapi(putDcimConsolePortTemplatesIndexRoute, putDcimConsolePortTemplatesIndexRouteHandler)
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
  .openapi(deleteDcimConsolePortsIndexRoute, deleteDcimConsolePortsIndexRouteHandler)
  .openapi(getDcimConsolePortsIndexRoute, getDcimConsolePortsIndexRouteHandler)
  .openapi(patchDcimConsolePortsIndexRoute, patchDcimConsolePortsIndexRouteHandler)
  .openapi(postDcimConsolePortsIndexRoute, postDcimConsolePortsIndexRouteHandler)
  .openapi(putDcimConsolePortsIndexRoute, putDcimConsolePortsIndexRouteHandler)
  .openapi(deleteDcimConsolePortsIdIndexRoute, deleteDcimConsolePortsIdIndexRouteHandler)
  .openapi(getDcimConsolePortsIdIndexRoute, getDcimConsolePortsIdIndexRouteHandler)
  .openapi(patchDcimConsolePortsIdIndexRoute, patchDcimConsolePortsIdIndexRouteHandler)
  .openapi(putDcimConsolePortsIdIndexRoute, putDcimConsolePortsIdIndexRouteHandler)
  .openapi(getDcimConsolePortsIdTraceIndexRoute, getDcimConsolePortsIdTraceIndexRouteHandler)
  .openapi(
    deleteDcimConsoleServerPortTemplatesIndexRoute,
    deleteDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    getDcimConsoleServerPortTemplatesIndexRoute,
    getDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    patchDcimConsoleServerPortTemplatesIndexRoute,
    patchDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    postDcimConsoleServerPortTemplatesIndexRoute,
    postDcimConsoleServerPortTemplatesIndexRouteHandler,
  )
  .openapi(
    putDcimConsoleServerPortTemplatesIndexRoute,
    putDcimConsoleServerPortTemplatesIndexRouteHandler,
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
  .openapi(deleteDcimConsoleServerPortsIndexRoute, deleteDcimConsoleServerPortsIndexRouteHandler)
  .openapi(getDcimConsoleServerPortsIndexRoute, getDcimConsoleServerPortsIndexRouteHandler)
  .openapi(patchDcimConsoleServerPortsIndexRoute, patchDcimConsoleServerPortsIndexRouteHandler)
  .openapi(postDcimConsoleServerPortsIndexRoute, postDcimConsoleServerPortsIndexRouteHandler)
  .openapi(putDcimConsoleServerPortsIndexRoute, putDcimConsoleServerPortsIndexRouteHandler)
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
  .openapi(deleteDcimDeviceBayTemplatesIndexRoute, deleteDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(getDcimDeviceBayTemplatesIndexRoute, getDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(patchDcimDeviceBayTemplatesIndexRoute, patchDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(postDcimDeviceBayTemplatesIndexRoute, postDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(putDcimDeviceBayTemplatesIndexRoute, putDcimDeviceBayTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimDeviceBayTemplatesIdIndexRoute,
    deleteDcimDeviceBayTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimDeviceBayTemplatesIdIndexRoute, getDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(patchDcimDeviceBayTemplatesIdIndexRoute, patchDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(putDcimDeviceBayTemplatesIdIndexRoute, putDcimDeviceBayTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimDeviceBaysIndexRoute, deleteDcimDeviceBaysIndexRouteHandler)
  .openapi(getDcimDeviceBaysIndexRoute, getDcimDeviceBaysIndexRouteHandler)
  .openapi(patchDcimDeviceBaysIndexRoute, patchDcimDeviceBaysIndexRouteHandler)
  .openapi(postDcimDeviceBaysIndexRoute, postDcimDeviceBaysIndexRouteHandler)
  .openapi(putDcimDeviceBaysIndexRoute, putDcimDeviceBaysIndexRouteHandler)
  .openapi(deleteDcimDeviceBaysIdIndexRoute, deleteDcimDeviceBaysIdIndexRouteHandler)
  .openapi(getDcimDeviceBaysIdIndexRoute, getDcimDeviceBaysIdIndexRouteHandler)
  .openapi(patchDcimDeviceBaysIdIndexRoute, patchDcimDeviceBaysIdIndexRouteHandler)
  .openapi(putDcimDeviceBaysIdIndexRoute, putDcimDeviceBaysIdIndexRouteHandler)
  .openapi(deleteDcimDeviceRolesIndexRoute, deleteDcimDeviceRolesIndexRouteHandler)
  .openapi(getDcimDeviceRolesIndexRoute, getDcimDeviceRolesIndexRouteHandler)
  .openapi(patchDcimDeviceRolesIndexRoute, patchDcimDeviceRolesIndexRouteHandler)
  .openapi(postDcimDeviceRolesIndexRoute, postDcimDeviceRolesIndexRouteHandler)
  .openapi(putDcimDeviceRolesIndexRoute, putDcimDeviceRolesIndexRouteHandler)
  .openapi(deleteDcimDeviceRolesIdIndexRoute, deleteDcimDeviceRolesIdIndexRouteHandler)
  .openapi(getDcimDeviceRolesIdIndexRoute, getDcimDeviceRolesIdIndexRouteHandler)
  .openapi(patchDcimDeviceRolesIdIndexRoute, patchDcimDeviceRolesIdIndexRouteHandler)
  .openapi(putDcimDeviceRolesIdIndexRoute, putDcimDeviceRolesIdIndexRouteHandler)
  .openapi(deleteDcimDeviceTypesIndexRoute, deleteDcimDeviceTypesIndexRouteHandler)
  .openapi(getDcimDeviceTypesIndexRoute, getDcimDeviceTypesIndexRouteHandler)
  .openapi(patchDcimDeviceTypesIndexRoute, patchDcimDeviceTypesIndexRouteHandler)
  .openapi(postDcimDeviceTypesIndexRoute, postDcimDeviceTypesIndexRouteHandler)
  .openapi(putDcimDeviceTypesIndexRoute, putDcimDeviceTypesIndexRouteHandler)
  .openapi(deleteDcimDeviceTypesIdIndexRoute, deleteDcimDeviceTypesIdIndexRouteHandler)
  .openapi(getDcimDeviceTypesIdIndexRoute, getDcimDeviceTypesIdIndexRouteHandler)
  .openapi(patchDcimDeviceTypesIdIndexRoute, patchDcimDeviceTypesIdIndexRouteHandler)
  .openapi(putDcimDeviceTypesIdIndexRoute, putDcimDeviceTypesIdIndexRouteHandler)
  .openapi(deleteDcimDevicesIndexRoute, deleteDcimDevicesIndexRouteHandler)
  .openapi(getDcimDevicesIndexRoute, getDcimDevicesIndexRouteHandler)
  .openapi(patchDcimDevicesIndexRoute, patchDcimDevicesIndexRouteHandler)
  .openapi(postDcimDevicesIndexRoute, postDcimDevicesIndexRouteHandler)
  .openapi(putDcimDevicesIndexRoute, putDcimDevicesIndexRouteHandler)
  .openapi(deleteDcimDevicesIdIndexRoute, deleteDcimDevicesIdIndexRouteHandler)
  .openapi(getDcimDevicesIdIndexRoute, getDcimDevicesIdIndexRouteHandler)
  .openapi(patchDcimDevicesIdIndexRoute, patchDcimDevicesIdIndexRouteHandler)
  .openapi(putDcimDevicesIdIndexRoute, putDcimDevicesIdIndexRouteHandler)
  .openapi(getDcimDevicesIdNapalmIndexRoute, getDcimDevicesIdNapalmIndexRouteHandler)
  .openapi(deleteDcimFrontPortTemplatesIndexRoute, deleteDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(getDcimFrontPortTemplatesIndexRoute, getDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(patchDcimFrontPortTemplatesIndexRoute, patchDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(postDcimFrontPortTemplatesIndexRoute, postDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(putDcimFrontPortTemplatesIndexRoute, putDcimFrontPortTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimFrontPortTemplatesIdIndexRoute,
    deleteDcimFrontPortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimFrontPortTemplatesIdIndexRoute, getDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimFrontPortTemplatesIdIndexRoute, patchDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimFrontPortTemplatesIdIndexRoute, putDcimFrontPortTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimFrontPortsIndexRoute, deleteDcimFrontPortsIndexRouteHandler)
  .openapi(getDcimFrontPortsIndexRoute, getDcimFrontPortsIndexRouteHandler)
  .openapi(patchDcimFrontPortsIndexRoute, patchDcimFrontPortsIndexRouteHandler)
  .openapi(postDcimFrontPortsIndexRoute, postDcimFrontPortsIndexRouteHandler)
  .openapi(putDcimFrontPortsIndexRoute, putDcimFrontPortsIndexRouteHandler)
  .openapi(deleteDcimFrontPortsIdIndexRoute, deleteDcimFrontPortsIdIndexRouteHandler)
  .openapi(getDcimFrontPortsIdIndexRoute, getDcimFrontPortsIdIndexRouteHandler)
  .openapi(patchDcimFrontPortsIdIndexRoute, patchDcimFrontPortsIdIndexRouteHandler)
  .openapi(putDcimFrontPortsIdIndexRoute, putDcimFrontPortsIdIndexRouteHandler)
  .openapi(getDcimFrontPortsIdPathsIndexRoute, getDcimFrontPortsIdPathsIndexRouteHandler)
  .openapi(deleteDcimInterfaceTemplatesIndexRoute, deleteDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(getDcimInterfaceTemplatesIndexRoute, getDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(patchDcimInterfaceTemplatesIndexRoute, patchDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(postDcimInterfaceTemplatesIndexRoute, postDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(putDcimInterfaceTemplatesIndexRoute, putDcimInterfaceTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimInterfaceTemplatesIdIndexRoute,
    deleteDcimInterfaceTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimInterfaceTemplatesIdIndexRoute, getDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(patchDcimInterfaceTemplatesIdIndexRoute, patchDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(putDcimInterfaceTemplatesIdIndexRoute, putDcimInterfaceTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimInterfacesIndexRoute, deleteDcimInterfacesIndexRouteHandler)
  .openapi(getDcimInterfacesIndexRoute, getDcimInterfacesIndexRouteHandler)
  .openapi(patchDcimInterfacesIndexRoute, patchDcimInterfacesIndexRouteHandler)
  .openapi(postDcimInterfacesIndexRoute, postDcimInterfacesIndexRouteHandler)
  .openapi(putDcimInterfacesIndexRoute, putDcimInterfacesIndexRouteHandler)
  .openapi(deleteDcimInterfacesIdIndexRoute, deleteDcimInterfacesIdIndexRouteHandler)
  .openapi(getDcimInterfacesIdIndexRoute, getDcimInterfacesIdIndexRouteHandler)
  .openapi(patchDcimInterfacesIdIndexRoute, patchDcimInterfacesIdIndexRouteHandler)
  .openapi(putDcimInterfacesIdIndexRoute, putDcimInterfacesIdIndexRouteHandler)
  .openapi(getDcimInterfacesIdTraceIndexRoute, getDcimInterfacesIdTraceIndexRouteHandler)
  .openapi(deleteDcimInventoryItemRolesIndexRoute, deleteDcimInventoryItemRolesIndexRouteHandler)
  .openapi(getDcimInventoryItemRolesIndexRoute, getDcimInventoryItemRolesIndexRouteHandler)
  .openapi(patchDcimInventoryItemRolesIndexRoute, patchDcimInventoryItemRolesIndexRouteHandler)
  .openapi(postDcimInventoryItemRolesIndexRoute, postDcimInventoryItemRolesIndexRouteHandler)
  .openapi(putDcimInventoryItemRolesIndexRoute, putDcimInventoryItemRolesIndexRouteHandler)
  .openapi(
    deleteDcimInventoryItemRolesIdIndexRoute,
    deleteDcimInventoryItemRolesIdIndexRouteHandler,
  )
  .openapi(getDcimInventoryItemRolesIdIndexRoute, getDcimInventoryItemRolesIdIndexRouteHandler)
  .openapi(patchDcimInventoryItemRolesIdIndexRoute, patchDcimInventoryItemRolesIdIndexRouteHandler)
  .openapi(putDcimInventoryItemRolesIdIndexRoute, putDcimInventoryItemRolesIdIndexRouteHandler)
  .openapi(
    deleteDcimInventoryItemTemplatesIndexRoute,
    deleteDcimInventoryItemTemplatesIndexRouteHandler,
  )
  .openapi(getDcimInventoryItemTemplatesIndexRoute, getDcimInventoryItemTemplatesIndexRouteHandler)
  .openapi(
    patchDcimInventoryItemTemplatesIndexRoute,
    patchDcimInventoryItemTemplatesIndexRouteHandler,
  )
  .openapi(
    postDcimInventoryItemTemplatesIndexRoute,
    postDcimInventoryItemTemplatesIndexRouteHandler,
  )
  .openapi(putDcimInventoryItemTemplatesIndexRoute, putDcimInventoryItemTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimInventoryItemTemplatesIdIndexRoute,
    deleteDcimInventoryItemTemplatesIdIndexRouteHandler,
  )
  .openapi(
    getDcimInventoryItemTemplatesIdIndexRoute,
    getDcimInventoryItemTemplatesIdIndexRouteHandler,
  )
  .openapi(
    patchDcimInventoryItemTemplatesIdIndexRoute,
    patchDcimInventoryItemTemplatesIdIndexRouteHandler,
  )
  .openapi(
    putDcimInventoryItemTemplatesIdIndexRoute,
    putDcimInventoryItemTemplatesIdIndexRouteHandler,
  )
  .openapi(deleteDcimInventoryItemsIndexRoute, deleteDcimInventoryItemsIndexRouteHandler)
  .openapi(getDcimInventoryItemsIndexRoute, getDcimInventoryItemsIndexRouteHandler)
  .openapi(patchDcimInventoryItemsIndexRoute, patchDcimInventoryItemsIndexRouteHandler)
  .openapi(postDcimInventoryItemsIndexRoute, postDcimInventoryItemsIndexRouteHandler)
  .openapi(putDcimInventoryItemsIndexRoute, putDcimInventoryItemsIndexRouteHandler)
  .openapi(deleteDcimInventoryItemsIdIndexRoute, deleteDcimInventoryItemsIdIndexRouteHandler)
  .openapi(getDcimInventoryItemsIdIndexRoute, getDcimInventoryItemsIdIndexRouteHandler)
  .openapi(patchDcimInventoryItemsIdIndexRoute, patchDcimInventoryItemsIdIndexRouteHandler)
  .openapi(putDcimInventoryItemsIdIndexRoute, putDcimInventoryItemsIdIndexRouteHandler)
  .openapi(deleteDcimLocationsIndexRoute, deleteDcimLocationsIndexRouteHandler)
  .openapi(getDcimLocationsIndexRoute, getDcimLocationsIndexRouteHandler)
  .openapi(patchDcimLocationsIndexRoute, patchDcimLocationsIndexRouteHandler)
  .openapi(postDcimLocationsIndexRoute, postDcimLocationsIndexRouteHandler)
  .openapi(putDcimLocationsIndexRoute, putDcimLocationsIndexRouteHandler)
  .openapi(deleteDcimLocationsIdIndexRoute, deleteDcimLocationsIdIndexRouteHandler)
  .openapi(getDcimLocationsIdIndexRoute, getDcimLocationsIdIndexRouteHandler)
  .openapi(patchDcimLocationsIdIndexRoute, patchDcimLocationsIdIndexRouteHandler)
  .openapi(putDcimLocationsIdIndexRoute, putDcimLocationsIdIndexRouteHandler)
  .openapi(deleteDcimManufacturersIndexRoute, deleteDcimManufacturersIndexRouteHandler)
  .openapi(getDcimManufacturersIndexRoute, getDcimManufacturersIndexRouteHandler)
  .openapi(patchDcimManufacturersIndexRoute, patchDcimManufacturersIndexRouteHandler)
  .openapi(postDcimManufacturersIndexRoute, postDcimManufacturersIndexRouteHandler)
  .openapi(putDcimManufacturersIndexRoute, putDcimManufacturersIndexRouteHandler)
  .openapi(deleteDcimManufacturersIdIndexRoute, deleteDcimManufacturersIdIndexRouteHandler)
  .openapi(getDcimManufacturersIdIndexRoute, getDcimManufacturersIdIndexRouteHandler)
  .openapi(patchDcimManufacturersIdIndexRoute, patchDcimManufacturersIdIndexRouteHandler)
  .openapi(putDcimManufacturersIdIndexRoute, putDcimManufacturersIdIndexRouteHandler)
  .openapi(deleteDcimModuleBayTemplatesIndexRoute, deleteDcimModuleBayTemplatesIndexRouteHandler)
  .openapi(getDcimModuleBayTemplatesIndexRoute, getDcimModuleBayTemplatesIndexRouteHandler)
  .openapi(patchDcimModuleBayTemplatesIndexRoute, patchDcimModuleBayTemplatesIndexRouteHandler)
  .openapi(postDcimModuleBayTemplatesIndexRoute, postDcimModuleBayTemplatesIndexRouteHandler)
  .openapi(putDcimModuleBayTemplatesIndexRoute, putDcimModuleBayTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimModuleBayTemplatesIdIndexRoute,
    deleteDcimModuleBayTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimModuleBayTemplatesIdIndexRoute, getDcimModuleBayTemplatesIdIndexRouteHandler)
  .openapi(patchDcimModuleBayTemplatesIdIndexRoute, patchDcimModuleBayTemplatesIdIndexRouteHandler)
  .openapi(putDcimModuleBayTemplatesIdIndexRoute, putDcimModuleBayTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimModuleBaysIndexRoute, deleteDcimModuleBaysIndexRouteHandler)
  .openapi(getDcimModuleBaysIndexRoute, getDcimModuleBaysIndexRouteHandler)
  .openapi(patchDcimModuleBaysIndexRoute, patchDcimModuleBaysIndexRouteHandler)
  .openapi(postDcimModuleBaysIndexRoute, postDcimModuleBaysIndexRouteHandler)
  .openapi(putDcimModuleBaysIndexRoute, putDcimModuleBaysIndexRouteHandler)
  .openapi(deleteDcimModuleBaysIdIndexRoute, deleteDcimModuleBaysIdIndexRouteHandler)
  .openapi(getDcimModuleBaysIdIndexRoute, getDcimModuleBaysIdIndexRouteHandler)
  .openapi(patchDcimModuleBaysIdIndexRoute, patchDcimModuleBaysIdIndexRouteHandler)
  .openapi(putDcimModuleBaysIdIndexRoute, putDcimModuleBaysIdIndexRouteHandler)
  .openapi(deleteDcimModuleTypesIndexRoute, deleteDcimModuleTypesIndexRouteHandler)
  .openapi(getDcimModuleTypesIndexRoute, getDcimModuleTypesIndexRouteHandler)
  .openapi(patchDcimModuleTypesIndexRoute, patchDcimModuleTypesIndexRouteHandler)
  .openapi(postDcimModuleTypesIndexRoute, postDcimModuleTypesIndexRouteHandler)
  .openapi(putDcimModuleTypesIndexRoute, putDcimModuleTypesIndexRouteHandler)
  .openapi(deleteDcimModuleTypesIdIndexRoute, deleteDcimModuleTypesIdIndexRouteHandler)
  .openapi(getDcimModuleTypesIdIndexRoute, getDcimModuleTypesIdIndexRouteHandler)
  .openapi(patchDcimModuleTypesIdIndexRoute, patchDcimModuleTypesIdIndexRouteHandler)
  .openapi(putDcimModuleTypesIdIndexRoute, putDcimModuleTypesIdIndexRouteHandler)
  .openapi(deleteDcimModulesIndexRoute, deleteDcimModulesIndexRouteHandler)
  .openapi(getDcimModulesIndexRoute, getDcimModulesIndexRouteHandler)
  .openapi(patchDcimModulesIndexRoute, patchDcimModulesIndexRouteHandler)
  .openapi(postDcimModulesIndexRoute, postDcimModulesIndexRouteHandler)
  .openapi(putDcimModulesIndexRoute, putDcimModulesIndexRouteHandler)
  .openapi(deleteDcimModulesIdIndexRoute, deleteDcimModulesIdIndexRouteHandler)
  .openapi(getDcimModulesIdIndexRoute, getDcimModulesIdIndexRouteHandler)
  .openapi(patchDcimModulesIdIndexRoute, patchDcimModulesIdIndexRouteHandler)
  .openapi(putDcimModulesIdIndexRoute, putDcimModulesIdIndexRouteHandler)
  .openapi(deleteDcimPlatformsIndexRoute, deleteDcimPlatformsIndexRouteHandler)
  .openapi(getDcimPlatformsIndexRoute, getDcimPlatformsIndexRouteHandler)
  .openapi(patchDcimPlatformsIndexRoute, patchDcimPlatformsIndexRouteHandler)
  .openapi(postDcimPlatformsIndexRoute, postDcimPlatformsIndexRouteHandler)
  .openapi(putDcimPlatformsIndexRoute, putDcimPlatformsIndexRouteHandler)
  .openapi(deleteDcimPlatformsIdIndexRoute, deleteDcimPlatformsIdIndexRouteHandler)
  .openapi(getDcimPlatformsIdIndexRoute, getDcimPlatformsIdIndexRouteHandler)
  .openapi(patchDcimPlatformsIdIndexRoute, patchDcimPlatformsIdIndexRouteHandler)
  .openapi(putDcimPlatformsIdIndexRoute, putDcimPlatformsIdIndexRouteHandler)
  .openapi(deleteDcimPowerFeedsIndexRoute, deleteDcimPowerFeedsIndexRouteHandler)
  .openapi(getDcimPowerFeedsIndexRoute, getDcimPowerFeedsIndexRouteHandler)
  .openapi(patchDcimPowerFeedsIndexRoute, patchDcimPowerFeedsIndexRouteHandler)
  .openapi(postDcimPowerFeedsIndexRoute, postDcimPowerFeedsIndexRouteHandler)
  .openapi(putDcimPowerFeedsIndexRoute, putDcimPowerFeedsIndexRouteHandler)
  .openapi(deleteDcimPowerFeedsIdIndexRoute, deleteDcimPowerFeedsIdIndexRouteHandler)
  .openapi(getDcimPowerFeedsIdIndexRoute, getDcimPowerFeedsIdIndexRouteHandler)
  .openapi(patchDcimPowerFeedsIdIndexRoute, patchDcimPowerFeedsIdIndexRouteHandler)
  .openapi(putDcimPowerFeedsIdIndexRoute, putDcimPowerFeedsIdIndexRouteHandler)
  .openapi(getDcimPowerFeedsIdTraceIndexRoute, getDcimPowerFeedsIdTraceIndexRouteHandler)
  .openapi(
    deleteDcimPowerOutletTemplatesIndexRoute,
    deleteDcimPowerOutletTemplatesIndexRouteHandler,
  )
  .openapi(getDcimPowerOutletTemplatesIndexRoute, getDcimPowerOutletTemplatesIndexRouteHandler)
  .openapi(patchDcimPowerOutletTemplatesIndexRoute, patchDcimPowerOutletTemplatesIndexRouteHandler)
  .openapi(postDcimPowerOutletTemplatesIndexRoute, postDcimPowerOutletTemplatesIndexRouteHandler)
  .openapi(putDcimPowerOutletTemplatesIndexRoute, putDcimPowerOutletTemplatesIndexRouteHandler)
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
  .openapi(deleteDcimPowerOutletsIndexRoute, deleteDcimPowerOutletsIndexRouteHandler)
  .openapi(getDcimPowerOutletsIndexRoute, getDcimPowerOutletsIndexRouteHandler)
  .openapi(patchDcimPowerOutletsIndexRoute, patchDcimPowerOutletsIndexRouteHandler)
  .openapi(postDcimPowerOutletsIndexRoute, postDcimPowerOutletsIndexRouteHandler)
  .openapi(putDcimPowerOutletsIndexRoute, putDcimPowerOutletsIndexRouteHandler)
  .openapi(deleteDcimPowerOutletsIdIndexRoute, deleteDcimPowerOutletsIdIndexRouteHandler)
  .openapi(getDcimPowerOutletsIdIndexRoute, getDcimPowerOutletsIdIndexRouteHandler)
  .openapi(patchDcimPowerOutletsIdIndexRoute, patchDcimPowerOutletsIdIndexRouteHandler)
  .openapi(putDcimPowerOutletsIdIndexRoute, putDcimPowerOutletsIdIndexRouteHandler)
  .openapi(getDcimPowerOutletsIdTraceIndexRoute, getDcimPowerOutletsIdTraceIndexRouteHandler)
  .openapi(deleteDcimPowerPanelsIndexRoute, deleteDcimPowerPanelsIndexRouteHandler)
  .openapi(getDcimPowerPanelsIndexRoute, getDcimPowerPanelsIndexRouteHandler)
  .openapi(patchDcimPowerPanelsIndexRoute, patchDcimPowerPanelsIndexRouteHandler)
  .openapi(postDcimPowerPanelsIndexRoute, postDcimPowerPanelsIndexRouteHandler)
  .openapi(putDcimPowerPanelsIndexRoute, putDcimPowerPanelsIndexRouteHandler)
  .openapi(deleteDcimPowerPanelsIdIndexRoute, deleteDcimPowerPanelsIdIndexRouteHandler)
  .openapi(getDcimPowerPanelsIdIndexRoute, getDcimPowerPanelsIdIndexRouteHandler)
  .openapi(patchDcimPowerPanelsIdIndexRoute, patchDcimPowerPanelsIdIndexRouteHandler)
  .openapi(putDcimPowerPanelsIdIndexRoute, putDcimPowerPanelsIdIndexRouteHandler)
  .openapi(deleteDcimPowerPortTemplatesIndexRoute, deleteDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(getDcimPowerPortTemplatesIndexRoute, getDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(patchDcimPowerPortTemplatesIndexRoute, patchDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(postDcimPowerPortTemplatesIndexRoute, postDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(putDcimPowerPortTemplatesIndexRoute, putDcimPowerPortTemplatesIndexRouteHandler)
  .openapi(
    deleteDcimPowerPortTemplatesIdIndexRoute,
    deleteDcimPowerPortTemplatesIdIndexRouteHandler,
  )
  .openapi(getDcimPowerPortTemplatesIdIndexRoute, getDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimPowerPortTemplatesIdIndexRoute, patchDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimPowerPortTemplatesIdIndexRoute, putDcimPowerPortTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimPowerPortsIndexRoute, deleteDcimPowerPortsIndexRouteHandler)
  .openapi(getDcimPowerPortsIndexRoute, getDcimPowerPortsIndexRouteHandler)
  .openapi(patchDcimPowerPortsIndexRoute, patchDcimPowerPortsIndexRouteHandler)
  .openapi(postDcimPowerPortsIndexRoute, postDcimPowerPortsIndexRouteHandler)
  .openapi(putDcimPowerPortsIndexRoute, putDcimPowerPortsIndexRouteHandler)
  .openapi(deleteDcimPowerPortsIdIndexRoute, deleteDcimPowerPortsIdIndexRouteHandler)
  .openapi(getDcimPowerPortsIdIndexRoute, getDcimPowerPortsIdIndexRouteHandler)
  .openapi(patchDcimPowerPortsIdIndexRoute, patchDcimPowerPortsIdIndexRouteHandler)
  .openapi(putDcimPowerPortsIdIndexRoute, putDcimPowerPortsIdIndexRouteHandler)
  .openapi(getDcimPowerPortsIdTraceIndexRoute, getDcimPowerPortsIdTraceIndexRouteHandler)
  .openapi(deleteDcimRackReservationsIndexRoute, deleteDcimRackReservationsIndexRouteHandler)
  .openapi(getDcimRackReservationsIndexRoute, getDcimRackReservationsIndexRouteHandler)
  .openapi(patchDcimRackReservationsIndexRoute, patchDcimRackReservationsIndexRouteHandler)
  .openapi(postDcimRackReservationsIndexRoute, postDcimRackReservationsIndexRouteHandler)
  .openapi(putDcimRackReservationsIndexRoute, putDcimRackReservationsIndexRouteHandler)
  .openapi(deleteDcimRackReservationsIdIndexRoute, deleteDcimRackReservationsIdIndexRouteHandler)
  .openapi(getDcimRackReservationsIdIndexRoute, getDcimRackReservationsIdIndexRouteHandler)
  .openapi(patchDcimRackReservationsIdIndexRoute, patchDcimRackReservationsIdIndexRouteHandler)
  .openapi(putDcimRackReservationsIdIndexRoute, putDcimRackReservationsIdIndexRouteHandler)
  .openapi(deleteDcimRackRolesIndexRoute, deleteDcimRackRolesIndexRouteHandler)
  .openapi(getDcimRackRolesIndexRoute, getDcimRackRolesIndexRouteHandler)
  .openapi(patchDcimRackRolesIndexRoute, patchDcimRackRolesIndexRouteHandler)
  .openapi(postDcimRackRolesIndexRoute, postDcimRackRolesIndexRouteHandler)
  .openapi(putDcimRackRolesIndexRoute, putDcimRackRolesIndexRouteHandler)
  .openapi(deleteDcimRackRolesIdIndexRoute, deleteDcimRackRolesIdIndexRouteHandler)
  .openapi(getDcimRackRolesIdIndexRoute, getDcimRackRolesIdIndexRouteHandler)
  .openapi(patchDcimRackRolesIdIndexRoute, patchDcimRackRolesIdIndexRouteHandler)
  .openapi(putDcimRackRolesIdIndexRoute, putDcimRackRolesIdIndexRouteHandler)
  .openapi(deleteDcimRacksIndexRoute, deleteDcimRacksIndexRouteHandler)
  .openapi(getDcimRacksIndexRoute, getDcimRacksIndexRouteHandler)
  .openapi(patchDcimRacksIndexRoute, patchDcimRacksIndexRouteHandler)
  .openapi(postDcimRacksIndexRoute, postDcimRacksIndexRouteHandler)
  .openapi(putDcimRacksIndexRoute, putDcimRacksIndexRouteHandler)
  .openapi(deleteDcimRacksIdIndexRoute, deleteDcimRacksIdIndexRouteHandler)
  .openapi(getDcimRacksIdIndexRoute, getDcimRacksIdIndexRouteHandler)
  .openapi(patchDcimRacksIdIndexRoute, patchDcimRacksIdIndexRouteHandler)
  .openapi(putDcimRacksIdIndexRoute, putDcimRacksIdIndexRouteHandler)
  .openapi(getDcimRacksIdElevationIndexRoute, getDcimRacksIdElevationIndexRouteHandler)
  .openapi(deleteDcimRearPortTemplatesIndexRoute, deleteDcimRearPortTemplatesIndexRouteHandler)
  .openapi(getDcimRearPortTemplatesIndexRoute, getDcimRearPortTemplatesIndexRouteHandler)
  .openapi(patchDcimRearPortTemplatesIndexRoute, patchDcimRearPortTemplatesIndexRouteHandler)
  .openapi(postDcimRearPortTemplatesIndexRoute, postDcimRearPortTemplatesIndexRouteHandler)
  .openapi(putDcimRearPortTemplatesIndexRoute, putDcimRearPortTemplatesIndexRouteHandler)
  .openapi(deleteDcimRearPortTemplatesIdIndexRoute, deleteDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(getDcimRearPortTemplatesIdIndexRoute, getDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(patchDcimRearPortTemplatesIdIndexRoute, patchDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(putDcimRearPortTemplatesIdIndexRoute, putDcimRearPortTemplatesIdIndexRouteHandler)
  .openapi(deleteDcimRearPortsIndexRoute, deleteDcimRearPortsIndexRouteHandler)
  .openapi(getDcimRearPortsIndexRoute, getDcimRearPortsIndexRouteHandler)
  .openapi(patchDcimRearPortsIndexRoute, patchDcimRearPortsIndexRouteHandler)
  .openapi(postDcimRearPortsIndexRoute, postDcimRearPortsIndexRouteHandler)
  .openapi(putDcimRearPortsIndexRoute, putDcimRearPortsIndexRouteHandler)
  .openapi(deleteDcimRearPortsIdIndexRoute, deleteDcimRearPortsIdIndexRouteHandler)
  .openapi(getDcimRearPortsIdIndexRoute, getDcimRearPortsIdIndexRouteHandler)
  .openapi(patchDcimRearPortsIdIndexRoute, patchDcimRearPortsIdIndexRouteHandler)
  .openapi(putDcimRearPortsIdIndexRoute, putDcimRearPortsIdIndexRouteHandler)
  .openapi(getDcimRearPortsIdPathsIndexRoute, getDcimRearPortsIdPathsIndexRouteHandler)
  .openapi(deleteDcimRegionsIndexRoute, deleteDcimRegionsIndexRouteHandler)
  .openapi(getDcimRegionsIndexRoute, getDcimRegionsIndexRouteHandler)
  .openapi(patchDcimRegionsIndexRoute, patchDcimRegionsIndexRouteHandler)
  .openapi(postDcimRegionsIndexRoute, postDcimRegionsIndexRouteHandler)
  .openapi(putDcimRegionsIndexRoute, putDcimRegionsIndexRouteHandler)
  .openapi(deleteDcimRegionsIdIndexRoute, deleteDcimRegionsIdIndexRouteHandler)
  .openapi(getDcimRegionsIdIndexRoute, getDcimRegionsIdIndexRouteHandler)
  .openapi(patchDcimRegionsIdIndexRoute, patchDcimRegionsIdIndexRouteHandler)
  .openapi(putDcimRegionsIdIndexRoute, putDcimRegionsIdIndexRouteHandler)
  .openapi(deleteDcimSiteGroupsIndexRoute, deleteDcimSiteGroupsIndexRouteHandler)
  .openapi(getDcimSiteGroupsIndexRoute, getDcimSiteGroupsIndexRouteHandler)
  .openapi(patchDcimSiteGroupsIndexRoute, patchDcimSiteGroupsIndexRouteHandler)
  .openapi(postDcimSiteGroupsIndexRoute, postDcimSiteGroupsIndexRouteHandler)
  .openapi(putDcimSiteGroupsIndexRoute, putDcimSiteGroupsIndexRouteHandler)
  .openapi(deleteDcimSiteGroupsIdIndexRoute, deleteDcimSiteGroupsIdIndexRouteHandler)
  .openapi(getDcimSiteGroupsIdIndexRoute, getDcimSiteGroupsIdIndexRouteHandler)
  .openapi(patchDcimSiteGroupsIdIndexRoute, patchDcimSiteGroupsIdIndexRouteHandler)
  .openapi(putDcimSiteGroupsIdIndexRoute, putDcimSiteGroupsIdIndexRouteHandler)
  .openapi(deleteDcimSitesIndexRoute, deleteDcimSitesIndexRouteHandler)
  .openapi(getDcimSitesIndexRoute, getDcimSitesIndexRouteHandler)
  .openapi(patchDcimSitesIndexRoute, patchDcimSitesIndexRouteHandler)
  .openapi(postDcimSitesIndexRoute, postDcimSitesIndexRouteHandler)
  .openapi(putDcimSitesIndexRoute, putDcimSitesIndexRouteHandler)
  .openapi(deleteDcimSitesIdIndexRoute, deleteDcimSitesIdIndexRouteHandler)
  .openapi(getDcimSitesIdIndexRoute, getDcimSitesIdIndexRouteHandler)
  .openapi(patchDcimSitesIdIndexRoute, patchDcimSitesIdIndexRouteHandler)
  .openapi(putDcimSitesIdIndexRoute, putDcimSitesIdIndexRouteHandler)
  .openapi(deleteDcimVirtualChassisIndexRoute, deleteDcimVirtualChassisIndexRouteHandler)
  .openapi(getDcimVirtualChassisIndexRoute, getDcimVirtualChassisIndexRouteHandler)
  .openapi(patchDcimVirtualChassisIndexRoute, patchDcimVirtualChassisIndexRouteHandler)
  .openapi(postDcimVirtualChassisIndexRoute, postDcimVirtualChassisIndexRouteHandler)
  .openapi(putDcimVirtualChassisIndexRoute, putDcimVirtualChassisIndexRouteHandler)
  .openapi(deleteDcimVirtualChassisIdIndexRoute, deleteDcimVirtualChassisIdIndexRouteHandler)
  .openapi(getDcimVirtualChassisIdIndexRoute, getDcimVirtualChassisIdIndexRouteHandler)
  .openapi(patchDcimVirtualChassisIdIndexRoute, patchDcimVirtualChassisIdIndexRouteHandler)
  .openapi(putDcimVirtualChassisIdIndexRoute, putDcimVirtualChassisIdIndexRouteHandler)
  .openapi(
    deleteDcimVirtualDeviceContextsIndexRoute,
    deleteDcimVirtualDeviceContextsIndexRouteHandler,
  )
  .openapi(getDcimVirtualDeviceContextsIndexRoute, getDcimVirtualDeviceContextsIndexRouteHandler)
  .openapi(
    patchDcimVirtualDeviceContextsIndexRoute,
    patchDcimVirtualDeviceContextsIndexRouteHandler,
  )
  .openapi(postDcimVirtualDeviceContextsIndexRoute, postDcimVirtualDeviceContextsIndexRouteHandler)
  .openapi(putDcimVirtualDeviceContextsIndexRoute, putDcimVirtualDeviceContextsIndexRouteHandler)
  .openapi(
    deleteDcimVirtualDeviceContextsIdIndexRoute,
    deleteDcimVirtualDeviceContextsIdIndexRouteHandler,
  )
  .openapi(
    getDcimVirtualDeviceContextsIdIndexRoute,
    getDcimVirtualDeviceContextsIdIndexRouteHandler,
  )
  .openapi(
    patchDcimVirtualDeviceContextsIdIndexRoute,
    patchDcimVirtualDeviceContextsIdIndexRouteHandler,
  )
  .openapi(
    putDcimVirtualDeviceContextsIdIndexRoute,
    putDcimVirtualDeviceContextsIdIndexRouteHandler,
  )
  .openapi(deleteExtrasConfigContextsIndexRoute, deleteExtrasConfigContextsIndexRouteHandler)
  .openapi(getExtrasConfigContextsIndexRoute, getExtrasConfigContextsIndexRouteHandler)
  .openapi(patchExtrasConfigContextsIndexRoute, patchExtrasConfigContextsIndexRouteHandler)
  .openapi(postExtrasConfigContextsIndexRoute, postExtrasConfigContextsIndexRouteHandler)
  .openapi(putExtrasConfigContextsIndexRoute, putExtrasConfigContextsIndexRouteHandler)
  .openapi(deleteExtrasConfigContextsIdIndexRoute, deleteExtrasConfigContextsIdIndexRouteHandler)
  .openapi(getExtrasConfigContextsIdIndexRoute, getExtrasConfigContextsIdIndexRouteHandler)
  .openapi(patchExtrasConfigContextsIdIndexRoute, patchExtrasConfigContextsIdIndexRouteHandler)
  .openapi(putExtrasConfigContextsIdIndexRoute, putExtrasConfigContextsIdIndexRouteHandler)
  .openapi(getExtrasContentTypesIndexRoute, getExtrasContentTypesIndexRouteHandler)
  .openapi(getExtrasContentTypesIdIndexRoute, getExtrasContentTypesIdIndexRouteHandler)
  .openapi(deleteExtrasCustomFieldsIndexRoute, deleteExtrasCustomFieldsIndexRouteHandler)
  .openapi(getExtrasCustomFieldsIndexRoute, getExtrasCustomFieldsIndexRouteHandler)
  .openapi(patchExtrasCustomFieldsIndexRoute, patchExtrasCustomFieldsIndexRouteHandler)
  .openapi(postExtrasCustomFieldsIndexRoute, postExtrasCustomFieldsIndexRouteHandler)
  .openapi(putExtrasCustomFieldsIndexRoute, putExtrasCustomFieldsIndexRouteHandler)
  .openapi(deleteExtrasCustomFieldsIdIndexRoute, deleteExtrasCustomFieldsIdIndexRouteHandler)
  .openapi(getExtrasCustomFieldsIdIndexRoute, getExtrasCustomFieldsIdIndexRouteHandler)
  .openapi(patchExtrasCustomFieldsIdIndexRoute, patchExtrasCustomFieldsIdIndexRouteHandler)
  .openapi(putExtrasCustomFieldsIdIndexRoute, putExtrasCustomFieldsIdIndexRouteHandler)
  .openapi(deleteExtrasCustomLinksIndexRoute, deleteExtrasCustomLinksIndexRouteHandler)
  .openapi(getExtrasCustomLinksIndexRoute, getExtrasCustomLinksIndexRouteHandler)
  .openapi(patchExtrasCustomLinksIndexRoute, patchExtrasCustomLinksIndexRouteHandler)
  .openapi(postExtrasCustomLinksIndexRoute, postExtrasCustomLinksIndexRouteHandler)
  .openapi(putExtrasCustomLinksIndexRoute, putExtrasCustomLinksIndexRouteHandler)
  .openapi(deleteExtrasCustomLinksIdIndexRoute, deleteExtrasCustomLinksIdIndexRouteHandler)
  .openapi(getExtrasCustomLinksIdIndexRoute, getExtrasCustomLinksIdIndexRouteHandler)
  .openapi(patchExtrasCustomLinksIdIndexRoute, patchExtrasCustomLinksIdIndexRouteHandler)
  .openapi(putExtrasCustomLinksIdIndexRoute, putExtrasCustomLinksIdIndexRouteHandler)
  .openapi(deleteExtrasExportTemplatesIndexRoute, deleteExtrasExportTemplatesIndexRouteHandler)
  .openapi(getExtrasExportTemplatesIndexRoute, getExtrasExportTemplatesIndexRouteHandler)
  .openapi(patchExtrasExportTemplatesIndexRoute, patchExtrasExportTemplatesIndexRouteHandler)
  .openapi(postExtrasExportTemplatesIndexRoute, postExtrasExportTemplatesIndexRouteHandler)
  .openapi(putExtrasExportTemplatesIndexRoute, putExtrasExportTemplatesIndexRouteHandler)
  .openapi(deleteExtrasExportTemplatesIdIndexRoute, deleteExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(getExtrasExportTemplatesIdIndexRoute, getExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(patchExtrasExportTemplatesIdIndexRoute, patchExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(putExtrasExportTemplatesIdIndexRoute, putExtrasExportTemplatesIdIndexRouteHandler)
  .openapi(deleteExtrasImageAttachmentsIndexRoute, deleteExtrasImageAttachmentsIndexRouteHandler)
  .openapi(getExtrasImageAttachmentsIndexRoute, getExtrasImageAttachmentsIndexRouteHandler)
  .openapi(patchExtrasImageAttachmentsIndexRoute, patchExtrasImageAttachmentsIndexRouteHandler)
  .openapi(postExtrasImageAttachmentsIndexRoute, postExtrasImageAttachmentsIndexRouteHandler)
  .openapi(putExtrasImageAttachmentsIndexRoute, putExtrasImageAttachmentsIndexRouteHandler)
  .openapi(
    deleteExtrasImageAttachmentsIdIndexRoute,
    deleteExtrasImageAttachmentsIdIndexRouteHandler,
  )
  .openapi(getExtrasImageAttachmentsIdIndexRoute, getExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(patchExtrasImageAttachmentsIdIndexRoute, patchExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(putExtrasImageAttachmentsIdIndexRoute, putExtrasImageAttachmentsIdIndexRouteHandler)
  .openapi(getExtrasJobResultsIndexRoute, getExtrasJobResultsIndexRouteHandler)
  .openapi(getExtrasJobResultsIdIndexRoute, getExtrasJobResultsIdIndexRouteHandler)
  .openapi(deleteExtrasJournalEntriesIndexRoute, deleteExtrasJournalEntriesIndexRouteHandler)
  .openapi(getExtrasJournalEntriesIndexRoute, getExtrasJournalEntriesIndexRouteHandler)
  .openapi(patchExtrasJournalEntriesIndexRoute, patchExtrasJournalEntriesIndexRouteHandler)
  .openapi(postExtrasJournalEntriesIndexRoute, postExtrasJournalEntriesIndexRouteHandler)
  .openapi(putExtrasJournalEntriesIndexRoute, putExtrasJournalEntriesIndexRouteHandler)
  .openapi(deleteExtrasJournalEntriesIdIndexRoute, deleteExtrasJournalEntriesIdIndexRouteHandler)
  .openapi(getExtrasJournalEntriesIdIndexRoute, getExtrasJournalEntriesIdIndexRouteHandler)
  .openapi(patchExtrasJournalEntriesIdIndexRoute, patchExtrasJournalEntriesIdIndexRouteHandler)
  .openapi(putExtrasJournalEntriesIdIndexRoute, putExtrasJournalEntriesIdIndexRouteHandler)
  .openapi(getExtrasObjectChangesIndexRoute, getExtrasObjectChangesIndexRouteHandler)
  .openapi(getExtrasObjectChangesIdIndexRoute, getExtrasObjectChangesIdIndexRouteHandler)
  .openapi(getExtrasReportsIndexRoute, getExtrasReportsIndexRouteHandler)
  .openapi(getExtrasReportsIdIndexRoute, getExtrasReportsIdIndexRouteHandler)
  .openapi(postExtrasReportsIdRunIndexRoute, postExtrasReportsIdRunIndexRouteHandler)
  .openapi(deleteExtrasSavedFiltersIndexRoute, deleteExtrasSavedFiltersIndexRouteHandler)
  .openapi(getExtrasSavedFiltersIndexRoute, getExtrasSavedFiltersIndexRouteHandler)
  .openapi(patchExtrasSavedFiltersIndexRoute, patchExtrasSavedFiltersIndexRouteHandler)
  .openapi(postExtrasSavedFiltersIndexRoute, postExtrasSavedFiltersIndexRouteHandler)
  .openapi(putExtrasSavedFiltersIndexRoute, putExtrasSavedFiltersIndexRouteHandler)
  .openapi(deleteExtrasSavedFiltersIdIndexRoute, deleteExtrasSavedFiltersIdIndexRouteHandler)
  .openapi(getExtrasSavedFiltersIdIndexRoute, getExtrasSavedFiltersIdIndexRouteHandler)
  .openapi(patchExtrasSavedFiltersIdIndexRoute, patchExtrasSavedFiltersIdIndexRouteHandler)
  .openapi(putExtrasSavedFiltersIdIndexRoute, putExtrasSavedFiltersIdIndexRouteHandler)
  .openapi(getExtrasScriptsIndexRoute, getExtrasScriptsIndexRouteHandler)
  .openapi(getExtrasScriptsIdIndexRoute, getExtrasScriptsIdIndexRouteHandler)
  .openapi(deleteExtrasTagsIndexRoute, deleteExtrasTagsIndexRouteHandler)
  .openapi(getExtrasTagsIndexRoute, getExtrasTagsIndexRouteHandler)
  .openapi(patchExtrasTagsIndexRoute, patchExtrasTagsIndexRouteHandler)
  .openapi(postExtrasTagsIndexRoute, postExtrasTagsIndexRouteHandler)
  .openapi(putExtrasTagsIndexRoute, putExtrasTagsIndexRouteHandler)
  .openapi(deleteExtrasTagsIdIndexRoute, deleteExtrasTagsIdIndexRouteHandler)
  .openapi(getExtrasTagsIdIndexRoute, getExtrasTagsIdIndexRouteHandler)
  .openapi(patchExtrasTagsIdIndexRoute, patchExtrasTagsIdIndexRouteHandler)
  .openapi(putExtrasTagsIdIndexRoute, putExtrasTagsIdIndexRouteHandler)
  .openapi(deleteExtrasWebhooksIndexRoute, deleteExtrasWebhooksIndexRouteHandler)
  .openapi(getExtrasWebhooksIndexRoute, getExtrasWebhooksIndexRouteHandler)
  .openapi(patchExtrasWebhooksIndexRoute, patchExtrasWebhooksIndexRouteHandler)
  .openapi(postExtrasWebhooksIndexRoute, postExtrasWebhooksIndexRouteHandler)
  .openapi(putExtrasWebhooksIndexRoute, putExtrasWebhooksIndexRouteHandler)
  .openapi(deleteExtrasWebhooksIdIndexRoute, deleteExtrasWebhooksIdIndexRouteHandler)
  .openapi(getExtrasWebhooksIdIndexRoute, getExtrasWebhooksIdIndexRouteHandler)
  .openapi(patchExtrasWebhooksIdIndexRoute, patchExtrasWebhooksIdIndexRouteHandler)
  .openapi(putExtrasWebhooksIdIndexRoute, putExtrasWebhooksIdIndexRouteHandler)
  .openapi(deleteIpamAggregatesIndexRoute, deleteIpamAggregatesIndexRouteHandler)
  .openapi(getIpamAggregatesIndexRoute, getIpamAggregatesIndexRouteHandler)
  .openapi(patchIpamAggregatesIndexRoute, patchIpamAggregatesIndexRouteHandler)
  .openapi(postIpamAggregatesIndexRoute, postIpamAggregatesIndexRouteHandler)
  .openapi(putIpamAggregatesIndexRoute, putIpamAggregatesIndexRouteHandler)
  .openapi(deleteIpamAggregatesIdIndexRoute, deleteIpamAggregatesIdIndexRouteHandler)
  .openapi(getIpamAggregatesIdIndexRoute, getIpamAggregatesIdIndexRouteHandler)
  .openapi(patchIpamAggregatesIdIndexRoute, patchIpamAggregatesIdIndexRouteHandler)
  .openapi(putIpamAggregatesIdIndexRoute, putIpamAggregatesIdIndexRouteHandler)
  .openapi(deleteIpamAsnsIndexRoute, deleteIpamAsnsIndexRouteHandler)
  .openapi(getIpamAsnsIndexRoute, getIpamAsnsIndexRouteHandler)
  .openapi(patchIpamAsnsIndexRoute, patchIpamAsnsIndexRouteHandler)
  .openapi(postIpamAsnsIndexRoute, postIpamAsnsIndexRouteHandler)
  .openapi(putIpamAsnsIndexRoute, putIpamAsnsIndexRouteHandler)
  .openapi(deleteIpamAsnsIdIndexRoute, deleteIpamAsnsIdIndexRouteHandler)
  .openapi(getIpamAsnsIdIndexRoute, getIpamAsnsIdIndexRouteHandler)
  .openapi(patchIpamAsnsIdIndexRoute, patchIpamAsnsIdIndexRouteHandler)
  .openapi(putIpamAsnsIdIndexRoute, putIpamAsnsIdIndexRouteHandler)
  .openapi(
    deleteIpamFhrpGroupAssignmentsIndexRoute,
    deleteIpamFhrpGroupAssignmentsIndexRouteHandler,
  )
  .openapi(getIpamFhrpGroupAssignmentsIndexRoute, getIpamFhrpGroupAssignmentsIndexRouteHandler)
  .openapi(patchIpamFhrpGroupAssignmentsIndexRoute, patchIpamFhrpGroupAssignmentsIndexRouteHandler)
  .openapi(postIpamFhrpGroupAssignmentsIndexRoute, postIpamFhrpGroupAssignmentsIndexRouteHandler)
  .openapi(putIpamFhrpGroupAssignmentsIndexRoute, putIpamFhrpGroupAssignmentsIndexRouteHandler)
  .openapi(
    deleteIpamFhrpGroupAssignmentsIdIndexRoute,
    deleteIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  )
  .openapi(getIpamFhrpGroupAssignmentsIdIndexRoute, getIpamFhrpGroupAssignmentsIdIndexRouteHandler)
  .openapi(
    patchIpamFhrpGroupAssignmentsIdIndexRoute,
    patchIpamFhrpGroupAssignmentsIdIndexRouteHandler,
  )
  .openapi(putIpamFhrpGroupAssignmentsIdIndexRoute, putIpamFhrpGroupAssignmentsIdIndexRouteHandler)
  .openapi(deleteIpamFhrpGroupsIndexRoute, deleteIpamFhrpGroupsIndexRouteHandler)
  .openapi(getIpamFhrpGroupsIndexRoute, getIpamFhrpGroupsIndexRouteHandler)
  .openapi(patchIpamFhrpGroupsIndexRoute, patchIpamFhrpGroupsIndexRouteHandler)
  .openapi(postIpamFhrpGroupsIndexRoute, postIpamFhrpGroupsIndexRouteHandler)
  .openapi(putIpamFhrpGroupsIndexRoute, putIpamFhrpGroupsIndexRouteHandler)
  .openapi(deleteIpamFhrpGroupsIdIndexRoute, deleteIpamFhrpGroupsIdIndexRouteHandler)
  .openapi(getIpamFhrpGroupsIdIndexRoute, getIpamFhrpGroupsIdIndexRouteHandler)
  .openapi(patchIpamFhrpGroupsIdIndexRoute, patchIpamFhrpGroupsIdIndexRouteHandler)
  .openapi(putIpamFhrpGroupsIdIndexRoute, putIpamFhrpGroupsIdIndexRouteHandler)
  .openapi(deleteIpamIpAddressesIndexRoute, deleteIpamIpAddressesIndexRouteHandler)
  .openapi(getIpamIpAddressesIndexRoute, getIpamIpAddressesIndexRouteHandler)
  .openapi(patchIpamIpAddressesIndexRoute, patchIpamIpAddressesIndexRouteHandler)
  .openapi(postIpamIpAddressesIndexRoute, postIpamIpAddressesIndexRouteHandler)
  .openapi(putIpamIpAddressesIndexRoute, putIpamIpAddressesIndexRouteHandler)
  .openapi(deleteIpamIpAddressesIdIndexRoute, deleteIpamIpAddressesIdIndexRouteHandler)
  .openapi(getIpamIpAddressesIdIndexRoute, getIpamIpAddressesIdIndexRouteHandler)
  .openapi(patchIpamIpAddressesIdIndexRoute, patchIpamIpAddressesIdIndexRouteHandler)
  .openapi(putIpamIpAddressesIdIndexRoute, putIpamIpAddressesIdIndexRouteHandler)
  .openapi(deleteIpamIpRangesIndexRoute, deleteIpamIpRangesIndexRouteHandler)
  .openapi(getIpamIpRangesIndexRoute, getIpamIpRangesIndexRouteHandler)
  .openapi(patchIpamIpRangesIndexRoute, patchIpamIpRangesIndexRouteHandler)
  .openapi(postIpamIpRangesIndexRoute, postIpamIpRangesIndexRouteHandler)
  .openapi(putIpamIpRangesIndexRoute, putIpamIpRangesIndexRouteHandler)
  .openapi(deleteIpamIpRangesIdIndexRoute, deleteIpamIpRangesIdIndexRouteHandler)
  .openapi(getIpamIpRangesIdIndexRoute, getIpamIpRangesIdIndexRouteHandler)
  .openapi(patchIpamIpRangesIdIndexRoute, patchIpamIpRangesIdIndexRouteHandler)
  .openapi(putIpamIpRangesIdIndexRoute, putIpamIpRangesIdIndexRouteHandler)
  .openapi(getIpamIpRangesIdAvailableIpsIndexRoute, getIpamIpRangesIdAvailableIpsIndexRouteHandler)
  .openapi(
    postIpamIpRangesIdAvailableIpsIndexRoute,
    postIpamIpRangesIdAvailableIpsIndexRouteHandler,
  )
  .openapi(deleteIpamL2vpnTerminationsIndexRoute, deleteIpamL2vpnTerminationsIndexRouteHandler)
  .openapi(getIpamL2vpnTerminationsIndexRoute, getIpamL2vpnTerminationsIndexRouteHandler)
  .openapi(patchIpamL2vpnTerminationsIndexRoute, patchIpamL2vpnTerminationsIndexRouteHandler)
  .openapi(postIpamL2vpnTerminationsIndexRoute, postIpamL2vpnTerminationsIndexRouteHandler)
  .openapi(putIpamL2vpnTerminationsIndexRoute, putIpamL2vpnTerminationsIndexRouteHandler)
  .openapi(deleteIpamL2vpnTerminationsIdIndexRoute, deleteIpamL2vpnTerminationsIdIndexRouteHandler)
  .openapi(getIpamL2vpnTerminationsIdIndexRoute, getIpamL2vpnTerminationsIdIndexRouteHandler)
  .openapi(patchIpamL2vpnTerminationsIdIndexRoute, patchIpamL2vpnTerminationsIdIndexRouteHandler)
  .openapi(putIpamL2vpnTerminationsIdIndexRoute, putIpamL2vpnTerminationsIdIndexRouteHandler)
  .openapi(deleteIpamL2vpnsIndexRoute, deleteIpamL2vpnsIndexRouteHandler)
  .openapi(getIpamL2vpnsIndexRoute, getIpamL2vpnsIndexRouteHandler)
  .openapi(patchIpamL2vpnsIndexRoute, patchIpamL2vpnsIndexRouteHandler)
  .openapi(postIpamL2vpnsIndexRoute, postIpamL2vpnsIndexRouteHandler)
  .openapi(putIpamL2vpnsIndexRoute, putIpamL2vpnsIndexRouteHandler)
  .openapi(deleteIpamL2vpnsIdIndexRoute, deleteIpamL2vpnsIdIndexRouteHandler)
  .openapi(getIpamL2vpnsIdIndexRoute, getIpamL2vpnsIdIndexRouteHandler)
  .openapi(patchIpamL2vpnsIdIndexRoute, patchIpamL2vpnsIdIndexRouteHandler)
  .openapi(putIpamL2vpnsIdIndexRoute, putIpamL2vpnsIdIndexRouteHandler)
  .openapi(deleteIpamPrefixesIndexRoute, deleteIpamPrefixesIndexRouteHandler)
  .openapi(getIpamPrefixesIndexRoute, getIpamPrefixesIndexRouteHandler)
  .openapi(patchIpamPrefixesIndexRoute, patchIpamPrefixesIndexRouteHandler)
  .openapi(postIpamPrefixesIndexRoute, postIpamPrefixesIndexRouteHandler)
  .openapi(putIpamPrefixesIndexRoute, putIpamPrefixesIndexRouteHandler)
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
  .openapi(deleteIpamRirsIndexRoute, deleteIpamRirsIndexRouteHandler)
  .openapi(getIpamRirsIndexRoute, getIpamRirsIndexRouteHandler)
  .openapi(patchIpamRirsIndexRoute, patchIpamRirsIndexRouteHandler)
  .openapi(postIpamRirsIndexRoute, postIpamRirsIndexRouteHandler)
  .openapi(putIpamRirsIndexRoute, putIpamRirsIndexRouteHandler)
  .openapi(deleteIpamRirsIdIndexRoute, deleteIpamRirsIdIndexRouteHandler)
  .openapi(getIpamRirsIdIndexRoute, getIpamRirsIdIndexRouteHandler)
  .openapi(patchIpamRirsIdIndexRoute, patchIpamRirsIdIndexRouteHandler)
  .openapi(putIpamRirsIdIndexRoute, putIpamRirsIdIndexRouteHandler)
  .openapi(deleteIpamRolesIndexRoute, deleteIpamRolesIndexRouteHandler)
  .openapi(getIpamRolesIndexRoute, getIpamRolesIndexRouteHandler)
  .openapi(patchIpamRolesIndexRoute, patchIpamRolesIndexRouteHandler)
  .openapi(postIpamRolesIndexRoute, postIpamRolesIndexRouteHandler)
  .openapi(putIpamRolesIndexRoute, putIpamRolesIndexRouteHandler)
  .openapi(deleteIpamRolesIdIndexRoute, deleteIpamRolesIdIndexRouteHandler)
  .openapi(getIpamRolesIdIndexRoute, getIpamRolesIdIndexRouteHandler)
  .openapi(patchIpamRolesIdIndexRoute, patchIpamRolesIdIndexRouteHandler)
  .openapi(putIpamRolesIdIndexRoute, putIpamRolesIdIndexRouteHandler)
  .openapi(deleteIpamRouteTargetsIndexRoute, deleteIpamRouteTargetsIndexRouteHandler)
  .openapi(getIpamRouteTargetsIndexRoute, getIpamRouteTargetsIndexRouteHandler)
  .openapi(patchIpamRouteTargetsIndexRoute, patchIpamRouteTargetsIndexRouteHandler)
  .openapi(postIpamRouteTargetsIndexRoute, postIpamRouteTargetsIndexRouteHandler)
  .openapi(putIpamRouteTargetsIndexRoute, putIpamRouteTargetsIndexRouteHandler)
  .openapi(deleteIpamRouteTargetsIdIndexRoute, deleteIpamRouteTargetsIdIndexRouteHandler)
  .openapi(getIpamRouteTargetsIdIndexRoute, getIpamRouteTargetsIdIndexRouteHandler)
  .openapi(patchIpamRouteTargetsIdIndexRoute, patchIpamRouteTargetsIdIndexRouteHandler)
  .openapi(putIpamRouteTargetsIdIndexRoute, putIpamRouteTargetsIdIndexRouteHandler)
  .openapi(deleteIpamServiceTemplatesIndexRoute, deleteIpamServiceTemplatesIndexRouteHandler)
  .openapi(getIpamServiceTemplatesIndexRoute, getIpamServiceTemplatesIndexRouteHandler)
  .openapi(patchIpamServiceTemplatesIndexRoute, patchIpamServiceTemplatesIndexRouteHandler)
  .openapi(postIpamServiceTemplatesIndexRoute, postIpamServiceTemplatesIndexRouteHandler)
  .openapi(putIpamServiceTemplatesIndexRoute, putIpamServiceTemplatesIndexRouteHandler)
  .openapi(deleteIpamServiceTemplatesIdIndexRoute, deleteIpamServiceTemplatesIdIndexRouteHandler)
  .openapi(getIpamServiceTemplatesIdIndexRoute, getIpamServiceTemplatesIdIndexRouteHandler)
  .openapi(patchIpamServiceTemplatesIdIndexRoute, patchIpamServiceTemplatesIdIndexRouteHandler)
  .openapi(putIpamServiceTemplatesIdIndexRoute, putIpamServiceTemplatesIdIndexRouteHandler)
  .openapi(deleteIpamServicesIndexRoute, deleteIpamServicesIndexRouteHandler)
  .openapi(getIpamServicesIndexRoute, getIpamServicesIndexRouteHandler)
  .openapi(patchIpamServicesIndexRoute, patchIpamServicesIndexRouteHandler)
  .openapi(postIpamServicesIndexRoute, postIpamServicesIndexRouteHandler)
  .openapi(putIpamServicesIndexRoute, putIpamServicesIndexRouteHandler)
  .openapi(deleteIpamServicesIdIndexRoute, deleteIpamServicesIdIndexRouteHandler)
  .openapi(getIpamServicesIdIndexRoute, getIpamServicesIdIndexRouteHandler)
  .openapi(patchIpamServicesIdIndexRoute, patchIpamServicesIdIndexRouteHandler)
  .openapi(putIpamServicesIdIndexRoute, putIpamServicesIdIndexRouteHandler)
  .openapi(deleteIpamVlanGroupsIndexRoute, deleteIpamVlanGroupsIndexRouteHandler)
  .openapi(getIpamVlanGroupsIndexRoute, getIpamVlanGroupsIndexRouteHandler)
  .openapi(patchIpamVlanGroupsIndexRoute, patchIpamVlanGroupsIndexRouteHandler)
  .openapi(postIpamVlanGroupsIndexRoute, postIpamVlanGroupsIndexRouteHandler)
  .openapi(putIpamVlanGroupsIndexRoute, putIpamVlanGroupsIndexRouteHandler)
  .openapi(deleteIpamVlanGroupsIdIndexRoute, deleteIpamVlanGroupsIdIndexRouteHandler)
  .openapi(getIpamVlanGroupsIdIndexRoute, getIpamVlanGroupsIdIndexRouteHandler)
  .openapi(patchIpamVlanGroupsIdIndexRoute, patchIpamVlanGroupsIdIndexRouteHandler)
  .openapi(putIpamVlanGroupsIdIndexRoute, putIpamVlanGroupsIdIndexRouteHandler)
  .openapi(
    getIpamVlanGroupsIdAvailableVlansIndexRoute,
    getIpamVlanGroupsIdAvailableVlansIndexRouteHandler,
  )
  .openapi(
    postIpamVlanGroupsIdAvailableVlansIndexRoute,
    postIpamVlanGroupsIdAvailableVlansIndexRouteHandler,
  )
  .openapi(deleteIpamVlansIndexRoute, deleteIpamVlansIndexRouteHandler)
  .openapi(getIpamVlansIndexRoute, getIpamVlansIndexRouteHandler)
  .openapi(patchIpamVlansIndexRoute, patchIpamVlansIndexRouteHandler)
  .openapi(postIpamVlansIndexRoute, postIpamVlansIndexRouteHandler)
  .openapi(putIpamVlansIndexRoute, putIpamVlansIndexRouteHandler)
  .openapi(deleteIpamVlansIdIndexRoute, deleteIpamVlansIdIndexRouteHandler)
  .openapi(getIpamVlansIdIndexRoute, getIpamVlansIdIndexRouteHandler)
  .openapi(patchIpamVlansIdIndexRoute, patchIpamVlansIdIndexRouteHandler)
  .openapi(putIpamVlansIdIndexRoute, putIpamVlansIdIndexRouteHandler)
  .openapi(deleteIpamVrfsIndexRoute, deleteIpamVrfsIndexRouteHandler)
  .openapi(getIpamVrfsIndexRoute, getIpamVrfsIndexRouteHandler)
  .openapi(patchIpamVrfsIndexRoute, patchIpamVrfsIndexRouteHandler)
  .openapi(postIpamVrfsIndexRoute, postIpamVrfsIndexRouteHandler)
  .openapi(putIpamVrfsIndexRoute, putIpamVrfsIndexRouteHandler)
  .openapi(deleteIpamVrfsIdIndexRoute, deleteIpamVrfsIdIndexRouteHandler)
  .openapi(getIpamVrfsIdIndexRoute, getIpamVrfsIdIndexRouteHandler)
  .openapi(patchIpamVrfsIdIndexRoute, patchIpamVrfsIdIndexRouteHandler)
  .openapi(putIpamVrfsIdIndexRoute, putIpamVrfsIdIndexRouteHandler)
  .openapi(getStatusIndexRoute, getStatusIndexRouteHandler)
  .openapi(
    deleteTenancyContactAssignmentsIndexRoute,
    deleteTenancyContactAssignmentsIndexRouteHandler,
  )
  .openapi(getTenancyContactAssignmentsIndexRoute, getTenancyContactAssignmentsIndexRouteHandler)
  .openapi(
    patchTenancyContactAssignmentsIndexRoute,
    patchTenancyContactAssignmentsIndexRouteHandler,
  )
  .openapi(postTenancyContactAssignmentsIndexRoute, postTenancyContactAssignmentsIndexRouteHandler)
  .openapi(putTenancyContactAssignmentsIndexRoute, putTenancyContactAssignmentsIndexRouteHandler)
  .openapi(
    deleteTenancyContactAssignmentsIdIndexRoute,
    deleteTenancyContactAssignmentsIdIndexRouteHandler,
  )
  .openapi(
    getTenancyContactAssignmentsIdIndexRoute,
    getTenancyContactAssignmentsIdIndexRouteHandler,
  )
  .openapi(
    patchTenancyContactAssignmentsIdIndexRoute,
    patchTenancyContactAssignmentsIdIndexRouteHandler,
  )
  .openapi(
    putTenancyContactAssignmentsIdIndexRoute,
    putTenancyContactAssignmentsIdIndexRouteHandler,
  )
  .openapi(deleteTenancyContactGroupsIndexRoute, deleteTenancyContactGroupsIndexRouteHandler)
  .openapi(getTenancyContactGroupsIndexRoute, getTenancyContactGroupsIndexRouteHandler)
  .openapi(patchTenancyContactGroupsIndexRoute, patchTenancyContactGroupsIndexRouteHandler)
  .openapi(postTenancyContactGroupsIndexRoute, postTenancyContactGroupsIndexRouteHandler)
  .openapi(putTenancyContactGroupsIndexRoute, putTenancyContactGroupsIndexRouteHandler)
  .openapi(deleteTenancyContactGroupsIdIndexRoute, deleteTenancyContactGroupsIdIndexRouteHandler)
  .openapi(getTenancyContactGroupsIdIndexRoute, getTenancyContactGroupsIdIndexRouteHandler)
  .openapi(patchTenancyContactGroupsIdIndexRoute, patchTenancyContactGroupsIdIndexRouteHandler)
  .openapi(putTenancyContactGroupsIdIndexRoute, putTenancyContactGroupsIdIndexRouteHandler)
  .openapi(deleteTenancyContactRolesIndexRoute, deleteTenancyContactRolesIndexRouteHandler)
  .openapi(getTenancyContactRolesIndexRoute, getTenancyContactRolesIndexRouteHandler)
  .openapi(patchTenancyContactRolesIndexRoute, patchTenancyContactRolesIndexRouteHandler)
  .openapi(postTenancyContactRolesIndexRoute, postTenancyContactRolesIndexRouteHandler)
  .openapi(putTenancyContactRolesIndexRoute, putTenancyContactRolesIndexRouteHandler)
  .openapi(deleteTenancyContactRolesIdIndexRoute, deleteTenancyContactRolesIdIndexRouteHandler)
  .openapi(getTenancyContactRolesIdIndexRoute, getTenancyContactRolesIdIndexRouteHandler)
  .openapi(patchTenancyContactRolesIdIndexRoute, patchTenancyContactRolesIdIndexRouteHandler)
  .openapi(putTenancyContactRolesIdIndexRoute, putTenancyContactRolesIdIndexRouteHandler)
  .openapi(deleteTenancyContactsIndexRoute, deleteTenancyContactsIndexRouteHandler)
  .openapi(getTenancyContactsIndexRoute, getTenancyContactsIndexRouteHandler)
  .openapi(patchTenancyContactsIndexRoute, patchTenancyContactsIndexRouteHandler)
  .openapi(postTenancyContactsIndexRoute, postTenancyContactsIndexRouteHandler)
  .openapi(putTenancyContactsIndexRoute, putTenancyContactsIndexRouteHandler)
  .openapi(deleteTenancyContactsIdIndexRoute, deleteTenancyContactsIdIndexRouteHandler)
  .openapi(getTenancyContactsIdIndexRoute, getTenancyContactsIdIndexRouteHandler)
  .openapi(patchTenancyContactsIdIndexRoute, patchTenancyContactsIdIndexRouteHandler)
  .openapi(putTenancyContactsIdIndexRoute, putTenancyContactsIdIndexRouteHandler)
  .openapi(deleteTenancyTenantGroupsIndexRoute, deleteTenancyTenantGroupsIndexRouteHandler)
  .openapi(getTenancyTenantGroupsIndexRoute, getTenancyTenantGroupsIndexRouteHandler)
  .openapi(patchTenancyTenantGroupsIndexRoute, patchTenancyTenantGroupsIndexRouteHandler)
  .openapi(postTenancyTenantGroupsIndexRoute, postTenancyTenantGroupsIndexRouteHandler)
  .openapi(putTenancyTenantGroupsIndexRoute, putTenancyTenantGroupsIndexRouteHandler)
  .openapi(deleteTenancyTenantGroupsIdIndexRoute, deleteTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(getTenancyTenantGroupsIdIndexRoute, getTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(patchTenancyTenantGroupsIdIndexRoute, patchTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(putTenancyTenantGroupsIdIndexRoute, putTenancyTenantGroupsIdIndexRouteHandler)
  .openapi(deleteTenancyTenantsIndexRoute, deleteTenancyTenantsIndexRouteHandler)
  .openapi(getTenancyTenantsIndexRoute, getTenancyTenantsIndexRouteHandler)
  .openapi(patchTenancyTenantsIndexRoute, patchTenancyTenantsIndexRouteHandler)
  .openapi(postTenancyTenantsIndexRoute, postTenancyTenantsIndexRouteHandler)
  .openapi(putTenancyTenantsIndexRoute, putTenancyTenantsIndexRouteHandler)
  .openapi(deleteTenancyTenantsIdIndexRoute, deleteTenancyTenantsIdIndexRouteHandler)
  .openapi(getTenancyTenantsIdIndexRoute, getTenancyTenantsIdIndexRouteHandler)
  .openapi(patchTenancyTenantsIdIndexRoute, patchTenancyTenantsIdIndexRouteHandler)
  .openapi(putTenancyTenantsIdIndexRoute, putTenancyTenantsIdIndexRouteHandler)
  .openapi(getUsersConfigIndexRoute, getUsersConfigIndexRouteHandler)
  .openapi(deleteUsersGroupsIndexRoute, deleteUsersGroupsIndexRouteHandler)
  .openapi(getUsersGroupsIndexRoute, getUsersGroupsIndexRouteHandler)
  .openapi(patchUsersGroupsIndexRoute, patchUsersGroupsIndexRouteHandler)
  .openapi(postUsersGroupsIndexRoute, postUsersGroupsIndexRouteHandler)
  .openapi(putUsersGroupsIndexRoute, putUsersGroupsIndexRouteHandler)
  .openapi(deleteUsersGroupsIdIndexRoute, deleteUsersGroupsIdIndexRouteHandler)
  .openapi(getUsersGroupsIdIndexRoute, getUsersGroupsIdIndexRouteHandler)
  .openapi(patchUsersGroupsIdIndexRoute, patchUsersGroupsIdIndexRouteHandler)
  .openapi(putUsersGroupsIdIndexRoute, putUsersGroupsIdIndexRouteHandler)
  .openapi(deleteUsersPermissionsIndexRoute, deleteUsersPermissionsIndexRouteHandler)
  .openapi(getUsersPermissionsIndexRoute, getUsersPermissionsIndexRouteHandler)
  .openapi(patchUsersPermissionsIndexRoute, patchUsersPermissionsIndexRouteHandler)
  .openapi(postUsersPermissionsIndexRoute, postUsersPermissionsIndexRouteHandler)
  .openapi(putUsersPermissionsIndexRoute, putUsersPermissionsIndexRouteHandler)
  .openapi(deleteUsersPermissionsIdIndexRoute, deleteUsersPermissionsIdIndexRouteHandler)
  .openapi(getUsersPermissionsIdIndexRoute, getUsersPermissionsIdIndexRouteHandler)
  .openapi(patchUsersPermissionsIdIndexRoute, patchUsersPermissionsIdIndexRouteHandler)
  .openapi(putUsersPermissionsIdIndexRoute, putUsersPermissionsIdIndexRouteHandler)
  .openapi(deleteUsersTokensIndexRoute, deleteUsersTokensIndexRouteHandler)
  .openapi(getUsersTokensIndexRoute, getUsersTokensIndexRouteHandler)
  .openapi(patchUsersTokensIndexRoute, patchUsersTokensIndexRouteHandler)
  .openapi(postUsersTokensIndexRoute, postUsersTokensIndexRouteHandler)
  .openapi(putUsersTokensIndexRoute, putUsersTokensIndexRouteHandler)
  .openapi(postUsersTokensProvisionIndexRoute, postUsersTokensProvisionIndexRouteHandler)
  .openapi(deleteUsersTokensIdIndexRoute, deleteUsersTokensIdIndexRouteHandler)
  .openapi(getUsersTokensIdIndexRoute, getUsersTokensIdIndexRouteHandler)
  .openapi(patchUsersTokensIdIndexRoute, patchUsersTokensIdIndexRouteHandler)
  .openapi(putUsersTokensIdIndexRoute, putUsersTokensIdIndexRouteHandler)
  .openapi(deleteUsersUsersIndexRoute, deleteUsersUsersIndexRouteHandler)
  .openapi(getUsersUsersIndexRoute, getUsersUsersIndexRouteHandler)
  .openapi(patchUsersUsersIndexRoute, patchUsersUsersIndexRouteHandler)
  .openapi(postUsersUsersIndexRoute, postUsersUsersIndexRouteHandler)
  .openapi(putUsersUsersIndexRoute, putUsersUsersIndexRouteHandler)
  .openapi(deleteUsersUsersIdIndexRoute, deleteUsersUsersIdIndexRouteHandler)
  .openapi(getUsersUsersIdIndexRoute, getUsersUsersIdIndexRouteHandler)
  .openapi(patchUsersUsersIdIndexRoute, patchUsersUsersIdIndexRouteHandler)
  .openapi(putUsersUsersIdIndexRoute, putUsersUsersIdIndexRouteHandler)
  .openapi(
    deleteVirtualizationClusterGroupsIndexRoute,
    deleteVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    getVirtualizationClusterGroupsIndexRoute,
    getVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    patchVirtualizationClusterGroupsIndexRoute,
    patchVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    postVirtualizationClusterGroupsIndexRoute,
    postVirtualizationClusterGroupsIndexRouteHandler,
  )
  .openapi(
    putVirtualizationClusterGroupsIndexRoute,
    putVirtualizationClusterGroupsIndexRouteHandler,
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
  .openapi(
    deleteVirtualizationClusterTypesIndexRoute,
    deleteVirtualizationClusterTypesIndexRouteHandler,
  )
  .openapi(getVirtualizationClusterTypesIndexRoute, getVirtualizationClusterTypesIndexRouteHandler)
  .openapi(
    patchVirtualizationClusterTypesIndexRoute,
    patchVirtualizationClusterTypesIndexRouteHandler,
  )
  .openapi(
    postVirtualizationClusterTypesIndexRoute,
    postVirtualizationClusterTypesIndexRouteHandler,
  )
  .openapi(putVirtualizationClusterTypesIndexRoute, putVirtualizationClusterTypesIndexRouteHandler)
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
  .openapi(deleteVirtualizationClustersIndexRoute, deleteVirtualizationClustersIndexRouteHandler)
  .openapi(getVirtualizationClustersIndexRoute, getVirtualizationClustersIndexRouteHandler)
  .openapi(patchVirtualizationClustersIndexRoute, patchVirtualizationClustersIndexRouteHandler)
  .openapi(postVirtualizationClustersIndexRoute, postVirtualizationClustersIndexRouteHandler)
  .openapi(putVirtualizationClustersIndexRoute, putVirtualizationClustersIndexRouteHandler)
  .openapi(
    deleteVirtualizationClustersIdIndexRoute,
    deleteVirtualizationClustersIdIndexRouteHandler,
  )
  .openapi(getVirtualizationClustersIdIndexRoute, getVirtualizationClustersIdIndexRouteHandler)
  .openapi(patchVirtualizationClustersIdIndexRoute, patchVirtualizationClustersIdIndexRouteHandler)
  .openapi(putVirtualizationClustersIdIndexRoute, putVirtualizationClustersIdIndexRouteHandler)
  .openapi(
    deleteVirtualizationInterfacesIndexRoute,
    deleteVirtualizationInterfacesIndexRouteHandler,
  )
  .openapi(getVirtualizationInterfacesIndexRoute, getVirtualizationInterfacesIndexRouteHandler)
  .openapi(patchVirtualizationInterfacesIndexRoute, patchVirtualizationInterfacesIndexRouteHandler)
  .openapi(postVirtualizationInterfacesIndexRoute, postVirtualizationInterfacesIndexRouteHandler)
  .openapi(putVirtualizationInterfacesIndexRoute, putVirtualizationInterfacesIndexRouteHandler)
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
    deleteVirtualizationVirtualMachinesIndexRoute,
    deleteVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    getVirtualizationVirtualMachinesIndexRoute,
    getVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    patchVirtualizationVirtualMachinesIndexRoute,
    patchVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    postVirtualizationVirtualMachinesIndexRoute,
    postVirtualizationVirtualMachinesIndexRouteHandler,
  )
  .openapi(
    putVirtualizationVirtualMachinesIndexRoute,
    putVirtualizationVirtualMachinesIndexRouteHandler,
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
  .openapi(
    deleteWirelessWirelessLanGroupsIndexRoute,
    deleteWirelessWirelessLanGroupsIndexRouteHandler,
  )
  .openapi(getWirelessWirelessLanGroupsIndexRoute, getWirelessWirelessLanGroupsIndexRouteHandler)
  .openapi(
    patchWirelessWirelessLanGroupsIndexRoute,
    patchWirelessWirelessLanGroupsIndexRouteHandler,
  )
  .openapi(postWirelessWirelessLanGroupsIndexRoute, postWirelessWirelessLanGroupsIndexRouteHandler)
  .openapi(putWirelessWirelessLanGroupsIndexRoute, putWirelessWirelessLanGroupsIndexRouteHandler)
  .openapi(
    deleteWirelessWirelessLanGroupsIdIndexRoute,
    deleteWirelessWirelessLanGroupsIdIndexRouteHandler,
  )
  .openapi(
    getWirelessWirelessLanGroupsIdIndexRoute,
    getWirelessWirelessLanGroupsIdIndexRouteHandler,
  )
  .openapi(
    patchWirelessWirelessLanGroupsIdIndexRoute,
    patchWirelessWirelessLanGroupsIdIndexRouteHandler,
  )
  .openapi(
    putWirelessWirelessLanGroupsIdIndexRoute,
    putWirelessWirelessLanGroupsIdIndexRouteHandler,
  )
  .openapi(deleteWirelessWirelessLansIndexRoute, deleteWirelessWirelessLansIndexRouteHandler)
  .openapi(getWirelessWirelessLansIndexRoute, getWirelessWirelessLansIndexRouteHandler)
  .openapi(patchWirelessWirelessLansIndexRoute, patchWirelessWirelessLansIndexRouteHandler)
  .openapi(postWirelessWirelessLansIndexRoute, postWirelessWirelessLansIndexRouteHandler)
  .openapi(putWirelessWirelessLansIndexRoute, putWirelessWirelessLansIndexRouteHandler)
  .openapi(deleteWirelessWirelessLansIdIndexRoute, deleteWirelessWirelessLansIdIndexRouteHandler)
  .openapi(getWirelessWirelessLansIdIndexRoute, getWirelessWirelessLansIdIndexRouteHandler)
  .openapi(patchWirelessWirelessLansIdIndexRoute, patchWirelessWirelessLansIdIndexRouteHandler)
  .openapi(putWirelessWirelessLansIdIndexRoute, putWirelessWirelessLansIdIndexRouteHandler)
  .openapi(deleteWirelessWirelessLinksIndexRoute, deleteWirelessWirelessLinksIndexRouteHandler)
  .openapi(getWirelessWirelessLinksIndexRoute, getWirelessWirelessLinksIndexRouteHandler)
  .openapi(patchWirelessWirelessLinksIndexRoute, patchWirelessWirelessLinksIndexRouteHandler)
  .openapi(postWirelessWirelessLinksIndexRoute, postWirelessWirelessLinksIndexRouteHandler)
  .openapi(putWirelessWirelessLinksIndexRoute, putWirelessWirelessLinksIndexRouteHandler)
  .openapi(deleteWirelessWirelessLinksIdIndexRoute, deleteWirelessWirelessLinksIdIndexRouteHandler)
  .openapi(getWirelessWirelessLinksIdIndexRoute, getWirelessWirelessLinksIdIndexRouteHandler)
  .openapi(patchWirelessWirelessLinksIdIndexRoute, patchWirelessWirelessLinksIdIndexRouteHandler)
  .openapi(putWirelessWirelessLinksIdIndexRoute, putWirelessWirelessLinksIdIndexRouteHandler)

export default app

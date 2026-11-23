import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAcceptAddressTransferHandler,
  actionAcceptReservedInstancesExchangeQuoteHandler,
  actionAcceptTransitGatewayMulticastDomainAssociationsHandler,
  actionAcceptTransitGatewayPeeringAttachmentHandler,
  actionAcceptTransitGatewayVpcAttachmentHandler,
  actionAcceptVpcEndpointConnectionsHandler,
  actionAcceptVpcPeeringConnectionHandler,
  actionAdvertiseByoipCidrHandler,
  actionAllocateAddressHandler,
  actionAllocateHostsHandler,
  actionAllocateIpamPoolCidrHandler,
  actionApplySecurityGroupsToClientVpnTargetNetworkHandler,
  actionAssignIpv6AddressesHandler,
  actionAssignPrivateIpAddressesHandler,
  actionAssignPrivateNatGatewayAddressHandler,
  actionAssociateAddressHandler,
  actionAssociateClientVpnTargetNetworkHandler,
  actionAssociateDhcpOptionsHandler,
  actionAssociateEnclaveCertificateIamRoleHandler,
  actionAssociateIamInstanceProfileHandler,
  actionAssociateInstanceEventWindowHandler,
  actionAssociateIpamResourceDiscoveryHandler,
  actionAssociateNatGatewayAddressHandler,
  actionAssociateRouteTableHandler,
  actionAssociateSubnetCidrBlockHandler,
  actionAssociateTransitGatewayMulticastDomainHandler,
  actionAssociateTransitGatewayPolicyTableHandler,
  actionAssociateTransitGatewayRouteTableHandler,
  actionAssociateTrunkInterfaceHandler,
  actionAssociateVpcCidrBlockHandler,
  actionAttachClassicLinkVpcHandler,
  actionAttachInternetGatewayHandler,
  actionAttachNetworkInterfaceHandler,
  actionAttachVerifiedAccessTrustProviderHandler,
  actionAttachVolumeHandler,
  actionAttachVpnGatewayHandler,
  actionAuthorizeClientVpnIngressHandler,
  actionAuthorizeSecurityGroupEgressHandler,
  actionAuthorizeSecurityGroupIngressHandler,
  actionBundleInstanceHandler,
  actionCancelBundleTaskHandler,
  actionCancelCapacityReservationFleetsHandler,
  actionCancelCapacityReservationHandler,
  actionCancelConversionTaskHandler,
  actionCancelExportTaskHandler,
  actionCancelImageLaunchPermissionHandler,
  actionCancelImportTaskHandler,
  actionCancelReservedInstancesListingHandler,
  actionCancelSpotFleetRequestsHandler,
  actionCancelSpotInstanceRequestsHandler,
  actionConfirmProductInstanceHandler,
  actionCopyFpgaImageHandler,
  actionCopyImageHandler,
  actionCopySnapshotHandler,
  actionCreateCapacityReservationFleetHandler,
  actionCreateCapacityReservationHandler,
  actionCreateCarrierGatewayHandler,
  actionCreateClientVpnEndpointHandler,
  actionCreateClientVpnRouteHandler,
  actionCreateCoipCidrHandler,
  actionCreateCoipPoolHandler,
  actionCreateCustomerGatewayHandler,
  actionCreateDefaultSubnetHandler,
  actionCreateDefaultVpcHandler,
  actionCreateDhcpOptionsHandler,
  actionCreateEgressOnlyInternetGatewayHandler,
  actionCreateFleetHandler,
  actionCreateFlowLogsHandler,
  actionCreateFpgaImageHandler,
  actionCreateImageHandler,
  actionCreateInstanceEventWindowHandler,
  actionCreateInstanceExportTaskHandler,
  actionCreateInternetGatewayHandler,
  actionCreateIpamHandler,
  actionCreateIpamPoolHandler,
  actionCreateIpamResourceDiscoveryHandler,
  actionCreateIpamScopeHandler,
  actionCreateKeyPairHandler,
  actionCreateLaunchTemplateHandler,
  actionCreateLaunchTemplateVersionHandler,
  actionCreateLocalGatewayRouteHandler,
  actionCreateLocalGatewayRouteTableHandler,
  actionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler,
  actionCreateLocalGatewayRouteTableVpcAssociationHandler,
  actionCreateManagedPrefixListHandler,
  actionCreateNatGatewayHandler,
  actionCreateNetworkAclEntryHandler,
  actionCreateNetworkAclHandler,
  actionCreateNetworkInsightsAccessScopeHandler,
  actionCreateNetworkInsightsPathHandler,
  actionCreateNetworkInterfaceHandler,
  actionCreateNetworkInterfacePermissionHandler,
  actionCreatePlacementGroupHandler,
  actionCreatePublicIpv4PoolHandler,
  actionCreateReplaceRootVolumeTaskHandler,
  actionCreateReservedInstancesListingHandler,
  actionCreateRestoreImageTaskHandler,
  actionCreateRouteHandler,
  actionCreateRouteTableHandler,
  actionCreateSecurityGroupHandler,
  actionCreateSnapshotHandler,
  actionCreateSnapshotsHandler,
  actionCreateSpotDatafeedSubscriptionHandler,
  actionCreateStoreImageTaskHandler,
  actionCreateSubnetCidrReservationHandler,
  actionCreateSubnetHandler,
  actionCreateTagsHandler,
  actionCreateTrafficMirrorFilterHandler,
  actionCreateTrafficMirrorFilterRuleHandler,
  actionCreateTrafficMirrorSessionHandler,
  actionCreateTrafficMirrorTargetHandler,
  actionCreateTransitGatewayConnectHandler,
  actionCreateTransitGatewayConnectPeerHandler,
  actionCreateTransitGatewayHandler,
  actionCreateTransitGatewayMulticastDomainHandler,
  actionCreateTransitGatewayPeeringAttachmentHandler,
  actionCreateTransitGatewayPolicyTableHandler,
  actionCreateTransitGatewayPrefixListReferenceHandler,
  actionCreateTransitGatewayRouteHandler,
  actionCreateTransitGatewayRouteTableAnnouncementHandler,
  actionCreateTransitGatewayRouteTableHandler,
  actionCreateTransitGatewayVpcAttachmentHandler,
  actionCreateVerifiedAccessEndpointHandler,
  actionCreateVerifiedAccessGroupHandler,
  actionCreateVerifiedAccessInstanceHandler,
  actionCreateVerifiedAccessTrustProviderHandler,
  actionCreateVolumeHandler,
  actionCreateVpcEndpointConnectionNotificationHandler,
  actionCreateVpcEndpointHandler,
  actionCreateVpcEndpointServiceConfigurationHandler,
  actionCreateVpcHandler,
  actionCreateVpcPeeringConnectionHandler,
  actionCreateVpnConnectionHandler,
  actionCreateVpnConnectionRouteHandler,
  actionCreateVpnGatewayHandler,
  actionDeleteCarrierGatewayHandler,
  actionDeleteClientVpnEndpointHandler,
  actionDeleteClientVpnRouteHandler,
  actionDeleteCoipCidrHandler,
  actionDeleteCoipPoolHandler,
  actionDeleteCustomerGatewayHandler,
  actionDeleteDhcpOptionsHandler,
  actionDeleteEgressOnlyInternetGatewayHandler,
  actionDeleteFleetsHandler,
  actionDeleteFlowLogsHandler,
  actionDeleteFpgaImageHandler,
  actionDeleteInstanceEventWindowHandler,
  actionDeleteInternetGatewayHandler,
  actionDeleteIpamHandler,
  actionDeleteIpamPoolHandler,
  actionDeleteIpamResourceDiscoveryHandler,
  actionDeleteIpamScopeHandler,
  actionDeleteKeyPairHandler,
  actionDeleteLaunchTemplateHandler,
  actionDeleteLaunchTemplateVersionsHandler,
  actionDeleteLocalGatewayRouteHandler,
  actionDeleteLocalGatewayRouteTableHandler,
  actionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler,
  actionDeleteLocalGatewayRouteTableVpcAssociationHandler,
  actionDeleteManagedPrefixListHandler,
  actionDeleteNatGatewayHandler,
  actionDeleteNetworkAclEntryHandler,
  actionDeleteNetworkAclHandler,
  actionDeleteNetworkInsightsAccessScopeAnalysisHandler,
  actionDeleteNetworkInsightsAccessScopeHandler,
  actionDeleteNetworkInsightsAnalysisHandler,
  actionDeleteNetworkInsightsPathHandler,
  actionDeleteNetworkInterfaceHandler,
  actionDeleteNetworkInterfacePermissionHandler,
  actionDeletePlacementGroupHandler,
  actionDeletePublicIpv4PoolHandler,
  actionDeleteQueuedReservedInstancesHandler,
  actionDeleteRouteHandler,
  actionDeleteRouteTableHandler,
  actionDeleteSecurityGroupHandler,
  actionDeleteSnapshotHandler,
  actionDeleteSpotDatafeedSubscriptionHandler,
  actionDeleteSubnetCidrReservationHandler,
  actionDeleteSubnetHandler,
  actionDeleteTagsHandler,
  actionDeleteTrafficMirrorFilterHandler,
  actionDeleteTrafficMirrorFilterRuleHandler,
  actionDeleteTrafficMirrorSessionHandler,
  actionDeleteTrafficMirrorTargetHandler,
  actionDeleteTransitGatewayConnectHandler,
  actionDeleteTransitGatewayConnectPeerHandler,
  actionDeleteTransitGatewayHandler,
  actionDeleteTransitGatewayMulticastDomainHandler,
  actionDeleteTransitGatewayPeeringAttachmentHandler,
  actionDeleteTransitGatewayPolicyTableHandler,
  actionDeleteTransitGatewayPrefixListReferenceHandler,
  actionDeleteTransitGatewayRouteHandler,
  actionDeleteTransitGatewayRouteTableAnnouncementHandler,
  actionDeleteTransitGatewayRouteTableHandler,
  actionDeleteTransitGatewayVpcAttachmentHandler,
  actionDeleteVerifiedAccessEndpointHandler,
  actionDeleteVerifiedAccessGroupHandler,
  actionDeleteVerifiedAccessInstanceHandler,
  actionDeleteVerifiedAccessTrustProviderHandler,
  actionDeleteVolumeHandler,
  actionDeleteVpcEndpointConnectionNotificationsHandler,
  actionDeleteVpcEndpointServiceConfigurationsHandler,
  actionDeleteVpcEndpointsHandler,
  actionDeleteVpcHandler,
  actionDeleteVpcPeeringConnectionHandler,
  actionDeleteVpnConnectionHandler,
  actionDeleteVpnConnectionRouteHandler,
  actionDeleteVpnGatewayHandler,
  actionDeprovisionByoipCidrHandler,
  actionDeprovisionIpamPoolCidrHandler,
  actionDeprovisionPublicIpv4PoolCidrHandler,
  actionDeregisterImageHandler,
  actionDeregisterInstanceEventNotificationAttributesHandler,
  actionDeregisterTransitGatewayMulticastGroupMembersHandler,
  actionDeregisterTransitGatewayMulticastGroupSourcesHandler,
  actionDescribeAccountAttributesHandler,
  actionDescribeAddressesAttributeHandler,
  actionDescribeAddressesHandler,
  actionDescribeAddressTransfersHandler,
  actionDescribeAggregateIdFormatHandler,
  actionDescribeAvailabilityZonesHandler,
  actionDescribeAwsNetworkPerformanceMetricSubscriptionsHandler,
  actionDescribeBundleTasksHandler,
  actionDescribeByoipCidrsHandler,
  actionDescribeCapacityReservationFleetsHandler,
  actionDescribeCapacityReservationsHandler,
  actionDescribeCarrierGatewaysHandler,
  actionDescribeClassicLinkInstancesHandler,
  actionDescribeClientVpnAuthorizationRulesHandler,
  actionDescribeClientVpnConnectionsHandler,
  actionDescribeClientVpnEndpointsHandler,
  actionDescribeClientVpnRoutesHandler,
  actionDescribeClientVpnTargetNetworksHandler,
  actionDescribeCoipPoolsHandler,
  actionDescribeConversionTasksHandler,
  actionDescribeCustomerGatewaysHandler,
  actionDescribeDhcpOptionsHandler,
  actionDescribeEgressOnlyInternetGatewaysHandler,
  actionDescribeElasticGpusHandler,
  actionDescribeExportImageTasksHandler,
  actionDescribeExportTasksHandler,
  actionDescribeFastLaunchImagesHandler,
  actionDescribeFastSnapshotRestoresHandler,
  actionDescribeFleetHistoryHandler,
  actionDescribeFleetInstancesHandler,
  actionDescribeFleetsHandler,
  actionDescribeFlowLogsHandler,
  actionDescribeFpgaImageAttributeHandler,
  actionDescribeFpgaImagesHandler,
  actionDescribeHostReservationOfferingsHandler,
  actionDescribeHostReservationsHandler,
  actionDescribeHostsHandler,
  actionDescribeIamInstanceProfileAssociationsHandler,
  actionDescribeIdentityIdFormatHandler,
  actionDescribeIdFormatHandler,
  actionDescribeImageAttributeHandler,
  actionDescribeImagesHandler,
  actionDescribeImportImageTasksHandler,
  actionDescribeImportSnapshotTasksHandler,
  actionDescribeInstanceAttributeHandler,
  actionDescribeInstanceCreditSpecificationsHandler,
  actionDescribeInstanceEventNotificationAttributesHandler,
  actionDescribeInstanceEventWindowsHandler,
  actionDescribeInstancesHandler,
  actionDescribeInstanceStatusHandler,
  actionDescribeInstanceTypeOfferingsHandler,
  actionDescribeInstanceTypesHandler,
  actionDescribeInternetGatewaysHandler,
  actionDescribeIpamPoolsHandler,
  actionDescribeIpamResourceDiscoveriesHandler,
  actionDescribeIpamResourceDiscoveryAssociationsHandler,
  actionDescribeIpamScopesHandler,
  actionDescribeIpamsHandler,
  actionDescribeIpv6PoolsHandler,
  actionDescribeKeyPairsHandler,
  actionDescribeLaunchTemplatesHandler,
  actionDescribeLaunchTemplateVersionsHandler,
  actionDescribeLocalGatewayRouteTablesHandler,
  actionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHandler,
  actionDescribeLocalGatewayRouteTableVpcAssociationsHandler,
  actionDescribeLocalGatewaysHandler,
  actionDescribeLocalGatewayVirtualInterfaceGroupsHandler,
  actionDescribeLocalGatewayVirtualInterfacesHandler,
  actionDescribeManagedPrefixListsHandler,
  actionDescribeMovingAddressesHandler,
  actionDescribeNatGatewaysHandler,
  actionDescribeNetworkAclsHandler,
  actionDescribeNetworkInsightsAccessScopeAnalysesHandler,
  actionDescribeNetworkInsightsAccessScopesHandler,
  actionDescribeNetworkInsightsAnalysesHandler,
  actionDescribeNetworkInsightsPathsHandler,
  actionDescribeNetworkInterfaceAttributeHandler,
  actionDescribeNetworkInterfacePermissionsHandler,
  actionDescribeNetworkInterfacesHandler,
  actionDescribePlacementGroupsHandler,
  actionDescribePrefixListsHandler,
  actionDescribePrincipalIdFormatHandler,
  actionDescribePublicIpv4PoolsHandler,
  actionDescribeRegionsHandler,
  actionDescribeReplaceRootVolumeTasksHandler,
  actionDescribeReservedInstancesHandler,
  actionDescribeReservedInstancesListingsHandler,
  actionDescribeReservedInstancesModificationsHandler,
  actionDescribeReservedInstancesOfferingsHandler,
  actionDescribeRouteTablesHandler,
  actionDescribeScheduledInstanceAvailabilityHandler,
  actionDescribeScheduledInstancesHandler,
  actionDescribeSecurityGroupReferencesHandler,
  actionDescribeSecurityGroupRulesHandler,
  actionDescribeSecurityGroupsHandler,
  actionDescribeSnapshotAttributeHandler,
  actionDescribeSnapshotsHandler,
  actionDescribeSnapshotTierStatusHandler,
  actionDescribeSpotDatafeedSubscriptionHandler,
  actionDescribeSpotFleetInstancesHandler,
  actionDescribeSpotFleetRequestHistoryHandler,
  actionDescribeSpotFleetRequestsHandler,
  actionDescribeSpotInstanceRequestsHandler,
  actionDescribeSpotPriceHistoryHandler,
  actionDescribeStaleSecurityGroupsHandler,
  actionDescribeStoreImageTasksHandler,
  actionDescribeSubnetsHandler,
  actionDescribeTagsHandler,
  actionDescribeTrafficMirrorFiltersHandler,
  actionDescribeTrafficMirrorSessionsHandler,
  actionDescribeTrafficMirrorTargetsHandler,
  actionDescribeTransitGatewayAttachmentsHandler,
  actionDescribeTransitGatewayConnectPeersHandler,
  actionDescribeTransitGatewayConnectsHandler,
  actionDescribeTransitGatewayMulticastDomainsHandler,
  actionDescribeTransitGatewayPeeringAttachmentsHandler,
  actionDescribeTransitGatewayPolicyTablesHandler,
  actionDescribeTransitGatewayRouteTableAnnouncementsHandler,
  actionDescribeTransitGatewayRouteTablesHandler,
  actionDescribeTransitGatewaysHandler,
  actionDescribeTransitGatewayVpcAttachmentsHandler,
  actionDescribeTrunkInterfaceAssociationsHandler,
  actionDescribeVerifiedAccessEndpointsHandler,
  actionDescribeVerifiedAccessGroupsHandler,
  actionDescribeVerifiedAccessInstanceLoggingConfigurationsHandler,
  actionDescribeVerifiedAccessInstancesHandler,
  actionDescribeVerifiedAccessTrustProvidersHandler,
  actionDescribeVolumeAttributeHandler,
  actionDescribeVolumesHandler,
  actionDescribeVolumesModificationsHandler,
  actionDescribeVolumeStatusHandler,
  actionDescribeVpcAttributeHandler,
  actionDescribeVpcClassicLinkDnsSupportHandler,
  actionDescribeVpcClassicLinkHandler,
  actionDescribeVpcEndpointConnectionNotificationsHandler,
  actionDescribeVpcEndpointConnectionsHandler,
  actionDescribeVpcEndpointServiceConfigurationsHandler,
  actionDescribeVpcEndpointServicePermissionsHandler,
  actionDescribeVpcEndpointServicesHandler,
  actionDescribeVpcEndpointsHandler,
  actionDescribeVpcPeeringConnectionsHandler,
  actionDescribeVpcsHandler,
  actionDescribeVpnConnectionsHandler,
  actionDescribeVpnGatewaysHandler,
  actionDetachClassicLinkVpcHandler,
  actionDetachInternetGatewayHandler,
  actionDetachNetworkInterfaceHandler,
  actionDetachVerifiedAccessTrustProviderHandler,
  actionDetachVolumeHandler,
  actionDetachVpnGatewayHandler,
  actionDisableAddressTransferHandler,
  actionDisableAwsNetworkPerformanceMetricSubscriptionHandler,
  actionDisableEbsEncryptionByDefaultHandler,
  actionDisableFastLaunchHandler,
  actionDisableFastSnapshotRestoresHandler,
  actionDisableImageDeprecationHandler,
  actionDisableIpamOrganizationAdminAccountHandler,
  actionDisableSerialConsoleAccessHandler,
  actionDisableTransitGatewayRouteTablePropagationHandler,
  actionDisableVgwRoutePropagationHandler,
  actionDisableVpcClassicLinkDnsSupportHandler,
  actionDisableVpcClassicLinkHandler,
  actionDisassociateAddressHandler,
  actionDisassociateClientVpnTargetNetworkHandler,
  actionDisassociateEnclaveCertificateIamRoleHandler,
  actionDisassociateIamInstanceProfileHandler,
  actionDisassociateInstanceEventWindowHandler,
  actionDisassociateIpamResourceDiscoveryHandler,
  actionDisassociateNatGatewayAddressHandler,
  actionDisassociateRouteTableHandler,
  actionDisassociateSubnetCidrBlockHandler,
  actionDisassociateTransitGatewayMulticastDomainHandler,
  actionDisassociateTransitGatewayPolicyTableHandler,
  actionDisassociateTransitGatewayRouteTableHandler,
  actionDisassociateTrunkInterfaceHandler,
  actionDisassociateVpcCidrBlockHandler,
  actionEnableAddressTransferHandler,
  actionEnableAwsNetworkPerformanceMetricSubscriptionHandler,
  actionEnableEbsEncryptionByDefaultHandler,
  actionEnableFastLaunchHandler,
  actionEnableFastSnapshotRestoresHandler,
  actionEnableImageDeprecationHandler,
  actionEnableIpamOrganizationAdminAccountHandler,
  actionEnableReachabilityAnalyzerOrganizationSharingHandler,
  actionEnableSerialConsoleAccessHandler,
  actionEnableTransitGatewayRouteTablePropagationHandler,
  actionEnableVgwRoutePropagationHandler,
  actionEnableVolumeIoHandler,
  actionEnableVpcClassicLinkDnsSupportHandler,
  actionEnableVpcClassicLinkHandler,
  actionExportClientVpnClientCertificateRevocationListHandler,
  actionExportClientVpnClientConfigurationHandler,
  actionExportImageHandler,
  actionExportTransitGatewayRoutesHandler,
  actionGetAssociatedEnclaveCertificateIamRolesHandler,
  actionGetAssociatedIpv6PoolCidrsHandler,
  actionGetAwsNetworkPerformanceDataHandler,
  actionGetCapacityReservationUsageHandler,
  actionGetCoipPoolUsageHandler,
  actionGetConsoleOutputHandler,
  actionGetConsoleScreenshotHandler,
  actionGetDefaultCreditSpecificationHandler,
  actionGetEbsDefaultKmsKeyIdHandler,
  actionGetEbsEncryptionByDefaultHandler,
  actionGetFlowLogsIntegrationTemplateHandler,
  actionGetGroupsForCapacityReservationHandler,
  actionGetHostReservationPurchasePreviewHandler,
  actionGetInstanceTypesFromInstanceRequirementsHandler,
  actionGetInstanceUefiDataHandler,
  actionGetIpamAddressHistoryHandler,
  actionGetIpamDiscoveredAccountsHandler,
  actionGetIpamDiscoveredResourceCidrsHandler,
  actionGetIpamPoolAllocationsHandler,
  actionGetIpamPoolCidrsHandler,
  actionGetIpamResourceCidrsHandler,
  actionGetLaunchTemplateDataHandler,
  actionGetManagedPrefixListAssociationsHandler,
  actionGetManagedPrefixListEntriesHandler,
  actionGetNetworkInsightsAccessScopeAnalysisFindingsHandler,
  actionGetNetworkInsightsAccessScopeContentHandler,
  actionGetPasswordDataHandler,
  actionGetReservedInstancesExchangeQuoteHandler,
  actionGetSerialConsoleAccessStatusHandler,
  actionGetSpotPlacementScoresHandler,
  actionGetSubnetCidrReservationsHandler,
  actionGetTransitGatewayAttachmentPropagationsHandler,
  actionGetTransitGatewayMulticastDomainAssociationsHandler,
  actionGetTransitGatewayPolicyTableAssociationsHandler,
  actionGetTransitGatewayPolicyTableEntriesHandler,
  actionGetTransitGatewayPrefixListReferencesHandler,
  actionGetTransitGatewayRouteTableAssociationsHandler,
  actionGetTransitGatewayRouteTablePropagationsHandler,
  actionGetVerifiedAccessEndpointPolicyHandler,
  actionGetVerifiedAccessGroupPolicyHandler,
  actionGetVpnConnectionDeviceSampleConfigurationHandler,
  actionGetVpnConnectionDeviceTypesHandler,
  actionGetVpnTunnelReplacementStatusHandler,
  actionImportClientVpnClientCertificateRevocationListHandler,
  actionImportImageHandler,
  actionImportInstanceHandler,
  actionImportKeyPairHandler,
  actionImportSnapshotHandler,
  actionImportVolumeHandler,
  actionListImagesInRecycleBinHandler,
  actionListSnapshotsInRecycleBinHandler,
  actionModifyAddressAttributeHandler,
  actionModifyAvailabilityZoneGroupHandler,
  actionModifyCapacityReservationFleetHandler,
  actionModifyCapacityReservationHandler,
  actionModifyClientVpnEndpointHandler,
  actionModifyDefaultCreditSpecificationHandler,
  actionModifyEbsDefaultKmsKeyIdHandler,
  actionModifyFleetHandler,
  actionModifyFpgaImageAttributeHandler,
  actionModifyHostsHandler,
  actionModifyIdentityIdFormatHandler,
  actionModifyIdFormatHandler,
  actionModifyImageAttributeHandler,
  actionModifyInstanceAttributeHandler,
  actionModifyInstanceCapacityReservationAttributesHandler,
  actionModifyInstanceCreditSpecificationHandler,
  actionModifyInstanceEventStartTimeHandler,
  actionModifyInstanceEventWindowHandler,
  actionModifyInstanceMaintenanceOptionsHandler,
  actionModifyInstanceMetadataOptionsHandler,
  actionModifyInstancePlacementHandler,
  actionModifyIpamHandler,
  actionModifyIpamPoolHandler,
  actionModifyIpamResourceCidrHandler,
  actionModifyIpamResourceDiscoveryHandler,
  actionModifyIpamScopeHandler,
  actionModifyLaunchTemplateHandler,
  actionModifyLocalGatewayRouteHandler,
  actionModifyManagedPrefixListHandler,
  actionModifyNetworkInterfaceAttributeHandler,
  actionModifyPrivateDnsNameOptionsHandler,
  actionModifyReservedInstancesHandler,
  actionModifySecurityGroupRulesHandler,
  actionModifySnapshotAttributeHandler,
  actionModifySnapshotTierHandler,
  actionModifySpotFleetRequestHandler,
  actionModifySubnetAttributeHandler,
  actionModifyTrafficMirrorFilterNetworkServicesHandler,
  actionModifyTrafficMirrorFilterRuleHandler,
  actionModifyTrafficMirrorSessionHandler,
  actionModifyTransitGatewayHandler,
  actionModifyTransitGatewayPrefixListReferenceHandler,
  actionModifyTransitGatewayVpcAttachmentHandler,
  actionModifyVerifiedAccessEndpointHandler,
  actionModifyVerifiedAccessEndpointPolicyHandler,
  actionModifyVerifiedAccessGroupHandler,
  actionModifyVerifiedAccessGroupPolicyHandler,
  actionModifyVerifiedAccessInstanceHandler,
  actionModifyVerifiedAccessInstanceLoggingConfigurationHandler,
  actionModifyVerifiedAccessTrustProviderHandler,
  actionModifyVolumeAttributeHandler,
  actionModifyVolumeHandler,
  actionModifyVpcAttributeHandler,
  actionModifyVpcEndpointConnectionNotificationHandler,
  actionModifyVpcEndpointHandler,
  actionModifyVpcEndpointServiceConfigurationHandler,
  actionModifyVpcEndpointServicePayerResponsibilityHandler,
  actionModifyVpcEndpointServicePermissionsHandler,
  actionModifyVpcPeeringConnectionOptionsHandler,
  actionModifyVpcTenancyHandler,
  actionModifyVpnConnectionHandler,
  actionModifyVpnConnectionOptionsHandler,
  actionModifyVpnTunnelCertificateHandler,
  actionModifyVpnTunnelOptionsHandler,
  actionMonitorInstancesHandler,
  actionMoveAddressToVpcHandler,
  actionMoveByoipCidrToIpamHandler,
  actionProvisionByoipCidrHandler,
  actionProvisionIpamPoolCidrHandler,
  actionProvisionPublicIpv4PoolCidrHandler,
  actionPurchaseHostReservationHandler,
  actionPurchaseReservedInstancesOfferingHandler,
  actionPurchaseScheduledInstancesHandler,
  actionRebootInstancesHandler,
  actionRegisterImageHandler,
  actionRegisterInstanceEventNotificationAttributesHandler,
  actionRegisterTransitGatewayMulticastGroupMembersHandler,
  actionRegisterTransitGatewayMulticastGroupSourcesHandler,
  actionRejectTransitGatewayMulticastDomainAssociationsHandler,
  actionRejectTransitGatewayPeeringAttachmentHandler,
  actionRejectTransitGatewayVpcAttachmentHandler,
  actionRejectVpcEndpointConnectionsHandler,
  actionRejectVpcPeeringConnectionHandler,
  actionReleaseAddressHandler,
  actionReleaseHostsHandler,
  actionReleaseIpamPoolAllocationHandler,
  actionReplaceIamInstanceProfileAssociationHandler,
  actionReplaceNetworkAclAssociationHandler,
  actionReplaceNetworkAclEntryHandler,
  actionReplaceRouteHandler,
  actionReplaceRouteTableAssociationHandler,
  actionReplaceTransitGatewayRouteHandler,
  actionReplaceVpnTunnelHandler,
  actionReportInstanceStatusHandler,
  actionRequestSpotFleetHandler,
  actionRequestSpotInstancesHandler,
  actionResetAddressAttributeHandler,
  actionResetEbsDefaultKmsKeyIdHandler,
  actionResetFpgaImageAttributeHandler,
  actionResetImageAttributeHandler,
  actionResetInstanceAttributeHandler,
  actionResetNetworkInterfaceAttributeHandler,
  actionResetSnapshotAttributeHandler,
  actionRestoreAddressToClassicHandler,
  actionRestoreImageFromRecycleBinHandler,
  actionRestoreManagedPrefixListVersionHandler,
  actionRestoreSnapshotFromRecycleBinHandler,
  actionRestoreSnapshotTierHandler,
  actionRevokeClientVpnIngressHandler,
  actionRevokeSecurityGroupEgressHandler,
  actionRevokeSecurityGroupIngressHandler,
  actionRunInstancesHandler,
  actionRunScheduledInstancesHandler,
  actionSearchLocalGatewayRoutesHandler,
  actionSearchTransitGatewayMulticastGroupsHandler,
  actionSearchTransitGatewayRoutesHandler,
  actionSendDiagnosticInterruptHandler,
  actionStartInstancesHandler,
  actionStartNetworkInsightsAccessScopeAnalysisHandler,
  actionStartNetworkInsightsAnalysisHandler,
  actionStartVpcEndpointServicePrivateDnsVerificationHandler,
  actionStopInstancesHandler,
  actionTerminateClientVpnConnectionsHandler,
  actionTerminateInstancesHandler,
  actionUnassignIpv6AddressesHandler,
  actionUnassignPrivateIpAddressesHandler,
  actionUnassignPrivateNatGatewayAddressHandler,
  actionUnmonitorInstancesHandler,
  actionUpdateSecurityGroupRuleDescriptionsEgressHandler,
  actionUpdateSecurityGroupRuleDescriptionsIngressHandler,
  actionWithdrawByoipCidrHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAcceptAddressTransferHandler)
  .route('/', actionAcceptReservedInstancesExchangeQuoteHandler)
  .route('/', actionAcceptTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', actionAcceptTransitGatewayPeeringAttachmentHandler)
  .route('/', actionAcceptTransitGatewayVpcAttachmentHandler)
  .route('/', actionAcceptVpcEndpointConnectionsHandler)
  .route('/', actionAcceptVpcPeeringConnectionHandler)
  .route('/', actionAdvertiseByoipCidrHandler)
  .route('/', actionAllocateAddressHandler)
  .route('/', actionAllocateHostsHandler)
  .route('/', actionAllocateIpamPoolCidrHandler)
  .route('/', actionApplySecurityGroupsToClientVpnTargetNetworkHandler)
  .route('/', actionAssignIpv6AddressesHandler)
  .route('/', actionAssignPrivateIpAddressesHandler)
  .route('/', actionAssignPrivateNatGatewayAddressHandler)
  .route('/', actionAssociateAddressHandler)
  .route('/', actionAssociateClientVpnTargetNetworkHandler)
  .route('/', actionAssociateDhcpOptionsHandler)
  .route('/', actionAssociateEnclaveCertificateIamRoleHandler)
  .route('/', actionAssociateIamInstanceProfileHandler)
  .route('/', actionAssociateInstanceEventWindowHandler)
  .route('/', actionAssociateIpamResourceDiscoveryHandler)
  .route('/', actionAssociateNatGatewayAddressHandler)
  .route('/', actionAssociateRouteTableHandler)
  .route('/', actionAssociateSubnetCidrBlockHandler)
  .route('/', actionAssociateTransitGatewayMulticastDomainHandler)
  .route('/', actionAssociateTransitGatewayPolicyTableHandler)
  .route('/', actionAssociateTransitGatewayRouteTableHandler)
  .route('/', actionAssociateTrunkInterfaceHandler)
  .route('/', actionAssociateVpcCidrBlockHandler)
  .route('/', actionAttachClassicLinkVpcHandler)
  .route('/', actionAttachInternetGatewayHandler)
  .route('/', actionAttachNetworkInterfaceHandler)
  .route('/', actionAttachVerifiedAccessTrustProviderHandler)
  .route('/', actionAttachVolumeHandler)
  .route('/', actionAttachVpnGatewayHandler)
  .route('/', actionAuthorizeClientVpnIngressHandler)
  .route('/', actionAuthorizeSecurityGroupEgressHandler)
  .route('/', actionAuthorizeSecurityGroupIngressHandler)
  .route('/', actionBundleInstanceHandler)
  .route('/', actionCancelBundleTaskHandler)
  .route('/', actionCancelCapacityReservationHandler)
  .route('/', actionCancelCapacityReservationFleetsHandler)
  .route('/', actionCancelConversionTaskHandler)
  .route('/', actionCancelExportTaskHandler)
  .route('/', actionCancelImageLaunchPermissionHandler)
  .route('/', actionCancelImportTaskHandler)
  .route('/', actionCancelReservedInstancesListingHandler)
  .route('/', actionCancelSpotFleetRequestsHandler)
  .route('/', actionCancelSpotInstanceRequestsHandler)
  .route('/', actionConfirmProductInstanceHandler)
  .route('/', actionCopyFpgaImageHandler)
  .route('/', actionCopyImageHandler)
  .route('/', actionCopySnapshotHandler)
  .route('/', actionCreateCapacityReservationHandler)
  .route('/', actionCreateCapacityReservationFleetHandler)
  .route('/', actionCreateCarrierGatewayHandler)
  .route('/', actionCreateClientVpnEndpointHandler)
  .route('/', actionCreateClientVpnRouteHandler)
  .route('/', actionCreateCoipCidrHandler)
  .route('/', actionCreateCoipPoolHandler)
  .route('/', actionCreateCustomerGatewayHandler)
  .route('/', actionCreateDefaultSubnetHandler)
  .route('/', actionCreateDefaultVpcHandler)
  .route('/', actionCreateDhcpOptionsHandler)
  .route('/', actionCreateEgressOnlyInternetGatewayHandler)
  .route('/', actionCreateFleetHandler)
  .route('/', actionCreateFlowLogsHandler)
  .route('/', actionCreateFpgaImageHandler)
  .route('/', actionCreateImageHandler)
  .route('/', actionCreateInstanceEventWindowHandler)
  .route('/', actionCreateInstanceExportTaskHandler)
  .route('/', actionCreateInternetGatewayHandler)
  .route('/', actionCreateIpamHandler)
  .route('/', actionCreateIpamPoolHandler)
  .route('/', actionCreateIpamResourceDiscoveryHandler)
  .route('/', actionCreateIpamScopeHandler)
  .route('/', actionCreateKeyPairHandler)
  .route('/', actionCreateLaunchTemplateHandler)
  .route('/', actionCreateLaunchTemplateVersionHandler)
  .route('/', actionCreateLocalGatewayRouteHandler)
  .route('/', actionCreateLocalGatewayRouteTableHandler)
  .route('/', actionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler)
  .route('/', actionCreateLocalGatewayRouteTableVpcAssociationHandler)
  .route('/', actionCreateManagedPrefixListHandler)
  .route('/', actionCreateNatGatewayHandler)
  .route('/', actionCreateNetworkAclHandler)
  .route('/', actionCreateNetworkAclEntryHandler)
  .route('/', actionCreateNetworkInsightsAccessScopeHandler)
  .route('/', actionCreateNetworkInsightsPathHandler)
  .route('/', actionCreateNetworkInterfaceHandler)
  .route('/', actionCreateNetworkInterfacePermissionHandler)
  .route('/', actionCreatePlacementGroupHandler)
  .route('/', actionCreatePublicIpv4PoolHandler)
  .route('/', actionCreateReplaceRootVolumeTaskHandler)
  .route('/', actionCreateReservedInstancesListingHandler)
  .route('/', actionCreateRestoreImageTaskHandler)
  .route('/', actionCreateRouteHandler)
  .route('/', actionCreateRouteTableHandler)
  .route('/', actionCreateSecurityGroupHandler)
  .route('/', actionCreateSnapshotHandler)
  .route('/', actionCreateSnapshotsHandler)
  .route('/', actionCreateSpotDatafeedSubscriptionHandler)
  .route('/', actionCreateStoreImageTaskHandler)
  .route('/', actionCreateSubnetHandler)
  .route('/', actionCreateSubnetCidrReservationHandler)
  .route('/', actionCreateTagsHandler)
  .route('/', actionCreateTrafficMirrorFilterHandler)
  .route('/', actionCreateTrafficMirrorFilterRuleHandler)
  .route('/', actionCreateTrafficMirrorSessionHandler)
  .route('/', actionCreateTrafficMirrorTargetHandler)
  .route('/', actionCreateTransitGatewayHandler)
  .route('/', actionCreateTransitGatewayConnectHandler)
  .route('/', actionCreateTransitGatewayConnectPeerHandler)
  .route('/', actionCreateTransitGatewayMulticastDomainHandler)
  .route('/', actionCreateTransitGatewayPeeringAttachmentHandler)
  .route('/', actionCreateTransitGatewayPolicyTableHandler)
  .route('/', actionCreateTransitGatewayPrefixListReferenceHandler)
  .route('/', actionCreateTransitGatewayRouteHandler)
  .route('/', actionCreateTransitGatewayRouteTableHandler)
  .route('/', actionCreateTransitGatewayRouteTableAnnouncementHandler)
  .route('/', actionCreateTransitGatewayVpcAttachmentHandler)
  .route('/', actionCreateVerifiedAccessEndpointHandler)
  .route('/', actionCreateVerifiedAccessGroupHandler)
  .route('/', actionCreateVerifiedAccessInstanceHandler)
  .route('/', actionCreateVerifiedAccessTrustProviderHandler)
  .route('/', actionCreateVolumeHandler)
  .route('/', actionCreateVpcHandler)
  .route('/', actionCreateVpcEndpointHandler)
  .route('/', actionCreateVpcEndpointConnectionNotificationHandler)
  .route('/', actionCreateVpcEndpointServiceConfigurationHandler)
  .route('/', actionCreateVpcPeeringConnectionHandler)
  .route('/', actionCreateVpnConnectionHandler)
  .route('/', actionCreateVpnConnectionRouteHandler)
  .route('/', actionCreateVpnGatewayHandler)
  .route('/', actionDeleteCarrierGatewayHandler)
  .route('/', actionDeleteClientVpnEndpointHandler)
  .route('/', actionDeleteClientVpnRouteHandler)
  .route('/', actionDeleteCoipCidrHandler)
  .route('/', actionDeleteCoipPoolHandler)
  .route('/', actionDeleteCustomerGatewayHandler)
  .route('/', actionDeleteDhcpOptionsHandler)
  .route('/', actionDeleteEgressOnlyInternetGatewayHandler)
  .route('/', actionDeleteFleetsHandler)
  .route('/', actionDeleteFlowLogsHandler)
  .route('/', actionDeleteFpgaImageHandler)
  .route('/', actionDeleteInstanceEventWindowHandler)
  .route('/', actionDeleteInternetGatewayHandler)
  .route('/', actionDeleteIpamHandler)
  .route('/', actionDeleteIpamPoolHandler)
  .route('/', actionDeleteIpamResourceDiscoveryHandler)
  .route('/', actionDeleteIpamScopeHandler)
  .route('/', actionDeleteKeyPairHandler)
  .route('/', actionDeleteLaunchTemplateHandler)
  .route('/', actionDeleteLaunchTemplateVersionsHandler)
  .route('/', actionDeleteLocalGatewayRouteHandler)
  .route('/', actionDeleteLocalGatewayRouteTableHandler)
  .route('/', actionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler)
  .route('/', actionDeleteLocalGatewayRouteTableVpcAssociationHandler)
  .route('/', actionDeleteManagedPrefixListHandler)
  .route('/', actionDeleteNatGatewayHandler)
  .route('/', actionDeleteNetworkAclHandler)
  .route('/', actionDeleteNetworkAclEntryHandler)
  .route('/', actionDeleteNetworkInsightsAccessScopeHandler)
  .route('/', actionDeleteNetworkInsightsAccessScopeAnalysisHandler)
  .route('/', actionDeleteNetworkInsightsAnalysisHandler)
  .route('/', actionDeleteNetworkInsightsPathHandler)
  .route('/', actionDeleteNetworkInterfaceHandler)
  .route('/', actionDeleteNetworkInterfacePermissionHandler)
  .route('/', actionDeletePlacementGroupHandler)
  .route('/', actionDeletePublicIpv4PoolHandler)
  .route('/', actionDeleteQueuedReservedInstancesHandler)
  .route('/', actionDeleteRouteHandler)
  .route('/', actionDeleteRouteTableHandler)
  .route('/', actionDeleteSecurityGroupHandler)
  .route('/', actionDeleteSnapshotHandler)
  .route('/', actionDeleteSpotDatafeedSubscriptionHandler)
  .route('/', actionDeleteSubnetHandler)
  .route('/', actionDeleteSubnetCidrReservationHandler)
  .route('/', actionDeleteTagsHandler)
  .route('/', actionDeleteTrafficMirrorFilterHandler)
  .route('/', actionDeleteTrafficMirrorFilterRuleHandler)
  .route('/', actionDeleteTrafficMirrorSessionHandler)
  .route('/', actionDeleteTrafficMirrorTargetHandler)
  .route('/', actionDeleteTransitGatewayHandler)
  .route('/', actionDeleteTransitGatewayConnectHandler)
  .route('/', actionDeleteTransitGatewayConnectPeerHandler)
  .route('/', actionDeleteTransitGatewayMulticastDomainHandler)
  .route('/', actionDeleteTransitGatewayPeeringAttachmentHandler)
  .route('/', actionDeleteTransitGatewayPolicyTableHandler)
  .route('/', actionDeleteTransitGatewayPrefixListReferenceHandler)
  .route('/', actionDeleteTransitGatewayRouteHandler)
  .route('/', actionDeleteTransitGatewayRouteTableHandler)
  .route('/', actionDeleteTransitGatewayRouteTableAnnouncementHandler)
  .route('/', actionDeleteTransitGatewayVpcAttachmentHandler)
  .route('/', actionDeleteVerifiedAccessEndpointHandler)
  .route('/', actionDeleteVerifiedAccessGroupHandler)
  .route('/', actionDeleteVerifiedAccessInstanceHandler)
  .route('/', actionDeleteVerifiedAccessTrustProviderHandler)
  .route('/', actionDeleteVolumeHandler)
  .route('/', actionDeleteVpcHandler)
  .route('/', actionDeleteVpcEndpointConnectionNotificationsHandler)
  .route('/', actionDeleteVpcEndpointServiceConfigurationsHandler)
  .route('/', actionDeleteVpcEndpointsHandler)
  .route('/', actionDeleteVpcPeeringConnectionHandler)
  .route('/', actionDeleteVpnConnectionHandler)
  .route('/', actionDeleteVpnConnectionRouteHandler)
  .route('/', actionDeleteVpnGatewayHandler)
  .route('/', actionDeprovisionByoipCidrHandler)
  .route('/', actionDeprovisionIpamPoolCidrHandler)
  .route('/', actionDeprovisionPublicIpv4PoolCidrHandler)
  .route('/', actionDeregisterImageHandler)
  .route('/', actionDeregisterInstanceEventNotificationAttributesHandler)
  .route('/', actionDeregisterTransitGatewayMulticastGroupMembersHandler)
  .route('/', actionDeregisterTransitGatewayMulticastGroupSourcesHandler)
  .route('/', actionDescribeAccountAttributesHandler)
  .route('/', actionDescribeAddressTransfersHandler)
  .route('/', actionDescribeAddressesHandler)
  .route('/', actionDescribeAddressesAttributeHandler)
  .route('/', actionDescribeAggregateIdFormatHandler)
  .route('/', actionDescribeAvailabilityZonesHandler)
  .route('/', actionDescribeAwsNetworkPerformanceMetricSubscriptionsHandler)
  .route('/', actionDescribeBundleTasksHandler)
  .route('/', actionDescribeByoipCidrsHandler)
  .route('/', actionDescribeCapacityReservationFleetsHandler)
  .route('/', actionDescribeCapacityReservationsHandler)
  .route('/', actionDescribeCarrierGatewaysHandler)
  .route('/', actionDescribeClassicLinkInstancesHandler)
  .route('/', actionDescribeClientVpnAuthorizationRulesHandler)
  .route('/', actionDescribeClientVpnConnectionsHandler)
  .route('/', actionDescribeClientVpnEndpointsHandler)
  .route('/', actionDescribeClientVpnRoutesHandler)
  .route('/', actionDescribeClientVpnTargetNetworksHandler)
  .route('/', actionDescribeCoipPoolsHandler)
  .route('/', actionDescribeConversionTasksHandler)
  .route('/', actionDescribeCustomerGatewaysHandler)
  .route('/', actionDescribeDhcpOptionsHandler)
  .route('/', actionDescribeEgressOnlyInternetGatewaysHandler)
  .route('/', actionDescribeElasticGpusHandler)
  .route('/', actionDescribeExportImageTasksHandler)
  .route('/', actionDescribeExportTasksHandler)
  .route('/', actionDescribeFastLaunchImagesHandler)
  .route('/', actionDescribeFastSnapshotRestoresHandler)
  .route('/', actionDescribeFleetHistoryHandler)
  .route('/', actionDescribeFleetInstancesHandler)
  .route('/', actionDescribeFleetsHandler)
  .route('/', actionDescribeFlowLogsHandler)
  .route('/', actionDescribeFpgaImageAttributeHandler)
  .route('/', actionDescribeFpgaImagesHandler)
  .route('/', actionDescribeHostReservationOfferingsHandler)
  .route('/', actionDescribeHostReservationsHandler)
  .route('/', actionDescribeHostsHandler)
  .route('/', actionDescribeIamInstanceProfileAssociationsHandler)
  .route('/', actionDescribeIdFormatHandler)
  .route('/', actionDescribeIdentityIdFormatHandler)
  .route('/', actionDescribeImageAttributeHandler)
  .route('/', actionDescribeImagesHandler)
  .route('/', actionDescribeImportImageTasksHandler)
  .route('/', actionDescribeImportSnapshotTasksHandler)
  .route('/', actionDescribeInstanceAttributeHandler)
  .route('/', actionDescribeInstanceCreditSpecificationsHandler)
  .route('/', actionDescribeInstanceEventNotificationAttributesHandler)
  .route('/', actionDescribeInstanceEventWindowsHandler)
  .route('/', actionDescribeInstanceStatusHandler)
  .route('/', actionDescribeInstanceTypeOfferingsHandler)
  .route('/', actionDescribeInstanceTypesHandler)
  .route('/', actionDescribeInstancesHandler)
  .route('/', actionDescribeInternetGatewaysHandler)
  .route('/', actionDescribeIpamPoolsHandler)
  .route('/', actionDescribeIpamResourceDiscoveriesHandler)
  .route('/', actionDescribeIpamResourceDiscoveryAssociationsHandler)
  .route('/', actionDescribeIpamScopesHandler)
  .route('/', actionDescribeIpamsHandler)
  .route('/', actionDescribeIpv6PoolsHandler)
  .route('/', actionDescribeKeyPairsHandler)
  .route('/', actionDescribeLaunchTemplateVersionsHandler)
  .route('/', actionDescribeLaunchTemplatesHandler)
  .route('/', actionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHandler)
  .route('/', actionDescribeLocalGatewayRouteTableVpcAssociationsHandler)
  .route('/', actionDescribeLocalGatewayRouteTablesHandler)
  .route('/', actionDescribeLocalGatewayVirtualInterfaceGroupsHandler)
  .route('/', actionDescribeLocalGatewayVirtualInterfacesHandler)
  .route('/', actionDescribeLocalGatewaysHandler)
  .route('/', actionDescribeManagedPrefixListsHandler)
  .route('/', actionDescribeMovingAddressesHandler)
  .route('/', actionDescribeNatGatewaysHandler)
  .route('/', actionDescribeNetworkAclsHandler)
  .route('/', actionDescribeNetworkInsightsAccessScopeAnalysesHandler)
  .route('/', actionDescribeNetworkInsightsAccessScopesHandler)
  .route('/', actionDescribeNetworkInsightsAnalysesHandler)
  .route('/', actionDescribeNetworkInsightsPathsHandler)
  .route('/', actionDescribeNetworkInterfaceAttributeHandler)
  .route('/', actionDescribeNetworkInterfacePermissionsHandler)
  .route('/', actionDescribeNetworkInterfacesHandler)
  .route('/', actionDescribePlacementGroupsHandler)
  .route('/', actionDescribePrefixListsHandler)
  .route('/', actionDescribePrincipalIdFormatHandler)
  .route('/', actionDescribePublicIpv4PoolsHandler)
  .route('/', actionDescribeRegionsHandler)
  .route('/', actionDescribeReplaceRootVolumeTasksHandler)
  .route('/', actionDescribeReservedInstancesHandler)
  .route('/', actionDescribeReservedInstancesListingsHandler)
  .route('/', actionDescribeReservedInstancesModificationsHandler)
  .route('/', actionDescribeReservedInstancesOfferingsHandler)
  .route('/', actionDescribeRouteTablesHandler)
  .route('/', actionDescribeScheduledInstanceAvailabilityHandler)
  .route('/', actionDescribeScheduledInstancesHandler)
  .route('/', actionDescribeSecurityGroupReferencesHandler)
  .route('/', actionDescribeSecurityGroupRulesHandler)
  .route('/', actionDescribeSecurityGroupsHandler)
  .route('/', actionDescribeSnapshotAttributeHandler)
  .route('/', actionDescribeSnapshotTierStatusHandler)
  .route('/', actionDescribeSnapshotsHandler)
  .route('/', actionDescribeSpotDatafeedSubscriptionHandler)
  .route('/', actionDescribeSpotFleetInstancesHandler)
  .route('/', actionDescribeSpotFleetRequestHistoryHandler)
  .route('/', actionDescribeSpotFleetRequestsHandler)
  .route('/', actionDescribeSpotInstanceRequestsHandler)
  .route('/', actionDescribeSpotPriceHistoryHandler)
  .route('/', actionDescribeStaleSecurityGroupsHandler)
  .route('/', actionDescribeStoreImageTasksHandler)
  .route('/', actionDescribeSubnetsHandler)
  .route('/', actionDescribeTagsHandler)
  .route('/', actionDescribeTrafficMirrorFiltersHandler)
  .route('/', actionDescribeTrafficMirrorSessionsHandler)
  .route('/', actionDescribeTrafficMirrorTargetsHandler)
  .route('/', actionDescribeTransitGatewayAttachmentsHandler)
  .route('/', actionDescribeTransitGatewayConnectPeersHandler)
  .route('/', actionDescribeTransitGatewayConnectsHandler)
  .route('/', actionDescribeTransitGatewayMulticastDomainsHandler)
  .route('/', actionDescribeTransitGatewayPeeringAttachmentsHandler)
  .route('/', actionDescribeTransitGatewayPolicyTablesHandler)
  .route('/', actionDescribeTransitGatewayRouteTableAnnouncementsHandler)
  .route('/', actionDescribeTransitGatewayRouteTablesHandler)
  .route('/', actionDescribeTransitGatewayVpcAttachmentsHandler)
  .route('/', actionDescribeTransitGatewaysHandler)
  .route('/', actionDescribeTrunkInterfaceAssociationsHandler)
  .route('/', actionDescribeVerifiedAccessEndpointsHandler)
  .route('/', actionDescribeVerifiedAccessGroupsHandler)
  .route('/', actionDescribeVerifiedAccessInstanceLoggingConfigurationsHandler)
  .route('/', actionDescribeVerifiedAccessInstancesHandler)
  .route('/', actionDescribeVerifiedAccessTrustProvidersHandler)
  .route('/', actionDescribeVolumeAttributeHandler)
  .route('/', actionDescribeVolumeStatusHandler)
  .route('/', actionDescribeVolumesHandler)
  .route('/', actionDescribeVolumesModificationsHandler)
  .route('/', actionDescribeVpcAttributeHandler)
  .route('/', actionDescribeVpcClassicLinkHandler)
  .route('/', actionDescribeVpcClassicLinkDnsSupportHandler)
  .route('/', actionDescribeVpcEndpointConnectionNotificationsHandler)
  .route('/', actionDescribeVpcEndpointConnectionsHandler)
  .route('/', actionDescribeVpcEndpointServiceConfigurationsHandler)
  .route('/', actionDescribeVpcEndpointServicePermissionsHandler)
  .route('/', actionDescribeVpcEndpointServicesHandler)
  .route('/', actionDescribeVpcEndpointsHandler)
  .route('/', actionDescribeVpcPeeringConnectionsHandler)
  .route('/', actionDescribeVpcsHandler)
  .route('/', actionDescribeVpnConnectionsHandler)
  .route('/', actionDescribeVpnGatewaysHandler)
  .route('/', actionDetachClassicLinkVpcHandler)
  .route('/', actionDetachInternetGatewayHandler)
  .route('/', actionDetachNetworkInterfaceHandler)
  .route('/', actionDetachVerifiedAccessTrustProviderHandler)
  .route('/', actionDetachVolumeHandler)
  .route('/', actionDetachVpnGatewayHandler)
  .route('/', actionDisableAddressTransferHandler)
  .route('/', actionDisableAwsNetworkPerformanceMetricSubscriptionHandler)
  .route('/', actionDisableEbsEncryptionByDefaultHandler)
  .route('/', actionDisableFastLaunchHandler)
  .route('/', actionDisableFastSnapshotRestoresHandler)
  .route('/', actionDisableImageDeprecationHandler)
  .route('/', actionDisableIpamOrganizationAdminAccountHandler)
  .route('/', actionDisableSerialConsoleAccessHandler)
  .route('/', actionDisableTransitGatewayRouteTablePropagationHandler)
  .route('/', actionDisableVgwRoutePropagationHandler)
  .route('/', actionDisableVpcClassicLinkHandler)
  .route('/', actionDisableVpcClassicLinkDnsSupportHandler)
  .route('/', actionDisassociateAddressHandler)
  .route('/', actionDisassociateClientVpnTargetNetworkHandler)
  .route('/', actionDisassociateEnclaveCertificateIamRoleHandler)
  .route('/', actionDisassociateIamInstanceProfileHandler)
  .route('/', actionDisassociateInstanceEventWindowHandler)
  .route('/', actionDisassociateIpamResourceDiscoveryHandler)
  .route('/', actionDisassociateNatGatewayAddressHandler)
  .route('/', actionDisassociateRouteTableHandler)
  .route('/', actionDisassociateSubnetCidrBlockHandler)
  .route('/', actionDisassociateTransitGatewayMulticastDomainHandler)
  .route('/', actionDisassociateTransitGatewayPolicyTableHandler)
  .route('/', actionDisassociateTransitGatewayRouteTableHandler)
  .route('/', actionDisassociateTrunkInterfaceHandler)
  .route('/', actionDisassociateVpcCidrBlockHandler)
  .route('/', actionEnableAddressTransferHandler)
  .route('/', actionEnableAwsNetworkPerformanceMetricSubscriptionHandler)
  .route('/', actionEnableEbsEncryptionByDefaultHandler)
  .route('/', actionEnableFastLaunchHandler)
  .route('/', actionEnableFastSnapshotRestoresHandler)
  .route('/', actionEnableImageDeprecationHandler)
  .route('/', actionEnableIpamOrganizationAdminAccountHandler)
  .route('/', actionEnableReachabilityAnalyzerOrganizationSharingHandler)
  .route('/', actionEnableSerialConsoleAccessHandler)
  .route('/', actionEnableTransitGatewayRouteTablePropagationHandler)
  .route('/', actionEnableVgwRoutePropagationHandler)
  .route('/', actionEnableVolumeIoHandler)
  .route('/', actionEnableVpcClassicLinkHandler)
  .route('/', actionEnableVpcClassicLinkDnsSupportHandler)
  .route('/', actionExportClientVpnClientCertificateRevocationListHandler)
  .route('/', actionExportClientVpnClientConfigurationHandler)
  .route('/', actionExportImageHandler)
  .route('/', actionExportTransitGatewayRoutesHandler)
  .route('/', actionGetAssociatedEnclaveCertificateIamRolesHandler)
  .route('/', actionGetAssociatedIpv6PoolCidrsHandler)
  .route('/', actionGetAwsNetworkPerformanceDataHandler)
  .route('/', actionGetCapacityReservationUsageHandler)
  .route('/', actionGetCoipPoolUsageHandler)
  .route('/', actionGetConsoleOutputHandler)
  .route('/', actionGetConsoleScreenshotHandler)
  .route('/', actionGetDefaultCreditSpecificationHandler)
  .route('/', actionGetEbsDefaultKmsKeyIdHandler)
  .route('/', actionGetEbsEncryptionByDefaultHandler)
  .route('/', actionGetFlowLogsIntegrationTemplateHandler)
  .route('/', actionGetGroupsForCapacityReservationHandler)
  .route('/', actionGetHostReservationPurchasePreviewHandler)
  .route('/', actionGetInstanceTypesFromInstanceRequirementsHandler)
  .route('/', actionGetInstanceUefiDataHandler)
  .route('/', actionGetIpamAddressHistoryHandler)
  .route('/', actionGetIpamDiscoveredAccountsHandler)
  .route('/', actionGetIpamDiscoveredResourceCidrsHandler)
  .route('/', actionGetIpamPoolAllocationsHandler)
  .route('/', actionGetIpamPoolCidrsHandler)
  .route('/', actionGetIpamResourceCidrsHandler)
  .route('/', actionGetLaunchTemplateDataHandler)
  .route('/', actionGetManagedPrefixListAssociationsHandler)
  .route('/', actionGetManagedPrefixListEntriesHandler)
  .route('/', actionGetNetworkInsightsAccessScopeAnalysisFindingsHandler)
  .route('/', actionGetNetworkInsightsAccessScopeContentHandler)
  .route('/', actionGetPasswordDataHandler)
  .route('/', actionGetReservedInstancesExchangeQuoteHandler)
  .route('/', actionGetSerialConsoleAccessStatusHandler)
  .route('/', actionGetSpotPlacementScoresHandler)
  .route('/', actionGetSubnetCidrReservationsHandler)
  .route('/', actionGetTransitGatewayAttachmentPropagationsHandler)
  .route('/', actionGetTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', actionGetTransitGatewayPolicyTableAssociationsHandler)
  .route('/', actionGetTransitGatewayPolicyTableEntriesHandler)
  .route('/', actionGetTransitGatewayPrefixListReferencesHandler)
  .route('/', actionGetTransitGatewayRouteTableAssociationsHandler)
  .route('/', actionGetTransitGatewayRouteTablePropagationsHandler)
  .route('/', actionGetVerifiedAccessEndpointPolicyHandler)
  .route('/', actionGetVerifiedAccessGroupPolicyHandler)
  .route('/', actionGetVpnConnectionDeviceSampleConfigurationHandler)
  .route('/', actionGetVpnConnectionDeviceTypesHandler)
  .route('/', actionGetVpnTunnelReplacementStatusHandler)
  .route('/', actionImportClientVpnClientCertificateRevocationListHandler)
  .route('/', actionImportImageHandler)
  .route('/', actionImportInstanceHandler)
  .route('/', actionImportKeyPairHandler)
  .route('/', actionImportSnapshotHandler)
  .route('/', actionImportVolumeHandler)
  .route('/', actionListImagesInRecycleBinHandler)
  .route('/', actionListSnapshotsInRecycleBinHandler)
  .route('/', actionModifyAddressAttributeHandler)
  .route('/', actionModifyAvailabilityZoneGroupHandler)
  .route('/', actionModifyCapacityReservationHandler)
  .route('/', actionModifyCapacityReservationFleetHandler)
  .route('/', actionModifyClientVpnEndpointHandler)
  .route('/', actionModifyDefaultCreditSpecificationHandler)
  .route('/', actionModifyEbsDefaultKmsKeyIdHandler)
  .route('/', actionModifyFleetHandler)
  .route('/', actionModifyFpgaImageAttributeHandler)
  .route('/', actionModifyHostsHandler)
  .route('/', actionModifyIdFormatHandler)
  .route('/', actionModifyIdentityIdFormatHandler)
  .route('/', actionModifyImageAttributeHandler)
  .route('/', actionModifyInstanceAttributeHandler)
  .route('/', actionModifyInstanceCapacityReservationAttributesHandler)
  .route('/', actionModifyInstanceCreditSpecificationHandler)
  .route('/', actionModifyInstanceEventStartTimeHandler)
  .route('/', actionModifyInstanceEventWindowHandler)
  .route('/', actionModifyInstanceMaintenanceOptionsHandler)
  .route('/', actionModifyInstanceMetadataOptionsHandler)
  .route('/', actionModifyInstancePlacementHandler)
  .route('/', actionModifyIpamHandler)
  .route('/', actionModifyIpamPoolHandler)
  .route('/', actionModifyIpamResourceCidrHandler)
  .route('/', actionModifyIpamResourceDiscoveryHandler)
  .route('/', actionModifyIpamScopeHandler)
  .route('/', actionModifyLaunchTemplateHandler)
  .route('/', actionModifyLocalGatewayRouteHandler)
  .route('/', actionModifyManagedPrefixListHandler)
  .route('/', actionModifyNetworkInterfaceAttributeHandler)
  .route('/', actionModifyPrivateDnsNameOptionsHandler)
  .route('/', actionModifyReservedInstancesHandler)
  .route('/', actionModifySecurityGroupRulesHandler)
  .route('/', actionModifySnapshotAttributeHandler)
  .route('/', actionModifySnapshotTierHandler)
  .route('/', actionModifySpotFleetRequestHandler)
  .route('/', actionModifySubnetAttributeHandler)
  .route('/', actionModifyTrafficMirrorFilterNetworkServicesHandler)
  .route('/', actionModifyTrafficMirrorFilterRuleHandler)
  .route('/', actionModifyTrafficMirrorSessionHandler)
  .route('/', actionModifyTransitGatewayHandler)
  .route('/', actionModifyTransitGatewayPrefixListReferenceHandler)
  .route('/', actionModifyTransitGatewayVpcAttachmentHandler)
  .route('/', actionModifyVerifiedAccessEndpointHandler)
  .route('/', actionModifyVerifiedAccessEndpointPolicyHandler)
  .route('/', actionModifyVerifiedAccessGroupHandler)
  .route('/', actionModifyVerifiedAccessGroupPolicyHandler)
  .route('/', actionModifyVerifiedAccessInstanceHandler)
  .route('/', actionModifyVerifiedAccessInstanceLoggingConfigurationHandler)
  .route('/', actionModifyVerifiedAccessTrustProviderHandler)
  .route('/', actionModifyVolumeHandler)
  .route('/', actionModifyVolumeAttributeHandler)
  .route('/', actionModifyVpcAttributeHandler)
  .route('/', actionModifyVpcEndpointHandler)
  .route('/', actionModifyVpcEndpointConnectionNotificationHandler)
  .route('/', actionModifyVpcEndpointServiceConfigurationHandler)
  .route('/', actionModifyVpcEndpointServicePayerResponsibilityHandler)
  .route('/', actionModifyVpcEndpointServicePermissionsHandler)
  .route('/', actionModifyVpcPeeringConnectionOptionsHandler)
  .route('/', actionModifyVpcTenancyHandler)
  .route('/', actionModifyVpnConnectionHandler)
  .route('/', actionModifyVpnConnectionOptionsHandler)
  .route('/', actionModifyVpnTunnelCertificateHandler)
  .route('/', actionModifyVpnTunnelOptionsHandler)
  .route('/', actionMonitorInstancesHandler)
  .route('/', actionMoveAddressToVpcHandler)
  .route('/', actionMoveByoipCidrToIpamHandler)
  .route('/', actionProvisionByoipCidrHandler)
  .route('/', actionProvisionIpamPoolCidrHandler)
  .route('/', actionProvisionPublicIpv4PoolCidrHandler)
  .route('/', actionPurchaseHostReservationHandler)
  .route('/', actionPurchaseReservedInstancesOfferingHandler)
  .route('/', actionPurchaseScheduledInstancesHandler)
  .route('/', actionRebootInstancesHandler)
  .route('/', actionRegisterImageHandler)
  .route('/', actionRegisterInstanceEventNotificationAttributesHandler)
  .route('/', actionRegisterTransitGatewayMulticastGroupMembersHandler)
  .route('/', actionRegisterTransitGatewayMulticastGroupSourcesHandler)
  .route('/', actionRejectTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', actionRejectTransitGatewayPeeringAttachmentHandler)
  .route('/', actionRejectTransitGatewayVpcAttachmentHandler)
  .route('/', actionRejectVpcEndpointConnectionsHandler)
  .route('/', actionRejectVpcPeeringConnectionHandler)
  .route('/', actionReleaseAddressHandler)
  .route('/', actionReleaseHostsHandler)
  .route('/', actionReleaseIpamPoolAllocationHandler)
  .route('/', actionReplaceIamInstanceProfileAssociationHandler)
  .route('/', actionReplaceNetworkAclAssociationHandler)
  .route('/', actionReplaceNetworkAclEntryHandler)
  .route('/', actionReplaceRouteHandler)
  .route('/', actionReplaceRouteTableAssociationHandler)
  .route('/', actionReplaceTransitGatewayRouteHandler)
  .route('/', actionReplaceVpnTunnelHandler)
  .route('/', actionReportInstanceStatusHandler)
  .route('/', actionRequestSpotFleetHandler)
  .route('/', actionRequestSpotInstancesHandler)
  .route('/', actionResetAddressAttributeHandler)
  .route('/', actionResetEbsDefaultKmsKeyIdHandler)
  .route('/', actionResetFpgaImageAttributeHandler)
  .route('/', actionResetImageAttributeHandler)
  .route('/', actionResetInstanceAttributeHandler)
  .route('/', actionResetNetworkInterfaceAttributeHandler)
  .route('/', actionResetSnapshotAttributeHandler)
  .route('/', actionRestoreAddressToClassicHandler)
  .route('/', actionRestoreImageFromRecycleBinHandler)
  .route('/', actionRestoreManagedPrefixListVersionHandler)
  .route('/', actionRestoreSnapshotFromRecycleBinHandler)
  .route('/', actionRestoreSnapshotTierHandler)
  .route('/', actionRevokeClientVpnIngressHandler)
  .route('/', actionRevokeSecurityGroupEgressHandler)
  .route('/', actionRevokeSecurityGroupIngressHandler)
  .route('/', actionRunInstancesHandler)
  .route('/', actionRunScheduledInstancesHandler)
  .route('/', actionSearchLocalGatewayRoutesHandler)
  .route('/', actionSearchTransitGatewayMulticastGroupsHandler)
  .route('/', actionSearchTransitGatewayRoutesHandler)
  .route('/', actionSendDiagnosticInterruptHandler)
  .route('/', actionStartInstancesHandler)
  .route('/', actionStartNetworkInsightsAccessScopeAnalysisHandler)
  .route('/', actionStartNetworkInsightsAnalysisHandler)
  .route('/', actionStartVpcEndpointServicePrivateDnsVerificationHandler)
  .route('/', actionStopInstancesHandler)
  .route('/', actionTerminateClientVpnConnectionsHandler)
  .route('/', actionTerminateInstancesHandler)
  .route('/', actionUnassignIpv6AddressesHandler)
  .route('/', actionUnassignPrivateIpAddressesHandler)
  .route('/', actionUnassignPrivateNatGatewayAddressHandler)
  .route('/', actionUnmonitorInstancesHandler)
  .route('/', actionUpdateSecurityGroupRuleDescriptionsEgressHandler)
  .route('/', actionUpdateSecurityGroupRuleDescriptionsIngressHandler)
  .route('/', actionWithdrawByoipCidrHandler)

export default app

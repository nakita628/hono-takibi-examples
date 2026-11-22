import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAcceptAddressTransferHandler,
  ActionAcceptReservedInstancesExchangeQuoteHandler,
  ActionAcceptTransitGatewayMulticastDomainAssociationsHandler,
  ActionAcceptTransitGatewayPeeringAttachmentHandler,
  ActionAcceptTransitGatewayVpcAttachmentHandler,
  ActionAcceptVpcEndpointConnectionsHandler,
  ActionAcceptVpcPeeringConnectionHandler,
  ActionAdvertiseByoipCidrHandler,
  ActionAllocateAddressHandler,
  ActionAllocateHostsHandler,
  ActionAllocateIpamPoolCidrHandler,
  ActionApplySecurityGroupsToClientVpnTargetNetworkHandler,
  ActionAssignIpv6AddressesHandler,
  ActionAssignPrivateIpAddressesHandler,
  ActionAssignPrivateNatGatewayAddressHandler,
  ActionAssociateAddressHandler,
  ActionAssociateClientVpnTargetNetworkHandler,
  ActionAssociateDhcpOptionsHandler,
  ActionAssociateEnclaveCertificateIamRoleHandler,
  ActionAssociateIamInstanceProfileHandler,
  ActionAssociateInstanceEventWindowHandler,
  ActionAssociateIpamResourceDiscoveryHandler,
  ActionAssociateNatGatewayAddressHandler,
  ActionAssociateRouteTableHandler,
  ActionAssociateSubnetCidrBlockHandler,
  ActionAssociateTransitGatewayMulticastDomainHandler,
  ActionAssociateTransitGatewayPolicyTableHandler,
  ActionAssociateTransitGatewayRouteTableHandler,
  ActionAssociateTrunkInterfaceHandler,
  ActionAssociateVpcCidrBlockHandler,
  ActionAttachClassicLinkVpcHandler,
  ActionAttachInternetGatewayHandler,
  ActionAttachNetworkInterfaceHandler,
  ActionAttachVerifiedAccessTrustProviderHandler,
  ActionAttachVolumeHandler,
  ActionAttachVpnGatewayHandler,
  ActionAuthorizeClientVpnIngressHandler,
  ActionAuthorizeSecurityGroupEgressHandler,
  ActionAuthorizeSecurityGroupIngressHandler,
  ActionBundleInstanceHandler,
  ActionCancelBundleTaskHandler,
  ActionCancelCapacityReservationFleetsHandler,
  ActionCancelCapacityReservationHandler,
  ActionCancelConversionTaskHandler,
  ActionCancelExportTaskHandler,
  ActionCancelImageLaunchPermissionHandler,
  ActionCancelImportTaskHandler,
  ActionCancelReservedInstancesListingHandler,
  ActionCancelSpotFleetRequestsHandler,
  ActionCancelSpotInstanceRequestsHandler,
  ActionConfirmProductInstanceHandler,
  ActionCopyFpgaImageHandler,
  ActionCopyImageHandler,
  ActionCopySnapshotHandler,
  ActionCreateCapacityReservationFleetHandler,
  ActionCreateCapacityReservationHandler,
  ActionCreateCarrierGatewayHandler,
  ActionCreateClientVpnEndpointHandler,
  ActionCreateClientVpnRouteHandler,
  ActionCreateCoipCidrHandler,
  ActionCreateCoipPoolHandler,
  ActionCreateCustomerGatewayHandler,
  ActionCreateDefaultSubnetHandler,
  ActionCreateDefaultVpcHandler,
  ActionCreateDhcpOptionsHandler,
  ActionCreateEgressOnlyInternetGatewayHandler,
  ActionCreateFleetHandler,
  ActionCreateFlowLogsHandler,
  ActionCreateFpgaImageHandler,
  ActionCreateImageHandler,
  ActionCreateInstanceEventWindowHandler,
  ActionCreateInstanceExportTaskHandler,
  ActionCreateInternetGatewayHandler,
  ActionCreateIpamHandler,
  ActionCreateIpamPoolHandler,
  ActionCreateIpamResourceDiscoveryHandler,
  ActionCreateIpamScopeHandler,
  ActionCreateKeyPairHandler,
  ActionCreateLaunchTemplateHandler,
  ActionCreateLaunchTemplateVersionHandler,
  ActionCreateLocalGatewayRouteHandler,
  ActionCreateLocalGatewayRouteTableHandler,
  ActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler,
  ActionCreateLocalGatewayRouteTableVpcAssociationHandler,
  ActionCreateManagedPrefixListHandler,
  ActionCreateNatGatewayHandler,
  ActionCreateNetworkAclEntryHandler,
  ActionCreateNetworkAclHandler,
  ActionCreateNetworkInsightsAccessScopeHandler,
  ActionCreateNetworkInsightsPathHandler,
  ActionCreateNetworkInterfaceHandler,
  ActionCreateNetworkInterfacePermissionHandler,
  ActionCreatePlacementGroupHandler,
  ActionCreatePublicIpv4PoolHandler,
  ActionCreateReplaceRootVolumeTaskHandler,
  ActionCreateReservedInstancesListingHandler,
  ActionCreateRestoreImageTaskHandler,
  ActionCreateRouteHandler,
  ActionCreateRouteTableHandler,
  ActionCreateSecurityGroupHandler,
  ActionCreateSnapshotHandler,
  ActionCreateSnapshotsHandler,
  ActionCreateSpotDatafeedSubscriptionHandler,
  ActionCreateStoreImageTaskHandler,
  ActionCreateSubnetCidrReservationHandler,
  ActionCreateSubnetHandler,
  ActionCreateTagsHandler,
  ActionCreateTrafficMirrorFilterHandler,
  ActionCreateTrafficMirrorFilterRuleHandler,
  ActionCreateTrafficMirrorSessionHandler,
  ActionCreateTrafficMirrorTargetHandler,
  ActionCreateTransitGatewayConnectHandler,
  ActionCreateTransitGatewayConnectPeerHandler,
  ActionCreateTransitGatewayHandler,
  ActionCreateTransitGatewayMulticastDomainHandler,
  ActionCreateTransitGatewayPeeringAttachmentHandler,
  ActionCreateTransitGatewayPolicyTableHandler,
  ActionCreateTransitGatewayPrefixListReferenceHandler,
  ActionCreateTransitGatewayRouteHandler,
  ActionCreateTransitGatewayRouteTableAnnouncementHandler,
  ActionCreateTransitGatewayRouteTableHandler,
  ActionCreateTransitGatewayVpcAttachmentHandler,
  ActionCreateVerifiedAccessEndpointHandler,
  ActionCreateVerifiedAccessGroupHandler,
  ActionCreateVerifiedAccessInstanceHandler,
  ActionCreateVerifiedAccessTrustProviderHandler,
  ActionCreateVolumeHandler,
  ActionCreateVpcEndpointConnectionNotificationHandler,
  ActionCreateVpcEndpointHandler,
  ActionCreateVpcEndpointServiceConfigurationHandler,
  ActionCreateVpcHandler,
  ActionCreateVpcPeeringConnectionHandler,
  ActionCreateVpnConnectionHandler,
  ActionCreateVpnConnectionRouteHandler,
  ActionCreateVpnGatewayHandler,
  ActionDeleteCarrierGatewayHandler,
  ActionDeleteClientVpnEndpointHandler,
  ActionDeleteClientVpnRouteHandler,
  ActionDeleteCoipCidrHandler,
  ActionDeleteCoipPoolHandler,
  ActionDeleteCustomerGatewayHandler,
  ActionDeleteDhcpOptionsHandler,
  ActionDeleteEgressOnlyInternetGatewayHandler,
  ActionDeleteFleetsHandler,
  ActionDeleteFlowLogsHandler,
  ActionDeleteFpgaImageHandler,
  ActionDeleteInstanceEventWindowHandler,
  ActionDeleteInternetGatewayHandler,
  ActionDeleteIpamHandler,
  ActionDeleteIpamPoolHandler,
  ActionDeleteIpamResourceDiscoveryHandler,
  ActionDeleteIpamScopeHandler,
  ActionDeleteKeyPairHandler,
  ActionDeleteLaunchTemplateHandler,
  ActionDeleteLaunchTemplateVersionsHandler,
  ActionDeleteLocalGatewayRouteHandler,
  ActionDeleteLocalGatewayRouteTableHandler,
  ActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler,
  ActionDeleteLocalGatewayRouteTableVpcAssociationHandler,
  ActionDeleteManagedPrefixListHandler,
  ActionDeleteNatGatewayHandler,
  ActionDeleteNetworkAclEntryHandler,
  ActionDeleteNetworkAclHandler,
  ActionDeleteNetworkInsightsAccessScopeAnalysisHandler,
  ActionDeleteNetworkInsightsAccessScopeHandler,
  ActionDeleteNetworkInsightsAnalysisHandler,
  ActionDeleteNetworkInsightsPathHandler,
  ActionDeleteNetworkInterfaceHandler,
  ActionDeleteNetworkInterfacePermissionHandler,
  ActionDeletePlacementGroupHandler,
  ActionDeletePublicIpv4PoolHandler,
  ActionDeleteQueuedReservedInstancesHandler,
  ActionDeleteRouteHandler,
  ActionDeleteRouteTableHandler,
  ActionDeleteSecurityGroupHandler,
  ActionDeleteSnapshotHandler,
  ActionDeleteSpotDatafeedSubscriptionHandler,
  ActionDeleteSubnetCidrReservationHandler,
  ActionDeleteSubnetHandler,
  ActionDeleteTagsHandler,
  ActionDeleteTrafficMirrorFilterHandler,
  ActionDeleteTrafficMirrorFilterRuleHandler,
  ActionDeleteTrafficMirrorSessionHandler,
  ActionDeleteTrafficMirrorTargetHandler,
  ActionDeleteTransitGatewayConnectHandler,
  ActionDeleteTransitGatewayConnectPeerHandler,
  ActionDeleteTransitGatewayHandler,
  ActionDeleteTransitGatewayMulticastDomainHandler,
  ActionDeleteTransitGatewayPeeringAttachmentHandler,
  ActionDeleteTransitGatewayPolicyTableHandler,
  ActionDeleteTransitGatewayPrefixListReferenceHandler,
  ActionDeleteTransitGatewayRouteHandler,
  ActionDeleteTransitGatewayRouteTableAnnouncementHandler,
  ActionDeleteTransitGatewayRouteTableHandler,
  ActionDeleteTransitGatewayVpcAttachmentHandler,
  ActionDeleteVerifiedAccessEndpointHandler,
  ActionDeleteVerifiedAccessGroupHandler,
  ActionDeleteVerifiedAccessInstanceHandler,
  ActionDeleteVerifiedAccessTrustProviderHandler,
  ActionDeleteVolumeHandler,
  ActionDeleteVpcEndpointConnectionNotificationsHandler,
  ActionDeleteVpcEndpointServiceConfigurationsHandler,
  ActionDeleteVpcEndpointsHandler,
  ActionDeleteVpcHandler,
  ActionDeleteVpcPeeringConnectionHandler,
  ActionDeleteVpnConnectionHandler,
  ActionDeleteVpnConnectionRouteHandler,
  ActionDeleteVpnGatewayHandler,
  ActionDeprovisionByoipCidrHandler,
  ActionDeprovisionIpamPoolCidrHandler,
  ActionDeprovisionPublicIpv4PoolCidrHandler,
  ActionDeregisterImageHandler,
  ActionDeregisterInstanceEventNotificationAttributesHandler,
  ActionDeregisterTransitGatewayMulticastGroupMembersHandler,
  ActionDeregisterTransitGatewayMulticastGroupSourcesHandler,
  ActionDescribeAccountAttributesHandler,
  ActionDescribeAddressesAttributeHandler,
  ActionDescribeAddressesHandler,
  ActionDescribeAddressTransfersHandler,
  ActionDescribeAggregateIdFormatHandler,
  ActionDescribeAvailabilityZonesHandler,
  ActionDescribeAwsNetworkPerformanceMetricSubscriptionsHandler,
  ActionDescribeBundleTasksHandler,
  ActionDescribeByoipCidrsHandler,
  ActionDescribeCapacityReservationFleetsHandler,
  ActionDescribeCapacityReservationsHandler,
  ActionDescribeCarrierGatewaysHandler,
  ActionDescribeClassicLinkInstancesHandler,
  ActionDescribeClientVpnAuthorizationRulesHandler,
  ActionDescribeClientVpnConnectionsHandler,
  ActionDescribeClientVpnEndpointsHandler,
  ActionDescribeClientVpnRoutesHandler,
  ActionDescribeClientVpnTargetNetworksHandler,
  ActionDescribeCoipPoolsHandler,
  ActionDescribeConversionTasksHandler,
  ActionDescribeCustomerGatewaysHandler,
  ActionDescribeDhcpOptionsHandler,
  ActionDescribeEgressOnlyInternetGatewaysHandler,
  ActionDescribeElasticGpusHandler,
  ActionDescribeExportImageTasksHandler,
  ActionDescribeExportTasksHandler,
  ActionDescribeFastLaunchImagesHandler,
  ActionDescribeFastSnapshotRestoresHandler,
  ActionDescribeFleetHistoryHandler,
  ActionDescribeFleetInstancesHandler,
  ActionDescribeFleetsHandler,
  ActionDescribeFlowLogsHandler,
  ActionDescribeFpgaImageAttributeHandler,
  ActionDescribeFpgaImagesHandler,
  ActionDescribeHostReservationOfferingsHandler,
  ActionDescribeHostReservationsHandler,
  ActionDescribeHostsHandler,
  ActionDescribeIamInstanceProfileAssociationsHandler,
  ActionDescribeIdentityIdFormatHandler,
  ActionDescribeIdFormatHandler,
  ActionDescribeImageAttributeHandler,
  ActionDescribeImagesHandler,
  ActionDescribeImportImageTasksHandler,
  ActionDescribeImportSnapshotTasksHandler,
  ActionDescribeInstanceAttributeHandler,
  ActionDescribeInstanceCreditSpecificationsHandler,
  ActionDescribeInstanceEventNotificationAttributesHandler,
  ActionDescribeInstanceEventWindowsHandler,
  ActionDescribeInstancesHandler,
  ActionDescribeInstanceStatusHandler,
  ActionDescribeInstanceTypeOfferingsHandler,
  ActionDescribeInstanceTypesHandler,
  ActionDescribeInternetGatewaysHandler,
  ActionDescribeIpamPoolsHandler,
  ActionDescribeIpamResourceDiscoveriesHandler,
  ActionDescribeIpamResourceDiscoveryAssociationsHandler,
  ActionDescribeIpamScopesHandler,
  ActionDescribeIpamsHandler,
  ActionDescribeIpv6PoolsHandler,
  ActionDescribeKeyPairsHandler,
  ActionDescribeLaunchTemplatesHandler,
  ActionDescribeLaunchTemplateVersionsHandler,
  ActionDescribeLocalGatewayRouteTablesHandler,
  ActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHandler,
  ActionDescribeLocalGatewayRouteTableVpcAssociationsHandler,
  ActionDescribeLocalGatewaysHandler,
  ActionDescribeLocalGatewayVirtualInterfaceGroupsHandler,
  ActionDescribeLocalGatewayVirtualInterfacesHandler,
  ActionDescribeManagedPrefixListsHandler,
  ActionDescribeMovingAddressesHandler,
  ActionDescribeNatGatewaysHandler,
  ActionDescribeNetworkAclsHandler,
  ActionDescribeNetworkInsightsAccessScopeAnalysesHandler,
  ActionDescribeNetworkInsightsAccessScopesHandler,
  ActionDescribeNetworkInsightsAnalysesHandler,
  ActionDescribeNetworkInsightsPathsHandler,
  ActionDescribeNetworkInterfaceAttributeHandler,
  ActionDescribeNetworkInterfacePermissionsHandler,
  ActionDescribeNetworkInterfacesHandler,
  ActionDescribePlacementGroupsHandler,
  ActionDescribePrefixListsHandler,
  ActionDescribePrincipalIdFormatHandler,
  ActionDescribePublicIpv4PoolsHandler,
  ActionDescribeRegionsHandler,
  ActionDescribeReplaceRootVolumeTasksHandler,
  ActionDescribeReservedInstancesHandler,
  ActionDescribeReservedInstancesListingsHandler,
  ActionDescribeReservedInstancesModificationsHandler,
  ActionDescribeReservedInstancesOfferingsHandler,
  ActionDescribeRouteTablesHandler,
  ActionDescribeScheduledInstanceAvailabilityHandler,
  ActionDescribeScheduledInstancesHandler,
  ActionDescribeSecurityGroupReferencesHandler,
  ActionDescribeSecurityGroupRulesHandler,
  ActionDescribeSecurityGroupsHandler,
  ActionDescribeSnapshotAttributeHandler,
  ActionDescribeSnapshotsHandler,
  ActionDescribeSnapshotTierStatusHandler,
  ActionDescribeSpotDatafeedSubscriptionHandler,
  ActionDescribeSpotFleetInstancesHandler,
  ActionDescribeSpotFleetRequestHistoryHandler,
  ActionDescribeSpotFleetRequestsHandler,
  ActionDescribeSpotInstanceRequestsHandler,
  ActionDescribeSpotPriceHistoryHandler,
  ActionDescribeStaleSecurityGroupsHandler,
  ActionDescribeStoreImageTasksHandler,
  ActionDescribeSubnetsHandler,
  ActionDescribeTagsHandler,
  ActionDescribeTrafficMirrorFiltersHandler,
  ActionDescribeTrafficMirrorSessionsHandler,
  ActionDescribeTrafficMirrorTargetsHandler,
  ActionDescribeTransitGatewayAttachmentsHandler,
  ActionDescribeTransitGatewayConnectPeersHandler,
  ActionDescribeTransitGatewayConnectsHandler,
  ActionDescribeTransitGatewayMulticastDomainsHandler,
  ActionDescribeTransitGatewayPeeringAttachmentsHandler,
  ActionDescribeTransitGatewayPolicyTablesHandler,
  ActionDescribeTransitGatewayRouteTableAnnouncementsHandler,
  ActionDescribeTransitGatewayRouteTablesHandler,
  ActionDescribeTransitGatewaysHandler,
  ActionDescribeTransitGatewayVpcAttachmentsHandler,
  ActionDescribeTrunkInterfaceAssociationsHandler,
  ActionDescribeVerifiedAccessEndpointsHandler,
  ActionDescribeVerifiedAccessGroupsHandler,
  ActionDescribeVerifiedAccessInstanceLoggingConfigurationsHandler,
  ActionDescribeVerifiedAccessInstancesHandler,
  ActionDescribeVerifiedAccessTrustProvidersHandler,
  ActionDescribeVolumeAttributeHandler,
  ActionDescribeVolumesHandler,
  ActionDescribeVolumesModificationsHandler,
  ActionDescribeVolumeStatusHandler,
  ActionDescribeVpcAttributeHandler,
  ActionDescribeVpcClassicLinkDnsSupportHandler,
  ActionDescribeVpcClassicLinkHandler,
  ActionDescribeVpcEndpointConnectionNotificationsHandler,
  ActionDescribeVpcEndpointConnectionsHandler,
  ActionDescribeVpcEndpointServiceConfigurationsHandler,
  ActionDescribeVpcEndpointServicePermissionsHandler,
  ActionDescribeVpcEndpointServicesHandler,
  ActionDescribeVpcEndpointsHandler,
  ActionDescribeVpcPeeringConnectionsHandler,
  ActionDescribeVpcsHandler,
  ActionDescribeVpnConnectionsHandler,
  ActionDescribeVpnGatewaysHandler,
  ActionDetachClassicLinkVpcHandler,
  ActionDetachInternetGatewayHandler,
  ActionDetachNetworkInterfaceHandler,
  ActionDetachVerifiedAccessTrustProviderHandler,
  ActionDetachVolumeHandler,
  ActionDetachVpnGatewayHandler,
  ActionDisableAddressTransferHandler,
  ActionDisableAwsNetworkPerformanceMetricSubscriptionHandler,
  ActionDisableEbsEncryptionByDefaultHandler,
  ActionDisableFastLaunchHandler,
  ActionDisableFastSnapshotRestoresHandler,
  ActionDisableImageDeprecationHandler,
  ActionDisableIpamOrganizationAdminAccountHandler,
  ActionDisableSerialConsoleAccessHandler,
  ActionDisableTransitGatewayRouteTablePropagationHandler,
  ActionDisableVgwRoutePropagationHandler,
  ActionDisableVpcClassicLinkDnsSupportHandler,
  ActionDisableVpcClassicLinkHandler,
  ActionDisassociateAddressHandler,
  ActionDisassociateClientVpnTargetNetworkHandler,
  ActionDisassociateEnclaveCertificateIamRoleHandler,
  ActionDisassociateIamInstanceProfileHandler,
  ActionDisassociateInstanceEventWindowHandler,
  ActionDisassociateIpamResourceDiscoveryHandler,
  ActionDisassociateNatGatewayAddressHandler,
  ActionDisassociateRouteTableHandler,
  ActionDisassociateSubnetCidrBlockHandler,
  ActionDisassociateTransitGatewayMulticastDomainHandler,
  ActionDisassociateTransitGatewayPolicyTableHandler,
  ActionDisassociateTransitGatewayRouteTableHandler,
  ActionDisassociateTrunkInterfaceHandler,
  ActionDisassociateVpcCidrBlockHandler,
  ActionEnableAddressTransferHandler,
  ActionEnableAwsNetworkPerformanceMetricSubscriptionHandler,
  ActionEnableEbsEncryptionByDefaultHandler,
  ActionEnableFastLaunchHandler,
  ActionEnableFastSnapshotRestoresHandler,
  ActionEnableImageDeprecationHandler,
  ActionEnableIpamOrganizationAdminAccountHandler,
  ActionEnableReachabilityAnalyzerOrganizationSharingHandler,
  ActionEnableSerialConsoleAccessHandler,
  ActionEnableTransitGatewayRouteTablePropagationHandler,
  ActionEnableVgwRoutePropagationHandler,
  ActionEnableVolumeIOHandler,
  ActionEnableVpcClassicLinkDnsSupportHandler,
  ActionEnableVpcClassicLinkHandler,
  ActionExportClientVpnClientCertificateRevocationListHandler,
  ActionExportClientVpnClientConfigurationHandler,
  ActionExportImageHandler,
  ActionExportTransitGatewayRoutesHandler,
  ActionGetAssociatedEnclaveCertificateIamRolesHandler,
  ActionGetAssociatedIpv6PoolCidrsHandler,
  ActionGetAwsNetworkPerformanceDataHandler,
  ActionGetCapacityReservationUsageHandler,
  ActionGetCoipPoolUsageHandler,
  ActionGetConsoleOutputHandler,
  ActionGetConsoleScreenshotHandler,
  ActionGetDefaultCreditSpecificationHandler,
  ActionGetEbsDefaultKmsKeyIdHandler,
  ActionGetEbsEncryptionByDefaultHandler,
  ActionGetFlowLogsIntegrationTemplateHandler,
  ActionGetGroupsForCapacityReservationHandler,
  ActionGetHostReservationPurchasePreviewHandler,
  ActionGetInstanceTypesFromInstanceRequirementsHandler,
  ActionGetInstanceUefiDataHandler,
  ActionGetIpamAddressHistoryHandler,
  ActionGetIpamDiscoveredAccountsHandler,
  ActionGetIpamDiscoveredResourceCidrsHandler,
  ActionGetIpamPoolAllocationsHandler,
  ActionGetIpamPoolCidrsHandler,
  ActionGetIpamResourceCidrsHandler,
  ActionGetLaunchTemplateDataHandler,
  ActionGetManagedPrefixListAssociationsHandler,
  ActionGetManagedPrefixListEntriesHandler,
  ActionGetNetworkInsightsAccessScopeAnalysisFindingsHandler,
  ActionGetNetworkInsightsAccessScopeContentHandler,
  ActionGetPasswordDataHandler,
  ActionGetReservedInstancesExchangeQuoteHandler,
  ActionGetSerialConsoleAccessStatusHandler,
  ActionGetSpotPlacementScoresHandler,
  ActionGetSubnetCidrReservationsHandler,
  ActionGetTransitGatewayAttachmentPropagationsHandler,
  ActionGetTransitGatewayMulticastDomainAssociationsHandler,
  ActionGetTransitGatewayPolicyTableAssociationsHandler,
  ActionGetTransitGatewayPolicyTableEntriesHandler,
  ActionGetTransitGatewayPrefixListReferencesHandler,
  ActionGetTransitGatewayRouteTableAssociationsHandler,
  ActionGetTransitGatewayRouteTablePropagationsHandler,
  ActionGetVerifiedAccessEndpointPolicyHandler,
  ActionGetVerifiedAccessGroupPolicyHandler,
  ActionGetVpnConnectionDeviceSampleConfigurationHandler,
  ActionGetVpnConnectionDeviceTypesHandler,
  ActionGetVpnTunnelReplacementStatusHandler,
  ActionImportClientVpnClientCertificateRevocationListHandler,
  ActionImportImageHandler,
  ActionImportInstanceHandler,
  ActionImportKeyPairHandler,
  ActionImportSnapshotHandler,
  ActionImportVolumeHandler,
  ActionListImagesInRecycleBinHandler,
  ActionListSnapshotsInRecycleBinHandler,
  ActionModifyAddressAttributeHandler,
  ActionModifyAvailabilityZoneGroupHandler,
  ActionModifyCapacityReservationFleetHandler,
  ActionModifyCapacityReservationHandler,
  ActionModifyClientVpnEndpointHandler,
  ActionModifyDefaultCreditSpecificationHandler,
  ActionModifyEbsDefaultKmsKeyIdHandler,
  ActionModifyFleetHandler,
  ActionModifyFpgaImageAttributeHandler,
  ActionModifyHostsHandler,
  ActionModifyIdentityIdFormatHandler,
  ActionModifyIdFormatHandler,
  ActionModifyImageAttributeHandler,
  ActionModifyInstanceAttributeHandler,
  ActionModifyInstanceCapacityReservationAttributesHandler,
  ActionModifyInstanceCreditSpecificationHandler,
  ActionModifyInstanceEventStartTimeHandler,
  ActionModifyInstanceEventWindowHandler,
  ActionModifyInstanceMaintenanceOptionsHandler,
  ActionModifyInstanceMetadataOptionsHandler,
  ActionModifyInstancePlacementHandler,
  ActionModifyIpamHandler,
  ActionModifyIpamPoolHandler,
  ActionModifyIpamResourceCidrHandler,
  ActionModifyIpamResourceDiscoveryHandler,
  ActionModifyIpamScopeHandler,
  ActionModifyLaunchTemplateHandler,
  ActionModifyLocalGatewayRouteHandler,
  ActionModifyManagedPrefixListHandler,
  ActionModifyNetworkInterfaceAttributeHandler,
  ActionModifyPrivateDnsNameOptionsHandler,
  ActionModifyReservedInstancesHandler,
  ActionModifySecurityGroupRulesHandler,
  ActionModifySnapshotAttributeHandler,
  ActionModifySnapshotTierHandler,
  ActionModifySpotFleetRequestHandler,
  ActionModifySubnetAttributeHandler,
  ActionModifyTrafficMirrorFilterNetworkServicesHandler,
  ActionModifyTrafficMirrorFilterRuleHandler,
  ActionModifyTrafficMirrorSessionHandler,
  ActionModifyTransitGatewayHandler,
  ActionModifyTransitGatewayPrefixListReferenceHandler,
  ActionModifyTransitGatewayVpcAttachmentHandler,
  ActionModifyVerifiedAccessEndpointHandler,
  ActionModifyVerifiedAccessEndpointPolicyHandler,
  ActionModifyVerifiedAccessGroupHandler,
  ActionModifyVerifiedAccessGroupPolicyHandler,
  ActionModifyVerifiedAccessInstanceHandler,
  ActionModifyVerifiedAccessInstanceLoggingConfigurationHandler,
  ActionModifyVerifiedAccessTrustProviderHandler,
  ActionModifyVolumeAttributeHandler,
  ActionModifyVolumeHandler,
  ActionModifyVpcAttributeHandler,
  ActionModifyVpcEndpointConnectionNotificationHandler,
  ActionModifyVpcEndpointHandler,
  ActionModifyVpcEndpointServiceConfigurationHandler,
  ActionModifyVpcEndpointServicePayerResponsibilityHandler,
  ActionModifyVpcEndpointServicePermissionsHandler,
  ActionModifyVpcPeeringConnectionOptionsHandler,
  ActionModifyVpcTenancyHandler,
  ActionModifyVpnConnectionHandler,
  ActionModifyVpnConnectionOptionsHandler,
  ActionModifyVpnTunnelCertificateHandler,
  ActionModifyVpnTunnelOptionsHandler,
  ActionMonitorInstancesHandler,
  ActionMoveAddressToVpcHandler,
  ActionMoveByoipCidrToIpamHandler,
  ActionProvisionByoipCidrHandler,
  ActionProvisionIpamPoolCidrHandler,
  ActionProvisionPublicIpv4PoolCidrHandler,
  ActionPurchaseHostReservationHandler,
  ActionPurchaseReservedInstancesOfferingHandler,
  ActionPurchaseScheduledInstancesHandler,
  ActionRebootInstancesHandler,
  ActionRegisterImageHandler,
  ActionRegisterInstanceEventNotificationAttributesHandler,
  ActionRegisterTransitGatewayMulticastGroupMembersHandler,
  ActionRegisterTransitGatewayMulticastGroupSourcesHandler,
  ActionRejectTransitGatewayMulticastDomainAssociationsHandler,
  ActionRejectTransitGatewayPeeringAttachmentHandler,
  ActionRejectTransitGatewayVpcAttachmentHandler,
  ActionRejectVpcEndpointConnectionsHandler,
  ActionRejectVpcPeeringConnectionHandler,
  ActionReleaseAddressHandler,
  ActionReleaseHostsHandler,
  ActionReleaseIpamPoolAllocationHandler,
  ActionReplaceIamInstanceProfileAssociationHandler,
  ActionReplaceNetworkAclAssociationHandler,
  ActionReplaceNetworkAclEntryHandler,
  ActionReplaceRouteHandler,
  ActionReplaceRouteTableAssociationHandler,
  ActionReplaceTransitGatewayRouteHandler,
  ActionReplaceVpnTunnelHandler,
  ActionReportInstanceStatusHandler,
  ActionRequestSpotFleetHandler,
  ActionRequestSpotInstancesHandler,
  ActionResetAddressAttributeHandler,
  ActionResetEbsDefaultKmsKeyIdHandler,
  ActionResetFpgaImageAttributeHandler,
  ActionResetImageAttributeHandler,
  ActionResetInstanceAttributeHandler,
  ActionResetNetworkInterfaceAttributeHandler,
  ActionResetSnapshotAttributeHandler,
  ActionRestoreAddressToClassicHandler,
  ActionRestoreImageFromRecycleBinHandler,
  ActionRestoreManagedPrefixListVersionHandler,
  ActionRestoreSnapshotFromRecycleBinHandler,
  ActionRestoreSnapshotTierHandler,
  ActionRevokeClientVpnIngressHandler,
  ActionRevokeSecurityGroupEgressHandler,
  ActionRevokeSecurityGroupIngressHandler,
  ActionRunInstancesHandler,
  ActionRunScheduledInstancesHandler,
  ActionSearchLocalGatewayRoutesHandler,
  ActionSearchTransitGatewayMulticastGroupsHandler,
  ActionSearchTransitGatewayRoutesHandler,
  ActionSendDiagnosticInterruptHandler,
  ActionStartInstancesHandler,
  ActionStartNetworkInsightsAccessScopeAnalysisHandler,
  ActionStartNetworkInsightsAnalysisHandler,
  ActionStartVpcEndpointServicePrivateDnsVerificationHandler,
  ActionStopInstancesHandler,
  ActionTerminateClientVpnConnectionsHandler,
  ActionTerminateInstancesHandler,
  ActionUnassignIpv6AddressesHandler,
  ActionUnassignPrivateIpAddressesHandler,
  ActionUnassignPrivateNatGatewayAddressHandler,
  ActionUnmonitorInstancesHandler,
  ActionUpdateSecurityGroupRuleDescriptionsEgressHandler,
  ActionUpdateSecurityGroupRuleDescriptionsIngressHandler,
  ActionWithdrawByoipCidrHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAcceptAddressTransferHandler)
  .route('/', ActionAcceptReservedInstancesExchangeQuoteHandler)
  .route('/', ActionAcceptTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', ActionAcceptTransitGatewayPeeringAttachmentHandler)
  .route('/', ActionAcceptTransitGatewayVpcAttachmentHandler)
  .route('/', ActionAcceptVpcEndpointConnectionsHandler)
  .route('/', ActionAcceptVpcPeeringConnectionHandler)
  .route('/', ActionAdvertiseByoipCidrHandler)
  .route('/', ActionAllocateAddressHandler)
  .route('/', ActionAllocateHostsHandler)
  .route('/', ActionAllocateIpamPoolCidrHandler)
  .route('/', ActionApplySecurityGroupsToClientVpnTargetNetworkHandler)
  .route('/', ActionAssignIpv6AddressesHandler)
  .route('/', ActionAssignPrivateIpAddressesHandler)
  .route('/', ActionAssignPrivateNatGatewayAddressHandler)
  .route('/', ActionAssociateAddressHandler)
  .route('/', ActionAssociateClientVpnTargetNetworkHandler)
  .route('/', ActionAssociateDhcpOptionsHandler)
  .route('/', ActionAssociateEnclaveCertificateIamRoleHandler)
  .route('/', ActionAssociateIamInstanceProfileHandler)
  .route('/', ActionAssociateInstanceEventWindowHandler)
  .route('/', ActionAssociateIpamResourceDiscoveryHandler)
  .route('/', ActionAssociateNatGatewayAddressHandler)
  .route('/', ActionAssociateRouteTableHandler)
  .route('/', ActionAssociateSubnetCidrBlockHandler)
  .route('/', ActionAssociateTransitGatewayMulticastDomainHandler)
  .route('/', ActionAssociateTransitGatewayPolicyTableHandler)
  .route('/', ActionAssociateTransitGatewayRouteTableHandler)
  .route('/', ActionAssociateTrunkInterfaceHandler)
  .route('/', ActionAssociateVpcCidrBlockHandler)
  .route('/', ActionAttachClassicLinkVpcHandler)
  .route('/', ActionAttachInternetGatewayHandler)
  .route('/', ActionAttachNetworkInterfaceHandler)
  .route('/', ActionAttachVerifiedAccessTrustProviderHandler)
  .route('/', ActionAttachVolumeHandler)
  .route('/', ActionAttachVpnGatewayHandler)
  .route('/', ActionAuthorizeClientVpnIngressHandler)
  .route('/', ActionAuthorizeSecurityGroupEgressHandler)
  .route('/', ActionAuthorizeSecurityGroupIngressHandler)
  .route('/', ActionBundleInstanceHandler)
  .route('/', ActionCancelBundleTaskHandler)
  .route('/', ActionCancelCapacityReservationHandler)
  .route('/', ActionCancelCapacityReservationFleetsHandler)
  .route('/', ActionCancelConversionTaskHandler)
  .route('/', ActionCancelExportTaskHandler)
  .route('/', ActionCancelImageLaunchPermissionHandler)
  .route('/', ActionCancelImportTaskHandler)
  .route('/', ActionCancelReservedInstancesListingHandler)
  .route('/', ActionCancelSpotFleetRequestsHandler)
  .route('/', ActionCancelSpotInstanceRequestsHandler)
  .route('/', ActionConfirmProductInstanceHandler)
  .route('/', ActionCopyFpgaImageHandler)
  .route('/', ActionCopyImageHandler)
  .route('/', ActionCopySnapshotHandler)
  .route('/', ActionCreateCapacityReservationHandler)
  .route('/', ActionCreateCapacityReservationFleetHandler)
  .route('/', ActionCreateCarrierGatewayHandler)
  .route('/', ActionCreateClientVpnEndpointHandler)
  .route('/', ActionCreateClientVpnRouteHandler)
  .route('/', ActionCreateCoipCidrHandler)
  .route('/', ActionCreateCoipPoolHandler)
  .route('/', ActionCreateCustomerGatewayHandler)
  .route('/', ActionCreateDefaultSubnetHandler)
  .route('/', ActionCreateDefaultVpcHandler)
  .route('/', ActionCreateDhcpOptionsHandler)
  .route('/', ActionCreateEgressOnlyInternetGatewayHandler)
  .route('/', ActionCreateFleetHandler)
  .route('/', ActionCreateFlowLogsHandler)
  .route('/', ActionCreateFpgaImageHandler)
  .route('/', ActionCreateImageHandler)
  .route('/', ActionCreateInstanceEventWindowHandler)
  .route('/', ActionCreateInstanceExportTaskHandler)
  .route('/', ActionCreateInternetGatewayHandler)
  .route('/', ActionCreateIpamHandler)
  .route('/', ActionCreateIpamPoolHandler)
  .route('/', ActionCreateIpamResourceDiscoveryHandler)
  .route('/', ActionCreateIpamScopeHandler)
  .route('/', ActionCreateKeyPairHandler)
  .route('/', ActionCreateLaunchTemplateHandler)
  .route('/', ActionCreateLaunchTemplateVersionHandler)
  .route('/', ActionCreateLocalGatewayRouteHandler)
  .route('/', ActionCreateLocalGatewayRouteTableHandler)
  .route('/', ActionCreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler)
  .route('/', ActionCreateLocalGatewayRouteTableVpcAssociationHandler)
  .route('/', ActionCreateManagedPrefixListHandler)
  .route('/', ActionCreateNatGatewayHandler)
  .route('/', ActionCreateNetworkAclHandler)
  .route('/', ActionCreateNetworkAclEntryHandler)
  .route('/', ActionCreateNetworkInsightsAccessScopeHandler)
  .route('/', ActionCreateNetworkInsightsPathHandler)
  .route('/', ActionCreateNetworkInterfaceHandler)
  .route('/', ActionCreateNetworkInterfacePermissionHandler)
  .route('/', ActionCreatePlacementGroupHandler)
  .route('/', ActionCreatePublicIpv4PoolHandler)
  .route('/', ActionCreateReplaceRootVolumeTaskHandler)
  .route('/', ActionCreateReservedInstancesListingHandler)
  .route('/', ActionCreateRestoreImageTaskHandler)
  .route('/', ActionCreateRouteHandler)
  .route('/', ActionCreateRouteTableHandler)
  .route('/', ActionCreateSecurityGroupHandler)
  .route('/', ActionCreateSnapshotHandler)
  .route('/', ActionCreateSnapshotsHandler)
  .route('/', ActionCreateSpotDatafeedSubscriptionHandler)
  .route('/', ActionCreateStoreImageTaskHandler)
  .route('/', ActionCreateSubnetHandler)
  .route('/', ActionCreateSubnetCidrReservationHandler)
  .route('/', ActionCreateTagsHandler)
  .route('/', ActionCreateTrafficMirrorFilterHandler)
  .route('/', ActionCreateTrafficMirrorFilterRuleHandler)
  .route('/', ActionCreateTrafficMirrorSessionHandler)
  .route('/', ActionCreateTrafficMirrorTargetHandler)
  .route('/', ActionCreateTransitGatewayHandler)
  .route('/', ActionCreateTransitGatewayConnectHandler)
  .route('/', ActionCreateTransitGatewayConnectPeerHandler)
  .route('/', ActionCreateTransitGatewayMulticastDomainHandler)
  .route('/', ActionCreateTransitGatewayPeeringAttachmentHandler)
  .route('/', ActionCreateTransitGatewayPolicyTableHandler)
  .route('/', ActionCreateTransitGatewayPrefixListReferenceHandler)
  .route('/', ActionCreateTransitGatewayRouteHandler)
  .route('/', ActionCreateTransitGatewayRouteTableHandler)
  .route('/', ActionCreateTransitGatewayRouteTableAnnouncementHandler)
  .route('/', ActionCreateTransitGatewayVpcAttachmentHandler)
  .route('/', ActionCreateVerifiedAccessEndpointHandler)
  .route('/', ActionCreateVerifiedAccessGroupHandler)
  .route('/', ActionCreateVerifiedAccessInstanceHandler)
  .route('/', ActionCreateVerifiedAccessTrustProviderHandler)
  .route('/', ActionCreateVolumeHandler)
  .route('/', ActionCreateVpcHandler)
  .route('/', ActionCreateVpcEndpointHandler)
  .route('/', ActionCreateVpcEndpointConnectionNotificationHandler)
  .route('/', ActionCreateVpcEndpointServiceConfigurationHandler)
  .route('/', ActionCreateVpcPeeringConnectionHandler)
  .route('/', ActionCreateVpnConnectionHandler)
  .route('/', ActionCreateVpnConnectionRouteHandler)
  .route('/', ActionCreateVpnGatewayHandler)
  .route('/', ActionDeleteCarrierGatewayHandler)
  .route('/', ActionDeleteClientVpnEndpointHandler)
  .route('/', ActionDeleteClientVpnRouteHandler)
  .route('/', ActionDeleteCoipCidrHandler)
  .route('/', ActionDeleteCoipPoolHandler)
  .route('/', ActionDeleteCustomerGatewayHandler)
  .route('/', ActionDeleteDhcpOptionsHandler)
  .route('/', ActionDeleteEgressOnlyInternetGatewayHandler)
  .route('/', ActionDeleteFleetsHandler)
  .route('/', ActionDeleteFlowLogsHandler)
  .route('/', ActionDeleteFpgaImageHandler)
  .route('/', ActionDeleteInstanceEventWindowHandler)
  .route('/', ActionDeleteInternetGatewayHandler)
  .route('/', ActionDeleteIpamHandler)
  .route('/', ActionDeleteIpamPoolHandler)
  .route('/', ActionDeleteIpamResourceDiscoveryHandler)
  .route('/', ActionDeleteIpamScopeHandler)
  .route('/', ActionDeleteKeyPairHandler)
  .route('/', ActionDeleteLaunchTemplateHandler)
  .route('/', ActionDeleteLaunchTemplateVersionsHandler)
  .route('/', ActionDeleteLocalGatewayRouteHandler)
  .route('/', ActionDeleteLocalGatewayRouteTableHandler)
  .route('/', ActionDeleteLocalGatewayRouteTableVirtualInterfaceGroupAssociationHandler)
  .route('/', ActionDeleteLocalGatewayRouteTableVpcAssociationHandler)
  .route('/', ActionDeleteManagedPrefixListHandler)
  .route('/', ActionDeleteNatGatewayHandler)
  .route('/', ActionDeleteNetworkAclHandler)
  .route('/', ActionDeleteNetworkAclEntryHandler)
  .route('/', ActionDeleteNetworkInsightsAccessScopeHandler)
  .route('/', ActionDeleteNetworkInsightsAccessScopeAnalysisHandler)
  .route('/', ActionDeleteNetworkInsightsAnalysisHandler)
  .route('/', ActionDeleteNetworkInsightsPathHandler)
  .route('/', ActionDeleteNetworkInterfaceHandler)
  .route('/', ActionDeleteNetworkInterfacePermissionHandler)
  .route('/', ActionDeletePlacementGroupHandler)
  .route('/', ActionDeletePublicIpv4PoolHandler)
  .route('/', ActionDeleteQueuedReservedInstancesHandler)
  .route('/', ActionDeleteRouteHandler)
  .route('/', ActionDeleteRouteTableHandler)
  .route('/', ActionDeleteSecurityGroupHandler)
  .route('/', ActionDeleteSnapshotHandler)
  .route('/', ActionDeleteSpotDatafeedSubscriptionHandler)
  .route('/', ActionDeleteSubnetHandler)
  .route('/', ActionDeleteSubnetCidrReservationHandler)
  .route('/', ActionDeleteTagsHandler)
  .route('/', ActionDeleteTrafficMirrorFilterHandler)
  .route('/', ActionDeleteTrafficMirrorFilterRuleHandler)
  .route('/', ActionDeleteTrafficMirrorSessionHandler)
  .route('/', ActionDeleteTrafficMirrorTargetHandler)
  .route('/', ActionDeleteTransitGatewayHandler)
  .route('/', ActionDeleteTransitGatewayConnectHandler)
  .route('/', ActionDeleteTransitGatewayConnectPeerHandler)
  .route('/', ActionDeleteTransitGatewayMulticastDomainHandler)
  .route('/', ActionDeleteTransitGatewayPeeringAttachmentHandler)
  .route('/', ActionDeleteTransitGatewayPolicyTableHandler)
  .route('/', ActionDeleteTransitGatewayPrefixListReferenceHandler)
  .route('/', ActionDeleteTransitGatewayRouteHandler)
  .route('/', ActionDeleteTransitGatewayRouteTableHandler)
  .route('/', ActionDeleteTransitGatewayRouteTableAnnouncementHandler)
  .route('/', ActionDeleteTransitGatewayVpcAttachmentHandler)
  .route('/', ActionDeleteVerifiedAccessEndpointHandler)
  .route('/', ActionDeleteVerifiedAccessGroupHandler)
  .route('/', ActionDeleteVerifiedAccessInstanceHandler)
  .route('/', ActionDeleteVerifiedAccessTrustProviderHandler)
  .route('/', ActionDeleteVolumeHandler)
  .route('/', ActionDeleteVpcHandler)
  .route('/', ActionDeleteVpcEndpointConnectionNotificationsHandler)
  .route('/', ActionDeleteVpcEndpointServiceConfigurationsHandler)
  .route('/', ActionDeleteVpcEndpointsHandler)
  .route('/', ActionDeleteVpcPeeringConnectionHandler)
  .route('/', ActionDeleteVpnConnectionHandler)
  .route('/', ActionDeleteVpnConnectionRouteHandler)
  .route('/', ActionDeleteVpnGatewayHandler)
  .route('/', ActionDeprovisionByoipCidrHandler)
  .route('/', ActionDeprovisionIpamPoolCidrHandler)
  .route('/', ActionDeprovisionPublicIpv4PoolCidrHandler)
  .route('/', ActionDeregisterImageHandler)
  .route('/', ActionDeregisterInstanceEventNotificationAttributesHandler)
  .route('/', ActionDeregisterTransitGatewayMulticastGroupMembersHandler)
  .route('/', ActionDeregisterTransitGatewayMulticastGroupSourcesHandler)
  .route('/', ActionDescribeAccountAttributesHandler)
  .route('/', ActionDescribeAddressTransfersHandler)
  .route('/', ActionDescribeAddressesHandler)
  .route('/', ActionDescribeAddressesAttributeHandler)
  .route('/', ActionDescribeAggregateIdFormatHandler)
  .route('/', ActionDescribeAvailabilityZonesHandler)
  .route('/', ActionDescribeAwsNetworkPerformanceMetricSubscriptionsHandler)
  .route('/', ActionDescribeBundleTasksHandler)
  .route('/', ActionDescribeByoipCidrsHandler)
  .route('/', ActionDescribeCapacityReservationFleetsHandler)
  .route('/', ActionDescribeCapacityReservationsHandler)
  .route('/', ActionDescribeCarrierGatewaysHandler)
  .route('/', ActionDescribeClassicLinkInstancesHandler)
  .route('/', ActionDescribeClientVpnAuthorizationRulesHandler)
  .route('/', ActionDescribeClientVpnConnectionsHandler)
  .route('/', ActionDescribeClientVpnEndpointsHandler)
  .route('/', ActionDescribeClientVpnRoutesHandler)
  .route('/', ActionDescribeClientVpnTargetNetworksHandler)
  .route('/', ActionDescribeCoipPoolsHandler)
  .route('/', ActionDescribeConversionTasksHandler)
  .route('/', ActionDescribeCustomerGatewaysHandler)
  .route('/', ActionDescribeDhcpOptionsHandler)
  .route('/', ActionDescribeEgressOnlyInternetGatewaysHandler)
  .route('/', ActionDescribeElasticGpusHandler)
  .route('/', ActionDescribeExportImageTasksHandler)
  .route('/', ActionDescribeExportTasksHandler)
  .route('/', ActionDescribeFastLaunchImagesHandler)
  .route('/', ActionDescribeFastSnapshotRestoresHandler)
  .route('/', ActionDescribeFleetHistoryHandler)
  .route('/', ActionDescribeFleetInstancesHandler)
  .route('/', ActionDescribeFleetsHandler)
  .route('/', ActionDescribeFlowLogsHandler)
  .route('/', ActionDescribeFpgaImageAttributeHandler)
  .route('/', ActionDescribeFpgaImagesHandler)
  .route('/', ActionDescribeHostReservationOfferingsHandler)
  .route('/', ActionDescribeHostReservationsHandler)
  .route('/', ActionDescribeHostsHandler)
  .route('/', ActionDescribeIamInstanceProfileAssociationsHandler)
  .route('/', ActionDescribeIdFormatHandler)
  .route('/', ActionDescribeIdentityIdFormatHandler)
  .route('/', ActionDescribeImageAttributeHandler)
  .route('/', ActionDescribeImagesHandler)
  .route('/', ActionDescribeImportImageTasksHandler)
  .route('/', ActionDescribeImportSnapshotTasksHandler)
  .route('/', ActionDescribeInstanceAttributeHandler)
  .route('/', ActionDescribeInstanceCreditSpecificationsHandler)
  .route('/', ActionDescribeInstanceEventNotificationAttributesHandler)
  .route('/', ActionDescribeInstanceEventWindowsHandler)
  .route('/', ActionDescribeInstanceStatusHandler)
  .route('/', ActionDescribeInstanceTypeOfferingsHandler)
  .route('/', ActionDescribeInstanceTypesHandler)
  .route('/', ActionDescribeInstancesHandler)
  .route('/', ActionDescribeInternetGatewaysHandler)
  .route('/', ActionDescribeIpamPoolsHandler)
  .route('/', ActionDescribeIpamResourceDiscoveriesHandler)
  .route('/', ActionDescribeIpamResourceDiscoveryAssociationsHandler)
  .route('/', ActionDescribeIpamScopesHandler)
  .route('/', ActionDescribeIpamsHandler)
  .route('/', ActionDescribeIpv6PoolsHandler)
  .route('/', ActionDescribeKeyPairsHandler)
  .route('/', ActionDescribeLaunchTemplateVersionsHandler)
  .route('/', ActionDescribeLaunchTemplatesHandler)
  .route('/', ActionDescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsHandler)
  .route('/', ActionDescribeLocalGatewayRouteTableVpcAssociationsHandler)
  .route('/', ActionDescribeLocalGatewayRouteTablesHandler)
  .route('/', ActionDescribeLocalGatewayVirtualInterfaceGroupsHandler)
  .route('/', ActionDescribeLocalGatewayVirtualInterfacesHandler)
  .route('/', ActionDescribeLocalGatewaysHandler)
  .route('/', ActionDescribeManagedPrefixListsHandler)
  .route('/', ActionDescribeMovingAddressesHandler)
  .route('/', ActionDescribeNatGatewaysHandler)
  .route('/', ActionDescribeNetworkAclsHandler)
  .route('/', ActionDescribeNetworkInsightsAccessScopeAnalysesHandler)
  .route('/', ActionDescribeNetworkInsightsAccessScopesHandler)
  .route('/', ActionDescribeNetworkInsightsAnalysesHandler)
  .route('/', ActionDescribeNetworkInsightsPathsHandler)
  .route('/', ActionDescribeNetworkInterfaceAttributeHandler)
  .route('/', ActionDescribeNetworkInterfacePermissionsHandler)
  .route('/', ActionDescribeNetworkInterfacesHandler)
  .route('/', ActionDescribePlacementGroupsHandler)
  .route('/', ActionDescribePrefixListsHandler)
  .route('/', ActionDescribePrincipalIdFormatHandler)
  .route('/', ActionDescribePublicIpv4PoolsHandler)
  .route('/', ActionDescribeRegionsHandler)
  .route('/', ActionDescribeReplaceRootVolumeTasksHandler)
  .route('/', ActionDescribeReservedInstancesHandler)
  .route('/', ActionDescribeReservedInstancesListingsHandler)
  .route('/', ActionDescribeReservedInstancesModificationsHandler)
  .route('/', ActionDescribeReservedInstancesOfferingsHandler)
  .route('/', ActionDescribeRouteTablesHandler)
  .route('/', ActionDescribeScheduledInstanceAvailabilityHandler)
  .route('/', ActionDescribeScheduledInstancesHandler)
  .route('/', ActionDescribeSecurityGroupReferencesHandler)
  .route('/', ActionDescribeSecurityGroupRulesHandler)
  .route('/', ActionDescribeSecurityGroupsHandler)
  .route('/', ActionDescribeSnapshotAttributeHandler)
  .route('/', ActionDescribeSnapshotTierStatusHandler)
  .route('/', ActionDescribeSnapshotsHandler)
  .route('/', ActionDescribeSpotDatafeedSubscriptionHandler)
  .route('/', ActionDescribeSpotFleetInstancesHandler)
  .route('/', ActionDescribeSpotFleetRequestHistoryHandler)
  .route('/', ActionDescribeSpotFleetRequestsHandler)
  .route('/', ActionDescribeSpotInstanceRequestsHandler)
  .route('/', ActionDescribeSpotPriceHistoryHandler)
  .route('/', ActionDescribeStaleSecurityGroupsHandler)
  .route('/', ActionDescribeStoreImageTasksHandler)
  .route('/', ActionDescribeSubnetsHandler)
  .route('/', ActionDescribeTagsHandler)
  .route('/', ActionDescribeTrafficMirrorFiltersHandler)
  .route('/', ActionDescribeTrafficMirrorSessionsHandler)
  .route('/', ActionDescribeTrafficMirrorTargetsHandler)
  .route('/', ActionDescribeTransitGatewayAttachmentsHandler)
  .route('/', ActionDescribeTransitGatewayConnectPeersHandler)
  .route('/', ActionDescribeTransitGatewayConnectsHandler)
  .route('/', ActionDescribeTransitGatewayMulticastDomainsHandler)
  .route('/', ActionDescribeTransitGatewayPeeringAttachmentsHandler)
  .route('/', ActionDescribeTransitGatewayPolicyTablesHandler)
  .route('/', ActionDescribeTransitGatewayRouteTableAnnouncementsHandler)
  .route('/', ActionDescribeTransitGatewayRouteTablesHandler)
  .route('/', ActionDescribeTransitGatewayVpcAttachmentsHandler)
  .route('/', ActionDescribeTransitGatewaysHandler)
  .route('/', ActionDescribeTrunkInterfaceAssociationsHandler)
  .route('/', ActionDescribeVerifiedAccessEndpointsHandler)
  .route('/', ActionDescribeVerifiedAccessGroupsHandler)
  .route('/', ActionDescribeVerifiedAccessInstanceLoggingConfigurationsHandler)
  .route('/', ActionDescribeVerifiedAccessInstancesHandler)
  .route('/', ActionDescribeVerifiedAccessTrustProvidersHandler)
  .route('/', ActionDescribeVolumeAttributeHandler)
  .route('/', ActionDescribeVolumeStatusHandler)
  .route('/', ActionDescribeVolumesHandler)
  .route('/', ActionDescribeVolumesModificationsHandler)
  .route('/', ActionDescribeVpcAttributeHandler)
  .route('/', ActionDescribeVpcClassicLinkHandler)
  .route('/', ActionDescribeVpcClassicLinkDnsSupportHandler)
  .route('/', ActionDescribeVpcEndpointConnectionNotificationsHandler)
  .route('/', ActionDescribeVpcEndpointConnectionsHandler)
  .route('/', ActionDescribeVpcEndpointServiceConfigurationsHandler)
  .route('/', ActionDescribeVpcEndpointServicePermissionsHandler)
  .route('/', ActionDescribeVpcEndpointServicesHandler)
  .route('/', ActionDescribeVpcEndpointsHandler)
  .route('/', ActionDescribeVpcPeeringConnectionsHandler)
  .route('/', ActionDescribeVpcsHandler)
  .route('/', ActionDescribeVpnConnectionsHandler)
  .route('/', ActionDescribeVpnGatewaysHandler)
  .route('/', ActionDetachClassicLinkVpcHandler)
  .route('/', ActionDetachInternetGatewayHandler)
  .route('/', ActionDetachNetworkInterfaceHandler)
  .route('/', ActionDetachVerifiedAccessTrustProviderHandler)
  .route('/', ActionDetachVolumeHandler)
  .route('/', ActionDetachVpnGatewayHandler)
  .route('/', ActionDisableAddressTransferHandler)
  .route('/', ActionDisableAwsNetworkPerformanceMetricSubscriptionHandler)
  .route('/', ActionDisableEbsEncryptionByDefaultHandler)
  .route('/', ActionDisableFastLaunchHandler)
  .route('/', ActionDisableFastSnapshotRestoresHandler)
  .route('/', ActionDisableImageDeprecationHandler)
  .route('/', ActionDisableIpamOrganizationAdminAccountHandler)
  .route('/', ActionDisableSerialConsoleAccessHandler)
  .route('/', ActionDisableTransitGatewayRouteTablePropagationHandler)
  .route('/', ActionDisableVgwRoutePropagationHandler)
  .route('/', ActionDisableVpcClassicLinkHandler)
  .route('/', ActionDisableVpcClassicLinkDnsSupportHandler)
  .route('/', ActionDisassociateAddressHandler)
  .route('/', ActionDisassociateClientVpnTargetNetworkHandler)
  .route('/', ActionDisassociateEnclaveCertificateIamRoleHandler)
  .route('/', ActionDisassociateIamInstanceProfileHandler)
  .route('/', ActionDisassociateInstanceEventWindowHandler)
  .route('/', ActionDisassociateIpamResourceDiscoveryHandler)
  .route('/', ActionDisassociateNatGatewayAddressHandler)
  .route('/', ActionDisassociateRouteTableHandler)
  .route('/', ActionDisassociateSubnetCidrBlockHandler)
  .route('/', ActionDisassociateTransitGatewayMulticastDomainHandler)
  .route('/', ActionDisassociateTransitGatewayPolicyTableHandler)
  .route('/', ActionDisassociateTransitGatewayRouteTableHandler)
  .route('/', ActionDisassociateTrunkInterfaceHandler)
  .route('/', ActionDisassociateVpcCidrBlockHandler)
  .route('/', ActionEnableAddressTransferHandler)
  .route('/', ActionEnableAwsNetworkPerformanceMetricSubscriptionHandler)
  .route('/', ActionEnableEbsEncryptionByDefaultHandler)
  .route('/', ActionEnableFastLaunchHandler)
  .route('/', ActionEnableFastSnapshotRestoresHandler)
  .route('/', ActionEnableImageDeprecationHandler)
  .route('/', ActionEnableIpamOrganizationAdminAccountHandler)
  .route('/', ActionEnableReachabilityAnalyzerOrganizationSharingHandler)
  .route('/', ActionEnableSerialConsoleAccessHandler)
  .route('/', ActionEnableTransitGatewayRouteTablePropagationHandler)
  .route('/', ActionEnableVgwRoutePropagationHandler)
  .route('/', ActionEnableVolumeIOHandler)
  .route('/', ActionEnableVpcClassicLinkHandler)
  .route('/', ActionEnableVpcClassicLinkDnsSupportHandler)
  .route('/', ActionExportClientVpnClientCertificateRevocationListHandler)
  .route('/', ActionExportClientVpnClientConfigurationHandler)
  .route('/', ActionExportImageHandler)
  .route('/', ActionExportTransitGatewayRoutesHandler)
  .route('/', ActionGetAssociatedEnclaveCertificateIamRolesHandler)
  .route('/', ActionGetAssociatedIpv6PoolCidrsHandler)
  .route('/', ActionGetAwsNetworkPerformanceDataHandler)
  .route('/', ActionGetCapacityReservationUsageHandler)
  .route('/', ActionGetCoipPoolUsageHandler)
  .route('/', ActionGetConsoleOutputHandler)
  .route('/', ActionGetConsoleScreenshotHandler)
  .route('/', ActionGetDefaultCreditSpecificationHandler)
  .route('/', ActionGetEbsDefaultKmsKeyIdHandler)
  .route('/', ActionGetEbsEncryptionByDefaultHandler)
  .route('/', ActionGetFlowLogsIntegrationTemplateHandler)
  .route('/', ActionGetGroupsForCapacityReservationHandler)
  .route('/', ActionGetHostReservationPurchasePreviewHandler)
  .route('/', ActionGetInstanceTypesFromInstanceRequirementsHandler)
  .route('/', ActionGetInstanceUefiDataHandler)
  .route('/', ActionGetIpamAddressHistoryHandler)
  .route('/', ActionGetIpamDiscoveredAccountsHandler)
  .route('/', ActionGetIpamDiscoveredResourceCidrsHandler)
  .route('/', ActionGetIpamPoolAllocationsHandler)
  .route('/', ActionGetIpamPoolCidrsHandler)
  .route('/', ActionGetIpamResourceCidrsHandler)
  .route('/', ActionGetLaunchTemplateDataHandler)
  .route('/', ActionGetManagedPrefixListAssociationsHandler)
  .route('/', ActionGetManagedPrefixListEntriesHandler)
  .route('/', ActionGetNetworkInsightsAccessScopeAnalysisFindingsHandler)
  .route('/', ActionGetNetworkInsightsAccessScopeContentHandler)
  .route('/', ActionGetPasswordDataHandler)
  .route('/', ActionGetReservedInstancesExchangeQuoteHandler)
  .route('/', ActionGetSerialConsoleAccessStatusHandler)
  .route('/', ActionGetSpotPlacementScoresHandler)
  .route('/', ActionGetSubnetCidrReservationsHandler)
  .route('/', ActionGetTransitGatewayAttachmentPropagationsHandler)
  .route('/', ActionGetTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', ActionGetTransitGatewayPolicyTableAssociationsHandler)
  .route('/', ActionGetTransitGatewayPolicyTableEntriesHandler)
  .route('/', ActionGetTransitGatewayPrefixListReferencesHandler)
  .route('/', ActionGetTransitGatewayRouteTableAssociationsHandler)
  .route('/', ActionGetTransitGatewayRouteTablePropagationsHandler)
  .route('/', ActionGetVerifiedAccessEndpointPolicyHandler)
  .route('/', ActionGetVerifiedAccessGroupPolicyHandler)
  .route('/', ActionGetVpnConnectionDeviceSampleConfigurationHandler)
  .route('/', ActionGetVpnConnectionDeviceTypesHandler)
  .route('/', ActionGetVpnTunnelReplacementStatusHandler)
  .route('/', ActionImportClientVpnClientCertificateRevocationListHandler)
  .route('/', ActionImportImageHandler)
  .route('/', ActionImportInstanceHandler)
  .route('/', ActionImportKeyPairHandler)
  .route('/', ActionImportSnapshotHandler)
  .route('/', ActionImportVolumeHandler)
  .route('/', ActionListImagesInRecycleBinHandler)
  .route('/', ActionListSnapshotsInRecycleBinHandler)
  .route('/', ActionModifyAddressAttributeHandler)
  .route('/', ActionModifyAvailabilityZoneGroupHandler)
  .route('/', ActionModifyCapacityReservationHandler)
  .route('/', ActionModifyCapacityReservationFleetHandler)
  .route('/', ActionModifyClientVpnEndpointHandler)
  .route('/', ActionModifyDefaultCreditSpecificationHandler)
  .route('/', ActionModifyEbsDefaultKmsKeyIdHandler)
  .route('/', ActionModifyFleetHandler)
  .route('/', ActionModifyFpgaImageAttributeHandler)
  .route('/', ActionModifyHostsHandler)
  .route('/', ActionModifyIdFormatHandler)
  .route('/', ActionModifyIdentityIdFormatHandler)
  .route('/', ActionModifyImageAttributeHandler)
  .route('/', ActionModifyInstanceAttributeHandler)
  .route('/', ActionModifyInstanceCapacityReservationAttributesHandler)
  .route('/', ActionModifyInstanceCreditSpecificationHandler)
  .route('/', ActionModifyInstanceEventStartTimeHandler)
  .route('/', ActionModifyInstanceEventWindowHandler)
  .route('/', ActionModifyInstanceMaintenanceOptionsHandler)
  .route('/', ActionModifyInstanceMetadataOptionsHandler)
  .route('/', ActionModifyInstancePlacementHandler)
  .route('/', ActionModifyIpamHandler)
  .route('/', ActionModifyIpamPoolHandler)
  .route('/', ActionModifyIpamResourceCidrHandler)
  .route('/', ActionModifyIpamResourceDiscoveryHandler)
  .route('/', ActionModifyIpamScopeHandler)
  .route('/', ActionModifyLaunchTemplateHandler)
  .route('/', ActionModifyLocalGatewayRouteHandler)
  .route('/', ActionModifyManagedPrefixListHandler)
  .route('/', ActionModifyNetworkInterfaceAttributeHandler)
  .route('/', ActionModifyPrivateDnsNameOptionsHandler)
  .route('/', ActionModifyReservedInstancesHandler)
  .route('/', ActionModifySecurityGroupRulesHandler)
  .route('/', ActionModifySnapshotAttributeHandler)
  .route('/', ActionModifySnapshotTierHandler)
  .route('/', ActionModifySpotFleetRequestHandler)
  .route('/', ActionModifySubnetAttributeHandler)
  .route('/', ActionModifyTrafficMirrorFilterNetworkServicesHandler)
  .route('/', ActionModifyTrafficMirrorFilterRuleHandler)
  .route('/', ActionModifyTrafficMirrorSessionHandler)
  .route('/', ActionModifyTransitGatewayHandler)
  .route('/', ActionModifyTransitGatewayPrefixListReferenceHandler)
  .route('/', ActionModifyTransitGatewayVpcAttachmentHandler)
  .route('/', ActionModifyVerifiedAccessEndpointHandler)
  .route('/', ActionModifyVerifiedAccessEndpointPolicyHandler)
  .route('/', ActionModifyVerifiedAccessGroupHandler)
  .route('/', ActionModifyVerifiedAccessGroupPolicyHandler)
  .route('/', ActionModifyVerifiedAccessInstanceHandler)
  .route('/', ActionModifyVerifiedAccessInstanceLoggingConfigurationHandler)
  .route('/', ActionModifyVerifiedAccessTrustProviderHandler)
  .route('/', ActionModifyVolumeHandler)
  .route('/', ActionModifyVolumeAttributeHandler)
  .route('/', ActionModifyVpcAttributeHandler)
  .route('/', ActionModifyVpcEndpointHandler)
  .route('/', ActionModifyVpcEndpointConnectionNotificationHandler)
  .route('/', ActionModifyVpcEndpointServiceConfigurationHandler)
  .route('/', ActionModifyVpcEndpointServicePayerResponsibilityHandler)
  .route('/', ActionModifyVpcEndpointServicePermissionsHandler)
  .route('/', ActionModifyVpcPeeringConnectionOptionsHandler)
  .route('/', ActionModifyVpcTenancyHandler)
  .route('/', ActionModifyVpnConnectionHandler)
  .route('/', ActionModifyVpnConnectionOptionsHandler)
  .route('/', ActionModifyVpnTunnelCertificateHandler)
  .route('/', ActionModifyVpnTunnelOptionsHandler)
  .route('/', ActionMonitorInstancesHandler)
  .route('/', ActionMoveAddressToVpcHandler)
  .route('/', ActionMoveByoipCidrToIpamHandler)
  .route('/', ActionProvisionByoipCidrHandler)
  .route('/', ActionProvisionIpamPoolCidrHandler)
  .route('/', ActionProvisionPublicIpv4PoolCidrHandler)
  .route('/', ActionPurchaseHostReservationHandler)
  .route('/', ActionPurchaseReservedInstancesOfferingHandler)
  .route('/', ActionPurchaseScheduledInstancesHandler)
  .route('/', ActionRebootInstancesHandler)
  .route('/', ActionRegisterImageHandler)
  .route('/', ActionRegisterInstanceEventNotificationAttributesHandler)
  .route('/', ActionRegisterTransitGatewayMulticastGroupMembersHandler)
  .route('/', ActionRegisterTransitGatewayMulticastGroupSourcesHandler)
  .route('/', ActionRejectTransitGatewayMulticastDomainAssociationsHandler)
  .route('/', ActionRejectTransitGatewayPeeringAttachmentHandler)
  .route('/', ActionRejectTransitGatewayVpcAttachmentHandler)
  .route('/', ActionRejectVpcEndpointConnectionsHandler)
  .route('/', ActionRejectVpcPeeringConnectionHandler)
  .route('/', ActionReleaseAddressHandler)
  .route('/', ActionReleaseHostsHandler)
  .route('/', ActionReleaseIpamPoolAllocationHandler)
  .route('/', ActionReplaceIamInstanceProfileAssociationHandler)
  .route('/', ActionReplaceNetworkAclAssociationHandler)
  .route('/', ActionReplaceNetworkAclEntryHandler)
  .route('/', ActionReplaceRouteHandler)
  .route('/', ActionReplaceRouteTableAssociationHandler)
  .route('/', ActionReplaceTransitGatewayRouteHandler)
  .route('/', ActionReplaceVpnTunnelHandler)
  .route('/', ActionReportInstanceStatusHandler)
  .route('/', ActionRequestSpotFleetHandler)
  .route('/', ActionRequestSpotInstancesHandler)
  .route('/', ActionResetAddressAttributeHandler)
  .route('/', ActionResetEbsDefaultKmsKeyIdHandler)
  .route('/', ActionResetFpgaImageAttributeHandler)
  .route('/', ActionResetImageAttributeHandler)
  .route('/', ActionResetInstanceAttributeHandler)
  .route('/', ActionResetNetworkInterfaceAttributeHandler)
  .route('/', ActionResetSnapshotAttributeHandler)
  .route('/', ActionRestoreAddressToClassicHandler)
  .route('/', ActionRestoreImageFromRecycleBinHandler)
  .route('/', ActionRestoreManagedPrefixListVersionHandler)
  .route('/', ActionRestoreSnapshotFromRecycleBinHandler)
  .route('/', ActionRestoreSnapshotTierHandler)
  .route('/', ActionRevokeClientVpnIngressHandler)
  .route('/', ActionRevokeSecurityGroupEgressHandler)
  .route('/', ActionRevokeSecurityGroupIngressHandler)
  .route('/', ActionRunInstancesHandler)
  .route('/', ActionRunScheduledInstancesHandler)
  .route('/', ActionSearchLocalGatewayRoutesHandler)
  .route('/', ActionSearchTransitGatewayMulticastGroupsHandler)
  .route('/', ActionSearchTransitGatewayRoutesHandler)
  .route('/', ActionSendDiagnosticInterruptHandler)
  .route('/', ActionStartInstancesHandler)
  .route('/', ActionStartNetworkInsightsAccessScopeAnalysisHandler)
  .route('/', ActionStartNetworkInsightsAnalysisHandler)
  .route('/', ActionStartVpcEndpointServicePrivateDnsVerificationHandler)
  .route('/', ActionStopInstancesHandler)
  .route('/', ActionTerminateClientVpnConnectionsHandler)
  .route('/', ActionTerminateInstancesHandler)
  .route('/', ActionUnassignIpv6AddressesHandler)
  .route('/', ActionUnassignPrivateIpAddressesHandler)
  .route('/', ActionUnassignPrivateNatGatewayAddressHandler)
  .route('/', ActionUnmonitorInstancesHandler)
  .route('/', ActionUpdateSecurityGroupRuleDescriptionsEgressHandler)
  .route('/', ActionUpdateSecurityGroupRuleDescriptionsIngressHandler)
  .route('/', ActionWithdrawByoipCidrHandler)

export default app

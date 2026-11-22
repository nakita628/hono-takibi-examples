import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAcceptReservedNodeExchangeHandler,
  ActionAddPartnerHandler,
  ActionAssociateDataShareConsumerHandler,
  ActionAuthorizeClusterSecurityGroupIngressHandler,
  ActionAuthorizeDataShareHandler,
  ActionAuthorizeEndpointAccessHandler,
  ActionAuthorizeSnapshotAccessHandler,
  ActionBatchDeleteClusterSnapshotsHandler,
  ActionBatchModifyClusterSnapshotsHandler,
  ActionCancelResizeHandler,
  ActionCopyClusterSnapshotHandler,
  ActionCreateAuthenticationProfileHandler,
  ActionCreateClusterHandler,
  ActionCreateClusterParameterGroupHandler,
  ActionCreateClusterSecurityGroupHandler,
  ActionCreateClusterSnapshotHandler,
  ActionCreateClusterSubnetGroupHandler,
  ActionCreateEndpointAccessHandler,
  ActionCreateEventSubscriptionHandler,
  ActionCreateHsmClientCertificateHandler,
  ActionCreateHsmConfigurationHandler,
  ActionCreateScheduledActionHandler,
  ActionCreateSnapshotCopyGrantHandler,
  ActionCreateSnapshotScheduleHandler,
  ActionCreateTagsHandler,
  ActionCreateUsageLimitHandler,
  ActionDeauthorizeDataShareHandler,
  ActionDeleteAuthenticationProfileHandler,
  ActionDeleteClusterHandler,
  ActionDeleteClusterParameterGroupHandler,
  ActionDeleteClusterSecurityGroupHandler,
  ActionDeleteClusterSnapshotHandler,
  ActionDeleteClusterSubnetGroupHandler,
  ActionDeleteEndpointAccessHandler,
  ActionDeleteEventSubscriptionHandler,
  ActionDeleteHsmClientCertificateHandler,
  ActionDeleteHsmConfigurationHandler,
  ActionDeletePartnerHandler,
  ActionDeleteScheduledActionHandler,
  ActionDeleteSnapshotCopyGrantHandler,
  ActionDeleteSnapshotScheduleHandler,
  ActionDeleteTagsHandler,
  ActionDeleteUsageLimitHandler,
  ActionDescribeAccountAttributesHandler,
  ActionDescribeAuthenticationProfilesHandler,
  ActionDescribeClusterDbRevisionsHandler,
  ActionDescribeClusterParameterGroupsHandler,
  ActionDescribeClusterParametersHandler,
  ActionDescribeClusterSecurityGroupsHandler,
  ActionDescribeClustersHandler,
  ActionDescribeClusterSnapshotsHandler,
  ActionDescribeClusterSubnetGroupsHandler,
  ActionDescribeClusterTracksHandler,
  ActionDescribeClusterVersionsHandler,
  ActionDescribeDataSharesForConsumerHandler,
  ActionDescribeDataSharesForProducerHandler,
  ActionDescribeDataSharesHandler,
  ActionDescribeDefaultClusterParametersHandler,
  ActionDescribeEndpointAccessHandler,
  ActionDescribeEndpointAuthorizationHandler,
  ActionDescribeEventCategoriesHandler,
  ActionDescribeEventsHandler,
  ActionDescribeEventSubscriptionsHandler,
  ActionDescribeHsmClientCertificatesHandler,
  ActionDescribeHsmConfigurationsHandler,
  ActionDescribeLoggingStatusHandler,
  ActionDescribeNodeConfigurationOptionsHandler,
  ActionDescribeOrderableClusterOptionsHandler,
  ActionDescribePartnersHandler,
  ActionDescribeReservedNodeExchangeStatusHandler,
  ActionDescribeReservedNodeOfferingsHandler,
  ActionDescribeReservedNodesHandler,
  ActionDescribeResizeHandler,
  ActionDescribeScheduledActionsHandler,
  ActionDescribeSnapshotCopyGrantsHandler,
  ActionDescribeSnapshotSchedulesHandler,
  ActionDescribeStorageHandler,
  ActionDescribeTableRestoreStatusHandler,
  ActionDescribeTagsHandler,
  ActionDescribeUsageLimitsHandler,
  ActionDisableLoggingHandler,
  ActionDisableSnapshotCopyHandler,
  ActionDisassociateDataShareConsumerHandler,
  ActionEnableLoggingHandler,
  ActionEnableSnapshotCopyHandler,
  ActionGetClusterCredentialsHandler,
  ActionGetClusterCredentialsWithIAMHandler,
  ActionGetReservedNodeExchangeConfigurationOptionsHandler,
  ActionGetReservedNodeExchangeOfferingsHandler,
  ActionModifyAquaConfigurationHandler,
  ActionModifyAuthenticationProfileHandler,
  ActionModifyClusterDbRevisionHandler,
  ActionModifyClusterHandler,
  ActionModifyClusterIamRolesHandler,
  ActionModifyClusterMaintenanceHandler,
  ActionModifyClusterParameterGroupHandler,
  ActionModifyClusterSnapshotHandler,
  ActionModifyClusterSnapshotScheduleHandler,
  ActionModifyClusterSubnetGroupHandler,
  ActionModifyEndpointAccessHandler,
  ActionModifyEventSubscriptionHandler,
  ActionModifyScheduledActionHandler,
  ActionModifySnapshotCopyRetentionPeriodHandler,
  ActionModifySnapshotScheduleHandler,
  ActionModifyUsageLimitHandler,
  ActionPauseClusterHandler,
  ActionPurchaseReservedNodeOfferingHandler,
  ActionRebootClusterHandler,
  ActionRejectDataShareHandler,
  ActionResetClusterParameterGroupHandler,
  ActionResizeClusterHandler,
  ActionRestoreFromClusterSnapshotHandler,
  ActionRestoreTableFromClusterSnapshotHandler,
  ActionResumeClusterHandler,
  ActionRevokeClusterSecurityGroupIngressHandler,
  ActionRevokeEndpointAccessHandler,
  ActionRevokeSnapshotAccessHandler,
  ActionRotateEncryptionKeyHandler,
  ActionUpdatePartnerStatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAcceptReservedNodeExchangeHandler)
  .route('/', ActionAddPartnerHandler)
  .route('/', ActionAssociateDataShareConsumerHandler)
  .route('/', ActionAuthorizeClusterSecurityGroupIngressHandler)
  .route('/', ActionAuthorizeDataShareHandler)
  .route('/', ActionAuthorizeEndpointAccessHandler)
  .route('/', ActionAuthorizeSnapshotAccessHandler)
  .route('/', ActionBatchDeleteClusterSnapshotsHandler)
  .route('/', ActionBatchModifyClusterSnapshotsHandler)
  .route('/', ActionCancelResizeHandler)
  .route('/', ActionCopyClusterSnapshotHandler)
  .route('/', ActionCreateAuthenticationProfileHandler)
  .route('/', ActionCreateClusterHandler)
  .route('/', ActionCreateClusterParameterGroupHandler)
  .route('/', ActionCreateClusterSecurityGroupHandler)
  .route('/', ActionCreateClusterSnapshotHandler)
  .route('/', ActionCreateClusterSubnetGroupHandler)
  .route('/', ActionCreateEndpointAccessHandler)
  .route('/', ActionCreateEventSubscriptionHandler)
  .route('/', ActionCreateHsmClientCertificateHandler)
  .route('/', ActionCreateHsmConfigurationHandler)
  .route('/', ActionCreateScheduledActionHandler)
  .route('/', ActionCreateSnapshotCopyGrantHandler)
  .route('/', ActionCreateSnapshotScheduleHandler)
  .route('/', ActionCreateTagsHandler)
  .route('/', ActionCreateUsageLimitHandler)
  .route('/', ActionDeauthorizeDataShareHandler)
  .route('/', ActionDeleteAuthenticationProfileHandler)
  .route('/', ActionDeleteClusterHandler)
  .route('/', ActionDeleteClusterParameterGroupHandler)
  .route('/', ActionDeleteClusterSecurityGroupHandler)
  .route('/', ActionDeleteClusterSnapshotHandler)
  .route('/', ActionDeleteClusterSubnetGroupHandler)
  .route('/', ActionDeleteEndpointAccessHandler)
  .route('/', ActionDeleteEventSubscriptionHandler)
  .route('/', ActionDeleteHsmClientCertificateHandler)
  .route('/', ActionDeleteHsmConfigurationHandler)
  .route('/', ActionDeletePartnerHandler)
  .route('/', ActionDeleteScheduledActionHandler)
  .route('/', ActionDeleteSnapshotCopyGrantHandler)
  .route('/', ActionDeleteSnapshotScheduleHandler)
  .route('/', ActionDeleteTagsHandler)
  .route('/', ActionDeleteUsageLimitHandler)
  .route('/', ActionDescribeAccountAttributesHandler)
  .route('/', ActionDescribeAuthenticationProfilesHandler)
  .route('/', ActionDescribeClusterDbRevisionsHandler)
  .route('/', ActionDescribeClusterParameterGroupsHandler)
  .route('/', ActionDescribeClusterParametersHandler)
  .route('/', ActionDescribeClusterSecurityGroupsHandler)
  .route('/', ActionDescribeClusterSnapshotsHandler)
  .route('/', ActionDescribeClusterSubnetGroupsHandler)
  .route('/', ActionDescribeClusterTracksHandler)
  .route('/', ActionDescribeClusterVersionsHandler)
  .route('/', ActionDescribeClustersHandler)
  .route('/', ActionDescribeDataSharesHandler)
  .route('/', ActionDescribeDataSharesForConsumerHandler)
  .route('/', ActionDescribeDataSharesForProducerHandler)
  .route('/', ActionDescribeDefaultClusterParametersHandler)
  .route('/', ActionDescribeEndpointAccessHandler)
  .route('/', ActionDescribeEndpointAuthorizationHandler)
  .route('/', ActionDescribeEventCategoriesHandler)
  .route('/', ActionDescribeEventSubscriptionsHandler)
  .route('/', ActionDescribeEventsHandler)
  .route('/', ActionDescribeHsmClientCertificatesHandler)
  .route('/', ActionDescribeHsmConfigurationsHandler)
  .route('/', ActionDescribeLoggingStatusHandler)
  .route('/', ActionDescribeNodeConfigurationOptionsHandler)
  .route('/', ActionDescribeOrderableClusterOptionsHandler)
  .route('/', ActionDescribePartnersHandler)
  .route('/', ActionDescribeReservedNodeExchangeStatusHandler)
  .route('/', ActionDescribeReservedNodeOfferingsHandler)
  .route('/', ActionDescribeReservedNodesHandler)
  .route('/', ActionDescribeResizeHandler)
  .route('/', ActionDescribeScheduledActionsHandler)
  .route('/', ActionDescribeSnapshotCopyGrantsHandler)
  .route('/', ActionDescribeSnapshotSchedulesHandler)
  .route('/', ActionDescribeStorageHandler)
  .route('/', ActionDescribeTableRestoreStatusHandler)
  .route('/', ActionDescribeTagsHandler)
  .route('/', ActionDescribeUsageLimitsHandler)
  .route('/', ActionDisableLoggingHandler)
  .route('/', ActionDisableSnapshotCopyHandler)
  .route('/', ActionDisassociateDataShareConsumerHandler)
  .route('/', ActionEnableLoggingHandler)
  .route('/', ActionEnableSnapshotCopyHandler)
  .route('/', ActionGetClusterCredentialsHandler)
  .route('/', ActionGetClusterCredentialsWithIAMHandler)
  .route('/', ActionGetReservedNodeExchangeConfigurationOptionsHandler)
  .route('/', ActionGetReservedNodeExchangeOfferingsHandler)
  .route('/', ActionModifyAquaConfigurationHandler)
  .route('/', ActionModifyAuthenticationProfileHandler)
  .route('/', ActionModifyClusterHandler)
  .route('/', ActionModifyClusterDbRevisionHandler)
  .route('/', ActionModifyClusterIamRolesHandler)
  .route('/', ActionModifyClusterMaintenanceHandler)
  .route('/', ActionModifyClusterParameterGroupHandler)
  .route('/', ActionModifyClusterSnapshotHandler)
  .route('/', ActionModifyClusterSnapshotScheduleHandler)
  .route('/', ActionModifyClusterSubnetGroupHandler)
  .route('/', ActionModifyEndpointAccessHandler)
  .route('/', ActionModifyEventSubscriptionHandler)
  .route('/', ActionModifyScheduledActionHandler)
  .route('/', ActionModifySnapshotCopyRetentionPeriodHandler)
  .route('/', ActionModifySnapshotScheduleHandler)
  .route('/', ActionModifyUsageLimitHandler)
  .route('/', ActionPauseClusterHandler)
  .route('/', ActionPurchaseReservedNodeOfferingHandler)
  .route('/', ActionRebootClusterHandler)
  .route('/', ActionRejectDataShareHandler)
  .route('/', ActionResetClusterParameterGroupHandler)
  .route('/', ActionResizeClusterHandler)
  .route('/', ActionRestoreFromClusterSnapshotHandler)
  .route('/', ActionRestoreTableFromClusterSnapshotHandler)
  .route('/', ActionResumeClusterHandler)
  .route('/', ActionRevokeClusterSecurityGroupIngressHandler)
  .route('/', ActionRevokeEndpointAccessHandler)
  .route('/', ActionRevokeSnapshotAccessHandler)
  .route('/', ActionRotateEncryptionKeyHandler)
  .route('/', ActionUpdatePartnerStatusHandler)

export default app

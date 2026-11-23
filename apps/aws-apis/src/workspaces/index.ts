import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetWorkspacesServiceAssociateConnectionAliasHandler,
  xAmzTargetWorkspacesServiceAssociateIpGroupsHandler,
  xAmzTargetWorkspacesServiceAuthorizeIpRulesHandler,
  xAmzTargetWorkspacesServiceCopyWorkspaceImageHandler,
  xAmzTargetWorkspacesServiceCreateConnectClientAddInHandler,
  xAmzTargetWorkspacesServiceCreateConnectionAliasHandler,
  xAmzTargetWorkspacesServiceCreateIpGroupHandler,
  xAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler,
  xAmzTargetWorkspacesServiceCreateTagsHandler,
  xAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageHandler,
  xAmzTargetWorkspacesServiceCreateWorkspaceBundleHandler,
  xAmzTargetWorkspacesServiceCreateWorkspaceImageHandler,
  xAmzTargetWorkspacesServiceCreateWorkspacesHandler,
  xAmzTargetWorkspacesServiceDeleteClientBrandingHandler,
  xAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler,
  xAmzTargetWorkspacesServiceDeleteConnectionAliasHandler,
  xAmzTargetWorkspacesServiceDeleteIpGroupHandler,
  xAmzTargetWorkspacesServiceDeleteTagsHandler,
  xAmzTargetWorkspacesServiceDeleteWorkspaceBundleHandler,
  xAmzTargetWorkspacesServiceDeleteWorkspaceImageHandler,
  xAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryHandler,
  xAmzTargetWorkspacesServiceDescribeAccountHandler,
  xAmzTargetWorkspacesServiceDescribeAccountModificationsHandler,
  xAmzTargetWorkspacesServiceDescribeClientBrandingHandler,
  xAmzTargetWorkspacesServiceDescribeClientPropertiesHandler,
  xAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler,
  xAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler,
  xAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsHandler,
  xAmzTargetWorkspacesServiceDescribeIpGroupsHandler,
  xAmzTargetWorkspacesServiceDescribeTagsHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspaceBundlesHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspaceImagesHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspacesHandler,
  xAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsHandler,
  xAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler,
  xAmzTargetWorkspacesServiceDisassociateIpGroupsHandler,
  xAmzTargetWorkspacesServiceImportClientBrandingHandler,
  xAmzTargetWorkspacesServiceImportWorkspaceImageHandler,
  xAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler,
  xAmzTargetWorkspacesServiceMigrateWorkspaceHandler,
  xAmzTargetWorkspacesServiceModifyAccountHandler,
  xAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler,
  xAmzTargetWorkspacesServiceModifyClientPropertiesHandler,
  xAmzTargetWorkspacesServiceModifySamlPropertiesHandler,
  xAmzTargetWorkspacesServiceModifySelfservicePermissionsHandler,
  xAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesHandler,
  xAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler,
  xAmzTargetWorkspacesServiceModifyWorkspacePropertiesHandler,
  xAmzTargetWorkspacesServiceModifyWorkspaceStateHandler,
  xAmzTargetWorkspacesServiceRebootWorkspacesHandler,
  xAmzTargetWorkspacesServiceRebuildWorkspacesHandler,
  xAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryHandler,
  xAmzTargetWorkspacesServiceRestoreWorkspaceHandler,
  xAmzTargetWorkspacesServiceRevokeIpRulesHandler,
  xAmzTargetWorkspacesServiceStartWorkspacesHandler,
  xAmzTargetWorkspacesServiceStopWorkspacesHandler,
  xAmzTargetWorkspacesServiceTerminateWorkspacesHandler,
  xAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler,
  xAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionHandler,
  xAmzTargetWorkspacesServiceUpdateRulesOfIpGroupHandler,
  xAmzTargetWorkspacesServiceUpdateWorkspaceBundleHandler,
  xAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetWorkspacesServiceAssociateConnectionAliasHandler)
  .route('/', xAmzTargetWorkspacesServiceAssociateIpGroupsHandler)
  .route('/', xAmzTargetWorkspacesServiceAuthorizeIpRulesHandler)
  .route('/', xAmzTargetWorkspacesServiceCopyWorkspaceImageHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateConnectClientAddInHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateConnectionAliasHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateIpGroupHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateTagsHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateWorkspaceBundleHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateWorkspaceImageHandler)
  .route('/', xAmzTargetWorkspacesServiceCreateWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteClientBrandingHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteConnectionAliasHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteIpGroupHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteTagsHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteWorkspaceBundleHandler)
  .route('/', xAmzTargetWorkspacesServiceDeleteWorkspaceImageHandler)
  .route('/', xAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeAccountHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeAccountModificationsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeClientBrandingHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeClientPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeIpGroupsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeTagsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspaceBundlesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspaceImagesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusHandler)
  .route('/', xAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler)
  .route('/', xAmzTargetWorkspacesServiceDisassociateIpGroupsHandler)
  .route('/', xAmzTargetWorkspacesServiceImportClientBrandingHandler)
  .route('/', xAmzTargetWorkspacesServiceImportWorkspaceImageHandler)
  .route('/', xAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler)
  .route('/', xAmzTargetWorkspacesServiceMigrateWorkspaceHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyAccountHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyClientPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifySamlPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifySelfservicePermissionsHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyWorkspacePropertiesHandler)
  .route('/', xAmzTargetWorkspacesServiceModifyWorkspaceStateHandler)
  .route('/', xAmzTargetWorkspacesServiceRebootWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceRebuildWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryHandler)
  .route('/', xAmzTargetWorkspacesServiceRestoreWorkspaceHandler)
  .route('/', xAmzTargetWorkspacesServiceRevokeIpRulesHandler)
  .route('/', xAmzTargetWorkspacesServiceStartWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceStopWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceTerminateWorkspacesHandler)
  .route('/', xAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler)
  .route('/', xAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionHandler)
  .route('/', xAmzTargetWorkspacesServiceUpdateRulesOfIpGroupHandler)
  .route('/', xAmzTargetWorkspacesServiceUpdateWorkspaceBundleHandler)
  .route('/', xAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionHandler)

export default app

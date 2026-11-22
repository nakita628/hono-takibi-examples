import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetWorkspacesServiceAssociateConnectionAliasHandler,
  XAmzTargetWorkspacesServiceAssociateIpGroupsHandler,
  XAmzTargetWorkspacesServiceAuthorizeIpRulesHandler,
  XAmzTargetWorkspacesServiceCopyWorkspaceImageHandler,
  XAmzTargetWorkspacesServiceCreateConnectClientAddInHandler,
  XAmzTargetWorkspacesServiceCreateConnectionAliasHandler,
  XAmzTargetWorkspacesServiceCreateIpGroupHandler,
  XAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler,
  XAmzTargetWorkspacesServiceCreateTagsHandler,
  XAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageHandler,
  XAmzTargetWorkspacesServiceCreateWorkspaceBundleHandler,
  XAmzTargetWorkspacesServiceCreateWorkspaceImageHandler,
  XAmzTargetWorkspacesServiceCreateWorkspacesHandler,
  XAmzTargetWorkspacesServiceDeleteClientBrandingHandler,
  XAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler,
  XAmzTargetWorkspacesServiceDeleteConnectionAliasHandler,
  XAmzTargetWorkspacesServiceDeleteIpGroupHandler,
  XAmzTargetWorkspacesServiceDeleteTagsHandler,
  XAmzTargetWorkspacesServiceDeleteWorkspaceBundleHandler,
  XAmzTargetWorkspacesServiceDeleteWorkspaceImageHandler,
  XAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryHandler,
  XAmzTargetWorkspacesServiceDescribeAccountHandler,
  XAmzTargetWorkspacesServiceDescribeAccountModificationsHandler,
  XAmzTargetWorkspacesServiceDescribeClientBrandingHandler,
  XAmzTargetWorkspacesServiceDescribeClientPropertiesHandler,
  XAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler,
  XAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler,
  XAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsHandler,
  XAmzTargetWorkspacesServiceDescribeIpGroupsHandler,
  XAmzTargetWorkspacesServiceDescribeTagsHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspaceBundlesHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspaceImagesHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspacesHandler,
  XAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsHandler,
  XAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler,
  XAmzTargetWorkspacesServiceDisassociateIpGroupsHandler,
  XAmzTargetWorkspacesServiceImportClientBrandingHandler,
  XAmzTargetWorkspacesServiceImportWorkspaceImageHandler,
  XAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler,
  XAmzTargetWorkspacesServiceMigrateWorkspaceHandler,
  XAmzTargetWorkspacesServiceModifyAccountHandler,
  XAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler,
  XAmzTargetWorkspacesServiceModifyClientPropertiesHandler,
  XAmzTargetWorkspacesServiceModifySamlPropertiesHandler,
  XAmzTargetWorkspacesServiceModifySelfservicePermissionsHandler,
  XAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesHandler,
  XAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler,
  XAmzTargetWorkspacesServiceModifyWorkspacePropertiesHandler,
  XAmzTargetWorkspacesServiceModifyWorkspaceStateHandler,
  XAmzTargetWorkspacesServiceRebootWorkspacesHandler,
  XAmzTargetWorkspacesServiceRebuildWorkspacesHandler,
  XAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryHandler,
  XAmzTargetWorkspacesServiceRestoreWorkspaceHandler,
  XAmzTargetWorkspacesServiceRevokeIpRulesHandler,
  XAmzTargetWorkspacesServiceStartWorkspacesHandler,
  XAmzTargetWorkspacesServiceStopWorkspacesHandler,
  XAmzTargetWorkspacesServiceTerminateWorkspacesHandler,
  XAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler,
  XAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionHandler,
  XAmzTargetWorkspacesServiceUpdateRulesOfIpGroupHandler,
  XAmzTargetWorkspacesServiceUpdateWorkspaceBundleHandler,
  XAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetWorkspacesServiceAssociateConnectionAliasHandler)
  .route('/', XAmzTargetWorkspacesServiceAssociateIpGroupsHandler)
  .route('/', XAmzTargetWorkspacesServiceAuthorizeIpRulesHandler)
  .route('/', XAmzTargetWorkspacesServiceCopyWorkspaceImageHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateConnectClientAddInHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateConnectionAliasHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateIpGroupHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateStandbyWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateTagsHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateWorkspaceBundleHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateWorkspaceImageHandler)
  .route('/', XAmzTargetWorkspacesServiceCreateWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteClientBrandingHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteConnectClientAddInHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteConnectionAliasHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteIpGroupHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteTagsHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteWorkspaceBundleHandler)
  .route('/', XAmzTargetWorkspacesServiceDeleteWorkspaceImageHandler)
  .route('/', XAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeAccountHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeAccountModificationsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeClientBrandingHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeClientPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeConnectClientAddInsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeConnectionAliasesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeIpGroupsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeTagsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspaceBundlesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspaceImagesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusHandler)
  .route('/', XAmzTargetWorkspacesServiceDisassociateConnectionAliasHandler)
  .route('/', XAmzTargetWorkspacesServiceDisassociateIpGroupsHandler)
  .route('/', XAmzTargetWorkspacesServiceImportClientBrandingHandler)
  .route('/', XAmzTargetWorkspacesServiceImportWorkspaceImageHandler)
  .route('/', XAmzTargetWorkspacesServiceListAvailableManagementCidrRangesHandler)
  .route('/', XAmzTargetWorkspacesServiceMigrateWorkspaceHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyAccountHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyClientPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifySamlPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifySelfservicePermissionsHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyWorkspacePropertiesHandler)
  .route('/', XAmzTargetWorkspacesServiceModifyWorkspaceStateHandler)
  .route('/', XAmzTargetWorkspacesServiceRebootWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceRebuildWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryHandler)
  .route('/', XAmzTargetWorkspacesServiceRestoreWorkspaceHandler)
  .route('/', XAmzTargetWorkspacesServiceRevokeIpRulesHandler)
  .route('/', XAmzTargetWorkspacesServiceStartWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceStopWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceTerminateWorkspacesHandler)
  .route('/', XAmzTargetWorkspacesServiceUpdateConnectClientAddInHandler)
  .route('/', XAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionHandler)
  .route('/', XAmzTargetWorkspacesServiceUpdateRulesOfIpGroupHandler)
  .route('/', XAmzTargetWorkspacesServiceUpdateWorkspaceBundleHandler)
  .route('/', XAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionHandler)

export default app

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetWorkspacesServiceAssociateConnectionAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceAssociateIpGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.AssociateIpGroups'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceAuthorizeIpRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.AuthorizeIpRules'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCopyWorkspaceImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateConnectClientAddIn(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateConnectionAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateConnectionAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateIpGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateIpGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateStandbyWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateTags'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateWorkspaceBundle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateWorkspaceImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceCreateWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.CreateWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteClientBranding(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteClientBranding'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteConnectClientAddIn(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteConnectionAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteIpGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteIpGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteTags'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteWorkspaceBundle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeleteWorkspaceImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeAccount(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeAccount'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeAccountModifications(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeAccountModifications'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeClientBranding(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeClientBranding'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeClientProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeClientProperties'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeConnectClientAddIns(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeConnectionAliases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeIpGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeIpGroups'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeTags(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeTags'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaceBundles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaceDirectories(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaceImages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshots(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceDisassociateConnectionAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceDisassociateIpGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.DisassociateIpGroups'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceImportClientBranding(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ImportClientBranding'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceImportWorkspaceImage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceListAvailableManagementCidrRanges(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceMigrateWorkspace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.MigrateWorkspace'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyAccount(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyAccount'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyCertificateBasedAuthProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyClientProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyClientProperties'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifySamlProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifySamlProperties'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifySelfservicePermissions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyWorkspaceAccessProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyWorkspaceCreationProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyWorkspaceProperties(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceModifyWorkspaceState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceRebootWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.RebootWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceRebuildWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.RebuildWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceRegisterWorkspaceDirectory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceRestoreWorkspace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.RestoreWorkspace'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceRevokeIpRules(
  args: InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.RevokeIpRules'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceStartWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.StartWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceStopWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.StopWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceTerminateWorkspaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.TerminateWorkspaces'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceUpdateConnectClientAddIn(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceUpdateConnectionAliasPermission(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceUpdateRulesOfIpGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceUpdateWorkspaceBundle(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle'].$post(args, options),
  )
}

export async function postXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermission(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission'].$post(args, options),
  )
}

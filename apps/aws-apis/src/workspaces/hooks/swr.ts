import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetWorkspacesServiceAssociateConnectionAliasKey() {
  return ['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias'] as const
}

export function getXAmzTargetWorkspacesServiceAssociateIpGroupsKey() {
  return ['#X-Amz-Target=WorkspacesService.AssociateIpGroups'] as const
}

export function getXAmzTargetWorkspacesServiceAuthorizeIpRulesKey() {
  return ['#X-Amz-Target=WorkspacesService.AuthorizeIpRules'] as const
}

export function getXAmzTargetWorkspacesServiceCopyWorkspaceImageKey() {
  return ['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage'] as const
}

export function getXAmzTargetWorkspacesServiceCreateConnectClientAddInKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn'] as const
}

export function getXAmzTargetWorkspacesServiceCreateConnectionAliasKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateConnectionAlias'] as const
}

export function getXAmzTargetWorkspacesServiceCreateIpGroupKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateIpGroup'] as const
}

export function getXAmzTargetWorkspacesServiceCreateStandbyWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceCreateTagsKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateTags'] as const
}

export function getXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage'] as const
}

export function getXAmzTargetWorkspacesServiceCreateWorkspaceBundleKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle'] as const
}

export function getXAmzTargetWorkspacesServiceCreateWorkspaceImageKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage'] as const
}

export function getXAmzTargetWorkspacesServiceCreateWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.CreateWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteClientBrandingKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteClientBranding'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteConnectClientAddInKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteConnectionAliasKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteIpGroupKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteIpGroup'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteTagsKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteTags'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteWorkspaceBundleKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle'] as const
}

export function getXAmzTargetWorkspacesServiceDeleteWorkspaceImageKey() {
  return ['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage'] as const
}

export function getXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryKey() {
  return ['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeAccountKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeAccount'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeAccountModificationsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeAccountModifications'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeClientBrandingKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeClientBranding'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeClientPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeClientProperties'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeConnectClientAddInsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeConnectionAliasesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeIpGroupsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeIpGroups'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeTagsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeTags'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspaceImagesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusKey() {
  return ['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus'] as const
}

export function getXAmzTargetWorkspacesServiceDisassociateConnectionAliasKey() {
  return ['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias'] as const
}

export function getXAmzTargetWorkspacesServiceDisassociateIpGroupsKey() {
  return ['#X-Amz-Target=WorkspacesService.DisassociateIpGroups'] as const
}

export function getXAmzTargetWorkspacesServiceImportClientBrandingKey() {
  return ['#X-Amz-Target=WorkspacesService.ImportClientBranding'] as const
}

export function getXAmzTargetWorkspacesServiceImportWorkspaceImageKey() {
  return ['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage'] as const
}

export function getXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesKey() {
  return ['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges'] as const
}

export function getXAmzTargetWorkspacesServiceMigrateWorkspaceKey() {
  return ['#X-Amz-Target=WorkspacesService.MigrateWorkspace'] as const
}

export function getXAmzTargetWorkspacesServiceModifyAccountKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyAccount'] as const
}

export function getXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifyClientPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyClientProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifySamlPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifySamlProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifySelfservicePermissionsKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions'] as const
}

export function getXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifyWorkspacePropertiesKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties'] as const
}

export function getXAmzTargetWorkspacesServiceModifyWorkspaceStateKey() {
  return ['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState'] as const
}

export function getXAmzTargetWorkspacesServiceRebootWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.RebootWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceRebuildWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.RebuildWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryKey() {
  return ['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory'] as const
}

export function getXAmzTargetWorkspacesServiceRestoreWorkspaceKey() {
  return ['#X-Amz-Target=WorkspacesService.RestoreWorkspace'] as const
}

export function getXAmzTargetWorkspacesServiceRevokeIpRulesKey() {
  return ['#X-Amz-Target=WorkspacesService.RevokeIpRules'] as const
}

export function getXAmzTargetWorkspacesServiceStartWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.StartWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceStopWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.StopWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceTerminateWorkspacesKey() {
  return ['#X-Amz-Target=WorkspacesService.TerminateWorkspaces'] as const
}

export function getXAmzTargetWorkspacesServiceUpdateConnectClientAddInKey() {
  return ['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn'] as const
}

export function getXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionKey() {
  return ['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission'] as const
}

export function getXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupKey() {
  return ['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup'] as const
}

export function getXAmzTargetWorkspacesServiceUpdateWorkspaceBundleKey() {
  return ['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle'] as const
}

export function getXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionKey() {
  return ['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission'] as const
}

export function getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AssociateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceAssociateConnectionAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceAssociateIpGroupsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AssociateIpGroups',
    '/#X-Amz-Target=WorkspacesService.AssociateIpGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceAssociateIpGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceAssociateIpGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.AssociateIpGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AuthorizeIpRules',
    '/#X-Amz-Target=WorkspacesService.AuthorizeIpRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceAuthorizeIpRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.AuthorizeIpRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CopyWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCopyWorkspaceImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateConnectClientAddIn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectionAliasKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.CreateConnectionAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateConnectionAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateConnectionAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateConnectionAlias'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateIpGroupKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateIpGroup',
    '/#X-Amz-Target=WorkspacesService.CreateIpGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateIpGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateIpGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateIpGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces',
    '/#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateStandbyWorkspaces<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateTagsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateTags',
    '/#X-Amz-Target=WorkspacesService.CreateTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateWorkspaceBundle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateWorkspaceImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaces',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceCreateWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceCreateWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.CreateWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteClientBrandingKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteClientBranding',
    '/#X-Amz-Target=WorkspacesService.DeleteClientBranding',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteClientBranding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteClientBrandingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteClientBranding'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteConnectClientAddIn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteConnectionAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteIpGroupKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteIpGroup',
    '/#X-Amz-Target=WorkspacesService.DeleteIpGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteIpGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteIpGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteIpGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteTagsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteTags',
    '/#X-Amz-Target=WorkspacesService.DeleteTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteWorkspaceBundle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeleteWorkspaceImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory',
    '/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeAccount',
    '/#X-Amz-Target=WorkspacesService.DescribeAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeAccountModifications',
    '/#X-Amz-Target=WorkspacesService.DescribeAccountModifications',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeAccountModifications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeAccountModifications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientBrandingKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeClientBranding',
    '/#X-Amz-Target=WorkspacesService.DescribeClientBranding',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeClientBranding<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeClientBrandingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeClientBranding'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeClientProperties',
    '/#X-Amz-Target=WorkspacesService.DescribeClientProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeClientProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeClientProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeConnectClientAddIns<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectionAliases',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeConnectionAliases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeIpGroupsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeIpGroups',
    '/#X-Amz-Target=WorkspacesService.DescribeIpGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeIpGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeIpGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeIpGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeTagsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeTags',
    '/#X-Amz-Target=WorkspacesService.DescribeTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaceBundles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaceImages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshots<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaces',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDisassociateConnectionAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DisassociateIpGroups',
    '/#X-Amz-Target=WorkspacesService.DisassociateIpGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceDisassociateIpGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.DisassociateIpGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceImportClientBrandingKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ImportClientBranding',
    '/#X-Amz-Target=WorkspacesService.ImportClientBranding',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceImportClientBranding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceImportClientBrandingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ImportClientBranding'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceImportWorkspaceImageKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ImportWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceImportWorkspaceImage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceImportWorkspaceImageKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges',
    '/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceListAvailableManagementCidrRanges<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceMigrateWorkspaceKey() {
  return [
    '#X-Amz-Target=WorkspacesService.MigrateWorkspace',
    '/#X-Amz-Target=WorkspacesService.MigrateWorkspace',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceMigrateWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceMigrateWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.MigrateWorkspace'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyAccountKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyAccount',
    '/#X-Amz-Target=WorkspacesService.ModifyAccount',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifyAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyAccount'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyClientPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyClientProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyClientProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyClientProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifyClientPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyClientProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifySamlPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifySamlProperties',
    '/#X-Amz-Target=WorkspacesService.ModifySamlProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifySamlProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifySamlPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifySamlProperties'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions',
    '/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifySelfservicePermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyWorkspaceAccessProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyWorkspaceCreationProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyWorkspaceProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceState',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceModifyWorkspaceState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceRebootWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RebootWorkspaces',
    '/#X-Amz-Target=WorkspacesService.RebootWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceRebootWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceRebootWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.RebootWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceRebuildWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RebuildWorkspaces',
    '/#X-Amz-Target=WorkspacesService.RebuildWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceRebuildWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceRebuildWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.RebuildWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory',
    '/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceRestoreWorkspaceKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RestoreWorkspace',
    '/#X-Amz-Target=WorkspacesService.RestoreWorkspace',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceRestoreWorkspace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceRestoreWorkspaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.RestoreWorkspace'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceRevokeIpRulesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RevokeIpRules',
    '/#X-Amz-Target=WorkspacesService.RevokeIpRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceRevokeIpRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceRevokeIpRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.RevokeIpRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceStartWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.StartWorkspaces',
    '/#X-Amz-Target=WorkspacesService.StartWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceStartWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceStartWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.StartWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceStopWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.StopWorkspaces',
    '/#X-Amz-Target=WorkspacesService.StopWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceStopWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceStopWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.StopWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceTerminateWorkspacesKey() {
  return [
    '#X-Amz-Target=WorkspacesService.TerminateWorkspaces',
    '/#X-Amz-Target=WorkspacesService.TerminateWorkspaces',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceTerminateWorkspaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceTerminateWorkspacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.TerminateWorkspaces'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceUpdateConnectClientAddIn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission',
    '/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermission<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup',
    '/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceUpdateWorkspaceBundle<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission',
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission',
    'POST',
  ] as const
}

export function usePostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermission<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

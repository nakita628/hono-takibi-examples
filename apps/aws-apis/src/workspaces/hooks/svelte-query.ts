import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AssociateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.AssociateConnectionAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceAssociateConnectionAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.AssociateConnectionAlias']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceAssociateConnectionAliasMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceAssociateIpGroupsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AssociateIpGroups',
    '/#X-Amz-Target=WorkspacesService.AssociateIpGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceAssociateIpGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceAssociateIpGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.AssociateIpGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceAssociateIpGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.AssociateIpGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceAssociateIpGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.AuthorizeIpRules',
    '/#X-Amz-Target=WorkspacesService.AuthorizeIpRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.AuthorizeIpRules'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceAuthorizeIpRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.AuthorizeIpRules']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceAuthorizeIpRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CopyWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CopyWorkspaceImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCopyWorkspaceImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CopyWorkspaceImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCopyWorkspaceImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateConnectClientAddIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectClientAddIn']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceCreateConnectClientAddInMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectionAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.CreateConnectionAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateConnectionAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateConnectionAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateConnectionAlias'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateConnectionAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateConnectionAlias']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateConnectionAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateIpGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateIpGroup',
    '/#X-Amz-Target=WorkspacesService.CreateIpGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateIpGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateIpGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateIpGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateIpGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateIpGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateIpGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces',
    '/#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateStandbyWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateStandbyWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceCreateStandbyWorkspacesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateTagsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateTags',
    '/#X-Amz-Target=WorkspacesService.CreateTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateTags'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateUpdatedWorkspaceImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceCreateUpdatedWorkspaceImageMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateWorkspaceBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceBundle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateWorkspaceBundleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaceImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateWorkspaceImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaceImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateWorkspaceImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.CreateWorkspaces',
    '/#X-Amz-Target=WorkspacesService.CreateWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceCreateWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceCreateWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.CreateWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceCreateWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.CreateWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceCreateWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteClientBrandingMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteClientBranding',
    '/#X-Amz-Target=WorkspacesService.DeleteClientBranding',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteClientBrandingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteClientBrandingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteClientBranding'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteClientBranding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeleteClientBranding']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteClientBrandingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteConnectClientAddIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectClientAddIn']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDeleteConnectClientAddInMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.DeleteConnectionAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteConnectionAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeleteConnectionAlias']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteConnectionAliasMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteIpGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteIpGroup',
    '/#X-Amz-Target=WorkspacesService.DeleteIpGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteIpGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteIpGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteIpGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteIpGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteIpGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteIpGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteTagsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteTags',
    '/#X-Amz-Target=WorkspacesService.DeleteTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteTags'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DeleteTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceBundle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteWorkspaceBundleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeleteWorkspaceImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeleteWorkspaceImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDeleteWorkspaceImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory',
    '/#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DeregisterWorkspaceDirectory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDeregisterWorkspaceDirectoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeAccount',
    '/#X-Amz-Target=WorkspacesService.DescribeAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeAccount'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccount']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDescribeAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeAccountModifications',
    '/#X-Amz-Target=WorkspacesService.DescribeAccountModifications',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeAccountModifications'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeAccountModifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeAccountModifications']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeAccountModificationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientBrandingMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeClientBranding',
    '/#X-Amz-Target=WorkspacesService.DescribeClientBranding',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientBrandingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeClientBrandingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeClientBranding'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeClientBranding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientBranding']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeClientBrandingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeClientProperties',
    '/#X-Amz-Target=WorkspacesService.DescribeClientProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeClientProperties'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeClientProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeClientProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeClientPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeConnectClientAddIns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectClientAddIns']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeConnectClientAddInsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliasPermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasPermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeConnectionAliases',
    '/#X-Amz-Target=WorkspacesService.DescribeConnectionAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeConnectionAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeConnectionAliases']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeConnectionAliasesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeIpGroupsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeIpGroups',
    '/#X-Amz-Target=WorkspacesService.DescribeIpGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeIpGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeIpGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeIpGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeIpGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeIpGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDescribeIpGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeTagsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeTags',
    '/#X-Amz-Target=WorkspacesService.DescribeTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeTags'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.DescribeTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDescribeTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceBundles']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspaceBundlesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceDirectories']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspaceDirectoriesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImagePermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagePermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaceImages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceImages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspaceImagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaceSnapshots']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspaceSnapshotsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspaces',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDescribeWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus',
    '/#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DescribeWorkspacesConnectionStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDescribeWorkspacesConnectionStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias',
    '/#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDisassociateConnectionAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateConnectionAlias']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceDisassociateConnectionAliasMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.DisassociateIpGroups',
    '/#X-Amz-Target=WorkspacesService.DisassociateIpGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.DisassociateIpGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceDisassociateIpGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.DisassociateIpGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceDisassociateIpGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceImportClientBrandingMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ImportClientBranding',
    '/#X-Amz-Target=WorkspacesService.ImportClientBranding',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceImportClientBrandingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceImportClientBrandingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ImportClientBranding'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceImportClientBranding<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ImportClientBranding']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceImportClientBrandingMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceImportWorkspaceImageMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ImportWorkspaceImage',
    '/#X-Amz-Target=WorkspacesService.ImportWorkspaceImage',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceImportWorkspaceImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceImportWorkspaceImageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceImportWorkspaceImage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ImportWorkspaceImage']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceImportWorkspaceImageMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges',
    '/#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ListAvailableManagementCidrRanges']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceListAvailableManagementCidrRangesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceMigrateWorkspaceMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.MigrateWorkspace',
    '/#X-Amz-Target=WorkspacesService.MigrateWorkspace',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceMigrateWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceMigrateWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.MigrateWorkspace'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceMigrateWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.MigrateWorkspace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceMigrateWorkspaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyAccountMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyAccount',
    '/#X-Amz-Target=WorkspacesService.ModifyAccount',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyAccount'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.ModifyAccount']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceModifyAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyCertificateBasedAuthProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifyCertificateBasedAuthPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyClientPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyClientProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyClientProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyClientPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyClientPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyClientProperties'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyClientProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyClientProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifyClientPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifySamlPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifySamlProperties',
    '/#X-Amz-Target=WorkspacesService.ModifySamlProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifySamlPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifySamlPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifySamlProperties'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifySamlProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifySamlProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceModifySamlPropertiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions',
    '/#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifySelfservicePermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifySelfservicePermissions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifySelfservicePermissionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceAccessProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifyWorkspaceAccessPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceCreationProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifyWorkspaceCreationPropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyWorkspaceProperties<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceProperties']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceModifyWorkspacePropertiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.ModifyWorkspaceState',
    '/#X-Amz-Target=WorkspacesService.ModifyWorkspaceState',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceModifyWorkspaceState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.ModifyWorkspaceState']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceModifyWorkspaceStateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceRebootWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RebootWorkspaces',
    '/#X-Amz-Target=WorkspacesService.RebootWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceRebootWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceRebootWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.RebootWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceRebootWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.RebootWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceRebootWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceRebuildWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RebuildWorkspaces',
    '/#X-Amz-Target=WorkspacesService.RebuildWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceRebuildWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceRebuildWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.RebuildWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceRebuildWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.RebuildWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceRebuildWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory',
    '/#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.RegisterWorkspaceDirectory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceRegisterWorkspaceDirectoryMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceRestoreWorkspaceMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RestoreWorkspace',
    '/#X-Amz-Target=WorkspacesService.RestoreWorkspace',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceRestoreWorkspaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceRestoreWorkspaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.RestoreWorkspace'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceRestoreWorkspace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.RestoreWorkspace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceRestoreWorkspaceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceRevokeIpRulesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.RevokeIpRules',
    '/#X-Amz-Target=WorkspacesService.RevokeIpRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceRevokeIpRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceRevokeIpRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.RevokeIpRules'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceRevokeIpRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.RevokeIpRules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceRevokeIpRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceStartWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.StartWorkspaces',
    '/#X-Amz-Target=WorkspacesService.StartWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceStartWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceStartWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.StartWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceStartWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.StartWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceStartWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceStopWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.StopWorkspaces',
    '/#X-Amz-Target=WorkspacesService.StopWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceStopWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceStopWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.StopWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceStopWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.StopWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceStopWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceTerminateWorkspacesMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.TerminateWorkspaces',
    '/#X-Amz-Target=WorkspacesService.TerminateWorkspaces',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceTerminateWorkspacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceTerminateWorkspacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.TerminateWorkspaces'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceTerminateWorkspaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.TerminateWorkspaces']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceTerminateWorkspacesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn',
    '/#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceUpdateConnectClientAddIn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectClientAddIn']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceUpdateConnectClientAddInMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission',
    '/#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.UpdateConnectionAliasPermission']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceUpdateConnectionAliasPermissionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup',
    '/#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.UpdateRulesOfIpGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceUpdateRulesOfIpGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle',
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundle<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceBundle']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetWorkspacesServiceUpdateWorkspaceBundleMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionMutationKey() {
  return [
    '#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission',
    '/#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission',
    'POST',
  ] as const
}

export function getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermission<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=WorkspacesService.UpdateWorkspaceImagePermission']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetWorkspacesServiceUpdateWorkspaceImagePermissionMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

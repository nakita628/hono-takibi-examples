import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getArchiveApplicationKey() {
  return ['ArchiveApplication'] as const
}

export function getArchiveWaveKey() {
  return ['ArchiveWave'] as const
}

export function getAssociateApplicationsKey() {
  return ['AssociateApplications'] as const
}

export function getAssociateSourceServersKey() {
  return ['AssociateSourceServers'] as const
}

export function getChangeServerLifeCycleStateKey() {
  return ['ChangeServerLifeCycleState'] as const
}

export function getCreateApplicationKey() {
  return ['CreateApplication'] as const
}

export function getCreateLaunchConfigurationTemplateKey() {
  return ['CreateLaunchConfigurationTemplate'] as const
}

export function getCreateReplicationConfigurationTemplateKey() {
  return ['CreateReplicationConfigurationTemplate'] as const
}

export function getCreateWaveKey() {
  return ['CreateWave'] as const
}

export function getDeleteApplicationKey() {
  return ['DeleteApplication'] as const
}

export function getDeleteJobKey() {
  return ['DeleteJob'] as const
}

export function getDeleteLaunchConfigurationTemplateKey() {
  return ['DeleteLaunchConfigurationTemplate'] as const
}

export function getDeleteReplicationConfigurationTemplateKey() {
  return ['DeleteReplicationConfigurationTemplate'] as const
}

export function getDeleteSourceServerKey() {
  return ['DeleteSourceServer'] as const
}

export function getDeleteVcenterClientKey() {
  return ['DeleteVcenterClient'] as const
}

export function getDeleteWaveKey() {
  return ['DeleteWave'] as const
}

export function getDescribeJobLogItemsKey() {
  return ['DescribeJobLogItems'] as const
}

export function getDescribeJobsKey() {
  return ['DescribeJobs'] as const
}

export function getDescribeLaunchConfigurationTemplatesKey() {
  return ['DescribeLaunchConfigurationTemplates'] as const
}

export function getDescribeReplicationConfigurationTemplatesKey() {
  return ['DescribeReplicationConfigurationTemplates'] as const
}

export function getDescribeSourceServersKey() {
  return ['DescribeSourceServers'] as const
}

export function getDescribeVcenterClientsKey() {
  return ['DescribeVcenterClients'] as const
}

export function getDisassociateApplicationsKey() {
  return ['DisassociateApplications'] as const
}

export function getDisassociateSourceServersKey() {
  return ['DisassociateSourceServers'] as const
}

export function getDisconnectFromServiceKey() {
  return ['DisconnectFromService'] as const
}

export function getFinalizeCutoverKey() {
  return ['FinalizeCutover'] as const
}

export function getGetLaunchConfigurationKey() {
  return ['GetLaunchConfiguration'] as const
}

export function getGetReplicationConfigurationKey() {
  return ['GetReplicationConfiguration'] as const
}

export function getInitializeServiceKey() {
  return ['InitializeService'] as const
}

export function getListApplicationsKey() {
  return ['ListApplications'] as const
}

export function getListExportErrorsKey() {
  return ['ListExportErrors'] as const
}

export function getListExportsKey() {
  return ['ListExports'] as const
}

export function getListImportErrorsKey() {
  return ['ListImportErrors'] as const
}

export function getListImportsKey() {
  return ['ListImports'] as const
}

export function getListSourceServerActionsKey() {
  return ['ListSourceServerActions'] as const
}

export function getListTemplateActionsKey() {
  return ['ListTemplateActions'] as const
}

export function getListWavesKey() {
  return ['ListWaves'] as const
}

export function getMarkAsArchivedKey() {
  return ['MarkAsArchived'] as const
}

export function getPutSourceServerActionKey() {
  return ['PutSourceServerAction'] as const
}

export function getPutTemplateActionKey() {
  return ['PutTemplateAction'] as const
}

export function getRemoveSourceServerActionKey() {
  return ['RemoveSourceServerAction'] as const
}

export function getRemoveTemplateActionKey() {
  return ['RemoveTemplateAction'] as const
}

export function getRetryDataReplicationKey() {
  return ['RetryDataReplication'] as const
}

export function getStartCutoverKey() {
  return ['StartCutover'] as const
}

export function getStartExportKey() {
  return ['StartExport'] as const
}

export function getStartImportKey() {
  return ['StartImport'] as const
}

export function getStartReplicationKey() {
  return ['StartReplication'] as const
}

export function getStartTestKey() {
  return ['StartTest'] as const
}

export function getTerminateTargetInstancesKey() {
  return ['TerminateTargetInstances'] as const
}

export function getUnarchiveApplicationKey() {
  return ['UnarchiveApplication'] as const
}

export function getUnarchiveWaveKey() {
  return ['UnarchiveWave'] as const
}

export function getUpdateApplicationKey() {
  return ['UpdateApplication'] as const
}

export function getUpdateLaunchConfigurationKey() {
  return ['UpdateLaunchConfiguration'] as const
}

export function getUpdateLaunchConfigurationTemplateKey() {
  return ['UpdateLaunchConfigurationTemplate'] as const
}

export function getUpdateReplicationConfigurationKey() {
  return ['UpdateReplicationConfiguration'] as const
}

export function getUpdateReplicationConfigurationTemplateKey() {
  return ['UpdateReplicationConfigurationTemplate'] as const
}

export function getUpdateSourceServerReplicationTypeKey() {
  return ['UpdateSourceServerReplicationType'] as const
}

export function getUpdateWaveKey() {
  return ['UpdateWave'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostArchiveApplicationMutationKey() {
  return ['ArchiveApplication', '/ArchiveApplication', 'POST'] as const
}

export function getPostArchiveApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveApplication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ArchiveApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchiveApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ArchiveApplication.$post>) {
      return parseResponse(client.ArchiveApplication.$post(args, options))
    },
  })
}

export function injectPostArchiveApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ArchiveApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostArchiveApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostArchiveWaveMutationKey() {
  return ['ArchiveWave', '/ArchiveWave', 'POST'] as const
}

export function getPostArchiveWaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveWave.$post>>>>>,
    TError,
    InferRequestType<typeof client.ArchiveWave.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchiveWaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ArchiveWave.$post>) {
      return parseResponse(client.ArchiveWave.$post(args, options))
    },
  })
}

export function injectPostArchiveWave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveWave.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ArchiveWave.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostArchiveWaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAssociateApplicationsMutationKey() {
  return ['AssociateApplications', '/AssociateApplications', 'POST'] as const
}

export function getPostAssociateApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssociateApplications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.AssociateApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AssociateApplications.$post>) {
      return parseResponse(client.AssociateApplications.$post(args, options))
    },
  })
}

export function injectPostAssociateApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.AssociateApplications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.AssociateApplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssociateApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAssociateSourceServersMutationKey() {
  return ['AssociateSourceServers', '/AssociateSourceServers', 'POST'] as const
}

export function getPostAssociateSourceServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssociateSourceServers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.AssociateSourceServers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssociateSourceServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AssociateSourceServers.$post>) {
      return parseResponse(client.AssociateSourceServers.$post(args, options))
    },
  })
}

export function injectPostAssociateSourceServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.AssociateSourceServers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.AssociateSourceServers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAssociateSourceServersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostChangeServerLifeCycleStateMutationKey() {
  return ['ChangeServerLifeCycleState', '/ChangeServerLifeCycleState', 'POST'] as const
}

export function getPostChangeServerLifeCycleStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ChangeServerLifeCycleState.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ChangeServerLifeCycleState.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChangeServerLifeCycleStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ChangeServerLifeCycleState.$post>) {
      return parseResponse(client.ChangeServerLifeCycleState.$post(args, options))
    },
  })
}

export function injectPostChangeServerLifeCycleState<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ChangeServerLifeCycleState.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ChangeServerLifeCycleState.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChangeServerLifeCycleStateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateApplicationMutationKey() {
  return ['CreateApplication', '/CreateApplication', 'POST'] as const
}

export function getPostCreateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateApplication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CreateApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateApplication.$post>) {
      return parseResponse(client.CreateApplication.$post(args, options))
    },
  })
}

export function injectPostCreateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateLaunchConfigurationTemplateMutationKey() {
  return [
    'CreateLaunchConfigurationTemplate',
    '/CreateLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostCreateLaunchConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateLaunchConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateLaunchConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.CreateLaunchConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostCreateLaunchConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CreateLaunchConfigurationTemplate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateLaunchConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateReplicationConfigurationTemplateMutationKey() {
  return [
    'CreateReplicationConfigurationTemplate',
    '/CreateReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostCreateReplicationConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateReplicationConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateReplicationConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.CreateReplicationConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostCreateReplicationConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.CreateReplicationConfigurationTemplate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateReplicationConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateWaveMutationKey() {
  return ['CreateWave', '/CreateWave', 'POST'] as const
}

export function getPostCreateWaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateWave.$post>>>>>,
    TError,
    InferRequestType<typeof client.CreateWave.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateWaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateWave.$post>) {
      return parseResponse(client.CreateWave.$post(args, options))
    },
  })
}

export function injectPostCreateWave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateWave.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateWave.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateWaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteApplicationMutationKey() {
  return ['DeleteApplication', '/DeleteApplication', 'POST'] as const
}

export function getPostDeleteApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteApplication.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteApplication.$post>) {
      return parseResponse(client.DeleteApplication.$post(args, options))
    },
  })
}

export function injectPostDeleteApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteApplication.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteJobMutationKey() {
  return ['DeleteJob', '/DeleteJob', 'POST'] as const
}

export function getPostDeleteJobMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteJob.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteJob.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteJobMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteJob.$post>) {
      return parseResponse(client.DeleteJob.$post(args, options))
    },
  })
}

export function injectPostDeleteJob<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteJob.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteJob.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteJobMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteLaunchConfigurationTemplateMutationKey() {
  return [
    'DeleteLaunchConfigurationTemplate',
    '/DeleteLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostDeleteLaunchConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.DeleteLaunchConfigurationTemplate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteLaunchConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.DeleteLaunchConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostDeleteLaunchConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.DeleteLaunchConfigurationTemplate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteLaunchConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteReplicationConfigurationTemplateMutationKey() {
  return [
    'DeleteReplicationConfigurationTemplate',
    '/DeleteReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostDeleteReplicationConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.DeleteReplicationConfigurationTemplate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteReplicationConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.DeleteReplicationConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostDeleteReplicationConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.DeleteReplicationConfigurationTemplate.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteReplicationConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteSourceServerMutationKey() {
  return ['DeleteSourceServer', '/DeleteSourceServer', 'POST'] as const
}

export function getPostDeleteSourceServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSourceServer.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteSourceServer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteSourceServerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteSourceServer.$post>) {
      return parseResponse(client.DeleteSourceServer.$post(args, options))
    },
  })
}

export function injectPostDeleteSourceServer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSourceServer.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteSourceServer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteSourceServerMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteVcenterClientMutationKey() {
  return ['DeleteVcenterClient', '/DeleteVcenterClient', 'POST'] as const
}

export function getPostDeleteVcenterClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DeleteVcenterClient.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteVcenterClient.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteVcenterClientMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteVcenterClient.$post>) {
      return parseResponse(client.DeleteVcenterClient.$post(args, options))
    },
  })
}

export function injectPostDeleteVcenterClient<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.DeleteVcenterClient.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteVcenterClient.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteVcenterClientMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteWaveMutationKey() {
  return ['DeleteWave', '/DeleteWave', 'POST'] as const
}

export function getPostDeleteWaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteWave.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.DeleteWave.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteWaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteWave.$post>) {
      return parseResponse(client.DeleteWave.$post(args, options))
    },
  })
}

export function injectPostDeleteWave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteWave.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.DeleteWave.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteWaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeJobLogItemsMutationKey() {
  return ['DescribeJobLogItems', '/DescribeJobLogItems', 'POST'] as const
}

export function getPostDescribeJobLogItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobLogItems.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeJobLogItems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeJobLogItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeJobLogItems.$post>) {
      return parseResponse(client.DescribeJobLogItems.$post(args, options))
    },
  })
}

export function injectPostDescribeJobLogItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobLogItems.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeJobLogItems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeJobLogItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeJobsMutationKey() {
  return ['DescribeJobs', '/DescribeJobs', 'POST'] as const
}

export function getPostDescribeJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeJobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeJobs.$post>) {
      return parseResponse(client.DescribeJobs.$post(args, options))
    },
  })
}

export function injectPostDescribeJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DescribeJobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeLaunchConfigurationTemplatesMutationKey() {
  return [
    'DescribeLaunchConfigurationTemplates',
    '/DescribeLaunchConfigurationTemplates',
    'POST',
  ] as const
}

export function getPostDescribeLaunchConfigurationTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeLaunchConfigurationTemplates.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeLaunchConfigurationTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post>,
    ) {
      return parseResponse(client.DescribeLaunchConfigurationTemplates.$post(args, options))
    },
  })
}

export function injectPostDescribeLaunchConfigurationTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.DescribeLaunchConfigurationTemplates.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeLaunchConfigurationTemplatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeReplicationConfigurationTemplatesMutationKey() {
  return [
    'DescribeReplicationConfigurationTemplates',
    '/DescribeReplicationConfigurationTemplates',
    'POST',
  ] as const
}

export function getPostDescribeReplicationConfigurationTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeReplicationConfigurationTemplates.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeReplicationConfigurationTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post>,
    ) {
      return parseResponse(client.DescribeReplicationConfigurationTemplates.$post(args, options))
    },
  })
}

export function injectPostDescribeReplicationConfigurationTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.DescribeReplicationConfigurationTemplates.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeReplicationConfigurationTemplatesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDescribeSourceServersMutationKey() {
  return ['DescribeSourceServers', '/DescribeSourceServers', 'POST'] as const
}

export function getPostDescribeSourceServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSourceServers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DescribeSourceServers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeSourceServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeSourceServers.$post>) {
      return parseResponse(client.DescribeSourceServers.$post(args, options))
    },
  })
}

export function injectPostDescribeSourceServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSourceServers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeSourceServers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDescribeSourceServersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDescribeVcenterClientsQueryKey(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['DescribeVcenterClients', '/DescribeVcenterClients', keyArgs] as const
}

export function getDescribeVcenterClientsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDescribeVcenterClientsQueryKey>
  >({
    queryKey: getDescribeVcenterClientsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.DescribeVcenterClients.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDescribeVcenterClients<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.DescribeVcenterClients.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDescribeVcenterClientsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDescribeVcenterClientsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDisassociateApplicationsMutationKey() {
  return ['DisassociateApplications', '/DisassociateApplications', 'POST'] as const
}

export function getPostDisassociateApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateApplications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DisassociateApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DisassociateApplications.$post>) {
      return parseResponse(client.DisassociateApplications.$post(args, options))
    },
  })
}

export function injectPostDisassociateApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateApplications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DisassociateApplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisassociateApplicationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDisassociateSourceServersMutationKey() {
  return ['DisassociateSourceServers', '/DisassociateSourceServers', 'POST'] as const
}

export function getPostDisassociateSourceServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateSourceServers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DisassociateSourceServers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisassociateSourceServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DisassociateSourceServers.$post>) {
      return parseResponse(client.DisassociateSourceServers.$post(args, options))
    },
  })
}

export function injectPostDisassociateSourceServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateSourceServers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DisassociateSourceServers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisassociateSourceServersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDisconnectFromServiceMutationKey() {
  return ['DisconnectFromService', '/DisconnectFromService', 'POST'] as const
}

export function getPostDisconnectFromServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisconnectFromService.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DisconnectFromService.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisconnectFromServiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DisconnectFromService.$post>) {
      return parseResponse(client.DisconnectFromService.$post(args, options))
    },
  })
}

export function injectPostDisconnectFromService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DisconnectFromService.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DisconnectFromService.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDisconnectFromServiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostFinalizeCutoverMutationKey() {
  return ['FinalizeCutover', '/FinalizeCutover', 'POST'] as const
}

export function getPostFinalizeCutoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FinalizeCutover.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.FinalizeCutover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFinalizeCutoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.FinalizeCutover.$post>) {
      return parseResponse(client.FinalizeCutover.$post(args, options))
    },
  })
}

export function injectPostFinalizeCutover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FinalizeCutover.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.FinalizeCutover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostFinalizeCutoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetLaunchConfigurationMutationKey() {
  return ['GetLaunchConfiguration', '/GetLaunchConfiguration', 'POST'] as const
}

export function getPostGetLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetLaunchConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GetLaunchConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetLaunchConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetLaunchConfiguration.$post>) {
      return parseResponse(client.GetLaunchConfiguration.$post(args, options))
    },
  })
}

export function injectPostGetLaunchConfiguration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetLaunchConfiguration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetLaunchConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetLaunchConfigurationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostGetReplicationConfigurationMutationKey() {
  return ['GetReplicationConfiguration', '/GetReplicationConfiguration', 'POST'] as const
}

export function getPostGetReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetReplicationConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GetReplicationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetReplicationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetReplicationConfiguration.$post>) {
      return parseResponse(client.GetReplicationConfiguration.$post(args, options))
    },
  })
}

export function injectPostGetReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GetReplicationConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.GetReplicationConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetReplicationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostInitializeServiceMutationKey() {
  return ['InitializeService', '/InitializeService', 'POST'] as const
}

export function getPostInitializeServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InitializeService.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.InitializeService.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInitializeServiceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.InitializeService.$post>) {
      return parseResponse(client.InitializeService.$post(args, options))
    },
  })
}

export function injectPostInitializeService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.InitializeService.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.InitializeService.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInitializeServiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListApplicationsMutationKey() {
  return ['ListApplications', '/ListApplications', 'POST'] as const
}

export function getPostListApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListApplications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListApplications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListApplications.$post>) {
      return parseResponse(client.ListApplications.$post(args, options))
    },
  })
}

export function injectPostListApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListApplications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListApplications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListApplicationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListExportErrorsMutationKey() {
  return ['ListExportErrors', '/ListExportErrors', 'POST'] as const
}

export function getPostListExportErrorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListExportErrors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListExportErrors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListExportErrorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListExportErrors.$post>) {
      return parseResponse(client.ListExportErrors.$post(args, options))
    },
  })
}

export function injectPostListExportErrors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListExportErrors.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListExportErrors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListExportErrorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListExportsMutationKey() {
  return ['ListExports', '/ListExports', 'POST'] as const
}

export function getPostListExportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListExports.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListExports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListExportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListExports.$post>) {
      return parseResponse(client.ListExports.$post(args, options))
    },
  })
}

export function injectPostListExports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListExports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListExports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListExportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListImportErrorsMutationKey() {
  return ['ListImportErrors', '/ListImportErrors', 'POST'] as const
}

export function getPostListImportErrorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImportErrors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListImportErrors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImportErrorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImportErrors.$post>) {
      return parseResponse(client.ListImportErrors.$post(args, options))
    },
  })
}

export function injectPostListImportErrors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListImportErrors.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListImportErrors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListImportErrorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListImportsMutationKey() {
  return ['ListImports', '/ListImports', 'POST'] as const
}

export function getPostListImportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImports.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListImports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListImports.$post>) {
      return parseResponse(client.ListImports.$post(args, options))
    },
  })
}

export function injectPostListImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListImports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListImportsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListSourceServerActionsMutationKey() {
  return ['ListSourceServerActions', '/ListSourceServerActions', 'POST'] as const
}

export function getPostListSourceServerActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListSourceServerActions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListSourceServerActions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListSourceServerActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListSourceServerActions.$post>) {
      return parseResponse(client.ListSourceServerActions.$post(args, options))
    },
  })
}

export function injectPostListSourceServerActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListSourceServerActions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListSourceServerActions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListSourceServerActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListTemplateActionsMutationKey() {
  return ['ListTemplateActions', '/ListTemplateActions', 'POST'] as const
}

export function getPostListTemplateActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTemplateActions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTemplateActions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTemplateActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTemplateActions.$post>) {
      return parseResponse(client.ListTemplateActions.$post(args, options))
    },
  })
}

export function injectPostListTemplateActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListTemplateActions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListTemplateActions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListTemplateActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListWavesMutationKey() {
  return ['ListWaves', '/ListWaves', 'POST'] as const
}

export function getPostListWavesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListWaves.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListWaves.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListWavesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListWaves.$post>) {
      return parseResponse(client.ListWaves.$post(args, options))
    },
  })
}

export function injectPostListWaves<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListWaves.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListWaves.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListWavesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostMarkAsArchivedMutationKey() {
  return ['MarkAsArchived', '/MarkAsArchived', 'POST'] as const
}

export function getPostMarkAsArchivedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarkAsArchived.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.MarkAsArchived.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMarkAsArchivedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.MarkAsArchived.$post>) {
      return parseResponse(client.MarkAsArchived.$post(args, options))
    },
  })
}

export function injectPostMarkAsArchived<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarkAsArchived.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.MarkAsArchived.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMarkAsArchivedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPutSourceServerActionMutationKey() {
  return ['PutSourceServerAction', '/PutSourceServerAction', 'POST'] as const
}

export function getPostPutSourceServerActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.PutSourceServerAction.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.PutSourceServerAction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutSourceServerActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutSourceServerAction.$post>) {
      return parseResponse(client.PutSourceServerAction.$post(args, options))
    },
  })
}

export function injectPostPutSourceServerAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutSourceServerAction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutSourceServerAction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutSourceServerActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPutTemplateActionMutationKey() {
  return ['PutTemplateAction', '/PutTemplateAction', 'POST'] as const
}

export function getPostPutTemplateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutTemplateAction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PutTemplateAction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutTemplateActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutTemplateAction.$post>) {
      return parseResponse(client.PutTemplateAction.$post(args, options))
    },
  })
}

export function injectPostPutTemplateAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutTemplateAction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutTemplateAction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutTemplateActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRemoveSourceServerActionMutationKey() {
  return ['RemoveSourceServerAction', '/RemoveSourceServerAction', 'POST'] as const
}

export function getPostRemoveSourceServerActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.RemoveSourceServerAction.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.RemoveSourceServerAction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoveSourceServerActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RemoveSourceServerAction.$post>) {
      return parseResponse(client.RemoveSourceServerAction.$post(args, options))
    },
  })
}

export function injectPostRemoveSourceServerAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.RemoveSourceServerAction.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.RemoveSourceServerAction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemoveSourceServerActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRemoveTemplateActionMutationKey() {
  return ['RemoveTemplateAction', '/RemoveTemplateAction', 'POST'] as const
}

export function getPostRemoveTemplateActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.RemoveTemplateAction.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.RemoveTemplateAction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoveTemplateActionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RemoveTemplateAction.$post>) {
      return parseResponse(client.RemoveTemplateAction.$post(args, options))
    },
  })
}

export function injectPostRemoveTemplateAction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.RemoveTemplateAction.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.RemoveTemplateAction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRemoveTemplateActionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRetryDataReplicationMutationKey() {
  return ['RetryDataReplication', '/RetryDataReplication', 'POST'] as const
}

export function getPostRetryDataReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RetryDataReplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.RetryDataReplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRetryDataReplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RetryDataReplication.$post>) {
      return parseResponse(client.RetryDataReplication.$post(args, options))
    },
  })
}

export function injectPostRetryDataReplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RetryDataReplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RetryDataReplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRetryDataReplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartCutoverMutationKey() {
  return ['StartCutover', '/StartCutover', 'POST'] as const
}

export function getPostStartCutoverMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartCutover.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StartCutover.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartCutoverMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartCutover.$post>) {
      return parseResponse(client.StartCutover.$post(args, options))
    },
  })
}

export function injectPostStartCutover<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartCutover.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StartCutover.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartCutoverMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartExportMutationKey() {
  return ['StartExport', '/StartExport', 'POST'] as const
}

export function getPostStartExportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartExport.$post>>>>>,
    TError,
    InferRequestType<typeof client.StartExport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartExport.$post>) {
      return parseResponse(client.StartExport.$post(args, options))
    },
  })
}

export function injectPostStartExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartExport.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StartExport.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartExportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartImportMutationKey() {
  return ['StartImport', '/StartImport', 'POST'] as const
}

export function getPostStartImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartImport.$post>>>>>,
    TError,
    InferRequestType<typeof client.StartImport.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartImport.$post>) {
      return parseResponse(client.StartImport.$post(args, options))
    },
  })
}

export function injectPostStartImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartImport.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StartImport.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartReplicationMutationKey() {
  return ['StartReplication', '/StartReplication', 'POST'] as const
}

export function getPostStartReplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartReplication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StartReplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartReplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartReplication.$post>) {
      return parseResponse(client.StartReplication.$post(args, options))
    },
  })
}

export function injectPostStartReplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StartReplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.StartReplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartReplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartTestMutationKey() {
  return ['StartTest', '/StartTest', 'POST'] as const
}

export function getPostStartTestMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartTest.$post>>>>>,
    TError,
    InferRequestType<typeof client.StartTest.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartTest.$post>) {
      return parseResponse(client.StartTest.$post(args, options))
    },
  })
}

export function injectPostStartTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartTest.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.StartTest.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartTestMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTerminateTargetInstancesMutationKey() {
  return ['TerminateTargetInstances', '/TerminateTargetInstances', 'POST'] as const
}

export function getPostTerminateTargetInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.TerminateTargetInstances.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.TerminateTargetInstances.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTerminateTargetInstancesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.TerminateTargetInstances.$post>) {
      return parseResponse(client.TerminateTargetInstances.$post(args, options))
    },
  })
}

export function injectPostTerminateTargetInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.TerminateTargetInstances.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.TerminateTargetInstances.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTerminateTargetInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUnarchiveApplicationMutationKey() {
  return ['UnarchiveApplication', '/UnarchiveApplication', 'POST'] as const
}

export function getPostUnarchiveApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveApplication.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.UnarchiveApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnarchiveApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UnarchiveApplication.$post>) {
      return parseResponse(client.UnarchiveApplication.$post(args, options))
    },
  })
}

export function injectPostUnarchiveApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UnarchiveApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUnarchiveApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUnarchiveWaveMutationKey() {
  return ['UnarchiveWave', '/UnarchiveWave', 'POST'] as const
}

export function getPostUnarchiveWaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveWave.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UnarchiveWave.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnarchiveWaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UnarchiveWave.$post>) {
      return parseResponse(client.UnarchiveWave.$post(args, options))
    },
  })
}

export function injectPostUnarchiveWave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveWave.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UnarchiveWave.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUnarchiveWaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateApplicationMutationKey() {
  return ['UpdateApplication', '/UpdateApplication', 'POST'] as const
}

export function getPostUpdateApplicationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateApplication.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateApplication.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateApplicationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateApplication.$post>) {
      return parseResponse(client.UpdateApplication.$post(args, options))
    },
  })
}

export function injectPostUpdateApplication<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateApplication.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateApplication.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateApplicationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateLaunchConfigurationMutationKey() {
  return ['UpdateLaunchConfiguration', '/UpdateLaunchConfiguration', 'POST'] as const
}

export function getPostUpdateLaunchConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLaunchConfiguration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateLaunchConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateLaunchConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateLaunchConfiguration.$post>) {
      return parseResponse(client.UpdateLaunchConfiguration.$post(args, options))
    },
  })
}

export function injectPostUpdateLaunchConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLaunchConfiguration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateLaunchConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateLaunchConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateLaunchConfigurationTemplateMutationKey() {
  return [
    'UpdateLaunchConfigurationTemplate',
    '/UpdateLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostUpdateLaunchConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateLaunchConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateLaunchConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.UpdateLaunchConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostUpdateLaunchConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateLaunchConfigurationTemplate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateLaunchConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateReplicationConfigurationMutationKey() {
  return ['UpdateReplicationConfiguration', '/UpdateReplicationConfiguration', 'POST'] as const
}

export function getPostUpdateReplicationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateReplicationConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateReplicationConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateReplicationConfigurationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateReplicationConfiguration.$post>) {
      return parseResponse(client.UpdateReplicationConfiguration.$post(args, options))
    },
  })
}

export function injectPostUpdateReplicationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateReplicationConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateReplicationConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateReplicationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateReplicationConfigurationTemplateMutationKey() {
  return [
    'UpdateReplicationConfigurationTemplate',
    '/UpdateReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function getPostUpdateReplicationConfigurationTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateReplicationConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateReplicationConfigurationTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post>,
    ) {
      return parseResponse(client.UpdateReplicationConfigurationTemplate.$post(args, options))
    },
  })
}

export function injectPostUpdateReplicationConfigurationTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateReplicationConfigurationTemplate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateReplicationConfigurationTemplateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateSourceServerReplicationTypeMutationKey() {
  return [
    'UpdateSourceServerReplicationType',
    '/UpdateSourceServerReplicationType',
    'POST',
  ] as const
}

export function getPostUpdateSourceServerReplicationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateSourceServerReplicationType.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateSourceServerReplicationType.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateSourceServerReplicationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.UpdateSourceServerReplicationType.$post>,
    ) {
      return parseResponse(client.UpdateSourceServerReplicationType.$post(args, options))
    },
  })
}

export function injectPostUpdateSourceServerReplicationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateSourceServerReplicationType.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateSourceServerReplicationType.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateSourceServerReplicationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateWaveMutationKey() {
  return ['UpdateWave', '/UpdateWave', 'POST'] as const
}

export function getPostUpdateWaveMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateWave.$post>>>>>,
    TError,
    InferRequestType<typeof client.UpdateWave.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateWaveMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateWave.$post>) {
      return parseResponse(client.UpdateWave.$post(args, options))
    },
  })
}

export function injectPostUpdateWave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateWave.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateWave.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateWaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

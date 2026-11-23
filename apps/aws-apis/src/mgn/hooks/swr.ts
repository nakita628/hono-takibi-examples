import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostArchiveApplicationKey() {
  return ['ArchiveApplication', '/ArchiveApplication', 'POST'] as const
}

export function usePostArchiveApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveApplication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ArchiveApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArchiveApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ArchiveApplication.$post> }) =>
        parseResponse(client.ArchiveApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostArchiveWaveKey() {
  return ['ArchiveWave', '/ArchiveWave', 'POST'] as const
}

export function usePostArchiveWave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ArchiveWave.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ArchiveWave.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArchiveWaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ArchiveWave.$post> }) =>
        parseResponse(client.ArchiveWave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateApplicationsKey() {
  return ['AssociateApplications', '/AssociateApplications', 'POST'] as const
}

export function usePostAssociateApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssociateApplications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.AssociateApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.AssociateApplications.$post> },
      ) => parseResponse(client.AssociateApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssociateSourceServersKey() {
  return ['AssociateSourceServers', '/AssociateSourceServers', 'POST'] as const
}

export function usePostAssociateSourceServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssociateSourceServers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.AssociateSourceServers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssociateSourceServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.AssociateSourceServers.$post> },
      ) => parseResponse(client.AssociateSourceServers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChangeServerLifeCycleStateKey() {
  return ['ChangeServerLifeCycleState', '/ChangeServerLifeCycleState', 'POST'] as const
}

export function usePostChangeServerLifeCycleState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ChangeServerLifeCycleState.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ChangeServerLifeCycleState.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangeServerLifeCycleStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ChangeServerLifeCycleState.$post> },
      ) => parseResponse(client.ChangeServerLifeCycleState.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateApplicationKey() {
  return ['CreateApplication', '/CreateApplication', 'POST'] as const
}

export function usePostCreateApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateApplication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateApplication.$post> }) =>
        parseResponse(client.CreateApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateLaunchConfigurationTemplateKey() {
  return [
    'CreateLaunchConfigurationTemplate',
    '/CreateLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostCreateLaunchConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateLaunchConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateLaunchConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateLaunchConfigurationTemplate.$post> },
      ) => parseResponse(client.CreateLaunchConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateReplicationConfigurationTemplateKey() {
  return [
    'CreateReplicationConfigurationTemplate',
    '/CreateReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostCreateReplicationConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.CreateReplicationConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateReplicationConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.CreateReplicationConfigurationTemplate.$post> },
      ) => parseResponse(client.CreateReplicationConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateWaveKey() {
  return ['CreateWave', '/CreateWave', 'POST'] as const
}

export function usePostCreateWave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateWave.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreateWave.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateWaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateWave.$post> }) =>
        parseResponse(client.CreateWave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteApplicationKey() {
  return ['DeleteApplication', '/DeleteApplication', 'POST'] as const
}

export function usePostDeleteApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteApplication.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteApplication.$post> }) =>
        parseResponse(client.DeleteApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteJobKey() {
  return ['DeleteJob', '/DeleteJob', 'POST'] as const
}

export function usePostDeleteJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteJob.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteJob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteJob.$post> }) =>
        parseResponse(client.DeleteJob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteLaunchConfigurationTemplateKey() {
  return [
    'DeleteLaunchConfigurationTemplate',
    '/DeleteLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostDeleteLaunchConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.DeleteLaunchConfigurationTemplate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteLaunchConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteLaunchConfigurationTemplate.$post> },
      ) => parseResponse(client.DeleteLaunchConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteReplicationConfigurationTemplateKey() {
  return [
    'DeleteReplicationConfigurationTemplate',
    '/DeleteReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostDeleteReplicationConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.DeleteReplicationConfigurationTemplate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteReplicationConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.DeleteReplicationConfigurationTemplate.$post> },
      ) => parseResponse(client.DeleteReplicationConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteSourceServerKey() {
  return ['DeleteSourceServer', '/DeleteSourceServer', 'POST'] as const
}

export function usePostDeleteSourceServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DeleteSourceServer.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteSourceServer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteSourceServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteSourceServer.$post> }) =>
        parseResponse(client.DeleteSourceServer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteVcenterClientKey() {
  return ['DeleteVcenterClient', '/DeleteVcenterClient', 'POST'] as const
}

export function usePostDeleteVcenterClient<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DeleteVcenterClient.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteVcenterClient.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteVcenterClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteVcenterClient.$post> }) =>
        parseResponse(client.DeleteVcenterClient.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteWaveKey() {
  return ['DeleteWave', '/DeleteWave', 'POST'] as const
}

export function usePostDeleteWave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteWave.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.DeleteWave.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteWaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteWave.$post> }) =>
        parseResponse(client.DeleteWave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeJobLogItemsKey() {
  return ['DescribeJobLogItems', '/DescribeJobLogItems', 'POST'] as const
}

export function usePostDescribeJobLogItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobLogItems.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeJobLogItems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeJobLogItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeJobLogItems.$post> }) =>
        parseResponse(client.DescribeJobLogItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeJobsKey() {
  return ['DescribeJobs', '/DescribeJobs', 'POST'] as const
}

export function usePostDescribeJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeJobs.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeJobs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeJobs.$post> }) =>
        parseResponse(client.DescribeJobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeLaunchConfigurationTemplatesKey() {
  return [
    'DescribeLaunchConfigurationTemplates',
    '/DescribeLaunchConfigurationTemplates',
    'POST',
  ] as const
}

export function usePostDescribeLaunchConfigurationTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeLaunchConfigurationTemplates.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeLaunchConfigurationTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.DescribeLaunchConfigurationTemplates.$post> },
      ) => parseResponse(client.DescribeLaunchConfigurationTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeReplicationConfigurationTemplatesKey() {
  return [
    'DescribeReplicationConfigurationTemplates',
    '/DescribeReplicationConfigurationTemplates',
    'POST',
  ] as const
}

export function usePostDescribeReplicationConfigurationTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.DescribeReplicationConfigurationTemplates.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeReplicationConfigurationTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.DescribeReplicationConfigurationTemplates.$post> },
      ) =>
        parseResponse(client.DescribeReplicationConfigurationTemplates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeSourceServersKey() {
  return ['DescribeSourceServers', '/DescribeSourceServers', 'POST'] as const
}

export function usePostDescribeSourceServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DescribeSourceServers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeSourceServers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeSourceServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DescribeSourceServers.$post> },
      ) => parseResponse(client.DescribeSourceServers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDescribeVcenterClientsKey(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['DescribeVcenterClients', '/DescribeVcenterClients', keyArgs] as const
}

export function useGetDescribeVcenterClients<TError = unknown>(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDescribeVcenterClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.DescribeVcenterClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDescribeVcenterClients<TError = unknown>(
  args: InferRequestType<typeof client.DescribeVcenterClients.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDescribeVcenterClientsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.DescribeVcenterClients.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.DescribeVcenterClients.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDisassociateApplicationsKey() {
  return ['DisassociateApplications', '/DisassociateApplications', 'POST'] as const
}

export function usePostDisassociateApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateApplications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DisassociateApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DisassociateApplications.$post> },
      ) => parseResponse(client.DisassociateApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisassociateSourceServersKey() {
  return ['DisassociateSourceServers', '/DisassociateSourceServers', 'POST'] as const
}

export function usePostDisassociateSourceServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisassociateSourceServers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DisassociateSourceServers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisassociateSourceServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DisassociateSourceServers.$post> },
      ) => parseResponse(client.DisassociateSourceServers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDisconnectFromServiceKey() {
  return ['DisconnectFromService', '/DisconnectFromService', 'POST'] as const
}

export function usePostDisconnectFromService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DisconnectFromService.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DisconnectFromService.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisconnectFromServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DisconnectFromService.$post> },
      ) => parseResponse(client.DisconnectFromService.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFinalizeCutoverKey() {
  return ['FinalizeCutover', '/FinalizeCutover', 'POST'] as const
}

export function usePostFinalizeCutover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.FinalizeCutover.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.FinalizeCutover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFinalizeCutoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.FinalizeCutover.$post> }) =>
        parseResponse(client.FinalizeCutover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetLaunchConfigurationKey() {
  return ['GetLaunchConfiguration', '/GetLaunchConfiguration', 'POST'] as const
}

export function usePostGetLaunchConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetLaunchConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetLaunchConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetLaunchConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetLaunchConfiguration.$post> },
      ) => parseResponse(client.GetLaunchConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetReplicationConfigurationKey() {
  return ['GetReplicationConfiguration', '/GetReplicationConfiguration', 'POST'] as const
}

export function usePostGetReplicationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetReplicationConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetReplicationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetReplicationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetReplicationConfiguration.$post> },
      ) => parseResponse(client.GetReplicationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInitializeServiceKey() {
  return ['InitializeService', '/InitializeService', 'POST'] as const
}

export function usePostInitializeService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.InitializeService.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.InitializeService.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInitializeServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.InitializeService.$post> }) =>
        parseResponse(client.InitializeService.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListApplicationsKey() {
  return ['ListApplications', '/ListApplications', 'POST'] as const
}

export function usePostListApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListApplications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListApplications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListApplications.$post> }) =>
        parseResponse(client.ListApplications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListExportErrorsKey() {
  return ['ListExportErrors', '/ListExportErrors', 'POST'] as const
}

export function usePostListExportErrors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListExportErrors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListExportErrors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListExportErrorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListExportErrors.$post> }) =>
        parseResponse(client.ListExportErrors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListExportsKey() {
  return ['ListExports', '/ListExports', 'POST'] as const
}

export function usePostListExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListExports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListExports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListExportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListExports.$post> }) =>
        parseResponse(client.ListExports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImportErrorsKey() {
  return ['ListImportErrors', '/ListImportErrors', 'POST'] as const
}

export function usePostListImportErrors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImportErrors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListImportErrors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImportErrorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImportErrors.$post> }) =>
        parseResponse(client.ListImportErrors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListImportsKey() {
  return ['ListImports', '/ListImports', 'POST'] as const
}

export function usePostListImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListImports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListImports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListImports.$post> }) =>
        parseResponse(client.ListImports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListSourceServerActionsKey() {
  return ['ListSourceServerActions', '/ListSourceServerActions', 'POST'] as const
}

export function usePostListSourceServerActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListSourceServerActions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListSourceServerActions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListSourceServerActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListSourceServerActions.$post> },
      ) => parseResponse(client.ListSourceServerActions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTemplateActionsKey() {
  return ['ListTemplateActions', '/ListTemplateActions', 'POST'] as const
}

export function usePostListTemplateActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTemplateActions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTemplateActions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTemplateActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTemplateActions.$post> }) =>
        parseResponse(client.ListTemplateActions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListWavesKey() {
  return ['ListWaves', '/ListWaves', 'POST'] as const
}

export function usePostListWaves<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListWaves.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListWaves.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListWavesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListWaves.$post> }) =>
        parseResponse(client.ListWaves.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarkAsArchivedKey() {
  return ['MarkAsArchived', '/MarkAsArchived', 'POST'] as const
}

export function usePostMarkAsArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.MarkAsArchived.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.MarkAsArchived.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarkAsArchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.MarkAsArchived.$post> }) =>
        parseResponse(client.MarkAsArchived.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutSourceServerActionKey() {
  return ['PutSourceServerAction', '/PutSourceServerAction', 'POST'] as const
}

export function usePostPutSourceServerAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.PutSourceServerAction.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutSourceServerAction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutSourceServerActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.PutSourceServerAction.$post> },
      ) => parseResponse(client.PutSourceServerAction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutTemplateActionKey() {
  return ['PutTemplateAction', '/PutTemplateAction', 'POST'] as const
}

export function usePostPutTemplateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutTemplateAction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutTemplateAction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutTemplateActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutTemplateAction.$post> }) =>
        parseResponse(client.PutTemplateAction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemoveSourceServerActionKey() {
  return ['RemoveSourceServerAction', '/RemoveSourceServerAction', 'POST'] as const
}

export function usePostRemoveSourceServerAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.RemoveSourceServerAction.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.RemoveSourceServerAction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoveSourceServerActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.RemoveSourceServerAction.$post> },
      ) => parseResponse(client.RemoveSourceServerAction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemoveTemplateActionKey() {
  return ['RemoveTemplateAction', '/RemoveTemplateAction', 'POST'] as const
}

export function usePostRemoveTemplateAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.RemoveTemplateAction.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.RemoveTemplateAction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoveTemplateActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.RemoveTemplateAction.$post> },
      ) => parseResponse(client.RemoveTemplateAction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRetryDataReplicationKey() {
  return ['RetryDataReplication', '/RetryDataReplication', 'POST'] as const
}

export function usePostRetryDataReplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RetryDataReplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.RetryDataReplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRetryDataReplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.RetryDataReplication.$post> },
      ) => parseResponse(client.RetryDataReplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartCutoverKey() {
  return ['StartCutover', '/StartCutover', 'POST'] as const
}

export function usePostStartCutover<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartCutover.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartCutover.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartCutoverKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartCutover.$post> }) =>
        parseResponse(client.StartCutover.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartExportKey() {
  return ['StartExport', '/StartExport', 'POST'] as const
}

export function usePostStartExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartExport.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.StartExport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartExport.$post> }) =>
        parseResponse(client.StartExport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartImportKey() {
  return ['StartImport', '/StartImport', 'POST'] as const
}

export function usePostStartImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartImport.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.StartImport.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartImport.$post> }) =>
        parseResponse(client.StartImport.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartReplicationKey() {
  return ['StartReplication', '/StartReplication', 'POST'] as const
}

export function usePostStartReplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartReplication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartReplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartReplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartReplication.$post> }) =>
        parseResponse(client.StartReplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartTestKey() {
  return ['StartTest', '/StartTest', 'POST'] as const
}

export function usePostStartTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartTest.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.StartTest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartTest.$post> }) =>
        parseResponse(client.StartTest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTerminateTargetInstancesKey() {
  return ['TerminateTargetInstances', '/TerminateTargetInstances', 'POST'] as const
}

export function usePostTerminateTargetInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.TerminateTargetInstances.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.TerminateTargetInstances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTerminateTargetInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.TerminateTargetInstances.$post> },
      ) => parseResponse(client.TerminateTargetInstances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnarchiveApplicationKey() {
  return ['UnarchiveApplication', '/UnarchiveApplication', 'POST'] as const
}

export function usePostUnarchiveApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveApplication.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UnarchiveApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnarchiveApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UnarchiveApplication.$post> },
      ) => parseResponse(client.UnarchiveApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnarchiveWaveKey() {
  return ['UnarchiveWave', '/UnarchiveWave', 'POST'] as const
}

export function usePostUnarchiveWave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UnarchiveWave.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UnarchiveWave.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnarchiveWaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UnarchiveWave.$post> }) =>
        parseResponse(client.UnarchiveWave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateApplicationKey() {
  return ['UpdateApplication', '/UpdateApplication', 'POST'] as const
}

export function usePostUpdateApplication<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateApplication.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateApplication.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateApplicationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateApplication.$post> }) =>
        parseResponse(client.UpdateApplication.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateLaunchConfigurationKey() {
  return ['UpdateLaunchConfiguration', '/UpdateLaunchConfiguration', 'POST'] as const
}

export function usePostUpdateLaunchConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLaunchConfiguration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateLaunchConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateLaunchConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateLaunchConfiguration.$post> },
      ) => parseResponse(client.UpdateLaunchConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateLaunchConfigurationTemplateKey() {
  return [
    'UpdateLaunchConfigurationTemplate',
    '/UpdateLaunchConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostUpdateLaunchConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateLaunchConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateLaunchConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateLaunchConfigurationTemplate.$post> },
      ) => parseResponse(client.UpdateLaunchConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateReplicationConfigurationKey() {
  return ['UpdateReplicationConfiguration', '/UpdateReplicationConfiguration', 'POST'] as const
}

export function usePostUpdateReplicationConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateReplicationConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateReplicationConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateReplicationConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateReplicationConfiguration.$post> },
      ) => parseResponse(client.UpdateReplicationConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateReplicationConfigurationTemplateKey() {
  return [
    'UpdateReplicationConfigurationTemplate',
    '/UpdateReplicationConfigurationTemplate',
    'POST',
  ] as const
}

export function usePostUpdateReplicationConfigurationTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateReplicationConfigurationTemplate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateReplicationConfigurationTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.UpdateReplicationConfigurationTemplate.$post> },
      ) => parseResponse(client.UpdateReplicationConfigurationTemplate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateSourceServerReplicationTypeKey() {
  return [
    'UpdateSourceServerReplicationType',
    '/UpdateSourceServerReplicationType',
    'POST',
  ] as const
}

export function usePostUpdateSourceServerReplicationType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.UpdateSourceServerReplicationType.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateSourceServerReplicationType.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateSourceServerReplicationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateSourceServerReplicationType.$post> },
      ) => parseResponse(client.UpdateSourceServerReplicationType.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateWaveKey() {
  return ['UpdateWave', '/UpdateWave', 'POST'] as const
}

export function usePostUpdateWave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateWave.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.UpdateWave.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateWaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateWave.$post> }) =>
        parseResponse(client.UpdateWave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

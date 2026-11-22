import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAddLFTagsToResourceKey() {
  return ['AddLFTagsToResource'] as const
}

export function getAssumeDecoratedRoleWithSAMLKey() {
  return ['AssumeDecoratedRoleWithSAML'] as const
}

export function getBatchGrantPermissionsKey() {
  return ['BatchGrantPermissions'] as const
}

export function getBatchRevokePermissionsKey() {
  return ['BatchRevokePermissions'] as const
}

export function getCancelTransactionKey() {
  return ['CancelTransaction'] as const
}

export function getCommitTransactionKey() {
  return ['CommitTransaction'] as const
}

export function getCreateDataCellsFilterKey() {
  return ['CreateDataCellsFilter'] as const
}

export function getCreateLFTagKey() {
  return ['CreateLFTag'] as const
}

export function getDeleteDataCellsFilterKey() {
  return ['DeleteDataCellsFilter'] as const
}

export function getDeleteLFTagKey() {
  return ['DeleteLFTag'] as const
}

export function getDeleteObjectsOnCancelKey() {
  return ['DeleteObjectsOnCancel'] as const
}

export function getDeregisterResourceKey() {
  return ['DeregisterResource'] as const
}

export function getDescribeResourceKey() {
  return ['DescribeResource'] as const
}

export function getDescribeTransactionKey() {
  return ['DescribeTransaction'] as const
}

export function getExtendTransactionKey() {
  return ['ExtendTransaction'] as const
}

export function getGetDataCellsFilterKey() {
  return ['GetDataCellsFilter'] as const
}

export function getGetDataLakeSettingsKey() {
  return ['GetDataLakeSettings'] as const
}

export function getGetEffectivePermissionsForPathKey() {
  return ['GetEffectivePermissionsForPath'] as const
}

export function getGetLFTagKey() {
  return ['GetLFTag'] as const
}

export function getGetQueryStateKey() {
  return ['GetQueryState'] as const
}

export function getGetQueryStatisticsKey() {
  return ['GetQueryStatistics'] as const
}

export function getGetResourceLFTagsKey() {
  return ['GetResourceLFTags'] as const
}

export function getGetTableObjectsKey() {
  return ['GetTableObjects'] as const
}

export function getGetTemporaryGluePartitionCredentialsKey() {
  return ['GetTemporaryGluePartitionCredentials'] as const
}

export function getGetTemporaryGlueTableCredentialsKey() {
  return ['GetTemporaryGlueTableCredentials'] as const
}

export function getGetWorkUnitResultsKey() {
  return ['GetWorkUnitResults'] as const
}

export function getGetWorkUnitsKey() {
  return ['GetWorkUnits'] as const
}

export function getGrantPermissionsKey() {
  return ['GrantPermissions'] as const
}

export function getListDataCellsFilterKey() {
  return ['ListDataCellsFilter'] as const
}

export function getListLFTagsKey() {
  return ['ListLFTags'] as const
}

export function getListPermissionsKey() {
  return ['ListPermissions'] as const
}

export function getListResourcesKey() {
  return ['ListResources'] as const
}

export function getListTableStorageOptimizersKey() {
  return ['ListTableStorageOptimizers'] as const
}

export function getListTransactionsKey() {
  return ['ListTransactions'] as const
}

export function getPutDataLakeSettingsKey() {
  return ['PutDataLakeSettings'] as const
}

export function getRegisterResourceKey() {
  return ['RegisterResource'] as const
}

export function getRemoveLFTagsFromResourceKey() {
  return ['RemoveLFTagsFromResource'] as const
}

export function getRevokePermissionsKey() {
  return ['RevokePermissions'] as const
}

export function getSearchDatabasesByLFTagsKey() {
  return ['SearchDatabasesByLFTags'] as const
}

export function getSearchTablesByLFTagsKey() {
  return ['SearchTablesByLFTags'] as const
}

export function getStartQueryPlanningKey() {
  return ['StartQueryPlanning'] as const
}

export function getStartTransactionKey() {
  return ['StartTransaction'] as const
}

export function getUpdateDataCellsFilterKey() {
  return ['UpdateDataCellsFilter'] as const
}

export function getUpdateLFTagKey() {
  return ['UpdateLFTag'] as const
}

export function getUpdateResourceKey() {
  return ['UpdateResource'] as const
}

export function getUpdateTableObjectsKey() {
  return ['UpdateTableObjects'] as const
}

export function getUpdateTableStorageOptimizerKey() {
  return ['UpdateTableStorageOptimizer'] as const
}

export function getPostAddLFTagsToResourceKey() {
  return ['AddLFTagsToResource', '/AddLFTagsToResource', 'POST'] as const
}

export function usePostAddLFTagsToResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AddLFTagsToResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.AddLFTagsToResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddLFTagsToResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.AddLFTagsToResource.$post> }) =>
        parseResponse(client.AddLFTagsToResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAssumeDecoratedRoleWithSAMLKey() {
  return ['AssumeDecoratedRoleWithSAML', '/AssumeDecoratedRoleWithSAML', 'POST'] as const
}

export function usePostAssumeDecoratedRoleWithSAML<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssumeDecoratedRoleWithSAML.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssumeDecoratedRoleWithSAMLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post> },
      ) => parseResponse(client.AssumeDecoratedRoleWithSAML.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchGrantPermissionsKey() {
  return ['BatchGrantPermissions', '/BatchGrantPermissions', 'POST'] as const
}

export function usePostBatchGrantPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BatchGrantPermissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchGrantPermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchGrantPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.BatchGrantPermissions.$post> },
      ) => parseResponse(client.BatchGrantPermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBatchRevokePermissionsKey() {
  return ['BatchRevokePermissions', '/BatchRevokePermissions', 'POST'] as const
}

export function usePostBatchRevokePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BatchRevokePermissions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchRevokePermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchRevokePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.BatchRevokePermissions.$post> },
      ) => parseResponse(client.BatchRevokePermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancelTransactionKey() {
  return ['CancelTransaction', '/CancelTransaction', 'POST'] as const
}

export function usePostCancelTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CancelTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CancelTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancelTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CancelTransaction.$post> }) =>
        parseResponse(client.CancelTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCommitTransactionKey() {
  return ['CommitTransaction', '/CommitTransaction', 'POST'] as const
}

export function usePostCommitTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CommitTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.CommitTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCommitTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CommitTransaction.$post> }) =>
        parseResponse(client.CommitTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateDataCellsFilterKey() {
  return ['CreateDataCellsFilter', '/CreateDataCellsFilter', 'POST'] as const
}

export function usePostCreateDataCellsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateDataCellsFilter.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.CreateDataCellsFilter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateDataCellsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.CreateDataCellsFilter.$post> },
      ) => parseResponse(client.CreateDataCellsFilter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateLFTagKey() {
  return ['CreateLFTag', '/CreateLFTag', 'POST'] as const
}

export function usePostCreateLFTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateLFTag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.CreateLFTag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateLFTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.CreateLFTag.$post> }) =>
        parseResponse(client.CreateLFTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteDataCellsFilterKey() {
  return ['DeleteDataCellsFilter', '/DeleteDataCellsFilter', 'POST'] as const
}

export function usePostDeleteDataCellsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteDataCellsFilter.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteDataCellsFilter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteDataCellsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteDataCellsFilter.$post> },
      ) => parseResponse(client.DeleteDataCellsFilter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteLFTagKey() {
  return ['DeleteLFTag', '/DeleteLFTag', 'POST'] as const
}

export function usePostDeleteLFTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteLFTag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.DeleteLFTag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteLFTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeleteLFTag.$post> }) =>
        parseResponse(client.DeleteLFTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteObjectsOnCancelKey() {
  return ['DeleteObjectsOnCancel', '/DeleteObjectsOnCancel', 'POST'] as const
}

export function usePostDeleteObjectsOnCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteObjectsOnCancel.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeleteObjectsOnCancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteObjectsOnCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.DeleteObjectsOnCancel.$post> },
      ) => parseResponse(client.DeleteObjectsOnCancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeregisterResourceKey() {
  return ['DeregisterResource', '/DeregisterResource', 'POST'] as const
}

export function usePostDeregisterResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeregisterResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DeregisterResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeregisterResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DeregisterResource.$post> }) =>
        parseResponse(client.DeregisterResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeResourceKey() {
  return ['DescribeResource', '/DescribeResource', 'POST'] as const
}

export function usePostDescribeResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeResource.$post> }) =>
        parseResponse(client.DescribeResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDescribeTransactionKey() {
  return ['DescribeTransaction', '/DescribeTransaction', 'POST'] as const
}

export function usePostDescribeTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.DescribeTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDescribeTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.DescribeTransaction.$post> }) =>
        parseResponse(client.DescribeTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExtendTransactionKey() {
  return ['ExtendTransaction', '/ExtendTransaction', 'POST'] as const
}

export function usePostExtendTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExtendTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ExtendTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExtendTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ExtendTransaction.$post> }) =>
        parseResponse(client.ExtendTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDataCellsFilterKey() {
  return ['GetDataCellsFilter', '/GetDataCellsFilter', 'POST'] as const
}

export function usePostGetDataCellsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDataCellsFilter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetDataCellsFilter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDataCellsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetDataCellsFilter.$post> }) =>
        parseResponse(client.GetDataCellsFilter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDataLakeSettingsKey() {
  return ['GetDataLakeSettings', '/GetDataLakeSettings', 'POST'] as const
}

export function usePostGetDataLakeSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDataLakeSettings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetDataLakeSettings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDataLakeSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetDataLakeSettings.$post> }) =>
        parseResponse(client.GetDataLakeSettings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetEffectivePermissionsForPathKey() {
  return ['GetEffectivePermissionsForPath', '/GetEffectivePermissionsForPath', 'POST'] as const
}

export function usePostGetEffectivePermissionsForPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetEffectivePermissionsForPath.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetEffectivePermissionsForPath.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetEffectivePermissionsForPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetEffectivePermissionsForPath.$post> },
      ) => parseResponse(client.GetEffectivePermissionsForPath.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetLFTagKey() {
  return ['GetLFTag', '/GetLFTag', 'POST'] as const
}

export function usePostGetLFTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetLFTag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.GetLFTag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetLFTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetLFTag.$post> }) =>
        parseResponse(client.GetLFTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetQueryStateKey() {
  return ['GetQueryState', '/GetQueryState', 'POST'] as const
}

export function usePostGetQueryState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryState.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetQueryState.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetQueryStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetQueryState.$post> }) =>
        parseResponse(client.GetQueryState.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetQueryStatisticsKey() {
  return ['GetQueryStatistics', '/GetQueryStatistics', 'POST'] as const
}

export function usePostGetQueryStatistics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryStatistics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetQueryStatistics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetQueryStatisticsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetQueryStatistics.$post> }) =>
        parseResponse(client.GetQueryStatistics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetResourceLFTagsKey() {
  return ['GetResourceLFTags', '/GetResourceLFTags', 'POST'] as const
}

export function usePostGetResourceLFTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetResourceLFTags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetResourceLFTags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetResourceLFTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetResourceLFTags.$post> }) =>
        parseResponse(client.GetResourceLFTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTableObjectsKey() {
  return ['GetTableObjects', '/GetTableObjects', 'POST'] as const
}

export function usePostGetTableObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetTableObjects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetTableObjects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTableObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetTableObjects.$post> }) =>
        parseResponse(client.GetTableObjects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTemporaryGluePartitionCredentialsKey() {
  return [
    'GetTemporaryGluePartitionCredentials',
    '/GetTemporaryGluePartitionCredentials',
    'POST',
  ] as const
}

export function usePostGetTemporaryGluePartitionCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetTemporaryGluePartitionCredentials.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTemporaryGluePartitionCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post> },
      ) => parseResponse(client.GetTemporaryGluePartitionCredentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTemporaryGlueTableCredentialsKey() {
  return ['GetTemporaryGlueTableCredentials', '/GetTemporaryGlueTableCredentials', 'POST'] as const
}

export function usePostGetTemporaryGlueTableCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetTemporaryGlueTableCredentials.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTemporaryGlueTableCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post> },
      ) => parseResponse(client.GetTemporaryGlueTableCredentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetWorkUnitResultsKey() {
  return ['GetWorkUnitResults', '/GetWorkUnitResults', 'POST'] as const
}

export function usePostGetWorkUnitResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnitResults.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetWorkUnitResults.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetWorkUnitResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetWorkUnitResults.$post> }) =>
        parseResponse(client.GetWorkUnitResults.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetWorkUnitsKey() {
  return ['GetWorkUnits', '/GetWorkUnits', 'POST'] as const
}

export function usePostGetWorkUnits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnits.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetWorkUnits.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetWorkUnitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetWorkUnits.$post> }) =>
        parseResponse(client.GetWorkUnits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGrantPermissionsKey() {
  return ['GrantPermissions', '/GrantPermissions', 'POST'] as const
}

export function usePostGrantPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GrantPermissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GrantPermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGrantPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GrantPermissions.$post> }) =>
        parseResponse(client.GrantPermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListDataCellsFilterKey() {
  return ['ListDataCellsFilter', '/ListDataCellsFilter', 'POST'] as const
}

export function usePostListDataCellsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListDataCellsFilter.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListDataCellsFilter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListDataCellsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListDataCellsFilter.$post> }) =>
        parseResponse(client.ListDataCellsFilter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListLFTagsKey() {
  return ['ListLFTags', '/ListLFTags', 'POST'] as const
}

export function usePostListLFTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListLFTags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ListLFTags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListLFTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListLFTags.$post> }) =>
        parseResponse(client.ListLFTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListPermissionsKey() {
  return ['ListPermissions', '/ListPermissions', 'POST'] as const
}

export function usePostListPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListPermissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListPermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListPermissions.$post> }) =>
        parseResponse(client.ListPermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListResourcesKey() {
  return ['ListResources', '/ListResources', 'POST'] as const
}

export function usePostListResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListResources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListResources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListResources.$post> }) =>
        parseResponse(client.ListResources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTableStorageOptimizersKey() {
  return ['ListTableStorageOptimizers', '/ListTableStorageOptimizers', 'POST'] as const
}

export function usePostListTableStorageOptimizers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListTableStorageOptimizers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTableStorageOptimizers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTableStorageOptimizersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.ListTableStorageOptimizers.$post> },
      ) => parseResponse(client.ListTableStorageOptimizers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTransactionsKey() {
  return ['ListTransactions', '/ListTransactions', 'POST'] as const
}

export function usePostListTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTransactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ListTransactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ListTransactions.$post> }) =>
        parseResponse(client.ListTransactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutDataLakeSettingsKey() {
  return ['PutDataLakeSettings', '/PutDataLakeSettings', 'POST'] as const
}

export function usePostPutDataLakeSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutDataLakeSettings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.PutDataLakeSettings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutDataLakeSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.PutDataLakeSettings.$post> }) =>
        parseResponse(client.PutDataLakeSettings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRegisterResourceKey() {
  return ['RegisterResource', '/RegisterResource', 'POST'] as const
}

export function usePostRegisterResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RegisterResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RegisterResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RegisterResource.$post> }) =>
        parseResponse(client.RegisterResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRemoveLFTagsFromResourceKey() {
  return ['RemoveLFTagsFromResource', '/RemoveLFTagsFromResource', 'POST'] as const
}

export function usePostRemoveLFTagsFromResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RemoveLFTagsFromResource.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.RemoveLFTagsFromResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRemoveLFTagsFromResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.RemoveLFTagsFromResource.$post> },
      ) => parseResponse(client.RemoveLFTagsFromResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRevokePermissionsKey() {
  return ['RevokePermissions', '/RevokePermissions', 'POST'] as const
}

export function usePostRevokePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RevokePermissions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RevokePermissions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRevokePermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RevokePermissions.$post> }) =>
        parseResponse(client.RevokePermissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchDatabasesByLFTagsKey() {
  return ['SearchDatabasesByLFTags', '/SearchDatabasesByLFTags', 'POST'] as const
}

export function usePostSearchDatabasesByLFTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SearchDatabasesByLFTags.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.SearchDatabasesByLFTags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchDatabasesByLFTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SearchDatabasesByLFTags.$post> },
      ) => parseResponse(client.SearchDatabasesByLFTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSearchTablesByLFTagsKey() {
  return ['SearchTablesByLFTags', '/SearchTablesByLFTags', 'POST'] as const
}

export function usePostSearchTablesByLFTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SearchTablesByLFTags.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.SearchTablesByLFTags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSearchTablesByLFTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.SearchTablesByLFTags.$post> },
      ) => parseResponse(client.SearchTablesByLFTags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartQueryPlanningKey() {
  return ['StartQueryPlanning', '/StartQueryPlanning', 'POST'] as const
}

export function usePostStartQueryPlanning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartQueryPlanning.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartQueryPlanning.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartQueryPlanningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartQueryPlanning.$post> }) =>
        parseResponse(client.StartQueryPlanning.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartTransactionKey() {
  return ['StartTransaction', '/StartTransaction', 'POST'] as const
}

export function usePostStartTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.StartTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.StartTransaction.$post> }) =>
        parseResponse(client.StartTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateDataCellsFilterKey() {
  return ['UpdateDataCellsFilter', '/UpdateDataCellsFilter', 'POST'] as const
}

export function usePostUpdateDataCellsFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateDataCellsFilter.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateDataCellsFilter.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateDataCellsFilterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateDataCellsFilter.$post> },
      ) => parseResponse(client.UpdateDataCellsFilter.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateLFTagKey() {
  return ['UpdateLFTag', '/UpdateLFTag', 'POST'] as const
}

export function usePostUpdateLFTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLFTag.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.UpdateLFTag.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateLFTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateLFTag.$post> }) =>
        parseResponse(client.UpdateLFTag.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateResourceKey() {
  return ['UpdateResource', '/UpdateResource', 'POST'] as const
}

export function usePostUpdateResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateResource.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateResource.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateResource.$post> }) =>
        parseResponse(client.UpdateResource.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateTableObjectsKey() {
  return ['UpdateTableObjects', '/UpdateTableObjects', 'POST'] as const
}

export function usePostUpdateTableObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateTableObjects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateTableObjects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateTableObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.UpdateTableObjects.$post> }) =>
        parseResponse(client.UpdateTableObjects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateTableStorageOptimizerKey() {
  return ['UpdateTableStorageOptimizer', '/UpdateTableStorageOptimizer', 'POST'] as const
}

export function usePostUpdateTableStorageOptimizer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateTableStorageOptimizer.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.UpdateTableStorageOptimizer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateTableStorageOptimizerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.UpdateTableStorageOptimizer.$post> },
      ) => parseResponse(client.UpdateTableStorageOptimizer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

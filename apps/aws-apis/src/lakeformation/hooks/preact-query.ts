import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostAddLFTagsToResourceMutationKey() {
  return ['AddLFTagsToResource', '/AddLFTagsToResource', 'POST'] as const
}

export function getPostAddLFTagsToResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.AddLFTagsToResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.AddLFTagsToResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddLFTagsToResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AddLFTagsToResource.$post>) {
      return parseResponse(client.AddLFTagsToResource.$post(args, options))
    },
  })
}

export function usePostAddLFTagsToResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.AddLFTagsToResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.AddLFTagsToResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddLFTagsToResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAssumeDecoratedRoleWithSAMLMutationKey() {
  return ['AssumeDecoratedRoleWithSAML', '/AssumeDecoratedRoleWithSAML', 'POST'] as const
}

export function getPostAssumeDecoratedRoleWithSAMLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.AssumeDecoratedRoleWithSAML.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAssumeDecoratedRoleWithSAMLMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post>) {
      return parseResponse(client.AssumeDecoratedRoleWithSAML.$post(args, options))
    },
  })
}

export function usePostAssumeDecoratedRoleWithSAML<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.AssumeDecoratedRoleWithSAML.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.AssumeDecoratedRoleWithSAML.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAssumeDecoratedRoleWithSAMLMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBatchGrantPermissionsMutationKey() {
  return ['BatchGrantPermissions', '/BatchGrantPermissions', 'POST'] as const
}

export function getPostBatchGrantPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BatchGrantPermissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.BatchGrantPermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchGrantPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchGrantPermissions.$post>) {
      return parseResponse(client.BatchGrantPermissions.$post(args, options))
    },
  })
}

export function usePostBatchGrantPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BatchGrantPermissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BatchGrantPermissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchGrantPermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBatchRevokePermissionsMutationKey() {
  return ['BatchRevokePermissions', '/BatchRevokePermissions', 'POST'] as const
}

export function getPostBatchRevokePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.BatchRevokePermissions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.BatchRevokePermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchRevokePermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchRevokePermissions.$post>) {
      return parseResponse(client.BatchRevokePermissions.$post(args, options))
    },
  })
}

export function usePostBatchRevokePermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BatchRevokePermissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BatchRevokePermissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchRevokePermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCancelTransactionMutationKey() {
  return ['CancelTransaction', '/CancelTransaction', 'POST'] as const
}

export function getPostCancelTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CancelTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CancelTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancelTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CancelTransaction.$post>) {
      return parseResponse(client.CancelTransaction.$post(args, options))
    },
  })
}

export function usePostCancelTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CancelTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CancelTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancelTransactionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCommitTransactionMutationKey() {
  return ['CommitTransaction', '/CommitTransaction', 'POST'] as const
}

export function getPostCommitTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CommitTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.CommitTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCommitTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CommitTransaction.$post>) {
      return parseResponse(client.CommitTransaction.$post(args, options))
    },
  })
}

export function usePostCommitTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CommitTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CommitTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCommitTransactionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateDataCellsFilterMutationKey() {
  return ['CreateDataCellsFilter', '/CreateDataCellsFilter', 'POST'] as const
}

export function getPostCreateDataCellsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.CreateDataCellsFilter.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.CreateDataCellsFilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateDataCellsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateDataCellsFilter.$post>) {
      return parseResponse(client.CreateDataCellsFilter.$post(args, options))
    },
  })
}

export function usePostCreateDataCellsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.CreateDataCellsFilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.CreateDataCellsFilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateDataCellsFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCreateLFTagMutationKey() {
  return ['CreateLFTag', '/CreateLFTag', 'POST'] as const
}

export function getPostCreateLFTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateLFTag.$post>>>>>,
    TError,
    InferRequestType<typeof client.CreateLFTag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateLFTagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.CreateLFTag.$post>) {
      return parseResponse(client.CreateLFTag.$post(args, options))
    },
  })
}

export function usePostCreateLFTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.CreateLFTag.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.CreateLFTag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCreateLFTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteDataCellsFilterMutationKey() {
  return ['DeleteDataCellsFilter', '/DeleteDataCellsFilter', 'POST'] as const
}

export function getPostDeleteDataCellsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteDataCellsFilter.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteDataCellsFilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteDataCellsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteDataCellsFilter.$post>) {
      return parseResponse(client.DeleteDataCellsFilter.$post(args, options))
    },
  })
}

export function usePostDeleteDataCellsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeleteDataCellsFilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeleteDataCellsFilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteDataCellsFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteLFTagMutationKey() {
  return ['DeleteLFTag', '/DeleteLFTag', 'POST'] as const
}

export function getPostDeleteLFTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteLFTag.$post>>>>>,
    TError,
    InferRequestType<typeof client.DeleteLFTag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteLFTagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteLFTag.$post>) {
      return parseResponse(client.DeleteLFTag.$post(args, options))
    },
  })
}

export function usePostDeleteLFTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeleteLFTag.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.DeleteLFTag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteLFTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeleteObjectsOnCancelMutationKey() {
  return ['DeleteObjectsOnCancel', '/DeleteObjectsOnCancel', 'POST'] as const
}

export function getPostDeleteObjectsOnCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.DeleteObjectsOnCancel.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.DeleteObjectsOnCancel.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteObjectsOnCancelMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeleteObjectsOnCancel.$post>) {
      return parseResponse(client.DeleteObjectsOnCancel.$post(args, options))
    },
  })
}

export function usePostDeleteObjectsOnCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeleteObjectsOnCancel.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeleteObjectsOnCancel.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeleteObjectsOnCancelMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeregisterResourceMutationKey() {
  return ['DeregisterResource', '/DeregisterResource', 'POST'] as const
}

export function getPostDeregisterResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DeregisterResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DeregisterResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeregisterResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DeregisterResource.$post>) {
      return parseResponse(client.DeregisterResource.$post(args, options))
    },
  })
}

export function usePostDeregisterResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DeregisterResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DeregisterResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeregisterResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeResourceMutationKey() {
  return ['DescribeResource', '/DescribeResource', 'POST'] as const
}

export function getPostDescribeResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeResource.$post>) {
      return parseResponse(client.DescribeResource.$post(args, options))
    },
  })
}

export function usePostDescribeResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDescribeTransactionMutationKey() {
  return ['DescribeTransaction', '/DescribeTransaction', 'POST'] as const
}

export function getPostDescribeTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.DescribeTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.DescribeTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDescribeTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.DescribeTransaction.$post>) {
      return parseResponse(client.DescribeTransaction.$post(args, options))
    },
  })
}

export function usePostDescribeTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.DescribeTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.DescribeTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDescribeTransactionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExtendTransactionMutationKey() {
  return ['ExtendTransaction', '/ExtendTransaction', 'POST'] as const
}

export function getPostExtendTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExtendTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ExtendTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExtendTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ExtendTransaction.$post>) {
      return parseResponse(client.ExtendTransaction.$post(args, options))
    },
  })
}

export function usePostExtendTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ExtendTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ExtendTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExtendTransactionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetDataCellsFilterMutationKey() {
  return ['GetDataCellsFilter', '/GetDataCellsFilter', 'POST'] as const
}

export function getPostGetDataCellsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDataCellsFilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetDataCellsFilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDataCellsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetDataCellsFilter.$post>) {
      return parseResponse(client.GetDataCellsFilter.$post(args, options))
    },
  })
}

export function usePostGetDataCellsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetDataCellsFilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetDataCellsFilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDataCellsFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetDataLakeSettingsMutationKey() {
  return ['GetDataLakeSettings', '/GetDataLakeSettings', 'POST'] as const
}

export function getPostGetDataLakeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDataLakeSettings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetDataLakeSettings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDataLakeSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetDataLakeSettings.$post>) {
      return parseResponse(client.GetDataLakeSettings.$post(args, options))
    },
  })
}

export function usePostGetDataLakeSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetDataLakeSettings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetDataLakeSettings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDataLakeSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetEffectivePermissionsForPathMutationKey() {
  return ['GetEffectivePermissionsForPath', '/GetEffectivePermissionsForPath', 'POST'] as const
}

export function getPostGetEffectivePermissionsForPathMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetEffectivePermissionsForPath.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.GetEffectivePermissionsForPath.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetEffectivePermissionsForPathMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetEffectivePermissionsForPath.$post>) {
      return parseResponse(client.GetEffectivePermissionsForPath.$post(args, options))
    },
  })
}

export function usePostGetEffectivePermissionsForPath<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GetEffectivePermissionsForPath.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.GetEffectivePermissionsForPath.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetEffectivePermissionsForPathMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetLFTagMutationKey() {
  return ['GetLFTag', '/GetLFTag', 'POST'] as const
}

export function getPostGetLFTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetLFTag.$post>>>>>,
    TError,
    InferRequestType<typeof client.GetLFTag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetLFTagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetLFTag.$post>) {
      return parseResponse(client.GetLFTag.$post(args, options))
    },
  })
}

export function usePostGetLFTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetLFTag.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetLFTag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetLFTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetQueryStateMutationKey() {
  return ['GetQueryState', '/GetQueryState', 'POST'] as const
}

export function getPostGetQueryStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryState.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetQueryState.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetQueryStateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetQueryState.$post>) {
      return parseResponse(client.GetQueryState.$post(args, options))
    },
  })
}

export function usePostGetQueryState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryState.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetQueryState.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetQueryStateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetQueryStatisticsMutationKey() {
  return ['GetQueryStatistics', '/GetQueryStatistics', 'POST'] as const
}

export function getPostGetQueryStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryStatistics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetQueryStatistics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetQueryStatisticsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetQueryStatistics.$post>) {
      return parseResponse(client.GetQueryStatistics.$post(args, options))
    },
  })
}

export function usePostGetQueryStatistics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetQueryStatistics.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetQueryStatistics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetQueryStatisticsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetResourceLFTagsMutationKey() {
  return ['GetResourceLFTags', '/GetResourceLFTags', 'POST'] as const
}

export function getPostGetResourceLFTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetResourceLFTags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetResourceLFTags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetResourceLFTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetResourceLFTags.$post>) {
      return parseResponse(client.GetResourceLFTags.$post(args, options))
    },
  })
}

export function usePostGetResourceLFTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetResourceLFTags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetResourceLFTags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetResourceLFTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetTableObjectsMutationKey() {
  return ['GetTableObjects', '/GetTableObjects', 'POST'] as const
}

export function getPostGetTableObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetTableObjects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetTableObjects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTableObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetTableObjects.$post>) {
      return parseResponse(client.GetTableObjects.$post(args, options))
    },
  })
}

export function usePostGetTableObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetTableObjects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetTableObjects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTableObjectsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetTemporaryGluePartitionCredentialsMutationKey() {
  return [
    'GetTemporaryGluePartitionCredentials',
    '/GetTemporaryGluePartitionCredentials',
    'POST',
  ] as const
}

export function getPostGetTemporaryGluePartitionCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetTemporaryGluePartitionCredentials.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTemporaryGluePartitionCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post>,
    ) {
      return parseResponse(client.GetTemporaryGluePartitionCredentials.$post(args, options))
    },
  })
}

export function usePostGetTemporaryGluePartitionCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GetTemporaryGluePartitionCredentials.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.GetTemporaryGluePartitionCredentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTemporaryGluePartitionCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetTemporaryGlueTableCredentialsMutationKey() {
  return ['GetTemporaryGlueTableCredentials', '/GetTemporaryGlueTableCredentials', 'POST'] as const
}

export function getPostGetTemporaryGlueTableCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.GetTemporaryGlueTableCredentials.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTemporaryGlueTableCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post>) {
      return parseResponse(client.GetTemporaryGlueTableCredentials.$post(args, options))
    },
  })
}

export function usePostGetTemporaryGlueTableCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.GetTemporaryGlueTableCredentials.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.GetTemporaryGlueTableCredentials.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetTemporaryGlueTableCredentialsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetWorkUnitResultsMutationKey() {
  return ['GetWorkUnitResults', '/GetWorkUnitResults', 'POST'] as const
}

export function getPostGetWorkUnitResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnitResults.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetWorkUnitResults.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetWorkUnitResultsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetWorkUnitResults.$post>) {
      return parseResponse(client.GetWorkUnitResults.$post(args, options))
    },
  })
}

export function usePostGetWorkUnitResults<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnitResults.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetWorkUnitResults.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetWorkUnitResultsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGetWorkUnitsMutationKey() {
  return ['GetWorkUnits', '/GetWorkUnits', 'POST'] as const
}

export function getPostGetWorkUnitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnits.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetWorkUnits.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetWorkUnitsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetWorkUnits.$post>) {
      return parseResponse(client.GetWorkUnits.$post(args, options))
    },
  })
}

export function usePostGetWorkUnits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetWorkUnits.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetWorkUnits.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetWorkUnitsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGrantPermissionsMutationKey() {
  return ['GrantPermissions', '/GrantPermissions', 'POST'] as const
}

export function getPostGrantPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GrantPermissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GrantPermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGrantPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GrantPermissions.$post>) {
      return parseResponse(client.GrantPermissions.$post(args, options))
    },
  })
}

export function usePostGrantPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GrantPermissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GrantPermissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGrantPermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListDataCellsFilterMutationKey() {
  return ['ListDataCellsFilter', '/ListDataCellsFilter', 'POST'] as const
}

export function getPostListDataCellsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListDataCellsFilter.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListDataCellsFilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListDataCellsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListDataCellsFilter.$post>) {
      return parseResponse(client.ListDataCellsFilter.$post(args, options))
    },
  })
}

export function usePostListDataCellsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListDataCellsFilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListDataCellsFilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListDataCellsFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListLFTagsMutationKey() {
  return ['ListLFTags', '/ListLFTags', 'POST'] as const
}

export function getPostListLFTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListLFTags.$post>>>>>,
    TError,
    InferRequestType<typeof client.ListLFTags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListLFTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListLFTags.$post>) {
      return parseResponse(client.ListLFTags.$post(args, options))
    },
  })
}

export function usePostListLFTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListLFTags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListLFTags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListLFTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListPermissionsMutationKey() {
  return ['ListPermissions', '/ListPermissions', 'POST'] as const
}

export function getPostListPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListPermissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListPermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListPermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListPermissions.$post>) {
      return parseResponse(client.ListPermissions.$post(args, options))
    },
  })
}

export function usePostListPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListPermissions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListPermissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListPermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListResourcesMutationKey() {
  return ['ListResources', '/ListResources', 'POST'] as const
}

export function getPostListResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListResources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListResources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListResources.$post>) {
      return parseResponse(client.ListResources.$post(args, options))
    },
  })
}

export function usePostListResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListResources.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ListResources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListResourcesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListTableStorageOptimizersMutationKey() {
  return ['ListTableStorageOptimizers', '/ListTableStorageOptimizers', 'POST'] as const
}

export function getPostListTableStorageOptimizersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.ListTableStorageOptimizers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.ListTableStorageOptimizers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTableStorageOptimizersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTableStorageOptimizers.$post>) {
      return parseResponse(client.ListTableStorageOptimizers.$post(args, options))
    },
  })
}

export function usePostListTableStorageOptimizers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ListTableStorageOptimizers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.ListTableStorageOptimizers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListTableStorageOptimizersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostListTransactionsMutationKey() {
  return ['ListTransactions', '/ListTransactions', 'POST'] as const
}

export function getPostListTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ListTransactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ListTransactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ListTransactions.$post>) {
      return parseResponse(client.ListTransactions.$post(args, options))
    },
  })
}

export function usePostListTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ListTransactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.ListTransactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListTransactionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPutDataLakeSettingsMutationKey() {
  return ['PutDataLakeSettings', '/PutDataLakeSettings', 'POST'] as const
}

export function getPostPutDataLakeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.PutDataLakeSettings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.PutDataLakeSettings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutDataLakeSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.PutDataLakeSettings.$post>) {
      return parseResponse(client.PutDataLakeSettings.$post(args, options))
    },
  })
}

export function usePostPutDataLakeSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.PutDataLakeSettings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.PutDataLakeSettings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPutDataLakeSettingsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRegisterResourceMutationKey() {
  return ['RegisterResource', '/RegisterResource', 'POST'] as const
}

export function getPostRegisterResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RegisterResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RegisterResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RegisterResource.$post>) {
      return parseResponse(client.RegisterResource.$post(args, options))
    },
  })
}

export function usePostRegisterResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RegisterResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RegisterResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRegisterResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRemoveLFTagsFromResourceMutationKey() {
  return ['RemoveLFTagsFromResource', '/RemoveLFTagsFromResource', 'POST'] as const
}

export function getPostRemoveLFTagsFromResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.RemoveLFTagsFromResource.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.RemoveLFTagsFromResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRemoveLFTagsFromResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RemoveLFTagsFromResource.$post>) {
      return parseResponse(client.RemoveLFTagsFromResource.$post(args, options))
    },
  })
}

export function usePostRemoveLFTagsFromResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RemoveLFTagsFromResource.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RemoveLFTagsFromResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRemoveLFTagsFromResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRevokePermissionsMutationKey() {
  return ['RevokePermissions', '/RevokePermissions', 'POST'] as const
}

export function getPostRevokePermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RevokePermissions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RevokePermissions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRevokePermissionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RevokePermissions.$post>) {
      return parseResponse(client.RevokePermissions.$post(args, options))
    },
  })
}

export function usePostRevokePermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RevokePermissions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RevokePermissions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRevokePermissionsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSearchDatabasesByLFTagsMutationKey() {
  return ['SearchDatabasesByLFTags', '/SearchDatabasesByLFTags', 'POST'] as const
}

export function getPostSearchDatabasesByLFTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SearchDatabasesByLFTags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.SearchDatabasesByLFTags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchDatabasesByLFTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SearchDatabasesByLFTags.$post>) {
      return parseResponse(client.SearchDatabasesByLFTags.$post(args, options))
    },
  })
}

export function usePostSearchDatabasesByLFTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.SearchDatabasesByLFTags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.SearchDatabasesByLFTags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchDatabasesByLFTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSearchTablesByLFTagsMutationKey() {
  return ['SearchTablesByLFTags', '/SearchTablesByLFTags', 'POST'] as const
}

export function getPostSearchTablesByLFTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.SearchTablesByLFTags.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.SearchTablesByLFTags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchTablesByLFTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SearchTablesByLFTags.$post>) {
      return parseResponse(client.SearchTablesByLFTags.$post(args, options))
    },
  })
}

export function usePostSearchTablesByLFTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.SearchTablesByLFTags.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.SearchTablesByLFTags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSearchTablesByLFTagsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStartQueryPlanningMutationKey() {
  return ['StartQueryPlanning', '/StartQueryPlanning', 'POST'] as const
}

export function getPostStartQueryPlanningMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartQueryPlanning.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StartQueryPlanning.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartQueryPlanningMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartQueryPlanning.$post>) {
      return parseResponse(client.StartQueryPlanning.$post(args, options))
    },
  })
}

export function usePostStartQueryPlanning<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StartQueryPlanning.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.StartQueryPlanning.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStartQueryPlanningMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostStartTransactionMutationKey() {
  return ['StartTransaction', '/StartTransaction', 'POST'] as const
}

export function getPostStartTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.StartTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.StartTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.StartTransaction.$post>) {
      return parseResponse(client.StartTransaction.$post(args, options))
    },
  })
}

export function usePostStartTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.StartTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.StartTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStartTransactionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateDataCellsFilterMutationKey() {
  return ['UpdateDataCellsFilter', '/UpdateDataCellsFilter', 'POST'] as const
}

export function getPostUpdateDataCellsFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateDataCellsFilter.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateDataCellsFilter.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateDataCellsFilterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateDataCellsFilter.$post>) {
      return parseResponse(client.UpdateDataCellsFilter.$post(args, options))
    },
  })
}

export function usePostUpdateDataCellsFilter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateDataCellsFilter.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateDataCellsFilter.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateDataCellsFilterMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateLFTagMutationKey() {
  return ['UpdateLFTag', '/UpdateLFTag', 'POST'] as const
}

export function getPostUpdateLFTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLFTag.$post>>>>>,
    TError,
    InferRequestType<typeof client.UpdateLFTag.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateLFTagMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateLFTag.$post>) {
      return parseResponse(client.UpdateLFTag.$post(args, options))
    },
  })
}

export function usePostUpdateLFTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateLFTag.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateLFTag.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateLFTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateResourceMutationKey() {
  return ['UpdateResource', '/UpdateResource', 'POST'] as const
}

export function getPostUpdateResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateResource.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateResource.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateResourceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateResource.$post>) {
      return parseResponse(client.UpdateResource.$post(args, options))
    },
  })
}

export function usePostUpdateResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateResource.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.UpdateResource.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateResourceMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateTableObjectsMutationKey() {
  return ['UpdateTableObjects', '/UpdateTableObjects', 'POST'] as const
}

export function getPostUpdateTableObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.UpdateTableObjects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.UpdateTableObjects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateTableObjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateTableObjects.$post>) {
      return parseResponse(client.UpdateTableObjects.$post(args, options))
    },
  })
}

export function usePostUpdateTableObjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.UpdateTableObjects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateTableObjects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateTableObjectsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdateTableStorageOptimizerMutationKey() {
  return ['UpdateTableStorageOptimizer', '/UpdateTableStorageOptimizer', 'POST'] as const
}

export function getPostUpdateTableStorageOptimizerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.UpdateTableStorageOptimizer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.UpdateTableStorageOptimizer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateTableStorageOptimizerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.UpdateTableStorageOptimizer.$post>) {
      return parseResponse(client.UpdateTableStorageOptimizer.$post(args, options))
    },
  })
}

export function usePostUpdateTableStorageOptimizer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.UpdateTableStorageOptimizer.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.UpdateTableStorageOptimizer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdateTableStorageOptimizerMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

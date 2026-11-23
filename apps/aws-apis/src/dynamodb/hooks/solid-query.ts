import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetDynamoDB_20120810BatchExecuteStatementKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement'] as const
}

export function getXAmzTargetDynamoDB_20120810BatchGetItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.BatchGetItem'] as const
}

export function getXAmzTargetDynamoDB_20120810BatchWriteItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem'] as const
}

export function getXAmzTargetDynamoDB_20120810CreateBackupKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.CreateBackup'] as const
}

export function getXAmzTargetDynamoDB_20120810CreateGlobalTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable'] as const
}

export function getXAmzTargetDynamoDB_20120810CreateTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.CreateTable'] as const
}

export function getXAmzTargetDynamoDB_20120810DeleteBackupKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DeleteBackup'] as const
}

export function getXAmzTargetDynamoDB_20120810DeleteItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DeleteItem'] as const
}

export function getXAmzTargetDynamoDB_20120810DeleteTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DeleteTable'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeBackupKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeBackup'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeContinuousBackupsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeContributorInsightsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeEndpointsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeExportKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeExport'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeGlobalTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeGlobalTableSettingsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeImportKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeImport'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeKinesisStreamingDestinationKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeLimitsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeLimits'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeTable'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeTableReplicaAutoScalingKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling'] as const
}

export function getXAmzTargetDynamoDB_20120810DescribeTimeToLiveKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive'] as const
}

export function getXAmzTargetDynamoDB_20120810DisableKinesisStreamingDestinationKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination'] as const
}

export function getXAmzTargetDynamoDB_20120810EnableKinesisStreamingDestinationKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination'] as const
}

export function getXAmzTargetDynamoDB_20120810ExecuteStatementKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement'] as const
}

export function getXAmzTargetDynamoDB_20120810ExecuteTransactionKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction'] as const
}

export function getXAmzTargetDynamoDB_20120810ExportTableToPointInTimeKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime'] as const
}

export function getXAmzTargetDynamoDB_20120810GetItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.GetItem'] as const
}

export function getXAmzTargetDynamoDB_20120810ImportTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ImportTable'] as const
}

export function getXAmzTargetDynamoDB_20120810ListBackupsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListBackups'] as const
}

export function getXAmzTargetDynamoDB_20120810ListContributorInsightsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights'] as const
}

export function getXAmzTargetDynamoDB_20120810ListExportsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListExports'] as const
}

export function getXAmzTargetDynamoDB_20120810ListGlobalTablesKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables'] as const
}

export function getXAmzTargetDynamoDB_20120810ListImportsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListImports'] as const
}

export function getXAmzTargetDynamoDB_20120810ListTablesKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListTables'] as const
}

export function getXAmzTargetDynamoDB_20120810ListTagsOfResourceKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource'] as const
}

export function getXAmzTargetDynamoDB_20120810PutItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.PutItem'] as const
}

export function getXAmzTargetDynamoDB_20120810QueryKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.Query'] as const
}

export function getXAmzTargetDynamoDB_20120810RestoreTableFromBackupKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup'] as const
}

export function getXAmzTargetDynamoDB_20120810RestoreTableToPointInTimeKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime'] as const
}

export function getXAmzTargetDynamoDB_20120810ScanKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.Scan'] as const
}

export function getXAmzTargetDynamoDB_20120810TagResourceKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.TagResource'] as const
}

export function getXAmzTargetDynamoDB_20120810TransactGetItemsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.TransactGetItems'] as const
}

export function getXAmzTargetDynamoDB_20120810TransactWriteItemsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems'] as const
}

export function getXAmzTargetDynamoDB_20120810UntagResourceKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UntagResource'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateContinuousBackupsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateContributorInsightsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateGlobalTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateGlobalTableSettingsKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateItemKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateItem'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateTableKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateTable'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateTableReplicaAutoScalingKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling'] as const
}

export function getXAmzTargetDynamoDB_20120810UpdateTimeToLiveKey() {
  return ['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive'] as const
}

export function getPostXAmzTargetDynamoDB20120810BatchExecuteStatementMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement',
    '/#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810BatchExecuteStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810BatchExecuteStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810BatchExecuteStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810BatchExecuteStatementMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810BatchGetItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchGetItem',
    '/#X-Amz-Target=DynamoDB_20120810.BatchGetItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810BatchGetItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810BatchGetItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.BatchGetItem'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810BatchGetItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810BatchGetItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810BatchWriteItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchWriteItem',
    '/#X-Amz-Target=DynamoDB_20120810.BatchWriteItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810BatchWriteItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810BatchWriteItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810BatchWriteItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810BatchWriteItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810CreateBackupMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateBackup',
    '/#X-Amz-Target=DynamoDB_20120810.CreateBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810CreateBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810CreateBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.CreateBackup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810CreateBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810CreateBackupMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810CreateGlobalTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810CreateGlobalTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810CreateGlobalTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810CreateGlobalTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810CreateGlobalTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810CreateTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateTable',
    '/#X-Amz-Target=DynamoDB_20120810.CreateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810CreateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810CreateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.CreateTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810CreateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810CreateTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DeleteBackupMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteBackup',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DeleteBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DeleteBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DeleteBackup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DeleteBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DeleteBackupMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DeleteItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteItem',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DeleteItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DeleteItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DeleteItem'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DeleteItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DeleteItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DeleteTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteTable',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DeleteTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DeleteTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DeleteTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DeleteTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DeleteTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeBackupMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeBackup',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeBackup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeBackupMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeContinuousBackups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeContributorInsights<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeEndpointsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeEndpointsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeExportMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeExport',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeExport',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeExport'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeExportMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeGlobalTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeGlobalTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeGlobalTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeImportMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeImport',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeImport',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeImportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeImport'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeImportMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeLimitsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeLimits',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeLimits',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeLimits'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeLimitsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTable',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DescribeTimeToLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ExecuteStatementMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExecuteStatement',
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ExecuteStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ExecuteStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ExecuteStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ExecuteStatementMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ExecuteTransactionMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction',
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ExecuteTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ExecuteTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ExecuteTransaction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ExecuteTransactionMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime',
    '/#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ExportTableToPointInTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810GetItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.GetItem',
    '/#X-Amz-Target=DynamoDB_20120810.GetItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810GetItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810GetItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DynamoDB_20120810.GetItem'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810GetItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810GetItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ImportTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ImportTable',
    '/#X-Amz-Target=DynamoDB_20120810.ImportTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ImportTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ImportTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ImportTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ImportTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ImportTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListBackupsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListBackups',
    '/#X-Amz-Target=DynamoDB_20120810.ListBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListBackups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListBackups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListBackupsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListContributorInsightsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.ListContributorInsights',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListContributorInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListContributorInsightsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListContributorInsights<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810ListContributorInsightsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListExportsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListExports',
    '/#X-Amz-Target=DynamoDB_20120810.ListExports',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListExports'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListExports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListExportsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListGlobalTablesMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListGlobalTables',
    '/#X-Amz-Target=DynamoDB_20120810.ListGlobalTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListGlobalTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListGlobalTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListGlobalTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListGlobalTablesMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListImportsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListImports',
    '/#X-Amz-Target=DynamoDB_20120810.ListImports',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListImportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListImports'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListImports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListImportsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListTablesMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListTables',
    '/#X-Amz-Target=DynamoDB_20120810.ListTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListTables'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListTablesMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ListTagsOfResourceMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource',
    '/#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ListTagsOfResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ListTagsOfResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810ListTagsOfResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ListTagsOfResourceMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810PutItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.PutItem',
    '/#X-Amz-Target=DynamoDB_20120810.PutItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810PutItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810PutItemMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DynamoDB_20120810.PutItem'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810PutItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810PutItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810QueryMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.Query',
    '/#X-Amz-Target=DynamoDB_20120810.Query',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810QueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810QueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Query'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810Query<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810QueryMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup',
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810RestoreTableFromBackup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime',
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810RestoreTableToPointInTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810ScanMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.Scan',
    '/#X-Amz-Target=DynamoDB_20120810.Scan',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810ScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810ScanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Scan'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810Scan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810ScanMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810TagResourceMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TagResource',
    '/#X-Amz-Target=DynamoDB_20120810.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810TagResourceMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810TransactGetItemsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TransactGetItems',
    '/#X-Amz-Target=DynamoDB_20120810.TransactGetItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810TransactGetItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810TransactGetItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.TransactGetItems'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810TransactGetItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810TransactGetItemsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810TransactWriteItemsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TransactWriteItems',
    '/#X-Amz-Target=DynamoDB_20120810.TransactWriteItems',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810TransactWriteItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810TransactWriteItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810TransactWriteItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810TransactWriteItemsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UntagResource',
    '/#X-Amz-Target=DynamoDB_20120810.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810UntagResourceMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateContinuousBackups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateContributorInsights<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateGlobalTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateGlobalTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810UpdateGlobalTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateItemMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateItem',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateItem',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateItemMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateItemMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateItem'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateItem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810UpdateItemMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateTableMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTable',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810UpdateTableMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScaling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
          >,
          TOnMutateResult
        >
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
      getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingMutationOptions<
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

export function getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveMutationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive',
    'POST',
  ] as const
}

export function getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDynamoDB20120810UpdateTimeToLive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveMutationOptions<
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

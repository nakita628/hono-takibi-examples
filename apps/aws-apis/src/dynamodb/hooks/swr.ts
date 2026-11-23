import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetDynamoDB20120810BatchExecuteStatementKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement',
    '/#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810BatchExecuteStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810BatchExecuteStatementKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.BatchExecuteStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810BatchGetItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchGetItem',
    '/#X-Amz-Target=DynamoDB_20120810.BatchGetItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810BatchGetItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810BatchGetItemKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchGetItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.BatchGetItem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810BatchWriteItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.BatchWriteItem',
    '/#X-Amz-Target=DynamoDB_20120810.BatchWriteItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810BatchWriteItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810BatchWriteItemKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.BatchWriteItem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810CreateBackupKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateBackup',
    '/#X-Amz-Target=DynamoDB_20120810.CreateBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810CreateBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810CreateBackupKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.CreateBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810CreateGlobalTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810CreateGlobalTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810CreateGlobalTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.CreateGlobalTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810CreateTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.CreateTable',
    '/#X-Amz-Target=DynamoDB_20120810.CreateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810CreateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810CreateTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.CreateTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.CreateTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DeleteBackupKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteBackup',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DeleteBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DeleteBackupKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DeleteBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DeleteItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteItem',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DeleteItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DeleteItemKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DeleteItem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DeleteTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DeleteTable',
    '/#X-Amz-Target=DynamoDB_20120810.DeleteTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DeleteTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DeleteTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DeleteTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DeleteTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeBackupKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeBackup',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeBackupKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeContinuousBackups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeContinuousBackupsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeContinuousBackups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeContributorInsights<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeContributorInsightsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeContributorInsights'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeEndpointsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeEndpointsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeExportKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeExport',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeExportKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeExport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeGlobalTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeGlobalTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeGlobalTableSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeGlobalTableSettingsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeGlobalTableSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeImportKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeImport',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeImport',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeImportKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeImport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeImport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeKinesisStreamingDestination'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeLimitsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeLimits',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeLimits',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeLimits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeLimitsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeLimits']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeLimits'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTable',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeTableReplicaAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive',
    '/#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DescribeTimeToLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810DescribeTimeToLiveKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DescribeTimeToLive'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.DisableKinesisStreamingDestination'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination',
    '/#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestination<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.EnableKinesisStreamingDestination'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ExecuteStatementKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExecuteStatement',
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ExecuteStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ExecuteStatementKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ExecuteStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ExecuteTransactionKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction',
    '/#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ExecuteTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ExecuteTransactionKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ExecuteTransaction'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime',
    '/#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ExportTableToPointInTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ExportTableToPointInTimeKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ExportTableToPointInTime'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810GetItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.GetItem',
    '/#X-Amz-Target=DynamoDB_20120810.GetItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810GetItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810GetItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.GetItem']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DynamoDB_20120810.GetItem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ImportTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ImportTable',
    '/#X-Amz-Target=DynamoDB_20120810.ImportTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ImportTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ImportTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ImportTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ImportTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListBackupsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListBackups',
    '/#X-Amz-Target=DynamoDB_20120810.ListBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListBackupsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListBackups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListContributorInsightsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.ListContributorInsights',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListContributorInsights<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListContributorInsightsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListContributorInsights'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListExportsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListExports',
    '/#X-Amz-Target=DynamoDB_20120810.ListExports',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListExports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListExportsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListExports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListExports'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListGlobalTablesKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListGlobalTables',
    '/#X-Amz-Target=DynamoDB_20120810.ListGlobalTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListGlobalTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListGlobalTablesKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListGlobalTables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListImportsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListImports',
    '/#X-Amz-Target=DynamoDB_20120810.ListImports',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListImportsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListImports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListImports'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListTablesKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListTables',
    '/#X-Amz-Target=DynamoDB_20120810.ListTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListTablesKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTables']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListTables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ListTagsOfResourceKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource',
    '/#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810ListTagsOfResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ListTagsOfResourceKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.ListTagsOfResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810PutItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.PutItem',
    '/#X-Amz-Target=DynamoDB_20120810.PutItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810PutItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810PutItemKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.PutItem']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DynamoDB_20120810.PutItem'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810QueryKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.Query',
    '/#X-Amz-Target=DynamoDB_20120810.Query',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810Query<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810QueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Query']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Query'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup',
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810RestoreTableFromBackup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810RestoreTableFromBackupKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.RestoreTableFromBackup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime',
    '/#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810RestoreTableToPointInTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810RestoreTableToPointInTimeKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.RestoreTableToPointInTime'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810ScanKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.Scan',
    '/#X-Amz-Target=DynamoDB_20120810.Scan',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810Scan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810ScanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.Scan']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=DynamoDB_20120810.Scan'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810TagResourceKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TagResource',
    '/#X-Amz-Target=DynamoDB_20120810.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810TagResourceKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810TransactGetItemsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TransactGetItems',
    '/#X-Amz-Target=DynamoDB_20120810.TransactGetItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810TransactGetItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810TransactGetItemsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactGetItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.TransactGetItems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810TransactWriteItemsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.TransactWriteItems',
    '/#X-Amz-Target=DynamoDB_20120810.TransactWriteItems',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810TransactWriteItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810TransactWriteItemsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.TransactWriteItems'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UntagResourceKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UntagResource',
    '/#X-Amz-Target=DynamoDB_20120810.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateContinuousBackups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateContinuousBackupsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateContinuousBackups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateContributorInsights<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateContributorInsightsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateContributorInsights'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateGlobalTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateGlobalTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateGlobalTableSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateGlobalTableSettingsKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateGlobalTableSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateItemKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateItem',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateItem',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateItem<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateItemKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateItem']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateItem'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateTableKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTable',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateTableKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScaling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateTableReplicaAutoScaling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveKey() {
  return [
    '#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive',
    '/#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive',
    'POST',
  ] as const
}

export function usePostXAmzTargetDynamoDB20120810UpdateTimeToLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDynamoDB20120810UpdateTimeToLiveKey()
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
            (typeof client)['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DynamoDB_20120810.UpdateTimeToLive'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

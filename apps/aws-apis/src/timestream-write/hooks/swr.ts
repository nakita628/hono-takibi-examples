import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTimestream_20181101CreateBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101CreateDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateDatabase'] as const
}

export function getXAmzTargetTimestream_20181101CreateTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateTable'] as const
}

export function getXAmzTargetTimestream_20181101DeleteDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteDatabase'] as const
}

export function getXAmzTargetTimestream_20181101DeleteTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteTable'] as const
}

export function getXAmzTargetTimestream_20181101DescribeBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101DescribeDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeDatabase'] as const
}

export function getXAmzTargetTimestream_20181101DescribeEndpointsKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'] as const
}

export function getXAmzTargetTimestream_20181101DescribeTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeTable'] as const
}

export function getXAmzTargetTimestream_20181101ListBatchLoadTasksKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks'] as const
}

export function getXAmzTargetTimestream_20181101ListDatabasesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListDatabases'] as const
}

export function getXAmzTargetTimestream_20181101ListTablesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTables'] as const
}

export function getXAmzTargetTimestream_20181101ListTagsForResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTagsForResource'] as const
}

export function getXAmzTargetTimestream_20181101ResumeBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101TagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.TagResource'] as const
}

export function getXAmzTargetTimestream_20181101UntagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.UntagResource'] as const
}

export function getXAmzTargetTimestream_20181101UpdateDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateDatabase'] as const
}

export function getXAmzTargetTimestream_20181101UpdateTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateTable'] as const
}

export function getXAmzTargetTimestream_20181101WriteRecordsKey() {
  return ['#X-Amz-Target=Timestream_20181101.WriteRecords'] as const
}

export function getPostXAmzTargetTimestream20181101CreateBatchLoadTaskKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101CreateBatchLoadTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101CreateBatchLoadTaskKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101CreateDatabaseKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateDatabase',
    '/#X-Amz-Target=Timestream_20181101.CreateDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101CreateDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101CreateDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.CreateDatabase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101CreateTableKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateTable',
    '/#X-Amz-Target=Timestream_20181101.CreateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101CreateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101CreateTableKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.CreateTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DeleteDatabaseKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteDatabase',
    '/#X-Amz-Target=Timestream_20181101.DeleteDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DeleteDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DeleteDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DeleteDatabase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DeleteTableKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteTable',
    '/#X-Amz-Target=Timestream_20181101.DeleteTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DeleteTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DeleteTableKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DeleteTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeBatchLoadTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeDatabaseKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeDatabase',
    '/#X-Amz-Target=Timestream_20181101.DescribeDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeDatabase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeEndpointsKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeEndpointsKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101DescribeTableKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeTable',
    '/#X-Amz-Target=Timestream_20181101.DescribeTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101DescribeTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101DescribeTableKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.DescribeTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListBatchLoadTasksKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks',
    '/#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListBatchLoadTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListBatchLoadTasksKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListDatabasesKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListDatabases',
    '/#X-Amz-Target=Timestream_20181101.ListDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListDatabasesKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListDatabases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListTablesKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTables',
    '/#X-Amz-Target=Timestream_20181101.ListTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListTablesKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListTables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101ResumeBatchLoadTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101TagResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.TagResource',
    '/#X-Amz-Target=Timestream_20181101.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101TagResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101UntagResourceKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UntagResource',
    '/#X-Amz-Target=Timestream_20181101.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101UpdateDatabaseKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateDatabase',
    '/#X-Amz-Target=Timestream_20181101.UpdateDatabase',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101UpdateDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101UpdateDatabaseKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.UpdateDatabase'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101UpdateTableKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateTable',
    '/#X-Amz-Target=Timestream_20181101.UpdateTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101UpdateTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101UpdateTableKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.UpdateTable'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetTimestream20181101WriteRecordsKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.WriteRecords',
    '/#X-Amz-Target=Timestream_20181101.WriteRecords',
    'POST',
  ] as const
}

export function usePostXAmzTargetTimestream20181101WriteRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetTimestream20181101WriteRecordsKey()
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
            (typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Timestream_20181101.WriteRecords'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

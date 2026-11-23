import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetRedshiftDataBatchExecuteStatementKey() {
  return ['#X-Amz-Target=RedshiftData.BatchExecuteStatement'] as const
}

export function getXAmzTargetRedshiftDataCancelStatementKey() {
  return ['#X-Amz-Target=RedshiftData.CancelStatement'] as const
}

export function getXAmzTargetRedshiftDataDescribeStatementKey() {
  return ['#X-Amz-Target=RedshiftData.DescribeStatement'] as const
}

export function getXAmzTargetRedshiftDataDescribeTableKey() {
  return ['#X-Amz-Target=RedshiftData.DescribeTable'] as const
}

export function getXAmzTargetRedshiftDataExecuteStatementKey() {
  return ['#X-Amz-Target=RedshiftData.ExecuteStatement'] as const
}

export function getXAmzTargetRedshiftDataGetStatementResultKey() {
  return ['#X-Amz-Target=RedshiftData.GetStatementResult'] as const
}

export function getXAmzTargetRedshiftDataListDatabasesKey() {
  return ['#X-Amz-Target=RedshiftData.ListDatabases'] as const
}

export function getXAmzTargetRedshiftDataListSchemasKey() {
  return ['#X-Amz-Target=RedshiftData.ListSchemas'] as const
}

export function getXAmzTargetRedshiftDataListStatementsKey() {
  return ['#X-Amz-Target=RedshiftData.ListStatements'] as const
}

export function getXAmzTargetRedshiftDataListTablesKey() {
  return ['#X-Amz-Target=RedshiftData.ListTables'] as const
}

export function getPostXAmzTargetRedshiftDataBatchExecuteStatementKey() {
  return [
    '#X-Amz-Target=RedshiftData.BatchExecuteStatement',
    '/#X-Amz-Target=RedshiftData.BatchExecuteStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataBatchExecuteStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataBatchExecuteStatementKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.BatchExecuteStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataCancelStatementKey() {
  return [
    '#X-Amz-Target=RedshiftData.CancelStatement',
    '/#X-Amz-Target=RedshiftData.CancelStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataCancelStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataCancelStatementKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.CancelStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataDescribeStatementKey() {
  return [
    '#X-Amz-Target=RedshiftData.DescribeStatement',
    '/#X-Amz-Target=RedshiftData.DescribeStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataDescribeStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataDescribeStatementKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.DescribeStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataDescribeTableKey() {
  return [
    '#X-Amz-Target=RedshiftData.DescribeTable',
    '/#X-Amz-Target=RedshiftData.DescribeTable',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataDescribeTable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataDescribeTableKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=RedshiftData.DescribeTable'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataExecuteStatementKey() {
  return [
    '#X-Amz-Target=RedshiftData.ExecuteStatement',
    '/#X-Amz-Target=RedshiftData.ExecuteStatement',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataExecuteStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataExecuteStatementKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.ExecuteStatement'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataGetStatementResultKey() {
  return [
    '#X-Amz-Target=RedshiftData.GetStatementResult',
    '/#X-Amz-Target=RedshiftData.GetStatementResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataGetStatementResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataGetStatementResultKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.GetStatementResult'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataListDatabasesKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListDatabases',
    '/#X-Amz-Target=RedshiftData.ListDatabases',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataListDatabases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataListDatabasesKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=RedshiftData.ListDatabases'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataListSchemasKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListSchemas',
    '/#X-Amz-Target=RedshiftData.ListSchemas',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataListSchemas<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataListSchemasKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=RedshiftData.ListSchemas'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataListStatementsKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListStatements',
    '/#X-Amz-Target=RedshiftData.ListStatements',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataListStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataListStatementsKey()
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
            (typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=RedshiftData.ListStatements'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetRedshiftDataListTablesKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListTables',
    '/#X-Amz-Target=RedshiftData.ListTables',
    'POST',
  ] as const
}

export function usePostXAmzTargetRedshiftDataListTables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetRedshiftDataListTablesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=RedshiftData.ListTables'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

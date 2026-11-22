import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetRedshiftDataBatchExecuteStatementMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.BatchExecuteStatement',
    '/#X-Amz-Target=RedshiftData.BatchExecuteStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataBatchExecuteStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataBatchExecuteStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RedshiftData.BatchExecuteStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRedshiftDataBatchExecuteStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=RedshiftData.BatchExecuteStatement']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataBatchExecuteStatementMutationOptions<
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

export function getPostXAmzTargetRedshiftDataCancelStatementMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.CancelStatement',
    '/#X-Amz-Target=RedshiftData.CancelStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataCancelStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataCancelStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RedshiftData.CancelStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRedshiftDataCancelStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.CancelStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataCancelStatementMutationOptions<
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

export function getPostXAmzTargetRedshiftDataDescribeStatementMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.DescribeStatement',
    '/#X-Amz-Target=RedshiftData.DescribeStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataDescribeStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataDescribeStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RedshiftData.DescribeStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRedshiftDataDescribeStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataDescribeStatementMutationOptions<
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

export function getPostXAmzTargetRedshiftDataDescribeTableMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.DescribeTable',
    '/#X-Amz-Target=RedshiftData.DescribeTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataDescribeTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataDescribeTableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=RedshiftData.DescribeTable'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRedshiftDataDescribeTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.DescribeTable']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataDescribeTableMutationOptions<
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

export function getPostXAmzTargetRedshiftDataExecuteStatementMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.ExecuteStatement',
    '/#X-Amz-Target=RedshiftData.ExecuteStatement',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataExecuteStatementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataExecuteStatementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RedshiftData.ExecuteStatement'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRedshiftDataExecuteStatement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ExecuteStatement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataExecuteStatementMutationOptions<
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

export function getPostXAmzTargetRedshiftDataGetStatementResultMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.GetStatementResult',
    '/#X-Amz-Target=RedshiftData.GetStatementResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataGetStatementResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataGetStatementResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=RedshiftData.GetStatementResult'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetRedshiftDataGetStatementResult<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.GetStatementResult']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataGetStatementResultMutationOptions<
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

export function getPostXAmzTargetRedshiftDataListDatabasesMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListDatabases',
    '/#X-Amz-Target=RedshiftData.ListDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataListDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataListDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=RedshiftData.ListDatabases'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRedshiftDataListDatabases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListDatabases']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataListDatabasesMutationOptions<
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

export function getPostXAmzTargetRedshiftDataListSchemasMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListSchemas',
    '/#X-Amz-Target=RedshiftData.ListSchemas',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataListSchemasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataListSchemasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=RedshiftData.ListSchemas'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRedshiftDataListSchemas<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListSchemas']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataListSchemasMutationOptions<
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

export function getPostXAmzTargetRedshiftDataListStatementsMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListStatements',
    '/#X-Amz-Target=RedshiftData.ListStatements',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataListStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataListStatementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=RedshiftData.ListStatements'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRedshiftDataListStatements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListStatements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataListStatementsMutationOptions<
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

export function getPostXAmzTargetRedshiftDataListTablesMutationKey() {
  return [
    '#X-Amz-Target=RedshiftData.ListTables',
    '/#X-Amz-Target=RedshiftData.ListTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetRedshiftDataListTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetRedshiftDataListTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=RedshiftData.ListTables'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetRedshiftDataListTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=RedshiftData.ListTables']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetRedshiftDataListTablesMutationOptions<
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

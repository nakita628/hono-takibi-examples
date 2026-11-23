import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchExecuteKey() {
  return ['BatchExecute'] as const
}

export function getBeginTransactionKey() {
  return ['BeginTransaction'] as const
}

export function getCommitTransactionKey() {
  return ['CommitTransaction'] as const
}

export function getExecuteKey() {
  return ['Execute'] as const
}

export function getExecuteSqlKey() {
  return ['ExecuteSql'] as const
}

export function getRollbackTransactionKey() {
  return ['RollbackTransaction'] as const
}

export function getPostBatchExecuteMutationKey() {
  return ['BatchExecute', '/BatchExecute', 'POST'] as const
}

export function getPostBatchExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchExecute.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchExecute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchExecute.$post>) {
      return parseResponse(client.BatchExecute.$post(args, options))
    },
  })
}

export function usePostBatchExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchExecute.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.BatchExecute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBatchExecuteMutationOptions<TError, TOnMutateResult>(
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

export function getPostBeginTransactionMutationKey() {
  return ['BeginTransaction', '/BeginTransaction', 'POST'] as const
}

export function getPostBeginTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BeginTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BeginTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBeginTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BeginTransaction.$post>) {
      return parseResponse(client.BeginTransaction.$post(args, options))
    },
  })
}

export function usePostBeginTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.BeginTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.BeginTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBeginTransactionMutationOptions<TError, TOnMutateResult>(
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

export function getPostExecuteSqlMutationKey() {
  return ['ExecuteSql', '/ExecuteSql', 'POST'] as const
}

export function getPostExecuteSqlMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExecuteSql.$post>>>>>,
    TError,
    InferRequestType<typeof client.ExecuteSql.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExecuteSqlMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ExecuteSql.$post>) {
      return parseResponse(client.ExecuteSql.$post(args, options))
    },
  })
}

export function usePostExecuteSql<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExecuteSql.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ExecuteSql.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExecuteSqlMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostExecuteMutationKey() {
  return ['Execute', '/Execute', 'POST'] as const
}

export function getPostExecuteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Execute.$post>>>>>,
    TError,
    InferRequestType<typeof client.Execute.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExecuteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.Execute.$post>) {
      return parseResponse(client.Execute.$post(args, options))
    },
  })
}

export function usePostExecute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Execute.$post>>>>>,
        TError,
        InferRequestType<typeof client.Execute.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostExecuteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRollbackTransactionMutationKey() {
  return ['RollbackTransaction', '/RollbackTransaction', 'POST'] as const
}

export function getPostRollbackTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RollbackTransaction.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.RollbackTransaction.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRollbackTransactionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.RollbackTransaction.$post>) {
      return parseResponse(client.RollbackTransaction.$post(args, options))
    },
  })
}

export function usePostRollbackTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.RollbackTransaction.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.RollbackTransaction.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRollbackTransactionMutationOptions<TError, TOnMutateResult>(
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

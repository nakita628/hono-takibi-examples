import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostBatchExecuteKey() {
  return ['BatchExecute', '/BatchExecute', 'POST'] as const
}

export function usePostBatchExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchExecute.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchExecute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchExecute.$post> }) =>
        parseResponse(client.BatchExecute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBeginTransactionKey() {
  return ['BeginTransaction', '/BeginTransaction', 'POST'] as const
}

export function usePostBeginTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BeginTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BeginTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBeginTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BeginTransaction.$post> }) =>
        parseResponse(client.BeginTransaction.$post(arg, clientOptions)),
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

export function getPostExecuteSqlKey() {
  return ['ExecuteSql', '/ExecuteSql', 'POST'] as const
}

export function usePostExecuteSql<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ExecuteSql.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ExecuteSql.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExecuteSqlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ExecuteSql.$post> }) =>
        parseResponse(client.ExecuteSql.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExecuteKey() {
  return ['Execute', '/Execute', 'POST'] as const
}

export function usePostExecute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.Execute.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.Execute.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExecuteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.Execute.$post> }) =>
        parseResponse(client.Execute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRollbackTransactionKey() {
  return ['RollbackTransaction', '/RollbackTransaction', 'POST'] as const
}

export function usePostRollbackTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.RollbackTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.RollbackTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRollbackTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.RollbackTransaction.$post> }) =>
        parseResponse(client.RollbackTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

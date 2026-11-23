import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getChangeStatusKey() {
  return ['changeStatus'] as const
}

export function getCheckBalanceKey() {
  return ['checkBalance'] as const
}

export function getIssueKey() {
  return ['issue'] as const
}

export function getLoadKey() {
  return ['load'] as const
}

export function getMergeBalanceKey() {
  return ['mergeBalance'] as const
}

export function getVoidTransactionKey() {
  return ['voidTransaction'] as const
}

export function getPostChangeStatusKey() {
  return ['changeStatus', '/changeStatus', 'POST'] as const
}

export function usePostChangeStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.changeStatus.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.changeStatus.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangeStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.changeStatus.$post> }) =>
        parseResponse(client.changeStatus.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCheckBalanceKey() {
  return ['checkBalance', '/checkBalance', 'POST'] as const
}

export function usePostCheckBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.checkBalance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.checkBalance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.checkBalance.$post> }) =>
        parseResponse(client.checkBalance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIssueKey() {
  return ['issue', '/issue', 'POST'] as const
}

export function usePostIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.issue.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.issue.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.issue.$post> }) =>
        parseResponse(client.issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLoadKey() {
  return ['load', '/load', 'POST'] as const
}

export function usePostLoad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.load.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLoadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.load.$post> }) =>
        parseResponse(client.load.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMergeBalanceKey() {
  return ['mergeBalance', '/mergeBalance', 'POST'] as const
}

export function usePostMergeBalance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mergeBalance.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mergeBalance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMergeBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mergeBalance.$post> }) =>
        parseResponse(client.mergeBalance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVoidTransactionKey() {
  return ['voidTransaction', '/voidTransaction', 'POST'] as const
}

export function usePostVoidTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.voidTransaction.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.voidTransaction.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVoidTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.voidTransaction.$post> }) =>
        parseResponse(client.voidTransaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

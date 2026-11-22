import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAssignTerminalsKey() {
  return ['assignTerminals'] as const
}

export function getFindTerminalKey() {
  return ['findTerminal'] as const
}

export function getGetStoresUnderAccountKey() {
  return ['getStoresUnderAccount'] as const
}

export function getGetTerminalDetailsKey() {
  return ['getTerminalDetails'] as const
}

export function getGetTerminalsUnderAccountKey() {
  return ['getTerminalsUnderAccount'] as const
}

export function getPostAssignTerminalsKey() {
  return ['assignTerminals', '/assignTerminals', 'POST'] as const
}

export function usePostAssignTerminals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.assignTerminals.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.assignTerminals.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAssignTerminalsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.assignTerminals.$post> }) =>
        parseResponse(client.assignTerminals.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFindTerminalKey() {
  return ['findTerminal', '/findTerminal', 'POST'] as const
}

export function usePostFindTerminal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.findTerminal.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.findTerminal.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFindTerminalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.findTerminal.$post> }) =>
        parseResponse(client.findTerminal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetStoresUnderAccountKey() {
  return ['getStoresUnderAccount', '/getStoresUnderAccount', 'POST'] as const
}

export function usePostGetStoresUnderAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getStoresUnderAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getStoresUnderAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetStoresUnderAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getStoresUnderAccount.$post> },
      ) => parseResponse(client.getStoresUnderAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTerminalDetailsKey() {
  return ['getTerminalDetails', '/getTerminalDetails', 'POST'] as const
}

export function usePostGetTerminalDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalDetails.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.getTerminalDetails.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTerminalDetailsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getTerminalDetails.$post> }) =>
        parseResponse(client.getTerminalDetails.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetTerminalsUnderAccountKey() {
  return ['getTerminalsUnderAccount', '/getTerminalsUnderAccount', 'POST'] as const
}

export function usePostGetTerminalsUnderAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getTerminalsUnderAccount.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.getTerminalsUnderAccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTerminalsUnderAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.getTerminalsUnderAccount.$post> },
      ) => parseResponse(client.getTerminalsUnderAccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

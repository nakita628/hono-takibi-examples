import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNetKey() {
  return ['net'] as const
}

export function getPostNetConnectKey() {
  return ['net', '/net/connect', 'POST'] as const
}

export function usePostNetConnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connect.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.net.connect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetConnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.net.connect.$post> }) =>
        parseResponse(client.net.connect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetConnectionsKey() {
  return ['net', '/net/connections', 'POST'] as const
}

export function usePostNetConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.connections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.net.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.net.connections.$post> }) =>
        parseResponse(client.net.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetDisconnectKey() {
  return ['net', '/net/disconnect', 'POST'] as const
}

export function usePostNetDisconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.disconnect.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.net.disconnect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetDisconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.net.disconnect.$post> }) =>
        parseResponse(client.net.disconnect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetStatusKey() {
  return ['net', '/net/status', 'POST'] as const
}

export function usePostNetStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.net.status.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.net.status.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.net.status.$post> }) =>
        parseResponse(client.net.status.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

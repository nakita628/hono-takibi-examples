import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGetDeploymentsKey() {
  return ['GetDeployments'] as const
}

export function getGetDeviceRegistrationKey() {
  return ['GetDeviceRegistration'] as const
}

export function getSendHeartbeatKey() {
  return ['SendHeartbeat'] as const
}

export function getPostGetDeploymentsKey() {
  return ['GetDeployments', '/GetDeployments', 'POST'] as const
}

export function usePostGetDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDeployments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetDeployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.GetDeployments.$post> }) =>
        parseResponse(client.GetDeployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGetDeviceRegistrationKey() {
  return ['GetDeviceRegistration', '/GetDeviceRegistration', 'POST'] as const
}

export function usePostGetDeviceRegistration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetDeviceRegistration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.GetDeviceRegistration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetDeviceRegistrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.GetDeviceRegistration.$post> },
      ) => parseResponse(client.GetDeviceRegistration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendHeartbeatKey() {
  return ['SendHeartbeat', '/SendHeartbeat', 'POST'] as const
}

export function usePostSendHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SendHeartbeat.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.SendHeartbeat.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.SendHeartbeat.$post> }) =>
        parseResponse(client.SendHeartbeat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

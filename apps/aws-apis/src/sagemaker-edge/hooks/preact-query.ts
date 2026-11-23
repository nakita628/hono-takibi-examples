import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostGetDeploymentsMutationKey() {
  return ['GetDeployments', '/GetDeployments', 'POST'] as const
}

export function getPostGetDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDeployments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.GetDeployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetDeployments.$post>) {
      return parseResponse(client.GetDeployments.$post(args, options))
    },
  })
}

export function usePostGetDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.GetDeployments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.GetDeployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDeploymentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostGetDeviceRegistrationMutationKey() {
  return ['GetDeviceRegistration', '/GetDeviceRegistration', 'POST'] as const
}

export function getPostGetDeviceRegistrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.GetDeviceRegistration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.GetDeviceRegistration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetDeviceRegistrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.GetDeviceRegistration.$post>) {
      return parseResponse(client.GetDeviceRegistration.$post(args, options))
    },
  })
}

export function usePostGetDeviceRegistration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.GetDeviceRegistration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.GetDeviceRegistration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGetDeviceRegistrationMutationOptions<TError, TOnMutateResult>(
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

export function getPostSendHeartbeatMutationKey() {
  return ['SendHeartbeat', '/SendHeartbeat', 'POST'] as const
}

export function getPostSendHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SendHeartbeat.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.SendHeartbeat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSendHeartbeatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.SendHeartbeat.$post>) {
      return parseResponse(client.SendHeartbeat.$post(args, options))
    },
  })
}

export function usePostSendHeartbeat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.SendHeartbeat.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.SendHeartbeat.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSendHeartbeatMutationOptions<TError, TOnMutateResult>(
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

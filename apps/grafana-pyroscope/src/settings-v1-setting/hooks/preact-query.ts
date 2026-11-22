import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsV1SettingsServiceKey() {
  return ['settings.v1.SettingsService'] as const
}

export function getPostSettingsV1SettingsServiceDeleteMutationKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Delete', 'POST'] as const
}

export function getPostSettingsV1SettingsServiceDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1SettingsServiceDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>,
    ) {
      return parseResponse(client['settings.v1.SettingsService'].Delete.$post(args, options))
    },
  })
}

export function usePostSettingsV1SettingsServiceDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsV1SettingsServiceDeleteMutationOptions<
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

export function getPostSettingsV1SettingsServiceGetMutationKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Get', 'POST'] as const
}

export function getPostSettingsV1SettingsServiceGetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1SettingsServiceGetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>,
    ) {
      return parseResponse(client['settings.v1.SettingsService'].Get.$post(args, options))
    },
  })
}

export function usePostSettingsV1SettingsServiceGet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsV1SettingsServiceGetMutationOptions<
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

export function getPostSettingsV1SettingsServiceSetMutationKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Set', 'POST'] as const
}

export function getPostSettingsV1SettingsServiceSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsV1SettingsServiceSetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>,
    ) {
      return parseResponse(client['settings.v1.SettingsService'].Set.$post(args, options))
    },
  })
}

export function usePostSettingsV1SettingsServiceSet<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsV1SettingsServiceSetMutationOptions<
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

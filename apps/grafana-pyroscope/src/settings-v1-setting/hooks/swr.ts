import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getSettingsV1SettingsServiceKey() {
  return ['settings.v1.SettingsService'] as const
}

export function getPostSettingsV1SettingsServiceDeleteKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Delete', 'POST'] as const
}

export function usePostSettingsV1SettingsServiceDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1SettingsServiceDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['settings.v1.SettingsService']['Delete']['$post']>
        },
      ) => parseResponse(client['settings.v1.SettingsService'].Delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsV1SettingsServiceGetKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Get', 'POST'] as const
}

export function usePostSettingsV1SettingsServiceGet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1SettingsServiceGetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['settings.v1.SettingsService']['Get']['$post']>
        },
      ) => parseResponse(client['settings.v1.SettingsService'].Get.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsV1SettingsServiceSetKey() {
  return ['settings.v1.SettingsService', '/settings.v1.SettingsService/Set', 'POST'] as const
}

export function usePostSettingsV1SettingsServiceSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsV1SettingsServiceSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['settings.v1.SettingsService']['Set']['$post']>
        },
      ) => parseResponse(client['settings.v1.SettingsService'].Set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

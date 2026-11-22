import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCheckKey() {
  return ['check'] as const
}

export function getControlKey() {
  return ['control'] as const
}

export function getNetworkUnblockKey() {
  return ['network-unblock'] as const
}

export function getPsd2Key() {
  return ['psd2'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getFormatKey() {
  return ['{format}'] as const
}

export function getPostCheckFormatKey() {
  return ['check', '/check/:format', 'POST'] as const
}

export function usePostCheckFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.check)[':format']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.check)[':format']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCheckFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.check)[':format']['$post']> },
      ) => parseResponse(client.check[':format'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostControlFormatKey() {
  return ['control', '/control/:format', 'POST'] as const
}

export function usePostControlFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.control)[':format']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.control)[':format']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostControlFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.control)[':format']['$post']> },
      ) => parseResponse(client.control[':format'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNetworkUnblockKey() {
  return ['network-unblock', '/network-unblock', 'POST'] as const
}

export function usePostNetworkUnblock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-unblock']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-unblock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkUnblockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-unblock']['$post']> },
      ) => parseResponse(client['network-unblock'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPsd2FormatKey() {
  return ['psd2', '/psd2/:format', 'POST'] as const
}

export function usePostPsd2Format<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.psd2)[':format']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.psd2)[':format']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPsd2FormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.psd2)[':format']['$post']> },
      ) => parseResponse(client.psd2[':format'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchFormatKey(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
) {
  return ['search', '/search/:format', args] as const
}

export function useGetSearchFormat<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchFormat<TError = unknown>(
  args: InferRequestType<(typeof client.search)[':format']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchFormatKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.search)[':format']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search[':format'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFormatKey() {
  return [':format', '/:format', 'POST'] as const
}

export function usePostFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':format']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':format']['$post']> }) =>
        parseResponse(client[':format'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getProxyKey() {
  return ['proxy'] as const
}

export function getGetProxyKey(args: InferRequestType<typeof client.proxy.$get>) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy', keyArgs] as const
}

export function useGetProxy<TError = unknown>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.proxy.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProxy<TError = unknown>(
  args: InferRequestType<typeof client.proxy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.proxy.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutProxyKey() {
  return ['proxy', '/proxy', 'PUT'] as const
}

export function usePutProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.proxy.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy.$put> }) =>
        parseResponse(client.proxy.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProxyKey() {
  return ['proxy', '/proxy', 'POST'] as const
}

export function usePostProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.proxy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy.$post> }) =>
        parseResponse(client.proxy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProxyKey() {
  return ['proxy', '/proxy', 'DELETE'] as const
}

export function useDeleteProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.proxy.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy.$delete> }) =>
        parseResponse(client.proxy.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getOptionsProxyKey() {
  return ['proxy', '/proxy', 'OPTIONS'] as const
}

export function useOptionsProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$options>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.proxy.$options>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getOptionsProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy.$options> }) =>
        parseResponse(client.proxy.$options(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProxyKey() {
  return ['proxy', '/proxy', 'PATCH'] as const
}

export function usePatchProxy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.proxy.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.proxy.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProxyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.proxy.$patch> }) =>
        parseResponse(client.proxy.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

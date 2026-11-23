import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXCodeSamplesKey() {
  return ['x-code-samples'] as const
}

export function getXExplorerEnabledKey() {
  return ['x-explorer-enabled'] as const
}

export function getXHeadersKey() {
  return ['x-headers'] as const
}

export function getXMetricsEnabledKey() {
  return ['x-metrics-enabled'] as const
}

export function getXProxyEnabledKey() {
  return ['x-proxy-enabled'] as const
}

export function getXSamplesLanguagesKey() {
  return ['x-samples-languages'] as const
}

export function getGetXCodeSamplesKey() {
  return ['x-code-samples', '/x-code-samples'] as const
}

export function useGetXCodeSamples<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetXCodeSamplesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['x-code-samples'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetXCodeSamples<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetXCodeSamplesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['x-code-samples'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostXCodeSamplesKey() {
  return ['x-code-samples', '/x-code-samples', 'POST'] as const
}

export function usePostXCodeSamples<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['x-code-samples']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXCodeSamplesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['x-code-samples']['$post']> },
      ) => parseResponse(client['x-code-samples'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXHeadersKey() {
  return ['x-headers', '/x-headers', 'POST'] as const
}

export function usePostXHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$post']>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXHeadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-headers'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchXHeadersKey() {
  return ['x-headers', '/x-headers', 'PATCH'] as const
}

export function usePatchXHeaders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$patch']>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchXHeadersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-headers'].$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXExplorerEnabledKey() {
  return ['x-explorer-enabled', '/x-explorer-enabled', 'POST'] as const
}

export function usePostXExplorerEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['x-explorer-enabled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXExplorerEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['x-explorer-enabled']['$post']> },
      ) => parseResponse(client['x-explorer-enabled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchXExplorerEnabledKey() {
  return ['x-explorer-enabled', '/x-explorer-enabled', 'PATCH'] as const
}

export function usePatchXExplorerEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['x-explorer-enabled']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchXExplorerEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['x-explorer-enabled']['$patch']> },
      ) => parseResponse(client['x-explorer-enabled'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetXSamplesLanguagesKey() {
  return ['x-samples-languages', '/x-samples-languages'] as const
}

export function useGetXSamplesLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetXSamplesLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['x-samples-languages'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetXSamplesLanguages<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetXSamplesLanguagesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['x-samples-languages'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostXSamplesLanguagesKey() {
  return ['x-samples-languages', '/x-samples-languages', 'POST'] as const
}

export function usePostXSamplesLanguages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXSamplesLanguagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-samples-languages'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXProxyEnabledKey() {
  return ['x-proxy-enabled', '/x-proxy-enabled', 'POST'] as const
}

export function usePostXProxyEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXProxyEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-proxy-enabled'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchXProxyEnabledKey() {
  return ['x-proxy-enabled', '/x-proxy-enabled', 'PATCH'] as const
}

export function usePatchXProxyEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$patch']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchXProxyEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-proxy-enabled'].$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXMetricsEnabledKey() {
  return ['x-metrics-enabled', '/x-metrics-enabled', 'POST'] as const
}

export function usePostXMetricsEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$post']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXMetricsEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-metrics-enabled'].$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchXMetricsEnabledKey() {
  return ['x-metrics-enabled', '/x-metrics-enabled', 'PATCH'] as const
}

export function usePatchXMetricsEnabled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$patch']>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchXMetricsEnabledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['x-metrics-enabled'].$patch(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

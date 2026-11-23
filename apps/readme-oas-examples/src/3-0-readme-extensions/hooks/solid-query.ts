import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getXCodeSamplesQueryKey() {
  return ['x-code-samples', '/x-code-samples'] as const
}

export function getXCodeSamplesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getXCodeSamplesQueryKey>
  >({
    queryKey: getXCodeSamplesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['x-code-samples'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createXCodeSamples<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getXCodeSamplesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getXCodeSamplesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostXCodeSamplesMutationKey() {
  return ['x-code-samples', '/x-code-samples', 'POST'] as const
}

export function getPostXCodeSamplesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['x-code-samples']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXCodeSamplesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['x-code-samples']['$post']>) {
      return parseResponse(client['x-code-samples'].$post(args, options))
    },
  })
}

export function createPostXCodeSamples<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['x-code-samples']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['x-code-samples']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXCodeSamplesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXHeadersMutationKey() {
  return ['x-headers', '/x-headers', 'POST'] as const
}

export function getPostXHeadersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$post']>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostXHeadersMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-headers'].$post(undefined, options))
    },
  })
}

export function createPostXHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$post']>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXHeadersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchXHeadersMutationKey() {
  return ['x-headers', '/x-headers', 'PATCH'] as const
}

export function getPatchXHeadersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$patch']>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchXHeadersMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-headers'].$patch(undefined, options))
    },
  })
}

export function createPatchXHeaders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['x-headers']['$patch']>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchXHeadersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXExplorerEnabledMutationKey() {
  return ['x-explorer-enabled', '/x-explorer-enabled', 'POST'] as const
}

export function getPostXExplorerEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['x-explorer-enabled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXExplorerEnabledMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['x-explorer-enabled']['$post']>) {
      return parseResponse(client['x-explorer-enabled'].$post(args, options))
    },
  })
}

export function createPostXExplorerEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['x-explorer-enabled']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXExplorerEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchXExplorerEnabledMutationKey() {
  return ['x-explorer-enabled', '/x-explorer-enabled', 'PATCH'] as const
}

export function getPatchXExplorerEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['x-explorer-enabled']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchXExplorerEnabledMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['x-explorer-enabled']['$patch']>) {
      return parseResponse(client['x-explorer-enabled'].$patch(args, options))
    },
  })
}

export function createPatchXExplorerEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-explorer-enabled']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['x-explorer-enabled']['$patch']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchXExplorerEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getXSamplesLanguagesQueryKey() {
  return ['x-samples-languages', '/x-samples-languages'] as const
}

export function getXSamplesLanguagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getXSamplesLanguagesQueryKey>
  >({
    queryKey: getXSamplesLanguagesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['x-samples-languages'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createXSamplesLanguages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-samples-languages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getXSamplesLanguagesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getXSamplesLanguagesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostXSamplesLanguagesMutationKey() {
  return ['x-samples-languages', '/x-samples-languages', 'POST'] as const
}

export function getPostXSamplesLanguagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-samples-languages']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostXSamplesLanguagesMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-samples-languages'].$post(undefined, options))
    },
  })
}

export function createPostXSamplesLanguages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-samples-languages']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXSamplesLanguagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXProxyEnabledMutationKey() {
  return ['x-proxy-enabled', '/x-proxy-enabled', 'POST'] as const
}

export function getPostXProxyEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostXProxyEnabledMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-proxy-enabled'].$post(undefined, options))
    },
  })
}

export function createPostXProxyEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$post']>>>
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXProxyEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchXProxyEnabledMutationKey() {
  return ['x-proxy-enabled', '/x-proxy-enabled', 'PATCH'] as const
}

export function getPatchXProxyEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$patch']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchXProxyEnabledMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-proxy-enabled'].$patch(undefined, options))
    },
  })
}

export function createPatchXProxyEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-proxy-enabled']['$patch']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchXProxyEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXMetricsEnabledMutationKey() {
  return ['x-metrics-enabled', '/x-metrics-enabled', 'POST'] as const
}

export function getPostXMetricsEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$post']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostXMetricsEnabledMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-metrics-enabled'].$post(undefined, options))
    },
  })
}

export function createPostXMetricsEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXMetricsEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchXMetricsEnabledMutationKey() {
  return ['x-metrics-enabled', '/x-metrics-enabled', 'PATCH'] as const
}

export function getPatchXMetricsEnabledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$patch']>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPatchXMetricsEnabledMutationKey(),
    async mutationFn() {
      return parseResponse(client['x-metrics-enabled'].$patch(undefined, options))
    },
  })
}

export function createPatchXMetricsEnabled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['x-metrics-enabled']['$patch']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchXMetricsEnabledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

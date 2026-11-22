import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCmsKey() {
  return ['cms'] as const
}

export function getCmsUrlRedirects202609QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>,
) {
  return ['cms', '/cms/url-redirects/2026-09', toValue(args)] as const
}

export function getCmsUrlRedirects202609QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsUrlRedirects202609QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsUrlRedirects202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCmsUrlRedirects202609QueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsUrlRedirects202609QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['url-redirects']['2026-09'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsUrlRedirects202609MutationKey() {
  return ['cms', '/cms/url-redirects/2026-09', 'POST'] as const
}

export function getPostCmsUrlRedirects202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsUrlRedirects202609MutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
    ) {
      return parseResponse(client.cms['url-redirects']['2026-09'].$post(args, options))
    },
  })
}

export function usePostCmsUrlRedirects202609<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsUrlRedirects202609MutationOptions<TError, TOnMutateResult>(
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

export function getCmsUrlRedirects202609UrlMappingsQueryKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings'] as const
}

export function getCmsUrlRedirects202609UrlMappingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCmsUrlRedirects202609UrlMappingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsUrlRedirects202609UrlMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsUrlRedirects202609UrlMappingsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCmsUrlRedirects202609UrlMappingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCmsUrlRedirects202609UrlMappingsMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings', 'POST'] as const
}

export function getPostCmsUrlRedirects202609UrlMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCmsUrlRedirects202609UrlMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'].$post(args, options),
      )
    },
  })
}

export function usePostCmsUrlRedirects202609UrlMappings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['url-redirects']['2026-09']['url-mappings']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCmsUrlRedirects202609UrlMappingsMutationOptions<
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

export function getCmsUrlRedirects202609UrlMappingsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
  >,
) {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', toValue(args)] as const
}

export function getCmsUrlRedirects202609UrlMappingsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsUrlRedirects202609UrlMappingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsUrlRedirects202609UrlMappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsUrlRedirects202609UrlMappingsIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlMappingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsUrlRedirects202609UrlMappingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsUrlRedirects202609UrlMappingsIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function getDeleteCmsUrlRedirects202609UrlMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsUrlRedirects202609UrlMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09']['url-mappings'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCmsUrlRedirects202609UrlMappingsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms)['url-redirects']['2026-09']['url-mappings'][':id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCmsUrlRedirects202609UrlMappingsIdMutationOptions<
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

export function getCmsUrlRedirects202609UrlRedirectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
  >,
) {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', toValue(args)] as const
}

export function getCmsUrlRedirects202609UrlRedirectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCmsUrlRedirects202609UrlRedirectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCmsUrlRedirects202609UrlRedirectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCmsUrlRedirects202609UrlRedirectIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCmsUrlRedirects202609UrlRedirectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCmsUrlRedirects202609UrlRedirectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cms['url-redirects']['2026-09'][':urlRedirectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCmsUrlRedirects202609UrlRedirectIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'DELETE'] as const
}

export function getDeleteCmsUrlRedirects202609UrlRedirectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCmsUrlRedirects202609UrlRedirectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCmsUrlRedirects202609UrlRedirectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCmsUrlRedirects202609UrlRedirectIdMutationOptions<
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

export function getPatchCmsUrlRedirects202609UrlRedirectIdMutationKey() {
  return ['cms', '/cms/url-redirects/2026-09/:urlRedirectId', 'PATCH'] as const
}

export function getPatchCmsUrlRedirects202609UrlRedirectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCmsUrlRedirects202609UrlRedirectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
      >,
    ) {
      return parseResponse(
        client.cms['url-redirects']['2026-09'][':urlRedirectId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCmsUrlRedirects202609UrlRedirectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.cms)['url-redirects']['2026-09'][':urlRedirectId']['$patch']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCmsUrlRedirects202609UrlRedirectIdMutationOptions<
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

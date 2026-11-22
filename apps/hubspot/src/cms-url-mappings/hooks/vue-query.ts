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

export function getUrlMappingsKey() {
  return ['url-mappings'] as const
}

export function getUrlMappings202609UrlMappingsQueryKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings'] as const
}

export function getUrlMappings202609UrlMappingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUrlMappings202609UrlMappingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUrlMappings202609UrlMappings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
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
                  ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>
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
                  ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUrlMappings202609UrlMappingsQueryKey>
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
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUrlMappings202609UrlMappingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUrlMappings202609UrlMappingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['url-mappings']['2026-09']['url-mappings'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUrlMappings202609UrlMappingsMutationKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings', 'POST'] as const
}

export function getPostUrlMappings202609UrlMappingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUrlMappings202609UrlMappingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
    ) {
      return parseResponse(client['url-mappings']['2026-09']['url-mappings'].$post(args, options))
    },
  })
}

export function usePostUrlMappings202609UrlMappings<
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
                  ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings']['$post']>,
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
  const mutationDefaults = getPostUrlMappings202609UrlMappingsMutationOptions<
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

export function getUrlMappings202609UrlMappingsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
  >,
) {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', toValue(args)] as const
}

export function getUrlMappings202609UrlMappingsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUrlMappings202609UrlMappingsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUrlMappings202609UrlMappingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
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
                    (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']
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
                    (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getUrlMappings202609UrlMappingsIdQueryKey>
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
            ReturnType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUrlMappings202609UrlMappingsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUrlMappings202609UrlMappingsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['url-mappings']['2026-09']['url-mappings'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUrlMappings202609UrlMappingsIdMutationKey() {
  return ['url-mappings', '/url-mappings/2026-09/url-mappings/:id', 'DELETE'] as const
}

export function getDeleteUrlMappings202609UrlMappingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUrlMappings202609UrlMappingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client['url-mappings']['2026-09']['url-mappings'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUrlMappings202609UrlMappingsId<
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
                      (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['url-mappings']['2026-09']['url-mappings'][':id']['$delete']
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
  const mutationDefaults = getDeleteUrlMappings202609UrlMappingsIdMutationOptions<
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

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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAccountCollectionFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account_collection_flows.$get>>,
) {
  return ['api', '/api/account_collection_flows', toValue(args)] as const
}

export function getApiAccountCollectionFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account_collection_flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountCollectionFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account_collection_flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountCollectionFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.account_collection_flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>
              >
            >
          >,
          ReturnType<typeof getApiAccountCollectionFlowsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountCollectionFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountCollectionFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account_collection_flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAccountCollectionFlowsMutationKey() {
  return ['api', '/api/account_collection_flows', 'POST'] as const
}

export function getPostApiAccountCollectionFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.account_collection_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountCollectionFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.account_collection_flows.$post>) {
      return parseResponse(client.api.account_collection_flows.$post(args, options))
    },
  })
}

export function usePostApiAccountCollectionFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.account_collection_flows.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.account_collection_flows.$post>,
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
  const mutationDefaults = getPostApiAccountCollectionFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getApiAccountCollectionFlowsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/account_collection_flows/:id', keyArgs] as const
}

export function getApiAccountCollectionFlowsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountCollectionFlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.account_collection_flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountCollectionFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiAccountCollectionFlowsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountCollectionFlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountCollectionFlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.account_collection_flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiAccountCollectionFlowsIdMutationKey() {
  return ['api', '/api/account_collection_flows/:id', 'PATCH'] as const
}

export function getPatchApiAccountCollectionFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAccountCollectionFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.account_collection_flows[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiAccountCollectionFlowsId<
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
                Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiAccountCollectionFlowsIdMutationOptions<
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

export function getApiBulkRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_requests.$get>>,
) {
  return ['api', '/api/bulk_requests', toValue(args)] as const
}

export function getApiBulkRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_requests.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bulk_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBulkRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_requests.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>
            >
          >,
          ReturnType<typeof getApiBulkRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bulk_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiBulkRequestsMutationKey() {
  return ['api', '/api/bulk_requests', 'POST'] as const
}

export function getPostApiBulkRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.bulk_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBulkRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.bulk_requests.$post>) {
      return parseResponse(client.api.bulk_requests.$post(args, options))
    },
  })
}

export function usePostApiBulkRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.bulk_requests.$post>,
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
  const mutationDefaults = getPostApiBulkRequestsMutationOptions<TError, TOnMutateResult>(
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

export function getApiBulkRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>>,
) {
  return ['api', '/api/bulk_requests/:id', toValue(args)] as const
}

export function getApiBulkRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bulk_requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBulkRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBulkRequestsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bulk_requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBulkResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_results.$get>>,
) {
  return ['api', '/api/bulk_results', toValue(args)] as const
}

export function getApiBulkResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_results.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bulk_results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBulkResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.bulk_results.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>
            >
          >,
          ReturnType<typeof getApiBulkResultsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bulk_results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiBulkResultsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>>,
) {
  return ['api', '/api/bulk_results/:id', toValue(args)] as const
}

export function getApiBulkResultsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiBulkResultsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.bulk_results[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiBulkResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiBulkResultsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkResultsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiBulkResultsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.bulk_results[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cases.$get>>,
) {
  return ['api', '/api/cases', toValue(args)] as const
}

export function getApiCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cases.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiCases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.cases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
          >,
          ReturnType<typeof getApiCasesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCasesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cases)[':id']['$get']>>,
) {
  return ['api', '/api/cases/:id', toValue(args)] as const
}

export function getApiCasesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cases)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCasesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.cases[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCasesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.cases)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiCasesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCasesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCasesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.cases[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiConnectionLegalEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connection_legal_entities.$get>>,
) {
  return ['api', '/api/connection_legal_entities', toValue(args)] as const
}

export function getApiConnectionLegalEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connection_legal_entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConnectionLegalEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.connection_legal_entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConnectionLegalEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connection_legal_entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
              >
            >
          >,
          ReturnType<typeof getApiConnectionLegalEntitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionLegalEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConnectionLegalEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.connection_legal_entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiConnectionLegalEntitiesMutationKey() {
  return ['api', '/api/connection_legal_entities', 'POST'] as const
}

export function getPostApiConnectionLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.connection_legal_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConnectionLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.connection_legal_entities.$post>) {
      return parseResponse(client.api.connection_legal_entities.$post(args, options))
    },
  })
}

export function usePostApiConnectionLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.connection_legal_entities.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.connection_legal_entities.$post>,
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
  const mutationDefaults = getPostApiConnectionLegalEntitiesMutationOptions<
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

export function getApiConnectionLegalEntitiesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/connection_legal_entities/:id', keyArgs] as const
}

export function getApiConnectionLegalEntitiesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConnectionLegalEntitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.connection_legal_entities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConnectionLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiConnectionLegalEntitiesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionLegalEntitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConnectionLegalEntitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.connection_legal_entities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiConnectionLegalEntitiesIdMutationKey() {
  return ['api', '/api/connection_legal_entities/:id', 'PATCH'] as const
}

export function getPatchApiConnectionLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConnectionLegalEntitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.connection_legal_entities[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiConnectionLegalEntitiesId<
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
                Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiConnectionLegalEntitiesIdMutationOptions<
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

export function getApiConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connections.$get>>,
) {
  return ['api', '/api/connections', toValue(args)] as const
}

export function getApiConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>
            >
          >,
          ReturnType<typeof getApiConnectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCounterpartiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.counterparties.$get>>,
) {
  return ['api', '/api/counterparties', toValue(args)] as const
}

export function getApiCounterpartiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.counterparties.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCounterpartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.counterparties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCounterparties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.counterparties.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>
            >
          >,
          ReturnType<typeof getApiCounterpartiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCounterpartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCounterpartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.counterparties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiCounterpartiesMutationKey() {
  return ['api', '/api/counterparties', 'POST'] as const
}

export function getPostApiCounterpartiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.counterparties.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCounterpartiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.counterparties.$post>) {
      return parseResponse(client.api.counterparties.$post(args, options))
    },
  })
}

export function usePostApiCounterparties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.counterparties.$post>,
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
  const mutationDefaults = getPostApiCounterpartiesMutationOptions<TError, TOnMutateResult>(
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

export function getApiCounterpartiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.counterparties)[':id']['$get']>>,
) {
  return ['api', '/api/counterparties/:id', toValue(args)] as const
}

export function getApiCounterpartiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.counterparties)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCounterpartiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.counterparties[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCounterpartiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.counterparties)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiCounterpartiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCounterpartiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCounterpartiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.counterparties[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiCounterpartiesIdMutationKey() {
  return ['api', '/api/counterparties/:id', 'DELETE'] as const
}

export function getDeleteApiCounterpartiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCounterpartiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>) {
      return parseResponse(client.api.counterparties[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiCounterpartiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiCounterpartiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiCounterpartiesIdMutationKey() {
  return ['api', '/api/counterparties/:id', 'PATCH'] as const
}

export function getPatchApiCounterpartiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCounterpartiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>) {
      return parseResponse(client.api.counterparties[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiCounterpartiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiCounterpartiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiCounterpartiesIdCollectAccountMutationKey() {
  return ['api', '/api/counterparties/:id/collect_account', 'POST'] as const
}

export function getPostApiCounterpartiesIdCollectAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCounterpartiesIdCollectAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
    ) {
      return parseResponse(client.api.counterparties[':id'].collect_account.$post(args, options))
    },
  })
}

export function usePostApiCounterpartiesIdCollectAccount<
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
                  ReturnType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
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
  const mutationDefaults = getPostApiCounterpartiesIdCollectAccountMutationOptions<
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

export function getApiDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
) {
  return ['api', '/api/documents', toValue(args)] as const
}

export function getApiDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.documents.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
          >,
          ReturnType<typeof getApiDocumentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDocumentsMutationKey() {
  return ['api', '/api/documents', 'POST'] as const
}

export function getPostApiDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.documents.$post>) {
      return parseResponse(client.api.documents.$post(args, options))
    },
  })
}

export function usePostApiDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.documents.$post>,
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
  const mutationDefaults = getPostApiDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiDocumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
) {
  return ['api', '/api/documents/:id', toValue(args)] as const
}

export function getApiDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.documents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.documents)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDocumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.documents[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiDocumentsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>
  >,
) {
  return ['api', '/api/documents/:id/download', toValue(args)] as const
}

export function getApiDocumentsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.documents[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiDocumentsIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.documents[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEmbeddableFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.embeddable_flows.$get>>,
) {
  return ['api', '/api/embeddable_flows', toValue(args)] as const
}

export function getApiEmbeddableFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.embeddable_flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEmbeddableFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.embeddable_flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEmbeddableFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.embeddable_flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
            >
          >,
          ReturnType<typeof getApiEmbeddableFlowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddableFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEmbeddableFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.embeddable_flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiEmbeddableFlowsMutationKey() {
  return ['api', '/api/embeddable_flows', 'POST'] as const
}

export function getPostApiEmbeddableFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.embeddable_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmbeddableFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.embeddable_flows.$post>) {
      return parseResponse(client.api.embeddable_flows.$post(args, options))
    },
  })
}

export function usePostApiEmbeddableFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.embeddable_flows.$post>,
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
  const mutationDefaults = getPostApiEmbeddableFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getApiEmbeddableFlowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/embeddable_flows/:id', keyArgs] as const
}

export function getApiEmbeddableFlowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEmbeddableFlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.embeddable_flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEmbeddableFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiEmbeddableFlowsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddableFlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEmbeddableFlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.embeddable_flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiEmbeddableFlowsIdMutationKey() {
  return ['api', '/api/embeddable_flows/:id', 'PATCH'] as const
}

export function getPatchApiEmbeddableFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEmbeddableFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.embeddable_flows[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiEmbeddableFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiEmbeddableFlowsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
) {
  return ['api', '/api/events', toValue(args)] as const
}

export function getApiEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
          >,
          ReturnType<typeof getApiEventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiEventsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.events)[':id']['$get']>>,
) {
  return ['api', '/api/events/:id', toValue(args)] as const
}

export function getApiEventsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.events)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.events[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.events)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiEventsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.events[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiExpectedPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.expected_payments.$get>>,
) {
  return ['api', '/api/expected_payments', toValue(args)] as const
}

export function getApiExpectedPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.expected_payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExpectedPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.expected_payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExpectedPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.expected_payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
            >
          >,
          ReturnType<typeof getApiExpectedPaymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExpectedPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExpectedPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.expected_payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiExpectedPaymentsMutationKey() {
  return ['api', '/api/expected_payments', 'POST'] as const
}

export function getPostApiExpectedPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.expected_payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExpectedPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.expected_payments.$post>) {
      return parseResponse(client.api.expected_payments.$post(args, options))
    },
  })
}

export function usePostApiExpectedPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.expected_payments.$post>,
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
  const mutationDefaults = getPostApiExpectedPaymentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiExpectedPaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>>,
) {
  return ['api', '/api/expected_payments/:id', toValue(args)] as const
}

export function getApiExpectedPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExpectedPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.expected_payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExpectedPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiExpectedPaymentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExpectedPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExpectedPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.expected_payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiExpectedPaymentsIdMutationKey() {
  return ['api', '/api/expected_payments/:id', 'DELETE'] as const
}

export function getDeleteApiExpectedPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiExpectedPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.expected_payments[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiExpectedPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiExpectedPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiExpectedPaymentsIdMutationKey() {
  return ['api', '/api/expected_payments/:id', 'PATCH'] as const
}

export function getPatchApiExpectedPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiExpectedPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.expected_payments[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiExpectedPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiExpectedPaymentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiExternalAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.external_accounts.$get>>,
) {
  return ['api', '/api/external_accounts', toValue(args)] as const
}

export function getApiExternalAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.external_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExternalAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.external_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.external_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiExternalAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExternalAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.external_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiExternalAccountsMutationKey() {
  return ['api', '/api/external_accounts', 'POST'] as const
}

export function getPostApiExternalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.external_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.external_accounts.$post>) {
      return parseResponse(client.api.external_accounts.$post(args, options))
    },
  })
}

export function usePostApiExternalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.external_accounts.$post>,
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
  const mutationDefaults = getPostApiExternalAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiExternalAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>>,
) {
  return ['api', '/api/external_accounts/:id', toValue(args)] as const
}

export function getApiExternalAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiExternalAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.external_accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiExternalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiExternalAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiExternalAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.external_accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiExternalAccountsIdMutationKey() {
  return ['api', '/api/external_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiExternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiExternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiExternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiExternalAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiExternalAccountsIdMutationKey() {
  return ['api', '/api/external_accounts/:id', 'PATCH'] as const
}

export function getPatchApiExternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiExternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiExternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiExternalAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiExternalAccountsIdCompleteVerificationMutationKey() {
  return ['api', '/api/external_accounts/:id/complete_verification', 'POST'] as const
}

export function getPostApiExternalAccountsIdCompleteVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsIdCompleteVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.external_accounts[':id'].complete_verification.$post(args, options),
      )
    },
  })
}

export function usePostApiExternalAccountsIdCompleteVerification<
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
                    (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
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
  const mutationDefaults = getPostApiExternalAccountsIdCompleteVerificationMutationOptions<
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

export function getPostApiExternalAccountsIdVerifyMutationKey() {
  return ['api', '/api/external_accounts/:id/verify', 'POST'] as const
}

export function getPostApiExternalAccountsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].verify.$post(args, options))
    },
  })
}

export function usePostApiExternalAccountsIdVerify<
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
                Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
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
  const mutationDefaults = getPostApiExternalAccountsIdVerifyMutationOptions<
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

export function getApiForeignExchangeQuotesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.foreign_exchange_quotes.$get>>,
) {
  return ['api', '/api/foreign_exchange_quotes', toValue(args)] as const
}

export function getApiForeignExchangeQuotesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.foreign_exchange_quotes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiForeignExchangeQuotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.foreign_exchange_quotes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiForeignExchangeQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.foreign_exchange_quotes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>
              >
            >
          >,
          ReturnType<typeof getApiForeignExchangeQuotesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiForeignExchangeQuotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiForeignExchangeQuotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.foreign_exchange_quotes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiForeignExchangeQuotesMutationKey() {
  return ['api', '/api/foreign_exchange_quotes', 'POST'] as const
}

export function getPostApiForeignExchangeQuotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.foreign_exchange_quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiForeignExchangeQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.foreign_exchange_quotes.$post>) {
      return parseResponse(client.api.foreign_exchange_quotes.$post(args, options))
    },
  })
}

export function usePostApiForeignExchangeQuotes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.foreign_exchange_quotes.$post>,
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
  const mutationDefaults = getPostApiForeignExchangeQuotesMutationOptions<TError, TOnMutateResult>(
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

export function getApiForeignExchangeQuotesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>
  >,
) {
  return ['api', '/api/foreign_exchange_quotes/:id', toValue(args)] as const
}

export function getApiForeignExchangeQuotesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiForeignExchangeQuotesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.foreign_exchange_quotes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiForeignExchangeQuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiForeignExchangeQuotesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiForeignExchangeQuotesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiForeignExchangeQuotesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.foreign_exchange_quotes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiHoldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.holds.$get>>,
) {
  return ['api', '/api/holds', toValue(args)] as const
}

export function getApiHoldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.holds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHoldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.holds.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiHolds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.holds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
          >,
          ReturnType<typeof getApiHoldsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHoldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHoldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.holds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiHoldsMutationKey() {
  return ['api', '/api/holds', 'POST'] as const
}

export function getPostApiHoldsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.holds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiHoldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.holds.$post>) {
      return parseResponse(client.api.holds.$post(args, options))
    },
  })
}

export function usePostApiHolds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.holds.$post>,
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
  const mutationDefaults = getPostApiHoldsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiHoldsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.holds)[':id']['$get']>>,
) {
  return ['api', '/api/holds/:id', toValue(args)] as const
}

export function getApiHoldsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.holds)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiHoldsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.holds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiHoldsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.holds)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiHoldsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHoldsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiHoldsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.holds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiHoldsIdMutationKey() {
  return ['api', '/api/holds/:id', 'PATCH'] as const
}

export function getPatchApiHoldsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.holds)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiHoldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.holds)[':id']['$patch']>) {
      return parseResponse(client.api.holds[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiHoldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.holds)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiHoldsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiIdentificationsMutationKey() {
  return ['api', '/api/identifications', 'POST'] as const
}

export function getPostApiIdentificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.identifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.identifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identifications.$post>) {
      return parseResponse(client.api.identifications.$post(args, options))
    },
  })
}

export function usePostApiIdentifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.identifications.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.identifications.$post>,
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
  const mutationDefaults = getPostApiIdentificationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiIdentificationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.identifications)[':id']['$get']>>,
) {
  return ['api', '/api/identifications/:id', toValue(args)] as const
}

export function getApiIdentificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.identifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIdentificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.identifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIdentificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.identifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiIdentificationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIdentificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.identifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiIdentificationsIdMutationKey() {
  return ['api', '/api/identifications/:id', 'PATCH'] as const
}

export function getPatchApiIdentificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.identifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.identifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIdentificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.identifications)[':id']['$patch']>) {
      return parseResponse(client.api.identifications[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiIdentificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.identifications)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.identifications)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiIdentificationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiIncomingPaymentDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.incoming_payment_details.$get>>,
) {
  return ['api', '/api/incoming_payment_details', toValue(args)] as const
}

export function getApiIncomingPaymentDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.incoming_payment_details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIncomingPaymentDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.incoming_payment_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIncomingPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.incoming_payment_details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>
              >
            >
          >,
          ReturnType<typeof getApiIncomingPaymentDetailsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIncomingPaymentDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIncomingPaymentDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.incoming_payment_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiIncomingPaymentDetailsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>
  >,
) {
  return ['api', '/api/incoming_payment_details/:id', toValue(args)] as const
}

export function getApiIncomingPaymentDetailsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiIncomingPaymentDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.incoming_payment_details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiIncomingPaymentDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiIncomingPaymentDetailsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIncomingPaymentDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiIncomingPaymentDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.incoming_payment_details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiIncomingPaymentDetailsIdMutationKey() {
  return ['api', '/api/incoming_payment_details/:id', 'PATCH'] as const
}

export function getPatchApiIncomingPaymentDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIncomingPaymentDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.incoming_payment_details[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiIncomingPaymentDetailsId<
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
                Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiIncomingPaymentDetailsIdMutationOptions<
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

export function getApiInternalAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.internal_accounts.$get>>,
) {
  return ['api', '/api/internal_accounts', toValue(args)] as const
}

export function getApiInternalAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.internal_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInternalAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.internal_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.internal_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiInternalAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInternalAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.internal_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInternalAccountsMutationKey() {
  return ['api', '/api/internal_accounts', 'POST'] as const
}

export function getPostApiInternalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.internal_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.internal_accounts.$post>) {
      return parseResponse(client.api.internal_accounts.$post(args, options))
    },
  })
}

export function usePostApiInternalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.internal_accounts.$post>,
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
  const mutationDefaults = getPostApiInternalAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiInternalAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>>,
) {
  return ['api', '/api/internal_accounts/:id', toValue(args)] as const
}

export function getApiInternalAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInternalAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.internal_accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInternalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiInternalAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInternalAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.internal_accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiInternalAccountsIdMutationKey() {
  return ['api', '/api/internal_accounts/:id', 'PATCH'] as const
}

export function getPatchApiInternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.internal_accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiInternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiInternalAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiInternalAccountsIdRequestClosureMutationKey() {
  return ['api', '/api/internal_accounts/:id/request_closure', 'POST'] as const
}

export function getPostApiInternalAccountsIdRequestClosureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsIdRequestClosureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':id']['request_closure']['$post']
      >,
    ) {
      return parseResponse(client.api.internal_accounts[':id'].request_closure.$post(args, options))
    },
  })
}

export function usePostApiInternalAccountsIdRequestClosure<
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
                    (typeof client.api.internal_accounts)[':id']['request_closure']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.internal_accounts)[':id']['request_closure']['$post']
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
  const mutationDefaults = getPostApiInternalAccountsIdRequestClosureMutationOptions<
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

export function getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/account_capabilities/:id',
    'PATCH',
  ] as const
}

export function getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].account_capabilities[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiInternalAccountsInternalAccountIdAccountCapabilitiesId<
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
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
  const mutationDefaults =
    getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationOptions<
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

export function getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/balance_reports',
    toValue(args),
  ] as const
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInternalAccountsInternalAccountIdBalanceReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
    >
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey>
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
              (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.internal_accounts[':internal_account_id'].balance_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationKey() {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports', 'POST'] as const
}

export function getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports.$post(args, options),
      )
    },
  })
}

export function usePostApiInternalAccountsInternalAccountIdBalanceReports<
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
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
  const mutationDefaults = getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationOptions<
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

export function getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/balance_reports/:id',
    toValue(args),
  ] as const
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiInternalAccountsInternalAccountIdBalanceReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
    >
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
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
                    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey>
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
              (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/balance_reports/:id',
    'DELETE',
  ] as const
}

export function getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiInternalAccountsInternalAccountIdBalanceReportsId<
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
                      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
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
  const mutationDefaults =
    getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationOptions<
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

export function getApiInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoices.$get>>,
) {
  return ['api', '/api/invoices', toValue(args)] as const
}

export function getApiInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
          >,
          ReturnType<typeof getApiInvoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoicesMutationKey() {
  return ['api', '/api/invoices', 'POST'] as const
}

export function getPostApiInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoices.$post>) {
      return parseResponse(client.api.invoices.$post(args, options))
    },
  })
}

export function usePostApiInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.invoices.$post>,
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
  const mutationDefaults = getPostApiInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiInvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invoices)[':id']['$get']>>,
) {
  return ['api', '/api/invoices/:id', toValue(args)] as const
}

export function getApiInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invoices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.invoices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiInvoicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiInvoicesIdMutationKey() {
  return ['api', '/api/invoices/:id', 'PATCH'] as const
}

export function getPatchApiInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.invoices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.invoices)[':id']['$patch']>) {
      return parseResponse(client.api.invoices[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.invoices)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.invoices)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiInvoicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationKey() {
  return ['api', '/api/invoices/:id/payment_orders/:payment_order_id', 'PUT'] as const
}

export function getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':id'].payment_orders[':payment_order_id'].$put(args, options),
      )
    },
  })
}

export function usePutApiInvoicesIdPaymentOrdersPaymentOrderId<
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
                    (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
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
  const mutationDefaults = getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationOptions<
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

export function getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
  >,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', toValue(args)] as const
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoicesInvoiceIdInvoiceLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey>
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
            ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', 'POST'] as const
}

export function getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items.$post(args, options),
      )
    },
  })
}

export function usePostApiInvoicesInvoiceIdInvoiceLineItems<
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
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
  const mutationDefaults = getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationOptions<
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

export function getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', toValue(args)] as const
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiInvoicesInvoiceIdInvoiceLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
    >
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey>
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
              (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'DELETE'] as const
}

export function getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiInvoicesInvoiceIdInvoiceLineItemsId<
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
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

export function getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'PATCH'] as const
}

export function getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiInvoicesInvoiceIdInvoiceLineItemsId<
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
                    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
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
  const mutationDefaults = getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
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

export function getApiJournalEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_entries.$get>>,
) {
  return ['api', '/api/journal_entries', toValue(args)] as const
}

export function getApiJournalEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
            >
          >,
          ReturnType<typeof getApiJournalEntriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJournalEntriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>>,
) {
  return ['api', '/api/journal_entries/:id', toValue(args)] as const
}

export function getApiJournalEntriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalEntriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_entries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJournalEntriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalEntriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalEntriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_entries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJournalReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_reports.$get>>,
) {
  return ['api', '/api/journal_reports', toValue(args)] as const
}

export function getApiJournalReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
            >
          >,
          ReturnType<typeof getApiJournalReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJournalReportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>>,
) {
  return ['api', '/api/journal_reports/:id', toValue(args)] as const
}

export function getApiJournalReportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalReportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_reports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJournalReportsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalReportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalReportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_reports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiJournalReportsIdMutationKey() {
  return ['api', '/api/journal_reports/:id', 'PATCH'] as const
}

export function getPatchApiJournalReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJournalReportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>) {
      return parseResponse(client.api.journal_reports[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiJournalReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiJournalReportsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiJournalSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_sources.$get>>,
) {
  return ['api', '/api/journal_sources', toValue(args)] as const
}

export function getApiJournalSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_sources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.journal_sources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
            >
          >,
          ReturnType<typeof getApiJournalSourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiJournalSourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>>,
) {
  return ['api', '/api/journal_sources/:id', toValue(args)] as const
}

export function getApiJournalSourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiJournalSourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.journal_sources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiJournalSourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiJournalSourcesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalSourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiJournalSourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.journal_sources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLedgerAccountBalanceMonitorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>>,
) {
  return ['api', '/api/ledger_account_balance_monitors', toValue(args)] as const
}

export function getApiLedgerAccountBalanceMonitorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountBalanceMonitorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_balance_monitors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountBalanceMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountBalanceMonitorsQueryKey>
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
          Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountBalanceMonitorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountBalanceMonitorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_balance_monitors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgerAccountBalanceMonitorsMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors', 'POST'] as const
}

export function getPostApiLedgerAccountBalanceMonitorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountBalanceMonitorsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors.$post(args, options))
    },
  })
}

export function usePostApiLedgerAccountBalanceMonitors<
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
                Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
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
  const mutationDefaults = getPostApiLedgerAccountBalanceMonitorsMutationOptions<
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

export function getApiLedgerAccountBalanceMonitorsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
  >,
) {
  return ['api', '/api/ledger_account_balance_monitors/:id', toValue(args)] as const
}

export function getApiLedgerAccountBalanceMonitorsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountBalanceMonitorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_balance_monitors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountBalanceMonitorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
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
                  ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountBalanceMonitorsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountBalanceMonitorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountBalanceMonitorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_balance_monitors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLedgerAccountBalanceMonitorsIdMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountBalanceMonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountBalanceMonitorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLedgerAccountBalanceMonitorsId<
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
                  ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLedgerAccountBalanceMonitorsIdMutationOptions<
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

export function getPatchApiLedgerAccountBalanceMonitorsIdMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountBalanceMonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountBalanceMonitorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerAccountBalanceMonitorsId<
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
                  ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerAccountBalanceMonitorsIdMutationOptions<
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

export function getApiLedgerAccountCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_categories.$get>>,
) {
  return ['api', '/api/ledger_account_categories', toValue(args)] as const
}

export function getApiLedgerAccountCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgerAccountCategoriesMutationKey() {
  return ['api', '/api/ledger_account_categories', 'POST'] as const
}

export function getPostApiLedgerAccountCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_categories.$post>) {
      return parseResponse(client.api.ledger_account_categories.$post(args, options))
    },
  })
}

export function usePostApiLedgerAccountCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_categories.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_account_categories.$post>,
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
  const mutationDefaults = getPostApiLedgerAccountCategoriesMutationOptions<
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

export function getApiLedgerAccountCategoriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>
  >,
) {
  return ['api', '/api/ledger_account_categories/:id', toValue(args)] as const
}

export function getApiLedgerAccountCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_categories[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLedgerAccountCategoriesIdMutationKey() {
  return ['api', '/api/ledger_account_categories/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_account_categories[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLedgerAccountCategoriesId<
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
                Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLedgerAccountCategoriesIdMutationOptions<
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

export function getPatchApiLedgerAccountCategoriesIdMutationKey() {
  return ['api', '/api/ledger_account_categories/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_categories[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerAccountCategoriesId<
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
                Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerAccountCategoriesIdMutationOptions<
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

export function getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'PUT',
  ] as const
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_account_categories[
          ':sub_category_id'
        ].$put(args, options),
      )
    },
  })
}

export function usePutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
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
                    (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
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
  const mutationDefaults =
    getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
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

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'DELETE',
  ] as const
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_account_categories[
          ':sub_category_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
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
                    (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
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
  const mutationDefaults =
    getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
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

export function getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'PUT',
  ] as const
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
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
                    (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
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
  const mutationDefaults =
    getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
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

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'DELETE',
  ] as const
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
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
                    (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
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
  const mutationDefaults =
    getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
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

export function getApiLedgerAccountSettlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_settlements.$get>>,
) {
  return ['api', '/api/ledger_account_settlements', toValue(args)] as const
}

export function getApiLedgerAccountSettlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_settlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountSettlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_settlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_account_settlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountSettlementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountSettlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgerAccountSettlementsMutationKey() {
  return ['api', '/api/ledger_account_settlements', 'POST'] as const
}

export function getPostApiLedgerAccountSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_settlements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_settlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountSettlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_settlements.$post>) {
      return parseResponse(client.api.ledger_account_settlements.$post(args, options))
    },
  })
}

export function usePostApiLedgerAccountSettlements<
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
                Awaited<ReturnType<typeof client.api.ledger_account_settlements.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_account_settlements.$post>,
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
  const mutationDefaults = getPostApiLedgerAccountSettlementsMutationOptions<
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

export function getApiLedgerAccountSettlementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>
  >,
) {
  return ['api', '/api/ledger_account_settlements/:id', toValue(args)] as const
}

export function getApiLedgerAccountSettlementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountSettlementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountSettlementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountSettlementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountSettlementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountSettlementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_settlements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiLedgerAccountSettlementsIdMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountSettlementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountSettlementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_settlements[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerAccountSettlementsId<
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
                Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerAccountSettlementsIdMutationOptions<
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

export function getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].ledger_entries.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLedgerAccountSettlementsIdLedgerEntries<
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
                    (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
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
  const mutationDefaults = getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
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

export function getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'PATCH'] as const
}

export function getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].ledger_entries.$patch(args, options),
      )
    },
  })
}

export function usePatchApiLedgerAccountSettlementsIdLedgerEntries<
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
                    (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
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
  const mutationDefaults = getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
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

export function getPostApiLedgerAccountStatementsMutationKey() {
  return ['api', '/api/ledger_account_statements', 'POST'] as const
}

export function getPostApiLedgerAccountStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_statements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_statements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountStatementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_statements.$post>) {
      return parseResponse(client.api.ledger_account_statements.$post(args, options))
    },
  })
}

export function usePostApiLedgerAccountStatements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_account_statements.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_account_statements.$post>,
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
  const mutationDefaults = getPostApiLedgerAccountStatementsMutationOptions<
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

export function getApiLedgerAccountStatementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>
  >,
) {
  return ['api', '/api/ledger_account_statements/:id', toValue(args)] as const
}

export function getApiLedgerAccountStatementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountStatementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_account_statements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountStatementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountStatementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountStatementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountStatementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_account_statements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLedgerAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_accounts.$get>>,
) {
  return ['api', '/api/ledger_accounts', toValue(args)] as const
}

export function getApiLedgerAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiLedgerAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgerAccountsMutationKey() {
  return ['api', '/api/ledger_accounts', 'POST'] as const
}

export function getPostApiLedgerAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.ledger_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_accounts.$post>) {
      return parseResponse(client.api.ledger_accounts.$post(args, options))
    },
  })
}

export function usePostApiLedgerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_accounts.$post>,
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
  const mutationDefaults = getPostApiLedgerAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiLedgerAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>>,
) {
  return ['api', '/api/ledger_accounts/:id', toValue(args)] as const
}

export function getApiLedgerAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLedgerAccountsIdMutationKey() {
  return ['api', '/api/ledger_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_accounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLedgerAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLedgerAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiLedgerAccountsIdMutationKey() {
  return ['api', '/api/ledger_accounts/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>) {
      return parseResponse(client.api.ledger_accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLedgerEntriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_entries.$get>>,
) {
  return ['api', '/api/ledger_entries', toValue(args)] as const
}

export function getApiLedgerEntriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_entries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerEntriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_entries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_entries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>
            >
          >,
          ReturnType<typeof getApiLedgerEntriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerEntriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_entries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLedgerEntriesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>>,
) {
  return ['api', '/api/ledger_entries/:id', toValue(args)] as const
}

export function getApiLedgerEntriesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerEntriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_entries[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerEntriesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerEntriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerEntriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_entries[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiLedgerEntriesIdMutationKey() {
  return ['api', '/api/ledger_entries/:id', 'PATCH'] as const
}

export function getPatchApiLedgerEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerEntriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>) {
      return parseResponse(client.api.ledger_entries[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerEntriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerEntriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLedgerTransactionVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transaction_versions.$get>>,
) {
  return ['api', '/api/ledger_transaction_versions', toValue(args)] as const
}

export function getApiLedgerTransactionVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transaction_versions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerTransactionVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_transaction_versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerTransactionVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transaction_versions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerTransactionVersionsQueryKey>
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
          Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerTransactionVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_transaction_versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLedgerTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transactions.$get>>,
) {
  return ['api', '/api/ledger_transactions', toValue(args)] as const
}

export function getApiLedgerTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledger_transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
            >
          >,
          ReturnType<typeof getApiLedgerTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgerTransactionsMutationKey() {
  return ['api', '/api/ledger_transactions', 'POST'] as const
}

export function getPostApiLedgerTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_transactions.$post>) {
      return parseResponse(client.api.ledger_transactions.$post(args, options))
    },
  })
}

export function usePostApiLedgerTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.ledger_transactions.$post>,
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
  const mutationDefaults = getPostApiLedgerTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiLedgerTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>>,
) {
  return ['api', '/api/ledger_transactions/:id', toValue(args)] as const
}

export function getApiLedgerTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLedgerTransactionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiLedgerTransactionsIdMutationKey() {
  return ['api', '/api/ledger_transactions/:id', 'PATCH'] as const
}

export function getPatchApiLedgerTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgerTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgerTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiLedgerTransactionsIdPartialPostMutationKey() {
  return ['api', '/api/ledger_transactions/:id/partial_post', 'POST'] as const
}

export function getPostApiLedgerTransactionsIdPartialPostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsIdPartialPostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_transactions)[':id']['partial_post']['$post']
      >,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].partial_post.$post(args, options))
    },
  })
}

export function usePostApiLedgerTransactionsIdPartialPost<
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
                    (typeof client.api.ledger_transactions)[':id']['partial_post']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>,
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
  const mutationDefaults = getPostApiLedgerTransactionsIdPartialPostMutationOptions<
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

export function getPostApiLedgerTransactionsIdReversalMutationKey() {
  return ['api', '/api/ledger_transactions/:id/reversal', 'POST'] as const
}

export function getPostApiLedgerTransactionsIdReversalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsIdReversalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].reversal.$post(args, options))
    },
  })
}

export function usePostApiLedgerTransactionsIdReversal<
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
                  ReturnType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
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
  const mutationDefaults = getPostApiLedgerTransactionsIdReversalMutationOptions<
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

export function getApiLedgerTransactionsIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
  >,
) {
  return ['api', '/api/ledger_transactions/:id/versions', toValue(args)] as const
}

export function getApiLedgerTransactionsIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgerTransactionsIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledger_transactions[':id'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgerTransactionsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
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
                  ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLedgerTransactionsIdVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgerTransactionsIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledger_transactions[':id'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLedgersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledgers.$get>>,
) {
  return ['api', '/api/ledgers', toValue(args)] as const
}

export function getApiLedgersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledgers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledgers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiLedgers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.ledgers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
          >,
          ReturnType<typeof getApiLedgersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLedgersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledgers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLedgersMutationKey() {
  return ['api', '/api/ledgers', 'POST'] as const
}

export function getPostApiLedgersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.ledgers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledgers.$post>) {
      return parseResponse(client.api.ledgers.$post(args, options))
    },
  })
}

export function usePostApiLedgers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.ledgers.$post>,
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
  const mutationDefaults = getPostApiLedgersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiLedgersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledgers)[':id']['$get']>>,
) {
  return ['api', '/api/ledgers/:id', toValue(args)] as const
}

export function getApiLedgersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledgers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLedgersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ledgers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLedgersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.ledgers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiLedgersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLedgersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ledgers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiLedgersIdMutationKey() {
  return ['api', '/api/ledgers/:id', 'DELETE'] as const
}

export function getDeleteApiLedgersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>) {
      return parseResponse(client.api.ledgers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLedgersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLedgersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiLedgersIdMutationKey() {
  return ['api', '/api/ledgers/:id', 'PATCH'] as const
}

export function getPatchApiLedgersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>) {
      return parseResponse(client.api.ledgers[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLedgersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLedgersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiLegalEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.legal_entities.$get>>,
) {
  return ['api', '/api/legal_entities', toValue(args)] as const
}

export function getApiLegalEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.legal_entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLegalEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.legal_entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLegalEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.legal_entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>
            >
          >,
          ReturnType<typeof getApiLegalEntitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLegalEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLegalEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.legal_entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLegalEntitiesMutationKey() {
  return ['api', '/api/legal_entities', 'POST'] as const
}

export function getPostApiLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.legal_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.legal_entities.$post>) {
      return parseResponse(client.api.legal_entities.$post(args, options))
    },
  })
}

export function usePostApiLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.legal_entities.$post>,
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
  const mutationDefaults = getPostApiLegalEntitiesMutationOptions<TError, TOnMutateResult>(
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

export function getApiLegalEntitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/legal_entities/:id', keyArgs] as const
}

export function getApiLegalEntitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLegalEntitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.legal_entities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiLegalEntitiesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLegalEntitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLegalEntitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.legal_entities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiLegalEntitiesIdMutationKey() {
  return ['api', '/api/legal_entities/:id', 'PATCH'] as const
}

export function getPatchApiLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLegalEntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>) {
      return parseResponse(client.api.legal_entities[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiLegalEntityAssociationsMutationKey() {
  return ['api', '/api/legal_entity_associations', 'POST'] as const
}

export function getPostApiLegalEntityAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entity_associations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.legal_entity_associations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLegalEntityAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.legal_entity_associations.$post>) {
      return parseResponse(client.api.legal_entity_associations.$post(args, options))
    },
  })
}

export function usePostApiLegalEntityAssociations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.legal_entity_associations.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.legal_entity_associations.$post>,
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
  const mutationDefaults = getPostApiLegalEntityAssociationsMutationOptions<
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

export function getDeleteApiLegalEntityAssociationsIdMutationKey() {
  return ['api', '/api/legal_entity_associations/:id', 'DELETE'] as const
}

export function getDeleteApiLegalEntityAssociationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entity_associations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLegalEntityAssociationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.legal_entity_associations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiLegalEntityAssociationsId<
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
                Awaited<ReturnType<(typeof client.api.legal_entity_associations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiLegalEntityAssociationsIdMutationOptions<
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

export function getApiPaymentActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_actions.$get>>,
) {
  return ['api', '/api/payment_actions', toValue(args)] as const
}

export function getApiPaymentActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPaymentActionsMutationKey() {
  return ['api', '/api/payment_actions', 'POST'] as const
}

export function getPostApiPaymentActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_actions.$post>) {
      return parseResponse(client.api.payment_actions.$post(args, options))
    },
  })
}

export function usePostApiPaymentActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.payment_actions.$post>,
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
  const mutationDefaults = getPostApiPaymentActionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>>,
) {
  return ['api', '/api/payment_actions/:id', toValue(args)] as const
}

export function getApiPaymentActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPaymentActionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiPaymentActionsIdMutationKey() {
  return ['api', '/api/payment_actions/:id', 'PATCH'] as const
}

export function getPatchApiPaymentActionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>) {
      return parseResponse(client.api.payment_actions[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiPaymentActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPaymentActionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_flows.$get>>,
) {
  return ['api', '/api/payment_flows', toValue(args)] as const
}

export function getApiPaymentFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_flows.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_flows.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentFlowsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPaymentFlowsMutationKey() {
  return ['api', '/api/payment_flows', 'POST'] as const
}

export function getPostApiPaymentFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_flows.$post>) {
      return parseResponse(client.api.payment_flows.$post(args, options))
    },
  })
}

export function usePostApiPaymentFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.payment_flows.$post>,
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
  const mutationDefaults = getPostApiPaymentFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentFlowsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/payment_flows/:id', keyArgs] as const
}

export function getApiPaymentFlowsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentFlowsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_flows[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPaymentFlowsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentFlowsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentFlowsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_flows[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiPaymentFlowsIdMutationKey() {
  return ['api', '/api/payment_flows/:id', 'PATCH'] as const
}

export function getPatchApiPaymentFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentFlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>) {
      return parseResponse(client.api.payment_flows[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiPaymentFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPaymentFlowsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_orders.$get>>,
) {
  return ['api', '/api/payment_orders', toValue(args)] as const
}

export function getApiPaymentOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPaymentOrdersMutationKey() {
  return ['api', '/api/payment_orders', 'POST'] as const
}

export function getPostApiPaymentOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_orders.$post>) {
      return parseResponse(client.api.payment_orders.$post(args, options))
    },
  })
}

export function usePostApiPaymentOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.payment_orders.$post>,
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
  const mutationDefaults = getPostApiPaymentOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPaymentOrdersCreateAsyncMutationKey() {
  return ['api', '/api/payment_orders/create_async', 'POST'] as const
}

export function getPostApiPaymentOrdersCreateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.payment_orders.create_async.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.payment_orders.create_async.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersCreateAsyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_orders.create_async.$post>) {
      return parseResponse(client.api.payment_orders.create_async.$post(args, options))
    },
  })
}

export function usePostApiPaymentOrdersCreateAsync<
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
                Awaited<ReturnType<typeof client.api.payment_orders.create_async.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.payment_orders.create_async.$post>,
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
  const mutationDefaults = getPostApiPaymentOrdersCreateAsyncMutationOptions<
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

export function getApiPaymentOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>>,
) {
  return ['api', '/api/payment_orders/:id', toValue(args)] as const
}

export function getApiPaymentOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPaymentOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiPaymentOrdersIdMutationKey() {
  return ['api', '/api/payment_orders/:id', 'PATCH'] as const
}

export function getPatchApiPaymentOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>) {
      return parseResponse(client.api.payment_orders[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiPaymentOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiPaymentOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPaymentOrdersPaymentOrderIdReversalsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
  >,
) {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', toValue(args)] as const
}

export function getApiPaymentOrdersPaymentOrderIdReversalsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentOrdersPaymentOrderIdReversalsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentOrdersPaymentOrderIdReversals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
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
                    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
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
                    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsQueryKey>
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
            ReturnType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentOrdersPaymentOrderIdReversalsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_orders[':payment_order_id'].reversals.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPaymentOrdersPaymentOrderIdReversalsMutationKey() {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', 'POST'] as const
}

export function getPostApiPaymentOrdersPaymentOrderIdReversalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersPaymentOrderIdReversalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
      >,
    ) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals.$post(args, options),
      )
    },
  })
}

export function usePostApiPaymentOrdersPaymentOrderIdReversals<
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
                    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
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
  const mutationDefaults = getPostApiPaymentOrdersPaymentOrderIdReversalsMutationOptions<
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

export function getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/payment_orders/:payment_order_id/reversals/:reversal_id',
    toValue(args),
  ] as const
}

export function getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiPaymentOrdersPaymentOrderIdReversalsReversalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
    >
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
                    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
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
                    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey>
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
              (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiPaymentReferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_references.$get>>,
) {
  return ['api', '/api/payment_references', toValue(args)] as const
}

export function getApiPaymentReferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_references.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentReferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_references.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentReferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.payment_references.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
            >
          >,
          ReturnType<typeof getApiPaymentReferencesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentReferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentReferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_references.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPaymentReferencesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_references)[':id']['$get']>>,
) {
  return ['api', '/api/payment_references/:id', toValue(args)] as const
}

export function getApiPaymentReferencesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_references)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPaymentReferencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.payment_references[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPaymentReferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.payment_references)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPaymentReferencesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentReferencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPaymentReferencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.payment_references[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPingQueryKey() {
  return ['api', '/api/ping'] as const
}

export function getApiPingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiPingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
          >,
          ReturnType<typeof getApiPingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiPingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.ping.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiReturnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.returns.$get>>,
) {
  return ['api', '/api/returns', toValue(args)] as const
}

export function getApiReturnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.returns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReturnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.returns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiReturns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.returns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
          >,
          ReturnType<typeof getApiReturnsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiReturnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReturnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.returns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiReturnsMutationKey() {
  return ['api', '/api/returns', 'POST'] as const
}

export function getPostApiReturnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.returns.$post>) {
      return parseResponse(client.api.returns.$post(args, options))
    },
  })
}

export function usePostApiReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.returns.$post>,
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
  const mutationDefaults = getPostApiReturnsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiReturnsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.returns)[':id']['$get']>>,
) {
  return ['api', '/api/returns/:id', toValue(args)] as const
}

export function getApiReturnsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.returns)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiReturnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.returns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiReturnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.returns)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiReturnsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReturnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiReturnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.returns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiSimulationsCasesIdResolveMutationKey() {
  return ['api', '/api/simulations/cases/:id/resolve', 'PATCH'] as const
}

export function getPatchApiSimulationsCasesIdResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSimulationsCasesIdResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
    ) {
      return parseResponse(client.api.simulations.cases[':id'].resolve.$patch(args, options))
    },
  })
}

export function usePatchApiSimulationsCasesIdResolve<
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
                  ReturnType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
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
  const mutationDefaults = getPatchApiSimulationsCasesIdResolveMutationOptions<
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

export function getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationKey() {
  return ['api', '/api/simulations/incoming_payment_details/create_async', 'POST'] as const
}

export function getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.simulations.incoming_payment_details.create_async.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.simulations.incoming_payment_details.create_async.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.simulations.incoming_payment_details.create_async.$post
      >,
    ) {
      return parseResponse(
        client.api.simulations.incoming_payment_details.create_async.$post(args, options),
      )
    },
  })
}

export function usePostApiSimulationsIncomingPaymentDetailsCreateAsync<
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
                    typeof client.api.simulations.incoming_payment_details.create_async.$post
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            typeof client.api.simulations.incoming_payment_details.create_async.$post
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
  const mutationDefaults = getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationOptions<
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

export function getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationKey() {
  return ['api', '/api/simulations/legal_entities/:id/update_status', 'PATCH'] as const
}

export function getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.simulations.legal_entities[':id'].update_status.$patch(args, options),
      )
    },
  })
}

export function usePatchApiSimulationsLegalEntitiesIdUpdateStatus<
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
                    (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
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
  const mutationDefaults = getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationOptions<
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

export function getApiTransactionLineItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transaction_line_items.$get>>,
) {
  return ['api', '/api/transaction_line_items', toValue(args)] as const
}

export function getApiTransactionLineItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transaction_line_items.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transaction_line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactionLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transaction_line_items.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>
              >
            >
          >,
          ReturnType<typeof getApiTransactionLineItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transaction_line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransactionLineItemsMutationKey() {
  return ['api', '/api/transaction_line_items', 'POST'] as const
}

export function getPostApiTransactionLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.transaction_line_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransactionLineItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.transaction_line_items.$post>) {
      return parseResponse(client.api.transaction_line_items.$post(args, options))
    },
  })
}

export function usePostApiTransactionLineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.transaction_line_items.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.transaction_line_items.$post>,
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
  const mutationDefaults = getPostApiTransactionLineItemsMutationOptions<TError, TOnMutateResult>(
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

export function getApiTransactionLineItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>
  >,
) {
  return ['api', '/api/transaction_line_items/:id', toValue(args)] as const
}

export function getApiTransactionLineItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionLineItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transaction_line_items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactionLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransactionLineItemsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionLineItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionLineItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transaction_line_items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiTransactionLineItemsIdMutationKey() {
  return ['api', '/api/transaction_line_items/:id', 'DELETE'] as const
}

export function getDeleteApiTransactionLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransactionLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.transaction_line_items[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransactionLineItemsId<
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
                Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiTransactionLineItemsIdMutationOptions<
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

export function getApiTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
) {
  return ['api', '/api/transactions', toValue(args)] as const
}

export function getApiTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>
            >
          >,
          ReturnType<typeof getApiTransactionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiTransactionsMutationKey() {
  return ['api', '/api/transactions', 'POST'] as const
}

export function getPostApiTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.transactions.$post>) {
      return parseResponse(client.api.transactions.$post(args, options))
    },
  })
}

export function usePostApiTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.transactions.$post>,
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
  const mutationDefaults = getPostApiTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
) {
  return ['api', '/api/transactions/:id', toValue(args)] as const
}

export function getApiTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiTransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiTransactionsIdMutationKey() {
  return ['api', '/api/transactions/:id', 'DELETE'] as const
}

export function getDeleteApiTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.transactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.transactions)[':id']['$delete']>) {
      return parseResponse(client.api.transactions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.transactions)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.transactions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiTransactionsIdMutationKey() {
  return ['api', '/api/transactions/:id', 'PATCH'] as const
}

export function getPatchApiTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.transactions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTransactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.transactions)[':id']['$patch']>) {
      return parseResponse(client.api.transactions[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.transactions)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiTransactionsTransactionIdLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
  >,
) {
  return ['api', '/api/transactions/:transaction_id/line_items', toValue(args)] as const
}

export function getApiTransactionsTransactionIdLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiTransactionsTransactionIdLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.transactions[':transaction_id'].line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiTransactionsTransactionIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
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
                    (typeof client.api.transactions)[':transaction_id']['line_items']['$get']
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
                    (typeof client.api.transactions)[':transaction_id']['line_items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiTransactionsTransactionIdLineItemsQueryKey>
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
            ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsTransactionIdLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiTransactionsTransactionIdLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.transactions[':transaction_id'].line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiValidationsRoutingNumbersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.validations.routing_numbers.$get>>,
) {
  return ['api', '/api/validations/routing_numbers', toValue(args)] as const
}

export function getApiValidationsRoutingNumbersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.validations.routing_numbers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiValidationsRoutingNumbersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.validations.routing_numbers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiValidationsRoutingNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.validations.routing_numbers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
              >
            >
          >,
          ReturnType<typeof getApiValidationsRoutingNumbersQueryKey>
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
          Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValidationsRoutingNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiValidationsRoutingNumbersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.validations.routing_numbers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVirtualAccountSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_account_settings.$get>>,
) {
  return ['api', '/api/virtual_account_settings', toValue(args)] as const
}

export function getApiVirtualAccountSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_account_settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualAccountSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.virtual_account_settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualAccountSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_account_settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualAccountSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualAccountSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.virtual_account_settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiVirtualAccountSettingsMutationKey() {
  return ['api', '/api/virtual_account_settings', 'POST'] as const
}

export function getPostApiVirtualAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.virtual_account_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.virtual_account_settings.$post>) {
      return parseResponse(client.api.virtual_account_settings.$post(args, options))
    },
  })
}

export function usePostApiVirtualAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.virtual_account_settings.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.virtual_account_settings.$post>,
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
  const mutationDefaults = getPostApiVirtualAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getApiVirtualAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_accounts.$get>>,
) {
  return ['api', '/api/virtual_accounts', toValue(args)] as const
}

export function getApiVirtualAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.virtual_accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.virtual_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
            >
          >,
          ReturnType<typeof getApiVirtualAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.virtual_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiVirtualAccountsMutationKey() {
  return ['api', '/api/virtual_accounts', 'POST'] as const
}

export function getPostApiVirtualAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.virtual_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.virtual_accounts.$post>) {
      return parseResponse(client.api.virtual_accounts.$post(args, options))
    },
  })
}

export function usePostApiVirtualAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.virtual_accounts.$post>,
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
  const mutationDefaults = getPostApiVirtualAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getApiVirtualAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>>,
) {
  return ['api', '/api/virtual_accounts/:id', toValue(args)] as const
}

export function getApiVirtualAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVirtualAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.virtual_accounts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVirtualAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiVirtualAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVirtualAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.virtual_accounts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiVirtualAccountsIdMutationKey() {
  return ['api', '/api/virtual_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiVirtualAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiVirtualAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.virtual_accounts[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiVirtualAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiVirtualAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiVirtualAccountsIdMutationKey() {
  return ['api', '/api/virtual_accounts/:id', 'PATCH'] as const
}

export function getPatchApiVirtualAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiVirtualAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.virtual_accounts[':id'].$patch(args, options))
    },
  })
}

export function usePatchApiVirtualAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
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
  const mutationDefaults = getPatchApiVirtualAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiAccountsTypeAccountIdAccountDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
    >
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details', toValue(args)] as const
}

export function getApiAccountsTypeAccountIdAccountDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountsTypeAccountIdAccountDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountsTypeAccountIdAccountDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
    >
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
                    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
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
                    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsQueryKey>
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
              (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountsTypeAccountIdAccountDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':accounts_type'][':account_id'].account_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAccountsTypeAccountIdAccountDetailsMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details', 'POST'] as const
}

export function getPostApiAccountsTypeAccountIdAccountDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountsTypeAccountIdAccountDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details.$post(args, options),
      )
    },
  })
}

export function usePostApiAccountsTypeAccountIdAccountDetails<
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
                    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
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
  const mutationDefaults = getPostApiAccountsTypeAccountIdAccountDetailsMutationOptions<
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

export function getApiAccountsTypeAccountIdAccountDetailsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', toValue(args)] as const
}

export function getApiAccountsTypeAccountIdAccountDetailsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountsTypeAccountIdAccountDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountsTypeAccountIdAccountDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
    >
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
                    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
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
                    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsIdQueryKey>
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
              (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountsTypeAccountIdAccountDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':accounts_type'][':account_id'].account_details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', 'DELETE'] as const
}

export function getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAccountsTypeAccountIdAccountDetailsId<
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
                      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationOptions<
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

export function getApiAccountsTypeAccountIdRoutingDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
    >
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details', toValue(args)] as const
}

export function getApiAccountsTypeAccountIdRoutingDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountsTypeAccountIdRoutingDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountsTypeAccountIdRoutingDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
    >
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
                    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
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
                    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsQueryKey>
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
              (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountsTypeAccountIdRoutingDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':accounts_type'][':account_id'].routing_details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiAccountsTypeAccountIdRoutingDetailsMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details', 'POST'] as const
}

export function getPostApiAccountsTypeAccountIdRoutingDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountsTypeAccountIdRoutingDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details.$post(args, options),
      )
    },
  })
}

export function usePostApiAccountsTypeAccountIdRoutingDetails<
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
                    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
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
  const mutationDefaults = getPostApiAccountsTypeAccountIdRoutingDetailsMutationOptions<
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

export function getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', toValue(args)] as const
}

export function getApiAccountsTypeAccountIdRoutingDetailsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAccountsTypeAccountIdRoutingDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
    >
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
                    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
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
                    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey>
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
              (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', 'DELETE'] as const
}

export function getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiAccountsTypeAccountIdRoutingDetailsId<
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
                      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationOptions<
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

export function getApiDocumentableTypeDocumentableIdDocumentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
    >
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents', toValue(args)] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentableTypeDocumentableIdDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocumentableTypeDocumentableIdDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
    >
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsQueryKey>
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
              (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentableTypeDocumentableIdDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':documentable_type'][':documentable_id'].documents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiDocumentableTypeDocumentableIdDocumentsMutationKey() {
  return ['api', '/api/:documentable_type/:documentable_id/documents', 'POST'] as const
}

export function getPostApiDocumentableTypeDocumentableIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDocumentableTypeDocumentableIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents.$post(args, options),
      )
    },
  })
}

export function usePostApiDocumentableTypeDocumentableIdDocuments<
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
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
  const mutationDefaults = getPostApiDocumentableTypeDocumentableIdDocumentsMutationOptions<
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

export function getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents/:id', toValue(args)] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDocumentableTypeDocumentableIdDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
    >
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey>
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
              (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/:documentable_type/:documentable_id/documents/:id/download',
    toValue(args),
  ] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiDocumentableTypeDocumentableIdDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
    >
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
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
                    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey>
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
              (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiItemizableTypeItemizableIdLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
    >
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items', toValue(args)] as const
}

export function getApiItemizableTypeItemizableIdLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiItemizableTypeItemizableIdLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiItemizableTypeItemizableIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
    >
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
                    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
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
                    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsQueryKey>
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
              (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiItemizableTypeItemizableIdLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':itemizable_type'][':itemizable_id'].line_items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiItemizableTypeItemizableIdLineItemsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', toValue(args)] as const
}

export function getApiItemizableTypeItemizableIdLineItemsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiItemizableTypeItemizableIdLineItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiItemizableTypeItemizableIdLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
    >
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
                    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
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
                    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsIdQueryKey>
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
              (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiItemizableTypeItemizableIdLineItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchApiItemizableTypeItemizableIdLineItemsIdMutationKey() {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', 'PATCH'] as const
}

export function getPatchApiItemizableTypeItemizableIdLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiItemizableTypeItemizableIdLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiItemizableTypeItemizableIdLineItemsId<
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
                    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
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
  const mutationDefaults = getPatchApiItemizableTypeItemizableIdLineItemsIdMutationOptions<
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

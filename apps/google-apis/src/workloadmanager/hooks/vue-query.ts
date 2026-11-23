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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1LocationInsightsWriteInsightMutationKey() {
  return ['v1', '/v1/:location/insights:writeInsight', 'POST'] as const
}

export function getPostV1LocationInsightsWriteInsightMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1LocationInsightsWriteInsightMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>,
    ) {
      return parseResponse(client.v1[':location']['insights:writeInsight'].$post(args, options))
    },
  })
}

export function usePostV1LocationInsightsWriteInsight<
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
                  ReturnType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':location']['insights:writeInsight']['$post']>,
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
  const mutationDefaults = getPostV1LocationInsightsWriteInsightMutationOptions<
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

export function getV1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
) {
  return ['v1', '/v1/:name', toValue(args)] as const
}

export function getV1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1NameExecutionsRunMutationKey() {
  return ['v1', '/v1/:name/executions:run', 'POST'] as const
}

export function getPostV1NameExecutionsRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name']['executions:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['executions:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameExecutionsRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name']['executions:run']['$post']>,
    ) {
      return parseResponse(client.v1[':name']['executions:run'].$post(args, options))
    },
  })
}

export function usePostV1NameExecutionsRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['executions:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['executions:run']['$post']>,
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
  const mutationDefaults = getPostV1NameExecutionsRunMutationOptions<TError, TOnMutateResult>(
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

export function getV1NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['locations']['$get']>>,
) {
  return ['v1', '/v1/:name/locations', toValue(args)] as const
}

export function getV1NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
) {
  return ['v1', '/v1/:name/operations', toValue(args)] as const
}

export function getV1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NameOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentEvaluationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['evaluations']['$get']>>,
) {
  return ['v1', '/v1/:parent/evaluations', toValue(args)] as const
}

export function getV1ParentEvaluationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['evaluations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentEvaluationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].evaluations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentEvaluations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['evaluations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentEvaluationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentEvaluationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentEvaluationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].evaluations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ParentEvaluationsMutationKey() {
  return ['v1', '/v1/:parent/evaluations', 'POST'] as const
}

export function getPostV1ParentEvaluationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['evaluations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEvaluationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['evaluations']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].evaluations.$post(args, options))
    },
  })
}

export function usePostV1ParentEvaluations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['evaluations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['evaluations']['$post']>,
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
  const mutationDefaults = getPostV1ParentEvaluationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentExecutionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['executions']['$get']>>,
) {
  return ['v1', '/v1/:parent/executions', toValue(args)] as const
}

export function getV1ParentExecutionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['executions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].executions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['executions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['executions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['executions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['executions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].executions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['results']['$get']>>,
) {
  return ['v1', '/v1/:parent/results', toValue(args)] as const
}

export function getV1ParentResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['results']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['results']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['results']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['results']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentResultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['results']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['rules']['$get']>>,
) {
  return ['v1', '/v1/:parent/rules', toValue(args)] as const
}

export function getV1ParentRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['rules']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':parent']['rules']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ParentScannedResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['scannedResources']['$get']>
  >,
) {
  return ['v1', '/v1/:parent/scannedResources', toValue(args)] as const
}

export function getV1ParentScannedResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['scannedResources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ParentScannedResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':parent'].scannedResources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ParentScannedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['scannedResources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)[':parent']['scannedResources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['scannedResources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['scannedResources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ParentScannedResourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)[':parent']['scannedResources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentScannedResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ParentScannedResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':parent'].scannedResources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

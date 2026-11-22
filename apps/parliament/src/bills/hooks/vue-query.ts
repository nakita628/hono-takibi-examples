import { useQuery } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
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

export function getApiV1BillTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.BillTypes.$get>>,
) {
  return ['api', '/api/v1/BillTypes', toValue(args)] as const
}

export function getApiV1BillTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.BillTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.BillTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.BillTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1BillTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.BillTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Bills.$get>>,
) {
  return ['api', '/api/v1/Bills', toValue(args)] as const
}

export function getApiV1BillsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Bills.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Bills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Bills.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
          >,
          ReturnType<typeof getApiV1BillsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>>,
) {
  return ['api', '/api/v1/Bills/:billId', toValue(args)] as const
}

export function getApiV1BillsBillIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdNewsArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>
  >,
) {
  return ['api', '/api/v1/Bills/:billId/NewsArticles', toValue(args)] as const
}

export function getApiV1BillsBillIdNewsArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdNewsArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].NewsArticles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdNewsArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdNewsArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdNewsArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdNewsArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].NewsArticles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Publications', toValue(args)] as const
}

export function getApiV1BillsBillIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdPublicationsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdStagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages', toValue(args)] as const
}

export function getApiV1BillsBillIdStagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdStagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdStagesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdStagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Stages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdStagesBillStageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:billStageId', toValue(args)] as const
}

export function getApiV1BillsBillIdStagesBillStageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdStagesBillStageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdStagesBillStageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdQueryKey>
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
            ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdStagesBillStageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Stages[':billStageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
    >
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:billStageId/Amendments', toValue(args)] as const
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdStagesBillStageIdAmendments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey>
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
              (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/Bills/:billId/Stages/:billStageId/Amendments/:amendmentId',
    toValue(args),
  ] as const
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments[':amendmentId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey>
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
              (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments[':amendmentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BillsBillIdStagesStageIdPublicationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
    >
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:stageId/Publications', toValue(args)] as const
}

export function getApiV1BillsBillIdStagesStageIdPublicationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BillsBillIdStagesStageIdPublicationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':stageId'].Publications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BillsBillIdStagesStageIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
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
                    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1BillsBillIdStagesStageIdPublicationsQueryKey>
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
              (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesStageIdPublicationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BillsBillIdStagesStageIdPublicationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Bills[':billId'].Stages[':stageId'].Publications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicationTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.PublicationTypes.$get>>,
) {
  return ['api', '/api/v1/PublicationTypes', toValue(args)] as const
}

export function getApiV1PublicationTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.PublicationTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicationTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.PublicationTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.PublicationTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
            >
          >,
          ReturnType<typeof getApiV1PublicationTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicationTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.PublicationTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/Publications/:publicationId/Documents/:documentId',
    toValue(args),
  ] as const
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Publications[':publicationId'].Documents[':documentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PublicationsPublicationIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
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
                    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
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
                    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey>
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
              (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Publications[':publicationId'].Documents[':documentId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v1/Publications/:publicationId/Documents/:documentId/Download',
    toValue(args),
  ] as const
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Publications[':publicationId'].Documents[':documentId'].Download.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV1PublicationsPublicationIdDocumentsDocumentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
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
                    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
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
                    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey>
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
              (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Publications[':publicationId'].Documents[':documentId'].Download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RssBillsIdRssQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>,
) {
  return ['api', '/api/v1/Rss/Bills/:id.rss', toValue(args)] as const
}

export function getApiV1RssBillsIdRssQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RssBillsIdRssQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Rss.Bills[':id.rss'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RssBillsIdRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RssBillsIdRssQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssBillsIdRssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RssBillsIdRssQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Rss.Bills[':id.rss'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RssAllbillsRssQueryKey() {
  return ['api', '/api/v1/Rss/allbills.rss'] as const
}

export function getApiV1RssAllbillsRssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1RssAllbillsRssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Rss['allbills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RssAllbillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>>
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
                Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RssAllbillsRssQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssAllbillsRssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1RssAllbillsRssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Rss['allbills.rss'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RssPrivatebillsRssQueryKey() {
  return ['api', '/api/v1/Rss/privatebills.rss'] as const
}

export function getApiV1RssPrivatebillsRssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1RssPrivatebillsRssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Rss['privatebills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RssPrivatebillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
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
                Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RssPrivatebillsRssQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssPrivatebillsRssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1RssPrivatebillsRssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Rss['privatebills.rss'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RssPublicbillsRssQueryKey() {
  return ['api', '/api/v1/Rss/publicbills.rss'] as const
}

export function getApiV1RssPublicbillsRssQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1RssPublicbillsRssQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Rss['publicbills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RssPublicbillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
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
                Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RssPublicbillsRssQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssPublicbillsRssQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1RssPublicbillsRssQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Rss['publicbills.rss'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1SittingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Sittings.$get>>,
) {
  return ['api', '/api/v1/Sittings', toValue(args)] as const
}

export function getApiV1SittingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Sittings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1SittingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Sittings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Sittings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Sittings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>
            >
          >,
          ReturnType<typeof getApiV1SittingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SittingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1SittingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Sittings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1StagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Stages.$get>>,
) {
  return ['api', '/api/v1/Stages', toValue(args)] as const
}

export function getApiV1StagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Stages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1StagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.Stages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Stages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.Stages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
          >,
          ReturnType<typeof getApiV1StagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1StagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.Stages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

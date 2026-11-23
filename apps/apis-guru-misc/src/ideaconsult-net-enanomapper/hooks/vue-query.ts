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

export function getEnmKey() {
  return ['enm'] as const
}

export function getSelectKey() {
  return ['select'] as const
}

export function getEnmDbInvestigationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>>,
) {
  return ['enm', '/enm/:db/investigation', toValue(args)] as const
}

export function getEnmDbInvestigationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbInvestigationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].investigation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbInvestigation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbInvestigationQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbInvestigationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbInvestigationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].investigation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbQueryCompoundTermRepresentationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
    >
  >,
) {
  return ['enm', '/enm/:db/query/compound/:term/:representation', toValue(args)] as const
}

export function getEnmDbQueryCompoundTermRepresentationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbQueryCompoundTermRepresentationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].query.compound[':term'][':representation'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbQueryCompoundTermRepresentation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
                    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
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
                    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnmDbQueryCompoundTermRepresentationQueryKey>
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
              (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbQueryCompoundTermRepresentationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbQueryCompoundTermRepresentationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].query.compound[':term'][':representation'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbQuerySimilarityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>
  >,
) {
  return ['enm', '/enm/:db/query/similarity', toValue(args)] as const
}

export function getEnmDbQuerySimilarityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbQuerySimilarityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].query.similarity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbQuerySimilarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbQuerySimilarityQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbQuerySimilarityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbQuerySimilarityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].query.similarity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbQuerySmartsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>>,
) {
  return ['enm', '/enm/:db/query/smarts', toValue(args)] as const
}

export function getEnmDbQuerySmartsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbQuerySmartsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].query.smarts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbQuerySmarts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbQuerySmartsQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbQuerySmartsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbQuerySmartsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].query.smarts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbQueryStudyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>>,
) {
  return ['enm', '/enm/:db/query/study', toValue(args)] as const
}

export function getEnmDbQueryStudyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbQueryStudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].query.study.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbQueryStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbQueryStudyQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbQueryStudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbQueryStudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].query.study.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['substance']['$get']>>,
) {
  return ['enm', '/enm/:db/substance', toValue(args)] as const
}

export function getEnmDbSubstanceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['substance']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.enm)[':db']['substance']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>
  >,
) {
  return ['enm', '/enm/:db/substance/:uuid', toValue(args)] as const
}

export function getEnmDbSubstanceUuidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstanceUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceUuidQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance[':uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidCompositionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
  >,
) {
  return ['enm', '/enm/:db/substance/:uuid/composition', toValue(args)] as const
}

export function getEnmDbSubstanceUuidCompositionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceUuidCompositionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].composition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstanceUuidComposition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
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
                    (typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']
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
                    (typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceUuidCompositionQueryKey>
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
            ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceUuidCompositionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceUuidCompositionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance[':uuid'].composition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStructuresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
  >,
) {
  return ['enm', '/enm/:db/substance/:uuid/structures', toValue(args)] as const
}

export function getEnmDbSubstanceUuidStructuresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceUuidStructuresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].structures.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstanceUuidStructures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
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
                  ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceUuidStructuresQueryKey>
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
            ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceUuidStructuresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceUuidStructuresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance[':uuid'].structures.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStudyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>
  >,
) {
  return ['enm', '/enm/:db/substance/:uuid/study', toValue(args)] as const
}

export function getEnmDbSubstanceUuidStudyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceUuidStudyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].study.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstanceUuidStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>
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
                  ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceUuidStudyQueryKey>
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
          Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceUuidStudyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceUuidStudyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance[':uuid'].study.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStudySummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
  >,
) {
  return ['enm', '/enm/:db/substance/:uuid/studySummary', toValue(args)] as const
}

export function getEnmDbSubstanceUuidStudySummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEnmDbSubstanceUuidStudySummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].studySummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEnmDbSubstanceUuidStudySummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
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
                    (typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']
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
                    (typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getEnmDbSubstanceUuidStudySummaryQueryKey>
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
            ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceUuidStudySummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEnmDbSubstanceUuidStudySummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.enm[':db'].substance[':uuid'].studySummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSelectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.select.$get>>,
) {
  return ['select', '/select', toValue(args)] as const
}

export function getSelectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.select.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSelectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.select.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSelect<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.select.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
          ReturnType<typeof getSelectQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSelectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.select.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSelectMutationKey() {
  return ['select', '/select', 'POST'] as const
}

export function getPostSelectMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$post>>>>>,
    TError,
    InferRequestType<typeof client.select.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelectMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.select.$post>) {
      return parseResponse(client.select.$post(args, options))
    },
  })
}

export function usePostSelect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.select.$post>,
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
  const mutationDefaults = getPostSelectMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
) {
  return ['enm', '/enm/:db/investigation', args] as const
}

export function getEnmDbInvestigationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbInvestigationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].investigation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEnmDbInvestigation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbInvestigationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbInvestigationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbInvestigation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbInvestigationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbQueryCompoundTermRepresentationQueryKey(
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
) {
  return ['enm', '/enm/:db/query/compound/:term/:representation', args] as const
}

export function getEnmDbQueryCompoundTermRepresentationQueryOptions<
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
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbQueryCompoundTermRepresentationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].query.compound[':term'][':representation'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbQueryCompoundTermRepresentationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEnmDbQueryCompoundTermRepresentationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnmDbQueryCompoundTermRepresentation<
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
  args: InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEnmDbQueryCompoundTermRepresentationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnmDbQuerySimilarityQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
) {
  return ['enm', '/enm/:db/query/similarity', args] as const
}

export function getEnmDbQuerySimilarityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbQuerySimilarityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].query.similarity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbQuerySimilarityQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbQuerySimilarityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbQuerySimilarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbQuerySimilarityQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbQuerySmartsQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
) {
  return ['enm', '/enm/:db/query/smarts', args] as const
}

export function getEnmDbQuerySmartsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbQuerySmartsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].query.smarts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbQuerySmartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbQuerySmartsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbQuerySmarts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbQuerySmartsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbQueryStudyQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
) {
  return ['enm', '/enm/:db/query/study', args] as const
}

export function getEnmDbQueryStudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbQueryStudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].query.study.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbQueryStudyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbQueryStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbQueryStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbQueryStudyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbSubstanceQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
) {
  return ['enm', '/enm/:db/substance', args] as const
}

export function getEnmDbSubstanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEnmDbSubstanceQueryKey>
  >({
    queryKey: getEnmDbSubstanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEnmDbSubstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbSubstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbSubstanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEnmDbSubstanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbSubstanceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid', args] as const
}

export function getEnmDbSubstanceUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbSubstanceUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbSubstanceUuidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEnmDbSubstanceUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstanceUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEnmDbSubstanceUuidQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidCompositionQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/composition', args] as const
}

export function getEnmDbSubstanceUuidCompositionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbSubstanceUuidCompositionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].composition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEnmDbSubstanceUuidCompositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstanceUuidComposition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEnmDbSubstanceUuidCompositionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStructuresQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/structures', args] as const
}

export function getEnmDbSubstanceUuidStructuresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbSubstanceUuidStructuresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].structures.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getEnmDbSubstanceUuidStructuresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEnmDbSubstanceUuidStructuresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstanceUuidStructures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEnmDbSubstanceUuidStructuresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStudyQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/study', args] as const
}

export function getEnmDbSubstanceUuidStudyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbSubstanceUuidStudyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].study.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEnmDbSubstanceUuidStudyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstanceUuidStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEnmDbSubstanceUuidStudyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEnmDbSubstanceUuidStudySummaryQueryKey(
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
) {
  return ['enm', '/enm/:db/substance/:uuid/studySummary', args] as const
}

export function getEnmDbSubstanceUuidStudySummaryQueryOptions<
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEnmDbSubstanceUuidStudySummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.enm[':db'].substance[':uuid'].studySummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEnmDbSubstanceUuidStudySummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEnmDbSubstanceUuidStudySummary<
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
  args: InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEnmDbSubstanceUuidStudySummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelectQueryKey(args: InferRequestType<typeof client.select.$get>) {
  return ['select', '/select', args] as const
}

export function getSelectQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.select.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelectQueryKey>
  >({
    queryKey: getSelectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.select.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelect<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.select.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelect<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.select.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelectQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$post>>>>>,
        TError,
        InferRequestType<typeof client.select.$post>,
        TOnMutateResult
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

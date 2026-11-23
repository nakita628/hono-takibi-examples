import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createEnmDbInvestigation<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['investigation']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['investigation']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnmDbInvestigationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEnmDbQueryCompoundTermRepresentation<
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
  args: () => InferRequestType<
    (typeof client.enm)[':db']['query']['compound'][':term'][':representation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbQueryCompoundTermRepresentationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEnmDbQuerySimilarity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['similarity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['query']['similarity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbQuerySimilarityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEnmDbQuerySmarts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['smarts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['query']['smarts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnmDbQuerySmartsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEnmDbQueryStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['query']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['query']['study']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnmDbQueryStudyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEnmDbSubstance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.enm)[':db']['substance']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['substance']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnmDbSubstanceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEnmDbSubstanceUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEnmDbSubstanceUuidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createEnmDbSubstanceUuidComposition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.enm)[':db']['substance'][':uuid']['composition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbSubstanceUuidCompositionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEnmDbSubstanceUuidStructures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.enm)[':db']['substance'][':uuid']['structures']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbSubstanceUuidStructuresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEnmDbSubstanceUuidStudy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.enm)[':db']['substance'][':uuid']['study']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbSubstanceUuidStudyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createEnmDbSubstanceUuidStudySummary<
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
  args: () => InferRequestType<
    (typeof client.enm)[':db']['substance'][':uuid']['studySummary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getEnmDbSubstanceUuidStudySummaryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createSelect<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.select.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelectQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSelectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostSelect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.select.$post>>>>>,
        TError,
        InferRequestType<typeof client.select.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSelectMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

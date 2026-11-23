import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatActiveMembershipsQueryKey(
  args: InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
) {
  return [':format', '/:format/ActiveMemberships', args] as const
}

export function getFormatActiveMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatActiveMembershipsQueryKey>
  >({
    queryKey: getFormatActiveMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].ActiveMemberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatActiveMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatActiveMembershipsQueryKey>
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
      ...getFormatActiveMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatAreasQueryKey(
  args: InferRequestType<(typeof client)[':format']['Areas']['$get']>,
) {
  return [':format', '/:format/Areas', args] as const
}

export function getFormatAreasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Areas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreasQueryKey>
  >({
    queryKey: getFormatAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Areas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Areas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatAreasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatBoxScoreGameidQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
) {
  return [':format', '/:format/BoxScore/:gameid', args] as const
}

export function getFormatBoxScoreGameidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreGameidQueryKey>
  >({
    queryKey: getFormatBoxScoreGameidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScore[':gameid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoreGameid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoreGameidQueryKey>
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
      ...getFormatBoxScoreGameidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
) {
  return [':format', '/:format/BoxScores/:date', args] as const
}

export function getFormatBoxScoresDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDateQueryKey>
  >({
    queryKey: getFormatBoxScoresDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScores[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatBoxScoresDateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatBoxScoresByCompetitionCompetitionDateQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
  >,
) {
  return [':format', '/:format/BoxScoresByCompetition/:competition/:date', args] as const
}

export function getFormatBoxScoresByCompetitionCompetitionDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresByCompetitionCompetitionDateQueryKey>
  >({
    queryKey: getFormatBoxScoresByCompetitionCompetitionDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoresByCompetition[':competition'][':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresByCompetitionCompetitionDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresByCompetitionCompetitionDateQueryKey>
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
      ...getFormatBoxScoresByCompetitionCompetitionDateQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDeltaDateMinutesQueryKey(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
) {
  return [':format', '/:format/BoxScoresDelta/:date/:minutes', args] as const
}

export function getFormatBoxScoresDeltaDateMinutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaDateMinutesQueryKey>
  >({
    queryKey: getFormatBoxScoresDeltaDateMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoresDelta[':date'][':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatBoxScoresDeltaDateMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresDeltaDateMinutesQueryKey>
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
      ...getFormatBoxScoresDeltaDateMinutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
  >,
) {
  return [
    ':format',
    '/:format/BoxScoresDeltaByCompetition/:competition/:date/:minutes',
    args,
  ] as const
}

export function getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey>
  >({
    queryKey: getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].BoxScoresDeltaByCompetition[':competition'][':date'][':minutes'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createFormatBoxScoresDeltaByCompetitionCompetitionDateMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey>
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
      ...getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatCompetitionDetailsCompetitionQueryKey(
  args: InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>,
) {
  return [':format', '/:format/CompetitionDetails/:competition', args] as const
}

export function getFormatCompetitionDetailsCompetitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionDetailsCompetitionQueryKey>
  >({
    queryKey: getFormatCompetitionDetailsCompetitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CompetitionDetails[':competition'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCompetitionDetailsCompetition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['CompetitionDetails'][':competition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatCompetitionDetailsCompetitionQueryKey>
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
      ...getFormatCompetitionDetailsCompetitionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatCompetitionHierarchyQueryKey(
  args: InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>,
) {
  return [':format', '/:format/CompetitionHierarchy', args] as const
}

export function getFormatCompetitionHierarchyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionHierarchyQueryKey>
  >({
    queryKey: getFormatCompetitionHierarchyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].CompetitionHierarchy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCompetitionHierarchy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatCompetitionHierarchyQueryKey>
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
      ...getFormatCompetitionHierarchyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatCompetitionsQueryKey(
  args: InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
) {
  return [':format', '/:format/Competitions', args] as const
}

export function getFormatCompetitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionsQueryKey>
  >({
    queryKey: getFormatCompetitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Competitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatCompetitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Competitions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatCompetitionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatCompetitionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatDfsSlatesByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', args] as const
}

export function getFormatDfsSlatesByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
  >({
    queryKey: getFormatDfsSlatesByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].DfsSlatesByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatDfsSlatesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
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
      ...getFormatDfsSlatesByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatGamesByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
) {
  return [':format', '/:format/GamesByDate/:date', args] as const
}

export function getFormatGamesByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesByDateDateQueryKey>
  >({
    queryKey: getFormatGamesByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].GamesByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatGamesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatGamesByDateDateQueryKey>
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
      ...getFormatGamesByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatHistoricalMembershipsQueryKey(
  args: InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
) {
  return [':format', '/:format/HistoricalMemberships', args] as const
}

export function getFormatHistoricalMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
  >({
    queryKey: getFormatHistoricalMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].HistoricalMemberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatHistoricalMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
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
      ...getFormatHistoricalMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
  >,
) {
  return [':format', '/:format/HistoricalMembershipsByCompetition/:competition', args] as const
}

export function getFormatHistoricalMembershipsByCompetitionCompetitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey>
  >({
    queryKey: getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].HistoricalMembershipsByCompetition[':competition'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatHistoricalMembershipsByCompetitionCompetition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey>
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
      ...getFormatHistoricalMembershipsByCompetitionCompetitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
) {
  return [':format', '/:format/HistoricalMembershipsByTeam/:teamid', args] as const
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
  >({
    queryKey: getFormatHistoricalMembershipsByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].HistoricalMembershipsByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatHistoricalMembershipsByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
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
      ...getFormatHistoricalMembershipsByTeamTeamidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatMembershipsByCompetitionCompetitionQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
  >,
) {
  return [':format', '/:format/MembershipsByCompetition/:competition', args] as const
}

export function getFormatMembershipsByCompetitionCompetitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatMembershipsByCompetitionCompetitionQueryKey>
  >({
    queryKey: getFormatMembershipsByCompetitionCompetitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].MembershipsByCompetition[':competition'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatMembershipsByCompetitionCompetition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatMembershipsByCompetitionCompetitionQueryKey>
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
      ...getFormatMembershipsByCompetitionCompetitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatMembershipsByTeamTeamidQueryKey(
  args: InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
) {
  return [':format', '/:format/MembershipsByTeam/:teamid', args] as const
}

export function getFormatMembershipsByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
  >({
    queryKey: getFormatMembershipsByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].MembershipsByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatMembershipsByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
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
      ...getFormatMembershipsByTeamTeamidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerPlayeridQueryKey(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
) {
  return [':format', '/:format/Player/:playerid', args] as const
}

export function getFormatPlayerPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Player[':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerPlayeridQueryKey>
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
      ...getFormatPlayerPlayeridQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/PlayerGameStatsByDate/:date', args] as const
}

export function getFormatPlayerGameStatsByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByDateDateQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByDateDateQueryKey>
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
      ...getFormatPlayerGameStatsByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerGameStatsByPlayer/:date/:playerid', args] as const
}

export function getFormatPlayerGameStatsByPlayerDatePlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey>
  >({
    queryKey: getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerGameStatsByPlayerDatePlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey>
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
      ...getFormatPlayerGameStatsByPlayerDatePlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>,
) {
  return [':format', '/:format/PlayerSeasonStats/:roundid', args] as const
}

export function getFormatPlayerSeasonStatsRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsRoundidQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStats[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsRoundidQueryKey>
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
      ...getFormatPlayerSeasonStatsRoundidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByPlayer/:roundid/:playerid', args] as const
}

export function getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByPlayer[':roundid'][':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsByPlayerRoundidPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey>
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
      ...getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByTeam/:roundid/:team', args] as const
}

export function getFormatPlayerSeasonStatsByTeamRoundidTeamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey>
  >({
    queryKey: getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByTeam[':roundid'][':team'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayerSeasonStatsByTeamRoundidTeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey>
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
      ...getFormatPlayerSeasonStatsByTeamRoundidTeamQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatPlayersQueryKey(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
) {
  return [':format', '/:format/Players', args] as const
}

export function getFormatPlayersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersQueryKey>
  >({
    queryKey: getFormatPlayersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Players.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Players']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatPlayersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatPlayersByTeamTeamidQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
) {
  return [':format', '/:format/PlayersByTeam/:teamid', args] as const
}

export function getFormatPlayersByTeamTeamidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
  >({
    queryKey: getFormatPlayersByTeamTeamidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayersByTeam[':teamid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatPlayersByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
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
      ...getFormatPlayersByTeamTeamidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatRecentlyChangedMembershipsDaysQueryKey(
  args: InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>,
) {
  return [':format', '/:format/RecentlyChangedMemberships/:days', args] as const
}

export function getFormatRecentlyChangedMembershipsDaysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRecentlyChangedMembershipsDaysQueryKey>
  >({
    queryKey: getFormatRecentlyChangedMembershipsDaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].RecentlyChangedMemberships[':days'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatRecentlyChangedMembershipsDays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatRecentlyChangedMembershipsDaysQueryKey>
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
      ...getFormatRecentlyChangedMembershipsDaysQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatScheduleRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
) {
  return [':format', '/:format/Schedule/:roundid', args] as const
}

export function getFormatScheduleRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScheduleRoundidQueryKey>
  >({
    queryKey: getFormatScheduleRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Schedule[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatScheduleRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatScheduleRoundidQueryKey>
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
      ...getFormatScheduleRoundidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatSeasonTeamsSeasonidQueryKey(
  args: InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
) {
  return [':format', '/:format/SeasonTeams/:seasonid', args] as const
}

export function getFormatSeasonTeamsSeasonidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
  >({
    queryKey: getFormatSeasonTeamsSeasonidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].SeasonTeams[':seasonid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatSeasonTeamsSeasonid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
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
      ...getFormatSeasonTeamsSeasonidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatStandingsRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
) {
  return [':format', '/:format/Standings/:roundid', args] as const
}

export function getFormatStandingsRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsRoundidQueryKey>
  >({
    queryKey: getFormatStandingsRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Standings[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatStandingsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatStandingsRoundidQueryKey>
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
      ...getFormatStandingsRoundidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamGameStatsByDateDateQueryKey(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
) {
  return [':format', '/:format/TeamGameStatsByDate/:date', args] as const
}

export function getFormatTeamGameStatsByDateDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
  >({
    queryKey: getFormatTeamGameStatsByDateDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamGameStatsByDate[':date'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
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
      ...getFormatTeamGameStatsByDateDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamSeasonStatsRoundidQueryKey(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>,
) {
  return [':format', '/:format/TeamSeasonStats/:roundid', args] as const
}

export function getFormatTeamSeasonStatsRoundidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamSeasonStatsRoundidQueryKey>
  >({
    queryKey: getFormatTeamSeasonStatsRoundidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].TeamSeasonStats[':roundid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatTeamSeasonStatsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamSeasonStatsRoundidQueryKey>
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
      ...getFormatTeamSeasonStatsRoundidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getFormatTeamsQueryKey(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
) {
  return [':format', '/:format/Teams', args] as const
}

export function getFormatTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >({
    queryKey: getFormatTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Teams.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
  >,
) {
  return [':format', '/:format/UpcomingDfsSlatesByCompetition/:competitionId', args] as const
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
  >({
    queryKey: getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatUpcomingDfsSlatesByCompetitionCompetitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
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
      ...getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatUpcomingScheduleByPlayerPlayeridQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
  >,
) {
  return [':format', '/:format/UpcomingScheduleByPlayer/:playerid', args] as const
}

export function getFormatUpcomingScheduleByPlayerPlayeridQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingScheduleByPlayerPlayeridQueryKey>
  >({
    queryKey: getFormatUpcomingScheduleByPlayerPlayeridQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].UpcomingScheduleByPlayer[':playerid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFormatUpcomingScheduleByPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatUpcomingScheduleByPlayerPlayeridQueryKey>
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
      ...getFormatUpcomingScheduleByPlayerPlayeridQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFormatVenuesQueryKey(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
) {
  return [':format', '/:format/Venues', args] as const
}

export function getFormatVenuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatVenuesQueryKey>
  >({
    queryKey: getFormatVenuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].Venues.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFormatVenues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['Venues']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatVenuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFormatVenuesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

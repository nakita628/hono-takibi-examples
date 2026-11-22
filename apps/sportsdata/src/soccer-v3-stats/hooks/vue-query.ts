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

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatActiveMembershipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>>,
) {
  return [':format', '/:format/ActiveMemberships', toValue(args)] as const
}

export function getFormatActiveMembershipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatActiveMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].ActiveMemberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatActiveMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['ActiveMemberships']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatActiveMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['ActiveMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatActiveMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatActiveMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].ActiveMemberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatAreasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Areas']['$get']>>,
) {
  return [':format', '/:format/Areas', toValue(args)] as const
}

export function getFormatAreasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Areas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatAreasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Areas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatAreas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Areas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatAreasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Areas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatAreasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatAreasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Areas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoreGameidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>
  >,
) {
  return [':format', '/:format/BoxScore/:gameid', toValue(args)] as const
}

export function getFormatBoxScoreGameidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoreGameidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScore[':gameid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoreGameid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoreGameidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['BoxScore'][':gameid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoreGameidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoreGameidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScore[':gameid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>
  >,
) {
  return [':format', '/:format/BoxScores/:date', toValue(args)] as const
}

export function getFormatBoxScoresDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoresDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScores[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoresDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScores'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['BoxScores'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoresDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScores[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresByCompetitionCompetitionDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
    >
  >,
) {
  return [':format', '/:format/BoxScoresByCompetition/:competition/:date', toValue(args)] as const
}

export function getFormatBoxScoresByCompetitionCompetitionDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoresByCompetitionCompetitionDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoresByCompetition[':competition'][':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoresByCompetitionCompetitionDate<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
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
                    (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
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
                    (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresByCompetitionCompetitionDateQueryKey>
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
              (typeof client)[':format']['BoxScoresByCompetition'][':competition'][':date']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresByCompetitionCompetitionDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoresByCompetitionCompetitionDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoresByCompetition[':competition'][':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresDeltaDateMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
  >,
) {
  return [':format', '/:format/BoxScoresDelta/:date/:minutes', toValue(args)] as const
}

export function getFormatBoxScoresDeltaDateMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatBoxScoresDeltaDateMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoresDelta[':date'][':minutes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatBoxScoresDeltaDateMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
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
                    (typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresDeltaDateMinutesQueryKey>
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
            ReturnType<(typeof client)[':format']['BoxScoresDelta'][':date'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaDateMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatBoxScoresDeltaDateMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoresDelta[':date'][':minutes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/BoxScoresDeltaByCompetition/:competition/:date/:minutes',
    toValue(args),
  ] as const
}

export function getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].BoxScoresDeltaByCompetition[':competition'][':date'][':minutes'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useFormatBoxScoresDeltaByCompetitionCompetitionDateMinutes<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
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
                    (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey>
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
              (typeof client)[':format']['BoxScoresDeltaByCompetition'][':competition'][':date'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].BoxScoresDeltaByCompetition[':competition'][':date'][':minutes'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCompetitionDetailsCompetitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
  >,
) {
  return [':format', '/:format/CompetitionDetails/:competition', toValue(args)] as const
}

export function getFormatCompetitionDetailsCompetitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCompetitionDetailsCompetitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].CompetitionDetails[':competition'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCompetitionDetailsCompetition<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
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
                    (typeof client)[':format']['CompetitionDetails'][':competition']['$get']
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
                    (typeof client)[':format']['CompetitionDetails'][':competition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatCompetitionDetailsCompetitionQueryKey>
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
            ReturnType<(typeof client)[':format']['CompetitionDetails'][':competition']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionDetailsCompetitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCompetitionDetailsCompetitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].CompetitionDetails[':competition'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCompetitionHierarchyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>
  >,
) {
  return [':format', '/:format/CompetitionHierarchy', toValue(args)] as const
}

export function getFormatCompetitionHierarchyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCompetitionHierarchyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].CompetitionHierarchy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCompetitionHierarchy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['CompetitionHierarchy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatCompetitionHierarchyQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['CompetitionHierarchy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionHierarchyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCompetitionHierarchyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].CompetitionHierarchy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatCompetitionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Competitions']['$get']>>,
) {
  return [':format', '/:format/Competitions', toValue(args)] as const
}

export function getFormatCompetitionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Competitions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatCompetitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Competitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatCompetitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Competitions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatCompetitionsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Competitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatCompetitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatCompetitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Competitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatDfsSlatesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/DfsSlatesByDate/:date', toValue(args)] as const
}

export function getFormatDfsSlatesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatDfsSlatesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['DfsSlatesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatDfsSlatesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatDfsSlatesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].DfsSlatesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatGamesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/GamesByDate/:date', toValue(args)] as const
}

export function getFormatGamesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatGamesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].GamesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatGamesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['GamesByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatGamesByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['GamesByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatGamesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatGamesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].GamesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatHistoricalMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>
  >,
) {
  return [':format', '/:format/HistoricalMemberships', toValue(args)] as const
}

export function getFormatHistoricalMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatHistoricalMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].HistoricalMemberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatHistoricalMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMemberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['HistoricalMemberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatHistoricalMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].HistoricalMemberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/HistoricalMembershipsByCompetition/:competition',
    toValue(args),
  ] as const
}

export function getFormatHistoricalMembershipsByCompetitionCompetitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].HistoricalMembershipsByCompetition[':competition'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatHistoricalMembershipsByCompetitionCompetition<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
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
                    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
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
                    (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey>
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
              (typeof client)[':format']['HistoricalMembershipsByCompetition'][':competition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFormatHistoricalMembershipsByCompetitionCompetitionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].HistoricalMembershipsByCompetition[':competition'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
  >,
) {
  return [':format', '/:format/HistoricalMembershipsByTeam/:teamid', toValue(args)] as const
}

export function getFormatHistoricalMembershipsByTeamTeamidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatHistoricalMembershipsByTeamTeamidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].HistoricalMembershipsByTeam[':teamid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatHistoricalMembershipsByTeamTeamid<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
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
                    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
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
                    (typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
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
            ReturnType<(typeof client)[':format']['HistoricalMembershipsByTeam'][':teamid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatHistoricalMembershipsByTeamTeamidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatHistoricalMembershipsByTeamTeamidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].HistoricalMembershipsByTeam[':teamid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatMembershipsByCompetitionCompetitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']>
  >,
) {
  return [':format', '/:format/MembershipsByCompetition/:competition', toValue(args)] as const
}

export function getFormatMembershipsByCompetitionCompetitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatMembershipsByCompetitionCompetitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].MembershipsByCompetition[':competition'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatMembershipsByCompetitionCompetition<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']>
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
                    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
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
                    (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatMembershipsByCompetitionCompetitionQueryKey>
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
              (typeof client)[':format']['MembershipsByCompetition'][':competition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatMembershipsByCompetitionCompetitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatMembershipsByCompetitionCompetitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].MembershipsByCompetition[':competition'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatMembershipsByTeamTeamidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
  >,
) {
  return [':format', '/:format/MembershipsByTeam/:teamid', toValue(args)] as const
}

export function getFormatMembershipsByTeamTeamidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatMembershipsByTeamTeamidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].MembershipsByTeam[':teamid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatMembershipsByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['MembershipsByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatMembershipsByTeamTeamidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatMembershipsByTeamTeamidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].MembershipsByTeam[':teamid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/Player/:playerid', toValue(args)] as const
}

export function getFormatPlayerPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Player[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Player'][':playerid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayerPlayeridQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Player'][':playerid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Player[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/PlayerGameStatsByDate/:date', toValue(args)] as const
}

export function getFormatPlayerGameStatsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['PlayerGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerGameStatsByPlayer/:date/:playerid', toValue(args)] as const
}

export function getFormatPlayerGameStatsByPlayerDatePlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerGameStatsByPlayerDatePlayerid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey>
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
              (typeof client)[':format']['PlayerGameStatsByPlayer'][':date'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerGameStatsByPlayerDatePlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerGameStatsByPlayer[':date'][':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsRoundidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>
  >,
) {
  return [':format', '/:format/PlayerSeasonStats/:roundid', toValue(args)] as const
}

export function getFormatPlayerSeasonStatsRoundidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsRoundidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStats[':roundid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsRoundidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['PlayerSeasonStats'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsRoundidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsRoundidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStats[':roundid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/PlayerSeasonStatsByPlayer/:roundid/:playerid',
    toValue(args),
  ] as const
}

export function getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByPlayer[':roundid'][':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsByPlayerRoundidPlayerid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey>
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
              (typeof client)[':format']['PlayerSeasonStatsByPlayer'][':roundid'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsByPlayerRoundidPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStatsByPlayer[':roundid'][':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayerSeasonStatsByTeam/:roundid/:team', toValue(args)] as const
}

export function getFormatPlayerSeasonStatsByTeamRoundidTeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayerSeasonStatsByTeam[':roundid'][':team'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayerSeasonStatsByTeamRoundidTeam<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
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
                    (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey>
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
              (typeof client)[':format']['PlayerSeasonStatsByTeam'][':roundid'][':team']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayerSeasonStatsByTeamRoundidTeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayerSeasonStatsByTeam[':roundid'][':team'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
) {
  return [':format', '/:format/Players', toValue(args)] as const
}

export function getFormatPlayersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Players.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Players']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Players']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Players.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayersByTeamTeamidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>
  >,
) {
  return [':format', '/:format/PlayersByTeam/:teamid', toValue(args)] as const
}

export function getFormatPlayersByTeamTeamidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayersByTeamTeamidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayersByTeam[':teamid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayersByTeamTeamid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['PlayersByTeam'][':teamid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayersByTeamTeamidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayersByTeamTeamidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayersByTeam[':teamid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRecentlyChangedMembershipsDaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
  >,
) {
  return [':format', '/:format/RecentlyChangedMemberships/:days', toValue(args)] as const
}

export function getFormatRecentlyChangedMembershipsDaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRecentlyChangedMembershipsDaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RecentlyChangedMemberships[':days'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRecentlyChangedMembershipsDays<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
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
                    (typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']
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
                    (typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRecentlyChangedMembershipsDaysQueryKey>
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
            ReturnType<(typeof client)[':format']['RecentlyChangedMemberships'][':days']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRecentlyChangedMembershipsDaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRecentlyChangedMembershipsDaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RecentlyChangedMemberships[':days'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatScheduleRoundidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>
  >,
) {
  return [':format', '/:format/Schedule/:roundid', toValue(args)] as const
}

export function getFormatScheduleRoundidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatScheduleRoundidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Schedule[':roundid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatScheduleRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Schedule'][':roundid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatScheduleRoundidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Schedule'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatScheduleRoundidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatScheduleRoundidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Schedule[':roundid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSeasonTeamsSeasonidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>
  >,
) {
  return [':format', '/:format/SeasonTeams/:seasonid', toValue(args)] as const
}

export function getFormatSeasonTeamsSeasonidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSeasonTeamsSeasonidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].SeasonTeams[':seasonid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSeasonTeamsSeasonid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['SeasonTeams'][':seasonid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSeasonTeamsSeasonidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSeasonTeamsSeasonidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].SeasonTeams[':seasonid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatStandingsRoundidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>
  >,
) {
  return [':format', '/:format/Standings/:roundid', toValue(args)] as const
}

export function getFormatStandingsRoundidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatStandingsRoundidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Standings[':roundid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatStandingsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['Standings'][':roundid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatStandingsRoundidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['Standings'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatStandingsRoundidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatStandingsRoundidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Standings[':roundid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamGameStatsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/TeamGameStatsByDate/:date', toValue(args)] as const
}

export function getFormatTeamGameStatsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamGameStatsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamGameStatsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamGameStatsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['TeamGameStatsByDate'][':date']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamGameStatsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamGameStatsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamGameStatsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamSeasonStatsRoundidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>
  >,
) {
  return [':format', '/:format/TeamSeasonStats/:roundid', toValue(args)] as const
}

export function getFormatTeamSeasonStatsRoundidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamSeasonStatsRoundidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].TeamSeasonStats[':roundid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeamSeasonStatsRoundid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>
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
                  ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFormatTeamSeasonStatsRoundidQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['TeamSeasonStats'][':roundid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamSeasonStatsRoundidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamSeasonStatsRoundidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].TeamSeasonStats[':roundid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
) {
  return [':format', '/:format/Teams', toValue(args)] as const
}

export function getFormatTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
            >
          >,
          ReturnType<typeof getFormatTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Teams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
    >
  >,
) {
  return [
    ':format',
    '/:format/UpcomingDfsSlatesByCompetition/:competitionId',
    toValue(args),
  ] as const
}

export function getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingDfsSlatesByCompetitionCompetitionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
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
                    (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
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
              (typeof client)[':format']['UpcomingDfsSlatesByCompetition'][':competitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingDfsSlatesByCompetitionCompetitionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingDfsSlatesByCompetition[':competitionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatUpcomingScheduleByPlayerPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
  >,
) {
  return [':format', '/:format/UpcomingScheduleByPlayer/:playerid', toValue(args)] as const
}

export function getFormatUpcomingScheduleByPlayerPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatUpcomingScheduleByPlayerPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].UpcomingScheduleByPlayer[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatUpcomingScheduleByPlayerPlayerid<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
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
                    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
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
                    (typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatUpcomingScheduleByPlayerPlayeridQueryKey>
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
            ReturnType<(typeof client)[':format']['UpcomingScheduleByPlayer'][':playerid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatUpcomingScheduleByPlayerPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatUpcomingScheduleByPlayerPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].UpcomingScheduleByPlayer[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatVenuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Venues']['$get']>>,
) {
  return [':format', '/:format/Venues', toValue(args)] as const
}

export function getFormatVenuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Venues']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatVenuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].Venues.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatVenues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':format']['Venues']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatVenuesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':format']['Venues']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatVenuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatVenuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].Venues.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

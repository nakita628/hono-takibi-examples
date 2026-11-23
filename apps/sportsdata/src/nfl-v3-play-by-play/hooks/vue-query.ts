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

export function getFormatPlayByPlaySeasonWeekHometeamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayByPlay/:season/:week/:hometeam', toValue(args)] as const
}

export function getFormatPlayByPlaySeasonWeekHometeamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayByPlaySeasonWeekHometeamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayByPlay[':season'][':week'][':hometeam'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayByPlaySeasonWeekHometeam<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
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
                    (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayByPlaySeasonWeekHometeamQueryKey>
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
              (typeof client)[':format']['PlayByPlay'][':season'][':week'][':hometeam']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayByPlaySeasonWeekHometeamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayByPlaySeasonWeekHometeamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayByPlay[':season'][':week'][':hometeam'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatPlayByPlayDeltaSeasonWeekMinutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
) {
  return [':format', '/:format/PlayByPlayDelta/:season/:week/:minutes', toValue(args)] as const
}

export function getFormatPlayByPlayDeltaSeasonWeekMinutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatPlayByPlayDeltaSeasonWeekMinutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].PlayByPlayDelta[':season'][':week'][':minutes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatPlayByPlayDeltaSeasonWeekMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
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
                    (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatPlayByPlayDeltaSeasonWeekMinutesQueryKey>
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
              (typeof client)[':format']['PlayByPlayDelta'][':season'][':week'][':minutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayByPlayDeltaSeasonWeekMinutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatPlayByPlayDeltaSeasonWeekMinutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].PlayByPlayDelta[':season'][':week'][':minutes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatSimulatedPlayByPlayNumberofplaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']>
  >,
) {
  return [':format', '/:format/SimulatedPlayByPlay/:numberofplays', toValue(args)] as const
}

export function getFormatSimulatedPlayByPlayNumberofplaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatSimulatedPlayByPlayNumberofplaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].SimulatedPlayByPlay[':numberofplays'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatSimulatedPlayByPlayNumberofplays<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']>
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
                    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
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
                    (typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatSimulatedPlayByPlayNumberofplaysQueryKey>
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
            ReturnType<(typeof client)[':format']['SimulatedPlayByPlay'][':numberofplays']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatSimulatedPlayByPlayNumberofplaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatSimulatedPlayByPlayNumberofplaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].SimulatedPlayByPlay[':numberofplays'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

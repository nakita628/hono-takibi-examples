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

export function getFormatRotoBallerPremiumNewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>
  >,
) {
  return [':format', '/:format/RotoBallerPremiumNews', toValue(args)] as const
}

export function getFormatRotoBallerPremiumNewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerPremiumNewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerPremiumNews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerPremiumNews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerPremiumNewsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['RotoBallerPremiumNews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerPremiumNewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerPremiumNewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerPremiumNews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRotoBallerPremiumNewsByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/RotoBallerPremiumNewsByDate/:date', toValue(args)] as const
}

export function getFormatRotoBallerPremiumNewsByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerPremiumNewsByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerPremiumNewsByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerPremiumNewsByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
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
                    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
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
                    (typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerPremiumNewsByDateDateQueryKey>
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
            ReturnType<(typeof client)[':format']['RotoBallerPremiumNewsByDate'][':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerPremiumNewsByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerPremiumNewsByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerPremiumNewsByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
    >
  >,
) {
  return [':format', '/:format/RotoBallerPremiumNewsByPlayerID/:playerid', toValue(args)] as const
}

export function getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerPremiumNewsByPlayerID[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerPremiumNewsByPlayerIDPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
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
                    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
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
                    (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryKey>
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
              (typeof client)[':format']['RotoBallerPremiumNewsByPlayerID'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerPremiumNewsByPlayerIDPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerPremiumNewsByPlayerID[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

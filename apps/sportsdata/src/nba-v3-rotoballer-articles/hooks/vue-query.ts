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

export function getFormatRotoBallerArticlesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticles']['$get']>
  >,
) {
  return [':format', '/:format/RotoBallerArticles', toValue(args)] as const
}

export function getFormatRotoBallerArticlesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerArticles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['RotoBallerArticles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['RotoBallerArticles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':format']['RotoBallerArticles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerArticlesQueryKey>
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
          Awaited<ReturnType<(typeof client)[':format']['RotoBallerArticles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerArticles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRotoBallerArticlesByDateDateQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>
  >,
) {
  return [':format', '/:format/RotoBallerArticlesByDate/:date', toValue(args)] as const
}

export function getFormatRotoBallerArticlesByDateDateQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerArticlesByDateDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerArticlesByDate[':date'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerArticlesByDateDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>
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
                    (typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']
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
                    (typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerArticlesByDateDateQueryKey>
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
            ReturnType<(typeof client)[':format']['RotoBallerArticlesByDate'][':date']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerArticlesByDateDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerArticlesByDateDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerArticlesByDate[':date'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFormatRotoBallerArticlesByPlayerIDPlayeridQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
    >
  >,
) {
  return [':format', '/:format/RotoBallerArticlesByPlayerID/:playerid', toValue(args)] as const
}

export function getFormatRotoBallerArticlesByPlayerIDPlayeridQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFormatRotoBallerArticlesByPlayerIDPlayeridQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':format'].RotoBallerArticlesByPlayerID[':playerid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFormatRotoBallerArticlesByPlayerIDPlayerid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
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
                    (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
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
                    (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFormatRotoBallerArticlesByPlayerIDPlayeridQueryKey>
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
              (typeof client)[':format']['RotoBallerArticlesByPlayerID'][':playerid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatRotoBallerArticlesByPlayerIDPlayeridQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFormatRotoBallerArticlesByPlayerIDPlayeridQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':format'].RotoBallerArticlesByPlayerID[':playerid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiDailyreportsDailyreportsQueryKey(
  args: InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
) {
  return ['api', '/api/dailyreports/dailyreports', args] as const
}

export function getApiDailyreportsDailyreportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDailyreportsDailyreportsQueryKey>
  >({
    queryKey: getApiDailyreportsDailyreportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.dailyreports.dailyreports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiDailyreportsDailyreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDailyreportsDailyreportsQueryKey>
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
      ...getApiDailyreportsDailyreportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiDailyreportsDailyreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDailyreportsDailyreportsQueryKey>
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
      ...getApiDailyreportsDailyreportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsQueryKey(
  args: InferRequestType<typeof client.api.writtenquestions.questions.$get>,
) {
  return ['api', '/api/writtenquestions/questions', args] as const
}

export function getApiWrittenquestionsQuestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenquestions.questions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsQueryKey>
  >({
    queryKey: getApiWrittenquestionsQuestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenquestions.questions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenquestionsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenquestions.questions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsQueryKey>
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
      ...getApiWrittenquestionsQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenquestionsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenquestions.questions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsQueryKey>
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
      ...getApiWrittenquestionsQuestionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsDateUinQueryKey(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>,
) {
  return ['api', '/api/writtenquestions/questions/:date/:uin', args] as const
}

export function getApiWrittenquestionsQuestionsDateUinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsDateUinQueryKey>
  >({
    queryKey: getApiWrittenquestionsQuestionsDateUinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenquestions.questions[':date'][':uin'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenquestionsQuestionsDateUin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsDateUinQueryKey>
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
      ...getApiWrittenquestionsQuestionsDateUinQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenquestionsQuestionsDateUin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsDateUinQueryKey>
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
      ...getApiWrittenquestionsQuestionsDateUinQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsIdQueryKey(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
) {
  return ['api', '/api/writtenquestions/questions/:id', args] as const
}

export function getApiWrittenquestionsQuestionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsIdQueryKey>
  >({
    queryKey: getApiWrittenquestionsQuestionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenquestions.questions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenquestionsQuestionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsIdQueryKey>
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
      ...getApiWrittenquestionsQuestionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenquestionsQuestionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenquestionsQuestionsIdQueryKey>
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
      ...getApiWrittenquestionsQuestionsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsQueryKey(
  args: InferRequestType<typeof client.api.writtenstatements.statements.$get>,
) {
  return ['api', '/api/writtenstatements/statements', args] as const
}

export function getApiWrittenstatementsStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenstatements.statements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsQueryKey>
  >({
    queryKey: getApiWrittenstatementsStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenstatements.statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenstatementsStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenstatements.statements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsQueryKey>
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
      ...getApiWrittenstatementsStatementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenstatementsStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.writtenstatements.statements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsQueryKey>
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
      ...getApiWrittenstatementsStatementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsDateUinQueryKey(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>,
) {
  return ['api', '/api/writtenstatements/statements/:date/:uin', args] as const
}

export function getApiWrittenstatementsStatementsDateUinQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsDateUinQueryKey>
  >({
    queryKey: getApiWrittenstatementsStatementsDateUinQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenstatements.statements[':date'][':uin'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenstatementsStatementsDateUin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsDateUinQueryKey>
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
      ...getApiWrittenstatementsStatementsDateUinQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenstatementsStatementsDateUin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsDateUinQueryKey>
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
      ...getApiWrittenstatementsStatementsDateUinQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsIdQueryKey(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
) {
  return ['api', '/api/writtenstatements/statements/:id', args] as const
}

export function getApiWrittenstatementsStatementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsIdQueryKey>
  >({
    queryKey: getApiWrittenstatementsStatementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.writtenstatements.statements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiWrittenstatementsStatementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsIdQueryKey>
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
      ...getApiWrittenstatementsStatementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiWrittenstatementsStatementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWrittenstatementsStatementsIdQueryKey>
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
      ...getApiWrittenstatementsStatementsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

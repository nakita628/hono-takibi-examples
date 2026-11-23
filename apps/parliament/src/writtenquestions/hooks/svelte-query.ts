import { createQuery, queryOptions } from '@tanstack/svelte-query'
import type { CreateQueryOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function createApiDailyreportsDailyreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.dailyreports.dailyreports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDailyreportsDailyreportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenquestionsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.writtenquestions.questions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenquestionsQuestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenquestionsQuestionsDateUin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenquestionsQuestionsDateUinQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenquestionsQuestionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenquestionsQuestionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenstatementsStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.writtenstatements.statements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenstatementsStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenstatementsStatementsDateUin<
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
  args: () => InferRequestType<
    (typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenstatementsStatementsDateUinQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createApiWrittenstatementsStatementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiWrittenstatementsStatementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

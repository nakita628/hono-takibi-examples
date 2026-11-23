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

export function getApiKey() {
  return ['api'] as const
}

export function getApiDailyreportsDailyreportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.dailyreports.dailyreports.$get>>,
) {
  return ['api', '/api/dailyreports/dailyreports', toValue(args)] as const
}

export function getApiDailyreportsDailyreportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.dailyreports.dailyreports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiDailyreportsDailyreportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.dailyreports.dailyreports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiDailyreportsDailyreports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.dailyreports.dailyreports.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>
              >
            >
          >,
          ReturnType<typeof getApiDailyreportsDailyreportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.dailyreports.dailyreports.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDailyreportsDailyreportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiDailyreportsDailyreportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.dailyreports.dailyreports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenquestions.questions.$get>>,
) {
  return ['api', '/api/writtenquestions/questions', toValue(args)] as const
}

export function getApiWrittenquestionsQuestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenquestions.questions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenquestionsQuestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenquestions.questions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWrittenquestionsQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenquestions.questions.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiWrittenquestionsQuestionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenquestions.questions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenquestionsQuestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenquestions.questions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsDateUinQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
  >,
) {
  return ['api', '/api/writtenquestions/questions/:date/:uin', toValue(args)] as const
}

export function getApiWrittenquestionsQuestionsDateUinQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenquestionsQuestionsDateUinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenquestions.questions[':date'][':uin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
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
                    (typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']
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
                    (typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiWrittenquestionsQuestionsDateUinQueryKey>
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
            ReturnType<(typeof client.api.writtenquestions.questions)[':date'][':uin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsDateUinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenquestionsQuestionsDateUinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenquestions.questions[':date'][':uin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenquestionsQuestionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>
  >,
) {
  return ['api', '/api/writtenquestions/questions/:id', toValue(args)] as const
}

export function getApiWrittenquestionsQuestionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenquestionsQuestionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenquestions.questions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenquestions.questions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWrittenquestionsQuestionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.writtenquestions.questions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenquestionsQuestionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenquestionsQuestionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenquestions.questions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenstatements.statements.$get>>,
) {
  return ['api', '/api/writtenstatements/statements', toValue(args)] as const
}

export function getApiWrittenstatementsStatementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenstatements.statements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenstatementsStatementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenstatements.statements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiWrittenstatementsStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.writtenstatements.statements.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>
              >
            >
          >,
          ReturnType<typeof getApiWrittenstatementsStatementsQueryKey>
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
          Awaited<ReturnType<typeof client.api.writtenstatements.statements.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenstatementsStatementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenstatements.statements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsDateUinQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
  >,
) {
  return ['api', '/api/writtenstatements/statements/:date/:uin', toValue(args)] as const
}

export function getApiWrittenstatementsStatementsDateUinQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenstatementsStatementsDateUinQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenstatements.statements[':date'][':uin'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
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
                    (typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']
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
                    (typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiWrittenstatementsStatementsDateUinQueryKey>
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
            ReturnType<(typeof client.api.writtenstatements.statements)[':date'][':uin']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsDateUinQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenstatementsStatementsDateUinQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenstatements.statements[':date'][':uin'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiWrittenstatementsStatementsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>
  >,
) {
  return ['api', '/api/writtenstatements/statements/:id', toValue(args)] as const
}

export function getApiWrittenstatementsStatementsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiWrittenstatementsStatementsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.writtenstatements.statements[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.writtenstatements.statements)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiWrittenstatementsStatementsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.writtenstatements.statements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWrittenstatementsStatementsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiWrittenstatementsStatementsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.writtenstatements.statements[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

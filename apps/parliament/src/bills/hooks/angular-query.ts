import { injectQuery, queryOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1BillTypesQueryKey(
  args: InferRequestType<typeof client.api.v1.BillTypes.$get>,
) {
  return ['api', '/api/v1/BillTypes', args] as const
}

export function getApiV1BillTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.BillTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillTypesQueryKey>
  >({
    queryKey: getApiV1BillTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.BillTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1BillTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.BillTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.BillTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BillTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1BillsQueryKey(args: InferRequestType<typeof client.api.v1.Bills.$get>) {
  return ['api', '/api/v1/Bills', args] as const
}

export function getApiV1BillsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.Bills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsQueryKey>
  >({
    queryKey: getApiV1BillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Bills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Bills.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Bills.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BillsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1BillsBillIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>,
) {
  return ['api', '/api/v1/Bills/:billId', args] as const
}

export function getApiV1BillsBillIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdQueryKey>
  >({
    queryKey: getApiV1BillsBillIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Bills)[':billId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BillsBillIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1BillsBillIdNewsArticlesQueryKey(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>,
) {
  return ['api', '/api/v1/Bills/:billId/NewsArticles', args] as const
}

export function getApiV1BillsBillIdNewsArticlesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdNewsArticlesQueryKey>
  >({
    queryKey: getApiV1BillsBillIdNewsArticlesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].NewsArticles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdNewsArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['NewsArticles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdNewsArticlesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdNewsArticlesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdPublicationsQueryKey(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>,
) {
  return ['api', '/api/v1/Bills/:billId/Publications', args] as const
}

export function getApiV1BillsBillIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdPublicationsQueryKey>
  >({
    queryKey: getApiV1BillsBillIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Publications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdPublicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdPublicationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdStagesQueryKey(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>,
) {
  return ['api', '/api/v1/Bills/:billId/Stages', args] as const
}

export function getApiV1BillsBillIdStagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesQueryKey>
  >({
    queryKey: getApiV1BillsBillIdStagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdStages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdStagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdStagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdStagesBillStageIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:billStageId', args] as const
}

export function getApiV1BillsBillIdStagesBillStageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdQueryKey>
  >({
    queryKey: getApiV1BillsBillIdStagesBillStageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdStagesBillStageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdStagesBillStageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:billStageId/Amendments', args] as const
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey>
  >({
    queryKey: getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdStagesBillStageIdAmendments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdStagesBillStageIdAmendmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:billStageId/Amendments/:amendmentId', args] as const
}

export function getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey>
  >({
    queryKey: getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':billStageId'].Amendments[':amendmentId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Bills)[':billId']['Stages'][':billStageId']['Amendments'][':amendmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdStagesBillStageIdAmendmentsAmendmentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1BillsBillIdStagesStageIdPublicationsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
  >,
) {
  return ['api', '/api/v1/Bills/:billId/Stages/:stageId/Publications', args] as const
}

export function getApiV1BillsBillIdStagesStageIdPublicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BillsBillIdStagesStageIdPublicationsQueryKey>
  >({
    queryKey: getApiV1BillsBillIdStagesStageIdPublicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Bills[':billId'].Stages[':stageId'].Publications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1BillsBillIdStagesStageIdPublications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Bills)[':billId']['Stages'][':stageId']['Publications']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BillsBillIdStagesStageIdPublicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1BillsBillIdStagesStageIdPublicationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PublicationTypesQueryKey(
  args: InferRequestType<typeof client.api.v1.PublicationTypes.$get>,
) {
  return ['api', '/api/v1/PublicationTypes', args] as const
}

export function getApiV1PublicationTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.PublicationTypes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationTypesQueryKey>
  >({
    queryKey: getApiV1PublicationTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.PublicationTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PublicationTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.PublicationTypes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.PublicationTypes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PublicationTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PublicationTypesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
  >,
) {
  return ['api', '/api/v1/Publications/:publicationId/Documents/:documentId', args] as const
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey>
  >({
    queryKey: getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Publications[':publicationId'].Documents[':documentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PublicationsPublicationIdDocumentsDocumentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PublicationsPublicationIdDocumentsDocumentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/Publications/:publicationId/Documents/:documentId/Download',
    args,
  ] as const
}

export function getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey>
  >({
    queryKey: getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Publications[':publicationId'].Documents[':documentId'].Download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1PublicationsPublicationIdDocumentsDocumentIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.Publications)[':publicationId']['Documents'][':documentId']['Download']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiV1RssBillsIdRssQueryKey(
  args: InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>,
) {
  return ['api', '/api/v1/Rss/Bills/:id.rss', args] as const
}

export function getApiV1RssBillsIdRssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssBillsIdRssQueryKey>
  >({
    queryKey: getApiV1RssBillsIdRssQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Rss.Bills[':id.rss'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RssBillsIdRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Rss.Bills)[':id.rss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RssBillsIdRssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RssBillsIdRssQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RssAllbillsRssQueryKey() {
  return ['api', '/api/v1/Rss/allbills.rss'] as const
}

export function getApiV1RssAllbillsRssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssAllbillsRssQueryKey>
  >({
    queryKey: getApiV1RssAllbillsRssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Rss['allbills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RssAllbillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Rss)['allbills.rss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RssAllbillsRssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RssAllbillsRssQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RssPrivatebillsRssQueryKey() {
  return ['api', '/api/v1/Rss/privatebills.rss'] as const
}

export function getApiV1RssPrivatebillsRssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssPrivatebillsRssQueryKey>
  >({
    queryKey: getApiV1RssPrivatebillsRssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Rss['privatebills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RssPrivatebillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Rss)['privatebills.rss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RssPrivatebillsRssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RssPrivatebillsRssQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1RssPublicbillsRssQueryKey() {
  return ['api', '/api/v1/Rss/publicbills.rss'] as const
}

export function getApiV1RssPublicbillsRssQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RssPublicbillsRssQueryKey>
  >({
    queryKey: getApiV1RssPublicbillsRssQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Rss['publicbills.rss'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1RssPublicbillsRss<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.Rss)['publicbills.rss']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1RssPublicbillsRssQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1RssPublicbillsRssQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1SittingsQueryKey(
  args: InferRequestType<typeof client.api.v1.Sittings.$get>,
) {
  return ['api', '/api/v1/Sittings', args] as const
}

export function getApiV1SittingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.Sittings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SittingsQueryKey>
  >({
    queryKey: getApiV1SittingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Sittings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Sittings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Sittings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Sittings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SittingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SittingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1StagesQueryKey(args: InferRequestType<typeof client.api.v1.Stages.$get>) {
  return ['api', '/api/v1/Stages', args] as const
}

export function getApiV1StagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.Stages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1StagesQueryKey>
  >({
    queryKey: getApiV1StagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.Stages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Stages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.Stages.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.Stages.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1StagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1StagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

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

export function getFormatKey() {
  return ['{format}'] as const
}

export function getFormatPlayByPlayGameidQueryKey(
  args: InferRequestType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>,
) {
  return [':format', '/:format/PlayByPlay/:gameid', args] as const
}

export function getFormatPlayByPlayGameidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayByPlayGameidQueryKey>
  >({
    queryKey: getFormatPlayByPlayGameidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayByPlay[':gameid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFormatPlayByPlayGameid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':format']['PlayByPlay'][':gameid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayByPlayGameidQueryKey>
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
      ...getFormatPlayByPlayGameidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getFormatPlayByPlayDeltaDateMinutesQueryKey(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']
  >,
) {
  return [':format', '/:format/PlayByPlayDelta/:date/:minutes', args] as const
}

export function getFormatPlayByPlayDeltaDateMinutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFormatPlayByPlayDeltaDateMinutesQueryKey>
  >({
    queryKey: getFormatPlayByPlayDeltaDateMinutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':format'].PlayByPlayDelta[':date'][':minutes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFormatPlayByPlayDeltaDateMinutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)[':format']['PlayByPlayDelta'][':date'][':minutes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFormatPlayByPlayDeltaDateMinutesQueryKey>
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
      ...getFormatPlayByPlayDeltaDateMinutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

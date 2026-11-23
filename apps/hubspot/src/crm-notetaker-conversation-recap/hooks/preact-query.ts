import { useQuery, useSuspenseQuery, queryOptions } from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNotetakerKey() {
  return ['notetaker'] as const
}

export function getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
) {
  return [
    'notetaker',
    '/notetaker/2026-09/conversation/recap/:objectTypeId/:objectId',
    args,
  ] as const
}

export function getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey>
  >({
    queryKey: getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotetaker202609ConversationRecapObjectTypeIdObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey>
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
      ...getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotetaker202609ConversationRecapObjectTypeIdObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey>
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
      ...getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

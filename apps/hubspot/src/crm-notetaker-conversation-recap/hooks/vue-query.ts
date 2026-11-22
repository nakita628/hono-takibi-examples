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

export function getNotetakerKey() {
  return ['notetaker'] as const
}

export function getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
    >
  >,
) {
  return [
    'notetaker',
    '/notetaker/2026-09/conversation/recap/:objectTypeId/:objectId',
    toValue(args),
  ] as const
}

export function getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
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
                    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
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
                    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey>
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
              (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getNotetaker202609ConversationRecapObjectTypeIdObjectIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

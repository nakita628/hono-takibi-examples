import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getNotetakerKey() {
  return ['notetaker'] as const
}

export function getGetNotetaker202609ConversationRecapObjectTypeIdObjectIdKey(
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

export function useGetNotetaker202609ConversationRecapObjectTypeIdObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotetaker202609ConversationRecapObjectTypeIdObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNotetaker202609ConversationRecapObjectTypeIdObjectId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.notetaker)['2026-09']['conversation']['recap'][':objectTypeId'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNotetaker202609ConversationRecapObjectTypeIdObjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.notetaker['2026-09'].conversation.recap[':objectTypeId'][':objectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

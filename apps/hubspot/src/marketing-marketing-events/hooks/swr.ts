import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getGetMarketingMarketingEvents202609Key(
  args: InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>,
) {
  return ['marketing', '/marketing/marketing-events/2026-09', args] as const
}

export function useGetMarketingMarketingEvents202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
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
        ? getGetMarketingMarketingEvents202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing['marketing-events']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
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
        ? getGetMarketingMarketingEvents202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.marketing['marketing-events']['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdLists<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
        ? getGetMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
          client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
            ':externalEventId'
          ].lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdLists<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
        ? getGetMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists']['$get']
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
          client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
            ':externalEventId'
          ].lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists/:listId',
    'PUT',
  ] as const
}

export function usePutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
            ':externalEventId'
          ].lists[':listId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:externalAccountId/:externalEventId/lists/:listId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteMarketingMarketingEvents202609AssociationsExternalAccountIdExternalEventIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':externalAccountId'][':externalEventId']['lists'][':listId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[':externalAccountId'][
            ':externalEventId'
          ].lists[':listId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609AssociationsMarketingEventIdListsKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609AssociationsMarketingEventIdLists<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
        ? getGetMarketingMarketingEvents202609AssociationsMarketingEventIdListsKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
          client.marketing['marketing-events']['2026-09'].associations[
            ':marketingEventId'
          ].lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609AssociationsMarketingEventIdLists<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
        ? getGetMarketingMarketingEvents202609AssociationsMarketingEventIdListsKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists']['$get']
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
          client.marketing['marketing-events']['2026-09'].associations[
            ':marketingEventId'
          ].lists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists/:listId',
    'PUT',
  ] as const
}

export function usePutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
            ':listId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/associations/:marketingEventId/lists/:listId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMarketingMarketingEvents202609AssociationsMarketingEventIdListsListIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['associations'][':marketingEventId']['lists'][':listId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].associations[':marketingEventId'].lists[
            ':listId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/create',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
            ':subscriberState'
          ].create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/attendance/:externalEventId/:subscriberState/email-create',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketingMarketingEvents202609AttendanceExternalEventIdSubscriberStateEmailCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['attendance'][':externalEventId'][':subscriberState']['email-create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].attendance[':externalEventId'][
            ':subscriberState'
          ]['email-create'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609BatchArchiveKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/batch/archive', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609BatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609BatchArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609BatchUpdateKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/batch/update', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609BatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609BatchUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].batch.update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing)['marketing-events']['2026-09']['events']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing)['marketing-events']['2026-09']['events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsDeleteKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events/delete', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609EventsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609EventsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609EventsSearchKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/events/search', args] as const
}

export function useGetMarketingMarketingEvents202609EventsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
        ? getGetMarketingMarketingEvents202609EventsSearchKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
          client.marketing['marketing-events']['2026-09'].events.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609EventsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
        ? getGetMarketingMarketingEvents202609EventsSearchKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['events']['search']['$get']
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
          client.marketing['marketing-events']['2026-09'].events.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsUpsertKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/events/upsert', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609EventsUpsert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609EventsUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events.upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609EventsExternalEventIdKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/events/:externalEventId', args] as const
}

export function useGetMarketingMarketingEvents202609EventsExternalEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609EventsExternalEventIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609EventsExternalEventId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609EventsExternalEventIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingMarketingEvents202609EventsExternalEventIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'PUT',
  ] as const
}

export function usePutMarketingMarketingEvents202609EventsExternalEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingMarketingEvents202609EventsExternalEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingMarketingEvents202609EventsExternalEventIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingMarketingEvents202609EventsExternalEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingMarketingEvents202609EventsExternalEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingMarketingEvents202609EventsExternalEventIdKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId',
    'PATCH',
  ] as const
}

export function usePatchMarketingMarketingEvents202609EventsExternalEventId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingMarketingEvents202609EventsExternalEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCancelKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/cancel',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609EventsExternalEventIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/complete',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMarketingMarketingEvents202609EventsExternalEventIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/email-upsert',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateEmailUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['email-upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'][
            ':subscriberState'
          ]['email-upsert'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/events/:externalEventId/:subscriberState/upsert',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsert<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketingMarketingEvents202609EventsExternalEventIdSubscriberStateUpsertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09']['events'][':externalEventId'][':subscriberState']['upsert']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'].events[':externalEventId'][
            ':subscriberState'
          ].upsert.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/contacts/:contactIdentifier/breakdown',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations.contacts[
            ':contactIdentifier'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsContactsContactIdentifierBreakdownKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations']['contacts'][':contactIdentifier']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations.contacts[
            ':contactIdentifier'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:externalAccountId/:externalEventId/breakdown',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsExternalAccountIdExternalEventIdBreakdownKey(
            args,
          )
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':externalAccountId'][':externalEventId']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':externalAccountId'][
            ':externalEventId'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:marketingEventId',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ParticipationsMarketingEventId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':marketingEventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ParticipationsMarketingEventId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[':marketingEventId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/participations/:marketingEventId/breakdown',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[
            ':marketingEventId'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdown<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
        ? getGetMarketingMarketingEvents202609ParticipationsMarketingEventIdBreakdownKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09']['participations'][':marketingEventId']['breakdown']['$get']
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
          client.marketing['marketing-events']['2026-09'].participations[
            ':marketingEventId'
          ].breakdown.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609AppIdSettingsKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/:appId/settings', args] as const
}

export function useGetMarketingMarketingEvents202609AppIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
        ? getGetMarketingMarketingEvents202609AppIdSettingsKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
          client.marketing['marketing-events']['2026-09'][':appId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609AppIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
        ? getGetMarketingMarketingEvents202609AppIdSettingsKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$get']
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
          client.marketing['marketing-events']['2026-09'][':appId'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609AppIdSettingsKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:appId/settings', 'POST'] as const
}

export function usePostMarketingMarketingEvents202609AppIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingMarketingEvents202609AppIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':appId']['settings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'][':appId'].settings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ExternalEventIdIdentifiersKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:externalEventId/identifiers',
    args,
  ] as const
}

export function useGetMarketingMarketingEvents202609ExternalEventIdIdentifiers<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
        ? getGetMarketingMarketingEvents202609ExternalEventIdIdentifiersKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
          client.marketing['marketing-events']['2026-09'][':externalEventId'].identifiers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ExternalEventIdIdentifiers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
        ? getGetMarketingMarketingEvents202609ExternalEventIdIdentifiersKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':externalEventId']['identifiers']['$get']
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
          client.marketing['marketing-events']['2026-09'][':externalEventId'].identifiers.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingMarketingEvents202609ObjectIdKey(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
  >,
) {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', args] as const
}

export function useGetMarketingMarketingEvents202609ObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
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
        ? getGetMarketingMarketingEvents202609ObjectIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
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
          client.marketing['marketing-events']['2026-09'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingMarketingEvents202609ObjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
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
        ? getGetMarketingMarketingEvents202609ObjectIdKey(args)
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
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$get']
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
          client.marketing['marketing-events']['2026-09'][':objectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingMarketingEvents202609ObjectIdKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', 'DELETE'] as const
}

export function useDeleteMarketingMarketingEvents202609ObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingMarketingEvents202609ObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'][':objectId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingMarketingEvents202609ObjectIdKey() {
  return ['marketing', '/marketing/marketing-events/2026-09/:objectId', 'PATCH'] as const
}

export function usePatchMarketingMarketingEvents202609ObjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingMarketingEvents202609ObjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'][':objectId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/create',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'][':objectId'].attendance[
            ':subscriberState'
          ].create.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateKey() {
  return [
    'marketing',
    '/marketing/marketing-events/2026-09/:objectId/attendance/:subscriberState/email-create',
    'POST',
  ] as const
}

export function usePostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostMarketingMarketingEvents202609ObjectIdAttendanceSubscriberStateEmailCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.marketing)['marketing-events']['2026-09'][':objectId']['attendance'][':subscriberState']['email-create']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing['marketing-events']['2026-09'][':objectId'].attendance[
            ':subscriberState'
          ]['email-create'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

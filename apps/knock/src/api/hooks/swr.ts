import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ObjectsCollectionIdKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id', args] as const
}

export function useGetV1ObjectsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
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
        ? getGetV1ObjectsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.objects[':collection'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
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
        ? getGetV1ObjectsCollectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.objects[':collection'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionIdKey() {
  return ['v1', '/v1/objects/:collection/:id', 'PUT'] as const
}

export function usePutV1ObjectsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$put']> },
      ) => parseResponse(client.v1.objects[':collection'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectsCollectionIdKey() {
  return ['v1', '/v1/objects/:collection/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectsCollectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectsCollectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['$delete']> },
      ) => parseResponse(client.v1.objects[':collection'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesInteractedKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/interacted', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesInteracted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesInteractedKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages']['interacted']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages.interacted.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsCensusCustomDestinationKey() {
  return ['v1', '/v1/integrations/census/custom-destination', 'POST'] as const
}

export function usePostV1IntegrationsCensusCustomDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.integrations.census)['custom-destination']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations.census)['custom-destination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsCensusCustomDestinationKey()
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
            (typeof client.v1.integrations.census)['custom-destination']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations.census['custom-destination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdSubscriptionsKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/subscriptions', args] as const
}

export function useGetV1UsersUserIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
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
        ? getGetV1UsersUserIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdSubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
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
        ? getGetV1UsersUserIdSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WorkflowsKeyCancelKey() {
  return ['v1', '/v1/workflows/:key/cancel', 'POST'] as const
}

export function usePostV1WorkflowsKeyCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflows)[':key']['cancel']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsKeyCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.workflows)[':key']['cancel']['$post']> },
      ) => parseResponse(client.v1.workflows[':key'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesArchivedKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/archived', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesArchivedKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages.archived.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdGuidesMessagesArchivedKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/archived', 'DELETE'] as const
}

export function useDeleteV1UsersUserIdGuidesMessagesArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdGuidesMessagesArchivedKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages']['archived']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages.archived.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdChannelTypesKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/channel_types', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdChannelTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdChannelTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].channel_types.$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/categories', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdCategories<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].categories.$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessagesKey(args: InferRequestType<typeof client.v1.messages.$get>) {
  return ['v1', '/v1/messages', args] as const
}

export function useGetV1Messages<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Messages<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1MessagesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdChannelTypesTypeKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/channel_types/:type', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdChannelTypesType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['channel_types'][':type']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdChannelTypesTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].channel_types[':type'].$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvidersMsTeamsChannelIdChannelsKey(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/channels', args] as const
}

export function useGetV1ProvidersMsTeamsChannelIdChannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
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
        ? getGetV1ProvidersMsTeamsChannelIdChannelsKey(args)
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
                (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
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
          client.v1.providers['ms-teams'][':channel_id'].channels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvidersMsTeamsChannelIdChannels<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
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
        ? getGetV1ProvidersMsTeamsChannelIdChannelsKey(args)
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
                (typeof client.v1.providers)['ms-teams'][':channel_id']['channels']['$get']
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
          client.v1.providers['ms-teams'][':channel_id'].channels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1MessagesMessageIdInteractedKey() {
  return ['v1', '/v1/messages/:message_id/interacted', 'PUT'] as const
}

export function usePutV1MessagesMessageIdInteracted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessagesMessageIdInteractedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['interacted']['$put']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].interacted.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessagesMessageIdEventsKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/events', args] as const
}

export function useGetV1MessagesMessageIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
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
        ? getGetV1MessagesMessageIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages[':message_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesMessageIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
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
        ? getGetV1MessagesMessageIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages[':message_id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersUserIdMessagesKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/messages', args] as const
}

export function useGetV1UsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
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
        ? getGetV1UsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
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
        ? getGetV1UsersUserIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvidersSlackChannelIdRevokeAccessKey() {
  return ['v1', '/v1/providers/slack/:channel_id/revoke_access', 'PUT'] as const
}

export function usePutV1ProvidersSlackChannelIdRevokeAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvidersSlackChannelIdRevokeAccessKey()
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
            (typeof client.v1.providers.slack)[':channel_id']['revoke_access']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.providers.slack[':channel_id'].revoke_access.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectsCollectionBulkDeleteKey() {
  return ['v1', '/v1/objects/:collection/bulk/delete', 'POST'] as const
}

export function usePostV1ObjectsCollectionBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectsCollectionBulkDeleteKey()
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
            (typeof client.v1.objects)[':collection']['bulk']['delete']['$post']
          >
        },
      ) => parseResponse(client.v1.objects[':collection'].bulk.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdWorkflowsKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/workflows', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdWorkflows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].workflows.$put(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdGuidesChannelIdKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/guides/:channel_id', args] as const
}

export function useGetV1UsersUserIdGuidesChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
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
        ? getGetV1UsersUserIdGuidesChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].guides[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdGuidesChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
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
        ? getGetV1UsersUserIdGuidesChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['guides'][':channel_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].guides[':channel_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersUserIdSchedulesKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/schedules', args] as const
}

export function useGetV1UsersUserIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
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
        ? getGetV1UsersUserIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
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
        ? getGetV1UsersUserIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyKey() {
  return [
    'v1',
    '/v1/objects/:collection/:object_id/preferences/:id/categories/:key',
    'PUT',
  ] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['categories'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdCategoriesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].categories[':key'].$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdCategoriesKeyKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/categories/:key', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdCategoriesKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['categories'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdCategoriesKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].categories[':key'].$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessagesMessageIdContentKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/content', args] as const
}

export function useGetV1MessagesMessageIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
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
        ? getGetV1MessagesMessageIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesMessageIdContent<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['content']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
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
        ? getGetV1MessagesMessageIdContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['content']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvidersMsTeamsChannelIdAuthCheckKey(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/auth_check', args] as const
}

export function useGetV1ProvidersMsTeamsChannelIdAuthCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
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
        ? getGetV1ProvidersMsTeamsChannelIdAuthCheckKey(args)
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
                (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
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
          client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvidersMsTeamsChannelIdAuthCheck<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
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
        ? getGetV1ProvidersMsTeamsChannelIdAuthCheckKey(args)
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
                (typeof client.v1.providers)['ms-teams'][':channel_id']['auth_check']['$get']
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
          client.v1.providers['ms-teams'][':channel_id'].auth_check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvidersMsTeamsChannelIdRevokeAccessKey() {
  return ['v1', '/v1/providers/ms-teams/:channel_id/revoke_access', 'PUT'] as const
}

export function usePutV1ProvidersMsTeamsChannelIdRevokeAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvidersMsTeamsChannelIdRevokeAccessKey()
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
            (typeof client.v1.providers)['ms-teams'][':channel_id']['revoke_access']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].revoke_access.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdFeedsIdSettingsKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id/settings', args] as const
}

export function useGetV1UsersUserIdFeedsIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
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
        ? getGetV1UsersUserIdFeedsIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].feeds[':id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdFeedsIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
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
        ? getGetV1UsersUserIdFeedsIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].feeds[':id'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesEngagementsResetKey() {
  return ['v1', '/v1/users/:user_id/guides/engagements/reset', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesEngagementsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesEngagementsResetKey()
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
            (typeof client.v1.users)[':user_id']['guides']['engagements']['reset']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.engagements.reset.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionObjectIdPreferencesKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences', args] as const
}

export function useGetV1ObjectsCollectionObjectIdPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdPreferencesKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
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
          client.v1.objects[':collection'][':object_id'].preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionObjectIdPreferences<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdPreferencesKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['preferences']['$get']
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
          client.v1.objects[':collection'][':object_id'].preferences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1MessagesMessageIdActivitiesKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/activities', args] as const
}

export function useGetV1MessagesMessageIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
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
        ? getGetV1MessagesMessageIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesMessageIdActivities<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
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
        ? getGetV1MessagesMessageIdActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TenantsKey(args: InferRequestType<typeof client.v1.tenants.$get>) {
  return ['v1', '/v1/tenants', args] as const
}

export function useGetV1Tenants<TError = unknown>(
  args: InferRequestType<typeof client.v1.tenants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TenantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tenants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tenants<TError = unknown>(
  args: InferRequestType<typeof client.v1.tenants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TenantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tenants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/workflows', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdWorkflows<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows.$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionIdMessagesKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id/messages', args] as const
}

export function useGetV1ObjectsCollectionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
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
        ? getGetV1ObjectsCollectionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.objects[':collection'][':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionIdMessages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
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
        ? getGetV1ObjectsCollectionIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['messages']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.objects[':collection'][':id'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1NotifyKey() {
  return ['v1', '/v1/notify', 'POST'] as const
}

export function usePostV1Notify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.notify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NotifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.notify.$post> }) =>
        parseResponse(client.v1.notify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MessagesBatchArchivedKey() {
  return ['v1', '/v1/messages/batch/archived', 'POST'] as const
}

export function usePostV1MessagesBatchArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.archived.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.archived.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchArchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.archived.$post> },
      ) => parseResponse(client.v1.messages.batch.archived.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdFeedsIdKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/feeds/:id', args] as const
}

export function useGetV1UsersUserIdFeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
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
        ? getGetV1UsersUserIdFeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].feeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdFeedsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
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
        ? getGetV1UsersUserIdFeedsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['feeds'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].feeds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MessagesBatchUnarchivedKey() {
  return ['v1', '/v1/messages/batch/unarchived', 'POST'] as const
}

export function usePostV1MessagesBatchUnarchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unarchived.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.unarchived.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchUnarchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.unarchived.$post> },
      ) => parseResponse(client.v1.messages.batch.unarchived.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvidersMsTeamsChannelIdTeamsKey(
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
) {
  return ['v1', '/v1/providers/ms-teams/:channel_id/teams', args] as const
}

export function useGetV1ProvidersMsTeamsChannelIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
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
        ? getGetV1ProvidersMsTeamsChannelIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].teams.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvidersMsTeamsChannelIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
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
        ? getGetV1ProvidersMsTeamsChannelIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers)['ms-teams'][':channel_id']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.providers['ms-teams'][':channel_id'].teams.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1UsersUserIdMergeKey() {
  return ['v1', '/v1/users/:user_id/merge', 'POST'] as const
}

export function usePostV1UsersUserIdMerge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['merge']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersUserIdMergeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['merge']['$post']> },
      ) => parseResponse(client.v1.users[':user_id'].merge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectsCollectionBulkSubscriptionsDeleteKey() {
  return ['v1', '/v1/objects/:collection/bulk/subscriptions/delete', 'POST'] as const
}

export function usePostV1ObjectsCollectionBulkSubscriptionsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectsCollectionBulkSubscriptionsDeleteKey()
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
            (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'].bulk.subscriptions.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdCategoriesKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/categories', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['categories']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].categories.$put(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
) {
  return ['v1', '/v1/objects/:collection', args] as const
}

export function useGetV1ObjectsCollection<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
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
        ? getGetV1ObjectsCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.objects[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollection<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
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
        ? getGetV1ObjectsCollectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.objects)[':collection']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.objects[':collection'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersKey(args: InferRequestType<typeof client.v1.users.$get>) {
  return ['v1', '/v1/users', args] as const
}

export function useGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Users<TError = unknown>(
  args: InferRequestType<typeof client.v1.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetV1WorkflowRecipientRunsIdKey(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
) {
  return ['v1', '/v1/workflow_recipient_runs/:id', args] as const
}

export function useGetV1WorkflowRecipientRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
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
        ? getGetV1WorkflowRecipientRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflow_recipient_runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowRecipientRunsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
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
        ? getGetV1WorkflowRecipientRunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.workflow_recipient_runs)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflow_recipient_runs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1MessagesMessageIdSeenKey() {
  return ['v1', '/v1/messages/:message_id/seen', 'PUT'] as const
}

export function usePutV1MessagesMessageIdSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessagesMessageIdSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$put']> },
      ) => parseResponse(client.v1.messages[':message_id'].seen.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdSeenKey() {
  return ['v1', '/v1/messages/:message_id/seen', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.messages)[':message_id']['seen']['$delete']> },
      ) => parseResponse(client.v1.messages[':message_id'].seen.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvidersSlackChannelIdAuthCheckKey(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
) {
  return ['v1', '/v1/providers/slack/:channel_id/auth_check', args] as const
}

export function useGetV1ProvidersSlackChannelIdAuthCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
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
        ? getGetV1ProvidersSlackChannelIdAuthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.providers.slack[':channel_id'].auth_check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvidersSlackChannelIdAuthCheck<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
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
        ? getGetV1ProvidersSlackChannelIdAuthCheckKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['auth_check']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.providers.slack[':channel_id'].auth_check.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1UsersBulkDeleteKey() {
  return ['v1', '/v1/users/bulk/delete', 'POST'] as const
}

export function usePostV1UsersBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.bulk.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersBulkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.bulk.delete.$post> },
      ) => parseResponse(client.v1.users.bulk.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NotifyCancelKey() {
  return ['v1', '/v1/notify/cancel', 'POST'] as const
}

export function usePostV1NotifyCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.notify.cancel.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.notify.cancel.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NotifyCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.notify.cancel.$post> }) =>
        parseResponse(client.v1.notify.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeKey() {
  return [
    'v1',
    '/v1/objects/:collection/:object_id/preferences/:id/channel_types/:type',
    'PUT',
  ] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types'][':type']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types[
            ':type'
          ].$put(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/channel_types', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdChannelTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['channel_types']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdChannelTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].channel_types.$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersBulkIdentifyKey() {
  return ['v1', '/v1/users/bulk/identify', 'POST'] as const
}

export function usePostV1UsersBulkIdentify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.identify.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.bulk.identify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersBulkIdentifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.bulk.identify.$post> },
      ) => parseResponse(client.v1.users.bulk.identify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TenantsBulkSetKey() {
  return ['v1', '/v1/tenants/bulk/set', 'POST'] as const
}

export function usePostV1TenantsBulkSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.set.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tenants.bulk.set.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TenantsBulkSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tenants.bulk.set.$post> }) =>
        parseResponse(client.v1.tenants.bulk.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AudiencesKeyMembersKey(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
) {
  return ['v1', '/v1/audiences/:key/members', args] as const
}

export function useGetV1AudiencesKeyMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
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
        ? getGetV1AudiencesKeyMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences[':key'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AudiencesKeyMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
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
        ? getGetV1AudiencesKeyMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.audiences[':key'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AudiencesKeyMembersKey() {
  return ['v1', '/v1/audiences/:key/members', 'POST'] as const
}

export function usePostV1AudiencesKeyMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AudiencesKeyMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$post']> },
      ) => parseResponse(client.v1.audiences[':key'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AudiencesKeyMembersKey() {
  return ['v1', '/v1/audiences/:key/members', 'DELETE'] as const
}

export function useDeleteV1AudiencesKeyMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.audiences)[':key']['members']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AudiencesKeyMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.audiences)[':key']['members']['$delete']> },
      ) => parseResponse(client.v1.audiences[':key'].members.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1MessagesMessageIdArchivedKey() {
  return ['v1', '/v1/messages/:message_id/archived', 'PUT'] as const
}

export function usePutV1MessagesMessageIdArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessagesMessageIdArchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$put']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].archived.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdArchivedKey() {
  return ['v1', '/v1/messages/:message_id/archived', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdArchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['archived']['$delete']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].archived.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WorkflowsKeyTriggerKey() {
  return ['v1', '/v1/workflows/:key/trigger', 'POST'] as const
}

export function usePostV1WorkflowsKeyTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.workflows)[':key']['trigger']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WorkflowsKeyTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.workflows)[':key']['trigger']['$post']> },
      ) => parseResponse(client.v1.workflows[':key'].trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdArchivedKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/archived', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdArchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesMessageIdArchivedKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['archived']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages[':message_id'].archived.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1TenantsBulkDeleteKey() {
  return ['v1', '/v1/tenants/bulk/delete', 'POST'] as const
}

export function usePostV1TenantsBulkDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.tenants.bulk.delete.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.tenants.bulk.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TenantsBulkDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.tenants.bulk.delete.$post> },
      ) => parseResponse(client.v1.tenants.bulk.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdUnreadKey() {
  return ['v1', '/v1/messages/:message_id/unread', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['unread']['$delete']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].unread.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id', args] as const
}

export function useGetV1UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdKey() {
  return ['v1', '/v1/users/:user_id', 'PUT'] as const
}

export function usePutV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['$put']> },
      ) => parseResponse(client.v1.users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdKey() {
  return ['v1', '/v1/users/:user_id', 'DELETE'] as const
}

export function useDeleteV1UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.users)[':user_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.users)[':user_id']['$delete']> },
      ) => parseResponse(client.v1.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MessagesBatchInteractedKey() {
  return ['v1', '/v1/messages/batch/interacted', 'POST'] as const
}

export function usePostV1MessagesBatchInteracted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.interacted.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.interacted.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchInteractedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.interacted.$post> },
      ) => parseResponse(client.v1.messages.batch.interacted.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TenantsIdKey(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
) {
  return ['v1', '/v1/tenants/:id', args] as const
}

export function useGetV1TenantsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TenantsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tenants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TenantsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tenants)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1TenantsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tenants[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1TenantsIdKey() {
  return ['v1', '/v1/tenants/:id', 'PUT'] as const
}

export function usePutV1TenantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tenants)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1TenantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tenants)[':id']['$put']> },
      ) => parseResponse(client.v1.tenants[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TenantsIdKey() {
  return ['v1', '/v1/tenants/:id', 'DELETE'] as const
}

export function useDeleteV1TenantsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tenants)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tenants)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TenantsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tenants)[':id']['$delete']> },
      ) => parseResponse(client.v1.tenants[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesSeenKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/seen', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesSeenKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages']['seen']['$put']
          >
        },
      ) => parseResponse(client.v1.users[':user_id'].guides.messages.seen.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdUnseenKey() {
  return ['v1', '/v1/messages/:message_id/unseen', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdUnseen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdUnseenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['unseen']['$delete']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].unseen.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionObjectIdSubscriptionsKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', args] as const
}

export function useGetV1ObjectsCollectionObjectIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdSubscriptionsKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
          client.v1.objects[':collection'][':object_id'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionObjectIdSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdSubscriptionsKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$get']
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
          client.v1.objects[':collection'][':object_id'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ObjectsCollectionObjectIdSubscriptionsKey() {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', 'POST'] as const
}

export function usePostV1ObjectsCollectionObjectIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectsCollectionObjectIdSubscriptionsKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectsCollectionObjectIdSubscriptionsKey() {
  return ['v1', '/v1/objects/:collection/:object_id/subscriptions', 'DELETE'] as const
}

export function useDeleteV1ObjectsCollectionObjectIdSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectsCollectionObjectIdSubscriptionsKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['subscriptions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].subscriptions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id/workflows/:key', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['workflows'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdWorkflowsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].workflows[':key'].$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1MessagesMessageIdReadKey() {
  return ['v1', '/v1/messages/:message_id/read', 'PUT'] as const
}

export function usePutV1MessagesMessageIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1MessagesMessageIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$put']> },
      ) => parseResponse(client.v1.messages[':message_id'].read.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdReadKey() {
  return ['v1', '/v1/messages/:message_id/read', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['read']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.messages)[':message_id']['read']['$delete']> },
      ) => parseResponse(client.v1.messages[':message_id'].read.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1UsersUserIdPreferenceCenterConfigKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
) {
  return ['v1', '/v1/users/:user_id/preference_center/config', args] as const
}

export function useGetV1UsersUserIdPreferenceCenterConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
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
        ? getGetV1UsersUserIdPreferenceCenterConfigKey(args)
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
                (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
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
          client.v1.users[':user_id'].preference_center.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdPreferenceCenterConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
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
        ? getGetV1UsersUserIdPreferenceCenterConfigKey(args)
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
                (typeof client.v1.users)[':user_id']['preference_center']['config']['$get']
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
          client.v1.users[':user_id'].preference_center.config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersUserIdChannelDataChannelIdKey(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
) {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', args] as const
}

export function useGetV1UsersUserIdChannelDataChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
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
        ? getGetV1UsersUserIdChannelDataChannelIdKey(args)
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
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
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
          client.v1.users[':user_id'].channel_data[':channel_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdChannelDataChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
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
        ? getGetV1UsersUserIdChannelDataChannelIdKey(args)
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
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$get']
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
          client.v1.users[':user_id'].channel_data[':channel_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdChannelDataChannelIdKey() {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', 'PUT'] as const
}

export function usePutV1UsersUserIdChannelDataChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdChannelDataChannelIdKey()
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
            (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].channel_data[':channel_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdChannelDataChannelIdKey() {
  return ['v1', '/v1/users/:user_id/channel_data/:channel_id', 'DELETE'] as const
}

export function useDeleteV1UsersUserIdChannelDataChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdChannelDataChannelIdKey()
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
            (typeof client.v1.users)[':user_id']['channel_data'][':channel_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].channel_data[':channel_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdWorkflowsKeyKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id/workflows/:key', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesIdWorkflowsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preferences'][':id']['workflows'][':key']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdWorkflowsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.v1.users[':user_id'].preferences[':id'].workflows[':key'].$put(
            undefined,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SchedulesKey(args: InferRequestType<typeof client.v1.schedules.$get>) {
  return ['v1', '/v1/schedules', args] as const
}

export function useGetV1Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Schedules<TError = unknown>(
  args: InferRequestType<typeof client.v1.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SchedulesKey() {
  return ['v1', '/v1/schedules', 'PUT'] as const
}

export function usePutV1Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.schedules.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.schedules.$put> }) =>
        parseResponse(client.v1.schedules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SchedulesKey() {
  return ['v1', '/v1/schedules', 'POST'] as const
}

export function usePostV1Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.schedules.$post> }) =>
        parseResponse(client.v1.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SchedulesKey() {
  return ['v1', '/v1/schedules', 'DELETE'] as const
}

export function useDeleteV1Schedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.schedules.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.schedules.$delete> }) =>
        parseResponse(client.v1.schedules.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionObjectIdPreferencesIdKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', args] as const
}

export function useGetV1ObjectsCollectionObjectIdPreferencesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdPreferencesIdKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
          client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionObjectIdPreferencesId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdPreferencesIdKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$get']
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
          client.v1.objects[':collection'][':object_id'].preferences[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdPreferencesIdKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdPreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdPreferencesIdKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectsCollectionObjectIdPreferencesIdKey() {
  return ['v1', '/v1/objects/:collection/:object_id/preferences/:id', 'DELETE'] as const
}

export function useDeleteV1ObjectsCollectionObjectIdPreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectsCollectionObjectIdPreferencesIdKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['preferences'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].preferences[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdSeenKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/seen', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesMessageIdSeenKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['seen']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages[':message_id'].seen.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectsCollectionBulkSetKey() {
  return ['v1', '/v1/objects/:collection/bulk/set', 'POST'] as const
}

export function usePostV1ObjectsCollectionBulkSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectsCollectionBulkSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.objects)[':collection']['bulk']['set']['$post']>
        },
      ) => parseResponse(client.v1.objects[':collection'].bulk.set.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1IntegrationsHightouchEmbeddedDestinationKey() {
  return ['v1', '/v1/integrations/hightouch/embedded-destination', 'POST'] as const
}

export function usePostV1IntegrationsHightouchEmbeddedDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.integrations.hightouch)['embedded-destination']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations.hightouch)['embedded-destination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsHightouchEmbeddedDestinationKey()
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
            (typeof client.v1.integrations.hightouch)['embedded-destination']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations.hightouch['embedded-destination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MessagesBatchUnseenKey() {
  return ['v1', '/v1/messages/batch/unseen', 'POST'] as const
}

export function usePostV1MessagesBatchUnseen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unseen.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.unseen.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchUnseenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.unseen.$post> },
      ) => parseResponse(client.v1.messages.batch.unseen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionIdSchedulesKey(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
) {
  return ['v1', '/v1/objects/:collection/:id/schedules', args] as const
}

export function useGetV1ObjectsCollectionIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
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
        ? getGetV1ObjectsCollectionIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.objects[':collection'][':id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionIdSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
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
        ? getGetV1ObjectsCollectionIdSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.objects)[':collection'][':id']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.objects[':collection'][':id'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SchedulesBulkCreateKey() {
  return ['v1', '/v1/schedules/bulk/create', 'POST'] as const
}

export function usePostV1SchedulesBulkCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.schedules.bulk.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.schedules.bulk.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SchedulesBulkCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.schedules.bulk.create.$post> },
      ) => parseResponse(client.v1.schedules.bulk.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObjectsCollectionObjectIdChannelDataChannelIdKey(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
) {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', args] as const
}

export function useGetV1ObjectsCollectionObjectIdChannelDataChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdChannelDataChannelIdKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
          client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObjectsCollectionObjectIdChannelDataChannelId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
        ? getGetV1ObjectsCollectionObjectIdChannelDataChannelIdKey(args)
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
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$get']
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
          client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObjectsCollectionObjectIdChannelDataChannelIdKey() {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', 'PUT'] as const
}

export function usePutV1ObjectsCollectionObjectIdChannelDataChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObjectsCollectionObjectIdChannelDataChannelIdKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdKey() {
  return ['v1', '/v1/objects/:collection/:object_id/channel_data/:channel_id', 'DELETE'] as const
}

export function useDeleteV1ObjectsCollectionObjectIdChannelDataChannelId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ObjectsCollectionObjectIdChannelDataChannelIdKey()
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
            (typeof client.v1.objects)[':collection'][':object_id']['channel_data'][':channel_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'][':object_id'].channel_data[':channel_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1MessagesBatchUnreadKey() {
  return ['v1', '/v1/messages/batch/unread', 'POST'] as const
}

export function usePostV1MessagesBatchUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.unread.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.unread.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchUnreadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.unread.$post> },
      ) => parseResponse(client.v1.messages.batch.unread.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvidersSlackChannelIdChannelsKey(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
) {
  return ['v1', '/v1/providers/slack/:channel_id/channels', args] as const
}

export function useGetV1ProvidersSlackChannelIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
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
        ? getGetV1ProvidersSlackChannelIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.providers.slack[':channel_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvidersSlackChannelIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
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
        ? getGetV1ProvidersSlackChannelIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.providers.slack)[':channel_id']['channels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.providers.slack[':channel_id'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WorkflowRecipientRunsKey(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
) {
  return ['v1', '/v1/workflow_recipient_runs', args] as const
}

export function useGetV1WorkflowRecipientRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
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
        ? getGetV1WorkflowRecipientRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflow_recipient_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WorkflowRecipientRuns<TError = unknown>(
  args: InferRequestType<typeof client.v1.workflow_recipient_runs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
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
        ? getGetV1WorkflowRecipientRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.workflow_recipient_runs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.workflow_recipient_runs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1MessagesBatchSeenKey() {
  return ['v1', '/v1/messages/batch/seen', 'POST'] as const
}

export function usePostV1MessagesBatchSeen<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.seen.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.seen.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchSeenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.seen.$post> },
      ) => parseResponse(client.v1.messages.batch.seen.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersBulkPreferencesKey() {
  return ['v1', '/v1/users/bulk/preferences', 'POST'] as const
}

export function usePostV1UsersBulkPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.users.bulk.preferences.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.users.bulk.preferences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersBulkPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.users.bulk.preferences.$post> },
      ) => parseResponse(client.v1.users.bulk.preferences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1MessagesBatchReadKey() {
  return ['v1', '/v1/messages/batch/read', 'POST'] as const
}

export function usePostV1MessagesBatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.read.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.messages.batch.read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MessagesBatchReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.messages.batch.read.$post> },
      ) => parseResponse(client.v1.messages.batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessagesBatchContentKey(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
) {
  return ['v1', '/v1/messages/batch/content', args] as const
}

export function useGetV1MessagesBatchContent<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
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
        ? getGetV1MessagesBatchContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.batch.content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesBatchContent<TError = unknown>(
  args: InferRequestType<typeof client.v1.messages.batch.content.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
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
        ? getGetV1MessagesBatchContentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.messages.batch.content.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages.batch.content.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MessagesMessageIdDeliveryLogsKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id/delivery_logs', args] as const
}

export function useGetV1MessagesMessageIdDeliveryLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
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
        ? getGetV1MessagesMessageIdDeliveryLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].delivery_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesMessageIdDeliveryLogs<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
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
        ? getGetV1MessagesMessageIdDeliveryLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['delivery_logs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.messages[':message_id'].delivery_logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdGuidesMessagesMessageIdInteractedKey() {
  return ['v1', '/v1/users/:user_id/guides/messages/:message_id/interacted', 'PUT'] as const
}

export function usePutV1UsersUserIdGuidesMessagesMessageIdInteracted<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdGuidesMessagesMessageIdInteractedKey()
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
            (typeof client.v1.users)[':user_id']['guides']['messages'][':message_id']['interacted']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].guides.messages[':message_id'].interacted.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MessagesMessageIdKey(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
) {
  return ['v1', '/v1/messages/:message_id', args] as const
}

export function useGetV1MessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
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
        ? getGetV1MessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MessagesMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.messages)[':message_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
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
        ? getGetV1MessagesMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.messages[':message_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ChannelsChannelIdMessagesBulkActionKey() {
  return ['v1', '/v1/channels/:channel_id/messages/bulk/:action', 'POST'] as const
}

export function usePostV1ChannelsChannelIdMessagesBulkAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ChannelsChannelIdMessagesBulkActionKey()
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
            (typeof client.v1.channels)[':channel_id']['messages']['bulk'][':action']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.channels[':channel_id'].messages.bulk[':action'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1MessagesMessageIdUnarchivedKey() {
  return ['v1', '/v1/messages/:message_id/unarchived', 'DELETE'] as const
}

export function useDeleteV1MessagesMessageIdUnarchived<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1MessagesMessageIdUnarchivedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.messages)[':message_id']['unarchived']['$delete']>
        },
      ) => parseResponse(client.v1.messages[':message_id'].unarchived.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BulkOperationsIdKey(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
) {
  return ['v1', '/v1/bulk_operations/:id', args] as const
}

export function useGetV1BulkOperationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
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
        ? getGetV1BulkOperationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bulk_operations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkOperationsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bulk_operations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
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
        ? getGetV1BulkOperationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bulk_operations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bulk_operations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersUserIdPreferencesKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/preferences', args] as const
}

export function useGetV1UsersUserIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
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
        ? getGetV1UsersUserIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
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
        ? getGetV1UsersUserIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.users[':user_id'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1UsersUserIdPreferencesIdKey(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
) {
  return ['v1', '/v1/users/:user_id/preferences/:id', args] as const
}

export function useGetV1UsersUserIdPreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
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
        ? getGetV1UsersUserIdPreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].preferences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1UsersUserIdPreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
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
        ? getGetV1UsersUserIdPreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.users[':user_id'].preferences[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1UsersUserIdPreferencesIdKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id', 'PUT'] as const
}

export function usePutV1UsersUserIdPreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1UsersUserIdPreferencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$put']>
        },
      ) => parseResponse(client.v1.users[':user_id'].preferences[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1UsersUserIdPreferencesIdKey() {
  return ['v1', '/v1/users/:user_id/preferences/:id', 'DELETE'] as const
}

export function useDeleteV1UsersUserIdPreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UsersUserIdPreferencesIdKey()
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
            (typeof client.v1.users)[':user_id']['preferences'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.users[':user_id'].preferences[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ObjectsCollectionBulkSubscriptionsAddKey() {
  return ['v1', '/v1/objects/:collection/bulk/subscriptions/add', 'POST'] as const
}

export function usePostV1ObjectsCollectionBulkSubscriptionsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ObjectsCollectionBulkSubscriptionsAddKey()
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
            (typeof client.v1.objects)[':collection']['bulk']['subscriptions']['add']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.objects[':collection'].bulk.subscriptions.add.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1UsersUserIdPreferenceCenterSignedUrlKey() {
  return ['v1', '/v1/users/:user_id/preference_center/signed_url', 'POST'] as const
}

export function usePostV1UsersUserIdPreferenceCenterSignedUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1UsersUserIdPreferenceCenterSignedUrlKey()
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
            (typeof client.v1.users)[':user_id']['preference_center']['signed_url']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.users[':user_id'].preference_center.signed_url.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

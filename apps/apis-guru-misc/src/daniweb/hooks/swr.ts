import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppsKey() {
  return ['apps'] as const
}

export function getAudiencesKey() {
  return ['audiences'] as const
}

export function getAutocompletesKey() {
  return ['autocompletes'] as const
}

export function getConversationsKey() {
  return ['conversations'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getIndustriesKey() {
  return ['industries'] as const
}

export function getMarkdownKey() {
  return ['markdown'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getPositionsKey() {
  return ['positions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getGetAppsKey(args: InferRequestType<typeof client.apps.$get>) {
  return ['apps', '/apps', args] as const
}

export function useGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApps<TError = unknown>(
  args: InferRequestType<typeof client.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apps.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.apps.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAppsIDKey(args: InferRequestType<(typeof client.apps)[':ID']['$get']>) {
  return ['apps', '/apps/:ID', args] as const
}

export function useGetAppsID<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppsID<TError = unknown>(
  args: InferRequestType<(typeof client.apps)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.apps)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apps[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudiencesKey(args: InferRequestType<typeof client.audiences.$get>) {
  return ['audiences', '/audiences', args] as const
}

export function useGetAudiences<TError = unknown>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiences<TError = unknown>(
  args: InferRequestType<typeof client.audiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAudiencesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audiences.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAudiencesIDKey(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
) {
  return ['audiences', '/audiences/:ID', args] as const
}

export function useGetAudiencesID<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAudiencesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAudiencesID<TError = unknown>(
  args: InferRequestType<(typeof client.audiences)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAudiencesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audiences)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audiences[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAudiencesIDMembershipsKey() {
  return ['audiences', '/audiences/:ID/memberships', 'POST'] as const
}

export function usePostAudiencesIDMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audiences)[':ID']['memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudiencesIDMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.audiences)[':ID']['memberships']['$post']> },
      ) => parseResponse(client.audiences[':ID'].memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAutocompletesKey(args: InferRequestType<typeof client.autocompletes.$get>) {
  return ['autocompletes', '/autocompletes', args] as const
}

export function useGetAutocompletes<TError = unknown>(
  args: InferRequestType<typeof client.autocompletes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutocompletesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocompletes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAutocompletes<TError = unknown>(
  args: InferRequestType<typeof client.autocompletes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAutocompletesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.autocompletes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.autocompletes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsSchedulesKey() {
  return ['conversations', '/conversations/schedules', 'POST'] as const
}

export function usePostConversationsSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.schedules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.schedules.$post> },
      ) => parseResponse(client.conversations.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsSearchesKey() {
  return ['conversations', '/conversations/searches', 'POST'] as const
}

export function usePostConversationsSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.conversations.searches.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.conversations.searches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.conversations.searches.$post> },
      ) => parseResponse(client.conversations.searches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsStatusesKey(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
) {
  return ['conversations', '/conversations/statuses', args] as const
}

export function useGetConversationsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
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
        ? getGetConversationsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.conversations.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
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
        ? getGetConversationsStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.conversations.statuses.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsIDKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
) {
  return ['conversations', '/conversations/:ID', args] as const
}

export function useGetConversationsID<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
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
        ? getGetConversationsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsID<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
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
        ? getGetConversationsIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.conversations)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConversationsIDMessagesKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
) {
  return ['conversations', '/conversations/:ID/messages', args] as const
}

export function useGetConversationsIDMessages<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
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
        ? getGetConversationsIDMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsIDMessages<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
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
        ? getGetConversationsIDMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConversationsIDMessagesKey() {
  return ['conversations', '/conversations/:ID/messages', 'POST'] as const
}

export function usePostConversationsIDMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsIDMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':ID']['messages']['$post']> },
      ) => parseResponse(client.conversations[':ID'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsIDSchedulesKey() {
  return ['conversations', '/conversations/:ID/schedules', 'POST'] as const
}

export function usePostConversationsIDSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsIDSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':ID']['schedules']['$post']> },
      ) => parseResponse(client.conversations[':ID'].schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConversationsIDSearchesKey() {
  return ['conversations', '/conversations/:ID/searches', 'POST'] as const
}

export function usePostConversationsIDSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['searches']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConversationsIDSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':ID']['searches']['$post']> },
      ) => parseResponse(client.conversations[':ID'].searches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConversationsIDStatusesKey(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
) {
  return ['conversations', '/conversations/:ID/statuses', args] as const
}

export function useGetConversationsIDStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
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
        ? getGetConversationsIDStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConversationsIDStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
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
        ? getGetConversationsIDStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.conversations[':ID'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchConversationsIDStatusesKey() {
  return ['conversations', '/conversations/:ID/statuses', 'PATCH'] as const
}

export function usePatchConversationsIDStatuses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.conversations)[':ID']['statuses']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConversationsIDStatusesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.conversations)[':ID']['statuses']['$patch']> },
      ) => parseResponse(client.conversations[':ID'].statuses.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey(args: InferRequestType<typeof client.groups.$get>) {
  return ['groups', '/groups', args] as const
}

export function useGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGroups<TError = unknown>(
  args: InferRequestType<typeof client.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.groups.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGroupsKey() {
  return ['groups', '/groups', 'POST'] as const
}

export function usePostGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$post> }) =>
        parseResponse(client.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsMessagesMetadataFiltersKey() {
  return ['groups', '/groups/messages/metadata/filters', 'POST'] as const
}

export function usePostGroupsMessagesMetadataFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.groups.messages.metadata.filters.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.messages.metadata.filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsMessagesMetadataFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.groups.messages.metadata.filters.$post> },
      ) => parseResponse(client.groups.messages.metadata.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsMessagesIDKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
) {
  return ['groups', '/groups/messages/:ID', args] as const
}

export function useGetGroupsMessagesID<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
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
        ? getGetGroupsMessagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.messages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsMessagesID<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
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
        ? getGetGroupsMessagesIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.messages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteGroupsMessagesIDKey() {
  return ['groups', '/groups/messages/:ID', 'DELETE'] as const
}

export function useDeleteGroupsMessagesID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups.messages)[':ID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.messages)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsMessagesIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups.messages)[':ID']['$delete']> },
      ) => parseResponse(client.groups.messages[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsMessagesIDMetadataKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
) {
  return ['groups', '/groups/messages/:ID/metadata', args] as const
}

export function useGetGroupsMessagesIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
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
        ? getGetGroupsMessagesIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.messages[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsMessagesIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
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
        ? getGetGroupsMessagesIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.messages[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsMessagesIDMetadataKey() {
  return ['groups', '/groups/messages/:ID/metadata', 'POST'] as const
}

export function usePostGroupsMessagesIDMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.messages)[':ID']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsMessagesIDMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['$post']> },
      ) => parseResponse(client.groups.messages[':ID'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsMessagesIDMetadataCollectionsKey(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
) {
  return ['groups', '/groups/messages/:ID/metadata/collections', args] as const
}

export function useGetGroupsMessagesIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
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
        ? getGetGroupsMessagesIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups.messages[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsMessagesIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
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
        ? getGetGroupsMessagesIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.groups.messages)[':ID']['metadata']['collections']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups.messages[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsSchedulesKey() {
  return ['groups', '/groups/schedules', 'POST'] as const
}

export function usePostGroupsSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.schedules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.schedules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.schedules.$post> }) =>
        parseResponse(client.groups.schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsStatusesKey(
  args: InferRequestType<typeof client.groups.statuses.$get>,
) {
  return ['groups', '/groups/statuses', args] as const
}

export function useGetGroupsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.groups.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsStatusesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsStatuses<TError = unknown>(
  args: InferRequestType<typeof client.groups.statuses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsStatusesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.statuses.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsIDKey(args: InferRequestType<(typeof client.groups)[':ID']['$get']>) {
  return ['groups', '/groups/:ID', args] as const
}

export function useGetGroupsID<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsID<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchGroupsIDKey() {
  return ['groups', '/groups/:ID', 'PATCH'] as const
}

export function usePatchGroupsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':ID']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['$patch']> }) =>
        parseResponse(client.groups[':ID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIDMembershipsKey(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
) {
  return ['groups', '/groups/:ID/memberships', args] as const
}

export function useGetGroupsIDMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
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
        ? getGetGroupsIDMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIDMemberships<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
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
        ? getGetGroupsIDMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsIDMembershipsKey() {
  return ['groups', '/groups/:ID/memberships', 'POST'] as const
}

export function usePostGroupsIDMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsIDMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['memberships']['$post']> },
      ) => parseResponse(client.groups[':ID'].memberships.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsIDMembershipsKey() {
  return ['groups', '/groups/:ID/memberships', 'DELETE'] as const
}

export function useDeleteGroupsIDMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsIDMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['memberships']['$delete']> },
      ) => parseResponse(client.groups[':ID'].memberships.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchGroupsIDMembershipsKey() {
  return ['groups', '/groups/:ID/memberships', 'PATCH'] as const
}

export function usePatchGroupsIDMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['memberships']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGroupsIDMembershipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['memberships']['$patch']> },
      ) => parseResponse(client.groups[':ID'].memberships.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIDMessagesKey(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
) {
  return ['groups', '/groups/:ID/messages', args] as const
}

export function useGetGroupsIDMessages<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
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
        ? getGetGroupsIDMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIDMessages<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
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
        ? getGetGroupsIDMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsIDMessagesKey() {
  return ['groups', '/groups/:ID/messages', 'POST'] as const
}

export function usePostGroupsIDMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['messages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsIDMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['messages']['$post']> },
      ) => parseResponse(client.groups[':ID'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsIDSchedulesKey() {
  return ['groups', '/groups/:ID/schedules', 'POST'] as const
}

export function usePostGroupsIDSchedules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':ID']['schedules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsIDSchedulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':ID']['schedules']['$post']> },
      ) => parseResponse(client.groups[':ID'].schedules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsIDStatusesKey(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
) {
  return ['groups', '/groups/:ID/statuses', args] as const
}

export function useGetGroupsIDStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
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
        ? getGetGroupsIDStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsIDStatuses<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':ID']['statuses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
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
        ? getGetGroupsIDStatusesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups)[':ID']['statuses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':ID'].statuses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIndustriesKey() {
  return ['industries', '/industries'] as const
}

export function useGetIndustries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndustriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.industries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIndustries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIndustriesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.industries.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.industries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarkdownKey() {
  return ['markdown', '/markdown', 'POST'] as const
}

export function usePostMarkdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.markdown.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarkdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.markdown.$post> }) =>
        parseResponse(client.markdown.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarkdownEmoticonsKey() {
  return ['markdown', '/markdown/emoticons'] as const
}

export function useGetMarkdownEmoticons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarkdownEmoticonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markdown.emoticons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarkdownEmoticons<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMarkdownEmoticonsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.markdown.emoticons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.markdown.emoticons.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesMetadataFiltersKey() {
  return ['messages', '/messages/metadata/filters', 'POST'] as const
}

export function usePostMessagesMetadataFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.metadata.filters.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.metadata.filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesMetadataFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.messages.metadata.filters.$post> },
      ) => parseResponse(client.messages.metadata.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesIDKey(
  args: InferRequestType<(typeof client.messages)[':ID']['$get']>,
) {
  return ['messages', '/messages/:ID', args] as const
}

export function useGetMessagesID<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMessagesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesID<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetMessagesIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.messages)[':ID']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesIDMetadataKey(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
) {
  return ['messages', '/messages/:ID/metadata', args] as const
}

export function useGetMessagesIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
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
        ? getGetMessagesIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
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
        ? getGetMessagesIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMessagesIDMetadataKey() {
  return ['messages', '/messages/:ID/metadata', 'POST'] as const
}

export function usePostMessagesIDMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesIDMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)[':ID']['metadata']['$post']> },
      ) => parseResponse(client.messages[':ID'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMessagesIDMetadataCollectionsKey(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
) {
  return ['messages', '/messages/:ID/metadata/collections', args] as const
}

export function useGetMessagesIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
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
        ? getGetMessagesIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
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
        ? getGetMessagesIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.messages)[':ID']['metadata']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.messages[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPositionsKey() {
  return ['positions', '/positions', 'POST'] as const
}

export function usePostPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.positions.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.positions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.positions.$post> }) =>
        parseResponse(client.positions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePositionsIDKey() {
  return ['positions', '/positions/:ID', 'DELETE'] as const
}

export function useDeletePositionsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.positions)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePositionsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.positions)[':ID']['$delete']> },
      ) => parseResponse(client.positions[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPositionsIDKey() {
  return ['positions', '/positions/:ID', 'PATCH'] as const
}

export function usePatchPositionsID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.positions)[':ID']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.positions)[':ID']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPositionsIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.positions)[':ID']['$patch']> },
      ) => parseResponse(client.positions[':ID'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostUsersInvitesKey() {
  return ['users', '/users/invites', 'POST'] as const
}

export function usePostUsersInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.invites.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.invites.$post> }) =>
        parseResponse(client.users.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersMetadataFiltersKey() {
  return ['users', '/users/metadata/filters', 'POST'] as const
}

export function usePostUsersMetadataFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.metadata.filters.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.metadata.filters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersMetadataFiltersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.users.metadata.filters.$post> },
      ) => parseResponse(client.users.metadata.filters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersNearbyKey(args: InferRequestType<typeof client.users.nearby.$get>) {
  return ['users', '/users/nearby', args] as const
}

export function useGetUsersNearby<TError = unknown>(
  args: InferRequestType<typeof client.users.nearby.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersNearbyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.nearby.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersNearby<TError = unknown>(
  args: InferRequestType<typeof client.users.nearby.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersNearbyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.nearby.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.nearby.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersSearchesKey() {
  return ['users', '/users/searches', 'POST'] as const
}

export function usePostUsersSearches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.searches.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.searches.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSearchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.searches.$post> }) =>
        parseResponse(client.users.searches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIDKey(args: InferRequestType<(typeof client.users)[':ID']['$get']>) {
  return ['users', '/users/:ID', args] as const
}

export function useGetUsersID<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersID<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIDGroupsKey(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
) {
  return ['users', '/users/:ID/groups', args] as const
}

export function useGetUsersIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIDGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDGroups<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetUsersIDGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIDGroupsMessagesKey(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
) {
  return ['users', '/users/:ID/groups/messages', args] as const
}

export function useGetUsersIDGroupsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
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
        ? getGetUsersIDGroupsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].groups.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDGroupsMessages<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['groups']['messages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
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
        ? getGetUsersIDGroupsMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['groups']['messages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].groups.messages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIDMessagesKey() {
  return ['users', '/users/:ID/messages', 'POST'] as const
}

export function usePostUsersIDMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['messages']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':ID']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIDMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':ID']['messages']['$post']> },
      ) => parseResponse(client.users[':ID'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIDMetadataKey(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
) {
  return ['users', '/users/:ID/metadata', args] as const
}

export function useGetUsersIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
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
        ? getGetUsersIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
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
        ? getGetUsersIDMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsersIDMetadataKey() {
  return ['users', '/users/:ID/metadata', 'POST'] as const
}

export function usePostUsersIDMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':ID']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersIDMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':ID']['metadata']['$post']> },
      ) => parseResponse(client.users[':ID'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersIDMetadataCollectionsKey(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
) {
  return ['users', '/users/:ID/metadata/collections', args] as const
}

export function useGetUsersIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
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
        ? getGetUsersIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDMetadataCollections<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['metadata']['collections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
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
        ? getGetUsersIDMetadataCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['metadata']['collections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].metadata.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIDPositionsKey(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
) {
  return ['users', '/users/:ID/positions', args] as const
}

export function useGetUsersIDPositions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
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
        ? getGetUsersIDPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDPositions<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['positions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
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
        ? getGetUsersIDPositionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['positions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].positions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersIDSynergiesKey(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
) {
  return ['users', '/users/:ID/synergies', args] as const
}

export function useGetUsersIDSynergies<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
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
        ? getGetUsersIDSynergiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].synergies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersIDSynergies<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':ID']['synergies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
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
        ? getGetUsersIDSynergiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':ID'].synergies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersIDSynergiesKey() {
  return ['users', '/users/:ID/synergies', 'PATCH'] as const
}

export function usePatchUsersIDSynergies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':ID']['synergies']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersIDSynergiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':ID']['synergies']['$patch']> },
      ) => parseResponse(client.users[':ID'].synergies.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersTildeKey() {
  return ['users', '/users/~'] as const
}

export function useGetUsersTilde<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTildeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['~'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersTilde<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersTildeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users['~'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchUsersTildeKey() {
  return ['users', '/users/~', 'PATCH'] as const
}

export function usePatchUsersTilde<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)['~']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)['~']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUsersTildeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.users)['~']['$patch']> }) =>
        parseResponse(client.users['~'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksKey() {
  return ['webhooks', '/webhooks'] as const
}

export function useGetWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhooksIDKey() {
  return ['webhooks', '/webhooks/:ID', 'DELETE'] as const
}

export function useDeleteWebhooksID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':ID']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':ID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':ID']['$delete']> },
      ) => parseResponse(client.webhooks[':ID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

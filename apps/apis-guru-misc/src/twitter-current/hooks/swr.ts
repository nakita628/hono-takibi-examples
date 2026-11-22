import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2Key() {
  return ['2'] as const
}

export function getGet2ComplianceJobsKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
) {
  return ['2', '/2/compliance/jobs', args] as const
}

export function useGet2ComplianceJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
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
        ? getGet2ComplianceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ComplianceJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
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
        ? getGet2ComplianceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ComplianceJobsKey() {
  return ['2', '/2/compliance/jobs', 'POST'] as const
}

export function usePost2ComplianceJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ComplianceJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']> },
      ) => parseResponse(client['2'].compliance.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ComplianceJobsIdKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id', args] as const
}

export function useGet2ComplianceJobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
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
        ? getGet2ComplianceJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ComplianceJobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
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
        ? getGet2ComplianceJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2DmConversationsKey() {
  return ['2', '/2/dm_conversations', 'POST'] as const
}

export function usePost2DmConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['dm_conversations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['dm_conversations']['$post']> },
      ) => parseResponse(client['2'].dm_conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2DmConversationsWithParticipantIdDmEventsKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', args] as const
}

export function useGet2DmConversationsWithParticipantIdDmEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
        ? getGet2DmConversationsWithParticipantIdDmEventsKey(args)
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
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmConversationsWithParticipantIdDmEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
        ? getGet2DmConversationsWithParticipantIdDmEventsKey(args)
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
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2DmConversationsWithParticipantIdMessagesKey() {
  return ['2', '/2/dm_conversations/with/:participant_id/messages', 'POST'] as const
}

export function usePost2DmConversationsWithParticipantIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsWithParticipantIdMessagesKey()
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
            (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].dm_conversations.with[':participant_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2DmConversationsDmConversationIdMessagesKey() {
  return ['2', '/2/dm_conversations/:dm_conversation_id/messages', 'POST'] as const
}

export function usePost2DmConversationsDmConversationIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsDmConversationIdMessagesKey()
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
            (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].dm_conversations[':dm_conversation_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2DmConversationsIdDmEventsKey(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', args] as const
}

export function useGet2DmConversationsIdDmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
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
        ? getGet2DmConversationsIdDmEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmConversationsIdDmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
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
        ? getGet2DmConversationsIdDmEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2DmEventsKey(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_events', args] as const
}

export function useGet2DmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2DmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2DmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ListsKey() {
  return ['2', '/2/lists', 'POST'] as const
}

export function usePost2Lists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['lists']['$post']> }) =>
        parseResponse(client['2'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
) {
  return ['2', '/2/lists/:id', args] as const
}

export function useGet2ListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2ListsIdKey() {
  return ['2', '/2/lists/:id', 'PUT'] as const
}

export function usePut2ListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['$put']> },
      ) => parseResponse(client['2'].lists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ListsIdKey() {
  return ['2', '/2/lists/:id', 'DELETE'] as const
}

export function useDelete2ListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']> },
      ) => parseResponse(client['2'].lists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdFollowersKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
) {
  return ['2', '/2/lists/:id/followers', args] as const
}

export function useGet2ListsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
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
        ? getGet2ListsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
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
        ? getGet2ListsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ListsIdMembersKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
) {
  return ['2', '/2/lists/:id/members', args] as const
}

export function useGet2ListsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
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
        ? getGet2ListsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
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
        ? getGet2ListsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ListsIdMembersKey() {
  return ['2', '/2/lists/:id/members', 'POST'] as const
}

export function usePost2ListsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ListsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']> },
      ) => parseResponse(client['2'].lists[':id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ListsIdMembersUserIdKey() {
  return ['2', '/2/lists/:id/members/:user_id', 'DELETE'] as const
}

export function useDelete2ListsIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ListsIdMembersUserIdKey()
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
            (typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']
          >
        },
      ) => parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/lists/:id/tweets', args] as const
}

export function useGet2ListsIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2OpenapiJsonKey() {
  return ['2', '/2/openapi.json'] as const
}

export function useGet2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2']['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2']['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesKey(args: InferRequestType<(typeof client)['2']['spaces']['$get']>) {
  return ['2', '/2/spaces', args] as const
}

export function useGet2Spaces<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Spaces<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesByCreatorIdsKey(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
) {
  return ['2', '/2/spaces/by/creator_ids', args] as const
}

export function useGet2SpacesByCreatorIds<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
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
        ? getGet2SpacesByCreatorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.by.creator_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesByCreatorIds<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
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
        ? getGet2SpacesByCreatorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.by.creator_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesSearchKey(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
) {
  return ['2', '/2/spaces/search', args] as const
}

export function useGet2SpacesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
) {
  return ['2', '/2/spaces/:id', args] as const
}

export function useGet2SpacesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdBuyersKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
) {
  return ['2', '/2/spaces/:id/buyers', args] as const
}

export function useGet2SpacesIdBuyers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
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
        ? getGet2SpacesIdBuyersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].buyers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesIdBuyers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
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
        ? getGet2SpacesIdBuyersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].buyers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/spaces/:id/tweets', args] as const
}

export function useGet2SpacesIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
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
        ? getGet2SpacesIdTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
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
        ? getGet2SpacesIdTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsKey(args: InferRequestType<(typeof client)['2']['tweets']['$get']>) {
  return ['2', '/2/tweets', args] as const
}

export function useGet2Tweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Tweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2TweetsKey() {
  return ['2', '/2/tweets', 'POST'] as const
}

export function usePost2Tweets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2TweetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['tweets']['$post']> }) =>
        parseResponse(client['2'].tweets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsComplianceStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/tweets/compliance/stream', args] as const
}

export function useGet2TweetsComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
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
        ? getGet2TweetsComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
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
        ? getGet2TweetsComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsCountsAllKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
) {
  return ['2', '/2/tweets/counts/all', args] as const
}

export function useGet2TweetsCountsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
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
        ? getGet2TweetsCountsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsCountsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
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
        ? getGet2TweetsCountsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsCountsRecentKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
) {
  return ['2', '/2/tweets/counts/recent', args] as const
}

export function useGet2TweetsCountsRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
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
        ? getGet2TweetsCountsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsCountsRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
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
        ? getGet2TweetsCountsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/tweets/firehose/stream', args] as const
}

export function useGet2TweetsFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
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
        ? getGet2TweetsFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
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
        ? getGet2TweetsFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsLabelStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
) {
  return ['2', '/2/tweets/label/stream', args] as const
}

export function useGet2TweetsLabelStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
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
        ? getGet2TweetsLabelStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.label.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsLabelStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
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
        ? getGet2TweetsLabelStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.label.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSampleStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample/stream', args] as const
}

export function useGet2TweetsSampleStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
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
        ? getGet2TweetsSampleStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSampleStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
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
        ? getGet2TweetsSampleStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSample10StreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample10/stream', args] as const
}

export function useGet2TweetsSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
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
        ? getGet2TweetsSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
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
        ? getGet2TweetsSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchAllKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
) {
  return ['2', '/2/tweets/search/all', args] as const
}

export function useGet2TweetsSearchAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
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
        ? getGet2TweetsSearchAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
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
        ? getGet2TweetsSearchAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchRecentKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
) {
  return ['2', '/2/tweets/search/recent', args] as const
}

export function useGet2TweetsSearchRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
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
        ? getGet2TweetsSearchRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
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
        ? getGet2TweetsSearchRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
) {
  return ['2', '/2/tweets/search/stream', args] as const
}

export function useGet2TweetsSearchStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
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
        ? getGet2TweetsSearchStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
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
        ? getGet2TweetsSearchStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchStreamRulesKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
) {
  return ['2', '/2/tweets/search/stream/rules', args] as const
}

export function useGet2TweetsSearchStreamRules<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
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
        ? getGet2TweetsSearchStreamRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchStreamRules<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
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
        ? getGet2TweetsSearchStreamRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2TweetsSearchStreamRulesKey() {
  return ['2', '/2/tweets/search/stream/rules', 'POST'] as const
}

export function usePost2TweetsSearchStreamRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2TweetsSearchStreamRulesKey()
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
            (typeof client)['2']['tweets']['search']['stream']['rules']['$post']
          >
        },
      ) => parseResponse(client['2'].tweets.search.stream.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsIdKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
) {
  return ['2', '/2/tweets/:id', args] as const
}

export function useGet2TweetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2TweetsIdKey() {
  return ['2', '/2/tweets/:id', 'DELETE'] as const
}

export function useDelete2TweetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2TweetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']> },
      ) => parseResponse(client['2'].tweets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsIdLikingUsersKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
) {
  return ['2', '/2/tweets/:id/liking_users', args] as const
}

export function useGet2TweetsIdLikingUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
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
        ? getGet2TweetsIdLikingUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].liking_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdLikingUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
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
        ? getGet2TweetsIdLikingUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].liking_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsIdQuoteTweetsKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/quote_tweets', args] as const
}

export function useGet2TweetsIdQuoteTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
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
        ? getGet2TweetsIdQuoteTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdQuoteTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
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
        ? getGet2TweetsIdQuoteTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsIdRetweetedByKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweeted_by', args] as const
}

export function useGet2TweetsIdRetweetedBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
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
        ? getGet2TweetsIdRetweetedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdRetweetedBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
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
        ? getGet2TweetsIdRetweetedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2TweetsTweetIdHiddenKey() {
  return ['2', '/2/tweets/:tweet_id/hidden', 'PUT'] as const
}

export function usePut2TweetsTweetIdHidden<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2TweetsTweetIdHiddenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']> },
      ) => parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersKey(args: InferRequestType<(typeof client)['2']['users']['$get']>) {
  return ['2', '/2/users', args] as const
}

export function useGet2Users<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Users<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersByKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
) {
  return ['2', '/2/users/by', args] as const
}

export function useGet2UsersBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersByKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersByKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersByUsernameUsernameKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
) {
  return ['2', '/2/users/by/username/:username', args] as const
}

export function useGet2UsersByUsernameUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
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
        ? getGet2UsersByUsernameUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users.by.username[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersByUsernameUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
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
        ? getGet2UsersByUsernameUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users.by.username[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersComplianceStreamKey(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/users/compliance/stream', args] as const
}

export function useGet2UsersComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
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
        ? getGet2UsersComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
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
        ? getGet2UsersComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersMeKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
) {
  return ['2', '/2/users/me', args] as const
}

export function useGet2UsersMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
) {
  return ['2', '/2/users/:id', args] as const
}

export function useGet2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdBlockingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
) {
  return ['2', '/2/users/:id/blocking', args] as const
}

export function useGet2UsersIdBlocking<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
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
        ? getGet2UsersIdBlockingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].blocking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBlocking<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
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
        ? getGet2UsersIdBlockingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].blocking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBlockingKey() {
  return ['2', '/2/users/:id/blocking', 'POST'] as const
}

export function usePost2UsersIdBlocking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBlockingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']> },
      ) => parseResponse(client['2'].users[':id'].blocking.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBookmarksKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks', args] as const
}

export function useGet2UsersIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
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
        ? getGet2UsersIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
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
        ? getGet2UsersIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBookmarksKey() {
  return ['2', '/2/users/:id/bookmarks', 'POST'] as const
}

export function usePost2UsersIdBookmarks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBookmarksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']> },
      ) => parseResponse(client['2'].users[':id'].bookmarks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdBookmarksTweetIdKey() {
  return ['2', '/2/users/:id/bookmarks/:tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdBookmarksTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdBookmarksTweetIdKey()
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
            (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
          >
        },
      ) =>
        parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdFollowedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
) {
  return ['2', '/2/users/:id/followed_lists', args] as const
}

export function useGet2UsersIdFollowedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
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
        ? getGet2UsersIdFollowedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followed_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
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
        ? getGet2UsersIdFollowedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followed_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdFollowedListsKey() {
  return ['2', '/2/users/:id/followed_lists', 'POST'] as const
}

export function usePost2UsersIdFollowedLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdFollowedListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>
        },
      ) => parseResponse(client['2'].users[':id'].followed_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdFollowedListsListIdKey() {
  return ['2', '/2/users/:id/followed_lists/:list_id', 'DELETE'] as const
}

export function useDelete2UsersIdFollowedListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdFollowedListsListIdKey()
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
            (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].followed_lists[':list_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdFollowersKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
) {
  return ['2', '/2/users/:id/followers', args] as const
}

export function useGet2UsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
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
        ? getGet2UsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
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
        ? getGet2UsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdFollowingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
) {
  return ['2', '/2/users/:id/following', args] as const
}

export function useGet2UsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
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
        ? getGet2UsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
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
        ? getGet2UsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdFollowingKey() {
  return ['2', '/2/users/:id/following', 'POST'] as const
}

export function usePost2UsersIdFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']> },
      ) => parseResponse(client['2'].users[':id'].following.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdLikedTweetsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
) {
  return ['2', '/2/users/:id/liked_tweets', args] as const
}

export function useGet2UsersIdLikedTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
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
        ? getGet2UsersIdLikedTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].liked_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdLikedTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
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
        ? getGet2UsersIdLikedTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].liked_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdLikesKey() {
  return ['2', '/2/users/:id/likes', 'POST'] as const
}

export function usePost2UsersIdLikes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdLikesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']> },
      ) => parseResponse(client['2'].users[':id'].likes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdLikesTweetIdKey() {
  return ['2', '/2/users/:id/likes/:tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdLikesTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdLikesTweetIdKey()
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
            (typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']
          >
        },
      ) => parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdListMembershipsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
) {
  return ['2', '/2/users/:id/list_memberships', args] as const
}

export function useGet2UsersIdListMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
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
        ? getGet2UsersIdListMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].list_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdListMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
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
        ? getGet2UsersIdListMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].list_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdMentionsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
) {
  return ['2', '/2/users/:id/mentions', args] as const
}

export function useGet2UsersIdMentions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
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
        ? getGet2UsersIdMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].mentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdMentions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
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
        ? getGet2UsersIdMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].mentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdMutingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
) {
  return ['2', '/2/users/:id/muting', args] as const
}

export function useGet2UsersIdMuting<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdMutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].muting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdMuting<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdMutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].muting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdMutingKey() {
  return ['2', '/2/users/:id/muting', 'POST'] as const
}

export function usePost2UsersIdMuting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdMutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']> },
      ) => parseResponse(client['2'].users[':id'].muting.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdOwnedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/owned_lists', args] as const
}

export function useGet2UsersIdOwnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
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
        ? getGet2UsersIdOwnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].owned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdOwnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
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
        ? getGet2UsersIdOwnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].owned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdPinnedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/pinned_lists', args] as const
}

export function useGet2UsersIdPinnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
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
        ? getGet2UsersIdPinnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].pinned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdPinnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
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
        ? getGet2UsersIdPinnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].pinned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdPinnedListsKey() {
  return ['2', '/2/users/:id/pinned_lists', 'POST'] as const
}

export function usePost2UsersIdPinnedLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdPinnedListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']> },
      ) => parseResponse(client['2'].users[':id'].pinned_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdPinnedListsListIdKey() {
  return ['2', '/2/users/:id/pinned_lists/:list_id', 'DELETE'] as const
}

export function useDelete2UsersIdPinnedListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdPinnedListsListIdKey()
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
            (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].pinned_lists[':list_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2UsersIdRetweetsKey() {
  return ['2', '/2/users/:id/retweets', 'POST'] as const
}

export function usePost2UsersIdRetweets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdRetweetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']> },
      ) => parseResponse(client['2'].users[':id'].retweets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdRetweetsSourceTweetIdKey() {
  return ['2', '/2/users/:id/retweets/:source_tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdRetweetsSourceTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdRetweetsSourceTweetIdKey()
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
            (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].retweets[':source_tweet_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdTimelinesReverseChronologicalKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', args] as const
}

export function useGet2UsersIdTimelinesReverseChronological<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
        ? getGet2UsersIdTimelinesReverseChronologicalKey(args)
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
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
          client['2'].users[':id'].timelines.reverse_chronological.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdTimelinesReverseChronological<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
        ? getGet2UsersIdTimelinesReverseChronologicalKey(args)
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
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
          client['2'].users[':id'].timelines.reverse_chronological.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/users/:id/tweets', args] as const
}

export function useGet2UsersIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/blocking/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdBlockingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdBlockingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdFollowingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/following/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdFollowingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdFollowingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].following[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdMutingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/muting/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdMutingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdMutingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

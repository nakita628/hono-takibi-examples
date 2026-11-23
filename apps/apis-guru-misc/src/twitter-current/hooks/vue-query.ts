import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2Key() {
  return ['2'] as const
}

export function get2ComplianceJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
) {
  return ['2', '/2/compliance/jobs', toValue(args)] as const
}

export function get2ComplianceJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ComplianceJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].compliance.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ComplianceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ComplianceJobsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ComplianceJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].compliance.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2ComplianceJobsMutationKey() {
  return ['2', '/2/compliance/jobs', 'POST'] as const
}

export function getPost2ComplianceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ComplianceJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>) {
      return parseResponse(client['2'].compliance.jobs.$post(args, options))
    },
  })
}

export function usePost2ComplianceJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ComplianceJobsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ComplianceJobsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
) {
  return ['2', '/2/compliance/jobs/:id', toValue(args)] as const
}

export function get2ComplianceJobsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ComplianceJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ComplianceJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ComplianceJobsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ComplianceJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].compliance.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2DmConversationsMutationKey() {
  return ['2', '/2/dm_conversations', 'POST'] as const
}

export function getPost2DmConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['dm_conversations']['$post']>) {
      return parseResponse(client['2'].dm_conversations.$post(args, options))
    },
  })
}

export function usePost2DmConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2DmConversationsWithParticipantIdDmEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
    >
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', toValue(args)] as const
}

export function get2DmConversationsWithParticipantIdDmEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmConversationsWithParticipantIdDmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmConversationsWithParticipantIdDmEvents<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
                    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
                    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
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
              (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmConversationsWithParticipantIdDmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2DmConversationsWithParticipantIdMessagesMutationKey() {
  return ['2', '/2/dm_conversations/with/:participant_id/messages', 'POST'] as const
}

export function getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsWithParticipantIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].messages.$post(args, options),
      )
    },
  })
}

export function usePost2DmConversationsWithParticipantIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost2DmConversationsDmConversationIdMessagesMutationKey() {
  return ['2', '/2/dm_conversations/:dm_conversation_id/messages', 'POST'] as const
}

export function getPost2DmConversationsDmConversationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsDmConversationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].dm_conversations[':dm_conversation_id'].messages.$post(args, options),
      )
    },
  })
}

export function usePost2DmConversationsDmConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsDmConversationIdMessagesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2DmConversationsIdDmEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', toValue(args)] as const
}

export function get2DmConversationsIdDmEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmConversationsIdDmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_conversations[':id'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmConversationsIdDmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
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
                  ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmConversationsIdDmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_conversations[':id'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2DmEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
) {
  return ['2', '/2/dm_events', toValue(args)] as const
}

export function get2DmEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
            >
          >,
          ReturnType<typeof get2DmEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2ListsMutationKey() {
  return ['2', '/2/lists', 'POST'] as const
}

export function getPost2ListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists']['$post']>) {
      return parseResponse(client['2'].lists.$post(args, options))
    },
  })
}

export function usePost2Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
) {
  return ['2', '/2/lists/:id', toValue(args)] as const
}

export function get2ListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut2ListsIdMutationKey() {
  return ['2', '/2/lists/:id', 'PUT'] as const
}

export function getPut2ListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists'][':id']['$put']>) {
      return parseResponse(client['2'].lists[':id'].$put(args, options))
    },
  })
}

export function usePut2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2ListsIdMutationKey() {
  return ['2', '/2/lists/:id', 'DELETE'] as const
}

export function getDelete2ListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>) {
      return parseResponse(client['2'].lists[':id'].$delete(args, options))
    },
  })
}

export function useDelete2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ListsIdFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
) {
  return ['2', '/2/lists/:id/followers', toValue(args)] as const
}

export function get2ListsIdFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ListsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
) {
  return ['2', '/2/lists/:id/members', toValue(args)] as const
}

export function get2ListsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2ListsIdMembersMutationKey() {
  return ['2', '/2/lists/:id/members', 'POST'] as const
}

export function getPost2ListsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ListsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
    ) {
      return parseResponse(client['2'].lists[':id'].members.$post(args, options))
    },
  })
}

export function usePost2ListsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ListsIdMembersMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2ListsIdMembersUserIdMutationKey() {
  return ['2', '/2/lists/:id/members/:user_id', 'DELETE'] as const
}

export function getDelete2ListsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ListsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(args, options))
    },
  })
}

export function useDelete2ListsIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ListsIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ListsIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/lists/:id/tweets', toValue(args)] as const
}

export function get2ListsIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2OpenapiJsonQueryKey() {
  return ['2', '/2/openapi.json'] as const
}

export function get2OpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2OpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2']['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2OpenapiJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2OpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2OpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2']['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
) {
  return ['2', '/2/spaces', toValue(args)] as const
}

export function get2SpacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Spaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
            >
          >,
          ReturnType<typeof get2SpacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesByCreatorIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
) {
  return ['2', '/2/spaces/by/creator_ids', toValue(args)] as const
}

export function get2SpacesByCreatorIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesByCreatorIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.by.creator_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesByCreatorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesByCreatorIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.by.creator_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
) {
  return ['2', '/2/spaces/search', toValue(args)] as const
}

export function get2SpacesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
) {
  return ['2', '/2/spaces/:id', toValue(args)] as const
}

export function get2SpacesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdBuyersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
) {
  return ['2', '/2/spaces/:id/buyers', toValue(args)] as const
}

export function get2SpacesIdBuyersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdBuyersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].buyers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesIdBuyers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdBuyersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdBuyersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdBuyersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].buyers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/spaces/:id/tweets', toValue(args)] as const
}

export function get2SpacesIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
) {
  return ['2', '/2/tweets', toValue(args)] as const
}

export function get2TweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Tweets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
            >
          >,
          ReturnType<typeof get2TweetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2TweetsMutationKey() {
  return ['2', '/2/tweets', 'POST'] as const
}

export function getPost2TweetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2TweetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['tweets']['$post']>) {
      return parseResponse(client['2'].tweets.$post(args, options))
    },
  })
}

export function usePost2Tweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['tweets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2TweetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2TweetsComplianceStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/compliance/stream', toValue(args)] as const
}

export function get2TweetsComplianceStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsComplianceStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.compliance.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsComplianceStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsComplianceStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsComplianceStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.compliance.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsCountsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
) {
  return ['2', '/2/tweets/counts/all', toValue(args)] as const
}

export function get2TweetsCountsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsCountsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.counts.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsCountsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsCountsAllQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsCountsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.counts.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsCountsRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
) {
  return ['2', '/2/tweets/counts/recent', toValue(args)] as const
}

export function get2TweetsCountsRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsCountsRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.counts.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsCountsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsCountsRecentQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsCountsRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.counts.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream', toValue(args)] as const
}

export function get2TweetsFirehoseStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsLabelStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/label/stream', toValue(args)] as const
}

export function get2TweetsLabelStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsLabelStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.label.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsLabelStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsLabelStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsLabelStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsLabelStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.label.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSampleStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/sample/stream', toValue(args)] as const
}

export function get2TweetsSampleStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSampleStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.sample.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSampleStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSampleStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSampleStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSampleStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.sample.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSample10StreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/sample10/stream', toValue(args)] as const
}

export function get2TweetsSample10StreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSample10StreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.sample10.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSample10StreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSample10StreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSample10StreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.sample10.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
) {
  return ['2', '/2/tweets/search/all', toValue(args)] as const
}

export function get2TweetsSearchAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchAllQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/recent', toValue(args)] as const
}

export function get2TweetsSearchRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchRecentQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/stream', toValue(args)] as const
}

export function get2TweetsSearchStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchStreamRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/stream/rules', toValue(args)] as const
}

export function get2TweetsSearchStreamRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchStreamRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchStreamRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
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
                  ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchStreamRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.stream.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2TweetsSearchStreamRulesMutationKey() {
  return ['2', '/2/tweets/search/stream/rules', 'POST'] as const
}

export function getPost2TweetsSearchStreamRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2TweetsSearchStreamRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
    ) {
      return parseResponse(client['2'].tweets.search.stream.rules.$post(args, options))
    },
  })
}

export function usePost2TweetsSearchStreamRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2TweetsSearchStreamRulesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2TweetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
) {
  return ['2', '/2/tweets/:id', toValue(args)] as const
}

export function get2TweetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete2TweetsIdMutationKey() {
  return ['2', '/2/tweets/:id', 'DELETE'] as const
}

export function getDelete2TweetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2TweetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>) {
      return parseResponse(client['2'].tweets[':id'].$delete(args, options))
    },
  })
}

export function useDelete2TweetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2TweetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2TweetsIdLikingUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/liking_users', toValue(args)] as const
}

export function get2TweetsIdLikingUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdLikingUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].liking_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdLikingUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdLikingUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].liking_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsIdQuoteTweetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/quote_tweets', toValue(args)] as const
}

export function get2TweetsIdQuoteTweetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdQuoteTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].quote_tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdQuoteTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdQuoteTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].quote_tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsIdRetweetedByQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/retweeted_by', toValue(args)] as const
}

export function get2TweetsIdRetweetedByQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdRetweetedByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].retweeted_by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdRetweetedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdRetweetedByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].retweeted_by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPut2TweetsTweetIdHiddenMutationKey() {
  return ['2', '/2/tweets/:tweet_id/hidden', 'PUT'] as const
}

export function getPut2TweetsTweetIdHiddenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2TweetsTweetIdHiddenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
    ) {
      return parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(args, options))
    },
  })
}

export function usePut2TweetsTweetIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2TweetsTweetIdHiddenMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
) {
  return ['2', '/2/users', toValue(args)] as const
}

export function get2UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersByQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
) {
  return ['2', '/2/users/by', toValue(args)] as const
}

export function get2UsersByQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersByQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersByUsernameUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
) {
  return ['2', '/2/users/by/username/:username', toValue(args)] as const
}

export function get2UsersByUsernameUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersByUsernameUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.by.username[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersByUsernameUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
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
                  ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersByUsernameUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.by.username[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersComplianceStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
) {
  return ['2', '/2/users/compliance/stream', toValue(args)] as const
}

export function get2UsersComplianceStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersComplianceStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.compliance.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersComplianceStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersComplianceStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersComplianceStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.compliance.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
) {
  return ['2', '/2/users/me', toValue(args)] as const
}

export function get2UsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
) {
  return ['2', '/2/users/:id', toValue(args)] as const
}

export function get2UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdBlockingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
) {
  return ['2', '/2/users/:id/blocking', toValue(args)] as const
}

export function get2UsersIdBlockingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBlockingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].blocking.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBlocking<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdBlockingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBlockingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBlockingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].blocking.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdBlockingMutationKey() {
  return ['2', '/2/users/:id/blocking', 'POST'] as const
}

export function getPost2UsersIdBlockingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBlockingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].blocking.$post(args, options))
    },
  })
}

export function usePost2UsersIdBlocking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBlockingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdBookmarksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
) {
  return ['2', '/2/users/:id/bookmarks', toValue(args)] as const
}

export function get2UsersIdBookmarksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdBookmarksQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdBookmarksMutationKey() {
  return ['2', '/2/users/:id/bookmarks', 'POST'] as const
}

export function getPost2UsersIdBookmarksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBookmarksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].bookmarks.$post(args, options))
    },
  })
}

export function usePost2UsersIdBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBookmarksMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersIdBookmarksTweetIdMutationKey() {
  return ['2', '/2/users/:id/bookmarks/:tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdBookmarksTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdBookmarksTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(args, options))
    },
  })
}

export function useDelete2UsersIdBookmarksTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdBookmarksTweetIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdFollowedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/followed_lists', toValue(args)] as const
}

export function get2UsersIdFollowedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].followed_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].followed_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdFollowedListsMutationKey() {
  return ['2', '/2/users/:id/followed_lists', 'POST'] as const
}

export function getPost2UsersIdFollowedListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdFollowedListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].followed_lists.$post(args, options))
    },
  })
}

export function usePost2UsersIdFollowedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdFollowedListsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersIdFollowedListsListIdMutationKey() {
  return ['2', '/2/users/:id/followed_lists/:list_id', 'DELETE'] as const
}

export function getDelete2UsersIdFollowedListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdFollowedListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].followed_lists[':list_id'].$delete(args, options),
      )
    },
  })
}

export function useDelete2UsersIdFollowedListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdFollowedListsListIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
) {
  return ['2', '/2/users/:id/followers', toValue(args)] as const
}

export function get2UsersIdFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdFollowingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
) {
  return ['2', '/2/users/:id/following', toValue(args)] as const
}

export function get2UsersIdFollowingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdFollowingMutationKey() {
  return ['2', '/2/users/:id/following', 'POST'] as const
}

export function getPost2UsersIdFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdFollowingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].following.$post(args, options))
    },
  })
}

export function usePost2UsersIdFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdFollowingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdLikedTweetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
) {
  return ['2', '/2/users/:id/liked_tweets', toValue(args)] as const
}

export function get2UsersIdLikedTweetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdLikedTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].liked_tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdLikedTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdLikedTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].liked_tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdLikesMutationKey() {
  return ['2', '/2/users/:id/likes', 'POST'] as const
}

export function getPost2UsersIdLikesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdLikesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].likes.$post(args, options))
    },
  })
}

export function usePost2UsersIdLikes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdLikesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersIdLikesTweetIdMutationKey() {
  return ['2', '/2/users/:id/likes/:tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdLikesTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdLikesTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
    ) {
      return parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(args, options))
    },
  })
}

export function useDelete2UsersIdLikesTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdLikesTweetIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdListMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
) {
  return ['2', '/2/users/:id/list_memberships', toValue(args)] as const
}

export function get2UsersIdListMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdListMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].list_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdListMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
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
                  ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdListMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdListMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdListMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].list_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdMentionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
) {
  return ['2', '/2/users/:id/mentions', toValue(args)] as const
}

export function get2UsersIdMentionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdMentionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].mentions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdMentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdMentionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMentionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdMentionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].mentions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdMutingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
) {
  return ['2', '/2/users/:id/muting', toValue(args)] as const
}

export function get2UsersIdMutingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdMutingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].muting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdMuting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdMutingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMutingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdMutingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].muting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdMutingMutationKey() {
  return ['2', '/2/users/:id/muting', 'POST'] as const
}

export function getPost2UsersIdMutingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdMutingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].muting.$post(args, options))
    },
  })
}

export function usePost2UsersIdMuting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdMutingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdOwnedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/owned_lists', toValue(args)] as const
}

export function get2UsersIdOwnedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdOwnedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].owned_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdOwnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdOwnedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdOwnedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdOwnedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].owned_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdPinnedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/pinned_lists', toValue(args)] as const
}

export function get2UsersIdPinnedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdPinnedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].pinned_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdPinnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdPinnedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdPinnedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdPinnedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].pinned_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPost2UsersIdPinnedListsMutationKey() {
  return ['2', '/2/users/:id/pinned_lists', 'POST'] as const
}

export function getPost2UsersIdPinnedListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdPinnedListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].pinned_lists.$post(args, options))
    },
  })
}

export function usePost2UsersIdPinnedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdPinnedListsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersIdPinnedListsListIdMutationKey() {
  return ['2', '/2/users/:id/pinned_lists/:list_id', 'DELETE'] as const
}

export function getDelete2UsersIdPinnedListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdPinnedListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].users[':id'].pinned_lists[':list_id'].$delete(args, options))
    },
  })
}

export function useDelete2UsersIdPinnedListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdPinnedListsListIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPost2UsersIdRetweetsMutationKey() {
  return ['2', '/2/users/:id/retweets', 'POST'] as const
}

export function getPost2UsersIdRetweetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdRetweetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].retweets.$post(args, options))
    },
  })
}

export function usePost2UsersIdRetweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdRetweetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersIdRetweetsSourceTweetIdMutationKey() {
  return ['2', '/2/users/:id/retweets/:source_tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdRetweetsSourceTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].retweets[':source_tweet_id'].$delete(args, options),
      )
    },
  })
}

export function useDelete2UsersIdRetweetsSourceTweetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2UsersIdTimelinesReverseChronologicalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
    >
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', toValue(args)] as const
}

export function get2UsersIdTimelinesReverseChronologicalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdTimelinesReverseChronologicalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].timelines.reverse_chronological.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdTimelinesReverseChronological<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
                    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
                    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
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
              (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdTimelinesReverseChronologicalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].timelines.reverse_chronological.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/users/:id/tweets', toValue(args)] as const
}

export function get2UsersIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/blocking/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdBlockingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function useDelete2UsersSourceUserIdBlockingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersSourceUserIdFollowingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/following/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdFollowingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].following[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function useDelete2UsersSourceUserIdFollowingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDelete2UsersSourceUserIdMutingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/muting/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdMutingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function useDelete2UsersSourceUserIdMutingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

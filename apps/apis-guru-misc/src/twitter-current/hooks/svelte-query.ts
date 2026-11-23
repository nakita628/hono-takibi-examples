import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2Key() {
  return ['2'] as const
}

export function get2ComplianceJobsQueryKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
) {
  return ['2', '/2/compliance/jobs', args] as const
}

export function get2ComplianceJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2ComplianceJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].compliance.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2ComplianceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ComplianceJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2ComplianceJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2ComplianceJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2ComplianceJobsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id', args] as const
}

export function get2ComplianceJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2ComplianceJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2ComplianceJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ComplianceJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2DmConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2DmConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2DmConversationsWithParticipantIdDmEventsQueryKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', args] as const
}

export function get2DmConversationsWithParticipantIdDmEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2DmConversationsWithParticipantIdDmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2DmConversationsWithParticipantIdDmEvents<
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
  args: () => InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2DmConversationsWithParticipantIdDmEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPost2DmConversationsWithParticipantIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPost2DmConversationsDmConversationIdMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2DmConversationsDmConversationIdMessagesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2DmConversationsIdDmEventsQueryKey(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', args] as const
}

export function get2DmConversationsIdDmEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2DmConversationsIdDmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_conversations[':id'].dm_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2DmConversationsIdDmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2DmConversationsIdDmEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2DmEventsQueryKey(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_events', args] as const
}

export function get2DmEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsQueryKey>
  >({
    queryKey: get2DmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2DmEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2DmEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2DmEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2ListsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
) {
  return ['2', '/2/lists/:id', args] as const
}

export function get2ListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdQueryKey>
  >({
    queryKey: get2ListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPut2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2ListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2ListsIdFollowersQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
) {
  return ['2', '/2/lists/:id/followers', args] as const
}

export function get2ListsIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2ListsIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2ListsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2ListsIdMembersQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
) {
  return ['2', '/2/lists/:id/members', args] as const
}

export function get2ListsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2ListsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2ListsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2ListsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2ListsIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2ListsIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2ListsIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2ListsIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/lists/:id/tweets', args] as const
}

export function get2ListsIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2ListsIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2ListsIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2OpenapiJsonQueryKey() {
  return ['2', '/2/openapi.json'] as const
}

export function get2OpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2OpenapiJsonQueryKey>
  >({
    queryKey: get2OpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2']['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2OpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2OpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesQueryKey(args: InferRequestType<(typeof client)['2']['spaces']['$get']>) {
  return ['2', '/2/spaces', args] as const
}

export function get2SpacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['spaces']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesQueryKey>
  >({
    queryKey: get2SpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2Spaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesByCreatorIdsQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
) {
  return ['2', '/2/spaces/by/creator_ids', args] as const
}

export function get2SpacesByCreatorIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2SpacesByCreatorIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.by.creator_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2SpacesByCreatorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesByCreatorIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesSearchQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
) {
  return ['2', '/2/spaces/search', args] as const
}

export function get2SpacesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesSearchQueryKey>
  >({
    queryKey: get2SpacesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2SpacesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesIdQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
) {
  return ['2', '/2/spaces/:id', args] as const
}

export function get2SpacesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdQueryKey>
  >({
    queryKey: get2SpacesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2SpacesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesIdBuyersQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
) {
  return ['2', '/2/spaces/:id/buyers', args] as const
}

export function get2SpacesIdBuyersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2SpacesIdBuyersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].buyers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2SpacesIdBuyers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdBuyersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2SpacesIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/spaces/:id/tweets', args] as const
}

export function get2SpacesIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2SpacesIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2SpacesIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsQueryKey(args: InferRequestType<(typeof client)['2']['tweets']['$get']>) {
  return ['2', '/2/tweets', args] as const
}

export function get2TweetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['tweets']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsQueryKey>
  >({
    queryKey: get2TweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2Tweets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2Tweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['tweets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2TweetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2TweetsComplianceStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/tweets/compliance/stream', args] as const
}

export function get2TweetsComplianceStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsComplianceStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.compliance.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsComplianceStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2TweetsCountsAllQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
) {
  return ['2', '/2/tweets/counts/all', args] as const
}

export function get2TweetsCountsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsCountsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.counts.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsCountsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsCountsAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsCountsRecentQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
) {
  return ['2', '/2/tweets/counts/recent', args] as const
}

export function get2TweetsCountsRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsCountsRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.counts.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsCountsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsCountsRecentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsFirehoseStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/tweets/firehose/stream', args] as const
}

export function get2TweetsFirehoseStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsFirehoseStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsFirehoseStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2TweetsLabelStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
) {
  return ['2', '/2/tweets/label/stream', args] as const
}

export function get2TweetsLabelStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsLabelStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.label.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsLabelStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsLabelStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsSampleStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample/stream', args] as const
}

export function get2TweetsSampleStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSampleStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.sample.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSampleStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSampleStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsSample10StreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample10/stream', args] as const
}

export function get2TweetsSample10StreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSample10StreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.sample10.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsSample10StreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2TweetsSearchAllQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
) {
  return ['2', '/2/tweets/search/all', args] as const
}

export function get2TweetsSearchAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSearchAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSearchAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsSearchRecentQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
) {
  return ['2', '/2/tweets/search/recent', args] as const
}

export function get2TweetsSearchRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSearchRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSearchRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchRecentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsSearchStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
) {
  return ['2', '/2/tweets/search/stream', args] as const
}

export function get2TweetsSearchStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSearchStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSearchStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2TweetsSearchStreamRulesQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
) {
  return ['2', '/2/tweets/search/stream/rules', args] as const
}

export function get2TweetsSearchStreamRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsSearchStreamRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsSearchStreamRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsSearchStreamRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPost2TweetsSearchStreamRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2TweetsSearchStreamRulesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2TweetsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
) {
  return ['2', '/2/tweets/:id', args] as const
}

export function get2TweetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQueryKey>
  >({
    queryKey: get2TweetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2TweetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDelete2TweetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2TweetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2TweetsIdLikingUsersQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
) {
  return ['2', '/2/tweets/:id/liking_users', args] as const
}

export function get2TweetsIdLikingUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsIdLikingUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].liking_users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsIdLikingUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsIdLikingUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2TweetsIdQuoteTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/quote_tweets', args] as const
}

export function get2TweetsIdQuoteTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsIdQuoteTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].quote_tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsIdQuoteTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsIdQuoteTweetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2TweetsIdRetweetedByQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweeted_by', args] as const
}

export function get2TweetsIdRetweetedByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2TweetsIdRetweetedByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].retweeted_by.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2TweetsIdRetweetedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2TweetsIdRetweetedByQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPut2TweetsTweetIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut2TweetsTweetIdHiddenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersQueryKey(args: InferRequestType<(typeof client)['2']['users']['$get']>) {
  return ['2', '/2/users', args] as const
}

export function get2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['users']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersQueryKey>
  >({
    queryKey: get2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersByQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
) {
  return ['2', '/2/users/by', args] as const
}

export function get2UsersByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByQueryKey>
  >({
    queryKey: get2UsersByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.by.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2UsersBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersByQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersByUsernameUsernameQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
) {
  return ['2', '/2/users/by/username/:username', args] as const
}

export function get2UsersByUsernameUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersByUsernameUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.by.username[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersByUsernameUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users']['by']['username'][':username']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2UsersByUsernameUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2UsersComplianceStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/users/compliance/stream', args] as const
}

export function get2UsersComplianceStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersComplianceStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.compliance.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2UsersComplianceStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2UsersMeQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
) {
  return ['2', '/2/users/me', args] as const
}

export function get2UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeQueryKey>
  >({
    queryKey: get2UsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersIdQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
) {
  return ['2', '/2/users/:id', args] as const
}

export function get2UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdQueryKey>
  >({
    queryKey: get2UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersIdBlockingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
) {
  return ['2', '/2/users/:id/blocking', args] as const
}

export function get2UsersIdBlockingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdBlockingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].blocking.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdBlocking<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdBlockingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdBlocking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdBlockingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdBookmarksQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks', args] as const
}

export function get2UsersIdBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdBookmarksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdBookmarksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersIdBookmarksTweetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersIdBookmarksTweetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdFollowedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
) {
  return ['2', '/2/users/:id/followed_lists', args] as const
}

export function get2UsersIdFollowedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdFollowedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].followed_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdFollowedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2UsersIdFollowedListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPost2UsersIdFollowedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdFollowedListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersIdFollowedListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersIdFollowedListsListIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdFollowersQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
) {
  return ['2', '/2/users/:id/followers', args] as const
}

export function get2UsersIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersIdFollowingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
) {
  return ['2', '/2/users/:id/following', args] as const
}

export function get2UsersIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdFollowingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdLikedTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
) {
  return ['2', '/2/users/:id/liked_tweets', args] as const
}

export function get2UsersIdLikedTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdLikedTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].liked_tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdLikedTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdLikedTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdLikes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdLikesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersIdLikesTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersIdLikesTweetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdListMembershipsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
) {
  return ['2', '/2/users/:id/list_memberships', args] as const
}

export function get2UsersIdListMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdListMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].list_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdListMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2UsersIdListMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2UsersIdMentionsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
) {
  return ['2', '/2/users/:id/mentions', args] as const
}

export function get2UsersIdMentionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdMentionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].mentions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdMentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdMentionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersIdMutingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
) {
  return ['2', '/2/users/:id/muting', args] as const
}

export function get2UsersIdMutingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdMutingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].muting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdMuting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdMutingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdMuting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdMutingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdOwnedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/owned_lists', args] as const
}

export function get2UsersIdOwnedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdOwnedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].owned_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdOwnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdOwnedListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function get2UsersIdPinnedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/pinned_lists', args] as const
}

export function get2UsersIdPinnedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdPinnedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].pinned_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdPinnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdPinnedListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPost2UsersIdPinnedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdPinnedListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersIdPinnedListsListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersIdPinnedListsListIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPost2UsersIdRetweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost2UsersIdRetweetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersIdRetweetsSourceTweetId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get2UsersIdTimelinesReverseChronologicalQueryKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', args] as const
}

export function get2UsersIdTimelinesReverseChronologicalQueryOptions<
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
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdTimelinesReverseChronologicalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].timelines.reverse_chronological.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdTimelinesReverseChronological<
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
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get2UsersIdTimelinesReverseChronologicalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get2UsersIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/users/:id/tweets', args] as const
}

export function get2UsersIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: get2UsersIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create2UsersIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDelete2UsersSourceUserIdBlockingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersSourceUserIdFollowingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDelete2UsersSourceUserIdMutingTargetUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

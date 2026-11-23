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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2TriggerWorkflowUrlMutationKey() {
  return ['v2', '/v2/trigger/:workflowUrl', 'POST'] as const
}

export function getPostV2TriggerWorkflowUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.trigger)[':workflowUrl']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TriggerWorkflowUrlMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']>) {
      return parseResponse(client.v2.trigger[':workflowUrl'].$post(args, options))
    },
  })
}

export function usePostV2TriggerWorkflowUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.trigger)[':workflowUrl']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']>,
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
  const mutationDefaults = getPostV2TriggerWorkflowUrlMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2BatchTriggerMutationKey() {
  return ['v2', '/v2/batch/trigger', 'POST'] as const
}

export function getPostV2BatchTriggerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.trigger.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.batch.trigger.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BatchTriggerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.batch.trigger.$post>) {
      return parseResponse(client.v2.batch.trigger.$post(args, options))
    },
  })
}

export function usePostV2BatchTrigger<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.trigger.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.batch.trigger.$post>,
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
  const mutationDefaults = getPostV2BatchTriggerMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2WorkflowsRunsWorkflowRunIdMutationKey() {
  return ['v2', '/v2/workflows/runs/:workflowRunId', 'DELETE'] as const
}

export function getDeleteV2WorkflowsRunsWorkflowRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsRunsWorkflowRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>,
    ) {
      return parseResponse(client.v2.workflows.runs[':workflowRunId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsRunsWorkflowRunId<
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
                Awaited<ReturnType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>,
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
  const mutationDefaults = getDeleteV2WorkflowsRunsWorkflowRunIdMutationOptions<
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

export function getDeleteV2WorkflowsRunsMutationKey() {
  return ['v2', '/v2/workflows/runs', 'DELETE'] as const
}

export function getDeleteV2WorkflowsRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.runs.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.workflows.runs.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsRunsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.workflows.runs.$delete>) {
      return parseResponse(client.v2.workflows.runs.$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.runs.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.workflows.runs.$delete>,
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
  const mutationDefaults = getDeleteV2WorkflowsRunsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2MessagesMessageIdRetryMutationKey() {
  return ['v2', '/v2/messages/:messageId/retry', 'POST'] as const
}

export function getPostV2MessagesMessageIdRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MessagesMessageIdRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
    ) {
      return parseResponse(client.v2.messages[':messageId'].retry.$post(args, options))
    },
  })
}

export function usePostV2MessagesMessageIdRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>,
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
  const mutationDefaults = getPostV2MessagesMessageIdRetryMutationOptions<TError, TOnMutateResult>(
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

export function getV2WorkflowsBulkActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.bulkActions.$get>>,
) {
  return ['v2', '/v2/workflows/bulkActions', toValue(args)] as const
}

export function getV2WorkflowsBulkActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.bulkActions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WorkflowsBulkActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.workflows.bulkActions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WorkflowsBulkActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.bulkActions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
            >
          >,
          ReturnType<typeof getV2WorkflowsBulkActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsBulkActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WorkflowsBulkActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.workflows.bulkActions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WorkflowsBulkActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>
  >,
) {
  return ['v2', '/v2/workflows/bulkActions/:actionId', toValue(args)] as const
}

export function getV2WorkflowsBulkActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WorkflowsBulkActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.workflows.bulkActions[':actionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WorkflowsBulkActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WorkflowsBulkActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsBulkActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WorkflowsBulkActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.workflows.bulkActions[':actionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WorkflowsLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.logs.$get>>,
) {
  return ['v2', '/v2/workflows/logs', toValue(args)] as const
}

export function getV2WorkflowsLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WorkflowsLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.workflows.logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WorkflowsLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>
            >
          >,
          ReturnType<typeof getV2WorkflowsLogsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WorkflowsLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.workflows.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2WorkflowsDlqQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.dlq.$get>>,
) {
  return ['v2', '/v2/workflows/dlq', toValue(args)] as const
}

export function getV2WorkflowsDlqQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.dlq.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WorkflowsDlqQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.workflows.dlq.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WorkflowsDlq<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.workflows.dlq.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>
            >
          >,
          ReturnType<typeof getV2WorkflowsDlqQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsDlqQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WorkflowsDlqQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.workflows.dlq.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2WorkflowsDlqMutationKey() {
  return ['v2', '/v2/workflows/dlq', 'DELETE'] as const
}

export function getDeleteV2WorkflowsDlqMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.workflows.dlq.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsDlqMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.workflows.dlq.$delete>) {
      return parseResponse(client.v2.workflows.dlq.$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsDlq<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.workflows.dlq.$delete>,
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
  const mutationDefaults = getDeleteV2WorkflowsDlqMutationOptions<TError, TOnMutateResult>(
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

export function getV2WorkflowsDlqDlqIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>,
) {
  return ['v2', '/v2/workflows/dlq/:dlqId', toValue(args)] as const
}

export function getV2WorkflowsDlqDlqIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WorkflowsDlqDlqIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.workflows.dlq[':dlqId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WorkflowsDlqDlqId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WorkflowsDlqDlqIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WorkflowsDlqDlqIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WorkflowsDlqDlqIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.workflows.dlq[':dlqId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2WorkflowsDlqDlqIdMutationKey() {
  return ['v2', '/v2/workflows/dlq/:dlqId', 'DELETE'] as const
}

export function getDeleteV2WorkflowsDlqDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsDlqDlqIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>,
    ) {
      return parseResponse(client.v2.workflows.dlq[':dlqId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsDlqDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>,
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
  const mutationDefaults = getDeleteV2WorkflowsDlqDlqIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WorkflowsDlqResumeDlqIdMutationKey() {
  return ['v2', '/v2/workflows/dlq/resume/:dlqId', 'POST'] as const
}

export function getPostV2WorkflowsDlqResumeDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsDlqResumeDlqIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>,
    ) {
      return parseResponse(client.v2.workflows.dlq.resume[':dlqId'].$post(args, options))
    },
  })
}

export function usePostV2WorkflowsDlqResumeDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>,
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
  const mutationDefaults = getPostV2WorkflowsDlqResumeDlqIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WorkflowsDlqResumeMutationKey() {
  return ['v2', '/v2/workflows/dlq/resume', 'POST'] as const
}

export function getPostV2WorkflowsDlqResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.resume.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.workflows.dlq.resume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsDlqResumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.workflows.dlq.resume.$post>) {
      return parseResponse(client.v2.workflows.dlq.resume.$post(args, options))
    },
  })
}

export function usePostV2WorkflowsDlqResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.resume.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.workflows.dlq.resume.$post>,
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
  const mutationDefaults = getPostV2WorkflowsDlqResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WorkflowsDlqRestartDlqIdMutationKey() {
  return ['v2', '/v2/workflows/dlq/restart/:dlqId', 'POST'] as const
}

export function getPostV2WorkflowsDlqRestartDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsDlqRestartDlqIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>,
    ) {
      return parseResponse(client.v2.workflows.dlq.restart[':dlqId'].$post(args, options))
    },
  })
}

export function usePostV2WorkflowsDlqRestartDlqId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>,
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
  const mutationDefaults = getPostV2WorkflowsDlqRestartDlqIdMutationOptions<
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

export function getPostV2WorkflowsDlqRestartMutationKey() {
  return ['v2', '/v2/workflows/dlq/restart', 'POST'] as const
}

export function getPostV2WorkflowsDlqRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.restart.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.workflows.dlq.restart.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsDlqRestartMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.workflows.dlq.restart.$post>) {
      return parseResponse(client.v2.workflows.dlq.restart.$post(args, options))
    },
  })
}

export function usePostV2WorkflowsDlqRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.workflows.dlq.restart.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.workflows.dlq.restart.$post>,
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
  const mutationDefaults = getPostV2WorkflowsDlqRestartMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2WorkflowsDlqCallbackDlqIdMutationKey() {
  return ['v2', '/v2/workflows/dlq/callback/:dlqId', 'POST'] as const
}

export function getPostV2WorkflowsDlqCallbackDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2WorkflowsDlqCallbackDlqIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>,
    ) {
      return parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$post(args, options))
    },
  })
}

export function usePostV2WorkflowsDlqCallbackDlqId<
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
                Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>,
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
  const mutationDefaults = getPostV2WorkflowsDlqCallbackDlqIdMutationOptions<
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

export function getDeleteV2WorkflowsDlqCallbackDlqIdMutationKey() {
  return ['v2', '/v2/workflows/dlq/callback/:dlqId', 'DELETE'] as const
}

export function getDeleteV2WorkflowsDlqCallbackDlqIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2WorkflowsDlqCallbackDlqIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>,
    ) {
      return parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$delete(args, options))
    },
  })
}

export function useDeleteV2WorkflowsDlqCallbackDlqId<
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
                Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>,
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
  const mutationDefaults = getDeleteV2WorkflowsDlqCallbackDlqIdMutationOptions<
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

export function getV2FlowControlQueryKey() {
  return ['v2', '/v2/flowControl'] as const
}

export function getV2FlowControlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2FlowControlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.flowControl.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2FlowControl<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
          >,
          ReturnType<typeof getV2FlowControlQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FlowControlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2FlowControlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.flowControl.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FlowControlFlowControlKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
) {
  return ['v2', '/v2/flowControl/:flowControlKey', toValue(args)] as const
}

export function getV2FlowControlFlowControlKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FlowControlFlowControlKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.flowControl[':flowControlKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FlowControlFlowControlKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FlowControlFlowControlKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FlowControlFlowControlKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FlowControlFlowControlKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.flowControl[':flowControlKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FlowControlFlowControlKeyPauseMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pause', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].pause.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyPause<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyPauseMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyResumeMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resume', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].resume.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyResume<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyResumeMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyPinMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pin', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyPinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyPinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].pin.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyPin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyPinMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyUnpinMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/unpin', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyUnpinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyUnpinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].unpin.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyUnpin<
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
                  ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyUnpinMutationOptions<
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

export function getPostV2FlowControlFlowControlKeyResetRateMutationKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resetRate', 'POST'] as const
}

export function getPostV2FlowControlFlowControlKeyResetRateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FlowControlFlowControlKeyResetRateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
      >,
    ) {
      return parseResponse(client.v2.flowControl[':flowControlKey'].resetRate.$post(args, options))
    },
  })
}

export function usePostV2FlowControlFlowControlKeyResetRate<
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
                    (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>,
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
  const mutationDefaults = getPostV2FlowControlFlowControlKeyResetRateMutationOptions<
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

export function getV2GlobalParallelismQueryKey() {
  return ['v2', '/v2/globalParallelism'] as const
}

export function getV2GlobalParallelismQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2GlobalParallelismQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.globalParallelism.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GlobalParallelism<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
            >
          >,
          ReturnType<typeof getV2GlobalParallelismQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GlobalParallelismQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2GlobalParallelismQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.globalParallelism.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KeysQueryKey() {
  return ['v2', '/v2/keys'] as const
}

export function getV2KeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2KeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Keys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>
          >,
          ReturnType<typeof getV2KeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2KeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2KeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2KeysRotateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.keys.rotate.$get>>,
) {
  return ['v2', '/v2/keys/rotate', toValue(args)] as const
}

export function getV2KeysRotateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.keys.rotate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2KeysRotateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.keys.rotate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2KeysRotate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.keys.rotate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
          >,
          ReturnType<typeof getV2KeysRotateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2KeysRotateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2KeysRotateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.keys.rotate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2KeysRotateMutationKey() {
  return ['v2', '/v2/keys/rotate', 'POST'] as const
}

export function getPostV2KeysRotateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV2KeysRotateMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.keys.rotate.$post(undefined, options))
    },
  })
}

export function usePostV2KeysRotate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostV2KeysRotateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NotifyEventIdMutationKey() {
  return ['v2', '/v2/notify/:eventId', 'POST'] as const
}

export function getPostV2NotifyEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.notify)[':eventId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.notify)[':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NotifyEventIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.notify)[':eventId']['$post']>) {
      return parseResponse(client.v2.notify[':eventId'].$post(args, options))
    },
  })
}

export function usePostV2NotifyEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.notify)[':eventId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.notify)[':eventId']['$post']>,
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
  const mutationDefaults = getPostV2NotifyEventIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NotifyWorkflowRunIdEventIdMutationKey() {
  return ['v2', '/v2/notify/:workflowRunId/:eventId', 'POST'] as const
}

export function getPostV2NotifyWorkflowRunIdEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NotifyWorkflowRunIdEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>,
    ) {
      return parseResponse(client.v2.notify[':workflowRunId'][':eventId'].$post(args, options))
    },
  })
}

export function usePostV2NotifyWorkflowRunIdEventId<
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
                  ReturnType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>,
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
  const mutationDefaults = getPostV2NotifyWorkflowRunIdEventIdMutationOptions<
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

export function getV2WaitersEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>>,
) {
  return ['v2', '/v2/waiters/:eventId', toValue(args)] as const
}

export function getV2WaitersEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2WaitersEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.waiters[':eventId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2WaitersEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2WaitersEventIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2WaitersEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2WaitersEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.waiters[':eventId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

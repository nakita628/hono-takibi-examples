import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2TriggerWorkflowUrlKey() {
  return ['v2', '/v2/trigger/:workflowUrl', 'POST'] as const
}

export function usePostV2TriggerWorkflowUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.trigger)[':workflowUrl']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TriggerWorkflowUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.trigger)[':workflowUrl']['$post']> },
      ) => parseResponse(client.v2.trigger[':workflowUrl'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2BatchTriggerKey() {
  return ['v2', '/v2/batch/trigger', 'POST'] as const
}

export function usePostV2BatchTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batch.trigger.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.batch.trigger.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2BatchTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.batch.trigger.$post> }) =>
        parseResponse(client.v2.batch.trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WorkflowsRunsWorkflowRunIdKey() {
  return ['v2', '/v2/workflows/runs/:workflowRunId', 'DELETE'] as const
}

export function useDeleteV2WorkflowsRunsWorkflowRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsRunsWorkflowRunIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.workflows.runs)[':workflowRunId']['$delete']>
        },
      ) => parseResponse(client.v2.workflows.runs[':workflowRunId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WorkflowsRunsKey() {
  return ['v2', '/v2/workflows/runs', 'DELETE'] as const
}

export function useDeleteV2WorkflowsRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.runs.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.workflows.runs.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.workflows.runs.$delete> }) =>
        parseResponse(client.v2.workflows.runs.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2MessagesMessageIdRetryKey() {
  return ['v2', '/v2/messages/:messageId/retry', 'POST'] as const
}

export function usePostV2MessagesMessageIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.messages)[':messageId']['retry']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2MessagesMessageIdRetryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.messages)[':messageId']['retry']['$post']> },
      ) => parseResponse(client.v2.messages[':messageId'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WorkflowsBulkActionsKey(
  args: InferRequestType<typeof client.v2.workflows.bulkActions.$get>,
) {
  return ['v2', '/v2/workflows/bulkActions', args] as const
}

export function useGetV2WorkflowsBulkActions<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.bulkActions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
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
        ? getGetV2WorkflowsBulkActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.bulkActions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsBulkActions<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.bulkActions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
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
        ? getGetV2WorkflowsBulkActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.bulkActions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.bulkActions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WorkflowsBulkActionsActionIdKey(
  args: InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>,
) {
  return ['v2', '/v2/workflows/bulkActions/:actionId', args] as const
}

export function useGetV2WorkflowsBulkActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
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
        ? getGetV2WorkflowsBulkActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.workflows.bulkActions[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsBulkActionsActionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
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
        ? getGetV2WorkflowsBulkActionsActionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.bulkActions)[':actionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.workflows.bulkActions[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WorkflowsLogsKey(
  args: InferRequestType<typeof client.v2.workflows.logs.$get>,
) {
  return ['v2', '/v2/workflows/logs', args] as const
}

export function useGetV2WorkflowsLogs<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
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
        ? getGetV2WorkflowsLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsLogs<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
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
        ? getGetV2WorkflowsLogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2WorkflowsDlqKey(
  args: InferRequestType<typeof client.v2.workflows.dlq.$get>,
) {
  return ['v2', '/v2/workflows/dlq', args] as const
}

export function useGetV2WorkflowsDlq<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.dlq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WorkflowsDlqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.dlq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsDlq<TError = unknown>(
  args: InferRequestType<typeof client.v2.workflows.dlq.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2WorkflowsDlqKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.dlq.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2WorkflowsDlqKey() {
  return ['v2', '/v2/workflows/dlq', 'DELETE'] as const
}

export function useDeleteV2WorkflowsDlq<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.workflows.dlq.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsDlqKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.workflows.dlq.$delete> }) =>
        parseResponse(client.v2.workflows.dlq.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WorkflowsDlqDlqIdKey(
  args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>,
) {
  return ['v2', '/v2/workflows/dlq/:dlqId', args] as const
}

export function useGetV2WorkflowsDlqDlqId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
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
        ? getGetV2WorkflowsDlqDlqIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.dlq[':dlqId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WorkflowsDlqDlqId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
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
        ? getGetV2WorkflowsDlqDlqIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.workflows.dlq[':dlqId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2WorkflowsDlqDlqIdKey() {
  return ['v2', '/v2/workflows/dlq/:dlqId', 'DELETE'] as const
}

export function useDeleteV2WorkflowsDlqDlqId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsDlqDlqIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.workflows.dlq)[':dlqId']['$delete']> },
      ) => parseResponse(client.v2.workflows.dlq[':dlqId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsDlqResumeDlqIdKey() {
  return ['v2', '/v2/workflows/dlq/resume/:dlqId', 'POST'] as const
}

export function usePostV2WorkflowsDlqResumeDlqId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsDlqResumeDlqIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.workflows.dlq.resume)[':dlqId']['$post']> },
      ) => parseResponse(client.v2.workflows.dlq.resume[':dlqId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsDlqResumeKey() {
  return ['v2', '/v2/workflows/dlq/resume', 'POST'] as const
}

export function usePostV2WorkflowsDlqResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.resume.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.workflows.dlq.resume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsDlqResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.workflows.dlq.resume.$post> },
      ) => parseResponse(client.v2.workflows.dlq.resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsDlqRestartDlqIdKey() {
  return ['v2', '/v2/workflows/dlq/restart/:dlqId', 'POST'] as const
}

export function usePostV2WorkflowsDlqRestartDlqId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsDlqRestartDlqIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.workflows.dlq.restart)[':dlqId']['$post']> },
      ) => parseResponse(client.v2.workflows.dlq.restart[':dlqId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsDlqRestartKey() {
  return ['v2', '/v2/workflows/dlq/restart', 'POST'] as const
}

export function usePostV2WorkflowsDlqRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.workflows.dlq.restart.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.workflows.dlq.restart.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsDlqRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.workflows.dlq.restart.$post> },
      ) => parseResponse(client.v2.workflows.dlq.restart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2WorkflowsDlqCallbackDlqIdKey() {
  return ['v2', '/v2/workflows/dlq/callback/:dlqId', 'POST'] as const
}

export function usePostV2WorkflowsDlqCallbackDlqId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2WorkflowsDlqCallbackDlqIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$post']> },
      ) => parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2WorkflowsDlqCallbackDlqIdKey() {
  return ['v2', '/v2/workflows/dlq/callback/:dlqId', 'DELETE'] as const
}

export function useDeleteV2WorkflowsDlqCallbackDlqId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2WorkflowsDlqCallbackDlqIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.workflows.dlq.callback)[':dlqId']['$delete']>
        },
      ) => parseResponse(client.v2.workflows.dlq.callback[':dlqId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FlowControlKey() {
  return ['v2', '/v2/flowControl'] as const
}

export function useGetV2FlowControl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FlowControlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.flowControl.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FlowControl<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2FlowControlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.flowControl.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.flowControl.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FlowControlFlowControlKeyKey(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
) {
  return ['v2', '/v2/flowControl/:flowControlKey', args] as const
}

export function useGetV2FlowControlFlowControlKey<TError = unknown>(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
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
        ? getGetV2FlowControlFlowControlKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.flowControl[':flowControlKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FlowControlFlowControlKey<TError = unknown>(
  args: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
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
        ? getGetV2FlowControlFlowControlKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.flowControl[':flowControlKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FlowControlFlowControlKeyPauseKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pause', 'POST'] as const
}

export function usePostV2FlowControlFlowControlKeyPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FlowControlFlowControlKeyPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pause']['$post']>
        },
      ) => parseResponse(client.v2.flowControl[':flowControlKey'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FlowControlFlowControlKeyResumeKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resume', 'POST'] as const
}

export function usePostV2FlowControlFlowControlKeyResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FlowControlFlowControlKeyResumeKey()
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
            (typeof client.v2.flowControl)[':flowControlKey']['resume']['$post']
          >
        },
      ) => parseResponse(client.v2.flowControl[':flowControlKey'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FlowControlFlowControlKeyPinKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/pin', 'POST'] as const
}

export function usePostV2FlowControlFlowControlKeyPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FlowControlFlowControlKeyPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['pin']['$post']>
        },
      ) => parseResponse(client.v2.flowControl[':flowControlKey'].pin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FlowControlFlowControlKeyUnpinKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/unpin', 'POST'] as const
}

export function usePostV2FlowControlFlowControlKeyUnpin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FlowControlFlowControlKeyUnpinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['unpin']['$post']>
        },
      ) => parseResponse(client.v2.flowControl[':flowControlKey'].unpin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2FlowControlFlowControlKeyResetRateKey() {
  return ['v2', '/v2/flowControl/:flowControlKey/resetRate', 'POST'] as const
}

export function usePostV2FlowControlFlowControlKeyResetRate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FlowControlFlowControlKeyResetRateKey()
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
            (typeof client.v2.flowControl)[':flowControlKey']['resetRate']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.flowControl[':flowControlKey'].resetRate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GlobalParallelismKey() {
  return ['v2', '/v2/globalParallelism'] as const
}

export function useGetV2GlobalParallelism<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2GlobalParallelismKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.globalParallelism.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GlobalParallelism<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2GlobalParallelismKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.globalParallelism.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.globalParallelism.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2KeysKey() {
  return ['v2', '/v2/keys'] as const
}

export function useGetV2Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Keys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2KeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2KeysRotateKey(args: InferRequestType<typeof client.v2.keys.rotate.$get>) {
  return ['v2', '/v2/keys/rotate', args] as const
}

export function useGetV2KeysRotate<TError = unknown>(
  args: InferRequestType<typeof client.v2.keys.rotate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2KeysRotateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.keys.rotate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2KeysRotate<TError = unknown>(
  args: InferRequestType<typeof client.v2.keys.rotate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2KeysRotateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.keys.rotate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2KeysRotateKey() {
  return ['v2', '/v2/keys/rotate', 'POST'] as const
}

export function usePostV2KeysRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.keys.rotate.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2KeysRotateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v2.keys.rotate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NotifyEventIdKey() {
  return ['v2', '/v2/notify/:eventId', 'POST'] as const
}

export function usePostV2NotifyEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.notify)[':eventId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.notify)[':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NotifyEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.notify)[':eventId']['$post']> },
      ) => parseResponse(client.v2.notify[':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2NotifyWorkflowRunIdEventIdKey() {
  return ['v2', '/v2/notify/:workflowRunId/:eventId', 'POST'] as const
}

export function usePostV2NotifyWorkflowRunIdEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2NotifyWorkflowRunIdEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.notify)[':workflowRunId'][':eventId']['$post']>
        },
      ) => parseResponse(client.v2.notify[':workflowRunId'][':eventId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2WaitersEventIdKey(
  args: InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>,
) {
  return ['v2', '/v2/waiters/:eventId', args] as const
}

export function useGetV2WaitersEventId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
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
        ? getGetV2WaitersEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.waiters[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2WaitersEventId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.waiters)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
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
        ? getGetV2WaitersEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.waiters)[':eventId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.waiters[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

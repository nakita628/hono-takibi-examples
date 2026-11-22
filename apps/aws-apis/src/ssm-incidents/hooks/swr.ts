import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCreateReplicationSetKey() {
  return ['createReplicationSet'] as const
}

export function getCreateResponsePlanKey() {
  return ['createResponsePlan'] as const
}

export function getCreateTimelineEventKey() {
  return ['createTimelineEvent'] as const
}

export function getDeleteIncidentRecordKey() {
  return ['deleteIncidentRecord'] as const
}

export function getDeleteReplicationSetArnKey() {
  return ['deleteReplicationSet#arn'] as const
}

export function getDeleteResourcePolicyKey() {
  return ['deleteResourcePolicy'] as const
}

export function getDeleteResponsePlanKey() {
  return ['deleteResponsePlan'] as const
}

export function getDeleteTimelineEventKey() {
  return ['deleteTimelineEvent'] as const
}

export function getGetIncidentRecordArnKey() {
  return ['getIncidentRecord#arn'] as const
}

export function getGetReplicationSetArnKey() {
  return ['getReplicationSet#arn'] as const
}

export function getGetResourcePoliciesResourceArnKey() {
  return ['getResourcePolicies#resourceArn'] as const
}

export function getGetResponsePlanArnKey() {
  return ['getResponsePlan#arn'] as const
}

export function getGetTimelineEventEventIdIncidentRecordArnKey() {
  return ['getTimelineEvent#eventId&incidentRecordArn'] as const
}

export function getListIncidentRecordsKey() {
  return ['listIncidentRecords'] as const
}

export function getListRelatedItemsKey() {
  return ['listRelatedItems'] as const
}

export function getListReplicationSetsKey() {
  return ['listReplicationSets'] as const
}

export function getListResponsePlansKey() {
  return ['listResponsePlans'] as const
}

export function getListTimelineEventsKey() {
  return ['listTimelineEvents'] as const
}

export function getPutResourcePolicyKey() {
  return ['putResourcePolicy'] as const
}

export function getStartIncidentKey() {
  return ['startIncident'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUpdateDeletionProtectionKey() {
  return ['updateDeletionProtection'] as const
}

export function getUpdateIncidentRecordKey() {
  return ['updateIncidentRecord'] as const
}

export function getUpdateRelatedItemsKey() {
  return ['updateRelatedItems'] as const
}

export function getUpdateReplicationSetKey() {
  return ['updateReplicationSet'] as const
}

export function getUpdateResponsePlanKey() {
  return ['updateResponsePlan'] as const
}

export function getUpdateTimelineEventKey() {
  return ['updateTimelineEvent'] as const
}

export function getPostCreateReplicationSetKey() {
  return ['createReplicationSet', '/createReplicationSet', 'POST'] as const
}

export function usePostCreateReplicationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createReplicationSet.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.createReplicationSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateReplicationSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.createReplicationSet.$post> },
      ) => parseResponse(client.createReplicationSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateResponsePlanKey() {
  return ['createResponsePlan', '/createResponsePlan', 'POST'] as const
}

export function usePostCreateResponsePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createResponsePlan.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createResponsePlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateResponsePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createResponsePlan.$post> }) =>
        parseResponse(client.createResponsePlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCreateTimelineEventKey() {
  return ['createTimelineEvent', '/createTimelineEvent', 'POST'] as const
}

export function usePostCreateTimelineEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createTimelineEvent.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.createTimelineEvent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCreateTimelineEventKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.createTimelineEvent.$post> }) =>
        parseResponse(client.createTimelineEvent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteIncidentRecordKey() {
  return ['deleteIncidentRecord', '/deleteIncidentRecord', 'POST'] as const
}

export function usePostDeleteIncidentRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteIncidentRecord.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.deleteIncidentRecord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteIncidentRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteIncidentRecord.$post> },
      ) => parseResponse(client.deleteIncidentRecord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteReplicationSetArnKey() {
  return ['deleteReplicationSet#arn', '/deleteReplicationSet#arn', 'POST'] as const
}

export function usePostDeleteReplicationSetArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['deleteReplicationSet#arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteReplicationSetArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']> },
      ) => parseResponse(client['deleteReplicationSet#arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteResourcePolicyKey() {
  return ['deleteResourcePolicy', '/deleteResourcePolicy', 'POST'] as const
}

export function usePostDeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteResourcePolicy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.deleteResourcePolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.deleteResourcePolicy.$post> },
      ) => parseResponse(client.deleteResourcePolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteResponsePlanKey() {
  return ['deleteResponsePlan', '/deleteResponsePlan', 'POST'] as const
}

export function usePostDeleteResponsePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteResponsePlan.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.deleteResponsePlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteResponsePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteResponsePlan.$post> }) =>
        parseResponse(client.deleteResponsePlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeleteTimelineEventKey() {
  return ['deleteTimelineEvent', '/deleteTimelineEvent', 'POST'] as const
}

export function usePostDeleteTimelineEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteTimelineEvent.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.deleteTimelineEvent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeleteTimelineEventKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.deleteTimelineEvent.$post> }) =>
        parseResponse(client.deleteTimelineEvent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetIncidentRecordArnKey(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getIncidentRecord#arn', '/getIncidentRecord#arn', keyArgs] as const
}

export function useGetGetIncidentRecordArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>
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
        ? getGetGetIncidentRecordArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getIncidentRecord#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetIncidentRecordArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>
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
        ? getGetGetIncidentRecordArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getIncidentRecord#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetReplicationSetArnKey(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getReplicationSet#arn', '/getReplicationSet#arn', keyArgs] as const
}

export function useGetGetReplicationSetArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>
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
        ? getGetGetReplicationSetArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getReplicationSet#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetReplicationSetArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>
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
        ? getGetGetReplicationSetArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getReplicationSet#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGetResourcePoliciesResourceArnKey() {
  return ['getResourcePolicies#resourceArn', '/getResourcePolicies#resourceArn', 'POST'] as const
}

export function usePostGetResourcePoliciesResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['getResourcePolicies#resourceArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetResourcePoliciesResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']> },
      ) => parseResponse(client['getResourcePolicies#resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGetResponsePlanArnKey(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getResponsePlan#arn', '/getResponsePlan#arn', keyArgs] as const
}

export function useGetGetResponsePlanArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
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
        ? getGetGetResponsePlanArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getResponsePlan#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetResponsePlanArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
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
        ? getGetGetResponsePlanArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['getResponsePlan#arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetTimelineEventEventIdIncidentRecordArnKey(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'getTimelineEvent#eventId&incidentRecordArn',
    '/getTimelineEvent#eventId&incidentRecordArn',
    keyArgs,
  ] as const
}

export function useGetGetTimelineEventEventIdIncidentRecordArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>
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
        ? getGetGetTimelineEventEventIdIncidentRecordArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['getTimelineEvent#eventId&incidentRecordArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetTimelineEventEventIdIncidentRecordArn<TError = unknown>(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>
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
        ? getGetGetTimelineEventEventIdIncidentRecordArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['getTimelineEvent#eventId&incidentRecordArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostListIncidentRecordsKey() {
  return ['listIncidentRecords', '/listIncidentRecords', 'POST'] as const
}

export function usePostListIncidentRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listIncidentRecords.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listIncidentRecords.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListIncidentRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listIncidentRecords.$post> }) =>
        parseResponse(client.listIncidentRecords.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListRelatedItemsKey() {
  return ['listRelatedItems', '/listRelatedItems', 'POST'] as const
}

export function usePostListRelatedItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listRelatedItems.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listRelatedItems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListRelatedItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listRelatedItems.$post> }) =>
        parseResponse(client.listRelatedItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListReplicationSetsKey() {
  return ['listReplicationSets', '/listReplicationSets', 'POST'] as const
}

export function usePostListReplicationSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listReplicationSets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listReplicationSets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListReplicationSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listReplicationSets.$post> }) =>
        parseResponse(client.listReplicationSets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListResponsePlansKey() {
  return ['listResponsePlans', '/listResponsePlans', 'POST'] as const
}

export function usePostListResponsePlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listResponsePlans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listResponsePlans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListResponsePlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listResponsePlans.$post> }) =>
        parseResponse(client.listResponsePlans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostListTimelineEventsKey() {
  return ['listTimelineEvents', '/listTimelineEvents', 'POST'] as const
}

export function usePostListTimelineEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTimelineEvents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.listTimelineEvents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostListTimelineEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.listTimelineEvents.$post> }) =>
        parseResponse(client.listTimelineEvents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPutResourcePolicyKey() {
  return ['putResourcePolicy', '/putResourcePolicy', 'POST'] as const
}

export function usePostPutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.putResourcePolicy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.putResourcePolicy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPutResourcePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.putResourcePolicy.$post> }) =>
        parseResponse(client.putResourcePolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostStartIncidentKey() {
  return ['startIncident', '/startIncident', 'POST'] as const
}

export function usePostStartIncident<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startIncident.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.startIncident.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStartIncidentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.startIncident.$post> }) =>
        parseResponse(client.startIncident.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateDeletionProtectionKey() {
  return ['updateDeletionProtection', '/updateDeletionProtection', 'POST'] as const
}

export function usePostUpdateDeletionProtection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateDeletionProtection.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateDeletionProtection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateDeletionProtectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateDeletionProtection.$post> },
      ) => parseResponse(client.updateDeletionProtection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateIncidentRecordKey() {
  return ['updateIncidentRecord', '/updateIncidentRecord', 'POST'] as const
}

export function usePostUpdateIncidentRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateIncidentRecord.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateIncidentRecord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateIncidentRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateIncidentRecord.$post> },
      ) => parseResponse(client.updateIncidentRecord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateRelatedItemsKey() {
  return ['updateRelatedItems', '/updateRelatedItems', 'POST'] as const
}

export function usePostUpdateRelatedItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateRelatedItems.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateRelatedItems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateRelatedItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateRelatedItems.$post> }) =>
        parseResponse(client.updateRelatedItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateReplicationSetKey() {
  return ['updateReplicationSet', '/updateReplicationSet', 'POST'] as const
}

export function usePostUpdateReplicationSet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateReplicationSet.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateReplicationSet.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateReplicationSetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.updateReplicationSet.$post> },
      ) => parseResponse(client.updateReplicationSet.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateResponsePlanKey() {
  return ['updateResponsePlan', '/updateResponsePlan', 'POST'] as const
}

export function usePostUpdateResponsePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateResponsePlan.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateResponsePlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateResponsePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateResponsePlan.$post> }) =>
        parseResponse(client.updateResponsePlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdateTimelineEventKey() {
  return ['updateTimelineEvent', '/updateTimelineEvent', 'POST'] as const
}

export function usePostUpdateTimelineEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateTimelineEvent.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.updateTimelineEvent.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdateTimelineEventKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.updateTimelineEvent.$post> }) =>
        parseResponse(client.updateTimelineEvent.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostCreateReplicationSetMutationKey() {
  return ['createReplicationSet', '/createReplicationSet', 'POST'] as const
}

export function getPostCreateReplicationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.createReplicationSet.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.createReplicationSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateReplicationSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createReplicationSet.$post>) {
      return parseResponse(client.createReplicationSet.$post(args, options))
    },
  })
}

export function injectPostCreateReplicationSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createReplicationSet.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createReplicationSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateReplicationSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateResponsePlanMutationKey() {
  return ['createResponsePlan', '/createResponsePlan', 'POST'] as const
}

export function getPostCreateResponsePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createResponsePlan.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createResponsePlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateResponsePlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createResponsePlan.$post>) {
      return parseResponse(client.createResponsePlan.$post(args, options))
    },
  })
}

export function injectPostCreateResponsePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createResponsePlan.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createResponsePlan.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateResponsePlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostCreateTimelineEventMutationKey() {
  return ['createTimelineEvent', '/createTimelineEvent', 'POST'] as const
}

export function getPostCreateTimelineEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.createTimelineEvent.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.createTimelineEvent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCreateTimelineEventMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.createTimelineEvent.$post>) {
      return parseResponse(client.createTimelineEvent.$post(args, options))
    },
  })
}

export function injectPostCreateTimelineEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.createTimelineEvent.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.createTimelineEvent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCreateTimelineEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteIncidentRecordMutationKey() {
  return ['deleteIncidentRecord', '/deleteIncidentRecord', 'POST'] as const
}

export function getPostDeleteIncidentRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteIncidentRecord.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.deleteIncidentRecord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteIncidentRecordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteIncidentRecord.$post>) {
      return parseResponse(client.deleteIncidentRecord.$post(args, options))
    },
  })
}

export function injectPostDeleteIncidentRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteIncidentRecord.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.deleteIncidentRecord.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteIncidentRecordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteReplicationSetArnMutationKey() {
  return ['deleteReplicationSet#arn', '/deleteReplicationSet#arn', 'POST'] as const
}

export function getPostDeleteReplicationSetArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['deleteReplicationSet#arn']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteReplicationSetArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']>) {
      return parseResponse(client['deleteReplicationSet#arn'].$post(args, options))
    },
  })
}

export function injectPostDeleteReplicationSetArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['deleteReplicationSet#arn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['deleteReplicationSet#arn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteReplicationSetArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteResourcePolicyMutationKey() {
  return ['deleteResourcePolicy', '/deleteResourcePolicy', 'POST'] as const
}

export function getPostDeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.deleteResourcePolicy.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.deleteResourcePolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteResourcePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteResourcePolicy.$post>) {
      return parseResponse(client.deleteResourcePolicy.$post(args, options))
    },
  })
}

export function injectPostDeleteResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.deleteResourcePolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.deleteResourcePolicy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteResourcePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteResponsePlanMutationKey() {
  return ['deleteResponsePlan', '/deleteResponsePlan', 'POST'] as const
}

export function getPostDeleteResponsePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteResponsePlan.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.deleteResponsePlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteResponsePlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteResponsePlan.$post>) {
      return parseResponse(client.deleteResponsePlan.$post(args, options))
    },
  })
}

export function injectPostDeleteResponsePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteResponsePlan.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.deleteResponsePlan.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteResponsePlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDeleteTimelineEventMutationKey() {
  return ['deleteTimelineEvent', '/deleteTimelineEvent', 'POST'] as const
}

export function getPostDeleteTimelineEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.deleteTimelineEvent.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.deleteTimelineEvent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeleteTimelineEventMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.deleteTimelineEvent.$post>) {
      return parseResponse(client.deleteTimelineEvent.$post(args, options))
    },
  })
}

export function injectPostDeleteTimelineEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.deleteTimelineEvent.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.deleteTimelineEvent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeleteTimelineEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetIncidentRecordArnQueryKey(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getIncidentRecord#arn', '/getIncidentRecord#arn', keyArgs] as const
}

export function getGetIncidentRecordArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetIncidentRecordArnQueryKey>
  >({
    queryKey: getGetIncidentRecordArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['getIncidentRecord#arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetIncidentRecordArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['getIncidentRecord#arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['getIncidentRecord#arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetIncidentRecordArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetIncidentRecordArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getGetReplicationSetArnQueryKey(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getReplicationSet#arn', '/getReplicationSet#arn', keyArgs] as const
}

export function getGetReplicationSetArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetReplicationSetArnQueryKey>
  >({
    queryKey: getGetReplicationSetArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['getReplicationSet#arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetReplicationSetArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['getReplicationSet#arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['getReplicationSet#arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetReplicationSetArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetReplicationSetArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostGetResourcePoliciesResourceArnMutationKey() {
  return ['getResourcePolicies#resourceArn', '/getResourcePolicies#resourceArn', 'POST'] as const
}

export function getPostGetResourcePoliciesResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['getResourcePolicies#resourceArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGetResourcePoliciesResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']>,
    ) {
      return parseResponse(client['getResourcePolicies#resourceArn'].$post(args, options))
    },
  })
}

export function injectPostGetResourcePoliciesResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['getResourcePolicies#resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['getResourcePolicies#resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetResourcePoliciesResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getGetResponsePlanArnQueryKey(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['getResponsePlan#arn', '/getResponsePlan#arn', keyArgs] as const
}

export function getGetResponsePlanArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetResponsePlanArnQueryKey>
  >({
    queryKey: getGetResponsePlanArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['getResponsePlan#arn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetResponsePlanArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['getResponsePlan#arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['getResponsePlan#arn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetResponsePlanArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetResponsePlanArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getGetTimelineEventEventIdIncidentRecordArnQueryKey(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'getTimelineEvent#eventId&incidentRecordArn',
    '/getTimelineEvent#eventId&incidentRecordArn',
    keyArgs,
  ] as const
}

export function getGetTimelineEventEventIdIncidentRecordArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetTimelineEventEventIdIncidentRecordArnQueryKey>
  >({
    queryKey: getGetTimelineEventEventIdIncidentRecordArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['getTimelineEvent#eventId&incidentRecordArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectGetTimelineEventEventIdIncidentRecordArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['getTimelineEvent#eventId&incidentRecordArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetTimelineEventEventIdIncidentRecordArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetTimelineEventEventIdIncidentRecordArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostListIncidentRecordsMutationKey() {
  return ['listIncidentRecords', '/listIncidentRecords', 'POST'] as const
}

export function getPostListIncidentRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listIncidentRecords.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listIncidentRecords.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListIncidentRecordsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listIncidentRecords.$post>) {
      return parseResponse(client.listIncidentRecords.$post(args, options))
    },
  })
}

export function injectPostListIncidentRecords<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listIncidentRecords.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listIncidentRecords.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListIncidentRecordsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListRelatedItemsMutationKey() {
  return ['listRelatedItems', '/listRelatedItems', 'POST'] as const
}

export function getPostListRelatedItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listRelatedItems.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listRelatedItems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListRelatedItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listRelatedItems.$post>) {
      return parseResponse(client.listRelatedItems.$post(args, options))
    },
  })
}

export function injectPostListRelatedItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listRelatedItems.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listRelatedItems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListRelatedItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListReplicationSetsMutationKey() {
  return ['listReplicationSets', '/listReplicationSets', 'POST'] as const
}

export function getPostListReplicationSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listReplicationSets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listReplicationSets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListReplicationSetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listReplicationSets.$post>) {
      return parseResponse(client.listReplicationSets.$post(args, options))
    },
  })
}

export function injectPostListReplicationSets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listReplicationSets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listReplicationSets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListReplicationSetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListResponsePlansMutationKey() {
  return ['listResponsePlans', '/listResponsePlans', 'POST'] as const
}

export function getPostListResponsePlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listResponsePlans.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listResponsePlans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListResponsePlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listResponsePlans.$post>) {
      return parseResponse(client.listResponsePlans.$post(args, options))
    },
  })
}

export function injectPostListResponsePlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listResponsePlans.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listResponsePlans.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListResponsePlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostListTimelineEventsMutationKey() {
  return ['listTimelineEvents', '/listTimelineEvents', 'POST'] as const
}

export function getPostListTimelineEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listTimelineEvents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.listTimelineEvents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListTimelineEventsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.listTimelineEvents.$post>) {
      return parseResponse(client.listTimelineEvents.$post(args, options))
    },
  })
}

export function injectPostListTimelineEvents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listTimelineEvents.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.listTimelineEvents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostListTimelineEventsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostPutResourcePolicyMutationKey() {
  return ['putResourcePolicy', '/putResourcePolicy', 'POST'] as const
}

export function getPostPutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.putResourcePolicy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.putResourcePolicy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPutResourcePolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.putResourcePolicy.$post>) {
      return parseResponse(client.putResourcePolicy.$post(args, options))
    },
  })
}

export function injectPostPutResourcePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.putResourcePolicy.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.putResourcePolicy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPutResourcePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostStartIncidentMutationKey() {
  return ['startIncident', '/startIncident', 'POST'] as const
}

export function getPostStartIncidentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startIncident.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.startIncident.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStartIncidentMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.startIncident.$post>) {
      return parseResponse(client.startIncident.$post(args, options))
    },
  })
}

export function injectPostStartIncident<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.startIncident.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.startIncident.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostStartIncidentMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateDeletionProtectionMutationKey() {
  return ['updateDeletionProtection', '/updateDeletionProtection', 'POST'] as const
}

export function getPostUpdateDeletionProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateDeletionProtection.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateDeletionProtection.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateDeletionProtectionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateDeletionProtection.$post>) {
      return parseResponse(client.updateDeletionProtection.$post(args, options))
    },
  })
}

export function injectPostUpdateDeletionProtection<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.updateDeletionProtection.$post>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateDeletionProtection.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateDeletionProtectionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateIncidentRecordMutationKey() {
  return ['updateIncidentRecord', '/updateIncidentRecord', 'POST'] as const
}

export function getPostUpdateIncidentRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateIncidentRecord.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateIncidentRecord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateIncidentRecordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateIncidentRecord.$post>) {
      return parseResponse(client.updateIncidentRecord.$post(args, options))
    },
  })
}

export function injectPostUpdateIncidentRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateIncidentRecord.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateIncidentRecord.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateIncidentRecordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateRelatedItemsMutationKey() {
  return ['updateRelatedItems', '/updateRelatedItems', 'POST'] as const
}

export function getPostUpdateRelatedItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateRelatedItems.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateRelatedItems.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateRelatedItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateRelatedItems.$post>) {
      return parseResponse(client.updateRelatedItems.$post(args, options))
    },
  })
}

export function injectPostUpdateRelatedItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateRelatedItems.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateRelatedItems.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateRelatedItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateReplicationSetMutationKey() {
  return ['updateReplicationSet', '/updateReplicationSet', 'POST'] as const
}

export function getPostUpdateReplicationSetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateReplicationSet.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateReplicationSet.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateReplicationSetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateReplicationSet.$post>) {
      return parseResponse(client.updateReplicationSet.$post(args, options))
    },
  })
}

export function injectPostUpdateReplicationSet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateReplicationSet.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateReplicationSet.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateReplicationSetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateResponsePlanMutationKey() {
  return ['updateResponsePlan', '/updateResponsePlan', 'POST'] as const
}

export function getPostUpdateResponsePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateResponsePlan.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateResponsePlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateResponsePlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateResponsePlan.$post>) {
      return parseResponse(client.updateResponsePlan.$post(args, options))
    },
  })
}

export function injectPostUpdateResponsePlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateResponsePlan.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateResponsePlan.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateResponsePlanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUpdateTimelineEventMutationKey() {
  return ['updateTimelineEvent', '/updateTimelineEvent', 'POST'] as const
}

export function getPostUpdateTimelineEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.updateTimelineEvent.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.updateTimelineEvent.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdateTimelineEventMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.updateTimelineEvent.$post>) {
      return parseResponse(client.updateTimelineEvent.$post(args, options))
    },
  })
}

export function injectPostUpdateTimelineEvent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.updateTimelineEvent.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.updateTimelineEvent.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUpdateTimelineEventMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

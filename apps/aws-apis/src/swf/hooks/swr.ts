import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions'] as const
}

export function getXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions'] as const
}

export function getXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks'] as const
}

export function getXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDeprecateDomainKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDescribeActivityTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDescribeDomainKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DescribeDomain'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution'] as const
}

export function getXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListActivityTypesKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListDomainsKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListDomains'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource'] as const
}

export function getXAmzTargetSimpleWorkflowServiceListWorkflowTypesKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes'] as const
}

export function getXAmzTargetSimpleWorkflowServicePollForActivityTaskKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask'] as const
}

export function getXAmzTargetSimpleWorkflowServicePollForDecisionTaskKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRegisterActivityTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRegisterDomainKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RegisterDomain'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed'] as const
}

export function getXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted'] as const
}

export function getXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution'] as const
}

export function getXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution'] as const
}

export function getXAmzTargetSimpleWorkflowServiceTagResourceKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.TagResource'] as const
}

export function getXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution'] as const
}

export function getXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceUndeprecateDomainKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain'] as const
}

export function getXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType'] as const
}

export function getXAmzTargetSimpleWorkflowServiceUntagResourceKey() {
  return ['#X-Amz-Target=SimpleWorkflowService.UntagResource'] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks',
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks',
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateActivityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateDomain',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeActivityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeActivityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeDomainKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeDomain',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDescribeDomainKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DescribeDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeWorkflowType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory',
    '/#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistory<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListActivityTypesKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListActivityTypes',
    '/#X-Amz-Target=SimpleWorkflowService.ListActivityTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListActivityTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceListActivityTypesKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListDomainsKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListDomains',
    '/#X-Amz-Target=SimpleWorkflowService.ListDomains',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceListDomainsKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListDomains'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListTagsForResource',
    '/#X-Amz-Target=SimpleWorkflowService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes',
    '/#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceListWorkflowTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.PollForActivityTask',
    '/#X-Amz-Target=SimpleWorkflowService.PollForActivityTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServicePollForActivityTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask',
    '/#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServicePollForDecisionTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat',
    '/#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterActivityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterActivityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterDomainKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterDomain',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRegisterDomainKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RegisterDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterWorkflowType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailed<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted',
    '/#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompleted<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceStartWorkflowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceTagResourceKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.TagResource',
    '/#X-Amz-Target=SimpleWorkflowService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateActivityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetSimpleWorkflowServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UntagResource',
    '/#X-Amz-Target=SimpleWorkflowService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetSimpleWorkflowServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetSimpleWorkflowServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=SimpleWorkflowService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

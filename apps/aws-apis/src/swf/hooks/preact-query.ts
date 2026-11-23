import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks',
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceCountPendingActivityTasksMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks',
    '/#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateActivityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceDeprecateActivityTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateDomain',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceDeprecateDomainMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeActivityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeActivityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceDescribeActivityTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDescribeDomainMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeDomain',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDescribeDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DescribeDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceDescribeDomainMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceDescribeWorkflowType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory',
    '/#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistory<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListActivityTypesMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListActivityTypes',
    '/#X-Amz-Target=SimpleWorkflowService.ListActivityTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListActivityTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListActivityTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListActivityTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceListActivityTypesMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListDomainsMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListDomains',
    '/#X-Amz-Target=SimpleWorkflowService.ListDomains',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListDomains'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceListDomainsMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions',
    '/#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListTagsForResource',
    '/#X-Amz-Target=SimpleWorkflowService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes',
    '/#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceListWorkflowTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceListWorkflowTypesMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.PollForActivityTask',
    '/#X-Amz-Target=SimpleWorkflowService.PollForActivityTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServicePollForActivityTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServicePollForActivityTaskMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask',
    '/#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServicePollForDecisionTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServicePollForDecisionTaskMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat',
    '/#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeat<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterActivityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterActivityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRegisterActivityTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRegisterDomainMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterDomain',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRegisterDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RegisterDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceRegisterDomainMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRegisterWorkflowType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceled<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompleted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed',
    '/#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted',
    '/#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompleted<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceStartWorkflowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceStartWorkflowExecutionMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.TagResource',
    '/#X-Amz-Target=SimpleWorkflowService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution',
    '/#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateActivityType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceUndeprecateDomainMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType',
    '/#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeMutationOptions<
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

export function getPostXAmzTargetSimpleWorkflowServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=SimpleWorkflowService.UntagResource',
    '/#X-Amz-Target=SimpleWorkflowService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetSimpleWorkflowServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetSimpleWorkflowServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=SimpleWorkflowService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetSimpleWorkflowServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetSimpleWorkflowServiceUntagResourceMutationOptions<
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

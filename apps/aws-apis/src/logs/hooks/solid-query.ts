import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetLogs_20140328AssociateKmsKeyKey() {
  return ['#X-Amz-Target=Logs_20140328.AssociateKmsKey'] as const
}

export function getXAmzTargetLogs_20140328CancelExportTaskKey() {
  return ['#X-Amz-Target=Logs_20140328.CancelExportTask'] as const
}

export function getXAmzTargetLogs_20140328CreateExportTaskKey() {
  return ['#X-Amz-Target=Logs_20140328.CreateExportTask'] as const
}

export function getXAmzTargetLogs_20140328CreateLogGroupKey() {
  return ['#X-Amz-Target=Logs_20140328.CreateLogGroup'] as const
}

export function getXAmzTargetLogs_20140328CreateLogStreamKey() {
  return ['#X-Amz-Target=Logs_20140328.CreateLogStream'] as const
}

export function getXAmzTargetLogs_20140328DeleteAccountPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy'] as const
}

export function getXAmzTargetLogs_20140328DeleteDataProtectionPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy'] as const
}

export function getXAmzTargetLogs_20140328DeleteDestinationKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteDestination'] as const
}

export function getXAmzTargetLogs_20140328DeleteLogGroupKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteLogGroup'] as const
}

export function getXAmzTargetLogs_20140328DeleteLogStreamKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteLogStream'] as const
}

export function getXAmzTargetLogs_20140328DeleteMetricFilterKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteMetricFilter'] as const
}

export function getXAmzTargetLogs_20140328DeleteQueryDefinitionKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition'] as const
}

export function getXAmzTargetLogs_20140328DeleteResourcePolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy'] as const
}

export function getXAmzTargetLogs_20140328DeleteRetentionPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy'] as const
}

export function getXAmzTargetLogs_20140328DeleteSubscriptionFilterKey() {
  return ['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter'] as const
}

export function getXAmzTargetLogs_20140328DescribeAccountPoliciesKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies'] as const
}

export function getXAmzTargetLogs_20140328DescribeDestinationsKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeDestinations'] as const
}

export function getXAmzTargetLogs_20140328DescribeExportTasksKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeExportTasks'] as const
}

export function getXAmzTargetLogs_20140328DescribeLogGroupsKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeLogGroups'] as const
}

export function getXAmzTargetLogs_20140328DescribeLogStreamsKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeLogStreams'] as const
}

export function getXAmzTargetLogs_20140328DescribeMetricFiltersKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeMetricFilters'] as const
}

export function getXAmzTargetLogs_20140328DescribeQueriesKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeQueries'] as const
}

export function getXAmzTargetLogs_20140328DescribeQueryDefinitionsKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions'] as const
}

export function getXAmzTargetLogs_20140328DescribeResourcePoliciesKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies'] as const
}

export function getXAmzTargetLogs_20140328DescribeSubscriptionFiltersKey() {
  return ['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters'] as const
}

export function getXAmzTargetLogs_20140328DisassociateKmsKeyKey() {
  return ['#X-Amz-Target=Logs_20140328.DisassociateKmsKey'] as const
}

export function getXAmzTargetLogs_20140328FilterLogEventsKey() {
  return ['#X-Amz-Target=Logs_20140328.FilterLogEvents'] as const
}

export function getXAmzTargetLogs_20140328GetDataProtectionPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy'] as const
}

export function getXAmzTargetLogs_20140328GetLogEventsKey() {
  return ['#X-Amz-Target=Logs_20140328.GetLogEvents'] as const
}

export function getXAmzTargetLogs_20140328GetLogGroupFieldsKey() {
  return ['#X-Amz-Target=Logs_20140328.GetLogGroupFields'] as const
}

export function getXAmzTargetLogs_20140328GetLogRecordKey() {
  return ['#X-Amz-Target=Logs_20140328.GetLogRecord'] as const
}

export function getXAmzTargetLogs_20140328GetQueryResultsKey() {
  return ['#X-Amz-Target=Logs_20140328.GetQueryResults'] as const
}

export function getXAmzTargetLogs_20140328ListTagsForResourceKey() {
  return ['#X-Amz-Target=Logs_20140328.ListTagsForResource'] as const
}

export function getXAmzTargetLogs_20140328ListTagsLogGroupKey() {
  return ['#X-Amz-Target=Logs_20140328.ListTagsLogGroup'] as const
}

export function getXAmzTargetLogs_20140328PutAccountPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.PutAccountPolicy'] as const
}

export function getXAmzTargetLogs_20140328PutDataProtectionPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy'] as const
}

export function getXAmzTargetLogs_20140328PutDestinationKey() {
  return ['#X-Amz-Target=Logs_20140328.PutDestination'] as const
}

export function getXAmzTargetLogs_20140328PutDestinationPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.PutDestinationPolicy'] as const
}

export function getXAmzTargetLogs_20140328PutLogEventsKey() {
  return ['#X-Amz-Target=Logs_20140328.PutLogEvents'] as const
}

export function getXAmzTargetLogs_20140328PutMetricFilterKey() {
  return ['#X-Amz-Target=Logs_20140328.PutMetricFilter'] as const
}

export function getXAmzTargetLogs_20140328PutQueryDefinitionKey() {
  return ['#X-Amz-Target=Logs_20140328.PutQueryDefinition'] as const
}

export function getXAmzTargetLogs_20140328PutResourcePolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.PutResourcePolicy'] as const
}

export function getXAmzTargetLogs_20140328PutRetentionPolicyKey() {
  return ['#X-Amz-Target=Logs_20140328.PutRetentionPolicy'] as const
}

export function getXAmzTargetLogs_20140328PutSubscriptionFilterKey() {
  return ['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter'] as const
}

export function getXAmzTargetLogs_20140328StartQueryKey() {
  return ['#X-Amz-Target=Logs_20140328.StartQuery'] as const
}

export function getXAmzTargetLogs_20140328StopQueryKey() {
  return ['#X-Amz-Target=Logs_20140328.StopQuery'] as const
}

export function getXAmzTargetLogs_20140328TagLogGroupKey() {
  return ['#X-Amz-Target=Logs_20140328.TagLogGroup'] as const
}

export function getXAmzTargetLogs_20140328TagResourceKey() {
  return ['#X-Amz-Target=Logs_20140328.TagResource'] as const
}

export function getXAmzTargetLogs_20140328TestMetricFilterKey() {
  return ['#X-Amz-Target=Logs_20140328.TestMetricFilter'] as const
}

export function getXAmzTargetLogs_20140328UntagLogGroupKey() {
  return ['#X-Amz-Target=Logs_20140328.UntagLogGroup'] as const
}

export function getXAmzTargetLogs_20140328UntagResourceKey() {
  return ['#X-Amz-Target=Logs_20140328.UntagResource'] as const
}

export function getPostXAmzTargetLogs20140328AssociateKmsKeyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.AssociateKmsKey',
    '/#X-Amz-Target=Logs_20140328.AssociateKmsKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328AssociateKmsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328AssociateKmsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.AssociateKmsKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328AssociateKmsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328AssociateKmsKeyMutationOptions<
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

export function getPostXAmzTargetLogs20140328CancelExportTaskMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CancelExportTask',
    '/#X-Amz-Target=Logs_20140328.CancelExportTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328CancelExportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328CancelExportTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.CancelExportTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328CancelExportTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328CancelExportTaskMutationOptions<
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

export function getPostXAmzTargetLogs20140328CreateExportTaskMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateExportTask',
    '/#X-Amz-Target=Logs_20140328.CreateExportTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328CreateExportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328CreateExportTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.CreateExportTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328CreateExportTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328CreateExportTaskMutationOptions<
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

export function getPostXAmzTargetLogs20140328CreateLogGroupMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateLogGroup',
    '/#X-Amz-Target=Logs_20140328.CreateLogGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328CreateLogGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328CreateLogGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.CreateLogGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328CreateLogGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328CreateLogGroupMutationOptions<
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

export function getPostXAmzTargetLogs20140328CreateLogStreamMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateLogStream',
    '/#X-Amz-Target=Logs_20140328.CreateLogStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328CreateLogStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328CreateLogStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.CreateLogStream'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328CreateLogStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328CreateLogStreamMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteAccountPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteAccountPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteAccountPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteAccountPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteAccountPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteAccountPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteAccountPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteDataProtectionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteDestinationMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteDestination',
    '/#X-Amz-Target=Logs_20140328.DeleteDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteDestinationMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteLogGroupMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteLogGroup',
    '/#X-Amz-Target=Logs_20140328.DeleteLogGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteLogGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteLogGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteLogGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteLogGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteLogGroupMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteLogStreamMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteLogStream',
    '/#X-Amz-Target=Logs_20140328.DeleteLogStream',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteLogStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteLogStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteLogStream'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteLogStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteLogStreamMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteMetricFilterMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteMetricFilter',
    '/#X-Amz-Target=Logs_20140328.DeleteMetricFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteMetricFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteMetricFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteMetricFilter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteMetricFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteMetricFilterMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteQueryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteQueryDefinition',
    '/#X-Amz-Target=Logs_20140328.DeleteQueryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteQueryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteQueryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteQueryDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteQueryDefinitionMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteResourcePolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteResourcePolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteRetentionPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteRetentionPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328DeleteSubscriptionFilterMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter',
    '/#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DeleteSubscriptionFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DeleteSubscriptionFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DeleteSubscriptionFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DeleteSubscriptionFilterMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeAccountPoliciesMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeAccountPolicies',
    '/#X-Amz-Target=Logs_20140328.DescribeAccountPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeAccountPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeAccountPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeAccountPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeAccountPoliciesMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeDestinationsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeDestinations',
    '/#X-Amz-Target=Logs_20140328.DescribeDestinations',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeDestinations'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeDestinations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeDestinationsMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeExportTasksMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeExportTasks',
    '/#X-Amz-Target=Logs_20140328.DescribeExportTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeExportTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeExportTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeExportTasks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeExportTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeExportTasksMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeLogGroupsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeLogGroups',
    '/#X-Amz-Target=Logs_20140328.DescribeLogGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeLogGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeLogGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeLogGroups'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeLogGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeLogGroupsMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeLogStreamsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeLogStreams',
    '/#X-Amz-Target=Logs_20140328.DescribeLogStreams',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeLogStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeLogStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeLogStreams'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeLogStreams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeLogStreamsMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeMetricFiltersMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeMetricFilters',
    '/#X-Amz-Target=Logs_20140328.DescribeMetricFilters',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeMetricFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeMetricFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeMetricFilters'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeMetricFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeMetricFiltersMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeQueriesMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeQueries',
    '/#X-Amz-Target=Logs_20140328.DescribeQueries',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeQueries'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeQueries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeQueriesMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeQueryDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions',
    '/#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeQueryDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeQueryDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeQueryDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeQueryDefinitionsMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeResourcePoliciesMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeResourcePolicies',
    '/#X-Amz-Target=Logs_20140328.DescribeResourcePolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeResourcePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeResourcePoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeResourcePolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DescribeResourcePoliciesMutationOptions<
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

export function getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters',
    '/#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DescribeSubscriptionFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersMutationOptions<
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

export function getPostXAmzTargetLogs20140328DisassociateKmsKeyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DisassociateKmsKey',
    '/#X-Amz-Target=Logs_20140328.DisassociateKmsKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328DisassociateKmsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328DisassociateKmsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.DisassociateKmsKey'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328DisassociateKmsKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328DisassociateKmsKeyMutationOptions<
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

export function getPostXAmzTargetLogs20140328FilterLogEventsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.FilterLogEvents',
    '/#X-Amz-Target=Logs_20140328.FilterLogEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328FilterLogEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328FilterLogEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.FilterLogEvents'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328FilterLogEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328FilterLogEventsMutationOptions<
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

export function getPostXAmzTargetLogs20140328GetDataProtectionPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328GetDataProtectionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328GetDataProtectionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328GetDataProtectionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328GetDataProtectionPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328GetLogEventsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogEvents',
    '/#X-Amz-Target=Logs_20140328.GetLogEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328GetLogEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328GetLogEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.GetLogEvents'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328GetLogEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328GetLogEventsMutationOptions<
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

export function getPostXAmzTargetLogs20140328GetLogGroupFieldsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogGroupFields',
    '/#X-Amz-Target=Logs_20140328.GetLogGroupFields',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328GetLogGroupFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328GetLogGroupFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.GetLogGroupFields'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328GetLogGroupFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328GetLogGroupFieldsMutationOptions<
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

export function getPostXAmzTargetLogs20140328GetLogRecordMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogRecord',
    '/#X-Amz-Target=Logs_20140328.GetLogRecord',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328GetLogRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328GetLogRecordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.GetLogRecord'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328GetLogRecord<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328GetLogRecordMutationOptions<
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

export function getPostXAmzTargetLogs20140328GetQueryResultsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetQueryResults',
    '/#X-Amz-Target=Logs_20140328.GetQueryResults',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328GetQueryResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328GetQueryResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.GetQueryResults'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328GetQueryResults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328GetQueryResultsMutationOptions<
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

export function getPostXAmzTargetLogs20140328ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.ListTagsForResource',
    '/#X-Amz-Target=Logs_20140328.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetLogs20140328ListTagsLogGroupMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.ListTagsLogGroup',
    '/#X-Amz-Target=Logs_20140328.ListTagsLogGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328ListTagsLogGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328ListTagsLogGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.ListTagsLogGroup'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328ListTagsLogGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328ListTagsLogGroupMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutAccountPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutAccountPolicy',
    '/#X-Amz-Target=Logs_20140328.PutAccountPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutAccountPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutAccountPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutAccountPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutAccountPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutAccountPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutDataProtectionPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutDataProtectionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutDataProtectionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutDataProtectionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutDataProtectionPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutDestinationMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDestination',
    '/#X-Amz-Target=Logs_20140328.PutDestination',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutDestinationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutDestinationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutDestination'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutDestination<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutDestinationMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutDestinationPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDestinationPolicy',
    '/#X-Amz-Target=Logs_20140328.PutDestinationPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutDestinationPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutDestinationPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutDestinationPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutDestinationPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutDestinationPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutLogEventsMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutLogEvents',
    '/#X-Amz-Target=Logs_20140328.PutLogEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutLogEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutLogEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.PutLogEvents'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328PutLogEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutLogEventsMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutMetricFilterMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutMetricFilter',
    '/#X-Amz-Target=Logs_20140328.PutMetricFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutMetricFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutMetricFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutMetricFilter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutMetricFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutMetricFilterMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutQueryDefinitionMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutQueryDefinition',
    '/#X-Amz-Target=Logs_20140328.PutQueryDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutQueryDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutQueryDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutQueryDefinition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutQueryDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutQueryDefinitionMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutResourcePolicy',
    '/#X-Amz-Target=Logs_20140328.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutResourcePolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutResourcePolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutRetentionPolicyMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutRetentionPolicy',
    '/#X-Amz-Target=Logs_20140328.PutRetentionPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutRetentionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutRetentionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutRetentionPolicy'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutRetentionPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutRetentionPolicyMutationOptions<
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

export function getPostXAmzTargetLogs20140328PutSubscriptionFilterMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutSubscriptionFilter',
    '/#X-Amz-Target=Logs_20140328.PutSubscriptionFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328PutSubscriptionFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328PutSubscriptionFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328PutSubscriptionFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328PutSubscriptionFilterMutationOptions<
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

export function getPostXAmzTargetLogs20140328StartQueryMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.StartQuery',
    '/#X-Amz-Target=Logs_20140328.StartQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328StartQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328StartQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.StartQuery'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328StartQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328StartQueryMutationOptions<
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

export function getPostXAmzTargetLogs20140328StopQueryMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.StopQuery',
    '/#X-Amz-Target=Logs_20140328.StopQuery',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328StopQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328StopQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.StopQuery'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328StopQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328StopQueryMutationOptions<
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

export function getPostXAmzTargetLogs20140328TagLogGroupMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TagLogGroup',
    '/#X-Amz-Target=Logs_20140328.TagLogGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328TagLogGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328TagLogGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.TagLogGroup'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328TagLogGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328TagLogGroupMutationOptions<
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

export function getPostXAmzTargetLogs20140328TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TagResource',
    '/#X-Amz-Target=Logs_20140328.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.TagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328TagResourceMutationOptions<
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

export function getPostXAmzTargetLogs20140328TestMetricFilterMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TestMetricFilter',
    '/#X-Amz-Target=Logs_20140328.TestMetricFilter',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328TestMetricFilterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328TestMetricFilterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Logs_20140328.TestMetricFilter'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetLogs20140328TestMetricFilter<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328TestMetricFilterMutationOptions<
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

export function getPostXAmzTargetLogs20140328UntagLogGroupMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.UntagLogGroup',
    '/#X-Amz-Target=Logs_20140328.UntagLogGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328UntagLogGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328UntagLogGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.UntagLogGroup'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328UntagLogGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328UntagLogGroupMutationOptions<
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

export function getPostXAmzTargetLogs20140328UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.UntagResource',
    '/#X-Amz-Target=Logs_20140328.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetLogs20140328UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetLogs20140328UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=Logs_20140328.UntagResource'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetLogs20140328UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetLogs20140328UntagResourceMutationOptions<
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

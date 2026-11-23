import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetLogs20140328AssociateKmsKeyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.AssociateKmsKey',
    '/#X-Amz-Target=Logs_20140328.AssociateKmsKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328AssociateKmsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328AssociateKmsKeyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.AssociateKmsKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328CancelExportTaskKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CancelExportTask',
    '/#X-Amz-Target=Logs_20140328.CancelExportTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328CancelExportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328CancelExportTaskKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.CancelExportTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328CreateExportTaskKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateExportTask',
    '/#X-Amz-Target=Logs_20140328.CreateExportTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328CreateExportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328CreateExportTaskKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.CreateExportTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328CreateLogGroupKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateLogGroup',
    '/#X-Amz-Target=Logs_20140328.CreateLogGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328CreateLogGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328CreateLogGroupKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.CreateLogGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328CreateLogStreamKey() {
  return [
    '#X-Amz-Target=Logs_20140328.CreateLogStream',
    '/#X-Amz-Target=Logs_20140328.CreateLogStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328CreateLogStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328CreateLogStreamKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.CreateLogStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteAccountPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteAccountPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteAccountPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteAccountPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteAccountPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteDataProtectionPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteDataProtectionPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteDestinationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteDestination',
    '/#X-Amz-Target=Logs_20140328.DeleteDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteDestinationKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteLogGroupKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteLogGroup',
    '/#X-Amz-Target=Logs_20140328.DeleteLogGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteLogGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteLogGroupKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteLogGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteLogStreamKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteLogStream',
    '/#X-Amz-Target=Logs_20140328.DeleteLogStream',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteLogStream<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteLogStreamKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteLogStream'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteMetricFilterKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteMetricFilter',
    '/#X-Amz-Target=Logs_20140328.DeleteMetricFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteMetricFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteMetricFilterKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteMetricFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteQueryDefinitionKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteQueryDefinition',
    '/#X-Amz-Target=Logs_20140328.DeleteQueryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteQueryDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteQueryDefinitionKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteResourcePolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteRetentionPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy',
    '/#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteRetentionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteRetentionPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DeleteSubscriptionFilterKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter',
    '/#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DeleteSubscriptionFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DeleteSubscriptionFilterKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeAccountPoliciesKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeAccountPolicies',
    '/#X-Amz-Target=Logs_20140328.DescribeAccountPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeAccountPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeAccountPoliciesKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeDestinationsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeDestinations',
    '/#X-Amz-Target=Logs_20140328.DescribeDestinations',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeDestinations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeDestinationsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeDestinations'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeExportTasksKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeExportTasks',
    '/#X-Amz-Target=Logs_20140328.DescribeExportTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeExportTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeExportTasksKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeExportTasks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeLogGroupsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeLogGroups',
    '/#X-Amz-Target=Logs_20140328.DescribeLogGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeLogGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeLogGroupsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeLogGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeLogStreamsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeLogStreams',
    '/#X-Amz-Target=Logs_20140328.DescribeLogStreams',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeLogStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeLogStreamsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeLogStreams'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeMetricFiltersKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeMetricFilters',
    '/#X-Amz-Target=Logs_20140328.DescribeMetricFilters',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeMetricFilters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeMetricFiltersKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeMetricFilters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeQueriesKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeQueries',
    '/#X-Amz-Target=Logs_20140328.DescribeQueries',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeQueries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeQueriesKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeQueries'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeQueryDefinitionsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions',
    '/#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeQueryDefinitions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeQueryDefinitionsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeResourcePoliciesKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeResourcePolicies',
    '/#X-Amz-Target=Logs_20140328.DescribeResourcePolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeResourcePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeResourcePoliciesKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters',
    '/#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DescribeSubscriptionFilters<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DescribeSubscriptionFiltersKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328DisassociateKmsKeyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.DisassociateKmsKey',
    '/#X-Amz-Target=Logs_20140328.DisassociateKmsKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328DisassociateKmsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328DisassociateKmsKeyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.DisassociateKmsKey'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328FilterLogEventsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.FilterLogEvents',
    '/#X-Amz-Target=Logs_20140328.FilterLogEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328FilterLogEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328FilterLogEventsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.FilterLogEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328GetDataProtectionPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328GetDataProtectionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328GetDataProtectionPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328GetLogEventsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogEvents',
    '/#X-Amz-Target=Logs_20140328.GetLogEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328GetLogEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328GetLogEventsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.GetLogEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328GetLogGroupFieldsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogGroupFields',
    '/#X-Amz-Target=Logs_20140328.GetLogGroupFields',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328GetLogGroupFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328GetLogGroupFieldsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.GetLogGroupFields'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328GetLogRecordKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetLogRecord',
    '/#X-Amz-Target=Logs_20140328.GetLogRecord',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328GetLogRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328GetLogRecordKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.GetLogRecord'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328GetQueryResultsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.GetQueryResults',
    '/#X-Amz-Target=Logs_20140328.GetQueryResults',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328GetQueryResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328GetQueryResultsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.GetQueryResults'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=Logs_20140328.ListTagsForResource',
    '/#X-Amz-Target=Logs_20140328.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328ListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328ListTagsLogGroupKey() {
  return [
    '#X-Amz-Target=Logs_20140328.ListTagsLogGroup',
    '/#X-Amz-Target=Logs_20140328.ListTagsLogGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328ListTagsLogGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328ListTagsLogGroupKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.ListTagsLogGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutAccountPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutAccountPolicy',
    '/#X-Amz-Target=Logs_20140328.PutAccountPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutAccountPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutAccountPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutAccountPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutDataProtectionPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy',
    '/#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutDataProtectionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutDataProtectionPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutDestinationKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDestination',
    '/#X-Amz-Target=Logs_20140328.PutDestination',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutDestination<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutDestinationKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutDestination'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutDestinationPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutDestinationPolicy',
    '/#X-Amz-Target=Logs_20140328.PutDestinationPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutDestinationPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutDestinationPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutDestinationPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutLogEventsKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutLogEvents',
    '/#X-Amz-Target=Logs_20140328.PutLogEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutLogEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutLogEventsKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.PutLogEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutMetricFilterKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutMetricFilter',
    '/#X-Amz-Target=Logs_20140328.PutMetricFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutMetricFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutMetricFilterKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutMetricFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutQueryDefinitionKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutQueryDefinition',
    '/#X-Amz-Target=Logs_20140328.PutQueryDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutQueryDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutQueryDefinitionKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutQueryDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutResourcePolicy',
    '/#X-Amz-Target=Logs_20140328.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutRetentionPolicyKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutRetentionPolicy',
    '/#X-Amz-Target=Logs_20140328.PutRetentionPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutRetentionPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutRetentionPolicyKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutRetentionPolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328PutSubscriptionFilterKey() {
  return [
    '#X-Amz-Target=Logs_20140328.PutSubscriptionFilter',
    '/#X-Amz-Target=Logs_20140328.PutSubscriptionFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328PutSubscriptionFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328PutSubscriptionFilterKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328StartQueryKey() {
  return [
    '#X-Amz-Target=Logs_20140328.StartQuery',
    '/#X-Amz-Target=Logs_20140328.StartQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328StartQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328StartQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.StartQuery'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328StopQueryKey() {
  return [
    '#X-Amz-Target=Logs_20140328.StopQuery',
    '/#X-Amz-Target=Logs_20140328.StopQuery',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328StopQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328StopQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=Logs_20140328.StopQuery'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328TagLogGroupKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TagLogGroup',
    '/#X-Amz-Target=Logs_20140328.TagLogGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328TagLogGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328TagLogGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.TagLogGroup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328TagResourceKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TagResource',
    '/#X-Amz-Target=Logs_20140328.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328TagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=Logs_20140328.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328TestMetricFilterKey() {
  return [
    '#X-Amz-Target=Logs_20140328.TestMetricFilter',
    '/#X-Amz-Target=Logs_20140328.TestMetricFilter',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328TestMetricFilter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328TestMetricFilterKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.TestMetricFilter'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328UntagLogGroupKey() {
  return [
    '#X-Amz-Target=Logs_20140328.UntagLogGroup',
    '/#X-Amz-Target=Logs_20140328.UntagLogGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328UntagLogGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328UntagLogGroupKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.UntagLogGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetLogs20140328UntagResourceKey() {
  return [
    '#X-Amz-Target=Logs_20140328.UntagResource',
    '/#X-Amz-Target=Logs_20140328.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetLogs20140328UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetLogs20140328UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=Logs_20140328.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

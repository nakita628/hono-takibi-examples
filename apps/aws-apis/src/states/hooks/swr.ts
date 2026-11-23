import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSStepFunctionsCreateActivityKey() {
  return ['#X-Amz-Target=AWSStepFunctions.CreateActivity'] as const
}

export function getXAmzTargetAWSStepFunctionsCreateStateMachineKey() {
  return ['#X-Amz-Target=AWSStepFunctions.CreateStateMachine'] as const
}

export function getXAmzTargetAWSStepFunctionsCreateStateMachineAliasKey() {
  return ['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias'] as const
}

export function getXAmzTargetAWSStepFunctionsDeleteActivityKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DeleteActivity'] as const
}

export function getXAmzTargetAWSStepFunctionsDeleteStateMachineKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine'] as const
}

export function getXAmzTargetAWSStepFunctionsDeleteStateMachineAliasKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias'] as const
}

export function getXAmzTargetAWSStepFunctionsDeleteStateMachineVersionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeActivityKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeActivity'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeExecutionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeExecution'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeMapRunKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeMapRun'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeStateMachineKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeStateMachineAliasKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias'] as const
}

export function getXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution'] as const
}

export function getXAmzTargetAWSStepFunctionsGetActivityTaskKey() {
  return ['#X-Amz-Target=AWSStepFunctions.GetActivityTask'] as const
}

export function getXAmzTargetAWSStepFunctionsGetExecutionHistoryKey() {
  return ['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory'] as const
}

export function getXAmzTargetAWSStepFunctionsListActivitiesKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListActivities'] as const
}

export function getXAmzTargetAWSStepFunctionsListExecutionsKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListExecutions'] as const
}

export function getXAmzTargetAWSStepFunctionsListMapRunsKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListMapRuns'] as const
}

export function getXAmzTargetAWSStepFunctionsListStateMachineAliasesKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases'] as const
}

export function getXAmzTargetAWSStepFunctionsListStateMachineVersionsKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions'] as const
}

export function getXAmzTargetAWSStepFunctionsListStateMachinesKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListStateMachines'] as const
}

export function getXAmzTargetAWSStepFunctionsListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSStepFunctions.ListTagsForResource'] as const
}

export function getXAmzTargetAWSStepFunctionsPublishStateMachineVersionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion'] as const
}

export function getXAmzTargetAWSStepFunctionsSendTaskFailureKey() {
  return ['#X-Amz-Target=AWSStepFunctions.SendTaskFailure'] as const
}

export function getXAmzTargetAWSStepFunctionsSendTaskHeartbeatKey() {
  return ['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat'] as const
}

export function getXAmzTargetAWSStepFunctionsSendTaskSuccessKey() {
  return ['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess'] as const
}

export function getXAmzTargetAWSStepFunctionsStartExecutionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.StartExecution'] as const
}

export function getXAmzTargetAWSStepFunctionsStartSyncExecutionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.StartSyncExecution'] as const
}

export function getXAmzTargetAWSStepFunctionsStopExecutionKey() {
  return ['#X-Amz-Target=AWSStepFunctions.StopExecution'] as const
}

export function getXAmzTargetAWSStepFunctionsTagResourceKey() {
  return ['#X-Amz-Target=AWSStepFunctions.TagResource'] as const
}

export function getXAmzTargetAWSStepFunctionsUntagResourceKey() {
  return ['#X-Amz-Target=AWSStepFunctions.UntagResource'] as const
}

export function getXAmzTargetAWSStepFunctionsUpdateMapRunKey() {
  return ['#X-Amz-Target=AWSStepFunctions.UpdateMapRun'] as const
}

export function getXAmzTargetAWSStepFunctionsUpdateStateMachineKey() {
  return ['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine'] as const
}

export function getXAmzTargetAWSStepFunctionsUpdateStateMachineAliasKey() {
  return ['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias'] as const
}

export function getPostXAmzTargetAWSStepFunctionsCreateActivityKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateActivity',
    '/#X-Amz-Target=AWSStepFunctions.CreateActivity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsCreateActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsCreateActivityKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.CreateActivity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsCreateStateMachine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsCreateStateMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.CreateStateMachine'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsCreateStateMachineAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDeleteActivityKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteActivity',
    '/#X-Amz-Target=AWSStepFunctions.DeleteActivity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDeleteActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDeleteActivityKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DeleteActivity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDeleteStateMachine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDeleteStateMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDeleteStateMachineAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDeleteStateMachineVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeActivityKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeActivity',
    '/#X-Amz-Target=AWSStepFunctions.DescribeActivity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeActivityKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeActivity'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeExecutionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeExecution',
    '/#X-Amz-Target=AWSStepFunctions.DescribeExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeExecutionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeMapRunKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeMapRun',
    '/#X-Amz-Target=AWSStepFunctions.DescribeMapRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeMapRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeMapRunKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeMapRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeStateMachine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeStateMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeStateMachineAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsGetActivityTaskKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.GetActivityTask',
    '/#X-Amz-Target=AWSStepFunctions.GetActivityTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsGetActivityTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsGetActivityTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.GetActivityTask'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.GetExecutionHistory',
    '/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsGetExecutionHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListActivitiesKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListActivities',
    '/#X-Amz-Target=AWSStepFunctions.ListActivities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListActivities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListActivitiesKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListActivities'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListExecutionsKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListExecutions',
    '/#X-Amz-Target=AWSStepFunctions.ListExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListExecutionsKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListMapRunsKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListMapRuns',
    '/#X-Amz-Target=AWSStepFunctions.ListMapRuns',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListMapRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListMapRunsKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListMapRuns'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListStateMachineAliases<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListStateMachineVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachinesKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachines',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachines',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListStateMachines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListStateMachinesKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListStateMachines'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListTagsForResource',
    '/#X-Amz-Target=AWSStepFunctions.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion',
    '/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsPublishStateMachineVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskFailureKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskFailure',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskFailure',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsSendTaskFailure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsSendTaskFailureKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.SendTaskFailure'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsSendTaskHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskSuccessKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskSuccess',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsSendTaskSuccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsSendTaskSuccessKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsStartExecutionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StartExecution',
    '/#X-Amz-Target=AWSStepFunctions.StartExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsStartExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsStartExecutionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.StartExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsStartSyncExecutionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StartSyncExecution',
    '/#X-Amz-Target=AWSStepFunctions.StartSyncExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsStartSyncExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsStartSyncExecutionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.StartSyncExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsStopExecutionKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StopExecution',
    '/#X-Amz-Target=AWSStepFunctions.StopExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsStopExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsStopExecutionKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.StopExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsTagResourceKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.TagResource',
    '/#X-Amz-Target=AWSStepFunctions.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UntagResource',
    '/#X-Amz-Target=AWSStepFunctions.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsUpdateMapRunKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateMapRun',
    '/#X-Amz-Target=AWSStepFunctions.UpdateMapRun',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsUpdateMapRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsUpdateMapRunKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.UpdateMapRun'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsUpdateStateMachine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsUpdateStateMachineKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSStepFunctionsUpdateStateMachineAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasKey()
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
            (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

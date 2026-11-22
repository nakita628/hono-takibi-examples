import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetAWSStepFunctionsCreateActivityMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateActivity',
    '/#X-Amz-Target=AWSStepFunctions.CreateActivity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsCreateActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsCreateActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.CreateActivity'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsCreateActivity<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsCreateActivityMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsCreateStateMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.CreateStateMachine'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsCreateStateMachine<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsCreateStateMachineMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsCreateStateMachineAlias<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsCreateStateMachineAliasMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDeleteActivityMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteActivity',
    '/#X-Amz-Target=AWSStepFunctions.DeleteActivity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDeleteActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDeleteActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DeleteActivity'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDeleteActivity<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDeleteActivityMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDeleteStateMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDeleteStateMachine<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDeleteStateMachineMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDeleteStateMachineAlias<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsDeleteStateMachineAliasMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion',
    '/#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersion<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsDeleteStateMachineVersionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeActivityMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeActivity',
    '/#X-Amz-Target=AWSStepFunctions.DescribeActivity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeActivityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeActivityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeActivity'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeActivity<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDescribeActivityMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeExecutionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeExecution',
    '/#X-Amz-Target=AWSStepFunctions.DescribeExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeExecution<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDescribeExecutionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeMapRunMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeMapRun',
    '/#X-Amz-Target=AWSStepFunctions.DescribeMapRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeMapRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeMapRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeMapRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeMapRun<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDescribeMapRunMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeStateMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeStateMachine<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsDescribeStateMachineMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeStateMachineAlias<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsDescribeStateMachineAliasMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution',
    '/#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecution<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsGetActivityTaskMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.GetActivityTask',
    '/#X-Amz-Target=AWSStepFunctions.GetActivityTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsGetActivityTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsGetActivityTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.GetActivityTask'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsGetActivityTask<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsGetActivityTaskMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.GetExecutionHistory',
    '/#X-Amz-Target=AWSStepFunctions.GetExecutionHistory',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsGetExecutionHistory<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsGetExecutionHistoryMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListActivitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListActivities',
    '/#X-Amz-Target=AWSStepFunctions.ListActivities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListActivities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListActivities<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsListActivitiesMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListExecutions',
    '/#X-Amz-Target=AWSStepFunctions.ListExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListExecutions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListExecutions<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsListExecutionsMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListMapRunsMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListMapRuns',
    '/#X-Amz-Target=AWSStepFunctions.ListMapRuns',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListMapRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListMapRunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListMapRuns'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListMapRuns<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsListMapRunsMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListStateMachineAliases<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsListStateMachineAliasesMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListStateMachineVersions<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsListStateMachineVersionsMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListStateMachinesMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListStateMachines',
    '/#X-Amz-Target=AWSStepFunctions.ListStateMachines',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListStateMachinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListStateMachinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListStateMachines'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListStateMachines<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsListStateMachinesMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.ListTagsForResource',
    '/#X-Amz-Target=AWSStepFunctions.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion',
    '/#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsPublishStateMachineVersion<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsPublishStateMachineVersionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsSendTaskFailureMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskFailure',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskFailure',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskFailureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsSendTaskFailureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.SendTaskFailure'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsSendTaskFailure<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsSendTaskFailureMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsSendTaskHeartbeat<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsSendTaskHeartbeatMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsSendTaskSuccessMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.SendTaskSuccess',
    '/#X-Amz-Target=AWSStepFunctions.SendTaskSuccess',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsSendTaskSuccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsSendTaskSuccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsSendTaskSuccess<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsSendTaskSuccessMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsStartExecutionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StartExecution',
    '/#X-Amz-Target=AWSStepFunctions.StartExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsStartExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsStartExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.StartExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsStartExecution<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsStartExecutionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsStartSyncExecutionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StartSyncExecution',
    '/#X-Amz-Target=AWSStepFunctions.StartSyncExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsStartSyncExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsStartSyncExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.StartSyncExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsStartSyncExecution<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsStartSyncExecutionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsStopExecutionMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.StopExecution',
    '/#X-Amz-Target=AWSStepFunctions.StopExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsStopExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsStopExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.StopExecution'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsStopExecution<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsStopExecutionMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.TagResource',
    '/#X-Amz-Target=AWSStepFunctions.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsTagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UntagResource',
    '/#X-Amz-Target=AWSStepFunctions.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsUntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsUpdateMapRunMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateMapRun',
    '/#X-Amz-Target=AWSStepFunctions.UpdateMapRun',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsUpdateMapRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsUpdateMapRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.UpdateMapRun'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsUpdateMapRun<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsUpdateMapRunMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateStateMachine',
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachine',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsUpdateStateMachineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsUpdateStateMachine<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
        >,
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
    const mutationDefaults = getPostXAmzTargetAWSStepFunctionsUpdateStateMachineMutationOptions<
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

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasMutationKey() {
  return [
    '#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias',
    '/#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAWSStepFunctionsUpdateStateMachineAlias<
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
                  (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
        >,
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
    const mutationDefaults =
      getPostXAmzTargetAWSStepFunctionsUpdateStateMachineAliasMutationOptions<
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

import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCodePipeline_20150709AcknowledgeJobKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob'] as const
}

export function getXAmzTargetCodePipeline_20150709AcknowledgeThirdPartyJobKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob'] as const
}

export function getXAmzTargetCodePipeline_20150709CreateCustomActionTypeKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType'] as const
}

export function getXAmzTargetCodePipeline_20150709CreatePipelineKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.CreatePipeline'] as const
}

export function getXAmzTargetCodePipeline_20150709DeleteCustomActionTypeKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType'] as const
}

export function getXAmzTargetCodePipeline_20150709DeletePipelineKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.DeletePipeline'] as const
}

export function getXAmzTargetCodePipeline_20150709DeleteWebhookKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook'] as const
}

export function getXAmzTargetCodePipeline_20150709DeregisterWebhookWithThirdPartyKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty'] as const
}

export function getXAmzTargetCodePipeline_20150709DisableStageTransitionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition'] as const
}

export function getXAmzTargetCodePipeline_20150709EnableStageTransitionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition'] as const
}

export function getXAmzTargetCodePipeline_20150709GetActionTypeKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetActionType'] as const
}

export function getXAmzTargetCodePipeline_20150709GetJobDetailsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetJobDetails'] as const
}

export function getXAmzTargetCodePipeline_20150709GetPipelineKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetPipeline'] as const
}

export function getXAmzTargetCodePipeline_20150709GetPipelineExecutionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution'] as const
}

export function getXAmzTargetCodePipeline_20150709GetPipelineStateKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetPipelineState'] as const
}

export function getXAmzTargetCodePipeline_20150709GetThirdPartyJobDetailsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails'] as const
}

export function getXAmzTargetCodePipeline_20150709ListActionExecutionsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions'] as const
}

export function getXAmzTargetCodePipeline_20150709ListActionTypesKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListActionTypes'] as const
}

export function getXAmzTargetCodePipeline_20150709ListPipelineExecutionsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions'] as const
}

export function getXAmzTargetCodePipeline_20150709ListPipelinesKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListPipelines'] as const
}

export function getXAmzTargetCodePipeline_20150709ListTagsForResourceKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource'] as const
}

export function getXAmzTargetCodePipeline_20150709ListWebhooksKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.ListWebhooks'] as const
}

export function getXAmzTargetCodePipeline_20150709PollForJobsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PollForJobs'] as const
}

export function getXAmzTargetCodePipeline_20150709PollForThirdPartyJobsKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs'] as const
}

export function getXAmzTargetCodePipeline_20150709PutActionRevisionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutActionRevision'] as const
}

export function getXAmzTargetCodePipeline_20150709PutApprovalResultKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult'] as const
}

export function getXAmzTargetCodePipeline_20150709PutJobFailureResultKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult'] as const
}

export function getXAmzTargetCodePipeline_20150709PutJobSuccessResultKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult'] as const
}

export function getXAmzTargetCodePipeline_20150709PutThirdPartyJobFailureResultKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult'] as const
}

export function getXAmzTargetCodePipeline_20150709PutThirdPartyJobSuccessResultKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult'] as const
}

export function getXAmzTargetCodePipeline_20150709PutWebhookKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.PutWebhook'] as const
}

export function getXAmzTargetCodePipeline_20150709RegisterWebhookWithThirdPartyKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty'] as const
}

export function getXAmzTargetCodePipeline_20150709RetryStageExecutionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution'] as const
}

export function getXAmzTargetCodePipeline_20150709StartPipelineExecutionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution'] as const
}

export function getXAmzTargetCodePipeline_20150709StopPipelineExecutionKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution'] as const
}

export function getXAmzTargetCodePipeline_20150709TagResourceKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.TagResource'] as const
}

export function getXAmzTargetCodePipeline_20150709UntagResourceKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.UntagResource'] as const
}

export function getXAmzTargetCodePipeline_20150709UpdateActionTypeKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.UpdateActionType'] as const
}

export function getXAmzTargetCodePipeline_20150709UpdatePipelineKey() {
  return ['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline'] as const
}

export function getPostXAmzTargetCodePipeline20150709AcknowledgeJobKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob',
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709AcknowledgeJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709AcknowledgeJobKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob',
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType',
    '/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709CreateCustomActionType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709CreatePipelineKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.CreatePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.CreatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709CreatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709CreatePipelineKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.CreatePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType',
    '/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709DeleteCustomActionType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709DeletePipelineKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeletePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.DeletePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709DeletePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709DeletePipelineKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.DeletePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709DeleteWebhookKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeleteWebhook',
    '/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709DeleteWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709DeleteWebhookKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty',
    '/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdParty<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709DisableStageTransitionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DisableStageTransition',
    '/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709DisableStageTransition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709DisableStageTransitionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709EnableStageTransitionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.EnableStageTransition',
    '/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709EnableStageTransition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709EnableStageTransitionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetActionTypeKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetActionType',
    '/#X-Amz-Target=CodePipeline_20150709.GetActionType',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetActionType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetActionTypeKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetActionType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetJobDetailsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetJobDetails',
    '/#X-Amz-Target=CodePipeline_20150709.GetJobDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetJobDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetJobDetailsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetJobDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipeline',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetPipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetPipelineKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetPipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineExecutionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetPipelineExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetPipelineExecutionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineStateKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipelineState',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineState',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetPipelineState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetPipelineStateKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetPipelineState'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails',
    '/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709GetThirdPartyJobDetails<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListActionExecutionsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListActionExecutions',
    '/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListActionExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListActionExecutionsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListActionTypesKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListActionTypes',
    '/#X-Amz-Target=CodePipeline_20150709.ListActionTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListActionTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListActionTypesKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListActionTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions',
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListPipelineExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListPipelinesKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListPipelines',
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelines',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListPipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListPipelinesKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListPipelines'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListTagsForResource',
    '/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709ListWebhooksKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListWebhooks',
    '/#X-Amz-Target=CodePipeline_20150709.ListWebhooks',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709ListWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709ListWebhooksKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.ListWebhooks'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PollForJobsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PollForJobs',
    '/#X-Amz-Target=CodePipeline_20150709.PollForJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PollForJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PollForJobsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PollForJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs',
    '/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PollForThirdPartyJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutActionRevisionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutActionRevision',
    '/#X-Amz-Target=CodePipeline_20150709.PutActionRevision',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutActionRevision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PutActionRevisionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutActionRevision'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutApprovalResultKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutApprovalResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutApprovalResult<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PutApprovalResultKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutJobFailureResultKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutJobFailureResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PutJobFailureResultKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutJobSuccessResultKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutJobSuccessResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PutJobSuccessResultKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResult<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709PutWebhookKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutWebhook',
    '/#X-Amz-Target=CodePipeline_20150709.PutWebhook',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709PutWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709PutWebhookKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.PutWebhook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty',
    '/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdParty<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709RetryStageExecutionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.RetryStageExecution',
    '/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709RetryStageExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709RetryStageExecutionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709StartPipelineExecutionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709StartPipelineExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709StartPipelineExecutionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709StopPipelineExecutionKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709StopPipelineExecution<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709StopPipelineExecutionKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709TagResourceKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.TagResource',
    '/#X-Amz-Target=CodePipeline_20150709.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709TagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709UntagResourceKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UntagResource',
    '/#X-Amz-Target=CodePipeline_20150709.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709UpdateActionTypeKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UpdateActionType',
    '/#X-Amz-Target=CodePipeline_20150709.UpdateActionType',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709UpdateActionType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709UpdateActionTypeKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.UpdateActionType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodePipeline20150709UpdatePipelineKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UpdatePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodePipeline20150709UpdatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodePipeline20150709UpdatePipelineKey()
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
            (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

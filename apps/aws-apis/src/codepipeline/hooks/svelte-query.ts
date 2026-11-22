import { createMutation, mutationOptions } from '@tanstack/svelte-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/svelte-query'
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

export function getPostXAmzTargetCodePipeline20150709AcknowledgeJobMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob',
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709AcknowledgeJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709AcknowledgeJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709AcknowledgeJob<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709AcknowledgeJobMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob',
    '/#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJob<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJobMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType',
    '/#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709CreateCustomActionType<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709CreateCustomActionTypeMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709CreatePipelineMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.CreatePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.CreatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709CreatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709CreatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.CreatePipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709CreatePipeline<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709CreatePipelineMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType',
    '/#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709DeleteCustomActionType<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709DeleteCustomActionTypeMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709DeletePipelineMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeletePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.DeletePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709DeletePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709DeletePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.DeletePipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709DeletePipeline<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709DeletePipelineMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709DeleteWebhookMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeleteWebhook',
    '/#X-Amz-Target=CodePipeline_20150709.DeleteWebhook',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709DeleteWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709DeleteWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709DeleteWebhook<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709DeleteWebhookMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty',
    '/#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdParty<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdPartyMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709DisableStageTransitionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.DisableStageTransition',
    '/#X-Amz-Target=CodePipeline_20150709.DisableStageTransition',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709DisableStageTransitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709DisableStageTransitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709DisableStageTransition<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709DisableStageTransitionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709EnableStageTransitionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.EnableStageTransition',
    '/#X-Amz-Target=CodePipeline_20150709.EnableStageTransition',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709EnableStageTransitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709EnableStageTransitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709EnableStageTransition<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709EnableStageTransitionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetActionTypeMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetActionType',
    '/#X-Amz-Target=CodePipeline_20150709.GetActionType',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetActionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetActionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetActionType'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetActionType<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709GetActionTypeMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetJobDetailsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetJobDetails',
    '/#X-Amz-Target=CodePipeline_20150709.GetJobDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetJobDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetJobDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetJobDetails'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetJobDetails<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709GetJobDetailsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetPipelineMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipeline',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetPipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetPipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetPipeline<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709GetPipelineMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetPipelineExecution<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709GetPipelineExecutionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetPipelineStateMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetPipelineState',
    '/#X-Amz-Target=CodePipeline_20150709.GetPipelineState',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetPipelineStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetPipelineStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetPipelineState'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetPipelineState<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709GetPipelineStateMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails',
    '/#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetails<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709GetThirdPartyJobDetailsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListActionExecutionsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListActionExecutions',
    '/#X-Amz-Target=CodePipeline_20150709.ListActionExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListActionExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListActionExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListActionExecutions<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709ListActionExecutionsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListActionTypesMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListActionTypes',
    '/#X-Amz-Target=CodePipeline_20150709.ListActionTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListActionTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListActionTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListActionTypes'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListActionTypes<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709ListActionTypesMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions',
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListPipelineExecutions<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709ListPipelineExecutionsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListPipelinesMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListPipelines',
    '/#X-Amz-Target=CodePipeline_20150709.ListPipelines',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListPipelinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListPipelines'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListPipelines<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709ListPipelinesMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListTagsForResource',
    '/#X-Amz-Target=CodePipeline_20150709.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709ListWebhooksMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.ListWebhooks',
    '/#X-Amz-Target=CodePipeline_20150709.ListWebhooks',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709ListWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709ListWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.ListWebhooks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709ListWebhooks<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709ListWebhooksMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PollForJobsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PollForJobs',
    '/#X-Amz-Target=CodePipeline_20150709.PollForJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PollForJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PollForJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PollForJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PollForJobs<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709PollForJobsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs',
    '/#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PollForThirdPartyJobs<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709PollForThirdPartyJobsMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutActionRevisionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutActionRevision',
    '/#X-Amz-Target=CodePipeline_20150709.PutActionRevision',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutActionRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutActionRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutActionRevision'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutActionRevision<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709PutActionRevisionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutApprovalResultMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutApprovalResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutApprovalResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutApprovalResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutApprovalResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutApprovalResult<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709PutApprovalResultMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutJobFailureResultMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutJobFailureResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutJobFailureResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutJobFailureResult<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709PutJobFailureResultMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutJobSuccessResultMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutJobSuccessResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutJobSuccessResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutJobSuccessResult<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709PutJobSuccessResultMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResult<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResultMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult',
    '/#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResult<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResultMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709PutWebhookMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.PutWebhook',
    '/#X-Amz-Target=CodePipeline_20150709.PutWebhook',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709PutWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709PutWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.PutWebhook'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709PutWebhook<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709PutWebhookMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty',
    '/#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdParty<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709RegisterWebhookWithThirdPartyMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709RetryStageExecutionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.RetryStageExecution',
    '/#X-Amz-Target=CodePipeline_20150709.RetryStageExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709RetryStageExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709RetryStageExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709RetryStageExecution<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709RetryStageExecutionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709StartPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709StartPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709StartPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709StartPipelineExecution<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709StartPipelineExecutionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709StopPipelineExecutionMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution',
    '/#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709StopPipelineExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709StopPipelineExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709StopPipelineExecution<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
        >,
        TOnMutateResult
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
      getPostXAmzTargetCodePipeline20150709StopPipelineExecutionMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709TagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.TagResource',
    '/#X-Amz-Target=CodePipeline_20150709.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709TagResource<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709TagResourceMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UntagResource',
    '/#X-Amz-Target=CodePipeline_20150709.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709UntagResource<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709UntagResourceMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709UpdateActionTypeMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UpdateActionType',
    '/#X-Amz-Target=CodePipeline_20150709.UpdateActionType',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709UpdateActionTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709UpdateActionTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.UpdateActionType'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709UpdateActionType<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709UpdateActionTypeMutationOptions<
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

export function getPostXAmzTargetCodePipeline20150709UpdatePipelineMutationKey() {
  return [
    '#X-Amz-Target=CodePipeline_20150709.UpdatePipeline',
    '/#X-Amz-Target=CodePipeline_20150709.UpdatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodePipeline20150709UpdatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodePipeline20150709UpdatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetCodePipeline20150709UpdatePipeline<
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
                  (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetCodePipeline20150709UpdatePipelineMutationOptions<
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

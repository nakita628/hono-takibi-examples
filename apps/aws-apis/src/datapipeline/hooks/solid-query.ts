import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetDataPipelineActivatePipelineKey() {
  return ['#X-Amz-Target=DataPipeline.ActivatePipeline'] as const
}

export function getXAmzTargetDataPipelineAddTagsKey() {
  return ['#X-Amz-Target=DataPipeline.AddTags'] as const
}

export function getXAmzTargetDataPipelineCreatePipelineKey() {
  return ['#X-Amz-Target=DataPipeline.CreatePipeline'] as const
}

export function getXAmzTargetDataPipelineDeactivatePipelineKey() {
  return ['#X-Amz-Target=DataPipeline.DeactivatePipeline'] as const
}

export function getXAmzTargetDataPipelineDeletePipelineKey() {
  return ['#X-Amz-Target=DataPipeline.DeletePipeline'] as const
}

export function getXAmzTargetDataPipelineDescribeObjectsKey() {
  return ['#X-Amz-Target=DataPipeline.DescribeObjects'] as const
}

export function getXAmzTargetDataPipelineDescribePipelinesKey() {
  return ['#X-Amz-Target=DataPipeline.DescribePipelines'] as const
}

export function getXAmzTargetDataPipelineEvaluateExpressionKey() {
  return ['#X-Amz-Target=DataPipeline.EvaluateExpression'] as const
}

export function getXAmzTargetDataPipelineGetPipelineDefinitionKey() {
  return ['#X-Amz-Target=DataPipeline.GetPipelineDefinition'] as const
}

export function getXAmzTargetDataPipelineListPipelinesKey() {
  return ['#X-Amz-Target=DataPipeline.ListPipelines'] as const
}

export function getXAmzTargetDataPipelinePollForTaskKey() {
  return ['#X-Amz-Target=DataPipeline.PollForTask'] as const
}

export function getXAmzTargetDataPipelinePutPipelineDefinitionKey() {
  return ['#X-Amz-Target=DataPipeline.PutPipelineDefinition'] as const
}

export function getXAmzTargetDataPipelineQueryObjectsKey() {
  return ['#X-Amz-Target=DataPipeline.QueryObjects'] as const
}

export function getXAmzTargetDataPipelineRemoveTagsKey() {
  return ['#X-Amz-Target=DataPipeline.RemoveTags'] as const
}

export function getXAmzTargetDataPipelineReportTaskProgressKey() {
  return ['#X-Amz-Target=DataPipeline.ReportTaskProgress'] as const
}

export function getXAmzTargetDataPipelineReportTaskRunnerHeartbeatKey() {
  return ['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat'] as const
}

export function getXAmzTargetDataPipelineSetStatusKey() {
  return ['#X-Amz-Target=DataPipeline.SetStatus'] as const
}

export function getXAmzTargetDataPipelineSetTaskStatusKey() {
  return ['#X-Amz-Target=DataPipeline.SetTaskStatus'] as const
}

export function getXAmzTargetDataPipelineValidatePipelineDefinitionKey() {
  return ['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition'] as const
}

export function getPostXAmzTargetDataPipelineActivatePipelineMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.ActivatePipeline',
    '/#X-Amz-Target=DataPipeline.ActivatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineActivatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineActivatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.ActivatePipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineActivatePipeline<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineActivatePipelineMutationOptions<
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

export function getPostXAmzTargetDataPipelineAddTagsMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.AddTags',
    '/#X-Amz-Target=DataPipeline.AddTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineAddTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineAddTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.AddTags'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineAddTags<
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
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineAddTagsMutationOptions<
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

export function getPostXAmzTargetDataPipelineCreatePipelineMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.CreatePipeline',
    '/#X-Amz-Target=DataPipeline.CreatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineCreatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineCreatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.CreatePipeline'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineCreatePipeline<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineCreatePipelineMutationOptions<
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

export function getPostXAmzTargetDataPipelineDeactivatePipelineMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.DeactivatePipeline',
    '/#X-Amz-Target=DataPipeline.DeactivatePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineDeactivatePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineDeactivatePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.DeactivatePipeline'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineDeactivatePipeline<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineDeactivatePipelineMutationOptions<
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

export function getPostXAmzTargetDataPipelineDeletePipelineMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.DeletePipeline',
    '/#X-Amz-Target=DataPipeline.DeletePipeline',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineDeletePipelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineDeletePipelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.DeletePipeline'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineDeletePipeline<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineDeletePipelineMutationOptions<
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

export function getPostXAmzTargetDataPipelineDescribeObjectsMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.DescribeObjects',
    '/#X-Amz-Target=DataPipeline.DescribeObjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineDescribeObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineDescribeObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.DescribeObjects'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineDescribeObjects<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineDescribeObjectsMutationOptions<
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

export function getPostXAmzTargetDataPipelineDescribePipelinesMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.DescribePipelines',
    '/#X-Amz-Target=DataPipeline.DescribePipelines',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineDescribePipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineDescribePipelinesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.DescribePipelines'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineDescribePipelines<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineDescribePipelinesMutationOptions<
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

export function getPostXAmzTargetDataPipelineEvaluateExpressionMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.EvaluateExpression',
    '/#X-Amz-Target=DataPipeline.EvaluateExpression',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineEvaluateExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineEvaluateExpressionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.EvaluateExpression'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineEvaluateExpression<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineEvaluateExpressionMutationOptions<
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

export function getPostXAmzTargetDataPipelineGetPipelineDefinitionMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.GetPipelineDefinition',
    '/#X-Amz-Target=DataPipeline.GetPipelineDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineGetPipelineDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineGetPipelineDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.GetPipelineDefinition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineGetPipelineDefinition<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineGetPipelineDefinitionMutationOptions<
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

export function getPostXAmzTargetDataPipelineListPipelinesMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.ListPipelines',
    '/#X-Amz-Target=DataPipeline.ListPipelines',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineListPipelinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineListPipelinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.ListPipelines'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineListPipelines<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineListPipelinesMutationOptions<
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

export function getPostXAmzTargetDataPipelinePollForTaskMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.PollForTask',
    '/#X-Amz-Target=DataPipeline.PollForTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelinePollForTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelinePollForTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.PollForTask'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelinePollForTask<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelinePollForTaskMutationOptions<
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

export function getPostXAmzTargetDataPipelinePutPipelineDefinitionMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.PutPipelineDefinition',
    '/#X-Amz-Target=DataPipeline.PutPipelineDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelinePutPipelineDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelinePutPipelineDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.PutPipelineDefinition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelinePutPipelineDefinition<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelinePutPipelineDefinitionMutationOptions<
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

export function getPostXAmzTargetDataPipelineQueryObjectsMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.QueryObjects',
    '/#X-Amz-Target=DataPipeline.QueryObjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineQueryObjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineQueryObjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.QueryObjects'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineQueryObjects<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineQueryObjectsMutationOptions<
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

export function getPostXAmzTargetDataPipelineRemoveTagsMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.RemoveTags',
    '/#X-Amz-Target=DataPipeline.RemoveTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineRemoveTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineRemoveTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.RemoveTags'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineRemoveTags<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineRemoveTagsMutationOptions<
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

export function getPostXAmzTargetDataPipelineReportTaskProgressMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.ReportTaskProgress',
    '/#X-Amz-Target=DataPipeline.ReportTaskProgress',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineReportTaskProgressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineReportTaskProgressMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.ReportTaskProgress'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineReportTaskProgress<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineReportTaskProgressMutationOptions<
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

export function getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat',
    '/#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineReportTaskRunnerHeartbeat<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatMutationOptions<
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

export function getPostXAmzTargetDataPipelineSetStatusMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.SetStatus',
    '/#X-Amz-Target=DataPipeline.SetStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineSetStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineSetStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.SetStatus'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineSetStatus<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineSetStatusMutationOptions<
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

export function getPostXAmzTargetDataPipelineSetTaskStatusMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.SetTaskStatus',
    '/#X-Amz-Target=DataPipeline.SetTaskStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineSetTaskStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineSetTaskStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=DataPipeline.SetTaskStatus'].$post(args, options))
    },
  })
}

export function createPostXAmzTargetDataPipelineSetTaskStatus<
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
                  ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetDataPipelineSetTaskStatusMutationOptions<
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

export function getPostXAmzTargetDataPipelineValidatePipelineDefinitionMutationKey() {
  return [
    '#X-Amz-Target=DataPipeline.ValidatePipelineDefinition',
    '/#X-Amz-Target=DataPipeline.ValidatePipelineDefinition',
    'POST',
  ] as const
}

export function getPostXAmzTargetDataPipelineValidatePipelineDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetDataPipelineValidatePipelineDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetDataPipelineValidatePipelineDefinition<
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
                    (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
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
    const mutationDefaults = getPostXAmzTargetDataPipelineValidatePipelineDefinitionMutationOptions<
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

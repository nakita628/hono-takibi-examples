import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetDataPipelineActivatePipelineKey() {
  return [
    '#X-Amz-Target=DataPipeline.ActivatePipeline',
    '/#X-Amz-Target=DataPipeline.ActivatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineActivatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineActivatePipelineKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.ActivatePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.ActivatePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineAddTagsKey() {
  return [
    '#X-Amz-Target=DataPipeline.AddTags',
    '/#X-Amz-Target=DataPipeline.AddTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineAddTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineAddTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.AddTags']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=DataPipeline.AddTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineCreatePipelineKey() {
  return [
    '#X-Amz-Target=DataPipeline.CreatePipeline',
    '/#X-Amz-Target=DataPipeline.CreatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineCreatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineCreatePipelineKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.CreatePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.CreatePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineDeactivatePipelineKey() {
  return [
    '#X-Amz-Target=DataPipeline.DeactivatePipeline',
    '/#X-Amz-Target=DataPipeline.DeactivatePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineDeactivatePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineDeactivatePipelineKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.DeactivatePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.DeactivatePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineDeletePipelineKey() {
  return [
    '#X-Amz-Target=DataPipeline.DeletePipeline',
    '/#X-Amz-Target=DataPipeline.DeletePipeline',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineDeletePipeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineDeletePipelineKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.DeletePipeline']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.DeletePipeline'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineDescribeObjectsKey() {
  return [
    '#X-Amz-Target=DataPipeline.DescribeObjects',
    '/#X-Amz-Target=DataPipeline.DescribeObjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineDescribeObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineDescribeObjectsKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.DescribeObjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.DescribeObjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineDescribePipelinesKey() {
  return [
    '#X-Amz-Target=DataPipeline.DescribePipelines',
    '/#X-Amz-Target=DataPipeline.DescribePipelines',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineDescribePipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineDescribePipelinesKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.DescribePipelines']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.DescribePipelines'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineEvaluateExpressionKey() {
  return [
    '#X-Amz-Target=DataPipeline.EvaluateExpression',
    '/#X-Amz-Target=DataPipeline.EvaluateExpression',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineEvaluateExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineEvaluateExpressionKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.EvaluateExpression']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.EvaluateExpression'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineGetPipelineDefinitionKey() {
  return [
    '#X-Amz-Target=DataPipeline.GetPipelineDefinition',
    '/#X-Amz-Target=DataPipeline.GetPipelineDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineGetPipelineDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineGetPipelineDefinitionKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.GetPipelineDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.GetPipelineDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineListPipelinesKey() {
  return [
    '#X-Amz-Target=DataPipeline.ListPipelines',
    '/#X-Amz-Target=DataPipeline.ListPipelines',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineListPipelines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineListPipelinesKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.ListPipelines']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DataPipeline.ListPipelines'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelinePollForTaskKey() {
  return [
    '#X-Amz-Target=DataPipeline.PollForTask',
    '/#X-Amz-Target=DataPipeline.PollForTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelinePollForTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelinePollForTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PollForTask']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DataPipeline.PollForTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelinePutPipelineDefinitionKey() {
  return [
    '#X-Amz-Target=DataPipeline.PutPipelineDefinition',
    '/#X-Amz-Target=DataPipeline.PutPipelineDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelinePutPipelineDefinition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelinePutPipelineDefinitionKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.PutPipelineDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.PutPipelineDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineQueryObjectsKey() {
  return [
    '#X-Amz-Target=DataPipeline.QueryObjects',
    '/#X-Amz-Target=DataPipeline.QueryObjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineQueryObjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineQueryObjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.QueryObjects']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DataPipeline.QueryObjects'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineRemoveTagsKey() {
  return [
    '#X-Amz-Target=DataPipeline.RemoveTags',
    '/#X-Amz-Target=DataPipeline.RemoveTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineRemoveTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineRemoveTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.RemoveTags']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=DataPipeline.RemoveTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineReportTaskProgressKey() {
  return [
    '#X-Amz-Target=DataPipeline.ReportTaskProgress',
    '/#X-Amz-Target=DataPipeline.ReportTaskProgress',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineReportTaskProgress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineReportTaskProgressKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskProgress']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.ReportTaskProgress'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatKey() {
  return [
    '#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat',
    '/#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineReportTaskRunnerHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineReportTaskRunnerHeartbeatKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.ReportTaskRunnerHeartbeat'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineSetStatusKey() {
  return [
    '#X-Amz-Target=DataPipeline.SetStatus',
    '/#X-Amz-Target=DataPipeline.SetStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineSetStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineSetStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetStatus']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=DataPipeline.SetStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineSetTaskStatusKey() {
  return [
    '#X-Amz-Target=DataPipeline.SetTaskStatus',
    '/#X-Amz-Target=DataPipeline.SetTaskStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineSetTaskStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineSetTaskStatusKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.SetTaskStatus']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=DataPipeline.SetTaskStatus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetDataPipelineValidatePipelineDefinitionKey() {
  return [
    '#X-Amz-Target=DataPipeline.ValidatePipelineDefinition',
    '/#X-Amz-Target=DataPipeline.ValidatePipelineDefinition',
    'POST',
  ] as const
}

export function usePostXAmzTargetDataPipelineValidatePipelineDefinition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetDataPipelineValidatePipelineDefinitionKey()
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
            (typeof client)['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=DataPipeline.ValidatePipelineDefinition'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

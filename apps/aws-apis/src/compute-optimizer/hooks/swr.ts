import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences'] as const
}

export function getXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs'] as const
}

export function getXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
  ] as const
}

export function getXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEnrollmentStatusKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences'] as const
}

export function getXAmzTargetComputeOptimizerServiceGetRecommendationSummariesKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries'] as const
}

export function getXAmzTargetComputeOptimizerServicePutRecommendationPreferencesKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences'] as const
}

export function getXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusKey() {
  return ['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus'] as const
}

export function getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs',
    '/#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics',
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetrics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus',
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEnrollmentStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization',
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetRecommendationPreferences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries',
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceGetRecommendationSummaries<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServicePutRecommendationPreferences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus',
    '/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusKey()
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
            (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

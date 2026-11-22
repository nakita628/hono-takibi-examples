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

export function getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferences<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.DeleteRecommendationPreferences']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs',
    '/#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobs<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.DescribeRecommendationExportJobs']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportAutoScalingGroupRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEBSVolumeRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceExportEBSVolumeRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportEC2InstanceRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportECSServiceRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.ExportLambdaFunctionRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetAutoScalingGroupRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEBSVolumeRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEBSVolumeRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2InstanceRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics',
    '/#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetrics<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEC2RecommendationProjectedMetrics']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics'
        ].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetrics<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendationProjectedMetrics']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetECSServiceRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferences<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEffectiveRecommendationPreferences']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEffectiveRecommendationPreferencesMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus',
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatus<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatus']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization',
    '/#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganization<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetEnrollmentStatusesForOrganization']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations',
    '/#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendations<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetLambdaFunctionRecommendations']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferences<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationPreferences']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries',
    '/#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceGetRecommendationSummaries<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.GetRecommendationSummaries']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceGetRecommendationSummariesMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences',
    '/#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServicePutRecommendationPreferences<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.PutRecommendationPreferences']['$post']
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
      getPostXAmzTargetComputeOptimizerServicePutRecommendationPreferencesMutationOptions<
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

export function getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusMutationKey() {
  return [
    '#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus',
    '/#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatus<
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
                  (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=ComputeOptimizerService.UpdateEnrollmentStatus']['$post']
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
      getPostXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusMutationOptions<
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

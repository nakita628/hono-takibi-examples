import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanKey() {
  return ['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan'] as const
}

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanKey() {
  return ['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'] as const
}

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
  ] as const
}

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansKey() {
  return ['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'] as const
}

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
  ] as const
}

export function getXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanKey() {
  return ['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlans<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

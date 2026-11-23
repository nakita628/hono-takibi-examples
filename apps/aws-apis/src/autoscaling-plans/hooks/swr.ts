import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceCreateScalingPlanKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.CreateScalingPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDeleteScalingPlanKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DeleteScalingPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlanResourcesKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlanResources'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlans<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceDescribeScalingPlansKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.DescribeScalingPlans'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastDataKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanKey() {
  return [
    '#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan',
    '/#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlan<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAnyScaleScalingPlannerFrontendServiceUpdateScalingPlanKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleScalingPlannerFrontendService.UpdateScalingPlan'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

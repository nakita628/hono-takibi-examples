import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource'] as const
}

export function getXAmzTargetAnyScaleFrontendServicePutScalingPolicyKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy'] as const
}

export function getXAmzTargetAnyScaleFrontendServicePutScheduledActionKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceTagResourceKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.TagResource'] as const
}

export function getXAmzTargetAnyScaleFrontendServiceUntagResourceKey() {
  return ['#X-Amz-Target=AnyScaleFrontendService.UntagResource'] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy',
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction',
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDeleteScheduledAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget',
    '/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDescribeScalingPolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy',
    '/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServicePutScalingPolicy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction',
    '/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServicePutScheduledAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget',
    '/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceRegisterScalableTarget<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.TagResource',
    '/#X-Amz-Target=AnyScaleFrontendService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAnyScaleFrontendServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.UntagResource',
    '/#X-Amz-Target=AnyScaleFrontendService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAnyScaleFrontendServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAnyScaleFrontendServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AnyScaleFrontendService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

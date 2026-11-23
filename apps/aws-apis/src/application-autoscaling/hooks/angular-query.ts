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

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy',
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicy<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScalingPolicy']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDeleteScalingPolicyMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction',
    '/#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledAction<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeleteScheduledAction']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDeleteScheduledActionMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget',
    '/#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTarget<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DeregisterScalableTarget']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDeregisterScalableTargetMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargets<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalableTargets']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDescribeScalableTargetsMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivities<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingActivities']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingActivitiesMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPolicies<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScalingPolicies']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDescribeScalingPoliciesMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions',
    '/#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActions<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.DescribeScheduledActions']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceDescribeScheduledActionsMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.ListTagsForResource']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy',
    '/#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServicePutScalingPolicy<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScalingPolicy']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServicePutScalingPolicyMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction',
    '/#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServicePutScheduledAction<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.PutScheduledAction']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServicePutScheduledActionMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget',
    '/#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTarget<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.RegisterScalableTarget']['$post']
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
      getPostXAmzTargetAnyScaleFrontendServiceRegisterScalableTargetMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.TagResource',
    '/#X-Amz-Target=AnyScaleFrontendService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceTagResource<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.TagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetAnyScaleFrontendServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetAnyScaleFrontendServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AnyScaleFrontendService.UntagResource',
    '/#X-Amz-Target=AnyScaleFrontendService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAnyScaleFrontendServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAnyScaleFrontendServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AnyScaleFrontendService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAnyScaleFrontendServiceUntagResource<
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
                  (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AnyScaleFrontendService.UntagResource']['$post']
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
    const mutationDefaults = getPostXAmzTargetAnyScaleFrontendServiceUntagResourceMutationOptions<
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

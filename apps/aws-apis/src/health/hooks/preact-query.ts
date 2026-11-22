import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSHealth_20160804DescribeAffectedAccountsForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeAffectedEntitiesKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeAffectedEntitiesForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEntityAggregatesKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventAggregatesKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventDetailsKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventDetailsForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventTypesKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventsKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEvents'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeEventsForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804DescribeHealthServiceStatusForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804DisableHealthServiceAccessForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization'] as const
}

export function getXAmzTargetAWSHealth_20160804EnableHealthServiceAccessForOrganizationKey() {
  return ['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization'] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedEntities<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEntityAggregates<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventAggregates<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventDetails<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHealth20160804DescribeEventDetailsMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventTypesMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventTypes<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHealth20160804DescribeEventTypesMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventsMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEvents',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEvents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEvents<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHealth20160804DescribeEventsMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventsForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationMutationOptions<
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

export function getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationMutationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganization<
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
                  (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
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
    getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationMutationOptions<
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

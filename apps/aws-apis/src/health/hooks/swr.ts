import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804DescribeAffectedAccountsForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedAccountsForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804DescribeAffectedEntitiesForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeAffectedEntitiesForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEntityAggregates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEntityAggregatesKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEntityAggregates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventAggregates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventAggregatesKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEventAggregates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventDetailsKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetails'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventDetailsForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEventDetailsForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventTypesKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventTypesKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEventTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventsKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEvents',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventsKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeEventsForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHealth20160804DescribeEventsForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.DescribeEventsForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804DescribeHealthServiceStatusForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSHealth_20160804.DescribeHealthServiceStatusForOrganization'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804DisableHealthServiceAccessForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSHealth_20160804.DisableHealthServiceAccessForOrganization'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationKey() {
  return [
    '#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization',
    '/#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHealth20160804EnableHealthServiceAccessForOrganizationKey()
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
            (typeof client)['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHealth_20160804.EnableHealthServiceAccessForOrganization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

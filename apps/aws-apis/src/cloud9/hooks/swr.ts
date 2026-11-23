import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Key() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
  ] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment'] as const
}

export function getXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipKey() {
  return ['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Key() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2Key()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

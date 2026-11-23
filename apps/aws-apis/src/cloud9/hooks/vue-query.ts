import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2MutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentEC2MutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.CreateEnvironmentMembership']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceCreateEnvironmentMembershipMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DeleteEnvironmentMembership']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDeleteEnvironmentMembershipMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentMemberships']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentMembershipsMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironmentStatus']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentStatusMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.DescribeEnvironments']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceDescribeEnvironmentsMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListEnvironments']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListEnvironmentsMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.TagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UntagResource']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironment']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMutationOptions<
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

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership',
    '/#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembership<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCloud9WorkspaceManagementService.UpdateEnvironmentMembership']['$post']
          >,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCloud9WorkspaceManagementServiceUpdateEnvironmentMembershipMutationOptions<
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

import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSIdentityStoreCreateGroupKey() {
  return ['#X-Amz-Target=AWSIdentityStore.CreateGroup'] as const
}

export function getXAmzTargetAWSIdentityStoreCreateGroupMembershipKey() {
  return ['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership'] as const
}

export function getXAmzTargetAWSIdentityStoreCreateUserKey() {
  return ['#X-Amz-Target=AWSIdentityStore.CreateUser'] as const
}

export function getXAmzTargetAWSIdentityStoreDeleteGroupKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DeleteGroup'] as const
}

export function getXAmzTargetAWSIdentityStoreDeleteGroupMembershipKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership'] as const
}

export function getXAmzTargetAWSIdentityStoreDeleteUserKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DeleteUser'] as const
}

export function getXAmzTargetAWSIdentityStoreDescribeGroupKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DescribeGroup'] as const
}

export function getXAmzTargetAWSIdentityStoreDescribeGroupMembershipKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership'] as const
}

export function getXAmzTargetAWSIdentityStoreDescribeUserKey() {
  return ['#X-Amz-Target=AWSIdentityStore.DescribeUser'] as const
}

export function getXAmzTargetAWSIdentityStoreGetGroupIdKey() {
  return ['#X-Amz-Target=AWSIdentityStore.GetGroupId'] as const
}

export function getXAmzTargetAWSIdentityStoreGetGroupMembershipIdKey() {
  return ['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId'] as const
}

export function getXAmzTargetAWSIdentityStoreGetUserIdKey() {
  return ['#X-Amz-Target=AWSIdentityStore.GetUserId'] as const
}

export function getXAmzTargetAWSIdentityStoreIsMemberInGroupsKey() {
  return ['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups'] as const
}

export function getXAmzTargetAWSIdentityStoreListGroupMembershipsKey() {
  return ['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships'] as const
}

export function getXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberKey() {
  return ['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember'] as const
}

export function getXAmzTargetAWSIdentityStoreListGroupsKey() {
  return ['#X-Amz-Target=AWSIdentityStore.ListGroups'] as const
}

export function getXAmzTargetAWSIdentityStoreListUsersKey() {
  return ['#X-Amz-Target=AWSIdentityStore.ListUsers'] as const
}

export function getXAmzTargetAWSIdentityStoreUpdateGroupKey() {
  return ['#X-Amz-Target=AWSIdentityStore.UpdateGroup'] as const
}

export function getXAmzTargetAWSIdentityStoreUpdateUserKey() {
  return ['#X-Amz-Target=AWSIdentityStore.UpdateUser'] as const
}

export function getPostXAmzTargetAWSIdentityStoreCreateGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateGroup',
    '/#X-Amz-Target=AWSIdentityStore.CreateGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreCreateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreCreateGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.CreateGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreCreateGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreCreateGroupMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.CreateGroupMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreCreateGroupMembership<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreCreateUserMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateUser',
    '/#X-Amz-Target=AWSIdentityStore.CreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.CreateUser'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreCreateUser<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreCreateUserMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteGroup',
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDeleteGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.DeleteGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDeleteGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDeleteGroupMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDeleteGroupMembership<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteUser',
    '/#X-Amz-Target=AWSIdentityStore.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.DeleteUser'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDeleteUser<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDeleteUserMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeGroup',
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDescribeGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.DescribeGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDescribeGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDescribeGroupMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDescribeGroupMembership<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreDescribeUserMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeUser',
    '/#X-Amz-Target=AWSIdentityStore.DescribeUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreDescribeUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreDescribeUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.DescribeUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreDescribeUser<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreDescribeUserMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreGetGroupIdMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetGroupId',
    '/#X-Amz-Target=AWSIdentityStore.GetGroupId',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreGetGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreGetGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.GetGroupId'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreGetGroupId<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreGetGroupIdMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId',
    '/#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreGetGroupMembershipId<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreGetUserIdMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetUserId',
    '/#X-Amz-Target=AWSIdentityStore.GetUserId',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreGetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreGetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.GetUserId'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreGetUserId<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreGetUserIdMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.IsMemberInGroups',
    '/#X-Amz-Target=AWSIdentityStore.IsMemberInGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreIsMemberInGroups<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroupMemberships',
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMemberships',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreListGroupMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreListGroupMemberships<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreListGroupMembershipsMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember',
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreListGroupMembershipsForMember<
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
                  (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
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
    getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreListGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroups',
    '/#X-Amz-Target=AWSIdentityStore.ListGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreListGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreListGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.ListGroups'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreListGroups<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreListGroupsMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreListUsersMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListUsers',
    '/#X-Amz-Target=AWSIdentityStore.ListUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreListUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.ListUsers'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreListUsers<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreListUsersMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreUpdateGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.UpdateGroup',
    '/#X-Amz-Target=AWSIdentityStore.UpdateGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreUpdateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreUpdateGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSIdentityStore.UpdateGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreUpdateGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreUpdateGroupMutationOptions<
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

export function getPostXAmzTargetAWSIdentityStoreUpdateUserMutationKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.UpdateUser',
    '/#X-Amz-Target=AWSIdentityStore.UpdateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSIdentityStoreUpdateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSIdentityStoreUpdateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AWSIdentityStore.UpdateUser'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetAWSIdentityStoreUpdateUser<
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
                ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSIdentityStoreUpdateUserMutationOptions<
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

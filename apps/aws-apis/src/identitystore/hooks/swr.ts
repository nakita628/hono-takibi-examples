import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSIdentityStoreCreateGroupKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateGroup',
    '/#X-Amz-Target=AWSIdentityStore.CreateGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreCreateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreCreateGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.CreateGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.CreateGroupMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreCreateGroupMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreCreateGroupMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.CreateGroupMembership'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreCreateUserKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.CreateUser',
    '/#X-Amz-Target=AWSIdentityStore.CreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreCreateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreCreateUserKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.CreateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.CreateUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteGroup',
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDeleteGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDeleteGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DeleteGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDeleteGroupMembership<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDeleteGroupMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DeleteGroupMembership'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDeleteUserKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DeleteUser',
    '/#X-Amz-Target=AWSIdentityStore.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDeleteUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDeleteUserKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DeleteUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeGroup',
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDescribeGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDescribeGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DescribeGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership',
    '/#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDescribeGroupMembership<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDescribeGroupMembershipKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DescribeGroupMembership'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreDescribeUserKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.DescribeUser',
    '/#X-Amz-Target=AWSIdentityStore.DescribeUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreDescribeUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreDescribeUserKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.DescribeUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.DescribeUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreGetGroupIdKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetGroupId',
    '/#X-Amz-Target=AWSIdentityStore.GetGroupId',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreGetGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreGetGroupIdKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.GetGroupId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId',
    '/#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreGetGroupMembershipId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreGetGroupMembershipIdKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.GetGroupMembershipId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreGetUserIdKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.GetUserId',
    '/#X-Amz-Target=AWSIdentityStore.GetUserId',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreGetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreGetUserIdKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.GetUserId']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSIdentityStore.GetUserId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.IsMemberInGroups',
    '/#X-Amz-Target=AWSIdentityStore.IsMemberInGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreIsMemberInGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreIsMemberInGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.IsMemberInGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroupMemberships',
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMemberships',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreListGroupMemberships<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreListGroupMembershipsKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.ListGroupMemberships'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember',
    '/#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreListGroupMembershipsForMember<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreListGroupMembershipsForMemberKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.ListGroupMembershipsForMember'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreListGroupsKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListGroups',
    '/#X-Amz-Target=AWSIdentityStore.ListGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreListGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreListGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.ListGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.ListGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreListUsersKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.ListUsers',
    '/#X-Amz-Target=AWSIdentityStore.ListUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreListUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreListUsersKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.ListUsers']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AWSIdentityStore.ListUsers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreUpdateGroupKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.UpdateGroup',
    '/#X-Amz-Target=AWSIdentityStore.UpdateGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreUpdateGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreUpdateGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.UpdateGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSIdentityStoreUpdateUserKey() {
  return [
    '#X-Amz-Target=AWSIdentityStore.UpdateUser',
    '/#X-Amz-Target=AWSIdentityStore.UpdateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSIdentityStoreUpdateUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSIdentityStoreUpdateUserKey()
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
            (typeof client)['#X-Amz-Target=AWSIdentityStore.UpdateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSIdentityStore.UpdateUser'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

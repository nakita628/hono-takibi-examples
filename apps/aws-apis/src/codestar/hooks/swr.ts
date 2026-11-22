import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCodeStar_20170419AssociateTeamMemberKey() {
  return ['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember'] as const
}

export function getXAmzTargetCodeStar_20170419CreateProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.CreateProject'] as const
}

export function getXAmzTargetCodeStar_20170419CreateUserProfileKey() {
  return ['#X-Amz-Target=CodeStar_20170419.CreateUserProfile'] as const
}

export function getXAmzTargetCodeStar_20170419DeleteProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.DeleteProject'] as const
}

export function getXAmzTargetCodeStar_20170419DeleteUserProfileKey() {
  return ['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile'] as const
}

export function getXAmzTargetCodeStar_20170419DescribeProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.DescribeProject'] as const
}

export function getXAmzTargetCodeStar_20170419DescribeUserProfileKey() {
  return ['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile'] as const
}

export function getXAmzTargetCodeStar_20170419DisassociateTeamMemberKey() {
  return ['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember'] as const
}

export function getXAmzTargetCodeStar_20170419ListProjectsKey() {
  return ['#X-Amz-Target=CodeStar_20170419.ListProjects'] as const
}

export function getXAmzTargetCodeStar_20170419ListResourcesKey() {
  return ['#X-Amz-Target=CodeStar_20170419.ListResources'] as const
}

export function getXAmzTargetCodeStar_20170419ListTagsForProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.ListTagsForProject'] as const
}

export function getXAmzTargetCodeStar_20170419ListTeamMembersKey() {
  return ['#X-Amz-Target=CodeStar_20170419.ListTeamMembers'] as const
}

export function getXAmzTargetCodeStar_20170419ListUserProfilesKey() {
  return ['#X-Amz-Target=CodeStar_20170419.ListUserProfiles'] as const
}

export function getXAmzTargetCodeStar_20170419TagProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.TagProject'] as const
}

export function getXAmzTargetCodeStar_20170419UntagProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.UntagProject'] as const
}

export function getXAmzTargetCodeStar_20170419UpdateProjectKey() {
  return ['#X-Amz-Target=CodeStar_20170419.UpdateProject'] as const
}

export function getXAmzTargetCodeStar_20170419UpdateTeamMemberKey() {
  return ['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember'] as const
}

export function getXAmzTargetCodeStar_20170419UpdateUserProfileKey() {
  return ['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile'] as const
}

export function getPostXAmzTargetCodeStar20170419AssociateTeamMemberKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.AssociateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.AssociateTeamMember',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419AssociateTeamMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419AssociateTeamMemberKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419CreateProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.CreateProject',
    '/#X-Amz-Target=CodeStar_20170419.CreateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419CreateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419CreateProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.CreateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419CreateUserProfileKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.CreateUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.CreateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419CreateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419CreateUserProfileKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.CreateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419DeleteProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DeleteProject',
    '/#X-Amz-Target=CodeStar_20170419.DeleteProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419DeleteProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419DeleteProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.DeleteProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419DeleteUserProfileKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DeleteUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.DeleteUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419DeleteUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419DeleteUserProfileKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419DescribeProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DescribeProject',
    '/#X-Amz-Target=CodeStar_20170419.DescribeProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419DescribeProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419DescribeProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.DescribeProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419DescribeUserProfileKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DescribeUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.DescribeUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419DescribeUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419DescribeUserProfileKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419DisassociateTeamMemberKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419DisassociateTeamMember<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419DisassociateTeamMemberKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419ListProjectsKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListProjects',
    '/#X-Amz-Target=CodeStar_20170419.ListProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419ListProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419ListProjectsKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.ListProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419ListResourcesKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListResources',
    '/#X-Amz-Target=CodeStar_20170419.ListResources',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419ListResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419ListResourcesKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.ListResources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419ListTagsForProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListTagsForProject',
    '/#X-Amz-Target=CodeStar_20170419.ListTagsForProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419ListTagsForProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419ListTagsForProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.ListTagsForProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419ListTeamMembersKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListTeamMembers',
    '/#X-Amz-Target=CodeStar_20170419.ListTeamMembers',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419ListTeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419ListTeamMembersKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.ListTeamMembers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419ListUserProfilesKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListUserProfiles',
    '/#X-Amz-Target=CodeStar_20170419.ListUserProfiles',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419ListUserProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419ListUserProfilesKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.ListUserProfiles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419TagProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.TagProject',
    '/#X-Amz-Target=CodeStar_20170419.TagProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419TagProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419TagProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.TagProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419UntagProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UntagProject',
    '/#X-Amz-Target=CodeStar_20170419.UntagProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419UntagProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419UntagProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.UntagProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419UpdateProjectKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateProject',
    '/#X-Amz-Target=CodeStar_20170419.UpdateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419UpdateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419UpdateProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.UpdateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419UpdateTeamMemberKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.UpdateTeamMember',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419UpdateTeamMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419UpdateTeamMemberKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeStar20170419UpdateUserProfileKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.UpdateUserProfile',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeStar20170419UpdateUserProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeStar20170419UpdateUserProfileKey()
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
            (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

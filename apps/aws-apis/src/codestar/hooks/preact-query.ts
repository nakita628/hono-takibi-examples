import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetCodeStar20170419AssociateTeamMemberMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.AssociateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.AssociateTeamMember',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419AssociateTeamMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419AssociateTeamMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419AssociateTeamMember<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.AssociateTeamMember']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419AssociateTeamMemberMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419CreateProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.CreateProject',
    '/#X-Amz-Target=CodeStar_20170419.CreateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419CreateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419CreateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.CreateProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419CreateProject<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419CreateProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419CreateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.CreateUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.CreateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419CreateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419CreateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.CreateUserProfile'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419CreateUserProfile<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.CreateUserProfile']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419CreateUserProfileMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419DeleteProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DeleteProject',
    '/#X-Amz-Target=CodeStar_20170419.DeleteProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419DeleteProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419DeleteProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.DeleteProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419DeleteProject<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419DeleteProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419DeleteUserProfileMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DeleteUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.DeleteUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419DeleteUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419DeleteUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419DeleteUserProfile<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.DeleteUserProfile']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419DeleteUserProfileMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419DescribeProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DescribeProject',
    '/#X-Amz-Target=CodeStar_20170419.DescribeProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419DescribeProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419DescribeProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.DescribeProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419DescribeProject<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeProject']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419DescribeProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419DescribeUserProfileMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DescribeUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.DescribeUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419DescribeUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419DescribeUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419DescribeUserProfile<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.DescribeUserProfile']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419DescribeUserProfileMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419DisassociateTeamMemberMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419DisassociateTeamMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419DisassociateTeamMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419DisassociateTeamMember<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.DisassociateTeamMember']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419DisassociateTeamMemberMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419ListProjectsMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListProjects',
    '/#X-Amz-Target=CodeStar_20170419.ListProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419ListProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419ListProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.ListProjects'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419ListProjects<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListProjects']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419ListProjectsMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419ListResourcesMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListResources',
    '/#X-Amz-Target=CodeStar_20170419.ListResources',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419ListResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419ListResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.ListResources'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419ListResources<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListResources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419ListResourcesMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419ListTagsForProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListTagsForProject',
    '/#X-Amz-Target=CodeStar_20170419.ListTagsForProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419ListTagsForProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419ListTagsForProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.ListTagsForProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419ListTagsForProject<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTagsForProject']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419ListTagsForProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419ListTeamMembersMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListTeamMembers',
    '/#X-Amz-Target=CodeStar_20170419.ListTeamMembers',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419ListTeamMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419ListTeamMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.ListTeamMembers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419ListTeamMembers<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.ListTeamMembers']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419ListTeamMembersMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419ListUserProfilesMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.ListUserProfiles',
    '/#X-Amz-Target=CodeStar_20170419.ListUserProfiles',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419ListUserProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419ListUserProfilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.ListUserProfiles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419ListUserProfiles<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.ListUserProfiles']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419ListUserProfilesMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419TagProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.TagProject',
    '/#X-Amz-Target=CodeStar_20170419.TagProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419TagProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419TagProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.TagProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419TagProject<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.TagProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419TagProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419UntagProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UntagProject',
    '/#X-Amz-Target=CodeStar_20170419.UntagProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419UntagProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419UntagProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.UntagProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419UntagProject<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UntagProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419UntagProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419UpdateProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateProject',
    '/#X-Amz-Target=CodeStar_20170419.UpdateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419UpdateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419UpdateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.UpdateProject'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419UpdateProject<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateProject']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetCodeStar20170419UpdateProjectMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419UpdateTeamMemberMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateTeamMember',
    '/#X-Amz-Target=CodeStar_20170419.UpdateTeamMember',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419UpdateTeamMemberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419UpdateTeamMemberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419UpdateTeamMember<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateTeamMember']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419UpdateTeamMemberMutationOptions<
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

export function getPostXAmzTargetCodeStar20170419UpdateUserProfileMutationKey() {
  return [
    '#X-Amz-Target=CodeStar_20170419.UpdateUserProfile',
    '/#X-Amz-Target=CodeStar_20170419.UpdateUserProfile',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeStar20170419UpdateUserProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeStar20170419UpdateUserProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetCodeStar20170419UpdateUserProfile<
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
                  (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeStar_20170419.UpdateUserProfile']['$post']
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
  const mutationDefaults = getPostXAmzTargetCodeStar20170419UpdateUserProfileMutationOptions<
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

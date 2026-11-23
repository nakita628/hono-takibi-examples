import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceDescribeIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetIdKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetId'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceListIdentitiesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.TagResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.UntagResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool'] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPool<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDeleteIdentities<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPool<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDescribeIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPool<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetId',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetId',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceGetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetId'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetId<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceGetIdMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRoles<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetOpenIdToken<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMap<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListIdentities<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListIdentityPools<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentities<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles',
    '/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRoles<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap',
    '/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMap<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.TagResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceTagResource<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentity<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UntagResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUntagResource<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPool<
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
                    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
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
    getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolMutationOptions<
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

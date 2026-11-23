import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceCreateIdentityPoolKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDeleteIdentities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentitiesKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPoolKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDescribeIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPoolKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetId',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetId',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetIdKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.GetId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRoles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRolesKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetOpenIdToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap',
    '/#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMapKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListIdentities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceListIdentitiesKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListIdentityPools<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceListIdentityPoolsKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities',
    '/#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentitiesKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles',
    '/#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRoles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRolesKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap',
    '/#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMap<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMapKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.TagResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity',
    '/#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentity<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceUnlinkIdentityKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UntagResource',
    '/#X-Amz-Target=AWSCognitoIdentityService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool',
    '/#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPoolKey()
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
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

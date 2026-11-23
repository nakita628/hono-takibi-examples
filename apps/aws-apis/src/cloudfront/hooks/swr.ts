import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2020_05_31Key() {
  return ['2020-05-31'] as const
}

export function getPut20200531DistributionTargetDistributionIdAssociateAliasAliasKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distribution/:TargetDistributionId/associate-alias#Alias',
    'PUT',
  ] as const
}

export function usePut20200531DistributionTargetDistributionIdAssociateAliasAlias<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531DistributionTargetDistributionIdAssociateAliasAliasKey()
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
            (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distribution[':TargetDistributionId']['associate-alias#Alias'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200531DistributionPrimaryDistributionIdCopyKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:PrimaryDistributionId/copy', 'POST'] as const
}

export function usePost20200531DistributionPrimaryDistributionIdCopy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DistributionPrimaryDistributionIdCopyKey()
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
            (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distribution[':PrimaryDistributionId'].copy.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531CachePolicyKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy', keyArgs] as const
}

export function useGet20200531CachePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['cache-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531CachePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['cache-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531CachePolicyKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy', 'POST'] as const
}

export function usePost20200531CachePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531CachePolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']> },
      ) => parseResponse(client['2020-05-31']['cache-policy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginAccessIdentityCloudfrontKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront', keyArgs] as const
}

export function useGet20200531OriginAccessIdentityCloudfront<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessIdentityCloudfront<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531OriginAccessIdentityCloudfrontKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront', 'POST'] as const
}

export function usePost20200531OriginAccessIdentityCloudfront<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531OriginAccessIdentityCloudfrontKey()
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
            (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ContinuousDeploymentPolicyKey(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy', keyArgs] as const
}

export function useGet20200531ContinuousDeploymentPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ContinuousDeploymentPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531ContinuousDeploymentPolicyKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy', 'POST'] as const
}

export function usePost20200531ContinuousDeploymentPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531ContinuousDeploymentPolicyKey()
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
            (typeof client)['2020-05-31']['continuous-deployment-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531DistributionKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution', keyArgs] as const
}

export function useGet20200531Distribution<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].distribution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531Distribution<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].distribution.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531DistributionKey() {
  return ['2020-05-31', '/2020-05-31/distribution', 'POST'] as const
}

export function usePost20200531Distribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DistributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']> },
      ) => parseResponse(client['2020-05-31'].distribution.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200531DistributionWithTagsKey() {
  return ['2020-05-31', '/2020-05-31/distribution#WithTags', 'POST'] as const
}

export function usePost20200531DistributionWithTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DistributionWithTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['distribution#WithTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption', keyArgs] as const
}

export function useGet20200531FieldLevelEncryption<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['field-level-encryption'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryption<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['field-level-encryption'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531FieldLevelEncryptionKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption', 'POST'] as const
}

export function usePost20200531FieldLevelEncryption<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531FieldLevelEncryptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['field-level-encryption'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionProfileKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile', keyArgs] as const
}

export function useGet20200531FieldLevelEncryptionProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryptionProfile<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531FieldLevelEncryptionProfileKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile', 'POST'] as const
}

export function usePost20200531FieldLevelEncryptionProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531FieldLevelEncryptionProfileKey()
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
            (typeof client)['2020-05-31']['field-level-encryption-profile']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FunctionKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function', keyArgs] as const
}

export function useGet20200531Function<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531Function<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].function.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531FunctionKey() {
  return ['2020-05-31', '/2020-05-31/function', 'POST'] as const
}

export function usePost20200531Function<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['function']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531FunctionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-05-31']['function']['$post']> },
      ) => parseResponse(client['2020-05-31'].function.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531DistributionDistributionIdInvalidationKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:DistributionId/invalidation', keyArgs] as const
}

export function useGet20200531DistributionDistributionIdInvalidation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionDistributionIdInvalidationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionDistributionIdInvalidation<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionDistributionIdInvalidationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531DistributionDistributionIdInvalidationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:DistributionId/invalidation', 'POST'] as const
}

export function usePost20200531DistributionDistributionIdInvalidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DistributionDistributionIdInvalidationKey()
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
            (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531KeyGroupKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group', keyArgs] as const
}

export function useGet20200531KeyGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['key-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531KeyGroup<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['key-group'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531KeyGroupKey() {
  return ['2020-05-31', '/2020-05-31/key-group', 'POST'] as const
}

export function usePost20200531KeyGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531KeyGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']> },
      ) => parseResponse(client['2020-05-31']['key-group'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    keyArgs,
  ] as const
}

export function useGet20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributions[':DistributionId'][
            'monitoring-subscription'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributions[':DistributionId'][
            'monitoring-subscription'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    'POST',
  ] as const
}

export function usePost20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey()
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
            (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distributions[':DistributionId'][
            'monitoring-subscription'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    'DELETE',
  ] as const
}

export function useDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexKey()
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
            (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distributions[':DistributionId'][
            'monitoring-subscription'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginAccessControlKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control', keyArgs] as const
}

export function useGet20200531OriginAccessControl<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['origin-access-control'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessControl<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['origin-access-control'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531OriginAccessControlKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control', 'POST'] as const
}

export function usePost20200531OriginAccessControl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531OriginAccessControlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['origin-access-control'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginRequestPolicyKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy', keyArgs] as const
}

export function useGet20200531OriginRequestPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['origin-request-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginRequestPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['origin-request-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531OriginRequestPolicyKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy', 'POST'] as const
}

export function usePost20200531OriginRequestPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531OriginRequestPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['origin-request-policy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531PublicKeyKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key', keyArgs] as const
}

export function useGet20200531PublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['public-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531PublicKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['public-key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531PublicKeyKey() {
  return ['2020-05-31', '/2020-05-31/public-key', 'POST'] as const
}

export function usePost20200531PublicKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531PublicKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']> },
      ) => parseResponse(client['2020-05-31']['public-key'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531RealtimeLogConfigKey(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/realtime-log-config', keyArgs] as const
}

export function useGet20200531RealtimeLogConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531RealtimeLogConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['realtime-log-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531RealtimeLogConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531RealtimeLogConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['realtime-log-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531RealtimeLogConfigKey() {
  return ['2020-05-31', '/2020-05-31/realtime-log-config', 'POST'] as const
}

export function usePost20200531RealtimeLogConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531RealtimeLogConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']> },
      ) => parseResponse(client['2020-05-31']['realtime-log-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ResponseHeadersPolicyKey(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy', keyArgs] as const
}

export function useGet20200531ResponseHeadersPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['response-headers-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ResponseHeadersPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['response-headers-policy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531ResponseHeadersPolicyKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy', 'POST'] as const
}

export function usePost20200531ResponseHeadersPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531ResponseHeadersPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['response-headers-policy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531StreamingDistributionKey(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution', keyArgs] as const
}

export function useGet20200531StreamingDistribution<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['streaming-distribution'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531StreamingDistribution<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['streaming-distribution'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531StreamingDistributionKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution', 'POST'] as const
}

export function usePost20200531StreamingDistribution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531StreamingDistributionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>
        },
      ) => parseResponse(client['2020-05-31']['streaming-distribution'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200531StreamingDistributionWithTagsKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution#WithTags', 'POST'] as const
}

export function usePost20200531StreamingDistributionWithTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531StreamingDistributionWithTagsKey()
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
            (typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['streaming-distribution#WithTags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531CachePolicyIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', keyArgs] as const
}

export function useGet20200531CachePolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['cache-policy'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531CachePolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['cache-policy'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20200531CachePolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', 'PUT'] as const
}

export function usePut20200531CachePolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531CachePolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']> },
      ) => parseResponse(client['2020-05-31']['cache-policy'][':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531CachePolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', 'DELETE'] as const
}

export function useDelete20200531CachePolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531CachePolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>
        },
      ) => parseResponse(client['2020-05-31']['cache-policy'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginAccessIdentityCloudfrontIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id', keyArgs] as const
}

export function useGet20200531OriginAccessIdentityCloudfrontId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessIdentityCloudfrontId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531OriginAccessIdentityCloudfrontIdKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id', 'DELETE'] as const
}

export function useDelete20200531OriginAccessIdentityCloudfrontId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531OriginAccessIdentityCloudfrontIdKey()
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
            (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ContinuousDeploymentPolicyIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', keyArgs] as const
}

export function useGet20200531ContinuousDeploymentPolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ContinuousDeploymentPolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531ContinuousDeploymentPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', 'PUT'] as const
}

export function usePut20200531ContinuousDeploymentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531ContinuousDeploymentPolicyIdKey()
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
            (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531ContinuousDeploymentPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', 'DELETE'] as const
}

export function useDelete20200531ContinuousDeploymentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531ContinuousDeploymentPolicyIdKey()
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
            (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531DistributionIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:Id', keyArgs] as const
}

export function useGet20200531DistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].distribution[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].distribution[':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531DistributionIdKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id', 'DELETE'] as const
}

export function useDelete20200531DistributionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531DistributionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>
        },
      ) => parseResponse(client['2020-05-31'].distribution[':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id', keyArgs] as const
}

export function useGet20200531FieldLevelEncryptionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryptionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531FieldLevelEncryptionIdKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id', 'DELETE'] as const
}

export function useDelete20200531FieldLevelEncryptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531FieldLevelEncryptionIdKey()
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
            (typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionProfileIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id', keyArgs] as const
}

export function useGet20200531FieldLevelEncryptionProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryptionProfileId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531FieldLevelEncryptionProfileIdKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id', 'DELETE'] as const
}

export function useDelete20200531FieldLevelEncryptionProfileId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531FieldLevelEncryptionProfileIdKey()
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
            (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20200531FunctionNameIfMatchKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name#If-Match', 'PUT'] as const
}

export function usePut20200531FunctionNameIfMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531FunctionNameIfMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>
        },
      ) => parseResponse(client['2020-05-31'].function[':Name#If-Match'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531FunctionNameIfMatchKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name#If-Match', 'DELETE'] as const
}

export function useDelete20200531FunctionNameIfMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531FunctionNameIfMatchKey()
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
            (typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']
          >
        },
      ) =>
        parseResponse(client['2020-05-31'].function[':Name#If-Match'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531KeyGroupIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group/:Id', keyArgs] as const
}

export function useGet20200531KeyGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['key-group'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531KeyGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['key-group'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20200531KeyGroupIdKey() {
  return ['2020-05-31', '/2020-05-31/key-group/:Id', 'PUT'] as const
}

export function usePut20200531KeyGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531KeyGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']> },
      ) => parseResponse(client['2020-05-31']['key-group'][':Id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531KeyGroupIdKey() {
  return ['2020-05-31', '/2020-05-31/key-group/:Id', 'DELETE'] as const
}

export function useDelete20200531KeyGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531KeyGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']> },
      ) => parseResponse(client['2020-05-31']['key-group'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginAccessControlIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id', keyArgs] as const
}

export function useGet20200531OriginAccessControlId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessControlId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531OriginAccessControlIdKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id', 'DELETE'] as const
}

export function useDelete20200531OriginAccessControlId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531OriginAccessControlIdKey()
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
            (typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginRequestPolicyIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', keyArgs] as const
}

export function useGet20200531OriginRequestPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginRequestPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531OriginRequestPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', 'PUT'] as const
}

export function usePut20200531OriginRequestPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531OriginRequestPolicyIdKey()
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
            (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531OriginRequestPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', 'DELETE'] as const
}

export function useDelete20200531OriginRequestPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531OriginRequestPolicyIdKey()
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
            (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531PublicKeyIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key/:Id', keyArgs] as const
}

export function useGet20200531PublicKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['public-key'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531PublicKeyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['public-key'][':Id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531PublicKeyIdKey() {
  return ['2020-05-31', '/2020-05-31/public-key/:Id', 'DELETE'] as const
}

export function useDelete20200531PublicKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531PublicKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']> },
      ) => parseResponse(client['2020-05-31']['public-key'][':Id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200531DeleteRealtimeLogConfigIndexKey() {
  return ['2020-05-31', '/2020-05-31/delete-realtime-log-config/', 'POST'] as const
}

export function usePost20200531DeleteRealtimeLogConfigIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DeleteRealtimeLogConfigIndexKey()
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
            (typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['delete-realtime-log-config'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ResponseHeadersPolicyIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', keyArgs] as const
}

export function useGet20200531ResponseHeadersPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ResponseHeadersPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531ResponseHeadersPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', 'PUT'] as const
}

export function usePut20200531ResponseHeadersPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531ResponseHeadersPolicyIdKey()
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
            (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete20200531ResponseHeadersPolicyIdKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', 'DELETE'] as const
}

export function useDelete20200531ResponseHeadersPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531ResponseHeadersPolicyIdKey()
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
            (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531StreamingDistributionIdKey(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id', keyArgs] as const
}

export function useGet20200531StreamingDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531StreamingDistributionId<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete20200531StreamingDistributionIdKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id', 'DELETE'] as const
}

export function useDelete20200531StreamingDistributionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete20200531StreamingDistributionIdKey()
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
            (typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FunctionNameDescribeKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function/:Name/describe', keyArgs] as const
}

export function useGet20200531FunctionNameDescribe<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionNameDescribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31'].function[':Name'].describe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FunctionNameDescribe<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionNameDescribeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31'].function[':Name'].describe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200531CachePolicyIdConfigKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id/config', keyArgs] as const
}

export function useGet20200531CachePolicyIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['cache-policy'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531CachePolicyIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531CachePolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['cache-policy'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200531OriginAccessIdentityCloudfrontIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-05-31',
    '/2020-05-31/origin-access-identity/cloudfront/:Id/config',
    keyArgs,
  ] as const
}

export function useGet20200531OriginAccessIdentityCloudfrontIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessIdentityCloudfrontIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessIdentityCloudfrontIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531OriginAccessIdentityCloudfrontIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id/config', 'PUT'] as const
}

export function usePut20200531OriginAccessIdentityCloudfrontIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531OriginAccessIdentityCloudfrontIdConfigKey()
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
            (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ContinuousDeploymentPolicyIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id/config', keyArgs] as const
}

export function useGet20200531ContinuousDeploymentPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ContinuousDeploymentPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ContinuousDeploymentPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionIdConfigKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:Id/config', keyArgs] as const
}

export function useGet20200531DistributionIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31'].distribution[':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31'].distribution[':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20200531DistributionIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id/config', 'PUT'] as const
}

export function usePut20200531DistributionIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531DistributionIdConfigKey()
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
            (typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']
          >
        },
      ) => parseResponse(client['2020-05-31'].distribution[':Id'].config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id/config', keyArgs] as const
}

export function useGet20200531FieldLevelEncryptionIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryptionIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531FieldLevelEncryptionIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id/config', 'PUT'] as const
}

export function usePut20200531FieldLevelEncryptionIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531FieldLevelEncryptionIdConfigKey()
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
            (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].config.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FieldLevelEncryptionProfileIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id/config', keyArgs] as const
}

export function useGet20200531FieldLevelEncryptionProfileIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FieldLevelEncryptionProfileIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FieldLevelEncryptionProfileIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531FieldLevelEncryptionProfileIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id/config', 'PUT'] as const
}

export function usePut20200531FieldLevelEncryptionProfileIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531FieldLevelEncryptionProfileIdConfigKey()
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
            (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531FunctionNameKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function/:Name', keyArgs] as const
}

export function useGet20200531FunctionName<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].function[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531FunctionName<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531FunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31'].function[':Name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionDistributionIdInvalidationIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-05-31',
    '/2020-05-31/distribution/:DistributionId/invalidation/:Id',
    keyArgs,
  ] as const
}

export function useGet20200531DistributionDistributionIdInvalidationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionDistributionIdInvalidationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionDistributionIdInvalidationId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionDistributionIdInvalidationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531KeyGroupIdConfigKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group/:Id/config', keyArgs] as const
}

export function useGet20200531KeyGroupIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['key-group'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531KeyGroupIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531KeyGroupIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['key-group'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet20200531OriginAccessControlIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id/config', keyArgs] as const
}

export function useGet20200531OriginAccessControlIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginAccessControlIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginAccessControlIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531OriginAccessControlIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id/config', 'PUT'] as const
}

export function usePut20200531OriginAccessControlIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531OriginAccessControlIdConfigKey()
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
            (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].config.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531OriginRequestPolicyIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id/config', keyArgs] as const
}

export function useGet20200531OriginRequestPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531OriginRequestPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531OriginRequestPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531PublicKeyIdConfigKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key/:Id/config', keyArgs] as const
}

export function useGet20200531PublicKeyIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['public-key'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531PublicKeyIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531PublicKeyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2020-05-31']['public-key'][':Id'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut20200531PublicKeyIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/public-key/:Id/config', 'PUT'] as const
}

export function usePut20200531PublicKeyIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531PublicKeyIdConfigKey()
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
            (typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']
          >
        },
      ) => parseResponse(client['2020-05-31']['public-key'][':Id'].config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost20200531GetRealtimeLogConfigIndexKey() {
  return ['2020-05-31', '/2020-05-31/get-realtime-log-config/', 'POST'] as const
}

export function usePost20200531GetRealtimeLogConfigIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531GetRealtimeLogConfigIndexKey()
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
            (typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['get-realtime-log-config'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ResponseHeadersPolicyIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id/config', keyArgs] as const
}

export function useGet20200531ResponseHeadersPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ResponseHeadersPolicyIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ResponseHeadersPolicyIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531StreamingDistributionIdConfigKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id/config', keyArgs] as const
}

export function useGet20200531StreamingDistributionIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531StreamingDistributionIdConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531StreamingDistributionIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPut20200531StreamingDistributionIdConfigKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id/config', 'PUT'] as const
}

export function usePut20200531StreamingDistributionIdConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531StreamingDistributionIdConfigKey()
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
            (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].config.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531ConflictingAliasDistributionIdAliasKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/conflicting-alias#DistributionId&Alias', keyArgs] as const
}

export function useGet20200531ConflictingAliasDistributionIdAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ConflictingAliasDistributionIdAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531ConflictingAliasDistributionIdAlias<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531ConflictingAliasDistributionIdAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionsByCachePolicyIdCachePolicyIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByCachePolicyId/:CachePolicyId', keyArgs] as const
}

export function useGet20200531DistributionsByCachePolicyIdCachePolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByCachePolicyIdCachePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsByCachePolicyIdCachePolicyId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByCachePolicyIdCachePolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionsByKeyGroupIdKeyGroupIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByKeyGroupId/:KeyGroupId', keyArgs] as const
}

export function useGet20200531DistributionsByKeyGroupIdKeyGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByKeyGroupIdKeyGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsByKeyGroupIdKeyGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByKeyGroupIdKeyGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-05-31',
    '/2020-05-31/distributionsByOriginRequestPolicyId/:OriginRequestPolicyId',
    keyArgs,
  ] as const
}

export function useGet20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost20200531DistributionsByRealtimeLogConfigIndexKey() {
  return ['2020-05-31', '/2020-05-31/distributionsByRealtimeLogConfig/', 'POST'] as const
}

export function usePost20200531DistributionsByRealtimeLogConfigIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531DistributionsByRealtimeLogConfigIndexKey()
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
            (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distributionsByRealtimeLogConfig.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    '2020-05-31',
    '/2020-05-31/distributionsByResponseHeadersPolicyId/:ResponseHeadersPolicyId',
    keyArgs,
  ] as const
}

export function useGet20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByResponseHeadersPolicyId[
            ':ResponseHeadersPolicyId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByResponseHeadersPolicyId[
            ':ResponseHeadersPolicyId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531DistributionsByWebACLIdWebACLIdKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByWebACLId/:WebACLId', keyArgs] as const
}

export function useGet20200531DistributionsByWebACLIdWebACLId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByWebACLIdWebACLIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531DistributionsByWebACLIdWebACLId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531DistributionsByWebACLIdWebACLIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet20200531TaggingResourceKey(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/tagging#Resource', keyArgs] as const
}

export function useGet20200531TaggingResource<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531TaggingResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['tagging#Resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet20200531TaggingResource<TError = unknown>(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGet20200531TaggingResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2020-05-31']['tagging#Resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost20200531FunctionNamePublishIfMatchKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name/publish#If-Match', 'POST'] as const
}

export function usePost20200531FunctionNamePublishIfMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531FunctionNamePublishIfMatchKey()
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
            (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].function[':Name']['publish#If-Match'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200531TaggingOperationTagResourceKey() {
  return ['2020-05-31', '/2020-05-31/tagging#Operation=Tag&Resource', 'POST'] as const
}

export function usePost20200531TaggingOperationTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531TaggingOperationTagResourceKey()
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
            (typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['tagging#Operation=Tag&Resource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200531FunctionNameTestIfMatchKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name/test#If-Match', 'POST'] as const
}

export function usePost20200531FunctionNameTestIfMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531FunctionNameTestIfMatchKey()
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
            (typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].function[':Name']['test#If-Match'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost20200531TaggingOperationUntagResourceKey() {
  return ['2020-05-31', '/2020-05-31/tagging#Operation=Untag&Resource', 'POST'] as const
}

export function usePost20200531TaggingOperationUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost20200531TaggingOperationUntagResourceKey()
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
            (typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31']['tagging#Operation=Untag&Resource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20200531DistributionIdPromoteStagingConfigKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id/promote-staging-config', 'PUT'] as const
}

export function usePut20200531DistributionIdPromoteStagingConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531DistributionIdPromoteStagingConfigKey()
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
            (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2020-05-31'].distribution[':Id']['promote-staging-config'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut20200531RealtimeLogConfigIndexKey() {
  return ['2020-05-31', '/2020-05-31/realtime-log-config/', 'PUT'] as const
}

export function usePut20200531RealtimeLogConfigIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut20200531RealtimeLogConfigIndexKey()
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
            (typeof client)['2020-05-31']['realtime-log-config']['index']['$put']
          >
        },
      ) =>
        parseResponse(client['2020-05-31']['realtime-log-config'].index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

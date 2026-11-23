import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2020_05_31Key() {
  return ['2020-05-31'] as const
}

export function getPut20200531DistributionTargetDistributionIdAssociateAliasAliasMutationKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distribution/:TargetDistributionId/associate-alias#Alias',
    'PUT',
  ] as const
}

export function getPut20200531DistributionTargetDistributionIdAssociateAliasAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531DistributionTargetDistributionIdAssociateAliasAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distribution[':TargetDistributionId']['associate-alias#Alias'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPut20200531DistributionTargetDistributionIdAssociateAliasAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distribution'][':TargetDistributionId']['associate-alias#Alias']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPut20200531DistributionTargetDistributionIdAssociateAliasAliasMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531DistributionPrimaryDistributionIdCopyMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:PrimaryDistributionId/copy', 'POST'] as const
}

export function getPost20200531DistributionPrimaryDistributionIdCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionPrimaryDistributionIdCopyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distribution[':PrimaryDistributionId'].copy.$post(args, options),
      )
    },
  })
}

export function createPost20200531DistributionPrimaryDistributionIdCopy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distribution'][':PrimaryDistributionId']['copy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DistributionPrimaryDistributionIdCopyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531CachePolicyQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy', keyArgs] as const
}

export function get20200531CachePolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531CachePolicyQueryKey>
  >({
    queryKey: get20200531CachePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['cache-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531CachePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531CachePolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531CachePolicyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20200531CachePolicyMutationKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy', 'POST'] as const
}

export function getPost20200531CachePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531CachePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['cache-policy'].$post(args, options))
    },
  })
}

export function createPost20200531CachePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531CachePolicyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginAccessIdentityCloudfrontQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront', keyArgs] as const
}

export function get20200531OriginAccessIdentityCloudfrontQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessIdentityCloudfrontQueryKey>
  >({
    queryKey: get20200531OriginAccessIdentityCloudfrontQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessIdentityCloudfront<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessIdentityCloudfrontQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessIdentityCloudfrontQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531OriginAccessIdentityCloudfrontMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront', 'POST'] as const
}

export function getPost20200531OriginAccessIdentityCloudfrontMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531OriginAccessIdentityCloudfrontMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront.$post(args, options),
      )
    },
  })
}

export function createPost20200531OriginAccessIdentityCloudfront<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531OriginAccessIdentityCloudfrontMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ContinuousDeploymentPolicyQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531ContinuousDeploymentPolicyQueryKey>
  >({
    queryKey: get20200531ContinuousDeploymentPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ContinuousDeploymentPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531ContinuousDeploymentPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ContinuousDeploymentPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531ContinuousDeploymentPolicyMutationKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy', 'POST'] as const
}

export function getPost20200531ContinuousDeploymentPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531ContinuousDeploymentPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['continuous-deployment-policy']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'].$post(args, options),
      )
    },
  })
}

export function createPost20200531ContinuousDeploymentPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531ContinuousDeploymentPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531DistributionQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution', keyArgs] as const
}

export function get20200531DistributionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531DistributionQueryKey>
  >({
    queryKey: get20200531DistributionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distribution.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531Distribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531DistributionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531DistributionMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution', 'POST'] as const
}

export function getPost20200531DistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']>,
    ) {
      return parseResponse(client['2020-05-31'].distribution.$post(args, options))
    },
  })
}

export function createPost20200531Distribution<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['distribution']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DistributionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531DistributionWithTagsMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution#WithTags', 'POST'] as const
}

export function getPost20200531DistributionWithTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionWithTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['distribution#WithTags'].$post(args, options))
    },
  })
}

export function createPost20200531DistributionWithTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DistributionWithTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption', keyArgs] as const
}

export function get20200531FieldLevelEncryptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531FieldLevelEncryptionMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption', 'POST'] as const
}

export function getPost20200531FieldLevelEncryptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531FieldLevelEncryptionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['field-level-encryption'].$post(args, options))
    },
  })
}

export function createPost20200531FieldLevelEncryption<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531FieldLevelEncryptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionProfileQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionProfileQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryptionProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionProfileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionProfileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531FieldLevelEncryptionProfileMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile', 'POST'] as const
}

export function getPost20200531FieldLevelEncryptionProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531FieldLevelEncryptionProfileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['field-level-encryption-profile']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'].$post(args, options),
      )
    },
  })
}

export function createPost20200531FieldLevelEncryptionProfile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531FieldLevelEncryptionProfileMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FunctionQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function', keyArgs] as const
}

export function get20200531FunctionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FunctionQueryKey>
  >({
    queryKey: get20200531FunctionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].function.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531Function<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['function']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FunctionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531FunctionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20200531FunctionMutationKey() {
  return ['2020-05-31', '/2020-05-31/function', 'POST'] as const
}

export function getPost20200531FunctionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['function']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531FunctionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2020-05-31']['function']['$post']>) {
      return parseResponse(client['2020-05-31'].function.$post(args, options))
    },
  })
}

export function createPost20200531Function<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['function']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531FunctionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531DistributionDistributionIdInvalidationQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:DistributionId/invalidation', keyArgs] as const
}

export function get20200531DistributionDistributionIdInvalidationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionDistributionIdInvalidationQueryKey>
  >({
    queryKey: get20200531DistributionDistributionIdInvalidationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionDistributionIdInvalidation<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionDistributionIdInvalidationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionDistributionIdInvalidationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531DistributionDistributionIdInvalidationMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:DistributionId/invalidation', 'POST'] as const
}

export function getPost20200531DistributionDistributionIdInvalidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionDistributionIdInvalidationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distribution[':DistributionId'].invalidation.$post(args, options),
      )
    },
  })
}

export function createPost20200531DistributionDistributionIdInvalidation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DistributionDistributionIdInvalidationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531KeyGroupQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group', keyArgs] as const
}

export function get20200531KeyGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531KeyGroupQueryKey>
  >({
    queryKey: get20200531KeyGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['key-group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531KeyGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531KeyGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531KeyGroupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20200531KeyGroupMutationKey() {
  return ['2020-05-31', '/2020-05-31/key-group', 'POST'] as const
}

export function getPost20200531KeyGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531KeyGroupMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']>) {
      return parseResponse(client['2020-05-31']['key-group'].$post(args, options))
    },
  })
}

export function createPost20200531KeyGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['key-group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531KeyGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey(
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

export function get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey>
  >({
    queryKey: get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributions[':DistributionId']['monitoring-subscription'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    'POST',
  ] as const
}

export function getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distributions[':DistributionId'][
          'monitoring-subscription'
        ].index.$post(args, options),
      )
    },
  })
}

export function createPost20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationKey() {
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    'DELETE',
  ] as const
}

export function getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distributions[':DistributionId'][
          'monitoring-subscription'
        ].index.$delete(args, options),
      )
    },
  })
}

export function createDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginAccessControlQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control', keyArgs] as const
}

export function get20200531OriginAccessControlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessControlQueryKey>
  >({
    queryKey: get20200531OriginAccessControlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessControl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessControlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessControlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531OriginAccessControlMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control', 'POST'] as const
}

export function getPost20200531OriginAccessControlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531OriginAccessControlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['origin-access-control'].$post(args, options))
    },
  })
}

export function createPost20200531OriginAccessControl<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531OriginAccessControlMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginRequestPolicyQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy', keyArgs] as const
}

export function get20200531OriginRequestPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531OriginRequestPolicyQueryKey>
  >({
    queryKey: get20200531OriginRequestPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginRequestPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531OriginRequestPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginRequestPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531OriginRequestPolicyMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy', 'POST'] as const
}

export function getPost20200531OriginRequestPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531OriginRequestPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['origin-request-policy'].$post(args, options))
    },
  })
}

export function createPost20200531OriginRequestPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531OriginRequestPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531PublicKeyQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key', keyArgs] as const
}

export function get20200531PublicKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531PublicKeyQueryKey>
  >({
    queryKey: get20200531PublicKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['public-key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531PublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531PublicKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531PublicKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost20200531PublicKeyMutationKey() {
  return ['2020-05-31', '/2020-05-31/public-key', 'POST'] as const
}

export function getPost20200531PublicKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531PublicKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']>) {
      return parseResponse(client['2020-05-31']['public-key'].$post(args, options))
    },
  })
}

export function createPost20200531PublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['public-key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531PublicKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531RealtimeLogConfigQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/realtime-log-config', keyArgs] as const
}

export function get20200531RealtimeLogConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531RealtimeLogConfigQueryKey>
  >({
    queryKey: get20200531RealtimeLogConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['realtime-log-config'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531RealtimeLogConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531RealtimeLogConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531RealtimeLogConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531RealtimeLogConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/realtime-log-config', 'POST'] as const
}

export function getPost20200531RealtimeLogConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531RealtimeLogConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['realtime-log-config'].$post(args, options))
    },
  })
}

export function createPost20200531RealtimeLogConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531RealtimeLogConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ResponseHeadersPolicyQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531ResponseHeadersPolicyQueryKey>
  >({
    queryKey: get20200531ResponseHeadersPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ResponseHeadersPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531ResponseHeadersPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ResponseHeadersPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531ResponseHeadersPolicyMutationKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy', 'POST'] as const
}

export function getPost20200531ResponseHeadersPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531ResponseHeadersPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['response-headers-policy'].$post(args, options))
    },
  })
}

export function createPost20200531ResponseHeadersPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531ResponseHeadersPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531StreamingDistributionQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution', keyArgs] as const
}

export function get20200531StreamingDistributionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531StreamingDistributionQueryKey>
  >({
    queryKey: get20200531StreamingDistributionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531StreamingDistribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531StreamingDistributionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531StreamingDistributionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531StreamingDistributionMutationKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution', 'POST'] as const
}

export function getPost20200531StreamingDistributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531StreamingDistributionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>,
    ) {
      return parseResponse(client['2020-05-31']['streaming-distribution'].$post(args, options))
    },
  })
}

export function createPost20200531StreamingDistribution<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531StreamingDistributionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531StreamingDistributionWithTagsMutationKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution#WithTags', 'POST'] as const
}

export function getPost20200531StreamingDistributionWithTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531StreamingDistributionWithTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution#WithTags'].$post(args, options),
      )
    },
  })
}

export function createPost20200531StreamingDistributionWithTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531StreamingDistributionWithTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531CachePolicyIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', keyArgs] as const
}

export function get20200531CachePolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531CachePolicyIdQueryKey>
  >({
    queryKey: get20200531CachePolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['cache-policy'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531CachePolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531CachePolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531CachePolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531CachePolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', 'PUT'] as const
}

export function getPut20200531CachePolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531CachePolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>,
    ) {
      return parseResponse(client['2020-05-31']['cache-policy'][':Id'].$put(args, options))
    },
  })
}

export function createPut20200531CachePolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531CachePolicyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531CachePolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', 'DELETE'] as const
}

export function getDelete20200531CachePolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531CachePolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2020-05-31']['cache-policy'][':Id'].$delete(args, options))
    },
  })
}

export function createDelete20200531CachePolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531CachePolicyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginAccessIdentityCloudfrontIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id', keyArgs] as const
}

export function get20200531OriginAccessIdentityCloudfrontIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdQueryKey>
  >({
    queryKey: get20200531OriginAccessIdentityCloudfrontIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessIdentityCloudfrontId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessIdentityCloudfrontIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531OriginAccessIdentityCloudfrontIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id', 'DELETE'] as const
}

export function getDelete20200531OriginAccessIdentityCloudfrontIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531OriginAccessIdentityCloudfrontIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531OriginAccessIdentityCloudfrontId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531OriginAccessIdentityCloudfrontIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ContinuousDeploymentPolicyIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531ContinuousDeploymentPolicyIdQueryKey>
  >({
    queryKey: get20200531ContinuousDeploymentPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ContinuousDeploymentPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531ContinuousDeploymentPolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ContinuousDeploymentPolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531ContinuousDeploymentPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', 'PUT'] as const
}

export function getPut20200531ContinuousDeploymentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531ContinuousDeploymentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].$put(args, options),
      )
    },
  })
}

export function createPut20200531ContinuousDeploymentPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531ContinuousDeploymentPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531ContinuousDeploymentPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', 'DELETE'] as const
}

export function getDelete20200531ContinuousDeploymentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531ContinuousDeploymentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531ContinuousDeploymentPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531ContinuousDeploymentPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531DistributionIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:Id', keyArgs] as const
}

export function get20200531DistributionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531DistributionIdQueryKey>
  >({
    queryKey: get20200531DistributionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distribution[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531DistributionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531DistributionIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id', 'DELETE'] as const
}

export function getDelete20200531DistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531DistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2020-05-31'].distribution[':Id'].$delete(args, options))
    },
  })
}

export function createDelete20200531DistributionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531DistributionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id', keyArgs] as const
}

export function get20200531FieldLevelEncryptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionIdQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531FieldLevelEncryptionIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id', 'DELETE'] as const
}

export function getDelete20200531FieldLevelEncryptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531FieldLevelEncryptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531FieldLevelEncryptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531FieldLevelEncryptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionProfileIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionProfileIdQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionProfileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryptionProfileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionProfileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionProfileIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531FieldLevelEncryptionProfileIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id', 'DELETE'] as const
}

export function getDelete20200531FieldLevelEncryptionProfileIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531FieldLevelEncryptionProfileIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531FieldLevelEncryptionProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531FieldLevelEncryptionProfileIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPut20200531FunctionNameIfMatchMutationKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name#If-Match', 'PUT'] as const
}

export function getPut20200531FunctionNameIfMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531FunctionNameIfMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>,
    ) {
      return parseResponse(client['2020-05-31'].function[':Name#If-Match'].$put(args, options))
    },
  })
}

export function createPut20200531FunctionNameIfMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531FunctionNameIfMatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531FunctionNameIfMatchMutationKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name#If-Match', 'DELETE'] as const
}

export function getDelete20200531FunctionNameIfMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531FunctionNameIfMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']
      >,
    ) {
      return parseResponse(client['2020-05-31'].function[':Name#If-Match'].$delete(args, options))
    },
  })
}

export function createDelete20200531FunctionNameIfMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531FunctionNameIfMatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531KeyGroupIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group/:Id', keyArgs] as const
}

export function get20200531KeyGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531KeyGroupIdQueryKey>
  >({
    queryKey: get20200531KeyGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['key-group'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531KeyGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531KeyGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531KeyGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPut20200531KeyGroupIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/key-group/:Id', 'PUT'] as const
}

export function getPut20200531KeyGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531KeyGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>,
    ) {
      return parseResponse(client['2020-05-31']['key-group'][':Id'].$put(args, options))
    },
  })
}

export function createPut20200531KeyGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531KeyGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531KeyGroupIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/key-group/:Id', 'DELETE'] as const
}

export function getDelete20200531KeyGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531KeyGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2020-05-31']['key-group'][':Id'].$delete(args, options))
    },
  })
}

export function createDelete20200531KeyGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531KeyGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginAccessControlIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id', keyArgs] as const
}

export function get20200531OriginAccessControlIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessControlIdQueryKey>
  >({
    queryKey: get20200531OriginAccessControlIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessControlIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessControlIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531OriginAccessControlIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id', 'DELETE'] as const
}

export function getDelete20200531OriginAccessControlIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531OriginAccessControlIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531OriginAccessControlId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531OriginAccessControlIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginRequestPolicyIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', keyArgs] as const
}

export function get20200531OriginRequestPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531OriginRequestPolicyIdQueryKey>
  >({
    queryKey: get20200531OriginRequestPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginRequestPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531OriginRequestPolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginRequestPolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531OriginRequestPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', 'PUT'] as const
}

export function getPut20200531OriginRequestPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531OriginRequestPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>,
    ) {
      return parseResponse(client['2020-05-31']['origin-request-policy'][':Id'].$put(args, options))
    },
  })
}

export function createPut20200531OriginRequestPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531OriginRequestPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531OriginRequestPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', 'DELETE'] as const
}

export function getDelete20200531OriginRequestPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531OriginRequestPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531OriginRequestPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531OriginRequestPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531PublicKeyIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key/:Id', keyArgs] as const
}

export function get20200531PublicKeyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531PublicKeyIdQueryKey>
  >({
    queryKey: get20200531PublicKeyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['public-key'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531PublicKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531PublicKeyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get20200531PublicKeyIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDelete20200531PublicKeyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/public-key/:Id', 'DELETE'] as const
}

export function getDelete20200531PublicKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531PublicKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>,
    ) {
      return parseResponse(client['2020-05-31']['public-key'][':Id'].$delete(args, options))
    },
  })
}

export function createDelete20200531PublicKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531PublicKeyIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531DeleteRealtimeLogConfigIndexMutationKey() {
  return ['2020-05-31', '/2020-05-31/delete-realtime-log-config/', 'POST'] as const
}

export function getPost20200531DeleteRealtimeLogConfigIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DeleteRealtimeLogConfigIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['delete-realtime-log-config'].index.$post(args, options),
      )
    },
  })
}

export function createPost20200531DeleteRealtimeLogConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['delete-realtime-log-config']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DeleteRealtimeLogConfigIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ResponseHeadersPolicyIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531ResponseHeadersPolicyIdQueryKey>
  >({
    queryKey: get20200531ResponseHeadersPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ResponseHeadersPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531ResponseHeadersPolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ResponseHeadersPolicyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531ResponseHeadersPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', 'PUT'] as const
}

export function getPut20200531ResponseHeadersPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531ResponseHeadersPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].$put(args, options),
      )
    },
  })
}

export function createPut20200531ResponseHeadersPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531ResponseHeadersPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDelete20200531ResponseHeadersPolicyIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', 'DELETE'] as const
}

export function getDelete20200531ResponseHeadersPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531ResponseHeadersPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531ResponseHeadersPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531ResponseHeadersPolicyIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531StreamingDistributionIdQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id', keyArgs] as const
}

export function get20200531StreamingDistributionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531StreamingDistributionIdQueryKey>
  >({
    queryKey: get20200531StreamingDistributionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531StreamingDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531StreamingDistributionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531StreamingDistributionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDelete20200531StreamingDistributionIdMutationKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id', 'DELETE'] as const
}

export function getDelete20200531StreamingDistributionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete20200531StreamingDistributionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].$delete(args, options),
      )
    },
  })
}

export function createDelete20200531StreamingDistributionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDelete20200531StreamingDistributionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FunctionNameDescribeQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function/:Name/describe', keyArgs] as const
}

export function get20200531FunctionNameDescribeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FunctionNameDescribeQueryKey>
  >({
    queryKey: get20200531FunctionNameDescribeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].function[':Name'].describe.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FunctionNameDescribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['function'][':Name']['describe']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FunctionNameDescribeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FunctionNameDescribeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531CachePolicyIdConfigQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id/config', keyArgs] as const
}

export function get20200531CachePolicyIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531CachePolicyIdConfigQueryKey>
  >({
    queryKey: get20200531CachePolicyIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['cache-policy'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531CachePolicyIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531CachePolicyIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531CachePolicyIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey(
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

export function get20200531OriginAccessIdentityCloudfrontIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey>
  >({
    queryKey: get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessIdentityCloudfrontIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessIdentityCloudfrontIdConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531OriginAccessIdentityCloudfrontIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id/config', 'PUT'] as const
}

export function getPut20200531OriginAccessIdentityCloudfrontIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531OriginAccessIdentityCloudfrontIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$put(args, options),
      )
    },
  })
}

export function createPut20200531OriginAccessIdentityCloudfrontIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531OriginAccessIdentityCloudfrontIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ContinuousDeploymentPolicyIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id/config', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531ContinuousDeploymentPolicyIdConfigQueryKey>
  >({
    queryKey: get20200531ContinuousDeploymentPolicyIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ContinuousDeploymentPolicyIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531ContinuousDeploymentPolicyIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ContinuousDeploymentPolicyIdConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionIdConfigQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distribution/:Id/config', keyArgs] as const
}

export function get20200531DistributionIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531DistributionIdConfigQueryKey>
  >({
    queryKey: get20200531DistributionIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distribution[':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531DistributionIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531DistributionIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id/config', 'PUT'] as const
}

export function getPut20200531DistributionIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531DistributionIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(client['2020-05-31'].distribution[':Id'].config.$put(args, options))
    },
  })
}

export function createPut20200531DistributionIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531DistributionIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id/config', keyArgs] as const
}

export function get20200531FieldLevelEncryptionIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionIdConfigQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryptionIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531FieldLevelEncryptionIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id/config', 'PUT'] as const
}

export function getPut20200531FieldLevelEncryptionIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531FieldLevelEncryptionIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].config.$put(args, options),
      )
    },
  })
}

export function createPut20200531FieldLevelEncryptionIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531FieldLevelEncryptionIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FieldLevelEncryptionProfileIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id/config', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531FieldLevelEncryptionProfileIdConfigQueryKey>
  >({
    queryKey: get20200531FieldLevelEncryptionProfileIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FieldLevelEncryptionProfileIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531FieldLevelEncryptionProfileIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FieldLevelEncryptionProfileIdConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531FieldLevelEncryptionProfileIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id/config', 'PUT'] as const
}

export function getPut20200531FieldLevelEncryptionProfileIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531FieldLevelEncryptionProfileIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$put(args, options),
      )
    },
  })
}

export function createPut20200531FieldLevelEncryptionProfileIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531FieldLevelEncryptionProfileIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531FunctionNameQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/function/:Name', keyArgs] as const
}

export function get20200531FunctionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FunctionNameQueryKey>
  >({
    queryKey: get20200531FunctionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].function[':Name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531FunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531FunctionNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531FunctionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionDistributionIdInvalidationIdQueryKey(
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

export function get20200531DistributionDistributionIdInvalidationIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionDistributionIdInvalidationIdQueryKey>
  >({
    queryKey: get20200531DistributionDistributionIdInvalidationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionDistributionIdInvalidationId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionDistributionIdInvalidationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionDistributionIdInvalidationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531KeyGroupIdConfigQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/key-group/:Id/config', keyArgs] as const
}

export function get20200531KeyGroupIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531KeyGroupIdConfigQueryKey>
  >({
    queryKey: get20200531KeyGroupIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['key-group'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531KeyGroupIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531KeyGroupIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531KeyGroupIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531OriginAccessControlIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id/config', keyArgs] as const
}

export function get20200531OriginAccessControlIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531OriginAccessControlIdConfigQueryKey>
  >({
    queryKey: get20200531OriginAccessControlIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginAccessControlIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531OriginAccessControlIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginAccessControlIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531OriginAccessControlIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id/config', 'PUT'] as const
}

export function getPut20200531OriginAccessControlIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531OriginAccessControlIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].config.$put(args, options),
      )
    },
  })
}

export function createPut20200531OriginAccessControlIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531OriginAccessControlIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531OriginRequestPolicyIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id/config', keyArgs] as const
}

export function get20200531OriginRequestPolicyIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531OriginRequestPolicyIdConfigQueryKey>
  >({
    queryKey: get20200531OriginRequestPolicyIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531OriginRequestPolicyIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531OriginRequestPolicyIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531OriginRequestPolicyIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531PublicKeyIdConfigQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/public-key/:Id/config', keyArgs] as const
}

export function get20200531PublicKeyIdConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531PublicKeyIdConfigQueryKey>
  >({
    queryKey: get20200531PublicKeyIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['public-key'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531PublicKeyIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531PublicKeyIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531PublicKeyIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531PublicKeyIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/public-key/:Id/config', 'PUT'] as const
}

export function getPut20200531PublicKeyIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531PublicKeyIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>,
    ) {
      return parseResponse(client['2020-05-31']['public-key'][':Id'].config.$put(args, options))
    },
  })
}

export function createPut20200531PublicKeyIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531PublicKeyIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531GetRealtimeLogConfigIndexMutationKey() {
  return ['2020-05-31', '/2020-05-31/get-realtime-log-config/', 'POST'] as const
}

export function getPost20200531GetRealtimeLogConfigIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531GetRealtimeLogConfigIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['get-realtime-log-config'].index.$post(args, options),
      )
    },
  })
}

export function createPost20200531GetRealtimeLogConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2020-05-31']['get-realtime-log-config']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531GetRealtimeLogConfigIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ResponseHeadersPolicyIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id/config', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531ResponseHeadersPolicyIdConfigQueryKey>
  >({
    queryKey: get20200531ResponseHeadersPolicyIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ResponseHeadersPolicyIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531ResponseHeadersPolicyIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ResponseHeadersPolicyIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531StreamingDistributionIdConfigQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id/config', keyArgs] as const
}

export function get20200531StreamingDistributionIdConfigQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531StreamingDistributionIdConfigQueryKey>
  >({
    queryKey: get20200531StreamingDistributionIdConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531StreamingDistributionIdConfig<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531StreamingDistributionIdConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531StreamingDistributionIdConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPut20200531StreamingDistributionIdConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id/config', 'PUT'] as const
}

export function getPut20200531StreamingDistributionIdConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531StreamingDistributionIdConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].config.$put(args, options),
      )
    },
  })
}

export function createPut20200531StreamingDistributionIdConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531StreamingDistributionIdConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531ConflictingAliasDistributionIdAliasQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/conflicting-alias#DistributionId&Alias', keyArgs] as const
}

export function get20200531ConflictingAliasDistributionIdAliasQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531ConflictingAliasDistributionIdAliasQueryKey>
  >({
    queryKey: get20200531ConflictingAliasDistributionIdAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531ConflictingAliasDistributionIdAlias<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531ConflictingAliasDistributionIdAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531ConflictingAliasDistributionIdAliasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByCachePolicyId/:CachePolicyId', keyArgs] as const
}

export function get20200531DistributionsByCachePolicyIdCachePolicyIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey>
  >({
    queryKey: get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionsByCachePolicyIdCachePolicyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsByCachePolicyIdCachePolicyIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByKeyGroupId/:KeyGroupId', keyArgs] as const
}

export function get20200531DistributionsByKeyGroupIdKeyGroupIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey>
  >({
    queryKey: get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionsByKeyGroupIdKeyGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsByKeyGroupIdKeyGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey(
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

export function get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey>
  >({
    queryKey: get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function create20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531DistributionsByRealtimeLogConfigIndexMutationKey() {
  return ['2020-05-31', '/2020-05-31/distributionsByRealtimeLogConfig/', 'POST'] as const
}

export function getPost20200531DistributionsByRealtimeLogConfigIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531DistributionsByRealtimeLogConfigIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distributionsByRealtimeLogConfig.index.$post(args, options),
      )
    },
  })
}

export function createPost20200531DistributionsByRealtimeLogConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distributionsByRealtimeLogConfig']['index']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531DistributionsByRealtimeLogConfigIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey(
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

export function get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<
      typeof get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey
    >
  >({
    queryKey:
      get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributionsByResponseHeadersPolicyId[
          ':ResponseHeadersPolicyId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<
          typeof get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function get20200531DistributionsByWebACLIdWebACLIdQueryKey(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/distributionsByWebACLId/:WebACLId', keyArgs] as const
}

export function get20200531DistributionsByWebACLIdWebACLIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get20200531DistributionsByWebACLIdWebACLIdQueryKey>
  >({
    queryKey: get20200531DistributionsByWebACLIdWebACLIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531DistributionsByWebACLIdWebACLId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get20200531DistributionsByWebACLIdWebACLIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531DistributionsByWebACLIdWebACLIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function get20200531TaggingResourceQueryKey(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['2020-05-31', '/2020-05-31/tagging#Resource', keyArgs] as const
}

export function get20200531TaggingResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531TaggingResourceQueryKey>
  >({
    queryKey: get20200531TaggingResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2020-05-31']['tagging#Resource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function create20200531TaggingResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get20200531TaggingResourceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...get20200531TaggingResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPost20200531FunctionNamePublishIfMatchMutationKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name/publish#If-Match', 'POST'] as const
}

export function getPost20200531FunctionNamePublishIfMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost20200531FunctionNamePublishIfMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].function[':Name']['publish#If-Match'].$post(args, options),
      )
    },
  })
}

export function createPost20200531FunctionNamePublishIfMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['function'][':Name']['publish#If-Match']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531FunctionNamePublishIfMatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531TaggingOperationTagResourceMutationKey() {
  return ['2020-05-31', '/2020-05-31/tagging#Operation=Tag&Resource', 'POST'] as const
}

export function getPost20200531TaggingOperationTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531TaggingOperationTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['tagging#Operation=Tag&Resource'].$post(args, options),
      )
    },
  })
}

export function createPost20200531TaggingOperationTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531TaggingOperationTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531FunctionNameTestIfMatchMutationKey() {
  return ['2020-05-31', '/2020-05-31/function/:Name/test#If-Match', 'POST'] as const
}

export function getPost20200531FunctionNameTestIfMatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531FunctionNameTestIfMatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].function[':Name']['test#If-Match'].$post(args, options),
      )
    },
  })
}

export function createPost20200531FunctionNameTestIfMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2020-05-31']['function'][':Name']['test#If-Match']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531FunctionNameTestIfMatchMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPost20200531TaggingOperationUntagResourceMutationKey() {
  return ['2020-05-31', '/2020-05-31/tagging#Operation=Untag&Resource', 'POST'] as const
}

export function getPost20200531TaggingOperationUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost20200531TaggingOperationUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']
      >,
    ) {
      return parseResponse(
        client['2020-05-31']['tagging#Operation=Untag&Resource'].$post(args, options),
      )
    },
  })
}

export function createPost20200531TaggingOperationUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['2020-05-31']['tagging#Operation=Untag&Resource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPost20200531TaggingOperationUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPut20200531DistributionIdPromoteStagingConfigMutationKey() {
  return ['2020-05-31', '/2020-05-31/distribution/:Id/promote-staging-config', 'PUT'] as const
}

export function getPut20200531DistributionIdPromoteStagingConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut20200531DistributionIdPromoteStagingConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
      >,
    ) {
      return parseResponse(
        client['2020-05-31'].distribution[':Id']['promote-staging-config'].$put(args, options),
      )
    },
  })
}

export function createPut20200531DistributionIdPromoteStagingConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['2020-05-31']['distribution'][':Id']['promote-staging-config']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531DistributionIdPromoteStagingConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPut20200531RealtimeLogConfigIndexMutationKey() {
  return ['2020-05-31', '/2020-05-31/realtime-log-config/', 'PUT'] as const
}

export function getPut20200531RealtimeLogConfigIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut20200531RealtimeLogConfigIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>,
    ) {
      return parseResponse(client['2020-05-31']['realtime-log-config'].index.$put(args, options))
    },
  })
}

export function createPut20200531RealtimeLogConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPut20200531RealtimeLogConfigIndexMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

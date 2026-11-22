import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function usePut20200531DistributionTargetDistributionIdAssociateAliasAlias<
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
    getPut20200531DistributionTargetDistributionIdAssociateAliasAliasMutationOptions<
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

export function usePost20200531DistributionPrimaryDistributionIdCopy<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531DistributionPrimaryDistributionIdCopyMutationOptions<
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

export function get20200531CachePolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/cache-policy', keyArgs] as const
}

export function get20200531CachePolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531CachePolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['cache-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531CachePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['cache-policy']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531CachePolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531CachePolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['cache-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531CachePolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531CachePolicyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531OriginAccessIdentityCloudfrontQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront', keyArgs] as const
}

export function get20200531OriginAccessIdentityCloudfrontQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginAccessIdentityCloudfront<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-identity']['cloudfront']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531OriginAccessIdentityCloudfrontQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531OriginAccessIdentityCloudfront<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531OriginAccessIdentityCloudfrontMutationOptions<
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

export function get20200531ContinuousDeploymentPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ContinuousDeploymentPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ContinuousDeploymentPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531ContinuousDeploymentPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ContinuousDeploymentPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['continuous-deployment-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531ContinuousDeploymentPolicy<
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
                  ReturnType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy']['$post']>,
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
  const mutationDefaults = getPost20200531ContinuousDeploymentPolicyMutationOptions<
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

export function get20200531DistributionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distribution', keyArgs] as const
}

export function get20200531DistributionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distribution.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531Distribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['distribution']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531DistributionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distribution.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531Distribution<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531DistributionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost20200531DistributionWithTags<
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
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['distribution#WithTags']['$post']>,
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
  const mutationDefaults = getPost20200531DistributionWithTagsMutationOptions<
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

export function get20200531FieldLevelEncryptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption', keyArgs] as const
}

export function get20200531FieldLevelEncryptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryption<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531FieldLevelEncryptionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531FieldLevelEncryption<
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
                  ReturnType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['field-level-encryption']['$post']>,
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
  const mutationDefaults = getPost20200531FieldLevelEncryptionMutationOptions<
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

export function get20200531FieldLevelEncryptionProfileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryptionProfile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['field-level-encryption-profile']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['field-level-encryption-profile']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200531FieldLevelEncryptionProfileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption-profile'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531FieldLevelEncryptionProfile<
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
                    (typeof client)['2020-05-31']['field-level-encryption-profile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-05-31']['field-level-encryption-profile']['$post']
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
  const mutationDefaults = getPost20200531FieldLevelEncryptionProfileMutationOptions<
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

export function get20200531FunctionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['function']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/function', keyArgs] as const
}

export function get20200531FunctionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['function']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FunctionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].function.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531Function<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['function']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531FunctionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['function']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get20200531FunctionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FunctionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].function.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531Function<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531FunctionMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531DistributionDistributionIdInvalidationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distribution/:DistributionId/invalidation', keyArgs] as const
}

export function get20200531DistributionDistributionIdInvalidationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionDistributionIdInvalidationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionDistributionIdInvalidation<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531DistributionDistributionIdInvalidationQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionDistributionIdInvalidationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531DistributionDistributionIdInvalidation<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531DistributionDistributionIdInvalidationMutationOptions<
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

export function get20200531KeyGroupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/key-group', keyArgs] as const
}

export function get20200531KeyGroupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531KeyGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['key-group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531KeyGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['key-group']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['key-group']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531KeyGroupQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531KeyGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['key-group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531KeyGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531KeyGroupMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-05-31',
    '/2020-05-31/distributions/:DistributionId/monitoring-subscription/',
    keyArgs,
  ] as const
}

export function get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributions[':DistributionId']['monitoring-subscription'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributions'][':DistributionId']['monitoring-subscription']['index']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20200531DistributionsDistributionIdMonitoringSubscriptionIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributions[':DistributionId'][
            'monitoring-subscription'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
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
    getPost20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
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

export function useDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndex<
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
    getDelete20200531DistributionsDistributionIdMonitoringSubscriptionIndexMutationOptions<
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

export function get20200531OriginAccessControlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-access-control', keyArgs] as const
}

export function get20200531OriginAccessControlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessControlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginAccessControl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531OriginAccessControlQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessControlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-control'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531OriginAccessControl<
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
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['origin-access-control']['$post']>,
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
  const mutationDefaults = getPost20200531OriginAccessControlMutationOptions<
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

export function get20200531OriginRequestPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-request-policy', keyArgs] as const
}

export function get20200531OriginRequestPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginRequestPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginRequestPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531OriginRequestPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginRequestPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-request-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531OriginRequestPolicy<
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
                Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['origin-request-policy']['$post']>,
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
  const mutationDefaults = getPost20200531OriginRequestPolicyMutationOptions<
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

export function get20200531PublicKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/public-key', keyArgs] as const
}

export function get20200531PublicKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531PublicKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['public-key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531PublicKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2020-05-31']['public-key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['public-key']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531PublicKeyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531PublicKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['public-key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531PublicKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531PublicKeyMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531RealtimeLogConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/realtime-log-config', keyArgs] as const
}

export function get20200531RealtimeLogConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531RealtimeLogConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['realtime-log-config'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531RealtimeLogConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531RealtimeLogConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531RealtimeLogConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['realtime-log-config'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531RealtimeLogConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531RealtimeLogConfigMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531ResponseHeadersPolicyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/response-headers-policy', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ResponseHeadersPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ResponseHeadersPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531ResponseHeadersPolicyQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ResponseHeadersPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['response-headers-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531ResponseHeadersPolicy<
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
                  ReturnType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['response-headers-policy']['$post']>,
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
  const mutationDefaults = getPost20200531ResponseHeadersPolicyMutationOptions<
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

export function get20200531StreamingDistributionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/streaming-distribution', keyArgs] as const
}

export function get20200531StreamingDistributionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531StreamingDistributionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531StreamingDistribution<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531StreamingDistributionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531StreamingDistributionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['streaming-distribution'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531StreamingDistribution<
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
                  ReturnType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['streaming-distribution']['$post']>,
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
  const mutationDefaults = getPost20200531StreamingDistributionMutationOptions<
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

export function usePost20200531StreamingDistributionWithTags<
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
                    (typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2020-05-31']['streaming-distribution#WithTags']['$post']
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
  const mutationDefaults = getPost20200531StreamingDistributionWithTagsMutationOptions<
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

export function get20200531CachePolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id', keyArgs] as const
}

export function get20200531CachePolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531CachePolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['cache-policy'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531CachePolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531CachePolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531CachePolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['cache-policy'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531CachePolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531CachePolicyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDelete20200531CachePolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['$delete']>,
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
  const mutationDefaults = getDelete20200531CachePolicyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531OriginAccessIdentityCloudfrontIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-access-identity/cloudfront/:Id', keyArgs] as const
}

export function get20200531OriginAccessIdentityCloudfrontIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginAccessIdentityCloudfrontId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531OriginAccessIdentityCloudfrontId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531OriginAccessIdentityCloudfrontIdMutationOptions<
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

export function get20200531ContinuousDeploymentPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ContinuousDeploymentPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ContinuousDeploymentPolicyId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531ContinuousDeploymentPolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ContinuousDeploymentPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531ContinuousDeploymentPolicyId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531ContinuousDeploymentPolicyIdMutationOptions<
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

export function useDelete20200531ContinuousDeploymentPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531ContinuousDeploymentPolicyIdMutationOptions<
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

export function get20200531DistributionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distribution/:Id', keyArgs] as const
}

export function get20200531DistributionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distribution[':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531DistributionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distribution[':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531DistributionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['$delete']>,
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
  const mutationDefaults = getDelete20200531DistributionIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531FieldLevelEncryptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id', keyArgs] as const
}

export function get20200531FieldLevelEncryptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['field-level-encryption'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531FieldLevelEncryptionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531FieldLevelEncryptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-05-31']['field-level-encryption'][':Id']['$delete']
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
  const mutationDefaults = getDelete20200531FieldLevelEncryptionIdMutationOptions<
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

export function get20200531FieldLevelEncryptionProfileIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionProfileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryptionProfileId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531FieldLevelEncryptionProfileIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionProfileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531FieldLevelEncryptionProfileId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531FieldLevelEncryptionProfileIdMutationOptions<
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

export function usePut20200531FunctionNameIfMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531FunctionNameIfMatchMutationOptions<
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

export function useDelete20200531FunctionNameIfMatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['function'][':Name#If-Match']['$delete']>,
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
  const mutationDefaults = getDelete20200531FunctionNameIfMatchMutationOptions<
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

export function get20200531KeyGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/key-group/:Id', keyArgs] as const
}

export function get20200531KeyGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531KeyGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['key-group'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531KeyGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531KeyGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531KeyGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['key-group'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531KeyGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531KeyGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDelete20200531KeyGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531KeyGroupIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get20200531OriginAccessControlIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id', keyArgs] as const
}

export function get20200531OriginAccessControlIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessControlIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginAccessControlId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['origin-access-control'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531OriginAccessControlIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessControlIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531OriginAccessControlId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-05-31']['origin-access-control'][':Id']['$delete']
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
  const mutationDefaults = getDelete20200531OriginAccessControlIdMutationOptions<
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

export function get20200531OriginRequestPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id', keyArgs] as const
}

export function get20200531OriginRequestPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginRequestPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginRequestPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531OriginRequestPolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginRequestPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531OriginRequestPolicyId<
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
                  ReturnType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['origin-request-policy'][':Id']['$put']>,
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
  const mutationDefaults = getPut20200531OriginRequestPolicyIdMutationOptions<
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

export function useDelete20200531OriginRequestPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-05-31']['origin-request-policy'][':Id']['$delete']
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
  const mutationDefaults = getDelete20200531OriginRequestPolicyIdMutationOptions<
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

export function get20200531PublicKeyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/public-key/:Id', keyArgs] as const
}

export function get20200531PublicKeyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531PublicKeyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['public-key'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531PublicKeyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531PublicKeyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531PublicKeyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['public-key'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531PublicKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531PublicKeyIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost20200531DeleteRealtimeLogConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531DeleteRealtimeLogConfigIndexMutationOptions<
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

export function get20200531ResponseHeadersPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ResponseHeadersPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ResponseHeadersPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get20200531ResponseHeadersPolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ResponseHeadersPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531ResponseHeadersPolicyId<
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
                    (typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['response-headers-policy'][':Id']['$put']>,
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
  const mutationDefaults = getPut20200531ResponseHeadersPolicyIdMutationOptions<
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

export function useDelete20200531ResponseHeadersPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete20200531ResponseHeadersPolicyIdMutationOptions<
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

export function get20200531StreamingDistributionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id', keyArgs] as const
}

export function get20200531StreamingDistributionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531StreamingDistributionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531StreamingDistributionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['streaming-distribution'][':Id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531StreamingDistributionIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531StreamingDistributionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete20200531StreamingDistributionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-05-31']['streaming-distribution'][':Id']['$delete']
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
  const mutationDefaults = getDelete20200531StreamingDistributionIdMutationOptions<
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

export function get20200531FunctionNameDescribeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/function/:Name/describe', keyArgs] as const
}

export function get20200531FunctionNameDescribeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FunctionNameDescribeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].function[':Name'].describe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FunctionNameDescribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['function'][':Name']['describe']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531FunctionNameDescribeQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FunctionNameDescribeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].function[':Name'].describe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531CachePolicyIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/cache-policy/:Id/config', keyArgs] as const
}

export function get20200531CachePolicyIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531CachePolicyIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['cache-policy'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531CachePolicyIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['cache-policy'][':Id']['config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531CachePolicyIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531CachePolicyIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['cache-policy'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-05-31',
    '/2020-05-31/origin-access-identity/cloudfront/:Id/config',
    keyArgs,
  ] as const
}

export function get20200531OriginAccessIdentityCloudfrontIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200531OriginAccessIdentityCloudfrontIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-identity']['cloudfront'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessIdentityCloudfrontIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-identity'].cloudfront[':Id'].config.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531OriginAccessIdentityCloudfrontIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531OriginAccessIdentityCloudfrontIdConfigMutationOptions<
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

export function get20200531ContinuousDeploymentPolicyIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/continuous-deployment-policy/:Id/config', keyArgs] as const
}

export function get20200531ContinuousDeploymentPolicyIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ContinuousDeploymentPolicyIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ContinuousDeploymentPolicyIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['continuous-deployment-policy'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531ContinuousDeploymentPolicyIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ContinuousDeploymentPolicyIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['continuous-deployment-policy'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distribution/:Id/config', keyArgs] as const
}

export function get20200531DistributionIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distribution[':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531DistributionIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distribution[':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531DistributionIdConfig<
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
                  ReturnType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['distribution'][':Id']['config']['$put']>,
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
  const mutationDefaults = getPut20200531DistributionIdConfigMutationOptions<
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

export function get20200531FieldLevelEncryptionIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption/:Id/config', keyArgs] as const
}

export function get20200531FieldLevelEncryptionIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryptionIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531FieldLevelEncryptionIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531FieldLevelEncryptionIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531FieldLevelEncryptionIdConfigMutationOptions<
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

export function get20200531FieldLevelEncryptionProfileIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/field-level-encryption-profile/:Id/config', keyArgs] as const
}

export function get20200531FieldLevelEncryptionProfileIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FieldLevelEncryptionProfileIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FieldLevelEncryptionProfileIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['field-level-encryption-profile'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531FieldLevelEncryptionProfileIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FieldLevelEncryptionProfileIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['field-level-encryption-profile'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531FieldLevelEncryptionProfileIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531FieldLevelEncryptionProfileIdConfigMutationOptions<
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

export function get20200531FunctionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/function/:Name', keyArgs] as const
}

export function get20200531FunctionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531FunctionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].function[':Name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531FunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['function'][':Name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['function'][':Name']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531FunctionNameQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531FunctionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].function[':Name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionDistributionIdInvalidationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-05-31',
    '/2020-05-31/distribution/:DistributionId/invalidation/:Id',
    keyArgs,
  ] as const
}

export function get20200531DistributionDistributionIdInvalidationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionDistributionIdInvalidationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200531DistributionDistributionIdInvalidationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distribution'][':DistributionId']['invalidation'][':Id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531DistributionDistributionIdInvalidationIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionDistributionIdInvalidationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distribution[':DistributionId'].invalidation[':Id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get20200531KeyGroupIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/key-group/:Id/config', keyArgs] as const
}

export function get20200531KeyGroupIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531KeyGroupIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['key-group'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531KeyGroupIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['key-group'][':Id']['config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531KeyGroupIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531KeyGroupIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['key-group'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531OriginAccessControlIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-access-control/:Id/config', keyArgs] as const
}

export function get20200531OriginAccessControlIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginAccessControlIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-access-control'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginAccessControlIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-access-control'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531OriginAccessControlIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginAccessControlIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-access-control'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531OriginAccessControlIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531OriginAccessControlIdConfigMutationOptions<
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

export function get20200531OriginRequestPolicyIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/origin-request-policy/:Id/config', keyArgs] as const
}

export function get20200531OriginRequestPolicyIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531OriginRequestPolicyIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['origin-request-policy'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531OriginRequestPolicyIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['origin-request-policy'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531OriginRequestPolicyIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531OriginRequestPolicyIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['origin-request-policy'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531PublicKeyIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/public-key/:Id/config', keyArgs] as const
}

export function get20200531PublicKeyIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531PublicKeyIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['public-key'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531PublicKeyIdConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2020-05-31']['public-key'][':Id']['config']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get20200531PublicKeyIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531PublicKeyIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['public-key'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531PublicKeyIdConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531PublicKeyIdConfigMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost20200531GetRealtimeLogConfigIndex<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531GetRealtimeLogConfigIndexMutationOptions<
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

export function get20200531ResponseHeadersPolicyIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/response-headers-policy/:Id/config', keyArgs] as const
}

export function get20200531ResponseHeadersPolicyIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ResponseHeadersPolicyIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['response-headers-policy'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ResponseHeadersPolicyIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['response-headers-policy'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531ResponseHeadersPolicyIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ResponseHeadersPolicyIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['response-headers-policy'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531StreamingDistributionIdConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/streaming-distribution/:Id/config', keyArgs] as const
}

export function get20200531StreamingDistributionIdConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531StreamingDistributionIdConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['streaming-distribution'][':Id'].config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531StreamingDistributionIdConfig<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['streaming-distribution'][':Id']['config']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531StreamingDistributionIdConfigQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531StreamingDistributionIdConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['streaming-distribution'][':Id'].config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut20200531StreamingDistributionIdConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531StreamingDistributionIdConfigMutationOptions<
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

export function get20200531ConflictingAliasDistributionIdAliasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/conflicting-alias#DistributionId&Alias', keyArgs] as const
}

export function get20200531ConflictingAliasDistributionIdAliasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531ConflictingAliasDistributionIdAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531ConflictingAliasDistributionIdAlias<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['conflicting-alias#DistributionId&Alias']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531ConflictingAliasDistributionIdAliasQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531ConflictingAliasDistributionIdAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['conflicting-alias#DistributionId&Alias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distributionsByCachePolicyId/:CachePolicyId', keyArgs] as const
}

export function get20200531DistributionsByCachePolicyIdCachePolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionsByCachePolicyIdCachePolicyId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByCachePolicyId'][':CachePolicyId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionsByCachePolicyIdCachePolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributionsByCachePolicyId[':CachePolicyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distributionsByKeyGroupId/:KeyGroupId', keyArgs] as const
}

export function get20200531DistributionsByKeyGroupIdKeyGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionsByKeyGroupIdKeyGroupId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByKeyGroupId'][':KeyGroupId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionsByKeyGroupIdKeyGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributionsByKeyGroupId[':KeyGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-05-31',
    '/2020-05-31/distributionsByOriginRequestPolicyId/:OriginRequestPolicyId',
    keyArgs,
  ] as const
}

export function get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByOriginRequestPolicyId'][':OriginRequestPolicyId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20200531DistributionsByOriginRequestPolicyIdOriginRequestPolicyIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributionsByOriginRequestPolicyId[':OriginRequestPolicyId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531DistributionsByRealtimeLogConfigIndex<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531DistributionsByRealtimeLogConfigIndexMutationOptions<
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

export function get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '2020-05-31',
    '/2020-05-31/distributionsByResponseHeadersPolicyId/:ResponseHeadersPolicyId',
    keyArgs,
  ] as const
}

export function get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributionsByResponseHeadersPolicyId[
          ':ResponseHeadersPolicyId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2020-05-31']['distributionsByResponseHeadersPolicyId'][':ResponseHeadersPolicyId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<
            typeof get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey
          >
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get20200531DistributionsByResponseHeadersPolicyIdResponseHeadersPolicyIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributionsByResponseHeadersPolicyId[
            ':ResponseHeadersPolicyId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531DistributionsByWebACLIdWebACLIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/distributionsByWebACLId/:WebACLId', keyArgs] as const
}

export function get20200531DistributionsByWebACLIdWebACLIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531DistributionsByWebACLIdWebACLIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531DistributionsByWebACLIdWebACLId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['distributionsByWebACLId'][':WebACLId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get20200531DistributionsByWebACLIdWebACLIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531DistributionsByWebACLIdWebACLIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31'].distributionsByWebACLId[':WebACLId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get20200531TaggingResourceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['2020-05-31', '/2020-05-31/tagging#Resource', keyArgs] as const
}

export function get20200531TaggingResourceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get20200531TaggingResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2020-05-31']['tagging#Resource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use20200531TaggingResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2020-05-31']['tagging#Resource']['$get']>>
              >
            >
          >,
          ReturnType<typeof get20200531TaggingResourceQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get20200531TaggingResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2020-05-31']['tagging#Resource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost20200531FunctionNamePublishIfMatch<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531FunctionNamePublishIfMatchMutationOptions<
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

export function usePost20200531TaggingOperationTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2020-05-31']['tagging#Operation=Tag&Resource']['$post']
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
  const mutationDefaults = getPost20200531TaggingOperationTagResourceMutationOptions<
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

export function usePost20200531FunctionNameTestIfMatch<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531FunctionNameTestIfMatchMutationOptions<
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

export function usePost20200531TaggingOperationUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost20200531TaggingOperationUntagResourceMutationOptions<
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

export function usePut20200531DistributionIdPromoteStagingConfig<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut20200531DistributionIdPromoteStagingConfigMutationOptions<
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

export function usePut20200531RealtimeLogConfigIndex<
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
                  ReturnType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2020-05-31']['realtime-log-config']['index']['$put']>,
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
  const mutationDefaults = getPut20200531RealtimeLogConfigIndexMutationOptions<
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

import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getPostV1betaInstanceLookupEffectiveGuestPolicyMutationKey() {
  return ['v1beta', '/v1beta/:instance:lookupEffectiveGuestPolicy', 'POST'] as const
}

export function getPostV1betaInstanceLookupEffectiveGuestPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaInstanceLookupEffectiveGuestPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta[':instance:lookupEffectiveGuestPolicy'].$post(args, options),
      )
    },
  })
}

export function usePostV1betaInstanceLookupEffectiveGuestPolicy<
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
                ReturnType<(typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':instance:lookupEffectiveGuestPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaInstanceLookupEffectiveGuestPolicyMutationOptions<
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

export function getV1betaNameQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function getV1betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >({
    queryKey: getV1betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1betaNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function getDeleteV1betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>) {
      return parseResponse(client.v1beta[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1betaNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'PATCH'] as const
}

export function getPatchV1betaNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$patch']>) {
      return parseResponse(client.v1beta[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1betaNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1betaNameCancelMutationKey() {
  return ['v1beta', '/v1beta/:name:cancel', 'POST'] as const
}

export function getPostV1betaNameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>) {
      return parseResponse(client.v1beta[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1betaNameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaNameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1betaNamePauseMutationKey() {
  return ['v1beta', '/v1beta/:name:pause', 'POST'] as const
}

export function getPostV1betaNamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:pause']['$post']>) {
      return parseResponse(client.v1beta[':name:pause'].$post(args, options))
    },
  })
}

export function usePostV1betaNamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:pause']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaNamePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1betaNameResumeMutationKey() {
  return ['v1beta', '/v1beta/:name:resume', 'POST'] as const
}

export function getPostV1betaNameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:resume']['$post']>) {
      return parseResponse(client.v1beta[':name:resume'].$post(args, options))
    },
  })
}

export function usePostV1betaNameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaNameResumeMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentGuestPoliciesQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/guestPolicies', args] as const
}

export function getV1betaParentGuestPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentGuestPoliciesQueryKey>
  >({
    queryKey: getV1betaParentGuestPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].guestPolicies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1betaParentGuestPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentGuestPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1betaParentGuestPoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1betaParentGuestPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentGuestPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1betaParentGuestPoliciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1betaParentGuestPoliciesMutationKey() {
  return ['v1beta', '/v1beta/:parent/guestPolicies', 'POST'] as const
}

export function getPostV1betaParentGuestPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentGuestPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].guestPolicies.$post(args, options))
    },
  })
}

export function usePostV1betaParentGuestPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['guestPolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaParentGuestPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getV1betaParentInstanceDetailsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/instanceDetails', args] as const
}

export function getV1betaParentInstanceDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentInstanceDetailsQueryKey>
  >({
    queryKey: getV1betaParentInstanceDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].instanceDetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1betaParentInstanceDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentInstanceDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1betaParentInstanceDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1betaParentInstanceDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['instanceDetails']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentInstanceDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1betaParentInstanceDetailsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1betaParentPatchDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/patchDeployments', args] as const
}

export function getV1betaParentPatchDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentPatchDeploymentsQueryKey>
  >({
    queryKey: getV1betaParentPatchDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].patchDeployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1betaParentPatchDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentPatchDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1betaParentPatchDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1betaParentPatchDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentPatchDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1betaParentPatchDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1betaParentPatchDeploymentsMutationKey() {
  return ['v1beta', '/v1beta/:parent/patchDeployments', 'POST'] as const
}

export function getPostV1betaParentPatchDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentPatchDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].patchDeployments.$post(args, options))
    },
  })
}

export function usePostV1betaParentPatchDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['patchDeployments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaParentPatchDeploymentsMutationOptions<
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

export function getV1betaParentPatchJobsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/patchJobs', args] as const
}

export function getV1betaParentPatchJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentPatchJobsQueryKey>
  >({
    queryKey: getV1betaParentPatchJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].patchJobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1betaParentPatchJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentPatchJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1betaParentPatchJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1betaParentPatchJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentPatchJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1betaParentPatchJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1betaParentPatchJobsExecuteMutationKey() {
  return ['v1beta', '/v1beta/:parent/patchJobs:execute', 'POST'] as const
}

export function getPostV1betaParentPatchJobsExecuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentPatchJobsExecuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent']['patchJobs:execute'].$post(args, options))
    },
  })
}

export function usePostV1betaParentPatchJobsExecute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['patchJobs:execute']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1betaParentPatchJobsExecuteMutationOptions<
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

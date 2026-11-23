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

export function getActionsKey() {
  return ['actions'] as const
}

export function getCertificatesKey() {
  return ['certificates'] as const
}

export function getDatacentersKey() {
  return ['datacenters'] as const
}

export function getFirewallsKey() {
  return ['firewalls'] as const
}

export function getFloatingIpsKey() {
  return ['floating_ips'] as const
}

export function getImagesKey() {
  return ['images'] as const
}

export function getIsosKey() {
  return ['isos'] as const
}

export function getLoadBalancerTypesKey() {
  return ['load_balancer_types'] as const
}

export function getLoadBalancersKey() {
  return ['load_balancers'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getNetworksKey() {
  return ['networks'] as const
}

export function getPlacementGroupsKey() {
  return ['placement_groups'] as const
}

export function getPricingKey() {
  return ['pricing'] as const
}

export function getPrimaryIpsKey() {
  return ['primary_ips'] as const
}

export function getServerTypesKey() {
  return ['server_types'] as const
}

export function getServersKey() {
  return ['servers'] as const
}

export function getSshKeysKey() {
  return ['ssh_keys'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getActionsQueryKey(args: InferRequestType<typeof client.actions.$get>) {
  return ['actions', '/actions', args] as const
}

export function getActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActionsQueryKey>
  >({
    queryKey: getActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.actions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getActionsIdQueryKey(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
) {
  return ['actions', '/actions/:id', args] as const
}

export function getActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.actions)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >({
    queryKey: getActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.actions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.actions)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getActionsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCertificatesQueryKey(args: InferRequestType<typeof client.certificates.$get>) {
  return ['certificates', '/certificates', args] as const
}

export function getCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >({
    queryKey: getCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCertificatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCertificatesMutationKey() {
  return ['certificates', '/certificates', 'POST'] as const
}

export function getPostCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.certificates.$post>) {
      return parseResponse(client.certificates.$post(args, options))
    },
  })
}

export function usePostCertificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.certificates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificatesMutationOptions<TError, TOnMutateResult>(
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

export function getCertificatesIdQueryKey(
  args: InferRequestType<(typeof client.certificates)[':id']['$get']>,
) {
  return ['certificates', '/certificates/:id', args] as const
}

export function getCertificatesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdQueryKey>
  >({
    queryKey: getCertificatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCertificatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCertificatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCertificatesIdMutationKey() {
  return ['certificates', '/certificates/:id', 'PUT'] as const
}

export function getPutCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.certificates)[':id']['$put']>) {
      return parseResponse(client.certificates[':id'].$put(args, options))
    },
  })
}

export function usePutCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.certificates)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteCertificatesIdMutationKey() {
  return ['certificates', '/certificates/:id', 'DELETE'] as const
}

export function getDeleteCertificatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.certificates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCertificatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.certificates)[':id']['$delete']>) {
      return parseResponse(client.certificates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCertificatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.certificates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCertificatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getCertificatesIdActionsQueryKey(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>,
) {
  return ['certificates', '/certificates/:id/actions', args] as const
}

export function getCertificatesIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdActionsQueryKey>
  >({
    queryKey: getCertificatesIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCertificatesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdActionsQueryKey>
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
      ...getCertificatesIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCertificatesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdActionsQueryKey>
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
      ...getCertificatesIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCertificatesIdActionsRetryMutationKey() {
  return ['certificates', '/certificates/:id/actions/retry', 'POST'] as const
}

export function getPostCertificatesIdActionsRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['retry']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.certificates)[':id']['actions']['retry']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCertificatesIdActionsRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.certificates)[':id']['actions']['retry']['$post']>,
    ) {
      return parseResponse(client.certificates[':id'].actions.retry.$post(args, options))
    },
  })
}

export function usePostCertificatesIdActionsRetry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['retry']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.certificates)[':id']['actions']['retry']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCertificatesIdActionsRetryMutationOptions<
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

export function getCertificatesIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>,
) {
  return ['certificates', '/certificates/:id/actions/:action_id', args] as const
}

export function getCertificatesIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdActionsActionIdQueryKey>
  >({
    queryKey: getCertificatesIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.certificates[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCertificatesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdActionsActionIdQueryKey>
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
      ...getCertificatesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCertificatesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCertificatesIdActionsActionIdQueryKey>
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
      ...getCertificatesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDatacentersQueryKey(args: InferRequestType<typeof client.datacenters.$get>) {
  return ['datacenters', '/datacenters', args] as const
}

export function getDatacentersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datacenters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatacentersQueryKey>
  >({
    queryKey: getDatacentersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datacenters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatacenters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datacenters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatacentersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatacentersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatacenters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datacenters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatacentersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatacentersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDatacentersIdQueryKey(
  args: InferRequestType<(typeof client.datacenters)[':id']['$get']>,
) {
  return ['datacenters', '/datacenters/:id', args] as const
}

export function getDatacentersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datacenters)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatacentersIdQueryKey>
  >({
    queryKey: getDatacentersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datacenters[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatacentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datacenters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatacentersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatacentersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatacentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datacenters)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatacentersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatacentersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFirewallsQueryKey(args: InferRequestType<typeof client.firewalls.$get>) {
  return ['firewalls', '/firewalls', args] as const
}

export function getFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.firewalls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFirewallsQueryKey>
  >({
    queryKey: getFirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firewalls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.firewalls.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFirewallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.firewalls.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFirewallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFirewallsMutationKey() {
  return ['firewalls', '/firewalls', 'POST'] as const
}

export function getPostFirewallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$post>>>>>,
    TError,
    InferRequestType<typeof client.firewalls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFirewallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.firewalls.$post>) {
      return parseResponse(client.firewalls.$post(args, options))
    },
  })
}

export function usePostFirewalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.firewalls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFirewallsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFirewallsIdQueryKey(
  args: InferRequestType<(typeof client.firewalls)[':id']['$get']>,
) {
  return ['firewalls', '/firewalls/:id', args] as const
}

export function getFirewallsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdQueryKey>
  >({
    queryKey: getFirewallsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firewalls[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFirewallsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFirewallsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFirewallsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFirewallsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFirewallsIdMutationKey() {
  return ['firewalls', '/firewalls/:id', 'PUT'] as const
}

export function getPutFirewallsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.firewalls)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFirewallsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.firewalls)[':id']['$put']>) {
      return parseResponse(client.firewalls[':id'].$put(args, options))
    },
  })
}

export function usePutFirewallsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.firewalls)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFirewallsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteFirewallsIdMutationKey() {
  return ['firewalls', '/firewalls/:id', 'DELETE'] as const
}

export function getDeleteFirewallsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.firewalls)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFirewallsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.firewalls)[':id']['$delete']>) {
      return parseResponse(client.firewalls[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFirewallsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.firewalls)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFirewallsIdMutationOptions<TError, TOnMutateResult>(
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

export function getFirewallsIdActionsQueryKey(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>,
) {
  return ['firewalls', '/firewalls/:id/actions', args] as const
}

export function getFirewallsIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdActionsQueryKey>
  >({
    queryKey: getFirewallsIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firewalls[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFirewallsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFirewallsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFirewallsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFirewallsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFirewallsIdActionsApplyToResourcesMutationKey() {
  return ['firewalls', '/firewalls/:id/actions/apply_to_resources', 'POST'] as const
}

export function getPostFirewallsIdActionsApplyToResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFirewallsIdActionsApplyToResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']
      >,
    ) {
      return parseResponse(client.firewalls[':id'].actions.apply_to_resources.$post(args, options))
    },
  })
}

export function usePostFirewallsIdActionsApplyToResources<
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
                  (typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.firewalls)[':id']['actions']['apply_to_resources']['$post']
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
  const mutationDefaults = getPostFirewallsIdActionsApplyToResourcesMutationOptions<
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

export function getPostFirewallsIdActionsRemoveFromResourcesMutationKey() {
  return ['firewalls', '/firewalls/:id/actions/remove_from_resources', 'POST'] as const
}

export function getPostFirewallsIdActionsRemoveFromResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFirewallsIdActionsRemoveFromResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']
      >,
    ) {
      return parseResponse(
        client.firewalls[':id'].actions.remove_from_resources.$post(args, options),
      )
    },
  })
}

export function usePostFirewallsIdActionsRemoveFromResources<
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
                  (typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.firewalls)[':id']['actions']['remove_from_resources']['$post']
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
  const mutationDefaults = getPostFirewallsIdActionsRemoveFromResourcesMutationOptions<
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

export function getPostFirewallsIdActionsSetRulesMutationKey() {
  return ['firewalls', '/firewalls/:id/actions/set_rules', 'POST'] as const
}

export function getPostFirewallsIdActionsSetRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFirewallsIdActionsSetRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>,
    ) {
      return parseResponse(client.firewalls[':id'].actions.set_rules.$post(args, options))
    },
  })
}

export function usePostFirewallsIdActionsSetRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFirewallsIdActionsSetRulesMutationOptions<
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

export function getFirewallsIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>,
) {
  return ['firewalls', '/firewalls/:id/actions/:action_id', args] as const
}

export function getFirewallsIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdActionsActionIdQueryKey>
  >({
    queryKey: getFirewallsIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.firewalls[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFirewallsIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdActionsActionIdQueryKey>
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
      ...getFirewallsIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFirewallsIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFirewallsIdActionsActionIdQueryKey>
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
      ...getFirewallsIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFloatingIpsQueryKey(args: InferRequestType<typeof client.floating_ips.$get>) {
  return ['floating_ips', '/floating_ips', args] as const
}

export function getFloatingIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.floating_ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsQueryKey>
  >({
    queryKey: getFloatingIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.floating_ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFloatingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.floating_ips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFloatingIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFloatingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.floating_ips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFloatingIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFloatingIpsMutationKey() {
  return ['floating_ips', '/floating_ips', 'POST'] as const
}

export function getPostFloatingIpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.floating_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFloatingIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.floating_ips.$post>) {
      return parseResponse(client.floating_ips.$post(args, options))
    },
  })
}

export function usePostFloatingIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.floating_ips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFloatingIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFloatingIpsIdQueryKey(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$get']>,
) {
  return ['floating_ips', '/floating_ips/:id', args] as const
}

export function getFloatingIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdQueryKey>
  >({
    queryKey: getFloatingIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.floating_ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFloatingIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFloatingIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFloatingIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFloatingIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutFloatingIpsIdMutationKey() {
  return ['floating_ips', '/floating_ips/:id', 'PUT'] as const
}

export function getPutFloatingIpsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFloatingIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.floating_ips)[':id']['$put']>) {
      return parseResponse(client.floating_ips[':id'].$put(args, options))
    },
  })
}

export function usePutFloatingIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.floating_ips)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFloatingIpsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteFloatingIpsIdMutationKey() {
  return ['floating_ips', '/floating_ips/:id', 'DELETE'] as const
}

export function getDeleteFloatingIpsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFloatingIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.floating_ips)[':id']['$delete']>) {
      return parseResponse(client.floating_ips[':id'].$delete(args, options))
    },
  })
}

export function useDeleteFloatingIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.floating_ips)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.floating_ips)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFloatingIpsIdMutationOptions<TError, TOnMutateResult>(
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

export function getFloatingIpsIdActionsQueryKey(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>,
) {
  return ['floating_ips', '/floating_ips/:id/actions', args] as const
}

export function getFloatingIpsIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdActionsQueryKey>
  >({
    queryKey: getFloatingIpsIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.floating_ips[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFloatingIpsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFloatingIpsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFloatingIpsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFloatingIpsIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFloatingIpsIdActionsAssignMutationKey() {
  return ['floating_ips', '/floating_ips/:id/actions/assign', 'POST'] as const
}

export function getPostFloatingIpsIdActionsAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFloatingIpsIdActionsAssignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>,
    ) {
      return parseResponse(client.floating_ips[':id'].actions.assign.$post(args, options))
    },
  })
}

export function usePostFloatingIpsIdActionsAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFloatingIpsIdActionsAssignMutationOptions<
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

export function getPostFloatingIpsIdActionsChangeDnsPtrMutationKey() {
  return ['floating_ips', '/floating_ips/:id/actions/change_dns_ptr', 'POST'] as const
}

export function getPostFloatingIpsIdActionsChangeDnsPtrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFloatingIpsIdActionsChangeDnsPtrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']
      >,
    ) {
      return parseResponse(client.floating_ips[':id'].actions.change_dns_ptr.$post(args, options))
    },
  })
}

export function usePostFloatingIpsIdActionsChangeDnsPtr<
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
                  (typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFloatingIpsIdActionsChangeDnsPtrMutationOptions<
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

export function getPostFloatingIpsIdActionsChangeProtectionMutationKey() {
  return ['floating_ips', '/floating_ips/:id/actions/change_protection', 'POST'] as const
}

export function getPostFloatingIpsIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.floating_ips)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFloatingIpsIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.floating_ips)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(
        client.floating_ips[':id'].actions.change_protection.$post(args, options),
      )
    },
  })
}

export function usePostFloatingIpsIdActionsChangeProtection<
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
                  (typeof client.floating_ips)[':id']['actions']['change_protection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.floating_ips)[':id']['actions']['change_protection']['$post']
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
  const mutationDefaults = getPostFloatingIpsIdActionsChangeProtectionMutationOptions<
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

export function getPostFloatingIpsIdActionsUnassignMutationKey() {
  return ['floating_ips', '/floating_ips/:id/actions/unassign', 'POST'] as const
}

export function getPostFloatingIpsIdActionsUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFloatingIpsIdActionsUnassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>,
    ) {
      return parseResponse(client.floating_ips[':id'].actions.unassign.$post(args, options))
    },
  })
}

export function usePostFloatingIpsIdActionsUnassign<
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
                ReturnType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.floating_ips)[':id']['actions']['unassign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFloatingIpsIdActionsUnassignMutationOptions<
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

export function getFloatingIpsIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>,
) {
  return ['floating_ips', '/floating_ips/:id/actions/:action_id', args] as const
}

export function getFloatingIpsIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdActionsActionIdQueryKey>
  >({
    queryKey: getFloatingIpsIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.floating_ips[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFloatingIpsIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdActionsActionIdQueryKey>
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
      ...getFloatingIpsIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFloatingIpsIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFloatingIpsIdActionsActionIdQueryKey>
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
      ...getFloatingIpsIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getImagesQueryKey(args: InferRequestType<typeof client.images.$get>) {
  return ['images', '/images', args] as const
}

export function getImagesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >({
    queryKey: getImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.images.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getImagesIdQueryKey(args: InferRequestType<(typeof client.images)[':id']['$get']>) {
  return ['images', '/images/:id', args] as const
}

export function getImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.images)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >({
    queryKey: getImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutImagesIdMutationKey() {
  return ['images', '/images/:id', 'PUT'] as const
}

export function getPutImagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.images)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':id']['$put']>) {
      return parseResponse(client.images[':id'].$put(args, options))
    },
  })
}

export function usePutImagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.images)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutImagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteImagesIdMutationKey() {
  return ['images', '/images/:id', 'DELETE'] as const
}

export function getDeleteImagesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.images)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':id']['$delete']>) {
      return parseResponse(client.images[':id'].$delete(args, options))
    },
  })
}

export function useDeleteImagesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.images)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteImagesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesIdActionsQueryKey(
  args: InferRequestType<(typeof client.images)[':id']['actions']['$get']>,
) {
  return ['images', '/images/:id/actions', args] as const
}

export function getImagesIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdActionsQueryKey>
  >({
    queryKey: getImagesIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':id'].actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useImagesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImagesIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImagesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImagesIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostImagesIdActionsChangeProtectionMutationKey() {
  return ['images', '/images/:id/actions/change_protection', 'POST'] as const
}

export function getPostImagesIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.images)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostImagesIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.images)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(client.images[':id'].actions.change_protection.$post(args, options))
    },
  })
}

export function usePostImagesIdActionsChangeProtection<
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
                ReturnType<(typeof client.images)[':id']['actions']['change_protection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.images)[':id']['actions']['change_protection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImagesIdActionsChangeProtectionMutationOptions<
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

export function getImagesIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>,
) {
  return ['images', '/images/:id/actions/:action_id', args] as const
}

export function getImagesIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdActionsActionIdQueryKey>
  >({
    queryKey: getImagesIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.images[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImagesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdActionsActionIdQueryKey>
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
      ...getImagesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseImagesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImagesIdActionsActionIdQueryKey>
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
      ...getImagesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getIsosQueryKey(args: InferRequestType<typeof client.isos.$get>) {
  return ['isos', '/isos', args] as const
}

export function getIsosQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.isos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIsosQueryKey>
  >({
    queryKey: getIsosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.isos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIsos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.isos.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIsosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIsosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIsos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.isos.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIsosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIsosQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIsosIdQueryKey(args: InferRequestType<(typeof client.isos)[':id']['$get']>) {
  return ['isos', '/isos/:id', args] as const
}

export function getIsosIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.isos)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIsosIdQueryKey>
  >({
    queryKey: getIsosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.isos[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIsosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.isos)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIsosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIsosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIsosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.isos)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIsosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIsosIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoadBalancerTypesQueryKey(
  args: InferRequestType<typeof client.load_balancer_types.$get>,
) {
  return ['load_balancer_types', '/load_balancer_types', args] as const
}

export function getLoadBalancerTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.load_balancer_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerTypesQueryKey>
  >({
    queryKey: getLoadBalancerTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancer_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLoadBalancerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.load_balancer_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoadBalancerTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoadBalancerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.load_balancer_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoadBalancerTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoadBalancerTypesIdQueryKey(
  args: InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>,
) {
  return ['load_balancer_types', '/load_balancer_types/:id', args] as const
}

export function getLoadBalancerTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerTypesIdQueryKey>
  >({
    queryKey: getLoadBalancerTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancer_types[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLoadBalancerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancerTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoadBalancerTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoadBalancerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancerTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoadBalancerTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLoadBalancersQueryKey(
  args: InferRequestType<typeof client.load_balancers.$get>,
) {
  return ['load_balancers', '/load_balancers', args] as const
}

export function getLoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.load_balancers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersQueryKey>
  >({
    queryKey: getLoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLoadBalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.load_balancers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoadBalancersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoadBalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.load_balancers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoadBalancersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLoadBalancersMutationKey() {
  return ['load_balancers', '/load_balancers', 'POST'] as const
}

export function getPostLoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.load_balancers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.load_balancers.$post>) {
      return parseResponse(client.load_balancers.$post(args, options))
    },
  })
}

export function usePostLoadBalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.load_balancers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoadBalancersMutationOptions<TError, TOnMutateResult>(
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

export function getLoadBalancersIdQueryKey(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$get']>,
) {
  return ['load_balancers', '/load_balancers/:id', args] as const
}

export function getLoadBalancersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdQueryKey>
  >({
    queryKey: getLoadBalancersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLoadBalancersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLoadBalancersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLoadBalancersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLoadBalancersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLoadBalancersIdMutationKey() {
  return ['load_balancers', '/load_balancers/:id', 'PUT'] as const
}

export function getPutLoadBalancersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLoadBalancersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.load_balancers)[':id']['$put']>) {
      return parseResponse(client.load_balancers[':id'].$put(args, options))
    },
  })
}

export function usePutLoadBalancersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.load_balancers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLoadBalancersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLoadBalancersIdMutationKey() {
  return ['load_balancers', '/load_balancers/:id', 'DELETE'] as const
}

export function getDeleteLoadBalancersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.load_balancers)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLoadBalancersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.load_balancers)[':id']['$delete']>) {
      return parseResponse(client.load_balancers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteLoadBalancersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.load_balancers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLoadBalancersIdMutationOptions<TError, TOnMutateResult>(
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

export function getLoadBalancersIdActionsQueryKey(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>,
) {
  return ['load_balancers', '/load_balancers/:id/actions', args] as const
}

export function getLoadBalancersIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdActionsQueryKey>
  >({
    queryKey: getLoadBalancersIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancers[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLoadBalancersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdActionsQueryKey>
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
      ...getLoadBalancersIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLoadBalancersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdActionsQueryKey>
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
      ...getLoadBalancersIdActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostLoadBalancersIdActionsAddServiceMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/add_service', 'POST'] as const
}

export function getPostLoadBalancersIdActionsAddServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['add_service']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsAddServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['add_service']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.add_service.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsAddService<
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
                ReturnType<(typeof client.load_balancers)[':id']['actions']['add_service']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_service']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoadBalancersIdActionsAddServiceMutationOptions<
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

export function getPostLoadBalancersIdActionsAddTargetMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/add_target', 'POST'] as const
}

export function getPostLoadBalancersIdActionsAddTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsAddTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['add_target']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.add_target.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsAddTarget<
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
                ReturnType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoadBalancersIdActionsAddTargetMutationOptions<
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

export function getPostLoadBalancersIdActionsAttachToNetworkMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/attach_to_network', 'POST'] as const
}

export function getPostLoadBalancersIdActionsAttachToNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsAttachToNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.attach_to_network.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsAttachToNetwork<
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
                  (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['attach_to_network']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsAttachToNetworkMutationOptions<
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

export function getPostLoadBalancersIdActionsChangeAlgorithmMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/change_algorithm', 'POST'] as const
}

export function getPostLoadBalancersIdActionsChangeAlgorithmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsChangeAlgorithmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.change_algorithm.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsChangeAlgorithm<
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
                  (typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['change_algorithm']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsChangeAlgorithmMutationOptions<
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

export function getPostLoadBalancersIdActionsChangeDnsPtrMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/change_dns_ptr', 'POST'] as const
}

export function getPostLoadBalancersIdActionsChangeDnsPtrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsChangeDnsPtrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.change_dns_ptr.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsChangeDnsPtr<
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
                  (typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['change_dns_ptr']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsChangeDnsPtrMutationOptions<
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

export function getPostLoadBalancersIdActionsChangeProtectionMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/change_protection', 'POST'] as const
}

export function getPostLoadBalancersIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.change_protection.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsChangeProtection<
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
                  (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['change_protection']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsChangeProtectionMutationOptions<
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

export function getPostLoadBalancersIdActionsChangeTypeMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/change_type', 'POST'] as const
}

export function getPostLoadBalancersIdActionsChangeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['change_type']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['change_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsChangeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['change_type']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.change_type.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsChangeType<
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
                ReturnType<(typeof client.load_balancers)[':id']['actions']['change_type']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.load_balancers)[':id']['actions']['change_type']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLoadBalancersIdActionsChangeTypeMutationOptions<
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

export function getPostLoadBalancersIdActionsDeleteServiceMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/delete_service', 'POST'] as const
}

export function getPostLoadBalancersIdActionsDeleteServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['delete_service']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['delete_service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsDeleteServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['delete_service']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.delete_service.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsDeleteService<
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
                  (typeof client.load_balancers)[':id']['actions']['delete_service']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['delete_service']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsDeleteServiceMutationOptions<
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

export function getPostLoadBalancersIdActionsDetachFromNetworkMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/detach_from_network', 'POST'] as const
}

export function getPostLoadBalancersIdActionsDetachFromNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsDetachFromNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.detach_from_network.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsDetachFromNetwork<
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
                  (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['detach_from_network']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsDetachFromNetworkMutationOptions<
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

export function getPostLoadBalancersIdActionsDisablePublicInterfaceMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/disable_public_interface', 'POST'] as const
}

export function getPostLoadBalancersIdActionsDisablePublicInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsDisablePublicInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.disable_public_interface.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsDisablePublicInterface<
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
                  (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['disable_public_interface']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsDisablePublicInterfaceMutationOptions<
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

export function getPostLoadBalancersIdActionsEnablePublicInterfaceMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/enable_public_interface', 'POST'] as const
}

export function getPostLoadBalancersIdActionsEnablePublicInterfaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsEnablePublicInterfaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
      >,
    ) {
      return parseResponse(
        client.load_balancers[':id'].actions.enable_public_interface.$post(args, options),
      )
    },
  })
}

export function usePostLoadBalancersIdActionsEnablePublicInterface<
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
                  (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['enable_public_interface']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsEnablePublicInterfaceMutationOptions<
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

export function getPostLoadBalancersIdActionsRemoveTargetMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/remove_target', 'POST'] as const
}

export function getPostLoadBalancersIdActionsRemoveTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['remove_target']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['remove_target']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsRemoveTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['remove_target']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.remove_target.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsRemoveTarget<
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
                  (typeof client.load_balancers)[':id']['actions']['remove_target']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['remove_target']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsRemoveTargetMutationOptions<
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

export function getPostLoadBalancersIdActionsUpdateServiceMutationKey() {
  return ['load_balancers', '/load_balancers/:id/actions/update_service', 'POST'] as const
}

export function getPostLoadBalancersIdActionsUpdateServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions']['update_service']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['update_service']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLoadBalancersIdActionsUpdateServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.load_balancers)[':id']['actions']['update_service']['$post']
      >,
    ) {
      return parseResponse(client.load_balancers[':id'].actions.update_service.$post(args, options))
    },
  })
}

export function usePostLoadBalancersIdActionsUpdateService<
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
                  (typeof client.load_balancers)[':id']['actions']['update_service']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.load_balancers)[':id']['actions']['update_service']['$post']
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
  const mutationDefaults = getPostLoadBalancersIdActionsUpdateServiceMutationOptions<
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

export function getLoadBalancersIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>,
) {
  return ['load_balancers', '/load_balancers/:id/actions/:action_id', args] as const
}

export function getLoadBalancersIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdActionsActionIdQueryKey>
  >({
    queryKey: getLoadBalancersIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancers[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLoadBalancersIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdActionsActionIdQueryKey>
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
      ...getLoadBalancersIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLoadBalancersIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdActionsActionIdQueryKey>
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
      ...getLoadBalancersIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLoadBalancersIdMetricsQueryKey(
  args: InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>,
) {
  return ['load_balancers', '/load_balancers/:id/metrics', args] as const
}

export function getLoadBalancersIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdMetricsQueryKey>
  >({
    queryKey: getLoadBalancersIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.load_balancers[':id'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLoadBalancersIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdMetricsQueryKey>
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
      ...getLoadBalancersIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLoadBalancersIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLoadBalancersIdMetricsQueryKey>
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
      ...getLoadBalancersIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLocationsQueryKey(args: InferRequestType<typeof client.locations.$get>) {
  return ['locations', '/locations', args] as const
}

export function getLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >({
    queryKey: getLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.locations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.locations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLocationsIdQueryKey(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
) {
  return ['locations', '/locations/:id', args] as const
}

export function getLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >({
    queryKey: getLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLocationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLocationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNetworksQueryKey(args: InferRequestType<typeof client.networks.$get>) {
  return ['networks', '/networks', args] as const
}

export function getNetworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.networks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >({
    queryKey: getNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.networks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNetworksMutationKey() {
  return ['networks', '/networks', 'POST'] as const
}

export function getPostNetworksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>>,
    TError,
    InferRequestType<typeof client.networks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.networks.$post>) {
      return parseResponse(client.networks.$post(args, options))
    },
  })
}

export function usePostNetworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.networks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNetworksIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
) {
  return ['networks', '/networks/:id', args] as const
}

export function getNetworksIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.networks)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdQueryKey>
  >({
    queryKey: getNetworksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutNetworksIdMutationKey() {
  return ['networks', '/networks/:id', 'PUT'] as const
}

export function getPutNetworksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networks)[':id']['$put']>) {
      return parseResponse(client.networks[':id'].$put(args, options))
    },
  })
}

export function usePutNetworksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNetworksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteNetworksIdMutationKey() {
  return ['networks', '/networks/:id', 'DELETE'] as const
}

export function getDeleteNetworksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.networks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.networks)[':id']['$delete']>) {
      return parseResponse(client.networks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteNetworksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.networks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNetworksIdMutationOptions<TError, TOnMutateResult>(
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

export function getNetworksIdActionsQueryKey(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['$get']>,
) {
  return ['networks', '/networks/:id/actions', args] as const
}

export function getNetworksIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdActionsQueryKey>
  >({
    queryKey: getNetworksIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworksIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNetworksIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNetworksIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNetworksIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNetworksIdActionsAddRouteMutationKey() {
  return ['networks', '/networks/:id/actions/add_route', 'POST'] as const
}

export function getPostNetworksIdActionsAddRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['add_route']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['add_route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsAddRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':id']['actions']['add_route']['$post']>,
    ) {
      return parseResponse(client.networks[':id'].actions.add_route.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsAddRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions']['add_route']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['add_route']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsAddRouteMutationOptions<TError, TOnMutateResult>(
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

export function getPostNetworksIdActionsAddSubnetMutationKey() {
  return ['networks', '/networks/:id/actions/add_subnet', 'POST'] as const
}

export function getPostNetworksIdActionsAddSubnetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsAddSubnetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>,
    ) {
      return parseResponse(client.networks[':id'].actions.add_subnet.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsAddSubnet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsAddSubnetMutationOptions<
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

export function getPostNetworksIdActionsChangeIpRangeMutationKey() {
  return ['networks', '/networks/:id/actions/change_ip_range', 'POST'] as const
}

export function getPostNetworksIdActionsChangeIpRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':id']['actions']['change_ip_range']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['change_ip_range']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsChangeIpRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':id']['actions']['change_ip_range']['$post']
      >,
    ) {
      return parseResponse(client.networks[':id'].actions.change_ip_range.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsChangeIpRange<
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
                ReturnType<(typeof client.networks)[':id']['actions']['change_ip_range']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['change_ip_range']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsChangeIpRangeMutationOptions<
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

export function getPostNetworksIdActionsChangeProtectionMutationKey() {
  return ['networks', '/networks/:id/actions/change_protection', 'POST'] as const
}

export function getPostNetworksIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.networks)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.networks)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(client.networks[':id'].actions.change_protection.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsChangeProtection<
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
                ReturnType<(typeof client.networks)[':id']['actions']['change_protection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['change_protection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsChangeProtectionMutationOptions<
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

export function getPostNetworksIdActionsDeleteRouteMutationKey() {
  return ['networks', '/networks/:id/actions/delete_route', 'POST'] as const
}

export function getPostNetworksIdActionsDeleteRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsDeleteRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>,
    ) {
      return parseResponse(client.networks[':id'].actions.delete_route.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsDeleteRoute<
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
                ReturnType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['delete_route']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsDeleteRouteMutationOptions<
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

export function getPostNetworksIdActionsDeleteSubnetMutationKey() {
  return ['networks', '/networks/:id/actions/delete_subnet', 'POST'] as const
}

export function getPostNetworksIdActionsDeleteSubnetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworksIdActionsDeleteSubnetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>,
    ) {
      return parseResponse(client.networks[':id'].actions.delete_subnet.$post(args, options))
    },
  })
}

export function usePostNetworksIdActionsDeleteSubnet<
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
                ReturnType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.networks)[':id']['actions']['delete_subnet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNetworksIdActionsDeleteSubnetMutationOptions<
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

export function getNetworksIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>,
) {
  return ['networks', '/networks/:id/actions/:action_id', args] as const
}

export function getNetworksIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdActionsActionIdQueryKey>
  >({
    queryKey: getNetworksIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.networks[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNetworksIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdActionsActionIdQueryKey>
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
      ...getNetworksIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNetworksIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworksIdActionsActionIdQueryKey>
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
      ...getNetworksIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPlacementGroupsQueryKey(
  args: InferRequestType<typeof client.placement_groups.$get>,
) {
  return ['placement_groups', '/placement_groups', args] as const
}

export function getPlacementGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.placement_groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlacementGroupsQueryKey>
  >({
    queryKey: getPlacementGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.placement_groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePlacementGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.placement_groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlacementGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlacementGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlacementGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.placement_groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlacementGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlacementGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPlacementGroupsMutationKey() {
  return ['placement_groups', '/placement_groups', 'POST'] as const
}

export function getPostPlacementGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.placement_groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlacementGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.placement_groups.$post>) {
      return parseResponse(client.placement_groups.$post(args, options))
    },
  })
}

export function usePostPlacementGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.placement_groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPlacementGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPlacementGroupsIdQueryKey(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$get']>,
) {
  return ['placement_groups', '/placement_groups/:id', args] as const
}

export function getPlacementGroupsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacementGroupsIdQueryKey>
  >({
    queryKey: getPlacementGroupsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.placement_groups[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePlacementGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlacementGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPlacementGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePlacementGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.placement_groups)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlacementGroupsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPlacementGroupsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPlacementGroupsIdMutationKey() {
  return ['placement_groups', '/placement_groups/:id', 'PUT'] as const
}

export function getPutPlacementGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.placement_groups)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlacementGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.placement_groups)[':id']['$put']>) {
      return parseResponse(client.placement_groups[':id'].$put(args, options))
    },
  })
}

export function usePutPlacementGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.placement_groups)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.placement_groups)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPlacementGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePlacementGroupsIdMutationKey() {
  return ['placement_groups', '/placement_groups/:id', 'DELETE'] as const
}

export function getDeletePlacementGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.placement_groups)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.placement_groups)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlacementGroupsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.placement_groups)[':id']['$delete']>) {
      return parseResponse(client.placement_groups[':id'].$delete(args, options))
    },
  })
}

export function useDeletePlacementGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.placement_groups)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.placement_groups)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePlacementGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPricingQueryKey() {
  return ['pricing', '/pricing'] as const
}

export function getPricingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPricingQueryKey>
  >({
    queryKey: getPricingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPricingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPricingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPrimaryIpsQueryKey(args: InferRequestType<typeof client.primary_ips.$get>) {
  return ['primary_ips', '/primary_ips', args] as const
}

export function getPrimaryIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.primary_ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsQueryKey>
  >({
    queryKey: getPrimaryIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.primary_ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePrimaryIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.primary_ips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrimaryIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrimaryIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrimaryIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.primary_ips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrimaryIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrimaryIpsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPrimaryIpsMutationKey() {
  return ['primary_ips', '/primary_ips', 'POST'] as const
}

export function getPostPrimaryIpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$post>>>>>,
    TError,
    InferRequestType<typeof client.primary_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPrimaryIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.primary_ips.$post>) {
      return parseResponse(client.primary_ips.$post(args, options))
    },
  })
}

export function usePostPrimaryIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.primary_ips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrimaryIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPrimaryIpsIdQueryKey(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$get']>,
) {
  return ['primary_ips', '/primary_ips/:id', args] as const
}

export function getPrimaryIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsIdQueryKey>
  >({
    queryKey: getPrimaryIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.primary_ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePrimaryIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrimaryIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrimaryIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrimaryIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.primary_ips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPrimaryIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrimaryIpsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPrimaryIpsIdMutationKey() {
  return ['primary_ips', '/primary_ips/:id', 'PUT'] as const
}

export function getPutPrimaryIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPrimaryIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.primary_ips)[':id']['$put']>) {
      return parseResponse(client.primary_ips[':id'].$put(args, options))
    },
  })
}

export function usePutPrimaryIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.primary_ips)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPrimaryIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeletePrimaryIpsIdMutationKey() {
  return ['primary_ips', '/primary_ips/:id', 'DELETE'] as const
}

export function getDeletePrimaryIpsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePrimaryIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.primary_ips)[':id']['$delete']>) {
      return parseResponse(client.primary_ips[':id'].$delete(args, options))
    },
  })
}

export function useDeletePrimaryIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.primary_ips)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.primary_ips)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePrimaryIpsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostPrimaryIpsIdActionsAssignMutationKey() {
  return ['primary_ips', '/primary_ips/:id/actions/assign', 'POST'] as const
}

export function getPostPrimaryIpsIdActionsAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrimaryIpsIdActionsAssignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>,
    ) {
      return parseResponse(client.primary_ips[':id'].actions.assign.$post(args, options))
    },
  })
}

export function usePostPrimaryIpsIdActionsAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrimaryIpsIdActionsAssignMutationOptions<TError, TOnMutateResult>(
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

export function getPostPrimaryIpsIdActionsChangeDnsPtrMutationKey() {
  return ['primary_ips', '/primary_ips/:id/actions/change_dns_ptr', 'POST'] as const
}

export function getPostPrimaryIpsIdActionsChangeDnsPtrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrimaryIpsIdActionsChangeDnsPtrMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']
      >,
    ) {
      return parseResponse(client.primary_ips[':id'].actions.change_dns_ptr.$post(args, options))
    },
  })
}

export function usePostPrimaryIpsIdActionsChangeDnsPtr<
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
                ReturnType<(typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrimaryIpsIdActionsChangeDnsPtrMutationOptions<
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

export function getPostPrimaryIpsIdActionsChangeProtectionMutationKey() {
  return ['primary_ips', '/primary_ips/:id/actions/change_protection', 'POST'] as const
}

export function getPostPrimaryIpsIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.primary_ips)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrimaryIpsIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.primary_ips)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(client.primary_ips[':id'].actions.change_protection.$post(args, options))
    },
  })
}

export function usePostPrimaryIpsIdActionsChangeProtection<
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
                  (typeof client.primary_ips)[':id']['actions']['change_protection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.primary_ips)[':id']['actions']['change_protection']['$post']
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
  const mutationDefaults = getPostPrimaryIpsIdActionsChangeProtectionMutationOptions<
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

export function getPostPrimaryIpsIdActionsUnassignMutationKey() {
  return ['primary_ips', '/primary_ips/:id/actions/unassign', 'POST'] as const
}

export function getPostPrimaryIpsIdActionsUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPrimaryIpsIdActionsUnassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>,
    ) {
      return parseResponse(client.primary_ips[':id'].actions.unassign.$post(args, options))
    },
  })
}

export function usePostPrimaryIpsIdActionsUnassign<
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
                ReturnType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.primary_ips)[':id']['actions']['unassign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPrimaryIpsIdActionsUnassignMutationOptions<
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

export function getServerTypesQueryKey(args: InferRequestType<typeof client.server_types.$get>) {
  return ['server_types', '/server_types', args] as const
}

export function getServerTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.server_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerTypesQueryKey>
  >({
    queryKey: getServerTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.server_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.server_types.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServerTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.server_types.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getServerTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServerTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServerTypesIdQueryKey(
  args: InferRequestType<(typeof client.server_types)[':id']['$get']>,
) {
  return ['server_types', '/server_types/:id', args] as const
}

export function getServerTypesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.server_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerTypesIdQueryKey>
  >({
    queryKey: getServerTypesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.server_types[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.server_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServerTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServerTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.server_types)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServerTypesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServerTypesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServersQueryKey(args: InferRequestType<typeof client.servers.$get>) {
  return ['servers', '/servers', args] as const
}

export function getServersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.servers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServersQueryKey>
  >({
    queryKey: getServersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.servers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.servers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getServersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostServersMutationKey() {
  return ['servers', '/servers', 'POST'] as const
}

export function getPostServersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$post>>>>>,
    TError,
    InferRequestType<typeof client.servers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.servers.$post>) {
      return parseResponse(client.servers.$post(args, options))
    },
  })
}

export function usePostServers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$post>>>>>,
        TError,
        InferRequestType<typeof client.servers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServersIdQueryKey(
  args: InferRequestType<(typeof client.servers)[':id']['$get']>,
) {
  return ['servers', '/servers/:id', args] as const
}

export function getServersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.servers)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdQueryKey>
  >({
    queryKey: getServersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useServersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutServersIdMutationKey() {
  return ['servers', '/servers/:id', 'PUT'] as const
}

export function getPutServersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':id']['$put']>) {
      return parseResponse(client.servers[':id'].$put(args, options))
    },
  })
}

export function usePutServersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutServersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteServersIdMutationKey() {
  return ['servers', '/servers/:id', 'DELETE'] as const
}

export function getDeleteServersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.servers)[':id']['$delete']>) {
      return parseResponse(client.servers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteServersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServersIdActionsQueryKey(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['$get']>,
) {
  return ['servers', '/servers/:id/actions', args] as const
}

export function getServersIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdActionsQueryKey>
  >({
    queryKey: getServersIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServersIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServersIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostServersIdActionsAddToPlacementGroupMutationKey() {
  return ['servers', '/servers/:id/actions/add_to_placement_group', 'POST'] as const
}

export function getPostServersIdActionsAddToPlacementGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsAddToPlacementGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']
      >,
    ) {
      return parseResponse(
        client.servers[':id'].actions.add_to_placement_group.$post(args, options),
      )
    },
  })
}

export function usePostServersIdActionsAddToPlacementGroup<
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
                  (typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.servers)[':id']['actions']['add_to_placement_group']['$post']
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
  const mutationDefaults = getPostServersIdActionsAddToPlacementGroupMutationOptions<
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

export function getPostServersIdActionsAttachIsoMutationKey() {
  return ['servers', '/servers/:id/actions/attach_iso', 'POST'] as const
}

export function getPostServersIdActionsAttachIsoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsAttachIsoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.attach_iso.$post(args, options))
    },
  })
}

export function usePostServersIdActionsAttachIso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsAttachIsoMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsAttachToNetworkMutationKey() {
  return ['servers', '/servers/:id/actions/attach_to_network', 'POST'] as const
}

export function getPostServersIdActionsAttachToNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsAttachToNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['attach_to_network']['$post']
      >,
    ) {
      return parseResponse(client.servers[':id'].actions.attach_to_network.$post(args, options))
    },
  })
}

export function usePostServersIdActionsAttachToNetwork<
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
                ReturnType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsAttachToNetworkMutationOptions<
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

export function getPostServersIdActionsChangeAliasIpsMutationKey() {
  return ['servers', '/servers/:id/actions/change_alias_ips', 'POST'] as const
}

export function getPostServersIdActionsChangeAliasIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':id']['actions']['change_alias_ips']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['change_alias_ips']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsChangeAliasIpsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['change_alias_ips']['$post']
      >,
    ) {
      return parseResponse(client.servers[':id'].actions.change_alias_ips.$post(args, options))
    },
  })
}

export function usePostServersIdActionsChangeAliasIps<
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
                ReturnType<(typeof client.servers)[':id']['actions']['change_alias_ips']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['change_alias_ips']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsChangeAliasIpsMutationOptions<
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

export function getPostServersIdActionsChangeDnsPtrMutationKey() {
  return ['servers', '/servers/:id/actions/change_dns_ptr', 'POST'] as const
}

export function getPostServersIdActionsChangeDnsPtrMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsChangeDnsPtrMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.change_dns_ptr.$post(args, options))
    },
  })
}

export function usePostServersIdActionsChangeDnsPtr<
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
                ReturnType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['change_dns_ptr']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsChangeDnsPtrMutationOptions<
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

export function getPostServersIdActionsChangeProtectionMutationKey() {
  return ['servers', '/servers/:id/actions/change_protection', 'POST'] as const
}

export function getPostServersIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(client.servers[':id'].actions.change_protection.$post(args, options))
    },
  })
}

export function usePostServersIdActionsChangeProtection<
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
                ReturnType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsChangeProtectionMutationOptions<
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

export function getPostServersIdActionsChangeTypeMutationKey() {
  return ['servers', '/servers/:id/actions/change_type', 'POST'] as const
}

export function getPostServersIdActionsChangeTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['change_type']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['change_type']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsChangeTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['change_type']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.change_type.$post(args, options))
    },
  })
}

export function usePostServersIdActionsChangeType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['change_type']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['change_type']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsChangeTypeMutationOptions<
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

export function getPostServersIdActionsCreateImageMutationKey() {
  return ['servers', '/servers/:id/actions/create_image', 'POST'] as const
}

export function getPostServersIdActionsCreateImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['create_image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['create_image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsCreateImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['create_image']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.create_image.$post(args, options))
    },
  })
}

export function usePostServersIdActionsCreateImage<
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
                ReturnType<(typeof client.servers)[':id']['actions']['create_image']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['create_image']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsCreateImageMutationOptions<
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

export function getPostServersIdActionsDetachFromNetworkMutationKey() {
  return ['servers', '/servers/:id/actions/detach_from_network', 'POST'] as const
}

export function getPostServersIdActionsDetachFromNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.servers)[':id']['actions']['detach_from_network']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['detach_from_network']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsDetachFromNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['detach_from_network']['$post']
      >,
    ) {
      return parseResponse(client.servers[':id'].actions.detach_from_network.$post(args, options))
    },
  })
}

export function usePostServersIdActionsDetachFromNetwork<
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
                  (typeof client.servers)[':id']['actions']['detach_from_network']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['detach_from_network']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsDetachFromNetworkMutationOptions<
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

export function getPostServersIdActionsDetachIsoMutationKey() {
  return ['servers', '/servers/:id/actions/detach_iso', 'POST'] as const
}

export function getPostServersIdActionsDetachIsoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsDetachIsoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.detach_iso.$post(args, options))
    },
  })
}

export function usePostServersIdActionsDetachIso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsDetachIsoMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsDisableBackupMutationKey() {
  return ['servers', '/servers/:id/actions/disable_backup', 'POST'] as const
}

export function getPostServersIdActionsDisableBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsDisableBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.disable_backup.$post(args, options))
    },
  })
}

export function usePostServersIdActionsDisableBackup<
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
                ReturnType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['disable_backup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsDisableBackupMutationOptions<
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

export function getPostServersIdActionsDisableRescueMutationKey() {
  return ['servers', '/servers/:id/actions/disable_rescue', 'POST'] as const
}

export function getPostServersIdActionsDisableRescueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsDisableRescueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.disable_rescue.$post(args, options))
    },
  })
}

export function usePostServersIdActionsDisableRescue<
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
                ReturnType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['disable_rescue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsDisableRescueMutationOptions<
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

export function getPostServersIdActionsEnableBackupMutationKey() {
  return ['servers', '/servers/:id/actions/enable_backup', 'POST'] as const
}

export function getPostServersIdActionsEnableBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsEnableBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.enable_backup.$post(args, options))
    },
  })
}

export function usePostServersIdActionsEnableBackup<
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
                ReturnType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['enable_backup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsEnableBackupMutationOptions<
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

export function getPostServersIdActionsEnableRescueMutationKey() {
  return ['servers', '/servers/:id/actions/enable_rescue', 'POST'] as const
}

export function getPostServersIdActionsEnableRescueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsEnableRescueMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.enable_rescue.$post(args, options))
    },
  })
}

export function usePostServersIdActionsEnableRescue<
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
                ReturnType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['enable_rescue']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsEnableRescueMutationOptions<
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

export function getPostServersIdActionsPoweroffMutationKey() {
  return ['servers', '/servers/:id/actions/poweroff', 'POST'] as const
}

export function getPostServersIdActionsPoweroffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsPoweroffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.poweroff.$post(args, options))
    },
  })
}

export function usePostServersIdActionsPoweroff<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['poweroff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsPoweroffMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsPoweronMutationKey() {
  return ['servers', '/servers/:id/actions/poweron', 'POST'] as const
}

export function getPostServersIdActionsPoweronMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['poweron']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['poweron']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsPoweronMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['poweron']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.poweron.$post(args, options))
    },
  })
}

export function usePostServersIdActionsPoweron<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['poweron']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['poweron']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsPoweronMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsRebootMutationKey() {
  return ['servers', '/servers/:id/actions/reboot', 'POST'] as const
}

export function getPostServersIdActionsRebootMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['reboot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['reboot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsRebootMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['reboot']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.reboot.$post(args, options))
    },
  })
}

export function usePostServersIdActionsReboot<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['reboot']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['reboot']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsRebootMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsRebuildMutationKey() {
  return ['servers', '/servers/:id/actions/rebuild', 'POST'] as const
}

export function getPostServersIdActionsRebuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsRebuildMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.rebuild.$post(args, options))
    },
  })
}

export function usePostServersIdActionsRebuild<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['rebuild']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsRebuildMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsRemoveFromPlacementGroupMutationKey() {
  return ['servers', '/servers/:id/actions/remove_from_placement_group', 'POST'] as const
}

export function getPostServersIdActionsRemoveFromPlacementGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsRemoveFromPlacementGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
      >,
    ) {
      return parseResponse(
        client.servers[':id'].actions.remove_from_placement_group.$post(args, options),
      )
    },
  })
}

export function usePostServersIdActionsRemoveFromPlacementGroup<
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
                  (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.servers)[':id']['actions']['remove_from_placement_group']['$post']
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
  const mutationDefaults = getPostServersIdActionsRemoveFromPlacementGroupMutationOptions<
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

export function getPostServersIdActionsRequestConsoleMutationKey() {
  return ['servers', '/servers/:id/actions/request_console', 'POST'] as const
}

export function getPostServersIdActionsRequestConsoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['request_console']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['request_console']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsRequestConsoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['request_console']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.request_console.$post(args, options))
    },
  })
}

export function usePostServersIdActionsRequestConsole<
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
                ReturnType<(typeof client.servers)[':id']['actions']['request_console']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['request_console']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsRequestConsoleMutationOptions<
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

export function getPostServersIdActionsResetMutationKey() {
  return ['servers', '/servers/:id/actions/reset', 'POST'] as const
}

export function getPostServersIdActionsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['reset']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['reset']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.reset.$post(args, options))
    },
  })
}

export function usePostServersIdActionsReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['reset']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['reset']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostServersIdActionsResetPasswordMutationKey() {
  return ['servers', '/servers/:id/actions/reset_password', 'POST'] as const
}

export function getPostServersIdActionsResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.reset_password.$post(args, options))
    },
  })
}

export function usePostServersIdActionsResetPassword<
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
                ReturnType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['reset_password']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsResetPasswordMutationOptions<
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

export function getPostServersIdActionsShutdownMutationKey() {
  return ['servers', '/servers/:id/actions/shutdown', 'POST'] as const
}

export function getPostServersIdActionsShutdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServersIdActionsShutdownMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>,
    ) {
      return parseResponse(client.servers[':id'].actions.shutdown.$post(args, options))
    },
  })
}

export function usePostServersIdActionsShutdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.servers)[':id']['actions']['shutdown']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostServersIdActionsShutdownMutationOptions<TError, TOnMutateResult>(
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

export function getServersIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>,
) {
  return ['servers', '/servers/:id/actions/:action_id', args] as const
}

export function getServersIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdActionsActionIdQueryKey>
  >({
    queryKey: getServersIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServersIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdActionsActionIdQueryKey>
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
      ...getServersIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseServersIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdActionsActionIdQueryKey>
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
      ...getServersIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getServersIdMetricsQueryKey(
  args: InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>,
) {
  return ['servers', '/servers/:id/metrics', args] as const
}

export function getServersIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdMetricsQueryKey>
  >({
    queryKey: getServersIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.servers[':id'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServersIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServersIdMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServersIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServersIdMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServersIdMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSshKeysQueryKey(args: InferRequestType<typeof client.ssh_keys.$get>) {
  return ['ssh_keys', '/ssh_keys', args] as const
}

export function getSshKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ssh_keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSshKeysQueryKey>
  >({
    queryKey: getSshKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ssh_keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ssh_keys.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSshKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ssh_keys.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSshKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSshKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSshKeysMutationKey() {
  return ['ssh_keys', '/ssh_keys', 'POST'] as const
}

export function getPostSshKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.ssh_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSshKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ssh_keys.$post>) {
      return parseResponse(client.ssh_keys.$post(args, options))
    },
  })
}

export function usePostSshKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ssh_keys.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSshKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSshKeysIdQueryKey(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$get']>,
) {
  return ['ssh_keys', '/ssh_keys/:id', args] as const
}

export function getSshKeysIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ssh_keys)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysIdQueryKey>
  >({
    queryKey: getSshKeysIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ssh_keys[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSshKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSshKeysIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSshKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ssh_keys)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSshKeysIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSshKeysIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSshKeysIdMutationKey() {
  return ['ssh_keys', '/ssh_keys/:id', 'PUT'] as const
}

export function getPutSshKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ssh_keys)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSshKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ssh_keys)[':id']['$put']>) {
      return parseResponse(client.ssh_keys[':id'].$put(args, options))
    },
  })
}

export function usePutSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ssh_keys)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSshKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSshKeysIdMutationKey() {
  return ['ssh_keys', '/ssh_keys/:id', 'DELETE'] as const
}

export function getDeleteSshKeysIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ssh_keys)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSshKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ssh_keys)[':id']['$delete']>) {
      return parseResponse(client.ssh_keys[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSshKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ssh_keys)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSshKeysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesQueryKey(args: InferRequestType<typeof client.volumes.$get>) {
  return ['volumes', '/volumes', args] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.volumes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
        TError,
        InferRequestType<typeof client.volumes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesIdQueryKey(
  args: InferRequestType<(typeof client.volumes)[':id']['$get']>,
) {
  return ['volumes', '/volumes/:id', args] as const
}

export function getVolumesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.volumes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdQueryKey>
  >({
    queryKey: getVolumesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVolumesIdMutationKey() {
  return ['volumes', '/volumes/:id', 'PUT'] as const
}

export function getPutVolumesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVolumesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':id']['$put']>) {
      return parseResponse(client.volumes[':id'].$put(args, options))
    },
  })
}

export function usePutVolumesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVolumesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteVolumesIdMutationKey() {
  return ['volumes', '/volumes/:id', 'DELETE'] as const
}

export function getDeleteVolumesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':id']['$delete']>) {
      return parseResponse(client.volumes[':id'].$delete(args, options))
    },
  })
}

export function useDeleteVolumesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesIdActionsQueryKey(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>,
) {
  return ['volumes', '/volumes/:id/actions', args] as const
}

export function getVolumesIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdActionsQueryKey>
  >({
    queryKey: getVolumesIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVolumesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesIdActionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesIdActionsAttachMutationKey() {
  return ['volumes', '/volumes/:id/actions/attach', 'POST'] as const
}

export function getPostVolumesIdActionsAttachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['attach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['actions']['attach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesIdActionsAttachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':id']['actions']['attach']['$post']>,
    ) {
      return parseResponse(client.volumes[':id'].actions.attach.$post(args, options))
    },
  })
}

export function usePostVolumesIdActionsAttach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['attach']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['actions']['attach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesIdActionsAttachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesIdActionsChangeProtectionMutationKey() {
  return ['volumes', '/volumes/:id/actions/change_protection', 'POST'] as const
}

export function getPostVolumesIdActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesIdActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.volumes)[':id']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(client.volumes[':id'].actions.change_protection.$post(args, options))
    },
  })
}

export function usePostVolumesIdActionsChangeProtection<
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
                ReturnType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesIdActionsChangeProtectionMutationOptions<
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

export function getPostVolumesIdActionsDetachMutationKey() {
  return ['volumes', '/volumes/:id/actions/detach', 'POST'] as const
}

export function getPostVolumesIdActionsDetachMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['detach']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['actions']['detach']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesIdActionsDetachMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':id']['actions']['detach']['$post']>,
    ) {
      return parseResponse(client.volumes[':id'].actions.detach.$post(args, options))
    },
  })
}

export function usePostVolumesIdActionsDetach<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['detach']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['actions']['detach']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesIdActionsDetachMutationOptions<TError, TOnMutateResult>(
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

export function getPostVolumesIdActionsResizeMutationKey() {
  return ['volumes', '/volumes/:id/actions/resize', 'POST'] as const
}

export function getPostVolumesIdActionsResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['resize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.volumes)[':id']['actions']['resize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesIdActionsResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.volumes)[':id']['actions']['resize']['$post']>,
    ) {
      return parseResponse(client.volumes[':id'].actions.resize.$post(args, options))
    },
  })
}

export function usePostVolumesIdActionsResize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['resize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.volumes)[':id']['actions']['resize']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesIdActionsResizeMutationOptions<TError, TOnMutateResult>(
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

export function getVolumesIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>,
) {
  return ['volumes', '/volumes/:id/actions/:action_id', args] as const
}

export function getVolumesIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdActionsActionIdQueryKey>
  >({
    queryKey: getVolumesIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVolumesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdActionsActionIdQueryKey>
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
      ...getVolumesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVolumesIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesIdActionsActionIdQueryKey>
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
      ...getVolumesIdActionsActionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

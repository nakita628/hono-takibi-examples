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

export function getZonesKey() {
  return ['zones'] as const
}

export function getActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
) {
  return ['actions', '/actions', toValue(args)] as const
}

export function getActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>
          >,
          ReturnType<typeof getActionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
) {
  return ['actions', '/actions/:id', toValue(args)] as const
}

export function getActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getActionsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.actions)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
) {
  return ['certificates', '/certificates', toValue(args)] as const
}

export function getCertificatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCertificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>
          >,
          ReturnType<typeof getCertificatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCertificatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.certificates.$post>,
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

export function getCertificatesActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.actions.$get>>,
) {
  return ['certificates', '/certificates/actions', toValue(args)] as const
}

export function getCertificatesActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.certificates.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.certificates.actions.$get>>>
            >
          >,
          ReturnType<typeof getCertificatesActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.certificates.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates.actions)[':id']['$get']>>,
) {
  return ['certificates', '/certificates/actions/:id', toValue(args)] as const
}

export function getCertificatesActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificates.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificatesActionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.certificates.actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCertificatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['$get']>>,
) {
  return ['certificates', '/certificates/:id', toValue(args)] as const
}

export function getCertificatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCertificatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCertificatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.certificates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>>,
) {
  return ['certificates', '/certificates/:id/actions', toValue(args)] as const
}

export function getCertificatesIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.certificates)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCertificatesIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.certificates)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.certificates)[':id']['actions']['retry']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.certificates)[':id']['actions']['retry']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['certificates', '/certificates/:id/actions/:action_id', toValue(args)] as const
}

export function getCertificatesIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCertificatesIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.certificates[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCertificatesIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.certificates)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCertificatesIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCertificatesIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.certificates[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatacentersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datacenters.$get>>,
) {
  return ['datacenters', '/datacenters', toValue(args)] as const
}

export function getDatacentersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datacenters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatacentersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datacenters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatacenters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datacenters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>
          >,
          ReturnType<typeof getDatacentersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datacenters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatacentersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatacentersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datacenters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatacentersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datacenters)[':id']['$get']>>,
) {
  return ['datacenters', '/datacenters/:id', toValue(args)] as const
}

export function getDatacentersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datacenters)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatacentersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datacenters[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatacentersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datacenters)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDatacentersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datacenters)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatacentersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatacentersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datacenters[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirewallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.$get>>,
) {
  return ['firewalls', '/firewalls', toValue(args)] as const
}

export function getFirewallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFirewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>
          >,
          ReturnType<typeof getFirewallsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFirewallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.firewalls.$post>,
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

export function getFirewallsActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.actions.$get>>,
) {
  return ['firewalls', '/firewalls/actions', toValue(args)] as const
}

export function getFirewallsActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirewallsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.firewalls.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.actions.$get>>>
            >
          >,
          ReturnType<typeof getFirewallsActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.firewalls.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirewallsActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls.actions)[':id']['$get']>>,
) {
  return ['firewalls', '/firewalls/actions/:id', toValue(args)] as const
}

export function getFirewallsActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirewallsActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firewalls.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firewalls.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFirewallsActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFirewallsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['$get']>>,
) {
  return ['firewalls', '/firewalls/:id', toValue(args)] as const
}

export function getFirewallsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirewallsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFirewallsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.firewalls)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.firewalls)[':id']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>>,
) {
  return ['firewalls', '/firewalls/:id/actions', toValue(args)] as const
}

export function getFirewallsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFirewallsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.firewalls)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFirewallsIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.firewalls)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.firewalls)[':id']['actions']['set_rules']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['firewalls', '/firewalls/:id/actions/:action_id', toValue(args)] as const
}

export function getFirewallsIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFirewallsIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.firewalls[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>
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
                  ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFirewallsIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.firewalls)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFirewallsIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFirewallsIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.firewalls[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFloatingIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.$get>>,
) {
  return ['floating_ips', '/floating_ips', toValue(args)] as const
}

export function getFloatingIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFloatingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>
          >,
          ReturnType<typeof getFloatingIpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.floating_ips.$post>,
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

export function getFloatingIpsActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.actions.$get>>,
) {
  return ['floating_ips', '/floating_ips/actions', toValue(args)] as const
}

export function getFloatingIpsActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFloatingIpsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.floating_ips.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.actions.$get>>>
            >
          >,
          ReturnType<typeof getFloatingIpsActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.floating_ips.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFloatingIpsActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips.actions)[':id']['$get']>>,
) {
  return ['floating_ips', '/floating_ips/actions/:id', toValue(args)] as const
}

export function getFloatingIpsActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFloatingIpsActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.floating_ips.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.floating_ips.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFloatingIpsActionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.floating_ips.actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFloatingIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['$get']>>,
) {
  return ['floating_ips', '/floating_ips/:id', toValue(args)] as const
}

export function getFloatingIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFloatingIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFloatingIpsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.floating_ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>>,
) {
  return ['floating_ips', '/floating_ips/:id/actions', toValue(args)] as const
}

export function getFloatingIpsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.floating_ips)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFloatingIpsIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.floating_ips)[':id']['actions']['assign']['$post']>,
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
      Extract<
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
          InferRequestType<
            (typeof client.floating_ips)[':id']['actions']['change_dns_ptr']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['floating_ips', '/floating_ips/:id/actions/:action_id', toValue(args)] as const
}

export function getFloatingIpsIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFloatingIpsIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.floating_ips[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFloatingIpsIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.floating_ips)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFloatingIpsIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFloatingIpsIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.floating_ips[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
) {
  return ['images', '/images', toValue(args)] as const
}

export function getImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImages<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
          ReturnType<typeof getImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.actions.$get>>,
) {
  return ['images', '/images/actions', toValue(args)] as const
}

export function getImagesActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.images.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.actions.$get>>>>
          >,
          ReturnType<typeof getImagesActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.images.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.actions)[':id']['$get']>>,
) {
  return ['images', '/images/actions/:id', toValue(args)] as const
}

export function getImagesActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.images.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
) {
  return ['images', '/images/:id', toValue(args)] as const
}

export function getImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['actions']['$get']>>,
) {
  return ['images', '/images/:id/actions', toValue(args)] as const
}

export function getImagesIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesIdActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['images', '/images/:id/actions/:action_id', toValue(args)] as const
}

export function getImagesIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.images)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImagesIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.images)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIsosQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.isos.$get>>) {
  return ['isos', '/isos', toValue(args)] as const
}

export function getIsosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.isos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIsosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.isos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIsos<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.isos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
          ReturnType<typeof getIsosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIsosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIsosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.isos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIsosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.isos)[':id']['$get']>>,
) {
  return ['isos', '/isos/:id', toValue(args)] as const
}

export function getIsosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.isos)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIsosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.isos[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIsosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.isos)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIsosIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.isos)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIsosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIsosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.isos[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancerTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancer_types.$get>>,
) {
  return ['load_balancer_types', '/load_balancer_types', toValue(args)] as const
}

export function getLoadBalancerTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancer_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancerTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancer_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancer_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>
            >
          >,
          ReturnType<typeof getLoadBalancerTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancer_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancerTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancer_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancerTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>>,
) {
  return ['load_balancer_types', '/load_balancer_types/:id', toValue(args)] as const
}

export function getLoadBalancerTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancerTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancer_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancer_types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancerTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.load_balancer_types)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancerTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancerTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancer_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.$get>>,
) {
  return ['load_balancers', '/load_balancers', toValue(args)] as const
}

export function getLoadBalancersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
          >,
          ReturnType<typeof getLoadBalancersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.load_balancers.$post>,
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

export function getLoadBalancersActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.actions.$get>>,
) {
  return ['load_balancers', '/load_balancers/actions', toValue(args)] as const
}

export function getLoadBalancersActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancersActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.load_balancers.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.actions.$get>>>
            >
          >,
          ReturnType<typeof getLoadBalancersActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.load_balancers.actions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancersActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers.actions)[':id']['$get']>>,
) {
  return ['load_balancers', '/load_balancers/actions/:id', toValue(args)] as const
}

export function getLoadBalancersActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancersActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.load_balancers.actions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancersActionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.load_balancers.actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers)[':id']['$get']>>,
) {
  return ['load_balancers', '/load_balancers/:id', toValue(args)] as const
}

export function getLoadBalancersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLoadBalancersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.load_balancers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.load_balancers)[':id']['$put']>,
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
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.load_balancers)[':id']['$delete']>>>
      >
    >,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.load_balancers)[':id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>
  >,
) {
  return ['load_balancers', '/load_balancers/:id/actions', toValue(args)] as const
}

export function getLoadBalancersIdActionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancersIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.load_balancers)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.load_balancers)[':id']['actions']['add_service']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.load_balancers)[':id']['actions']['add_service']['$post']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.load_balancers)[':id']['actions']['add_target']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.load_balancers)[':id']['actions']['add_target']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.load_balancers)[':id']['actions']['change_type']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.load_balancers)[':id']['actions']['change_type']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['load_balancers', '/load_balancers/:id/actions/:action_id', toValue(args)] as const
}

export function getLoadBalancersIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLoadBalancersIdActionsActionIdQueryKey>
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
            ReturnType<(typeof client.load_balancers)[':id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLoadBalancersIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>
  >,
) {
  return ['load_balancers', '/load_balancers/:id/metrics', toValue(args)] as const
}

export function getLoadBalancersIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLoadBalancersIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.load_balancers[':id'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.load_balancers)[':id']['metrics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLoadBalancersIdMetricsQueryKey>
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
          Awaited<ReturnType<(typeof client.load_balancers)[':id']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLoadBalancersIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLoadBalancersIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.load_balancers[':id'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
) {
  return ['locations', '/locations', toValue(args)] as const
}

export function getLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.locations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
          >,
          ReturnType<typeof getLocationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
) {
  return ['locations', '/locations/:id', toValue(args)] as const
}

export function getLocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.locations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.locations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getLocationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.locations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
) {
  return ['networks', '/networks', toValue(args)] as const
}

export function getNetworksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNetworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>
          >,
          ReturnType<typeof getNetworksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNetworksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.networks.$post>,
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

export function getNetworksActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.actions.$get>>,
) {
  return ['networks', '/networks/actions', toValue(args)] as const
}

export function getNetworksActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.networks.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networks.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.networks.actions.$get>>>
            >
          >,
          ReturnType<typeof getNetworksActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.networks.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks.actions)[':id']['$get']>>,
) {
  return ['networks', '/networks/actions/:id', toValue(args)] as const
}

export function getNetworksActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.networks.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
) {
  return ['networks', '/networks/:id', toValue(args)] as const
}

export function getNetworksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getNetworksIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.networks)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.networks)[':id']['$delete']>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['actions']['$get']>>,
) {
  return ['networks', '/networks/:id/actions', toValue(args)] as const
}

export function getNetworksIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':id']['actions']['add_route']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':id']['actions']['add_route']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.networks)[':id']['actions']['add_subnet']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.networks)[':id']['actions']['change_protection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.networks)[':id']['actions']['change_protection']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['networks', '/networks/:id/actions/:action_id', toValue(args)] as const
}

export function getNetworksIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>
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
                  ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getNetworksIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNetworksIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['members']['$get']>>,
) {
  return ['networks', '/networks/:id/members', toValue(args)] as const
}

export function getNetworksIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNetworksIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.networks[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNetworksIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.networks)[':id']['members']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.networks)[':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.networks)[':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNetworksIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.networks)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworksIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNetworksIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.networks[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlacementGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.placement_groups.$get>>,
) {
  return ['placement_groups', '/placement_groups', toValue(args)] as const
}

export function getPlacementGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.placement_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlacementGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.placement_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlacementGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.placement_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>
            >
          >,
          ReturnType<typeof getPlacementGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.placement_groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlacementGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlacementGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.placement_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.placement_groups)[':id']['$get']>>,
) {
  return ['placement_groups', '/placement_groups/:id', toValue(args)] as const
}

export function getPlacementGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.placement_groups)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlacementGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.placement_groups[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlacementGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.placement_groups)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlacementGroupsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.placement_groups)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlacementGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlacementGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.placement_groups[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getPricingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPricingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>
          >,
          ReturnType<typeof getPricingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPricingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPricingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrimaryIpsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.$get>>,
) {
  return ['primary_ips', '/primary_ips', toValue(args)] as const
}

export function getPrimaryIpsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrimaryIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>
          >,
          ReturnType<typeof getPrimaryIpsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.primary_ips.$post>,
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

export function getPrimaryIpsActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.actions.$get>>,
) {
  return ['primary_ips', '/primary_ips/actions', toValue(args)] as const
}

export function getPrimaryIpsActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrimaryIpsActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.primary_ips.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.actions.$get>>>
            >
          >,
          ReturnType<typeof getPrimaryIpsActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.primary_ips.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrimaryIpsActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips.actions)[':id']['$get']>>,
) {
  return ['primary_ips', '/primary_ips/actions/:id', toValue(args)] as const
}

export function getPrimaryIpsActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrimaryIpsActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.primary_ips.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.primary_ips.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrimaryIpsActionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.primary_ips.actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrimaryIpsIdActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['actions']['$get']>>,
) {
  return ['primary_ips', '/primary_ips/:id/actions', toValue(args)] as const
}

export function getPrimaryIpsIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrimaryIpsIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPrimaryIpsIdActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrimaryIpsIdActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['primary_ips', '/primary_ips/:id/actions/:action_id', toValue(args)] as const
}

export function getPrimaryIpsIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrimaryIpsIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>
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
                  ReturnType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPrimaryIpsIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.primary_ips)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPrimaryIpsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['$get']>>,
) {
  return ['primary_ips', '/primary_ips/:id', toValue(args)] as const
}

export function getPrimaryIpsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPrimaryIpsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.primary_ips[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePrimaryIpsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.primary_ips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPrimaryIpsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.primary_ips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPrimaryIpsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPrimaryIpsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.primary_ips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.primary_ips)[':id']['actions']['assign']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.primary_ips)[':id']['actions']['change_dns_ptr']['$post']
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getServerTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.server_types.$get>>,
) {
  return ['server_types', '/server_types', toValue(args)] as const
}

export function getServerTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.server_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServerTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server_types.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServerTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.server_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>
          >,
          ReturnType<typeof getServerTypesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.server_types.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServerTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServerTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.server_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServerTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.server_types)[':id']['$get']>>,
) {
  return ['server_types', '/server_types/:id', toValue(args)] as const
}

export function getServerTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.server_types)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServerTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.server_types[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServerTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.server_types)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getServerTypesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.server_types)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServerTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServerTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.server_types[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.$get>>,
) {
  return ['servers', '/servers', toValue(args)] as const
}

export function getServersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>
          >,
          ReturnType<typeof getServersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.servers.$post>,
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

export function getServersActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.actions.$get>>,
) {
  return ['servers', '/servers/actions', toValue(args)] as const
}

export function getServersActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.servers.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.servers.actions.$get>>>
            >
          >,
          ReturnType<typeof getServersActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.servers.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServersActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers.actions)[':id']['$get']>>,
) {
  return ['servers', '/servers/actions/:id', toValue(args)] as const
}

export function getServersActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['$get']>>,
) {
  return ['servers', '/servers/:id', toValue(args)] as const
}

export function getServersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getServersIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['actions']['$get']>>,
) {
  return ['servers', '/servers/:id/actions', toValue(args)] as const
}

export function getServersIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersIdActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':id']['actions']['attach_iso']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.servers)[':id']['actions']['attach_to_network']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':id']['actions']['attach_to_network']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.servers)[':id']['actions']['change_protection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':id']['actions']['change_protection']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':id']['actions']['change_type']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':id']['actions']['change_type']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
          InferRequestType<
            (typeof client.servers)[':id']['actions']['detach_from_network']['$post']
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.servers)[':id']['actions']['detach_iso']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['servers', '/servers/:id/actions/:action_id', toValue(args)] as const
}

export function getServersIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.servers)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServersIdMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>>,
) {
  return ['servers', '/servers/:id/metrics', toValue(args)] as const
}

export function getServersIdMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServersIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.servers[':id'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServersIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.servers)[':id']['metrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServersIdMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.servers)[':id']['metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServersIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServersIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.servers[':id'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSshKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ssh_keys.$get>>,
) {
  return ['ssh_keys', '/ssh_keys', toValue(args)] as const
}

export function getSshKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ssh_keys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ssh_keys.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSshKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ssh_keys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>
          >,
          ReturnType<typeof getSshKeysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSshKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ssh_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ssh_keys.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ssh_keys.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ssh_keys)[':id']['$get']>>,
) {
  return ['ssh_keys', '/ssh_keys/:id', toValue(args)] as const
}

export function getSshKeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ssh_keys)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSshKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ssh_keys[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSshKeysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ssh_keys)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSshKeysIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSshKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSshKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ssh_keys[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.ssh_keys)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.ssh_keys)[':id']['$delete']>,
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

export function getVolumesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
) {
  return ['volumes', '/volumes', toValue(args)] as const
}

export function getVolumesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
          >,
          ReturnType<typeof getVolumesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.volumes.$post>,
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

export function getVolumesActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.actions.$get>>,
) {
  return ['volumes', '/volumes/actions', toValue(args)] as const
}

export function getVolumesActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.volumes.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.volumes.actions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.volumes.actions.$get>>>
            >
          >,
          ReturnType<typeof getVolumesActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVolumesActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes.actions)[':id']['$get']>>,
) {
  return ['volumes', '/volumes/actions/:id', toValue(args)] as const
}

export function getVolumesActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVolumesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['$get']>>,
) {
  return ['volumes', '/volumes/:id', toValue(args)] as const
}

export function getVolumesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getVolumesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>>,
) {
  return ['volumes', '/volumes/:id/actions', toValue(args)] as const
}

export function getVolumesIdActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesIdActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':id'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVolumesIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.volumes)[':id']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesIdActionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':id']['actions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesIdActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':id'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.volumes)[':id']['actions']['change_protection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.volumes)[':id']['actions']['change_protection']['$post']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>
  >,
) {
  return ['volumes', '/volumes/:id/actions/:action_id', toValue(args)] as const
}

export function getVolumesIdActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVolumesIdActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.volumes[':id'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVolumesIdActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.volumes)[':id']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesIdActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVolumesIdActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.volumes[':id'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
) {
  return ['zones', '/zones', toValue(args)] as const
}

export function getZonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useZones<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
          ReturnType<typeof getZonesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostZonesMutationKey() {
  return ['zones', '/zones', 'POST'] as const
}

export function getPostZonesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$post>>>>>,
    TError,
    InferRequestType<typeof client.zones.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostZonesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.zones.$post>) {
      return parseResponse(client.zones.$post(args, options))
    },
  })
}

export function usePostZones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.$post>>>>>,
          TError,
          InferRequestType<typeof client.zones.$post>,
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
  const mutationDefaults = getPostZonesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getZonesIdOrNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['$get']>>,
) {
  return ['zones', '/zones/:id_or_name', toValue(args)] as const
}

export function getZonesIdOrNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutZonesIdOrNameMutationKey() {
  return ['zones', '/zones/:id_or_name', 'PUT'] as const
}

export function getPutZonesIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutZonesIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.zones)[':id_or_name']['$put']>) {
      return parseResponse(client.zones[':id_or_name'].$put(args, options))
    },
  })
}

export function usePutZonesIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.zones)[':id_or_name']['$put']>,
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
  const mutationDefaults = getPutZonesIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteZonesIdOrNameMutationKey() {
  return ['zones', '/zones/:id_or_name', 'DELETE'] as const
}

export function getDeleteZonesIdOrNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteZonesIdOrNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.zones)[':id_or_name']['$delete']>) {
      return parseResponse(client.zones[':id_or_name'].$delete(args, options))
    },
  })
}

export function useDeleteZonesIdOrName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.zones)[':id_or_name']['$delete']>,
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
  const mutationDefaults = getDeleteZonesIdOrNameMutationOptions<TError, TOnMutateResult>(
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

export function getZonesIdOrNameZonefileQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>
  >,
) {
  return ['zones', '/zones/:id_or_name/zonefile', toValue(args)] as const
}

export function getZonesIdOrNameZonefileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameZonefileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].zonefile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrNameZonefile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameZonefileQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':id_or_name']['zonefile']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameZonefileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameZonefileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].zonefile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.actions.$get>>,
) {
  return ['zones', '/zones/actions', toValue(args)] as const
}

export function getZonesActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.actions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.zones.actions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.actions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.actions.$get>>>>
          >,
          ReturnType<typeof getZonesActionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.zones.actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getZonesActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesActionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones.actions)[':id']['$get']>>,
) {
  return ['zones', '/zones/actions/:id', toValue(args)] as const
}

export function getZonesActionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones.actions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesActionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones.actions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.zones.actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones.actions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones.actions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones.actions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesActionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.zones.actions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesActionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesActionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones.actions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesIdOrNameActionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['actions']['$get']>>,
) {
  return ['zones', '/zones/:id_or_name/actions', toValue(args)] as const
}

export function getZonesIdOrNameActionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['actions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameActionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].actions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrNameActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['actions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameActionsQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameActionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameActionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].actions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getZonesIdOrNameActionsActionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>
  >,
) {
  return ['zones', '/zones/:id_or_name/actions/:action_id', toValue(args)] as const
}

export function getZonesIdOrNameActionsActionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameActionsActionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].actions[':action_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrNameActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>
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
                  ReturnType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameActionsActionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':id_or_name']['actions'][':action_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameActionsActionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameActionsActionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].actions[':action_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostZonesIdOrNameActionsChangePrimaryNameserversMutationKey() {
  return ['zones', '/zones/:id_or_name/actions/change_primary_nameservers', 'POST'] as const
}

export function getPostZonesIdOrNameActionsChangePrimaryNameserversMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['actions']['change_primary_nameservers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['actions']['change_primary_nameservers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameActionsChangePrimaryNameserversMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['actions']['change_primary_nameservers']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].actions.change_primary_nameservers.$post(args, options),
      )
    },
  })
}

export function usePostZonesIdOrNameActionsChangePrimaryNameservers<
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
                    (typeof client.zones)[':id_or_name']['actions']['change_primary_nameservers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['actions']['change_primary_nameservers']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameActionsChangePrimaryNameserversMutationOptions<
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

export function getPostZonesIdOrNameActionsChangeProtectionMutationKey() {
  return ['zones', '/zones/:id_or_name/actions/change_protection', 'POST'] as const
}

export function getPostZonesIdOrNameActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['actions']['change_protection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['actions']['change_protection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].actions.change_protection.$post(args, options),
      )
    },
  })
}

export function usePostZonesIdOrNameActionsChangeProtection<
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
                    (typeof client.zones)[':id_or_name']['actions']['change_protection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['actions']['change_protection']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameActionsChangeProtectionMutationOptions<
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

export function getPostZonesIdOrNameActionsChangeTtlMutationKey() {
  return ['zones', '/zones/:id_or_name/actions/change_ttl', 'POST'] as const
}

export function getPostZonesIdOrNameActionsChangeTtlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.zones)[':id_or_name']['actions']['change_ttl']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['actions']['change_ttl']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameActionsChangeTtlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['actions']['change_ttl']['$post']
      >,
    ) {
      return parseResponse(client.zones[':id_or_name'].actions.change_ttl.$post(args, options))
    },
  })
}

export function usePostZonesIdOrNameActionsChangeTtl<
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
                  ReturnType<(typeof client.zones)[':id_or_name']['actions']['change_ttl']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.zones)[':id_or_name']['actions']['change_ttl']['$post']>,
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
  const mutationDefaults = getPostZonesIdOrNameActionsChangeTtlMutationOptions<
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

export function getPostZonesIdOrNameActionsImportZonefileMutationKey() {
  return ['zones', '/zones/:id_or_name/actions/import_zonefile', 'POST'] as const
}

export function getPostZonesIdOrNameActionsImportZonefileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.zones)[':id_or_name']['actions']['import_zonefile']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['actions']['import_zonefile']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameActionsImportZonefileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['actions']['import_zonefile']['$post']
      >,
    ) {
      return parseResponse(client.zones[':id_or_name'].actions.import_zonefile.$post(args, options))
    },
  })
}

export function usePostZonesIdOrNameActionsImportZonefile<
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
                    (typeof client.zones)[':id_or_name']['actions']['import_zonefile']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['actions']['import_zonefile']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameActionsImportZonefileMutationOptions<
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

export function getZonesIdOrNameRrsetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>,
) {
  return ['zones', '/zones/:id_or_name/rrsets', toValue(args)] as const
}

export function getZonesIdOrNameRrsetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameRrsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrNameRrsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameRrsetsQueryKey>
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
          Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameRrsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameRrsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].rrsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostZonesIdOrNameRrsetsMutationKey() {
  return ['zones', '/zones/:id_or_name/rrsets', 'POST'] as const
}

export function getPostZonesIdOrNameRrsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$post']>,
    ) {
      return parseResponse(client.zones[':id_or_name'].rrsets.$post(args, options))
    },
  })
}

export function usePostZonesIdOrNameRrsets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.zones)[':id_or_name']['rrsets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.zones)[':id_or_name']['rrsets']['$post']>,
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
  const mutationDefaults = getPostZonesIdOrNameRrsetsMutationOptions<TError, TOnMutateResult>(
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

export function getZonesIdOrNameRrsetsRrNameRrTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']>
  >,
) {
  return ['zones', '/zones/:id_or_name/rrsets/:rr_name/:rr_type', toValue(args)] as const
}

export function getZonesIdOrNameRrsetsRrNameRrTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getZonesIdOrNameRrsetsRrNameRrTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useZonesIdOrNameRrsetsRrNameRrType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']>
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getZonesIdOrNameRrsetsRrNameRrTypeQueryKey>
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
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getZonesIdOrNameRrsetsRrNameRrTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getZonesIdOrNameRrsetsRrNameRrTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutZonesIdOrNameRrsetsRrNameRrTypeMutationKey() {
  return ['zones', '/zones/:id_or_name/rrsets/:rr_name/:rr_type', 'PUT'] as const
}

export function getPutZonesIdOrNameRrsetsRrNameRrTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutZonesIdOrNameRrsetsRrNameRrTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$put']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].$put(args, options),
      )
    },
  })
}

export function usePutZonesIdOrNameRrsetsRrNameRrType<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$put']
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
  const mutationDefaults = getPutZonesIdOrNameRrsetsRrNameRrTypeMutationOptions<
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

export function getDeleteZonesIdOrNameRrsetsRrNameRrTypeMutationKey() {
  return ['zones', '/zones/:id_or_name/rrsets/:rr_name/:rr_type', 'DELETE'] as const
}

export function getDeleteZonesIdOrNameRrsetsRrNameRrTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteZonesIdOrNameRrsetsRrNameRrTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$delete']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].$delete(args, options),
      )
    },
  })
}

export function useDeleteZonesIdOrNameRrsetsRrNameRrType<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['$delete']
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
  const mutationDefaults = getDeleteZonesIdOrNameRrsetsRrNameRrTypeMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/change_protection',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_protection']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_protection']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_protection']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.change_protection.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtection<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_protection']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_protection']['$post']
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
    getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeProtectionMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/change_ttl',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_ttl']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_ttl']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_ttl']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.change_ttl.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtl<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_ttl']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['change_ttl']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameRrsetsRrNameRrTypeActionsChangeTtlMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/set_records',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['set_records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['set_records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['set_records']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.set_records.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecords<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['set_records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['set_records']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameRrsetsRrNameRrTypeActionsSetRecordsMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/add_records',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['add_records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['add_records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['add_records']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.add_records.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecords<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['add_records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['add_records']['$post']
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
  const mutationDefaults = getPostZonesIdOrNameRrsetsRrNameRrTypeActionsAddRecordsMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/remove_records',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['remove_records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['remove_records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['remove_records']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.remove_records.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecords<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['remove_records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['remove_records']['$post']
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
    getPostZonesIdOrNameRrsetsRrNameRrTypeActionsRemoveRecordsMutationOptions<
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

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsMutationKey() {
  return [
    'zones',
    '/zones/:id_or_name/rrsets/:rr_name/:rr_type/actions/update_records',
    'POST',
  ] as const
}

export function getPostZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['update_records']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['update_records']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['update_records']['$post']
      >,
    ) {
      return parseResponse(
        client.zones[':id_or_name'].rrsets[':rr_name'][':rr_type'].actions.update_records.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecords<
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
                    (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['update_records']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.zones)[':id_or_name']['rrsets'][':rr_name'][':rr_type']['actions']['update_records']['$post']
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
    getPostZonesIdOrNameRrsetsRrNameRrTypeActionsUpdateRecordsMutationOptions<
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

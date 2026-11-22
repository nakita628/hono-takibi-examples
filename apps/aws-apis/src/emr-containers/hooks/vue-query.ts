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

export function getJobtemplatesKey() {
  return ['jobtemplates'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getVirtualclustersKey() {
  return ['virtualclusters'] as const
}

export function getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId',
    keyArgs,
  ] as const
}

export function getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclustersVirtualClusterIdJobrunsJobRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey>
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
              (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdMutationKey() {
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId',
    'DELETE',
  ] as const
}

export function getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
      >,
    ) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVirtualclustersVirtualClusterIdJobrunsJobRunId<
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$delete']
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
  const mutationDefaults = getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdMutationOptions<
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

export function getJobtemplatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobtemplates.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobtemplates', '/jobtemplates', keyArgs] as const
}

export function getJobtemplatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobtemplates.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobtemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobtemplates.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobtemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobtemplates.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
          >,
          ReturnType<typeof getJobtemplatesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobtemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobtemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobtemplates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobtemplatesMutationKey() {
  return ['jobtemplates', '/jobtemplates', 'POST'] as const
}

export function getPostJobtemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.jobtemplates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobtemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobtemplates.$post>) {
      return parseResponse(client.jobtemplates.$post(args, options))
    },
  })
}

export function usePostJobtemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.jobtemplates.$post>,
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
  const mutationDefaults = getPostJobtemplatesMutationOptions<TError, TOnMutateResult>(
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

export function getVirtualclustersVirtualClusterIdEndpointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/endpoints', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdEndpointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersVirtualClusterIdEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclustersVirtualClusterIdEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualclustersVirtualClusterIdEndpointsQueryKey>
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
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersVirtualClusterIdEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersVirtualClusterIdEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualclustersVirtualClusterIdEndpointsMutationKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/endpoints', 'POST'] as const
}

export function getPostVirtualclustersVirtualClusterIdEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualclustersVirtualClusterIdEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']
      >,
    ) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints.$post(args, options),
      )
    },
  })
}

export function usePostVirtualclustersVirtualClusterIdEndpoints<
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$post']
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
  const mutationDefaults = getPostVirtualclustersVirtualClusterIdEndpointsMutationOptions<
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

export function getVirtualclustersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualclusters.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['virtualclusters', '/virtualclusters', keyArgs] as const
}

export function getVirtualclustersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualclusters.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.virtualclusters.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>
            >
          >,
          ReturnType<typeof getVirtualclustersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualclustersMutationKey() {
  return ['virtualclusters', '/virtualclusters', 'POST'] as const
}

export function getPostVirtualclustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.virtualclusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualclustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.virtualclusters.$post>) {
      return parseResponse(client.virtualclusters.$post(args, options))
    },
  })
}

export function usePostVirtualclusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.virtualclusters.$post>,
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
  const mutationDefaults = getPostVirtualclustersMutationOptions<TError, TOnMutateResult>(
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

export function getJobtemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobtemplates', '/jobtemplates/:templateId', keyArgs] as const
}

export function getJobtemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobtemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobtemplates[':templateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobtemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobtemplatesTemplateIdQueryKey>
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
          Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobtemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobtemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobtemplates[':templateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteJobtemplatesTemplateIdMutationKey() {
  return ['jobtemplates', '/jobtemplates/:templateId', 'DELETE'] as const
}

export function getDeleteJobtemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobtemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']>,
    ) {
      return parseResponse(client.jobtemplates[':templateId'].$delete(args, options))
    },
  })
}

export function useDeleteJobtemplatesTemplateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobtemplates)[':templateId']['$delete']>,
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
  const mutationDefaults = getDeleteJobtemplatesTemplateIdMutationOptions<TError, TOnMutateResult>(
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

export function getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId',
    keyArgs,
  ] as const
}

export function getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclustersVirtualClusterIdEndpointsEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey>
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
              (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdMutationKey() {
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId',
    'DELETE',
  ] as const
}

export function getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
      >,
    ) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteVirtualclustersVirtualClusterIdEndpointsEndpointId<
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
                    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$delete']
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
    getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdMutationOptions<
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

export function getVirtualclustersVirtualClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['virtualclusters', '/virtualclusters/:virtualClusterId', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersVirtualClusterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclustersVirtualClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVirtualclustersVirtualClusterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersVirtualClusterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersVirtualClusterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters[':virtualClusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVirtualclustersVirtualClusterIdMutationKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId', 'DELETE'] as const
}

export function getDeleteVirtualclustersVirtualClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVirtualclustersVirtualClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>,
    ) {
      return parseResponse(client.virtualclusters[':virtualClusterId'].$delete(args, options))
    },
  })
}

export function useDeleteVirtualclustersVirtualClusterId<
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
                Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$delete']>,
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
  const mutationDefaults = getDeleteVirtualclustersVirtualClusterIdMutationOptions<
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

export function getVirtualclustersVirtualClusterIdJobrunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/jobruns', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdJobrunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVirtualclustersVirtualClusterIdJobrunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].jobruns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVirtualclustersVirtualClusterIdJobruns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getVirtualclustersVirtualClusterIdJobrunsQueryKey>
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
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersVirtualClusterIdJobrunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVirtualclustersVirtualClusterIdJobrunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.virtualclusters[':virtualClusterId'].jobruns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVirtualclustersVirtualClusterIdJobrunsMutationKey() {
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/jobruns', 'POST'] as const
}

export function getPostVirtualclustersVirtualClusterIdJobrunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVirtualclustersVirtualClusterIdJobrunsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']
      >,
    ) {
      return parseResponse(client.virtualclusters[':virtualClusterId'].jobruns.$post(args, options))
    },
  })
}

export function usePostVirtualclustersVirtualClusterIdJobruns<
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
                    (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']
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
  const mutationDefaults = getPostVirtualclustersVirtualClusterIdJobrunsMutationOptions<
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

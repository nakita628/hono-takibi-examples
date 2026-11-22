import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/jobruns/:jobRunId',
    keyArgs,
  ] as const
}

export function getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].jobruns[':jobRunId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualclustersVirtualClusterIdJobrunsJobRunId<
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
  args: () => InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns'][':jobRunId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualclustersVirtualClusterIdJobrunsJobRunIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVirtualclustersVirtualClusterIdJobrunsJobRunId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualclustersVirtualClusterIdJobrunsJobRunIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobtemplatesQueryKey(args: InferRequestType<typeof client.jobtemplates.$get>) {
  const { header: _, ...keyArgs } = args
  return ['jobtemplates', '/jobtemplates', keyArgs] as const
}

export function getJobtemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.jobtemplates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobtemplatesQueryKey>
  >({
    queryKey: getJobtemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobtemplates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectJobtemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.jobtemplates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getJobtemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getJobtemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostJobtemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobtemplates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.jobtemplates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostJobtemplatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualclustersVirtualClusterIdEndpointsQueryKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/endpoints', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdEndpointsQueryOptions<
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
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualclustersVirtualClusterIdEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualclustersVirtualClusterIdEndpoints<
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
  args: () => InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getVirtualclustersVirtualClusterIdEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualclustersVirtualClusterIdEndpointsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualclustersVirtualClusterIdEndpoints<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualclustersVirtualClusterIdEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualclustersQueryKey(
  args: InferRequestType<typeof client.virtualclusters.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters', keyArgs] as const
}

export function getVirtualclustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.virtualclusters.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVirtualclustersQueryKey>
  >({
    queryKey: getVirtualclustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVirtualclusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.virtualclusters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVirtualclustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVirtualclustersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVirtualclusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.virtualclusters.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.virtualclusters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualclustersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getJobtemplatesTemplateIdQueryKey(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['jobtemplates', '/jobtemplates/:templateId', keyArgs] as const
}

export function getJobtemplatesTemplateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getJobtemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.jobtemplates[':templateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectJobtemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobtemplates)[':templateId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.jobtemplates)[':templateId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getJobtemplatesTemplateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteJobtemplatesTemplateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteJobtemplatesTemplateIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'virtualclusters',
    '/virtualclusters/:virtualClusterId/endpoints/:endpointId',
    keyArgs,
  ] as const
}

export function getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].endpoints[':endpointId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualclustersVirtualClusterIdEndpointsEndpointId<
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
  args: () => InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['endpoints'][':endpointId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualclustersVirtualClusterIdEndpointsEndpointIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVirtualclustersVirtualClusterIdEndpointsEndpointId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteVirtualclustersVirtualClusterIdEndpointsEndpointIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualclustersVirtualClusterIdQueryKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualclustersVirtualClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualclustersVirtualClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualclustersVirtualClusterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVirtualclustersVirtualClusterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVirtualclustersVirtualClusterIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVirtualclustersVirtualClusterIdJobrunsQueryKey(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['virtualclusters', '/virtualclusters/:virtualClusterId/jobruns', keyArgs] as const
}

export function getVirtualclustersVirtualClusterIdJobrunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVirtualclustersVirtualClusterIdJobrunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.virtualclusters[':virtualClusterId'].jobruns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVirtualclustersVirtualClusterIdJobruns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVirtualclustersVirtualClusterIdJobrunsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostVirtualclustersVirtualClusterIdJobruns<
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
                ReturnType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.virtualclusters)[':virtualClusterId']['jobruns']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVirtualclustersVirtualClusterIdJobrunsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

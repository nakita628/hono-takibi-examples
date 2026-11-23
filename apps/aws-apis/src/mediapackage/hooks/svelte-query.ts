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

export function getChannelsKey() {
  return ['channels'] as const
}

export function getHarvestJobsKey() {
  return ['harvest_jobs'] as const
}

export function getOriginEndpointsKey() {
  return ['origin_endpoints'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutChannelsIdConfigureLogsMutationKey() {
  return ['channels', '/channels/:id/configure_logs', 'PUT'] as const
}

export function getPutChannelsIdConfigureLogsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':id']['configure_logs']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':id']['configure_logs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsIdConfigureLogsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':id']['configure_logs']['$put']>,
    ) {
      return parseResponse(client.channels[':id'].configure_logs.$put(args, options))
    },
  })
}

export function createPutChannelsIdConfigureLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':id']['configure_logs']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':id']['configure_logs']['$put']>,
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
    const mutationDefaults = getPutChannelsIdConfigureLogsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChannelsQueryKey(args: InferRequestType<typeof client.channels.$get>) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels', keyArgs] as const
}

export function getChannelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.channels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChannelsQueryKey>
  >({
    queryKey: getChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.channels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChannelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostChannelsMutationKey() {
  return ['channels', '/channels', 'POST'] as const
}

export function getPostChannelsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>>,
    TError,
    InferRequestType<typeof client.channels.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostChannelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.channels.$post>) {
      return parseResponse(client.channels.$post(args, options))
    },
  })
}

export function createPostChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.channels.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.channels.$post>,
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
    const mutationDefaults = getPostChannelsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHarvestJobsQueryKey(args: InferRequestType<typeof client.harvest_jobs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['harvest_jobs', '/harvest_jobs', keyArgs] as const
}

export function getHarvestJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.harvest_jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHarvestJobsQueryKey>
  >({
    queryKey: getHarvestJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.harvest_jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHarvestJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.harvest_jobs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getHarvestJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHarvestJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostHarvestJobsMutationKey() {
  return ['harvest_jobs', '/harvest_jobs', 'POST'] as const
}

export function getPostHarvestJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.harvest_jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostHarvestJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.harvest_jobs.$post>) {
      return parseResponse(client.harvest_jobs.$post(args, options))
    },
  })
}

export function createPostHarvestJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.harvest_jobs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.harvest_jobs.$post>,
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
    const mutationDefaults = getPostHarvestJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOriginEndpointsQueryKey(
  args: InferRequestType<typeof client.origin_endpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['origin_endpoints', '/origin_endpoints', keyArgs] as const
}

export function getOriginEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.origin_endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOriginEndpointsQueryKey>
  >({
    queryKey: getOriginEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.origin_endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOriginEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.origin_endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOriginEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOriginEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostOriginEndpointsMutationKey() {
  return ['origin_endpoints', '/origin_endpoints', 'POST'] as const
}

export function getPostOriginEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.origin_endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOriginEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.origin_endpoints.$post>) {
      return parseResponse(client.origin_endpoints.$post(args, options))
    },
  })
}

export function createPostOriginEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.origin_endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.origin_endpoints.$post>,
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
    const mutationDefaults = getPostOriginEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getChannelsIdQueryKey(
  args: InferRequestType<(typeof client.channels)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['channels', '/channels/:id', keyArgs] as const
}

export function getChannelsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.channels)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getChannelsIdQueryKey>
  >({
    queryKey: getChannelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.channels[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createChannelsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.channels)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChannelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChannelsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutChannelsIdMutationKey() {
  return ['channels', '/channels/:id', 'PUT'] as const
}

export function getPutChannelsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.channels)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':id']['$put']>) {
      return parseResponse(client.channels[':id'].$put(args, options))
    },
  })
}

export function createPutChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':id']['$put']>,
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
    const mutationDefaults = getPutChannelsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteChannelsIdMutationKey() {
  return ['channels', '/channels/:id', 'DELETE'] as const
}

export function getDeleteChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChannelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.channels)[':id']['$delete']>) {
      return parseResponse(client.channels[':id'].$delete(args, options))
    },
  })
}

export function createDeleteChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.channels)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteChannelsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOriginEndpointsIdQueryKey(
  args: InferRequestType<(typeof client.origin_endpoints)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['origin_endpoints', '/origin_endpoints/:id', keyArgs] as const
}

export function getOriginEndpointsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.origin_endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOriginEndpointsIdQueryKey>
  >({
    queryKey: getOriginEndpointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.origin_endpoints[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOriginEndpointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.origin_endpoints)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOriginEndpointsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOriginEndpointsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutOriginEndpointsIdMutationKey() {
  return ['origin_endpoints', '/origin_endpoints/:id', 'PUT'] as const
}

export function getPutOriginEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.origin_endpoints)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOriginEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.origin_endpoints)[':id']['$put']>) {
      return parseResponse(client.origin_endpoints[':id'].$put(args, options))
    },
  })
}

export function createPutOriginEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.origin_endpoints)[':id']['$put']>,
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
    const mutationDefaults = getPutOriginEndpointsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOriginEndpointsIdMutationKey() {
  return ['origin_endpoints', '/origin_endpoints/:id', 'DELETE'] as const
}

export function getDeleteOriginEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.origin_endpoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOriginEndpointsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.origin_endpoints)[':id']['$delete']>) {
      return parseResponse(client.origin_endpoints[':id'].$delete(args, options))
    },
  })
}

export function createDeleteOriginEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.origin_endpoints)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.origin_endpoints)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteOriginEndpointsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getHarvestJobsIdQueryKey(
  args: InferRequestType<(typeof client.harvest_jobs)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['harvest_jobs', '/harvest_jobs/:id', keyArgs] as const
}

export function getHarvestJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.harvest_jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.harvest_jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.harvest_jobs)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHarvestJobsIdQueryKey>
  >({
    queryKey: getHarvestJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.harvest_jobs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHarvestJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.harvest_jobs)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.harvest_jobs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.harvest_jobs)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHarvestJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHarvestJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resource-arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutChannelsIdCredentialsMutationKey() {
  return ['channels', '/channels/:id/credentials', 'PUT'] as const
}

export function getPutChannelsIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.channels)[':id']['credentials']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.channels)[':id']['credentials']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.channels)[':id']['credentials']['$put']>,
    ) {
      return parseResponse(client.channels[':id'].credentials.$put(args, options))
    },
  })
}

export function createPutChannelsIdCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.channels)[':id']['credentials']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.channels)[':id']['credentials']['$put']>,
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
    const mutationDefaults = getPutChannelsIdCredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutChannelsIdIngestEndpointsIngestEndpointIdCredentialsMutationKey() {
  return [
    'channels',
    '/channels/:id/ingest_endpoints/:ingest_endpoint_id/credentials',
    'PUT',
  ] as const
}

export function getPutChannelsIdIngestEndpointsIngestEndpointIdCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutChannelsIdIngestEndpointsIngestEndpointIdCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
      >,
    ) {
      return parseResponse(
        client.channels[':id'].ingest_endpoints[':ingest_endpoint_id'].credentials.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutChannelsIdIngestEndpointsIngestEndpointIdCredentials<
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
                  (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.channels)[':id']['ingest_endpoints'][':ingest_endpoint_id']['credentials']['$put']
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
      getPutChannelsIdIngestEndpointsIngestEndpointIdCredentialsMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

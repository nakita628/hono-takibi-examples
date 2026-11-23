import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EventsQueryKey(args: InferRequestType<typeof client.v1.events.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/events', keyArgs] as const
}

export function getV1EventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EventsQueryKey>
  >({
    queryKey: getV1EventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.events.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1EventsQueryKey>
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
    return { ...getV1EventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1EventsInternalIDQueryKey(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/events/:internalID', keyArgs] as const
}

export function getV1EventsInternalIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsInternalIDQueryKey>
  >({
    queryKey: getV1EventsInternalIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events[':internalID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventsInternalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.events)[':internalID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1EventsInternalIDQueryKey>
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
    return { ...getV1EventsInternalIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1EventsInternalIDRunsQueryKey(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/events/:internalID/runs', keyArgs] as const
}

export function getV1EventsInternalIDRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsInternalIDRunsQueryKey>
  >({
    queryKey: getV1EventsInternalIDRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.events[':internalID'].runs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EventsInternalIDRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1EventsInternalIDRunsQueryKey>
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
      ...getV1EventsInternalIDRunsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1RunsRunIDQueryKey(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/runs/:runID', keyArgs] as const
}

export function getV1RunsRunIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RunsRunIDQueryKey>
  >({
    queryKey: getV1RunsRunIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.runs[':runID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1RunsRunID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.runs)[':runID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1RunsRunIDQueryKey>
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
    return { ...getV1RunsRunIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1RunsRunIDMutationKey() {
  return ['v1', '/v1/runs/:runID', 'DELETE'] as const
}

export function getDeleteV1RunsRunIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.runs)[':runID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1RunsRunIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.runs)[':runID']['$delete']>) {
      return parseResponse(client.v1.runs[':runID'].$delete(args, options))
    },
  })
}

export function createDeleteV1RunsRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.runs)[':runID']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1RunsRunIDMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1RunsRunIDJobsQueryKey(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/runs/:runID/jobs', keyArgs] as const
}

export function getV1RunsRunIDJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RunsRunIDJobsQueryKey>
  >({
    queryKey: getV1RunsRunIDJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.runs[':runID'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1RunsRunIDJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1RunsRunIDJobsQueryKey>
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
    return { ...getV1RunsRunIDJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1SignalsMutationKey() {
  return ['v1', '/v1/signals', 'POST'] as const
}

export function getPostV1SignalsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signals.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.signals.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SignalsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.signals.$post>) {
      return parseResponse(client.v1.signals.$post(args, options))
    },
  })
}

export function createPostV1Signals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.signals.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SignalsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CancellationsQueryKey(
  args: InferRequestType<typeof client.v1.cancellations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/cancellations', keyArgs] as const
}

export function getV1CancellationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.cancellations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CancellationsQueryKey>
  >({
    queryKey: getV1CancellationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.cancellations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Cancellations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.cancellations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CancellationsQueryKey>
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
    return { ...getV1CancellationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CancellationsMutationKey() {
  return ['v1', '/v1/cancellations', 'POST'] as const
}

export function getPostV1CancellationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.cancellations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CancellationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.cancellations.$post>) {
      return parseResponse(client.v1.cancellations.$post(args, options))
    },
  })
}

export function createPostV1Cancellations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.cancellations.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1CancellationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1CancellationsIdMutationKey() {
  return ['v1', '/v1/cancellations/:id', 'DELETE'] as const
}

export function getDeleteV1CancellationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.cancellations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.cancellations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1CancellationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.cancellations)[':id']['$delete']>) {
      return parseResponse(client.v1.cancellations[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1CancellationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.cancellations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.cancellations)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1CancellationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WebhooksQueryKey() {
  return ['v1', '/v1/webhooks'] as const
}

export function getV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >({
    queryKey: getV1WebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1WebhooksQueryKey>
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
    return { ...getV1WebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostV1WebhooksMutationKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function getPostV1WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webhooks.$post>) {
      return parseResponse(client.v1.webhooks.$post(args, options))
    },
  })
}

export function createPostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1WebhooksIdQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function getV1WebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >({
    queryKey: getV1WebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1WebhooksIdQueryKey>
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
    return { ...getV1WebhooksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutV1WebhooksIdMutationKey() {
  return ['v1', '/v1/webhooks/:id', 'PUT'] as const
}

export function getPutV1WebhooksIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>) {
      return parseResponse(client.v1.webhooks[':id'].$put(args, options))
    },
  })
}

export function createPutV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteV1WebhooksIdMutationKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function getDeleteV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1WebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>) {
      return parseResponse(client.v1.webhooks[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

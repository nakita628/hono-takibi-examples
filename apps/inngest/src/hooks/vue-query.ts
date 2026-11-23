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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/events', keyArgs] as const
}

export function getV1EventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Events<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>
          >,
          ReturnType<typeof getV1EventsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsInternalIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':internalID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/events/:internalID', keyArgs] as const
}

export function getV1EventsInternalIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':internalID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsInternalIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events[':internalID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsInternalID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.events)[':internalID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EventsInternalIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.events)[':internalID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsInternalIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsInternalIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events[':internalID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1EventsInternalIDRunsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/events/:internalID/runs', keyArgs] as const
}

export function getV1EventsInternalIDRunsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EventsInternalIDRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.events[':internalID'].runs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EventsInternalIDRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.events)[':internalID']['runs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EventsInternalIDRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.events)[':internalID']['runs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EventsInternalIDRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EventsInternalIDRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.events[':internalID'].runs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1RunsRunIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/runs/:runID', keyArgs] as const
}

export function getV1RunsRunIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RunsRunIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.runs[':runID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RunsRunID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>
            >
          >,
          ReturnType<typeof getV1RunsRunIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RunsRunIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RunsRunIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.runs[':runID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1RunsRunID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1RunsRunIDMutationOptions<TError, TOnMutateResult>(
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

export function getV1RunsRunIDJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/runs/:runID/jobs', keyArgs] as const
}

export function getV1RunsRunIDJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1RunsRunIDJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.runs[':runID'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1RunsRunIDJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1RunsRunIDJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.runs)[':runID']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1RunsRunIDJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1RunsRunIDJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.runs[':runID'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Signals<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.signals.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.signals.$post>,
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
  const mutationDefaults = getPostV1SignalsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1CancellationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cancellations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/cancellations', keyArgs] as const
}

export function getV1CancellationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cancellations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1CancellationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.cancellations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Cancellations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.cancellations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>
            >
          >,
          ReturnType<typeof getV1CancellationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1CancellationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1CancellationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.cancellations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Cancellations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.cancellations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.cancellations.$post>,
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
  const mutationDefaults = getPostV1CancellationsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV1CancellationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1CancellationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1WebhooksQueryKey() {
  return ['v1', '/v1/webhooks'] as const
}

export function getV1WebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1WebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          ReturnType<typeof getV1WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1WebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
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
  const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
) {
  return ['v1', '/v1/webhooks/:id', toValue(args)] as const
}

export function getV1WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1WebhooksIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':id']['$put']>,
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
  const mutationDefaults = getPutV1WebhooksIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteV1WebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1WebhooksIdMutationOptions<TError, TOnMutateResult>(
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

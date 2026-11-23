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

export function getAccountKey() {
  return ['account'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getAccountQueryKey() {
  return ['account', '/account'] as const
}

export function getAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  return ['jobs', '/jobs', toValue(args)] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
          TError,
          InferRequestType<typeof client.jobs.$post>,
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
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
) {
  return ['jobs', '/jobs/:id', toValue(args)] as const
}

export function getJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteJobsIdMutationKey() {
  return ['jobs', '/jobs/:id', 'DELETE'] as const
}

export function getDeleteJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['$delete']>) {
      return parseResponse(client.jobs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsIdCaptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['captions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:id/captions', keyArgs] as const
}

export function getJobsIdCaptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['captions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdCaptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].captions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsIdCaptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['captions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['captions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['captions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['captions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsIdCaptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['captions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdCaptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdCaptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].captions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsIdTranscriptQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['transcript']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['jobs', '/jobs/:id/transcript', keyArgs] as const
}

export function getJobsIdTranscriptQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['transcript']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdTranscriptQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].transcript.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJobsIdTranscript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['transcript']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['transcript']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['transcript']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['transcript']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJobsIdTranscriptQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['transcript']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdTranscriptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdTranscriptQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].transcript.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

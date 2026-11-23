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

export function getThingsKey() {
  return ['things'] as const
}

export function getThingsThingNameJobsJobIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function getThingsThingNameJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostThingsThingNameJobsJobIdMutationKey() {
  return ['things', '/things/:thingName/jobs/:jobId', 'POST'] as const
}

export function getPostThingsThingNameJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostThingsThingNameJobsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>,
    ) {
      return parseResponse(client.things[':thingName'].jobs[':jobId'].$post(args, options))
    },
  })
}

export function usePostThingsThingNameJobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>,
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
  const mutationDefaults = getPostThingsThingNameJobsJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getThingsThingNameJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function getThingsThingNameJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getThingsThingNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.things[':thingName'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useThingsThingNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getThingsThingNameJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getThingsThingNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getThingsThingNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.things[':thingName'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutThingsThingNameJobsNextMutationKey() {
  return ['things', '/things/:thingName/jobs/$next', 'PUT'] as const
}

export function getPutThingsThingNameJobsNextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutThingsThingNameJobsNextMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>,
    ) {
      return parseResponse(client.things[':thingName'].jobs.$next.$put(args, options))
    },
  })
}

export function usePutThingsThingNameJobsNext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>,
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
  const mutationDefaults = getPutThingsThingNameJobsNextMutationOptions<TError, TOnMutateResult>(
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

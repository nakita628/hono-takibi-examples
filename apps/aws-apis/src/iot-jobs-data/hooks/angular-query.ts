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

export function getThingsKey() {
  return ['things'] as const
}

export function getThingsThingNameJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function getThingsThingNameJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThingsThingNameJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getThingsThingNameJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostThingsThingNameJobsJobId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostThingsThingNameJobsJobIdMutationOptions<
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

export function getThingsThingNameJobsQueryKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function getThingsThingNameJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getThingsThingNameJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.things[':thingName'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectThingsThingNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getThingsThingNameJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutThingsThingNameJobsNext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutThingsThingNameJobsNextMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

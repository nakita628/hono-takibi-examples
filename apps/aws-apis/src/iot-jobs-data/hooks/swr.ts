import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getThingsKey() {
  return ['things'] as const
}

export function getGetThingsThingNameJobsJobIdKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs/:jobId', keyArgs] as const
}

export function useGetThingsThingNameJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostThingsThingNameJobsJobIdKey() {
  return ['things', '/things/:thingName/jobs/:jobId', 'POST'] as const
}

export function usePostThingsThingNameJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostThingsThingNameJobsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>
        },
      ) => parseResponse(client.things[':thingName'].jobs[':jobId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetThingsThingNameJobsKey(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['things', '/things/:thingName/jobs', keyArgs] as const
}

export function useGetThingsThingNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetThingsThingNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetThingsThingNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.things[':thingName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutThingsThingNameJobsNextKey() {
  return ['things', '/things/:thingName/jobs/$next', 'PUT'] as const
}

export function usePutThingsThingNameJobsNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutThingsThingNameJobsNextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']> },
      ) => parseResponse(client.things[':thingName'].jobs.$next.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

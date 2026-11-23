import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2alpha1Key() {
  return ['v2alpha1'] as const
}

export function getPostV2alpha1PipelinesRunKey() {
  return ['v2alpha1', '/v2alpha1/pipelines:run', 'POST'] as const
}

export function usePostV2alpha1PipelinesRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1)['pipelines:run']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alpha1PipelinesRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']> },
      ) => parseResponse(client.v2alpha1['pipelines:run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alpha1WorkersIdCheckInKey() {
  return ['v2alpha1', '/v2alpha1/workers/:id:checkIn', 'POST'] as const
}

export function usePostV2alpha1WorkersIdCheckIn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alpha1WorkersIdCheckInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']> },
      ) => parseResponse(client.v2alpha1.workers[':id:checkIn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2alpha1IdCheckInKey() {
  return ['v2alpha1', '/v2alpha1/:id:checkIn', 'POST'] as const
}

export function usePostV2alpha1IdCheckIn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':id:checkIn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alpha1IdCheckInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']> },
      ) => parseResponse(client.v2alpha1[':id:checkIn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2alpha1NameKey(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
) {
  return ['v2alpha1', '/v2alpha1/:name', args] as const
}

export function useGetV2alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2alpha1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2alpha1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2alpha1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2alpha1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2alpha1NameCancelKey() {
  return ['v2alpha1', '/v2alpha1/:name:cancel', 'POST'] as const
}

export function usePostV2alpha1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2alpha1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v2alpha1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

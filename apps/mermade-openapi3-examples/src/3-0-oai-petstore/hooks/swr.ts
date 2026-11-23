import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPetsKey() {
  return ['pets'] as const
}

export function getGetPetsKey(args: InferRequestType<typeof client.pets.$get>) {
  return ['pets', '/pets', args] as const
}

export function useGetPets<TError = unknown>(
  args: InferRequestType<typeof client.pets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPets<TError = unknown>(
  args: InferRequestType<typeof client.pets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pets.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPetsKey() {
  return ['pets', '/pets', 'POST'] as const
}

export function usePostPets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.pets.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPetsPetIdKey(args: InferRequestType<(typeof client.pets)[':petId']['$get']>) {
  return ['pets', '/pets/:petId', args] as const
}

export function useGetPetsPetId<TError = unknown>(
  args: InferRequestType<(typeof client.pets)[':petId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPetsPetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pets[':petId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPetsPetId<TError = unknown>(
  args: InferRequestType<(typeof client.pets)[':petId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPetsPetIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pets[':petId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

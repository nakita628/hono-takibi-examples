import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getRiddleKey() {
  return ['riddle'] as const
}

export function getGetRiddleKey(args: InferRequestType<typeof client.riddle.$get>) {
  return ['riddle', '/riddle', args] as const
}

export function useGetRiddle<TError = unknown>(
  args: InferRequestType<typeof client.riddle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.riddle.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRiddle<TError = unknown>(
  args: InferRequestType<typeof client.riddle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.riddle.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutRiddleKey() {
  return ['riddle', '/riddle', 'PUT'] as const
}

export function usePutRiddle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.riddle.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRiddleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.riddle.$put> }) =>
        parseResponse(client.riddle.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRiddleKey() {
  return ['riddle', '/riddle', 'POST'] as const
}

export function usePostRiddle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.riddle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRiddleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.riddle.$post> }) =>
        parseResponse(client.riddle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRiddleKey() {
  return ['riddle', '/riddle', 'DELETE'] as const
}

export function useDeleteRiddle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.riddle.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRiddleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.riddle.$delete> }) =>
        parseResponse(client.riddle.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRiddleRandomKey(args: InferRequestType<typeof client.riddle.random.$get>) {
  return ['riddle', '/riddle/random', args] as const
}

export function useGetRiddleRandom<TError = unknown>(
  args: InferRequestType<typeof client.riddle.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riddle.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiddleRandom<TError = unknown>(
  args: InferRequestType<typeof client.riddle.random.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleRandomKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.random.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riddle.random.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRiddleSearchKey(args: InferRequestType<typeof client.riddle.search.$get>) {
  return ['riddle', '/riddle/search', args] as const
}

export function useGetRiddleSearch<TError = unknown>(
  args: InferRequestType<typeof client.riddle.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riddle.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRiddleSearch<TError = unknown>(
  args: InferRequestType<typeof client.riddle.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRiddleSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.riddle.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.riddle.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

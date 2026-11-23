import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPathKey() {
  return ['{Path}'] as const
}

export function getGetPathKey(args: InferRequestType<(typeof client)[':Path']['$get']>) {
  const { header: _, ...keyArgs } = args
  return [':Path', '/:Path', keyArgs] as const
}

export function useGetPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':Path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':Path'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPath<TError = unknown>(
  args: InferRequestType<(typeof client)[':Path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$get']>>>>
      >,
      TError
    >(swrKey, async () => parseResponse(client[':Path'].$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutPathKey() {
  return [':Path', '/:Path', 'PUT'] as const
}

export function usePutPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Path']['$put']> }) =>
        parseResponse(client[':Path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePathKey() {
  return [':Path', '/:Path', 'DELETE'] as const
}

export function useDeletePath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Path']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Path']['$delete']> }) =>
        parseResponse(client[':Path'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadPathKey() {
  return [':Path', '/:Path', 'HEAD'] as const
}

export function useHeadPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':Path']['$head']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':Path']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)[':Path']['$head']> }) =>
        parseResponse(client[':Path'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKey(args: InferRequestType<typeof client.index.$get>) {
  const { header: _, ...keyArgs } = args
  return ['', '/', keyArgs] as const
}

export function useGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGet<TError = unknown>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.index.$get(args, clientOptions)), restSwrOptions),
  }
}

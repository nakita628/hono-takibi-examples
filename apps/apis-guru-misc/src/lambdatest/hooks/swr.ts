import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDevicesKey() {
  return ['devices'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getOsBrowsersKey() {
  return ['os-browsers'] as const
}

export function getProfilesKey() {
  return ['profiles'] as const
}

export function getResolutionsKey() {
  return ['resolutions'] as const
}

export function getStopKey() {
  return ['stop'] as const
}

export function getTestIdKey() {
  return ['{test_id}'] as const
}

export function getPostKey() {
  return ['', '/', 'POST'] as const
}

export function usePost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.index.$post> }) =>
        parseResponse(client.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesKey(args: InferRequestType<typeof client.devices.$get>) {
  return ['devices', '/devices', args] as const
}

export function useGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetLocationsKey() {
  return ['locations', '/locations'] as const
}

export function useGetLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLocations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLocationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.locations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOsBrowsersKey(
  args: InferRequestType<(typeof client)['os-browsers']['$get']>,
) {
  return ['os-browsers', '/os-browsers', args] as const
}

export function useGetOsBrowsers<TError = unknown>(
  args: InferRequestType<(typeof client)['os-browsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOsBrowsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['os-browsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOsBrowsers<TError = unknown>(
  args: InferRequestType<(typeof client)['os-browsers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOsBrowsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['os-browsers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProfilesKey() {
  return ['profiles', '/profiles'] as const
}

export function useGetProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProfiles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProfilesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.profiles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResolutionsKey() {
  return ['resolutions', '/resolutions'] as const
}

export function useGetResolutions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResolutionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resolutions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResolutions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResolutionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resolutions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutStopTestIdKey() {
  return ['stop', '/stop/:test_id', 'PUT'] as const
}

export function usePutStopTestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':test_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.stop)[':test_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutStopTestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.stop)[':test_id']['$put']> },
      ) => parseResponse(client.stop[':test_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestIdKey(args: InferRequestType<(typeof client)[':test_id']['$get']>) {
  return [':test_id', '/:test_id', args] as const
}

export function useGetTestId<TError = unknown>(
  args: InferRequestType<(typeof client)[':test_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':test_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestId<TError = unknown>(
  args: InferRequestType<(typeof client)[':test_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTestIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':test_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTestIdZipKey(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
) {
  return [':test_id', '/:test_id/zip', args] as const
}

export function useGetTestIdZip<TError = unknown>(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTestIdZipKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':test_id'].zip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestIdZip<TError = unknown>(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTestIdZipKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':test_id'].zip.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

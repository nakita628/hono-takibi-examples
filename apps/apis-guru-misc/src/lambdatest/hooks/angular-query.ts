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

export function getPostMutationKey() {
  return ['', '/', 'POST'] as const
}

export function getPostMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
    TError,
    InferRequestType<typeof client.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.index.$post>) {
      return parseResponse(client.index.$post(args, options))
    },
  })
}

export function injectPost<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$post>>>>>,
        TError,
        InferRequestType<typeof client.index.$post>,
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
    const mutationDefaults = getPostMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDevicesQueryKey(args: InferRequestType<typeof client.devices.$get>) {
  return ['devices', '/devices', args] as const
}

export function getDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >({
    queryKey: getDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.devices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLocationsQueryKey() {
  return ['locations', '/locations'] as const
}

export function getLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >({
    queryKey: getLocationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getOsBrowsersQueryKey(
  args: InferRequestType<(typeof client)['os-browsers']['$get']>,
) {
  return ['os-browsers', '/os-browsers', args] as const
}

export function getOsBrowsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['os-browsers']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOsBrowsersQueryKey>
  >({
    queryKey: getOsBrowsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['os-browsers'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOsBrowsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['os-browsers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['os-browsers']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOsBrowsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOsBrowsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProfilesQueryKey() {
  return ['profiles', '/profiles'] as const
}

export function getProfilesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProfilesQueryKey>
  >({
    queryKey: getProfilesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.profiles.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProfiles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.profiles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProfilesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProfilesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getResolutionsQueryKey() {
  return ['resolutions', '/resolutions'] as const
}

export function getResolutionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getResolutionsQueryKey>
  >({
    queryKey: getResolutionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.resolutions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectResolutions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resolutions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResolutionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getResolutionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutStopTestIdMutationKey() {
  return ['stop', '/stop/:test_id', 'PUT'] as const
}

export function getPutStopTestIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':test_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stop)[':test_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutStopTestIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stop)[':test_id']['$put']>) {
      return parseResponse(client.stop[':test_id'].$put(args, options))
    },
  })
}

export function injectPutStopTestId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stop)[':test_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stop)[':test_id']['$put']>,
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
    const mutationDefaults = getPutStopTestIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTestIdQueryKey(args: InferRequestType<(typeof client)[':test_id']['$get']>) {
  return [':test_id', '/:test_id', args] as const
}

export function getTestIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)[':test_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestIdQueryKey>
  >({
    queryKey: getTestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':test_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTestId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':test_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTestIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTestIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTestIdZipQueryKey(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
) {
  return [':test_id', '/:test_id/zip', args] as const
}

export function getTestIdZipQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestIdZipQueryKey>
  >({
    queryKey: getTestIdZipQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':test_id'].zip.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTestIdZip<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':test_id']['zip']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)[':test_id']['zip']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTestIdZipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTestIdZipQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

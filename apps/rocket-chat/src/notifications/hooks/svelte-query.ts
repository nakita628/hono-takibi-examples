import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1BannersIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/banners/:id', keyArgs] as const
}

export function getApiV1BannersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BannersIdQueryKey>
  >({
    queryKey: getApiV1BannersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.banners[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1BannersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BannersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BannersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1BannersQueryKey(args: InferRequestType<typeof client.api.v1.banners.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/banners', keyArgs] as const
}

export function getApiV1BannersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.banners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BannersQueryKey>
  >({
    queryKey: getApiV1BannersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.banners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Banners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.banners.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1BannersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1BannersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1BannersDismissMutationKey() {
  return ['api', '/api/v1/banners.dismiss', 'POST'] as const
}

export function getPostApiV1BannersDismissMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['banners.dismiss']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['banners.dismiss']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1BannersDismissMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['banners.dismiss']['$post']>) {
      return parseResponse(client.api.v1['banners.dismiss'].$post(args, options))
    },
  })
}

export function createPostApiV1BannersDismiss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['banners.dismiss']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['banners.dismiss']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1BannersDismissMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PushGetQueryKey(
  args: InferRequestType<(typeof client.api.v1)['push.get']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/push.get', keyArgs] as const
}

export function getApiV1PushGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['push.get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushGetQueryKey>
  >({
    queryKey: getApiV1PushGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['push.get'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1PushGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['push.get']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PushGetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PushGetQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PushTokenMutationKey() {
  return ['api', '/api/v1/push.token', 'POST'] as const
}

export function getPostApiV1PushTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.token']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['push.token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PushTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['push.token']['$post']>) {
      return parseResponse(client.api.v1['push.token'].$post(args, options))
    },
  })
}

export function createPostApiV1PushToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.token']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['push.token']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PushTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteApiV1PushTokenMutationKey() {
  return ['api', '/api/v1/push.token', 'DELETE'] as const
}

export function getDeleteApiV1PushTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.token']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['push.token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1PushTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['push.token']['$delete']>) {
      return parseResponse(client.api.v1['push.token'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1PushToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['push.token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['push.token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1PushTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1PushInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['push.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/push.info', keyArgs] as const
}

export function getApiV1PushInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['push.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushInfoQueryKey>
  >({
    queryKey: getApiV1PushInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['push.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1PushInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['push.info']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1PushInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1PushInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1PushTestMutationKey() {
  return ['api', '/api/v1/push.test', 'POST'] as const
}

export function getPostApiV1PushTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.test']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['push.test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PushTestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['push.test']['$post']>) {
      return parseResponse(client.api.v1['push.test'].$post(args, options))
    },
  })
}

export function createPostApiV1PushTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.test']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1)['push.test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1PushTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

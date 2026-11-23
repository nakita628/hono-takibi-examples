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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1BannersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/banners/:id', keyArgs] as const
}

export function getApiV1BannersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BannersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.banners[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1BannersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.banners)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1BannersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.banners)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BannersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BannersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.banners[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1BannersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.banners.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/banners', keyArgs] as const
}

export function getApiV1BannersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.banners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1BannersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.banners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Banners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.banners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
          >,
          ReturnType<typeof getApiV1BannersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.banners.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1BannersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1BannersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.banners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1BannersDismiss<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiV1BannersDismissMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PushGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.get']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/push.get', keyArgs] as const
}

export function getApiV1PushGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.get']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PushGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['push.get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PushGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.get']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1PushGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.get']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PushGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['push.get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PushToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['push.token']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['push.token']['$post']>,
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
  const mutationDefaults = getPostApiV1PushTokenMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteApiV1PushToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiV1PushTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1PushInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/push.info', keyArgs] as const
}

export function getApiV1PushInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PushInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['push.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PushInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['push.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1PushInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['push.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PushInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PushInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['push.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PushTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['push.test']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['push.test']['$post']>,
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
  const mutationDefaults = getPostApiV1PushTestMutationOptions<TError, TOnMutateResult>(
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

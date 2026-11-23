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

export function getApiV1ClipsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clips.$get>>,
) {
  return ['api', '/api/v1/clips', toValue(args)] as const
}

export function getApiV1ClipsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clips.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clips.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV1Clips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.clips.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
          >,
          ReturnType<typeof getApiV1ClipsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ClipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clips.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1ClipsMutationKey() {
  return ['api', '/api/v1/clips', 'POST'] as const
}

export function getPostApiV1ClipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.clips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.clips.$post>) {
      return parseResponse(client.api.v1.clips.$post(args, options))
    },
  })
}

export function usePostApiV1Clips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.clips.$post>,
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
  const mutationDefaults = getPostApiV1ClipsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1ClipsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>>,
) {
  return ['api', '/api/v1/clips/:id', toValue(args)] as const
}

export function getApiV1ClipsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1ClipsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.clips[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1ClipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getApiV1ClipsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClipsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1ClipsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.clips[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1ClipsIdMutationKey() {
  return ['api', '/api/v1/clips/:id', 'PUT'] as const
}

export function getPutApiV1ClipsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ClipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>) {
      return parseResponse(client.api.v1.clips[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1ClipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1ClipsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiV1ClipsIdMutationKey() {
  return ['api', '/api/v1/clips/:id', 'DELETE'] as const
}

export function getDeleteApiV1ClipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>) {
      return parseResponse(client.api.v1.clips[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1ClipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1ClipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1DirectUploadsQueryKey() {
  return ['api', '/api/v1/direct_uploads'] as const
}

export function getApiV1DirectUploadsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiV1DirectUploadsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.direct_uploads.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1DirectUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>
            >
          >,
          ReturnType<typeof getApiV1DirectUploadsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectUploadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiV1DirectUploadsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.direct_uploads.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1MediasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.medias.$get>>,
) {
  return ['api', '/api/v1/medias', toValue(args)] as const
}

export function getApiV1MediasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.medias.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.medias.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1Medias<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.medias.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
          >,
          ReturnType<typeof getApiV1MediasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.medias.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1MediasMutationKey() {
  return ['api', '/api/v1/medias', 'POST'] as const
}

export function getPostApiV1MediasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.medias.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MediasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.medias.$post>) {
      return parseResponse(client.api.v1.medias.$post(args, options))
    },
  })
}

export function usePostApiV1Medias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.v1.medias.$post>,
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
  const mutationDefaults = getPostApiV1MediasMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiV1MediasIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>>,
) {
  return ['api', '/api/v1/medias/:id', toValue(args)] as const
}

export function getApiV1MediasIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1MediasIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.medias[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1MediasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1MediasIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediasIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1MediasIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.medias[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV1MediasIdMutationKey() {
  return ['api', '/api/v1/medias/:id', 'PUT'] as const
}

export function getPutApiV1MediasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MediasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>) {
      return parseResponse(client.api.v1.medias[':id'].$put(args, options))
    },
  })
}

export function usePutApiV1MediasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>,
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
  const mutationDefaults = getPutApiV1MediasIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiV1MediasIdMutationKey() {
  return ['api', '/api/v1/medias/:id', 'DELETE'] as const
}

export function getDeleteApiV1MediasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1MediasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>) {
      return parseResponse(client.api.v1.medias[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1MediasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1MediasIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1WebhookSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>>,
) {
  return ['api', '/api/v1/webhook_subscriptions', toValue(args)] as const
}

export function getApiV1WebhookSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhookSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhook_subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WebhookSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getApiV1WebhookSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhookSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhookSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhook_subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV1WebhookSubscriptionsMutationKey() {
  return ['api', '/api/v1/webhook_subscriptions', 'POST'] as const
}

export function getPostApiV1WebhookSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WebhookSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>) {
      return parseResponse(client.api.v1.webhook_subscriptions.$post(args, options))
    },
  })
}

export function usePostApiV1WebhookSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>,
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
  const mutationDefaults = getPostApiV1WebhookSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1WebhookSubscriptionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>
  >,
) {
  return ['api', '/api/v1/webhook_subscriptions/:id', toValue(args)] as const
}

export function getApiV1WebhookSubscriptionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1WebhookSubscriptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.webhook_subscriptions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1WebhookSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1WebhookSubscriptionsIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhookSubscriptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1WebhookSubscriptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.webhook_subscriptions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV1WebhookSubscriptionsIdMutationKey() {
  return ['api', '/api/v1/webhook_subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1WebhookSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WebhookSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.webhook_subscriptions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiV1WebhookSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteApiV1WebhookSubscriptionsIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

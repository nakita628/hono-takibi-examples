import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWebhookKey() {
  return ['webhook'] as const
}

export function getWebhookLogsQueryKey(args: InferRequestType<typeof client.webhook.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/logs', keyArgs] as const
}

export function getWebhookLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhookLogsQueryKey>
  >({
    queryKey: getWebhookLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhookLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.logs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.logs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookLogsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhookWIdServiceIdMutationKey() {
  return ['webhook', '/webhook/w/:id/:serviceId', 'POST'] as const
}

export function getPostWebhookWIdServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookWIdServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>,
    ) {
      return parseResponse(client.webhook.w[':id'][':serviceId'].$post(args, options))
    },
  })
}

export function usePostWebhookWIdServiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookWIdServiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getWebhookWebhooksQueryKey(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/webhooks', keyArgs] as const
}

export function getWebhookWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookWebhooksQueryKey>
  >({
    queryKey: getWebhookWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useWebhookWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookWebhooksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostWebhookWebhooksMutationKey() {
  return ['webhook', '/webhook/webhooks', 'POST'] as const
}

export function getPostWebhookWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.webhook.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook.webhooks.$post>) {
      return parseResponse(client.webhook.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhookWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.webhook.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getWebhookWebhooksIdQueryKey(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/webhooks/:id', keyArgs] as const
}

export function getWebhookWebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhookWebhooksIdQueryKey>
  >({
    queryKey: getWebhookWebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook.webhooks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWebhookWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getWebhookWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseWebhookWebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhookWebhooksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getWebhookWebhooksIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteWebhookWebhooksIdMutationKey() {
  return ['webhook', '/webhook/webhooks/:id', 'DELETE'] as const
}

export function getDeleteWebhookWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']>) {
      return parseResponse(client.webhook.webhooks[':id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhookWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWebhookWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhookWebhooksIdMutationKey() {
  return ['webhook', '/webhook/webhooks/:id', 'PATCH'] as const
}

export function getPatchWebhookWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhookWebhooksIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']>) {
      return parseResponse(client.webhook.webhooks[':id'].$patch(args, options))
    },
  })
}

export function usePatchWebhookWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWebhookWebhooksIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhookWebhooksIdExecuteServiceIdMutationKey() {
  return ['webhook', '/webhook/webhooks/:id/execute/:serviceId', 'POST'] as const
}

export function getPostWebhookWebhooksIdExecuteServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookWebhooksIdExecuteServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']
      >,
    ) {
      return parseResponse(
        client.webhook.webhooks[':id'].execute[':serviceId'].$post(args, options),
      )
    },
  })
}

export function usePostWebhookWebhooksIdExecuteServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookWebhooksIdExecuteServiceIdMutationOptions<
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

export function getPostWebhookWebhooksIdXServiceIdMutationKey() {
  return ['webhook', '/webhook/webhooks/:id/x/:serviceId', 'POST'] as const
}

export function getPostWebhookWebhooksIdXServiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookWebhooksIdXServiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>,
    ) {
      return parseResponse(client.webhook.webhooks[':id'].x[':serviceId'].$post(args, options))
    },
  })
}

export function usePostWebhookWebhooksIdXServiceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWebhookWebhooksIdXServiceIdMutationOptions<
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

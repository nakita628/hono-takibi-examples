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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NotificationsWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.notifications.webhooks.$get>>,
) {
  return ['v1', '/v1/notifications/webhooks', toValue(args)] as const
}

export function getV1NotificationsWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.notifications.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications.webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.notifications.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NotificationsWebhooksMutationKey() {
  return ['v1', '/v1/notifications/webhooks', 'POST'] as const
}

export function getPostV1NotificationsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.notifications.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notifications.webhooks.$post>) {
      return parseResponse(client.v1.notifications.webhooks.$post(args, options))
    },
  })
}

export function usePostV1NotificationsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.notifications.webhooks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.notifications.webhooks.$post>,
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
  const mutationDefaults = getPostV1NotificationsWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getV1NotificationsWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>
  >,
) {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', toValue(args)] as const
}

export function getV1NotificationsWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksWebhookIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NotificationsWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV1NotificationsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NotificationsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v1.notifications.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1NotificationsWebhooksWebhookId<
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
                    ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1NotificationsWebhooksWebhookIdMutationOptions<
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

export function getPatchV1NotificationsWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchV1NotificationsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NotificationsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
    ) {
      return parseResponse(client.v1.notifications.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function usePatchV1NotificationsWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
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
  const mutationDefaults = getPatchV1NotificationsWebhooksWebhookIdMutationOptions<
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

export function getV1NotificationsWebhooksWebhookIdEventTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
    >
  >,
) {
  return ['v1', '/v1/notifications/webhooks/:webhook_id/event-types', toValue(args)] as const
}

export function getV1NotificationsWebhooksWebhookIdEventTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksWebhookIdEventTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications.webhooks[':webhook_id']['event-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksWebhookIdEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksWebhookIdEventTypesQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksWebhookIdEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksWebhookIdEventTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications.webhooks[':webhook_id']['event-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NotificationsWebhooksLookupQueryKey() {
  return ['v1', '/v1/notifications/webhooks-lookup'] as const
}

export function getV1NotificationsWebhooksLookupQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1NotificationsWebhooksLookupQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksLookupQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1NotificationsWebhooksLookupQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications['webhooks-lookup'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NotificationsWebhooksLookupMutationKey() {
  return ['v1', '/v1/notifications/webhooks-lookup', 'POST'] as const
}

export function getPostV1NotificationsWebhooksLookupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksLookupMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.notifications['webhooks-lookup'].$post(undefined, options))
    },
  })
}

export function usePostV1NotificationsWebhooksLookup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$post']>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostV1NotificationsWebhooksLookupMutationOptions<
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

export function getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
    >
  >,
) {
  return ['v1', '/v1/notifications/webhooks-lookup/:webhook_lookup_id', toValue(args)] as const
}

export function getV1NotificationsWebhooksLookupWebhookLookupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksLookupWebhookLookupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks-lookup/:webhook_lookup_id', 'DELETE'] as const
}

export function getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1NotificationsWebhooksLookupWebhookLookupId<
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
                    ReturnType<
                      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationOptions<
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

export function getPostV1NotificationsVerifyWebhookSignatureMutationKey() {
  return ['v1', '/v1/notifications/verify-webhook-signature', 'POST'] as const
}

export function getPostV1NotificationsVerifyWebhookSignatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsVerifyWebhookSignatureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
    ) {
      return parseResponse(client.v1.notifications['verify-webhook-signature'].$post(args, options))
    },
  })
}

export function usePostV1NotificationsVerifyWebhookSignature<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
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
  const mutationDefaults = getPostV1NotificationsVerifyWebhookSignatureMutationOptions<
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

export function getV1NotificationsWebhooksEventTypesQueryKey() {
  return ['v1', '/v1/notifications/webhooks-event-types'] as const
}

export function getV1NotificationsWebhooksEventTypesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1NotificationsWebhooksEventTypesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications['webhooks-event-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksEventTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1NotificationsWebhooksEventTypesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications['webhooks-event-types'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NotificationsWebhooksEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>
  >,
) {
  return ['v1', '/v1/notifications/webhooks-events', toValue(args)] as const
}

export function getV1NotificationsWebhooksEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications['webhooks-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications['webhooks-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1NotificationsWebhooksEventsEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
  >,
) {
  return ['v1', '/v1/notifications/webhooks-events/:event_id', toValue(args)] as const
}

export function getV1NotificationsWebhooksEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1NotificationsWebhooksEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.notifications['webhooks-events'][':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1NotificationsWebhooksEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1NotificationsWebhooksEventsEventIdQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1NotificationsWebhooksEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.notifications['webhooks-events'][':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1NotificationsWebhooksEventsEventIdResendMutationKey() {
  return ['v1', '/v1/notifications/webhooks-events/:event_id/resend', 'POST'] as const
}

export function getPostV1NotificationsWebhooksEventsEventIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksEventsEventIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.notifications['webhooks-events'][':event_id'].resend.$post(args, options),
      )
    },
  })
}

export function usePostV1NotificationsWebhooksEventsEventIdResend<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
          >,
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
  const mutationDefaults = getPostV1NotificationsWebhooksEventsEventIdResendMutationOptions<
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

export function getPostV1NotificationsSimulateEventMutationKey() {
  return ['v1', '/v1/notifications/simulate-event', 'POST'] as const
}

export function getPostV1NotificationsSimulateEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['simulate-event']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsSimulateEventMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
    ) {
      return parseResponse(client.v1.notifications['simulate-event'].$post(args, options))
    },
  })
}

export function usePostV1NotificationsSimulateEvent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.notifications)['simulate-event']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
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
  const mutationDefaults = getPostV1NotificationsSimulateEventMutationOptions<
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
